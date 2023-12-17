import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import pages from './pages/index';


//拓展routes的类型
export type CreateRouteRecordRaw = RouteRecordRaw & {
}

//创建路由实例并传递 `routes` 配置
const router = createRouter({
  //内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes: [...pages],
})
//全局前置守卫
router.beforeEach((to, from, next) => {
  // 路由发生变化修改页面title
  if (typeof to.meta.title  === "string") {
    document.title = to.meta.title;
  }
  next();
})

export default router;