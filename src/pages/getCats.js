import { ref } from 'vue'
import axios from 'axios'

export const searchItem = ref('') 
export const cats = ref([])


const api = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/',
    params: {
        api_key: import.meta.env.VITE_APIKEY,
      },
  })

  export const getCat = async () => {
    const ressource = searchItem.value ? 'images/search' : 'images/search'
    const response = await api(ressource , { params: {limit:1, size:"full"} })
    cats.value = response.data[0]
    console.log(response.data[0].url)
  }

