<script setup lang="ts">
import { ElButton, ElIcon, ElInput, ElNotification } from 'element-plus';
import { ref } from 'vue'
import { PublicInfo } from '@/../public/pojo/Info'
import { ipcRenderer } from 'electron';
import { useRoute, useRouter } from 'vue-router';

const msg: string = "Electron + Vite + Vue + Element Plus"

const count = ref(0)

const router = useRouter()
const route = useRoute()



console.log(route.meta.title);

//测试公共ts 
const sendInfo = () => {
  const publicInfo: PublicInfo = {
    name: '测试公共TS'
  }
  ipcRenderer.send("testPunlic", JSON.stringify(publicInfo))
}

const toTestStorePage = () => {
  router.push('/test/store').then(() => {
    console.log('跳转成功')
  }).catch(() => {
    console.log('跳转失败')
  })
}

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
    <ElButton @click="toTestStorePage">
      打开商店测试页面
    </ElButton>
    <p>
      Edit
      <code>pages/HelloWorld.vue</code> to test HMR
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
