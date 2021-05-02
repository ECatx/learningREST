<template>
  <div class="w-72 h-72 bg-warmGray-400">
    <div class="w-320 h-320">
         <img :src="cats.url">
    </div>
    <div class="flex mx-auto flex-row">
      <label>Test</label>
      <input class="flex" :value=cats.url :disabled=1>
      <button @click="getCat">Get new Cat</button>
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
