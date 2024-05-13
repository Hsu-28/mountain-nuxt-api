<script setup lang="ts">
import { ref, computed } from 'vue';
import { useDataStore } from '@/store/mydata'


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

const mountainsData:mountainsData[] = useDataStore().mountainsData
const addToFavorites: (item: mountainsData) => void = useDataStore().addToFavorites;
const favoritesList:mountainsData[]= useDataStore().favoritesList
const alreadyClimb:boolean = false
const searchQuery = ref('');
const filteredMountains = computed(() => {
  return mountainsData.filter(mountain => {
    return mountain.name.includes(searchQuery.value);
  });
});
console.log(searchQuery )
</script>

<template>
  <section class="banner">
    <div>
      <h3>遠離城市的喧囂，與群山一同舞蹈  </h3>
      <h4>山脈是自然的詩篇，每座山峰都是動人的詩句</h4>
      <div class="search">
        <input type="text" id="search-input" placeholder="輸入山脈查詢" v-model="searchQuery">
        <span class="search-btn">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </span>
      </div>
    </div>
  </section>

  <section class="main">
    <h3>台灣百岳一覽</h3>
    <div class="main-content">
      
        <MountainCard v-for="mountain in filteredMountains" :key="mountain.id" :message="mountain" />
      
      </div>
  </section>
</template>

<style>
@import url('assets/css/reset.css');
@import url('assets/css/index.css');
div .banner {
        background-image: url('/images/indexbanner.jpg');
    }
</style>
