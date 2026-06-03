<template>
  <div>
<p>{{count}}</p> 
<p>{{year}}</p> 
<ul>
  <li v-for="item in list" :key="item.id">{{item.name}}</li>
</ul>
<button @click="count++">测试按钮,结果{{doubleCounts}}</button>
  <ul>
    <li v-for="curr in newList" :key="curr.id">{{curr.name}}汇率为{{curr.rate}}</li>
  </ul>
<input type="text" placeholder="文本测试" @change="inputChange">
<button @click="Click">按钮内容</button>
  </div>
</template>

<script setup lang="ts">
//给ref添加类型标注

import { ref,reactive,computed } from 'vue'

const count = ref(2 )

const year = ref<string | number>(1145) 

type ListItem = {
  id: number,
  name: string
}

type Kyoku = {
  name: string,
  producer: string,
  language?: string
}
type Currency = {
  id: string,
  name: string,
  rate: number
}

const list = ref<ListItem[]>([])

list.value.push({
  id: 100,
  name: '张三'
})

const sukinakyoku = reactive<Kyoku>({
  name: 'humming',
  producer: 'ikura',
})

sukinakyoku.language = 'jp'

const doubleCounts = computed(() => {
  return count.value * 2
})

const Currency = reactive<Currency[]>(
[
  { id: "001", name: "USD", rate: 1 },
  { id: "002", name: "RUB", rate: 90 },
  { id: "003", name: "KZT", rate: 440 },
  { id: "004", name: "SGD", rate: 1.3 },
])

const newList = computed(() => {
  return Currency.filter(el => el.rate > 60)
  })

const inputChange = (e: Event) => {
  console.log((e.target as HTMLInputElement).value)
}

const Click = (e: Event) => {
 console.log((e.target as HTMLButtonElement).innerText)
}

</script>

<style scoped>

</style>