<script setup>
import { ref, defineProps } from 'vue';
import { useDataStore } from '@/store/mydata'
const addToFavorites = useDataStore().addToFavorites
const favoritesList= useDataStore().favoritesList
const props = defineProps({
    message: Object
});
const successStatus = ref(false);
const isClicked = ref(false);
let timer = ''
const toggleColor = (name) => {
    isClicked.value = !isClicked.value;

    if (isClicked.value) {
        if (!successStatus.value) {
            successStatus.value = true;
            timer = setTimeout(() => {
                successStatus.value = false;
            }, 1500);
        } else {
            clearTimeout(timer);
            successStatus.value = false;
        }
    } else {
        successStatus.value = false;
    }
    addToFavorites(name)
    

};

let alreadyClimb = true

</script>


<template>
  <div>
        <div class="cards" >
          <div class="finish" v-show="successStatus">恭喜攀登成功!!</div>
          <font-awesome-icon :icon="['fas', 'font-awesome']" class="heart"  
          :class="{ 'already' : isClicked }"
          @click="toggleColor(message)"
          v-if="alreadyClimb"
          />
          
        <nuxt-link :to="`/mountains/${message.id}`">
        <!-- <nuxt-link :to="/mountains/message.id"> -->
        <div class="mount-img">
          <img :src="message.image" :alt="message.name">
          <div class="content-intro">
            <p><b>{{ message.name }}</b> 標高{{ message.height }} </p>
            <p class="location">
                {{ message.location }}
            </p>
          </div>  
        </div>
      </nuxt-link>
      </div>
  </div>
</template>

<style>
@import url('assets/css/reset.css');
@import url('assets/css/index.css');
</style>
