<script setup lang="ts">
import { ElButton, ElIcon, ElInput, ElNotification } from 'element-plus';
import { ref } from 'vue'
import { PublicInfo } from '@/../public/pojo/Info'
import { ipcRenderer } from 'electron';
import { UserInfo, useUserStore } from "@/store/UserStore"
import { MutationType, storeToRefs } from "pinia"

defineProps<{ msg: string }>()

const count = ref(0)

//测试公共ts 
const sendInfo = () => {
  const publicInfo: PublicInfo = {
    name: '测试公共TS'
  }
  ipcRenderer.send("testPunlic", JSON.stringify(publicInfo))
}

const userStore = useUserStore()

const { user } = storeToRefs(userStore);

const changeUser = () => {
  userStore.ersut()
}

//订阅商店
userStore.$subscribe((mutation, state) => {
  const type:MutationType = mutation.type;
  ElNotification.info({
    title: '用户年龄改变',
    message: `新年龄：${state.user.age}`,
    type: 'success'
  })
})

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <ElButton type="primary" @click="count++">
      <el-icon>
        <i-ep-pointer />
      </el-icon>
      count is {{ count }}
    </ElButton>
    <ElButton @click="sendInfo">
      测试公共TS
    </ElButton>
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
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
