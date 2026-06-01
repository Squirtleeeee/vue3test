<script setup>
import {inject} from 'vue'

const msg = inject('item')

const changeMsg = inject('itemB')

const changeVal = () => {
  changeMsg()
}
</script>
<template>
  <div class="son">
    <h2>孙子组件</h2>
    <h3>{{ msg }}</h3>
    <button @click="changeVal()">Change value</button>
  </div>
</template>


<style scoped>
.son {
  padding: 51px;
  border: 1px solid pink;
}
</style>