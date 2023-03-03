<template>
  <div class="header_content">
    <div class="l_content">
      <el-button
        style="margin: 0px 10px 0px 0px"
        type="info"
        size="small"
        :icon="Expand"
      />
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="item in breadCrumbs">{{ item }}</el-breadcrumb-item>
        
      </el-breadcrumb>
    </div>

    <div class="r_content">
      <el-dropdown>
        <el-avatar :src="circleUrl"></el-avatar>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Expand } from "@element-plus/icons-vue";

import { ref } from "vue";
import { storeToRefs } from "pinia";
import { mainStore } from "@/store/store";
const store = mainStore();
const { breadCrumbs } = storeToRefs(store);

const circleUrl = ref(
  "https://ts1.cn.mm.bing.net/th?id=OIP-C.56662o4yV01NUau07Nm5fwAAAA&w=176&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
);
</script>

<style lang="scss" scoped>
.header_content {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .l_content {
    display: flex;
    align-items: center;
  }

  .r_content {
    display: flex;
    // margin-right: 50px;
    align-content: center;

    .el-dropdown {
      display: flex;
      align-items: center;
    }
  }
}
</style>
