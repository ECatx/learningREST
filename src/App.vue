<template>
  <div class="w-72 h-120 bg-warmGray-400 mx-auto object-center items-center">
    <div class="object-fill"> 
         <img :src="cats.url" class="w-72 h-72 object-scale-down">
    </div>
      <button  class="bg-blue-200 rounded shadow-lg flex mx-auto items-center" @click="getCat">Get new Cat</button>
    <div class="flex flex-row pt-2">
      <label class="pr-1">Test</label>
      <input class="text-xs w-full" :value=cats.url :disabled=1>
    </div>
  </div>
</template>

<script setup>
import {onMounted} from 'vue'
import {axios} from 'axios'
import {getCat,cats} from './pages/getCats'

  onMounted(() => {
    getCat()
  })
</script>
