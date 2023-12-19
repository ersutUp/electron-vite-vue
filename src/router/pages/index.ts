
import { CreateRouteRecordRaw } from '../index'

const pages: CreateRouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/HelloWorld.vue'),
    meta: {
      title: '首页',
      icon: 'home'
    },
  },
  {
    path: '/test',
    name: 'test',
    
    children: [
      {
        path: 'store',
        name: 'store',
        component: () => import('@/pages/StoreTest.vue'),
        meta: {
          title: '测试store',
          icon: 'info'
        }
      }
    ]
  }
]

export default pages;