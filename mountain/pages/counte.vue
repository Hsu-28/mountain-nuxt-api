// pages/count.vue
<template>
  <div>
    {{ mainStore.counter }}
    {{ mainStore.doubleCounter }}
    <button @click="mainStore.increment()">increment</button>
  </div>
</template>

<script setup>
import { useMainStore } from '@/store/index';
const mainStore = useMainStore();
</script>