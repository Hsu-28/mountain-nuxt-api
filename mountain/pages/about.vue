<script setup >
const { data: count } = await useFetch('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWA-964BE4A8-7D45-45A4-9304-CEE23BA30FF3&format=JSON&locationName=&elementName=')

console.log(count._rawValue.records.locations[0])
console.log(count._rawValue.records.locations[0].location[7].weatherElement[6].time[3].elementValue[0].value)
console.log(count._rawValue.records.locations[0].location[10].weatherElement[6].time[3].elementValue[0].value)
console.log(count._rawValue.records.locations[0].location[7].weatherElement[0].time[2].elementValue[0].value)
console.log(count._rawValue.records.locations[0].location[10].weatherElement[0].time[2].elementValue[0].value)
console.log(count._rawValue.records.locations[0].location[7].weatherElement[6])
console.log(count._rawValue.records.locations[0].location[10].weatherElement[6])
// console.log(count._rawValue.records.locations[0].location[5].weatherElement[6].time[3  * 2].elementValue[0].value)
// console.log(count._rawValue.records.locations[0].location[6].weatherElement[6].time[3  * 2].elementValue[0].value)
// // 這邊拿地區
// console.log("這邊是",count._rawValue.records.locations[0].location) 

// //進入天氣選項
// console.log("這邊是",count._rawValue.records.locations[0].location[10].weatherElement) 

// // 今日 均溫
// console.log("這邊是",count._rawValue.records.locations[0].location[10].weatherElement[1].time[0].elementValue[0].value) 

// // 今日 天氣狀態敘述
// console.log("今日 天氣狀態敘述",count._rawValue.records.locations[0].location[10].weatherElement[6].time[0].elementValue[0].value) 

// 抓這個綜合天氣評論
// console.log("綜合天氣評論",count._rawValue.records.locations[0].location[10].weatherElement[10].time[0].elementValue[0].value) 
// // 評論
// let text = count._rawValue.records.locations[0].location[10].weatherElement[10].time[0].elementValue[0].value
// const sentences = text.split('。');
// console.log(sentences);

// // 抓時間
// console.log("這邊是時間",count._rawValue.records.locations[0].location[10].weatherElement[10].time[0].startTime) 
// console.log("date test",count._rawValue.records.locations[0].location[10].weatherElement[10].time)
// console.log(" today date test",count._rawValue.records.locations[0].location[10].weatherElement[10].time[1])



// 這邊都帶入 變成陣列
// console.log(" tomorrow date test",count._rawValue.records.locations[0].location[10].weatherElement[10].time[3].startTime)
// console.log(" two days date test",count._rawValue.records.locations[0].location[10].weatherElement[10].time[5].startTime)
// console.log(" three days date test",count._rawValue.records.locations[0].location[10].weatherElement[10].time[7].startTime)
// console.log(" four days date test",count._rawValue.records.locations[0].location[10].weatherElement[10].time[9].startTime)
// console.log(" five days date test",count._rawValue.records.locations[0].location[10].weatherElement[10].time[11].startTime)
// const dateStr = count._rawValue.records.locations[0].location[10].weatherElement[10].time[3].startTime;
// // 创建一个新的 Date 对象
// const date = new Date(dateStr);
// // 从 Date 对象中提取月份和日期
// const month = ("0" + (date.getMonth() + 1)).slice(-2); // 月份从0开始计数，因此要加1
// const day = ("0" + date.getDate()).slice(-2);
// // 组合成所需的格式，例如：05-07
// const formattedDate = `${month}/${day}`;
// console.log(formattedDate)


// 抓明日天氣評論
// .time[0]  改   .time[3]
// console.log("明天綜合天氣評論",count._rawValue.records.locations[0].location[10].weatherElement[10].time[3].elementValue[0].value) 
// // 評論
// let text2 = count._rawValue.records.locations[0].location[10].weatherElement[10].time[3].elementValue[0].value
// const sentences2 = text.split('。');
// console.log(sentences2);

















</script>

<template>
    <h1>這邊式about</h1>
  <p>Page visits: </p>
</template>



<style></style>