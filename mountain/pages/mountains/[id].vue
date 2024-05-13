<script setup lang="ts">
import { ref } from 'vue'
// import  mountaincardsmell from '/components/mountain-card-small.vue'

interface mountainsData {
  id: number;
  name: string;
  name2: string;
  height: string;
  image: string;
  register: string;
  locationID: string;
  location: string;
  map: string;
  content: string;
  isEditing?: boolean; 
}

const parentMessage: Ref<mountainsData[]> = ref([
    {
    id: 0,
    name: "玉山主峰",
    name2:"新高山∕摩里遜山",
    height:"3414 公尺",
    image: "/images/img0.jpg",
    register: "要",
    locationID: "10",
    location:"南投縣信義鄉,嘉義縣阿里山鄉,高雄市桃源區",
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14638.942302878684!2d120.94695814436521!3d23.470000744390887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346f210e420ba6d1%3A0x83cb1aa521840d7e!2z546J5bGx!5e0!3m2!1szh-TW!2stw!4v1715148216402!5m2!1szh-TW!2stw",
    content: "玉山主峰位於台灣的中心位置，海拔3952公尺，為台灣群山之首，百岳排名第一，也是東北亞的最高峰。主峰四周有東、南、西、北峰環繞，外圍還有前峰、小南山、南玉山、東小南山、鹿山與北北峰遙相呼應，宛如眾星拱月般，襯托出主峰的王者之尊，壯偉雄奇的山容、絕佳的展望和絢麗的日出景觀，吸引了無數的中外登山客前來攀登，近年來更成為台灣人一生必須完成的三件事之一。"
    },
    {
    id:1,
    name: "雪山主峰",
    name2:"西魯維亞山∕興隆山∕次高山∕哈蓋山∕馬哈馬顏山∕雪翁山",
    height:"3886 公尺",
    image:"/images/img1.jpg",
    register: "否",
    location:"苗栗縣泰安鄉,臺中市和平區",
    locationID: "2",
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14535.764459014796!2d121.2197002448146!3d24.383351795761307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34685f885c8b431f%3A0x76fea57b5437637b!2z6Zuq5bGx!5e0!3m2!1szh-TW!2stw!4v1715148371342!5m2!1szh-TW!2stw",
    content: "雪山標高3886公尺，屬於雪山山脈，為全台灣第二高峰，僅次於玉山山脈的玉山主峰（3952公尺）。在台灣百岳之中，雪山與玉山、秀姑巒山、南湖大山、北大武山合稱「五岳」，為台灣最具代表性的五座高山之一。"
    },
    {
    id:2,
    name: "玉山東峰",
    name2: "台東新高∕天壘峰∕東山∕新高東山∕齊藤峰",
    height:"3869 公尺",
    image:"/images/img2.jpg",
    register: "要",
    locationID: "10",
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14638.759559921273!2d120.95302724436603!3d23.471647994126997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346f2112be34c58d%3A0xed828e330136f2ce!2z546J5bGx5p2x5bOw!5e0!3m2!1szh-TW!2stw!4v1715148418626!5m2!1szh-TW!2stw",
    location:"南投縣信義鄉,嘉義縣阿里山鄉",
    content: "玉山東峰標高3869公尺，日治時期名為東山、新高東山、台東新高，山體岩壁崢嶸，巍峨險要，台灣登山家刑天正稱其為天壘峰，為台灣玉山山脈中的一座高山，為台灣百岳排名第三的高峰，也是台灣百岳名峰中的「十峻」之首，位於玉山主峰東側，歸屬玉山國家公園境內。"
    },
    {
    id:3,
    name: "玉山北峰",
    name2: "斗六新高∕北山∕新高北山∕天駝峰",
    height:"3886 公尺",
    image:"/images/img3.jpg",
    register: "要",
    location:"南投縣信義鄉",
    locationID: "10",
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14636.965929377058!2d120.94916834437379!3d23.48781004153716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346f2139510e2441%3A0x37ffd78f577de1fc!2sBei%20Shan!5e0!3m2!1szh-TW!2stw!4v1715148480953!5m2!1szh-TW!2stw",
    content: "玉山北峰是台灣玉山山脈中的一座山峰，為台灣百岳名峰之一，位於玉山主峰北側，標高3858公尺。日治時期名為北山、新高北山、斗六新高，與玉山北北峰相隔一鞍，狀似駱駝的駝峰，台灣登山家邢天正稱其為天駝峰。日治時期起，峰頂上設有玉山氣象站（標高3844.8公尺），至今仍為台灣海拔最高的建築物。玉山國家公園成立後，玉山北峰劃入被範圍保護。"
    },
    {
    id:4,
    name: "玉山南峰",
    name2: "天龍峰∕玉山天龍峰∕閉鎖曲線峰∕南山∕",
    height:"3844 公尺",
    image:"/images/img4.jpg",
    register: "要",
    location:"高雄市桃源區",
    locationID: "7",
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14640.839396297604!2d120.95153434435704!3d23.452893847130376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346f21bb8e490781%3A0xbc492a82a41edd9a!2z546J5bGx5Y2X5bOw!5e0!3m2!1szh-TW!2stw!4v1715148529984!5m2!1szh-TW!2stw",
    content: "玉山南峰，日治時期名為南山、新高南山。因自主峰遠眺，山稜蜿蜒，酷似遊龍，故又名天龍峰。在某些地圖上會注記為玉山三叉峰、閉鎖曲線峰。玉山南峰為台灣玉山山脈中的一座高山，也是台灣百岳名峰中的「十峻」之一，位於玉山主峰南側約2.6公里處，轄區歸屬為玉山國家公園管理處。"
    },
    {
    id:5,
    name: "秀姑巒山",
    name2: "馬霍拉斯山",
    height:"3805 公尺",
    register: "要",
    image:"/images/img5.jpg",
    location:"南投縣信義鄉,花蓮縣卓溪鄉",
    locationID: "10",
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14635.539598571393!2d121.04973024437999!3d23.500654939477815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346f24bf1aad210d%3A0x9c8561ebf59d9600!2z56eA5aeR5beS5bGx!5e0!3m2!1szh-TW!2stw!4v1715148570389!5m2!1szh-TW!2stw",
    content: "秀姑巒山位處於台灣中央山脈中段最高山彙的中心，標高3805公尺，為中央山脈之首，有二等三角點1691號。在著名的台灣百岳之中，秀姑巒山與玉山、雪山、南湖大山、北大武山合稱「五岳」，為台灣最具代表性的五座高山，氣勢磅礡，雄霸一方。"
    },
    {
    id:6,
    name: "馬博拉斯山",
    name2:"烏拉蒙山∕霧拉門山∕烏拉毛諾山∕烏拉孟山",
    height:"3785 公尺",
    register: "要",
    image:"/images/img6.jpg",
    location:"南投縣信義鄉,花蓮縣卓溪鄉",
    locationID: "10",
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14633.13953161182!2d121.05451024439039!3d23.52225393601291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346f24d88891bac1%3A0x3da1a6ac8407bf94!2z6aas5Y2a5ouJ5pav5bGx!5e0!3m2!1szh-TW!2stw!4v1715148629558!5m2!1szh-TW!2stw",
    content: "馬博拉斯山位於台灣花蓮縣與南投縣交界處，海拔標高3785公尺，隸屬玉山國家公園管轄，為台灣百岳名山的「十峻」之一。中央山脈第二高峰。在當地的布農族中，馬博拉斯山的原本名字是稱作「烏拉孟山」。日治時期，因測繪地圖誤植為馬博拉斯山，此名便沿用至今。（資料來源：wiki）"
    },
    {
    id:7,
    name: "南湖大山",
    name2: "帝王之山∕王者之山∕帝王座",
    height:"3742 公尺",
    image:"/images/img7.jpg",
    register: "要",
    location:"臺中市和平區,花蓮縣秀林鄉",
    locationID: "20",
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14538.456613927252!2d121.42387824480284!3d24.35992979963057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346862c61e2b00fd%3A0x7c1e7435f2740c4!2z5Y2X5rmW5aSn5bGx!5e0!3m2!1szh-TW!2stw!4v1715148656453!5m2!1szh-TW!2stw",
    content:"南湖大山位於台灣的中央山脈主稜線北段，在太魯閣國家公園，屬台中市和平區，海拔3,742公尺，為中央山脈第三高峰、主稜線北段的最高峰，設有一等三角點。在著名的台灣百岳之中，南湖大山與玉山、雪山、秀姑巒山、北大武山合稱「五岳」，為台灣最具代表性的五座高山。山型端凝厚重，素有帝王之山、王者之山之稱；主山的山體，別號「帝王座」"
    },
    {
    id:8,
    name: "東小南山",
    name2:"無",
    height:"3711 公尺",
    image:"/images/img8.jpg",
    register: "要",
    location:"高雄市桃源區",
    locationID: "7",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14641.95421615175!2d120.95772124435213!3d23.44283554874036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346f2196826a3e5b%3A0x900f82145ecd13eb!2z5p2x5bCP5Y2X5bGx!5e0!3m2!1szh-TW!2stw!4v1715148696669!5m2!1szh-TW!2stw",
    content: "東小南山標高3711公尺，為台灣玉山山脈中的一座高山，也是台灣百岳名峰之一，位於玉山南峰南側，轄區歸屬為玉山國家公園管理處。（資料來源：wiki）"
    },
    {
    id:9,
    name: "中央尖山",
    name2: "寶島第一尖",
    height:"3785 公尺",
    image:"/images/img9.jpg",
    register: "要",
    location:"南投縣信義鄉,花蓮縣卓溪鄉",
    locationID: "10",
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14544.158510881083!2d121.40591024477793!3d24.310252807827105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346888446fbaf6f1%3A0x235ad6627050d6d4!2z5Lit5aSu5bCW5bGx!5e0!3m2!1szh-TW!2stw!4v1715148739597!5m2!1szh-TW!2stw",
    content: "中央尖山海拔3,705公尺，位於台灣中央山脈北段，在南湖大山南邊主脊陵上，為中央山脈第四高峰，這兩座大山構成中央山脈北段兩個犄角。 中央尖山南壁是險惡的崩崖，北壁也是寸草不生的峭壁，尖銳錐形似刀刃般的尖峰，有如中央山脈上的金字塔，故有「寶島第一尖」之稱。在著名的台灣百岳之中，中央尖山與大霸尖山、達芬尖山合稱「三尖」，中央尖山高度為三尖之首。"
    },
    {
    id:10,
    name: "關山",
    name2:"無",
    height:"3668 公尺",
    register: "要",
    image:"/images/img10.jpg",
    location:"高雄市桃源區,臺東縣海端鄉",
    locationID: "7",
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29321.90403270476!2d120.92058341655007!3d23.27080011635521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346f1cea2dc487a9%3A0xe6d5a06257f1765f!2z6Zec5bGx5ba65bGx!5e0!3m2!1szh-TW!2stw!4v1715148788968!5m2!1szh-TW!2stw",
    content: "關山標高3,668公尺，隸屬玉山國家公園管轄，為台灣百岳名山的「十峻」之一。關山是中央山脈大水窟山以南的最高峰，故有「南臺首岳」之稱。其山勢雄偉，南北觀之如金字塔聳立，自東望之，則如嶺雄峙，真正是「橫看成嶺側成峰」"
    },
    {
    id:11,
    name: "南湖大山東峰",
    name2: "南湖東山",
    height:"3632 公尺",
    register: "要",
    image:"/images/img11.jpg",
    location:"臺中市和平區,宜蘭縣南澳鄉,花蓮縣秀林鄉",
    locationID: "20",
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.456207834753!2d121.44827647481097!3d24.365428264888518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34687d683749cfad%3A0x84db217cfe3731a5!2z5Y2X5rmW5aSn5bGx5p2x5bOw!5e0!3m2!1szh-TW!2stw!4v1715148839924!5m2!1szh-TW!2stw",
    content:"南湖大山東峰為台灣知名山峰，又名南湖東山，也是台灣百岳之一，排名第14。南湖大山東峰屬於中央山脈，行政區劃屬於臺中市、花蓮縣、宜蘭縣。南湖大山東峰南方有南湖大山，北邊連接馬比杉山。其特色為較為偏僻，與鄰近其他山峰比起來，相較險峻。"
    },
    {
    id:12,
    name: "伊澤山",
    name2: "江澤山",
    height:"3297 公尺",
    image:"/images/img12.jpg",
    location:"新竹縣尖石鄉,苗栗縣泰安鄉",
    register: "否",
    locationID: "0",
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14525.777643903257!2d121.23380954485819!3d24.470054131411796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34685de694bf6a9d%3A0x5cad292828675979!2z5LyK5r6k5bGx!5e0!3m2!1szh-TW!2stw!4v1715148878885!5m2!1szh-TW!2stw",
    content: "伊澤山為台灣知名山峰，也是台灣百岳之一，海拔3297公尺，有三等三角點6251號，屬於雪山山脈，行政區劃屬於苗栗縣、新竹縣，也位於雪霸國家公園。伊澤山南方有小霸尖山，是雪山山脈中段的最北。也是台灣百岳中最北的一座山峰。"
    },
    {
    id:13,
    name: "六順山",
    name2: "無",
    height:"2999 公尺",
    image:"/images/img13.jpg",
    location:"南投縣信義鄉,花蓮縣萬榮鄉",
    register: "要",
    locationID: "10",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.6412105988034!2d121.23701527479125!3d23.724503389771073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468cbd30acd4d83%3A0xb355d6e47cbddec1!2z5YWt6aCG5bGx!5e0!3m2!1szh-TW!2stw!4v1715148910364!5m2!1szh-TW!2stw",
    content: "六順山為台灣知名山峰，也是台灣百岳之一，排名第99。六順山高達2999公尺，屬於中央山脈，行政區劃屬於南投縣、花蓮縣，六順山為該區域的著名百岳，視野廣闊。"
    },
    {
    id:14,
    name: "布拉克桑山",
    name2: "武拉姑散山∕部落散山",
    height:"3025 公尺",
    register: "要",
    image:"/images/img14.jpg",
    location:"花蓮縣卓溪鄉,臺東縣海端鄉",
    locationID: "14",
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.2837437173084!2d121.07671807477644!3d23.232759608452792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346f1b5a548bda89%3A0xefe0e3060353c42d!2z5biD5ouJ5YWL5qGR5bGx!5e0!3m2!1szh-TW!2stw!4v1715148932728!5m2!1szh-TW!2stw",
    content: "布拉克桑山為台灣知名山峰，也是台灣百岳之一。布拉克桑山屬於中央山脈，行政區劃屬於台東縣、花蓮縣。布拉克桑山附近接連關山與塔關山等山。（資料來源"
    },
    {
    id:15,
    name: "鹿山",
    name2: "無",
    height:"2981 公尺",
    image:"/images/img16.jpg",
    location:"高雄市桃源區",
    locationID: "7",
    register:"要",
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14640.807890204984!2d120.9779821443571!3d23.45317804708489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346f222a6f6a5f51%3A0xff0d1065cd51dbb7!2z6bm_5bGx!5e0!3m2!1szh-TW!2stw!4v1715148962809!5m2!1szh-TW!2stw",    
    content:"鹿山為台灣玉山山脈中的一座高山，標高2981公尺，也是台灣百岳名峰之中唯一高度未及3000公尺者，位於玉山南峰東側偏北，轄區歸屬為玉山國家公園管理處。"
    }
    
]);


