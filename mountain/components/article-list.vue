<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  article: Object  
})
</script>

<template>
    <div class="article-list-container">
      <div class="article-img">
        <img :src="article.img" alt="">
      </div>
      <div class="article-intro">
        <h2>{{ article.title }}</h2>
        <h3>{{ article.content }}</h3>
        <div>
          <p>{{ article.who }}</p>
          <p>{{ article.time }}</p>
          <p><font-awesome-icon :icon="['fas', 'heart']" class="icon" /> {{ article.like }}人收藏</p>
          <p><font-awesome-icon :icon="['fas', 'eye']" class="icon" /> {{ article.see }}點閱</p>
        </div>
      </div>
    </div>
  </template>
  


<style scoped>
.article-list-container{
    background-color: white;
    display: flex;
    flex-flow: flex;
    justify-content: space-between;
    border-bottom: 1px solid gray;
}

.article-list-container .article-img {
    width: 20%;
}

.article-list-container .article-img  img{
    width: 100%;
    object-fit: cover;
}

.article-list-container .article-intro {
    width: 78%;
    display: flex;
    flex-flow: column nowrap;

}

.article-list-container h2 {
    font-size: 26px;
    margin: 16px;
    margin-left: 0px;
}

.article-list-container h3 {
    font-size: 20px;
    margin: 16px;
}

.article-list-container div {
    display: flex;
    flex-flow: row nowrap;
    margin: 16px;
}



.article-list-container div p {
    margin-right: 16px;
}

.article-list-container div p .icon {
    color: gray;
    font-size: 14px;
}
</style>