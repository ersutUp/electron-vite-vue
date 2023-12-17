<script setup lang="ts">
import { UserInfo, useUserStore } from "@/store/UserStore";
import { MutationType, storeToRefs } from "pinia";
import { ElButton, ElIcon, ElInput, ElNotification } from 'element-plus';
import { useRouter } from "vue-router";
const router = useRouter()

const userStore = useUserStore()

const { user } = storeToRefs(userStore);

const changeUser = () => {
  userStore.ersut()
}

//订阅商店
userStore.$subscribe((mutation, state) => {
  const type: MutationType = mutation.type;
  ElNotification.info({
    title: '用户年龄改变',
    message: `新年龄：${state.user.age}`,
    type: 'success'
  })
})

const backPage = () => {
  router.back()
}
</script>

<template>
  <p>
    userName: {{ user.name }}<br />
    userName: {{ user.age }}
  </p>
  <ElButton @click="changeUser">
    调用商店方法
  </ElButton>
  <ElButton @click="user.age++">
    修改商店属性
  </ElButton>
  <ElButton @click="backPage">
    返回上个页面
  </ElButton>
</template>