const route = useRoute()
// console.log("地址",route.params.id)
const i = route.params.id

// 切換 天氣與地圖
const showweather = ref<boolean>(true)
const showWeatherF = () => {
      showweather.value = true // 
    };
const showMapF = () => {
    showweather.value = false 
};

// 取得位置
for (let i = 0; i < parentMessage.value.length; i++) {
  const location = parentMessage.value[i].locationID;
}

console.log(location)

// 介接api
const { data: count } = await useFetch('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWA-964BE4A8-7D45-45A4-9304-CEE23BA30FF3&format=JSON&locationName=&elementName=')
const weatherInfo = count._rawValue.records.locations[0].location[i]


// 抓綜合天氣評論
// console.log("new",weatherInfo.weatherElement[10].time[0].elementValue[0].value) 
// 評論
const text = weatherInfo.weatherElement[10].time[0].elementValue[0].value
const sentences = text.split('。');
// console.log("new",sentences);

// 紫外線
const purpleLight = weatherInfo.weatherElement[9].time[0].elementValue[0].value
const purpleLightLevel = weatherInfo.weatherElement[9].time[0].elementValue[1].value

//今日均溫 跟 天氣
const todayWeather = weatherInfo.weatherElement[6].time[0].elementValue[0].value
const todayAverTem = weatherInfo.weatherElement[1].time[0].elementValue[0].value

