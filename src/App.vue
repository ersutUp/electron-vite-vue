<script setup lang="ts">
import LeftMenu from '@/components/LeftMenu.vue'
</script>

<template>
  <!-- 左侧菜单 -->
  <div class="left">
    <LeftMenu />
  </div>

  <!-- 主体内容 -->
  <div class="main">
    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>
</template>
<style>
.left {
  width: 80px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  display: block;
  background-color: #333;
}

.main {
  position: absolute;
  background-color: #f0f2f5;
  left: 80px;
  bottom: 0;
  top: 0;
  right: 0;
  /* padding: 3px; */
}

.main .content {
  margin: 10px;
  padding: 10px;
  height: calc(100% - 40px);
  width: auto;
  background-color: #ffffff;
  border-radius: 5px;
  /* box-sizing: border-box;
  box-shadow: 0 5px 10px #ddd;
  border-radius:5px;
  border: 1px solid #ddd; */
  overflow-y: scroll;
}
</style>
