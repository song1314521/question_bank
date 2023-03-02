<template>
  <div class="common-layout">
    <el-container>
      <el-aside
        width="240px"
        class="aside"
      >
        <Menu></Menu>
      </el-aside>
      <el-container>
        <el-header class="header">
          <Header></Header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Menu from "@/components/menus/Menus.vue";
import Header from "@/components/header/Header.vue";
</script>

<style lang="scss" scoped>
.header {
  background-color: #dadce0;
  color: #fff;
}
.aside {
  color: #fff;
}
.common-layout,
:deep(.el-container) {
  height: 100%;
}
</style>
