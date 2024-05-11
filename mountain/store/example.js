import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavoritesStore = defineStore({
  id: 'favorites',
  state: () => ({
    favorites: ref([]) 
  }),
  actions: {

    addToFavorites(product) {
         favorites.value.push(product) 
    },
    removeFromFavorites(product) {
      const index = this.favorites.value.findIndex(item => item.id === product.id) 
      if (index !== -1) {
        favorites.value.splice(index, 1) 
      }
    }
  },
  getters: {
    allFavorites(state) {
      return state.favorites.value 
    }
  }
})


