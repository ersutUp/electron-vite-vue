import { createApp } from 'vue'
import "./style.css"
import App from './App.vue'
import './samples/node-api'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//注册图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);

app
  .use(ElementPlus)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })

//icon 注册为全局组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}