// import { createStore } from 'vuex'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoadStore = defineStore('loading', () => {
  const loading = ref(false)
  const setLoading = (val:boolean) =>{
    loading.value= val
  }
  return {
    loading,
    setLoading
  }
})