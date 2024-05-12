<script setup>

</script>

<template>
    <div class="article-list-container">
      <div class="article-img">
        <slot name="article-img" class="img-s"></slot>
      </div>
      <div class="article-intro">
        <nuxt-link>
          
         <div class="slot-title"> <slot name="title"></slot> </div> 
        </nuxt-link>
         
        <div class="slot-h3"><slot name="content"></slot></div>
        <div  class="contents">
          <div  class="who slot-p"><slot name="who"></slot></div>
          <div class="slot-p" ><slot name="time"></slot></div>
          <div  class="like slot-p"><font-awesome-icon :icon="['fas', 'heart']" class="icon" /> <slot name="like"></slot>人收藏</div>
          <div  class="see slot-p"><font-awesome-icon :icon="['fas', 'eye']" class="icon" /> <slot name="see"></slot>點閱</div>
          <div  class="readmore">閱讀更多...</div>
        </div>
      </div>
    </div>
  </template>
  


<style scoped>

.article-list-container{
  width: 76%;
    max-width: 1200px;
    margin: auto;
    background-color: white;
    display: flex;
    flex-flow: flex;
    justify-content: space-between;
    border-bottom: 1px solid gray;
    line-height: 1.4;
}

.article-list-container .article-img {
  /* width: 30%; */
    width: 300px;
    height: 200px;
    aspect-ratio: 1 / 1; 
}

.article-list-container .article-img .img-s{
  /* max-width: 100%;
  min-width: 100%; */
    object-fit: cover;
}

.article-list-container .article-intro {
    width: 78%;
    overflow: hidden; 
    display: flex;
    flex-flow: column nowrap;

}

.article-list-container .slot-title {
    font-size: 26px;
    margin: 16px;
    margin-left: 0px;
    white-space: wrap; 
    overflow: hidden; 
}

.article-list-container .slot-h3 {
    font-size: 20px;
    width: 90%; 
    overflow: hidden;   
    /* margin: 16px; */
}

.article-list-container div{
    display: flex;
    flex-flow: row nowrap;
    margin: 16px;
}

.article-list-container div.contents{
    display: flex;
    flex-flow: row nowrap;
    margin-left: 0px;
}

.article-list-container div .slot-p {
    display: flex;  
    margin-right: 16px;
}

.article-list-container div .slot-p .icon {
    color: gray;
    font-size: 14px;
    margin-right: 5px;
}

.article-list-container:hover  {
  color:green;
  cursor: pointer;
}
.article-list-container  .readmore {
  display: none;
}
@media (max-width:1024px) {
  .article-list-container{
    width: 90%;
  }
  .article-list-container .slot-title,
  .article-list-container .slot-h3{
    margin: 8px;
  }
  .article-list-container .slot-title{
    font-size: 18px;
  }
  .article-list-container .slot-h3 {
    font-size: 16px;
    .article-list-container div{
      margin: 10px;
    }
  }
  .article-list-container .article-img {

    width: 300px;
    height: 200px;
  }
  .article-list-container div[data-v-f57fc118]{
    margin: 8px;
  }
}

@media (max-width:790px) {
  .article-list-container div .like,
  .article-list-container div .see {
    display: none;
  }
}



@media (max-width:768px) {
  .article-list-container .article-img[data-v-f57fc118] {
    width: 50%;
  }

  .article-list-container div .like,
  .article-list-container div .see,
  .article-list-container div .who {
    display: none;
  }

  .article-list-container .slot-title{
    font-size: 16px;
  }
  .article-list-container .slot-h3{
    max-height: 110px;
    font-size: 16px;
  }
}


@media (max-width:414px) {
  .article-list-container .article-img{
    display: none;
  } 

  .article-list-container .article-intro{
    width: 100%;
  }

  .article-list-container .contents  {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.article-list-container .contents .readmore {
  display: block;
}
}
</style>