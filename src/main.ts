import { createApp } from 'vue'
import "./style.css"
import App from './App.vue'
import './samples/node-api'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import router from './router'

const pinia = createPinia();
const app = createApp(App);
app
  .use(router)
  .use(pinia)
  .use(ElementPlus)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