interface otherDayWeatherFace {
    date: number | string,
    weatherShow: number | string,
    rainRate: number | string,
}

const otherDayWeather: otherDayWeatherFace[] = [{date: 100,weatherShow:100, rainRate:200}];
// const otherDayWeather: otherDayWeatherFace[] = [{date: 100,weatherShow:100, rainRate:200}];
// let a = count._rawValue.records.locations[0].location[location].weatherElement[10].time[3].elementValue[0].value

for (let i = 0; i < 5; i++) {
    const weatherShow = count._rawValue.records.locations[0].location[10].weatherElement[6].time[3 + i * 2].elementValue[0].value;
    let rainRate = count._rawValue.records.locations[0].location[10].weatherElement[0].time[3 + i * 2].elementValue[0].value;
    if (rainRate.trim() == '') {
        rainRate = "--"
    }
    const dateStr = count._rawValue.records.locations[0].location[10].weatherElement[10].time[3 + i * 2].startTime;
    // 創建一個Data
    const date = new Date(dateStr);
    // 拿月份跟日期
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    // 组合成所需的格式，例如：05-07
    const formattedDate = `${month}/${day}`;
    // console.log(formattedDate)


    otherDayWeather[i] = {
        date: formattedDate,
        weatherShow: weatherShow,
        rainRate: rainRate
    };
}


