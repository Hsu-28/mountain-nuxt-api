<script setup>

import { useDataStore } from '@/store/mydata'
const articleData = useDataStore().articleData
import articleSlot from '@/components/article-list-slot.vue'

</script>
<template>
    <div class="page-title">
        <h1> 文章列表  </h1> <p> 15,084 筆文章資料 </p>
    </div>
    
    <articleSlot v-for="item in articleData" >
        <template #article-img>
            <img :src="item.img" alt="" width="100%"  >
        </template>
        <template #title>
            <div> {{item.title}} </div>
        </template> 
        <template #content>
            <div> {{item.content}}  </div>
        </template> 
        <template #who>
            <div> {{item.who}}  </div>
        </template> 
        <template #time>
            <div> {{item.time}}  </div>
        </template> 
        <template #like>
            <div> {{item.like}}  </div>
        </template> 
        <template #see>
            <div> {{item.see}}  </div>
        </template> 
        
     </articleSlot>
</template>


<style scoped>
.article{
    width: 76%; 
    max-width: 1200px;
    height: 100%;
    margin: auto;
}

 .article-list-containe:hover div{
  color: green;
}

.page-title {
    display: flex;
    margin: 50px auto;
    padding: auto;
    width: 76%;
    max-width: 1200px;
}

.page-title h1{
    font-size: 28px;
}
.page-title p{
    font-size: 20px;
    margin-left: 20px;
    padding-top: 6px;
}


@media (max-width:1024px) {
    .page-title {
    margin: 26px auto;
    width: 90%;
}
/* .page-title h1{
    font-size: 18px;
}
.page-title p{
    font-size: 14px;
} */
}

@media (max-width:768px) {
    .page-title {
    margin: 20px auto;
    width: 90%;
  
}
.page-title h1{
    font-size: 22px;
}
.page-title p{
    font-size: 16px;
} 
.page-title p{

    margin-left: 10px;
    padding-top: 4px;
}
} 
</style>