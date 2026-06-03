<template>
  <div>
    <button @click="counterStore.increment">加一{{counterStore.count}}</button> 
    <button @click="counterStore.count++">按钮变更{{counterStore.doubleCount}}</button>
  </div>
</template>

<script setup lang="ts">
import { useCountStore } from './stores/counter'

const counterStore = useCountStore()

</script>

<style scoped>

</style>