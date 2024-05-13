<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { useDataStore } from '@/store/mydata'

interface FavoriteItem {
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
const favoritesList:FavoriteItem[] = useDataStore().favoritesList;
const addToFavorites: (item: FavoriteItem) => void = useDataStore().addToFavorites;

const props = defineProps({
    message: Object
});
const successStatus = ref<boolean>(false);
const isClicked = ref<boolean>(false);
</script>


<template>
  <div>
        <div class="cards" >
        <nuxt-link :to="`/mountains/${message.id}`">
        <div class="mount-img">
          <img :src="message.image" :alt="message.name">
          <div class="content-intro">
            <p><b>{{ message.name }}</b>  <span>標高{{ message.height }} </span> </p>
          </div>  
        </div>
      </nuxt-link>
      </div>
  </div>
</template>

<style scoped>
@import url('assets/css/reset.css');
@import url('assets/css/index.css');

@media (max-width:768px) {
    .location,
    .content-intro span{
        display: none;
    }
    .content-intro b{
        font-size: 14px;
    }}
</style>
