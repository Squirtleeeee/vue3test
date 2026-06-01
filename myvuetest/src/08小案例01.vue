<template>
  <input ref="autoFocusInput" v-model="inputValue" placeholder="请输入内容" />
</template>

<script setup>

import {ref, onMounted} from 'vue'

const input = ref('')

const autoFocusInput = ref(null)

onMounted(() => {
 if (autoFocusInput.value) {
   autoFocusInput.value.focus()
 }
})

</script>

<style scoped>

</style>