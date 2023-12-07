<script setup lang="ts">
import { ElButton, ElIcon, ElInput } from 'element-plus';
import { ref } from 'vue'
import { PublicInfo } from '@/../public/pojo/Info'
import { ipcRenderer } from 'electron';

defineProps<{ msg: string }>()

const count = ref(0)

//测试公共ts 
const sendInfo = () => {
  const publicInfo: PublicInfo = {
    name: '测试公共TS'
  }
  ipcRenderer.send("testPunlic",JSON.stringify(publicInfo))
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
    <ElButton @click="sendInfo()">
      测试公共TS
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
