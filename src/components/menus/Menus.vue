<template>
  <div class="logo">
    <img
      src="@/assets/images/logo.jpg"
      alt="图标"
      style="width: 40px; height: 40px"
    />
    <span style="font-size: 16px; margin-left: 10px">题库管理系统</span>
  </div>
  <el-menu
    background-color="#304156"
    text-color="#bfcbd9"
    active-text-color="#409eef"
    :default-active="navMenu.replace('/', '')"
    router
    unique-opened
    class="el-menu-vertical-demo"
    :collapse="false"
  >
    <el-menu-item index="index">
      <el-icon><HomeFilled /></el-icon>
      <template #title>首页</template>
    </el-menu-item>
    <el-sub-menu
      class="subMenu"
      index="user"
    >
      <template #title>
        <el-icon><User /></el-icon>
        <span>用户模块</span>
      </template>
      <el-menu-item index="user">用户列表</el-menu-item>
      <el-menu-item index="role">角色列表</el-menu-item>
      <el-menu-item index="authority">权限配置</el-menu-item>
    </el-sub-menu>

    <el-sub-menu
      class="subMenu"
      index="question"
    >
      <template #title>
        <el-icon><MessageBox /></el-icon>
        <span>题库管理</span>
      </template>
      <el-menu-item index="questionList">题库列表</el-menu-item>
      <el-menu-item index="questionSort">题库分类</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { mainStore } from "@/store/store";
const store = mainStore();
const { navMenu } = storeToRefs(store);
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 240px;
  height: calc(100vh - 60px);
}
.el-sub-menu .el-menu-item {
  background-color: #1f2d3d;
  &:hover {
    background-color: #001528 !important;
  }
}
.is-active {
  background-color: #001528 !important;
}
.logo {
  height: 60px;
  background-color: #304156;
  display: flex;
  align-items: center;
  padding-left: 20px;
  color: #fff;
}
</style>
