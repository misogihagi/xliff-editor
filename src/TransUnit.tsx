import type { JSXElement } from 'solid-js';

import { Text,Box,Textarea,Badge,Divider } from "@hope-ui/solid"

interface Props{
  index:number
  id:string
  source: JSXElement
  target: JSXElement
}

export default function TransUnit(props:Props) {
  return (
    <Box>
      <Box>
       <Text size="2xl">
       {props.index}. (ID: {props.id})
        </Text>
      </Box>
      <Divider variant="dashed"/>
      <Box>
        <Box>
          <Badge colorScheme="success">source</Badge>
        </Box>

        {props.source}
      </Box>
      <Divider variant="dashed"/>
        <Badge colorScheme="success">target</Badge>
      <Textarea placeholder="edit me!" variant="unstyled">
        {props.target}
      </Textarea>
    </Box>
  )
}  
