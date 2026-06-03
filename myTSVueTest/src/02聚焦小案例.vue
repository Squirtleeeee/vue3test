<template>
  <input ref="autoFocusInput" v-model="inputValue" placeholder="请输入内容" />
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";

const inputValue = ref<string>("");

const autoFocusInput = ref<null | HTMLInputElement>(null);

onMounted(async () => {
  await nextTick();//数据变化后立即获取

  //autoFocusInput.value.focus()//直接获取会报错，因为数据变化后，DOM还没有更新，所以需要等待下一次DOM更新完成后再获取
  if (autoFocusInput.value) {
    autoFocusInput.value.focus();
  }
});
</script>