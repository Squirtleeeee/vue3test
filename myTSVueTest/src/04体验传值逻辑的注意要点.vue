<template>
  <div>
  
    <ComponentsTest01 ref="componentTest" :name = "nameExample" @msg="getMsg"></ComponentsTest01>
  <button @click="callLogMsg">打印一下</button> 
  </div>
</template>

<script setup lang="ts">
import ComponentsTest01 from "./components/ComponentsTest01.vue";

import { ref } from "vue";

const componentTest = ref<InstanceType<typeof ComponentsTest01> | null>(null);

const callLogMsg = () => {
  if (componentTest.value) {
    componentTest.value.logMessage();
  }
};
 
const nameExample = ref<string>('RUB')

const getMsg = (val: string) => {
  console.log(val);
};



</script>