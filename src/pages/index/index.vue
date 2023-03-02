<template>
  首页
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { mainStore } from "@/store/store";
const store = mainStore();
const { hello } = storeToRefs(store);
const change = () => {
  store.setHello("我变了232");
};
</script>

<style lang="scss" scoped>
div {
  color: red;
}
</style>
