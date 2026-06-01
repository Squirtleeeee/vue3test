<script setup>
import { reactive,computed } from 'vue'
    console.log('setup')
    const count = reactive({ 
      count: 0
     })
    const addCount = () => {
      count.count++
    } 
    const result = computed(() => {
      return count.count * 2
    })


</script>


<template>
  <div class="box">
    <button class="my-button" @click="addCount">result {{ count.count }}</button>
<p>new Result: {{ result }}</p>
</div>
</template>

<style scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
}

.my-button {
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  padding: 15px 32px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  background-color: #4caf50;
  color: white;

  transition: background-color 0.3s ease;
  &:hover {
    background-color: #45a049;
  }

  &:active {
    background-color: #388e3c;
  }
}
</style>