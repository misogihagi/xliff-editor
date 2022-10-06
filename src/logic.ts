import { state,setState } from './App';

export type Unit={
    id:string,
    source:string,
    target:string,
}

function toArr(nodelist:NodeListOf<HTMLElement>){
    return Array.from(nodelist)
}

function parse(data:string){
    const domparser = new DOMParser()
    return domparser.parseFromString(data, 'text/xml') 
}

function createUnits(parsedXML:Document):Unit[]{
    const units=parsedXML.querySelector('body')?.querySelectorAll('trans-unit')

    if(!units)return []
    return toArr(units as NodeListOf<HTMLElement>)
        .map( unit=>({
            id:unit.getAttribute('id') || '',
            source:unit.querySelector('source')?.innerHTML || '',
            target:unit.querySelector('target')?.innerHTML || '',
        } as Unit))
}


export async function load(e:Event):Promise<void>{
    
    const file = (e.target as HTMLInputElement)?.files?.[0];
    if(!file)return;

    const fileReader = new FileReader() ;
    fileReader.readAsText( file ) 
    await new Promise((resolve,reject)=>{
        fileReader.onload = function () {
            if(!fileReader.result)reject('file is empty')
            try {
                const result =fileReader.result as string
                const doc=parse(result)
                setState('xml', doc)
                setState('units',createUnits(doc))
                setState('filename',file.name)
            } catch (error) {
                reject(error)
            }
            resolve('start edit!')
        }
    })
}

function commitXML(newUnits:Unit[]):void{
    if(!state.xml)return;
    state.xml.querySelector('body')?.querySelectorAll('trans-unit')
    const units=state.xml.querySelector('body')?.querySelectorAll('trans-unit')

    if(!units)return ;
    Array.from(units).forEach((unit,i)=>{
        const target=unit.querySelector('target')
        if(!target){
            const t=document.createElement('target')
            t.appendChild(document.createTextNode(newUnits[i].target))
            unit.appendChild(t)
        }else{
            console.log(newUnits)
            target.innerHTML=newUnits[i].target
        }
    })
}

export function save():void{
    if(!state.xml)return;
    const serializer = new XMLSerializer();
    commitXML(state.units)
    const xml = serializer.serializeToString(state.xml);
    const filename='aaaa.xlf'


    const blob = new Blob([xml], {type: 'text/xml'})
    const aTag = document.createElement('a');
    aTag.href = URL.createObjectURL(blob);
    aTag.target = '_blank';
    aTag.download = filename;
    aTag.click();

}
