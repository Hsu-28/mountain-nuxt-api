<script setup>
import { useDataStore } from '@/store/mydata'
import { ref } from 'vue';

const favoritesList = useDataStore().favoritesList;
const addToFavorites = useDataStore().addToFavorites;
console.log(favoritesList);
const climedbMountains = favoritesList.length;

const toggleEditing = (index) => {
  favoritesList.forEach((mountain, i) => {
    if (i === index) {
      mountain.isEditing = !mountain.isEditing;
    } else {
      mountain.isEditing = false;
    }
  });
};

const confirm = (index) => {
  favoritesList[index].isEditing = false;
};
</script>


<template>
    <div class="mem-container">
      <h1> 歡迎來到你的山屋</h1>
      <section>
        <h2 v-if="climedbMountains != 0">恭喜你 ! 你已經攀登了 &nbsp; {{climedbMountains}} &nbsp; 座高山！</h2>
        <h2 v-if="climedbMountains === 0" class="noclimb-title">目前還沒有攀登成功的紀錄唷</h2>
        <div class="climbs">
          <h3 v-if="climedbMountains != 0">
            很高興你能享受自然的美，飽覽群峰的美景，接下來有打算去哪一座山頭嗎? <br> 計劃下一次旅程之前不訪看一下之前的已經攀登的山岳紀錄吧
          </h3>
          <h3 v-if="climedbMountains === 0">
                還沒開始攀登第一座山嗎? <br> 看到那座小小的山丘了嗎？這麼簡單的路程，我們完全可以輕鬆應對！
            </h3>
          <div class="climbs-item" v-for="(mountain, index) in favoritesList" :key="mountain.id">
            <mountain-card-small :message="mountain" class="items" />
            <div class="climb-content">
              <div>
                <label for="climbSuccess"> 攀登成功日期 : </label>
                <input type="date" id="climbSuccess" name="climbSuccess" :disabled="!mountain.isEditing">
  
              </div>
              <div>
                <label for="partner"> 同行者: </label>
                <input type="text" id="partner" name="partner" :disabled="!mountain.isEditing">
              </div>
              <div>
                文字記錄:
                <div>
                  <textarea name="" id="" cols="30" rows="10" :disabled="!mountain.isEditing"></textarea>
                </div>
              </div>
              <div class="buttons">
                <button v-if="mountain.isEditing" @click="confirm(index)">確認</button>
                <button @click="toggleEditing(index)">{{ mountain.isEditing ? '確認' : '編輯' }}</button>
              </div>
            </div>
          </div>
        </div>
        <div class="noclimb" v-if="climedbMountains === 0">
           
          <img src="/assets/images/memclimb.png" alt="">
        </div>
      </section>
    </div>
  </template>
  
 
  



<style scoped>
.mem-container{
    width: 76%;
    max-width: 1200px;
    margin: auto;
}
h1{
    font-size: 24px;
    margin:24px auto;
}

section{
    background-color: white;
    padding: 20px;
}
h2{
    font-size: 22px;
    margin:20px auto; 
    margin-top: 16px;
}
h3{
    line-height: 1.5;
    font-size: 14px;
}
.climbs {
    display: flex;
    flex-flow: column wrap;
    margin-top: 40px;
}

.climbs-item{
    width: 100%;
    margin: auto;
    border-bottom: 1px solid gray;
    display: flex;
    flex-flow: row nowrap;
}
.items {
    width: 50%;
    margin: 10px 0;
}

.climb-content{
    margin: 20px;
    width: 48%;
}
.climb-content div{
    margin-bottom: 20px;
}

textarea{
    width: 100%;
    height: 120px;
    margin-top: 6px;
}
input{
    width: 100%;
    margin-top: 6px;
}
.noclimb{
    margin: -40px auto;
    width:50%;
    height: 30%;
    }
.noclimb img{
    margin: auto;
    width:100%;
    height: 10%;
    text-align: center;
    }
    .buttons{
        position: relative;
    }
button{
    position: absolute;
    border-radius: 5px;
    right: 0;
    bottom: -10px;
}
@media screen and (max-width: 768px) {
    h2{
        margin: 0 15px ;
    }
    h3{
        margin-top: -10px;
    }
    .climbs-item[data-v-f7e9b573]{
        flex-flow: column nowrap;
        width: 100%;
    }
    .items[data-v-f7e9b573],
    .climb-content[data-v-f7e9b573]{
        width: 80%;
        margin: auto;
        margin-bottom: 20px;
    }
    textarea[data-v-f7e9b573]{
        margin-bottom: 30px;
    }
    button[data-v-f7e9b573]{
        bottom: 10px;
    }
    .noclimb[data-v-f7e9b573]{
      height: 100%;
      width: 100%;
    }
    .noclimb-title{
      margin:0 ;
      line-height: 1.4;
    }

}

@media screen and (max-width: 414px) {
  h1{
      text-align: center;
    }
    .climbs[data-v-a0fc9ce8]{
      width: 100%;
    }
    .climb-content[data-v-a0fc9ce8]{
      width: 100%;
    }
}
</style>