const weatherImages = {
                "多雲": "/images/weather/cloud.svg",
                "陰天":"/images/weather/dark-cloud.svg",
                "晴時多雲": "/images/weather/cloud-sun.svg",
                "多雲時晴":"/images/weather/cloud-sun.svg",
                "多雲時陰":"/images/weather/cloudsshadow.svg",
                "陰時多雲":"/images/weather/darkclouds.svg",
                "陰短暫陣雨":"/images/weather/cloudy-rain.svg",
                "陰時多雲短暫陣雨或雷雨":"/images/weather/shawdowRainTh.svg",
                "陰短暫陣雨或雷雨":"/images/weather/cloudtemrain.svg",
                "晴午後短暫雷陣雨":"/images/weather/suntemth.svg",
                "多雲午後短暫雷陣雨":"/images/weather/dsr.svg",
                "多雲時陰短暫陣雨或雷雨":"/images/weather/darktemrainth.svg",
                "多雲短暫陣雨或雷雨":"/images/weather/darktemrainth.svg",
}


let alreadyClimb = false



const usedIndexes = new Set();
const randomMountainList: Ref<mountainsData[]> = ref([]);

while (randomMountainList.value.length < 3) {
    const randomIndex = Math.floor(Math.random() * parentMessage.value.length);
    if (!usedIndexes.has(randomIndex)) {
        randomMountainList.value.push(parentMessage.value[randomIndex] );
        usedIndexes.add(randomIndex);
    }
}

