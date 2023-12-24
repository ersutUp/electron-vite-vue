<template>
  <ElContainer style="height: 100%;">
    <ElHeader :height="HEADER_HEIGHT" style="padding: 0;">
      <div class="logo">
        <img src="@/assets/electron.svg" />
      </div>
    </ElHeader>
    <ElMain class="menus">

      <MenuButton text="首页" to-page="/home">
        <i-ep-home-filled />
      </MenuButton>

      <MenuButton text="商店" to-page="/test/store">
        <i-ep-shopping-trolley />
      </MenuButton>

      <MenuButton text="统计图">
        <i-ep-histogram />
      </MenuButton>

    </ElMain>

    <ElFooter :height="FOOTER_HEIGHT" class="footers">

      <MenuButton text="设置" to-page="/setting">
        <i-ep-setting />
      </MenuButton>

    </ElFooter>
  </ElContainer>
</template>
<style scoped>
.logo {
  width: 42px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.logo img {
  width: 100%;
}

.footers,
.menus {
  padding: 0 !important;
}


.menu:first-child {
  padding-top: 10px;
}
</style>
<script setup lang="ts">
import { ElContainer, ElFooter, ElHeader, ElMain } from 'element-plus';
import { useRouter } from 'vue-router';
import MenuButton from './MenuButton.vue';

const HEADER_HEIGHT: string = "60px";
const FOOTER_HEIGHT: string = "90px";

const router = useRouter();

const toHome = () => {
  router.push('/home');
}
const toStore= () => {
  router.push('/test/store');
}



</script>