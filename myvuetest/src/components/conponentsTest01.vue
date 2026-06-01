<template>
  <div>

  </div>
</template>

<script setup>
import {ref} from 'vue'

const newMsg = ref('this is an important msg')

const logMsg = () => {
  console.log(newMsg.value)
}

defineExpose({
  newMsg,
  logMsg
})

</script>

<style scoped>

</style>