</script>

<template>

  <section class="main-intro">
    <h3>{{parentMessage[i].name}} </h3>
    <div class="content">
        <div class="content-img"><img :src="parentMessage[i].image" alt=""></div>
        <div class="content-p">
            <div class="titles">
                <div class="title">別名</div>
                <div>{{parentMessage[i].name2}}</div>
            </div>
            <div class="titles">
                <div class="title">標高</div>
                <div>{{parentMessage[i].name}}</div>
            </div>
            <div class="titles">
                <div class="title">所在縣市</div>
                <div>{{parentMessage[i].location}}</div>
            </div>
            <div class="titles">
                <div class="title">申請入山</div>
                <div> {{parentMessage[i].register}} </div>
            </div>
        </div>
    </div>
    <div class="mountainpage-info">
           <p>  {{parentMessage[i].content}}  </p> 
    </div>
  </section>


  <h2 class="weather-map-h">  天氣與地圖 </h2>
  <div class="item-container" >
      <div class="weather-item" @click="showWeatherF" v-bind:class="{ 'check': showweather }">天氣 &nbsp;&nbsp; <font-awesome-icon icon="cloud" style="color: #eee;" /> </div>
      <div class="map-item" @click="showMapF" v-bind:class="{ 'check': !showweather }">地圖 &nbsp;&nbsp; <font-awesome-icon icon="map" style="color: #eee;" /></div>
  </div>
  <section class="weather-map-container">

    <div class="weather-map">
        <div class="map" v-show=" !showweather">
            <iframe :src="parentMessage[i].map" width="100%" height="400px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="weather"  v-show=" showweather">
            <div class="today-weather">
                <div>
                    <h5>今日</h5>
                    <img :src="weatherImages[todayWeather]" alt="">
                    <p>{{todayWeather}}</p>
                </div>
                <div>
                    <h5><b>{{todayAverTem }}</b> °C </h5>
                    <p>{{sentences[1]}}</p>
                    <!-- <p>{{sentences[2]}}</p> -->
                    <p>天氣狀態: {{sentences[3]}}</p>
                    
                    <p>紫外線指數: {{purpleLight}} {{purpleLightLevel}}</p>
                </div>

            </div>
            <div class="other-weather" v-for="item in otherDayWeather">
                <div> {{item.date}} </div>
                <div>
                    <img :src = "weatherImages[item.weatherShow]" alt="">
                </div>
                <div>{{item.weatherShow}}</div> 
                <div> &nbsp; <font-awesome-icon icon="umbrella" style="color: #c8c8c8;" /> {{item.rainRate}} %</div>
            </div>
        </div>
    </div>

  </section>

  <h2 class="weather-map-h">  山點推薦 </h2>
  <section class="recommand">
    <ClientOnly>
        <!-- <MountainCard class="items" v-for="mountain in randomMountainList" :key="mountain.id" :message="mountain" /> -->
        <mountain-card-small class="items" v-for="mountain in randomMountainList" :key="mountain.id" :message="mountain" > 
        </mountain-card-small>
    </ClientOnly>
  </section>
</template>

<style scoped>
@import url('assets/css/mountains.css');

@media (max-width:768px) {
    .items:nth-child(2){
        display: none;
    }
    section .banner {
        background-image: url('/images/indexbanner.jpg');
    }}
@media (max-width:414px) {
    .items:nth-child(1){
        display: none;
    }
    section .banner {
        background-image: url('/images/indexbanner.jpg');
    }}
</style>