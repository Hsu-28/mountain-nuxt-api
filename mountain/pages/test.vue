<script setup>
import { useDataStore } from '@/store/mydata'
const mountainsData = useDataStore()

</script>
<template>
 <h1> 這邊是測試頁面</h1>
 <br>
 <h3> {{ mountainsData.mountainsData }}</h3>
 <br>
     {{mountainsData}}
</template>
<style></style>




