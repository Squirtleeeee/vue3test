<template>
  <div>
<componentsTest01 ref="test"></componentsTest01>
<button @click="getChildMsg">测试输出值</button>
  </div>
</template>

<script setup>
import { ref} from 'vue'
import componentsTest01 from './components/conponentsTest01.vue'

const test = ref(null)

const getChildMsg = () => {
  console.log(test.value.newMsg)
  test.value.logMsg()
}


</script>

<style lang="scss" scoped>

</style>