<script setup>
    import { useDataStore } from '@/store/mydata'
    const favoritesList= useDataStore().favoritesList
    const addToFavorites= useDataStore().addToFavorites
    console.log(favoritesList)
    const climedbMountains = favoritesList.length

</script>

<template>
    <div class="mem-container">
        <h1> 歡迎來到你的山屋</h1>
        <h1 @click="addToFavorites(5)">按鈕按鈕</h1>
        <h2>
            恭喜你已經攀登了{{climedbMountains}}座高山
            {{favoritesList}}
        </h2>
    </div>

    
</template>

<style>
.mem-container{
    height: 100vh;
    width: 76%;
    max-width: 1200px;
    margin: auto;
}
</style>