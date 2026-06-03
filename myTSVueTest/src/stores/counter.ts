import {defineStore} from 'pinia'
import {ref,computed} from 'vue'
export const useCountStore = defineStore('counter',() => {
  const count = ref<number>(0)
  const increment = () => {
    count.value++
  }

const doubleCount = computed(() =>{
  count.value * 2
})
return {
  count,
  doubleCount,
  increment
}
})