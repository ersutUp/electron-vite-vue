
import { CreateRouteRecordRaw } from '../index'

const pages: CreateRouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/pages/Home.vue'),
        meta: {
          title: '首页',
          icon: 'home'
        },
      },
      {
        path: '/setting',
        name:'setting',
        component: () => import('@/pages/Setting.vue'),
        meta: {
          title: '设置',
        },
      }
    ]
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