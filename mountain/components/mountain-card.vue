<script setup>
// import { defineProps } from 'vue';

const props = defineProps({
    message: Object
});
</script>

<template>
  <div>
    <!-- <nuxt-link :to="`/mountains/${1}`"> -->
        <div class="cards">
        <nuxt-link :to="`/mountains/${message.id}`">
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
