// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true }
})

module.exports = {
  head: {
    script: [
        { src: 'https://kit.fontawesome.com/8bfd57d05d.js' },
        // { src: 'C:/Users/svm3g/Documents/mountain-nuxt-api/mountain/store/mountain.js' },

    ]
  },
  plugins: [
    '~/plugins/fontawesome.js',
    
  ],
  css: [
    // 全局css設定
    '@/assets/css/main.css',
    '@/assets/css/reset.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  // nuxt.config.ts
  modules: [
    '@vesp/nuxt-fontawesome',
    '@pinia/nuxt',
  ],
  build: { transpile: ['@fortawesome/vue-fontawesome'], },
  pinia: { // 想要各別引入可以移除這段
    autoImports: [
      'defineStore'
    ]
  },

  
}
