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
</style>