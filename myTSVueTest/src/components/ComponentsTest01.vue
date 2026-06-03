<template>
  <div>
    <p>Message: {{ message }}</p>
    <button @click="logMessage">Log It</button>
    <button @click="handleClick">打印一次</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const message = ref("Hello from LogMsg");
const logMessage = () => {
  console.log(message.value);
};
defineExpose({
  logMessage,
  message,
});

//传值部分
//定义接收值的类型
type Currency = {
  name: string;
  value?: number;
  bank?: string;
};


type Emits = {
  (s: "msg", info: string): void;
};



//const props = defineProps<Currency>();
const props = withDefaults(defineProps<Currency>(), {
  value: 5000,
  bank: "sberbank"
});


console.log(props.name);
console.log(props.value);
console.log(props.bank);



const Emit = defineEmits();
const handleClick = () => {
  Emit('msg', 'testVal');
};

</script>