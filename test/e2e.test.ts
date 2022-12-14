import { test,expect } from '@playwright/test';

const expects = [`•  困憊悪魔のパンデモニカ  •
地獄お客様窓口担当、パンデモニカと申します。
ご用件は何でしょうか？
地獄を出て家でイロイロするぞ。
代わりに俺がお前の担当になってやろうか？
生きて地獄から帰れるとでも？なんと妄想甚だしいことでしょう。
パンデモニカは君の顔に手をやり、手慣れた手つきで首をへし折った。
ありがたい申し出です。そろそろコーヒーを飲みたくて。
アレがないと自分が保てなくなるんです。`,
`•  大いなる蠅のベルゼブブ  •
まだ悪魔の娘を見つけていないのか。
ヒントが欲しいのに聞く相手がいないのは辛いものだな。
吾輩が可愛いのは承知の上だが、ナレーターの務めがあるのでね。
ハーレムに加えるにふさわしい娘を仲間に加えれば、何か聞き出せるやもしれんな。`,
`•  好色悪魔のモデウス  •
ふたりきり、になっちゃった。
だな。質問は受け付けない。
時間がないんだ。ハーレム作りで忙しくてな。
そんなこと言って……どうせ逃げちゃうんでしょ。
念のため、膝を折っておくね。
どこからともなくスレッジハンマーを取り出したモデウスは、もはや可愛い悪魔とは言えなかった。
悪魔のハーレム？おばかなのかな……みんなキミをズタズタにしそうだし、ついてってあげる。`,
`•  困憊悪魔のパンデモニカ  • 
一緒に旅をするのですから、私も仕事をした方がよろしいですね。
地獄を探索するにあたって、意思が必要だということはご存知ですか？
針山を通る際は2倍の意思を消費します。
あまり針に時間をかけないことがカギとなるでしょう。
地獄お客様窓口をご利用していただきありがとうございました。
今回のサービスに対して、10段階で評価していただけますか？
ご評価ありがとうございました。今後ともよろしくお願い申し上げます。
おお……10点満点は初めてです……`,
`•  三つ子悪魔のケルベロス  •
人間？ホントに人間？ねえね、ボクたちをつれてって。
決まりだ。何も聞かんぞ。
ずいぶん簡単だな。ちょっと聞きたいんだが。
やった！ついに！人間界を堕落させるトキが来たんだね！
地獄の門をくぐるには人間が要るんだ。別に一部でいいんだけどね。
鳴き声をあげながらケルベロスたちが君にとびかかる。あまりの可愛さに君の心肺は活動を停止……死んだのだ。`,
`•  好色悪魔のモデウス  •
•  困憊悪魔のパンデモニカ  •
ヒントぉ？カンタンだよー。パズルはぜーんぶスキップしちゃお。サクッと女の子ゲットして、はやくハーレムでいちゃいちゃしよー。 
モデウスのご無礼をお許しください。普通の悪魔はみなあのようなものなのです。罪を犯す欲求は血に刻まれ、抗うのは困難です。
パズルですが……あまりアンデッドに時間をかけなければ大丈夫ですよ。

`,
`•  毒舌悪魔のマリーナ  •
あーまた能天気な馬鹿が来たか……初めて見るアホ面だな。
何しに来たの？
COOPキャンペーンの実績を取る相手を探している。
たまらんな。もっと罵ってくれないか？
それって……PCゲーのこと？アンタがターン制 シミュレーションゲームやるってならいいけど。
また変態マゾ筋肉のお出ましか。サイコーだね。
マリーナが空を切ったかと思うと、君の頸動脈から赤いものが噴き出した。`,
`•  困憊悪魔のパンデモニカ  •
•  三つ子悪魔のケルベロス  •
今回のパズルは特に話すことはなさそうですね。
もしかして話がしたかったんですか？
ねえね、匂いしない？オレンジ、ベリーに……ウォトカ？
間違いないよ、きっとマリーナだ。
あの子に友だちはいないけど、ご主人なら仲良くなれるかもだよ。
みんなでいっしょに遊べばきっと楽しいよ！わんわん！`,
`•  性悪悪魔のズドラーダ  •
よお。ハーレム作ってんだろ。ウチも入るわ。
待て、嫌な予感がする。
もうハーレムではない。ターン制シミュ同好会だ。
陰キャか？また来世な。
視界が揺らめいたかと思うと、肋骨の間にナイフが埋まっていることに気づく。君の冒険は終わった。
残念でしたー。もう入っちゃったもんねー。止められるもんなら止めてみな。`,
`•  毒舌悪魔のマリーナ  •
•  三つ子悪魔のケルベロス  •
はあ？あんたネクロダンサーやったことないの？
針が出るタイミングが気に入らなかったら、石でも蹴ってりゃいいじゃん。
すごい煙の臭いがするよ！ズドラーダだ！
うげぇ……勘弁してよ……`,
`•  探求天使のアザゼル  •
なんとまあ！生者が地獄で何をしているのでありますか？本官、初めて見ましたよ。
悪魔を探している。
天使を探している。
ここにはあまりいないでありますよ。 ご安心を、本官が案内するであります。
ささ、捕まってください。
嘘をついて天国に行けるだなんて誰が予想しただろう。
ともあれ、もう悪魔のハーレムは作れそうにない。
おお、貴兄もでありますか。さしずめ現代罪や、悪魔学の研究でありますね？自分も調査に加わるであります。`,
`•  性悪悪魔のズドラーダ  •
•  毒舌悪魔のマリーナ  •
•  困憊悪魔のパンデモニカ  •
ウチにヒント聞くなよ。オタクじゃねんだし。
あっ、針山あんじゃん。死んでこいよ。面白そーだし。
姉貴は昔っからこんな調子で……なんで引き入れたんだ……
ホントだよ。何考えてんだ？
マリっちなんかも呼じゃってサァ。
こいつぼっちすぎて、いっつも1人でキモオタゲームしてるんだわ。
黙っててくんない？
ゲームしてっとき、どんだけうっさいか知ってっか？
あん時ぁ……
アタシかアイツを殺せ。頼む。早く。
両方殺す
自殺する
放っておきましょう。そのうち慣れますよ。
ちょっと何しようとしてるんですか？あっ！やめ――
もううんざりだ。ズドラーダの言う通り針山に突っ込んで自殺した。`,
`•  激ヤバ悪魔のジャスティス  •
よっ！アンタあのパズル解いちまったのか？すげぇな！
だいぶてこずったな。ハーレムに入らないか？
メニューからスキップしただけだ。ハーレムに入るか？
聞くまでもないだろ？パーティーとあらば参加しないわけにはいかないしな。
もしオレも解けって言われたらそうするだろうな。
よし、じゃあ行こう。賑やかな方が楽しいだろ？`,
`•  探求天使のアザゼル  •
•  好色悪魔のモデウス  •
なかなか奇をあてらったパズルでありますね。突破するには試行錯誤が必要そうであります。
どうぞゆっくり解いてほしいであります。モデウス殿からかなり歪んだ恋愛論をご教授していただいているのでありますよ。
……乱暴することもあるよね。だからほどほどがいちばん。愛しすぎるとみんな死んじゃうから。
なんともすごい話であります。もっと話していただけませんか？詳細を知りたいであります。`,
`•  地獄CEOのルシファー  •
やっと会えたな。全ての試練を突破し、貴様は己の価値を証明した。
魂を余に捧げると誓えば、奴隷として寵愛してやろう。
はい、女王様！
結構だ。それよりハーレムに入らないか？
健気なやつめ……
君が跪くと、ルシファーは君の額に口づけをした。魂が抜け出て行くのを感じる。
何を戯れるか、貴様は悪魔を奴隷にできるとでも考えているのか？
俺をご主人様と呼べ。話す前に伺いを立てろよ。
コーヒー、ターン制シミュ、チョコパンケーキがあるぞ。
立場というものを理解していないようだな。
ルシファーが手を振ったかと思うと、君の血液は酢に変わった。何を言っているのかわからないと思うが、恐ろしいものの片鱗を味わった。
何だと？正気か？地獄の奥底まで来てパンケーキを食わせようと言うのか？
余の好物がパンケーキで良かったな。
余を納得させようとは……貴様のハーレムは案外楽しめそうだな。`,
`•  ？？？  •
•  最高検事総長ジャッジメント  •
このまま逃げられるとでも思ったか？
これで終わったとでも思ったか？
冷たい鎖が君の首筋を撫でる。血肉はおろか、骨まで溶かす炎が後に続く。
幾千もの貴様を焼きつくしたような気がするが、炎が消えても……まだ俺の前に立つか。
だが捕まえたぞ慮外者め！
簡単に諦めてくれるなよ。
俺たちはこれから長い永い時を共に過ごすのだからな。
原罪執行装置起動！苦しんでもらうぞ業人め！`,
`•  最高検事総長ジャッジメント  •
•  困憊悪魔のパンデモニカ  •
•  三つ子悪魔のケルベロス  •
•  地獄CEOのルシファー  •
執行装置の具合はどうだ？慮外者め。
降参すれば貴様を消し去ってやるぞ！
だめー！諦めないで！まだボクたちを出してないでしょ！
コーヒーだけが楽しみで来た悪魔もいるんですよ。
希望を捨てろ！運命は既に定まっている！
やあジャッジメント。この男は私のものだ。あまり傷つけないでほしいんだがね。
外野は黙っていろ！本当の地獄を見せてやる！`,
`•  最高検事総長ジャッジメント  •
•  地獄CEOのルシファー  •
•  激ヤバ悪魔のジャスティス  •
•  探求天使のアザゼル  •
貴様を縛る鎖はみな、貴様が持ち込んだもので作った。
エゴ、欲求、退廃、己の禍で鞭打つがいい！
十分だ！最高検事総長、退廷を命じる！
司法は権力者の圧力に屈しない！
いいぞぅジャッジメント！ノリに乗ってるな！
本官も続けてほしいであります。これをレポートにすれば次期評価はA+待ったなしであります。
余は地獄の女王だぞ！なぜ誰も話を聞かんのか！？`,
`•  最高検事総長ジャッジメント  •
•  好色悪魔のモデウス  •
•  毒舌悪魔のマリーナ  •
•  性悪悪魔のズドラーダ  •
枷から逃れられようとも、本気で思っているのか？
まだ分からんようなら教えてやろう……希望は失望を生み、失望は絶望に繋がると！
絶望の鎖は楽しいぞ。
こじらせたマリっちみてーだ。オタ仲間に目をつけられたんじゃ、アイツも終わりだな。
自分の運の悪さを知ってるくせにネクロポリスに挑んでるみたいだ。
こんなことならちゃんと飼ってあげればよかった……
いいぞ！後悔しろ！生まれついた日から今日までをなぁ！
君の髪は綺麗だな。
その衣装デザイン最高！10点満点！
黙れええええええええ！貴様の運命は変えられん！
そうだな。だから今伝えるべきだと思った。
爪もマジでイカしてるぞ！
そう？そうなのか？うん、ありがと！じゃあいくぞ？
さあ苦しみに悶えるがいい！`,
`•  最高検事総長ジャッジメント  •
本当の苦しみを前に、何か言うことはあるか？
もっと早く君を見つけられればよかったと後悔している。
君に罰せられるのなら、俺の罪も価値あるものとなった。
下らない口説き文句はやめろ！やりにくいんだよ！
そうか、すまん。だが、君の目に見とれてな。
君の髪がどれほど素晴らしいか話していいか？
もー。俺だってこんなことやりたくないんだ。けど契約は契約だからさ。お前の破滅は避けられないってわけ。
だけど……お前が地獄から出て行って邪魔さえしなければ、執行を数年遅らせることができる。
俺たちの運命はひとつ。お前はいつか苦しんで死ぬ。けど今である必要はない……
運が良かったな。今すぐ俺の前から消え失せろ！
……
…………
………………
消えろと言ったんだ！早く行け！
まさか、ハーレムに誘うだなんてバカなこと言うなよ！
不死身の苦しみの化身と一緒に暮らすだと？ 何度もいたぶって殺した相手と？
他に道はない。
大丈夫、俺のハーレムにはもっとひどいのもいる。
おい、本気で言ってるのか？
例外中の例外だが、どうなるか見届けてやろう。ものは試しと言うしな。`,
`•  地獄CEOのルシファー  •
•  激ヤバ悪魔のジャスティス  •
クリアできぬと言うのならメニューを開いてスキップすればよかろうに。このまま座っていてはパンケーキがおあずけではないか。
この散らかりようを見ろ、もう誰も地獄の門をくぐっていないようだ……
しかし、お前はどうやってここまで来たんだ？
こいつは奇跡を起こせるんだよ。実際、あんたをオフィスから連れ出しただろ。
確かにな。奴隷の申し出を断ったのは貴様が初めてだ。
実はこいつの奴隷になるんじゃないかって期待してたんだけどな。
ジャスティス……無益な殺生をさせるようなことは言うものではないぞ。
おいおい、怒るなって。あんたもきっとメイドさんごっこが気に入ると思うぞ。`,
`そして、君の旅は終わりを迎えた。
地獄から娘たちを連れ出したのだ。
それ以来、君は地獄から連れし者――ヘルテイカーと呼ばれるようになる。
しかし、暮らしは楽なものではなかった。
短い間にもかかわらず、苦難はどっと押し寄せてきた。
しかし、人生はどう生きようと苦しみに満ちている。
なら、今のうちに楽しんだ方がいいかもしれない。`,
`•  探求天使のアザゼル  •
•  ヘルテイカー  •
パンケーキだ。
本官がここに来てどれくらいになるでありますか？
数週間だな。
まるで永遠みたいな気がして……
見てきたものや……
してきたことを……
論文に全部ありのままを書いても、誰にも信じてもらえなさそうであります。荒唐無稽にも限度があるであります。
気の毒に……
まだ本官の研究は表層を触っただけにすぎません。今日は自分と研究するのはいかがでありますか？
根を詰めすぎだ。パンケーキを食べなさい。`,
`•  三つ子悪魔のケルベロス  •
•  ヘルテイカー  •
パンケーキだ。
失敗した。失敗した。失敗した。
またお隣さんに迷惑かけたのか。今度は何をした？
……
なんで警察まで来ているんだ？`,
`•  警察  •
•  ヘルテイカー  •
警察だ！ドアを開けろ。
開ける。(ゲーム終了)
開けない。
そこにいるのは分かっているぞ！ドアを開けろ！
パンケーキいかがですか。
おお、どうも。ちょっと聞きたいことがあるんだが。
……
こうしてヘルテイカーの物語は幕を閉じる。
ナレーションは旧き佳きベルゼブブがお送りした。
なんとも馬鹿げた話であるな。
正直……忌々しいとも思っている。
ろくでもない連中のろくでもない話だ。
だがそれでも……君に楽しんでもらえたなら幸いだよ。
笑えるだろう？
それでは……この古蠅に付き合ってくれてありがとう。
また会う日まで。
THE END`,
`•  激ヤバ悪魔のジャスティス  •
•  ヘルテイカー  •
パンケーキだ。
美味いっ！質問いいか？
構わない。
女の子たちから聞いたんだが、なんでアンタずっとサングラスかけてるんだ？
それはお互いさまだろう。
オレかい？「めくら」ってヤツだよ。
こっちは話したんだ。アンタの話を聞かせてもらおうか？
昔……
ちょっと待て、女の子たちと賭けてんだ。
レーザヴィジョン持ってないか？そしたら10ドル損しなくてすむ。

`,
`•  地獄CEOのルシファー  •
•  ヘルテイカー  •
パンケーキが焼けたか、さっそくいただこう。
うーん、すっっっっっっごくおいしい……
手伝ってくれてありがとう。
そう言うな、余にできることをしたまでだ。
しかし、どうやったらそんなに生地を薄くできるんだ？ まだわからなくてな。
空中で生地を回すのもだ。何か魔術を使っていると思ったんだが。
経験だ。
なるほどな。みんなにも食わせてやるといい。`,
`•  毒舌悪魔のマリーナ  •
•  ヘルテイカー  •
パンケーキだ。
悪魔がプレイするに値するターン制シミュレーションゲームを探すのがどれだけ難しいか分かるか？
最近の人間が作んのはどいつもこいつも中途半端な続編や駄作ばっかりなんだよな。
とりあえずプレイすればいいじゃないか。
結局それに落ち着くんだよな。
だからアタシたちには酒が要るんだ。`,
`•  好色悪魔のモデウス  •
•  ヘルテイカー  •
パンケーキだ。
……
それは……ラブコメか？
はじめて「恋」ってかんじがわかったかもしんない。胸がきゅんきゅんしてとまらないの。
もしかしてあたし、ずっとまちがってたのかな？
ふむ、ならデートにでも行くか？
そんなヘンタイちっくなこと、よく言えちゃうね！`,
`•  困憊悪魔のパンデモニカ  •
•  ドS悪魔のパンデモニカ  •
•  ヘルテイカー  •
パンケーキにコーヒーだ。
……
よし！これで「困憊悪魔」とはおさらばです。
また淹れ過ぎていないか？
いえいえ……結構なお点前ですよ。実際美味しいです。今回はフィルターもちゃんと使えていますし。
頑張ってくださいよ、このままじゃ折れてない指を探す方が大変になりますから。
はい……
別に治してもらってもいいんですよ。ここの医者はなかなか優秀ですし。
次は午後5:15にダブルエスプレッソでいいんですよね？
覚えるのは私の仕事じゃなくて貴方の仕事ですよ。

`,
`•  最高検事総長ジャッジメント  •
•  ヘルテイカー  •
パンケーキだ。
慮外者が我らの領地を汚さんとしている！処断するか？
問題ない。俺が対応しよう。
そっか、頼むわ。`,
`•  性悪悪魔のズドラーダ  •
•  ヘルテイカー  •
パンケーキだ。
ふーん。でも火ィ点けたいからサ。
ここは禁煙だぞ。
だからァ？お仕置きするんですカァ？したけりゃすれば？ウチ悪い子だしィ。
楽しんでるみたいでよかった。
くたばれオッサン。`,
`•  地獄CEOのルシファー  •
•  激ヤバ悪魔のジャスティス  •
•  大いなる蠅のベルゼブブ  •
•  ヘルテイカー  •
何だこれは？ついにポータルを開けたのか？
ご機嫌よう小さきものよ。吾輩はベルゼブブ。
君は選ばれし者というわけか。地獄の王と。
まあ……吾輩は何でもない、ただの下僕にすぎぬよ。
このポータルをくぐり、玉座につくといい。
ちょっと、このポータル一方通行じゃないか？
くそっ。
ベル！貴様の面なぞ二度と見とうなかった。
同感だよ。愛しのルシちゃん。
友だちか？
ベルゼブブの言う事なぞ気にするな。あいつは追放者だ。
あまりに危険だから地獄の最深部に幽閉していた。
ジャスティスに聞いてみろ。当時の最高検事総長だ。
ありゃ凄かったな。アンタにもあの戦いを見せてやりたかった。
一度ポータルの向こうへ落ちれば、貴様の魂も囚われてしまう。そこに残るのは狂気だけだぞ。
永いこといるが、発狂ひとつしないよ。まったくがっかり残念だ。
ちょっとでも狂気があれば楽しいのに。ここは闇と孤独が占めるばかりだ。
あんな奴は放っておけ。ご飯を食べたらポータルは閉じてしまおう。
いつかは出てやるぞ。
当方に迎撃の用意あり。`,
`•  大いなる蠅のベルゼブブ  •
自分が虚空に包まれると気づく。
経験したことのない闇が辺りを埋め尽くす。
何か見えるわけではない。感じる。 視覚はとうに機能していない。
急に体調が悪くなった気がする。この世にある あらゆる病に一度にかかったようだ。
だが死なない。ここには死の概念すらない。
羽音が聞こえてくる。何千もの蠅が群がってくる。
気持ちの悪い波が次々と襲い来る。甘い香りに圧倒され、もう耐えられない……
だが、何年もすればやがて愛せるかもしれない。
どういうことだ……
えっ……ええ？
君か？いったいどうして……
……
このようなことになるなど、にわかには信じられない話だよ。
地獄の王だなんてホントに信じた？いやあ、まさか。ならどうして……
いや待て、そんなことはどうだっていい。
ずっとここで立ち往生するばかりにもいくまいて……
きちんと自己紹介をした方がいいな。
吾輩には名前がいくらでもある。 疾病の盟主、腐敗せし獄吏、蠅の女王……
あれ、礼服をどこやっちゃったかな。お客様が来ているのだから、身だしなみを整えないと。
おお、これでよし。これならお互い話もしやすかろう。
どこまで話したっけ？ああ、そうだ……
蠅の女王に深紅の女王とも呼ばれている。お会いできて光栄だよ。
深淵の底へようこそ。どうぞくつろいでくれ。
そうだ！吾輩の城に案内しよう。きっと気に入るはずだ。
うむ、施工から何まで自分でやったんだぞ。闇の素材で ここまでのものができるのかと君もビックリ仰天するに違いない。
深淵の底にいるとどうも趣味が偏ってしまってね。
ああ、そうだ。
何か甘いものはないかな？お菓子がいいな。 悪魔は砂糖に目がなくてね。
チョコレートパンケーキなら。
チョコレートパンケーキなら。
……
今日は人生最高の日かも。
……
ヘルテイカーのお話はこれでおしまい。
ナレーションは旧き佳きベルゼブブがお送りしました。
自己紹介が最後になるとは……どうかご容赦を。
皆まで言うな……これは吾輩の話になるはずではなかった。でも、仕方なかったんだ。
質問があるかもしれないな。これってホントにあった話？とか、ヘルテイカーはどこへ行ったの？とか。
もしかしたらヘルテイカーは君かもしれないな。
深淵の中に何年もいたら忘れるのも無理はない。
もしかしたら君は存在しないとか？
となると吾輩は独り言を並べ立てる憐れな蠅に過ぎぬな。
フフ、謎がある方が魅力的な物語になる。答えは取っておくとしよう。
また会う日まで。
THE END`,
`Japanese version of Helltaker

リスタート [R,  右トリガー]
ヒント [L,  左トリガー]
•  メニュー  •
音楽
効果音
メインメニュー
戻る
パズルをスキップする


-
逃げられない！
ミュート
小
中
大
I. 傲慢の鎖
II. 貪欲の鎖
III. 色欲の鎖
IV. 絶望の鎖

Game by
Łukasz Piskorz (@vanripperart)
Sound Design by
Patryk Karwat (pkaudio.info)
Music Tracks
Apropos, Vitality, Epitomize and Luminescent
from Mittsies (youtube.com/mittsies)
Thanks for playing!

•  古代の碑文  •
禁断の儀式の手順が記されている。
https://kagerou01gata.itch.io/artbook`,
`•  大いなる蠅のベルゼブブ  •
ご機嫌よう小さきものよ。吾輩のことは気にするな。
名はベルゼブブ、旧き佳き隣人だ。

NEW GAME
CHAPTER SELECT
EXIT

ヘルテイカーの旅路をもう一度辿るというのか？ 面白い……
おお、それなら、ナレーターが必要やもしれぬな。
喜んで務めさせてもらおう。
ある朝、君は夢を見た。
悪魔の娘たちでハーレムをつくる夢だ。
まあ、簡単に叶えられる夢ではない。
命を落とすこともありうる。
「悪魔の娘っ子とイチャつけるんだ、俺のタマくらい安いもんだ。」
と君は言い放ち、地獄に降り立った。

何度も何度も挑んだが、まだまだ夢は果て無く遠い。
自分が虚空に包まれると気づく。
[ENTERかAボタン]で続ける。

他に欲しいものでもできたかな？`,
`Chapter I - 困憊悪魔
Chapter II - 好色悪魔
Chapter III - 三つ子悪魔
Chapter IV - 毒舌悪魔
Chapter V - 性悪悪魔
Chapter VI - 探求天使
Chapter VII - 激ヤバ悪魔
Chapter VIII - 地獄CEO
Chapter IX - ジャッジメント
Chapter X - エピローグ
`,
`最初から始めるかな？
それともすきなステージからやる？
導入はいつも通りだ。
主人公が目を覚ます。
頭がおかしくなりそうな、ひどい悪夢だった。
身体も心も、もはや自分のものではない。`,
`•  科学悪魔のロアマスター  •
•  メイド悪魔のルシファー  •
•  ???  •
目覚めたようだな！なかなかハンサムな被験体だねえ。
お前が俺をこうしたのか？どういうことか説明しろ！
人間と悪魔のカンペキなハイブリッドを作っている   ところでね。
次は身体能力をテストしようじゃないか。
ルーシー、フェーズ2に移行しよう。
仰せの通りに、ロアマスター様。`,
`•  科学悪魔のロアマスター  •
•  メイド悪魔のルシファー  •
•  ???  •
次のテストの死亡率はめちゃくちゃ高いぞ。      なあに心配するな。君には期待しているからね。
やめろ！俺を解放しないと真の苦しみを刻んでやるぞ！
データによると第6期の66号らしいじゃないか。     実に縁起がいい。
666。悪魔の力を製造番号にも宿している。キミは    我が試験を合格するにふさわしい被検体というわけだ。
発言許可をよろしいですか？ロアマスター様。
いいともルーシー。どうしたのかな？
66号は昨日死亡しました。こちらは67号になります。
ふむ、我が期待を潰してくれてありがとうルーシー。`,
`•  科学悪魔のロアマスター  •
•  メイド悪魔のルシファー  •
•  被検体67号  •
まだ生きていたのか66号じゃない奴。
震えて待ってろクソ野郎。オモチャごときでオレを   止められると思ったら大間違いだぞ！
ふぅん、あっそ。なんにせよ、お前の生存率は天文学的数字だ。もちろん小さい方のな。冥土の土産に我が秘密を 教えてやるとしよう。
実は我は悪魔ではない。天使だ。
研究の一環で悪魔に紛れ、地獄の最高位にまで至った。
地獄のトップをとって代わるのはビックリするほど   カンタンだったよ。
好奇心をあなどるのはよろしくないと思わないかな、 ルーシー？
……`,
`•  科学悪魔のロアマスター  •
•  被検体67号  •
自分が数多の残虐行為を犯したのは事実だ。しかしこれは科学の名のもとにしたに過ぎないのだよ。
全ての罪を分析し、資料化し、記録すれば……      いつか必ず浄化される……
これが天使と悪魔の違いだよ。我が行いには      確固たる信念がある。
好きなだけ自分語りしてろ悪魔ちゃん。      すぐに首ねじ切ってやるからよ。
よもや天使と信じていないのではないだろうね？
なら輪っかを見せてやろう……             ドコ置いたか忘れちゃったけど。
待てよ……自分は――
まさかまさか！ありえんよ。どこかのポッケにでも   入れっぱなしにしたんだろう。
次の試験はなかなかえげつないぞ。楽しんでくれ。`,
`•  科学悪魔のロアマスター  •
•  メイド悪魔のルシファー  •
•  被検体67号  •
すごい！66号ではないにもかかわらず、これほどの好成績を出せるとは。A+素材待ったなしであります。
メニュー画面でいつでもスキップできるのを忘れたのか？
現代罪の論文を書いていた若い頃を思い出すよ。あの頃はピュアな天使学徒だったなあ。
当然、今やあらゆる罪について徹底的に研究調査を終えているがね。10回はくだらんよ。
あのアマ、偉そーなナリしてますけど、メンタルは   思春期の童貞と変わらないんすよ。
るーしー。我を嘲るなら伺いを立てるよう言ったよね。`,
`•  科学悪魔のロアマスター  •
•  被検体67号  •
なんということだ！信じられん。まさか最終試験にまで達するとは。他の被検体はことごとく脱落したというのに！
こっちにはアップルパイがあるぞ。好物かな？最終試験を合格すれば、好きなだけ食わせてやろう！
他に欲しいものはあるかな？言ってくれれば     何でも用意するぞ！
貴様の宝を全て奪い去ってやる。まずはいけ好かない悪魔メイドからだ。
おお！見る目があるじゃないか！
ルーシーは最高のご褒美になるぞ。保証しよう。
彼女は頭が良いし勤勉だし、週２で我を暗殺しようと  するんだ。
パンケーキの出来栄えについては語るまでもないだろう。
でもキミじゃ彼女をゲットできないんじゃないかな？  はいどうぞ、とあげるわけにはいかないしね。`,
`•  科学悪魔のロアマスター  •
•  メイド悪魔のルシファー  •
•  パイ焼き悪魔のジャスティス  •
•  被検体67号  •
完成した。
ついに研究が実を結んだのだ。
ついに創造による罪を犯すことができたのだ。
おめでたいな。それじゃあアップルパイを       いただくとするか。
アップルパイなんて約束したかなあ？少しエキサイトしたから、ぜーんぶ平らげてしまったよ。
ああ、「平らげた」のはルーシーね。
……
アップルパイ研究員の新規生産を待ってくれないかな。
アップルパイおまちどう！
噂をすれば激ヤバだ。ジャスティスほど良い奴は    どこにもいないと思うよ。
まったくそのとおり。
おいおいよせって。
パイを喉に詰まらせて死んじまえ魔女どもめ！
ほらキミのアップルパイだ。めしあがれ。
ルーシー、彼と私たちにコーヒーを。
被検体67号くん。キミは新型悪魔初の安定版になる。
君からどれだけの知見が得られるか、計り知れないね。
そう、何もかも学ばせてもらうよ。`,
`•  メイド悪魔のルシファー  •
•  被検体67号  •
•  ???  •
これでよし、と。
すっかりハンサムな悪魔に仕上がりましたね。
俺の醜態がそんなに面白いか、小悪魔め。
いえまさか。正直に申し上げただけでして。      大変お似合いですよ。
今の貴方にはお洋服選びですら選択肢はございません。 我らが「天使ちゃん」の所有物なんです。
地獄全てがそうとも言えますね。お恥ずかしい限りです。
いつか絶対に王冠を取り戻してやる……覚えていろ……
して、時来たらば……貴様は余につくか？それともあいつに与するか？
……
あいつは余のことを佳く知っている。         だが貴様はそうではない。
予測できない要素というのは実に都合がいい。
ゆめゆめ忘れることなかれ。
貴様を見ると、あの男のことを思い出すのだ。
あいつはいったいどうしたのだろうな。
THE END`,
`Bonus Chapter - Examtaker
ゴッドモード
苦難を越える
Game by
Łukasz Piskorz (twitter.com/vanripperart)
Sound Design by
Patryk Karwat (pkaudio.info)
Music Tracks
Alchemy, Titanium and Luminescent
from Mittsies (youtube.com/mittsies)
https://kagerou01gata.itch.io/artbook2
-
Thanks for playing!`]

test('test', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.getByRole('button', { name: 'Upload' }).click();
    expects.forEach(text => {
        expect(page.getByText(text)).toBeTruthy()
    });
});