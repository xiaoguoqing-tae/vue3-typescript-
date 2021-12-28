import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import index from '../pages/index.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/today', 
    name: 'today',
    component: () => import('../pages/Today.vue')
  },
  {
    path: '/tomorrow',
    name: 'tomorrow',
    component: () => import('../pages/Tomorrow.vue')
  },
  {
    path: '/week',
    name: 'week',
    component: () => import('../pages/Week.vue')
  },
  {
    path: '/month',
    name: 'month',
    component: () => import('../pages/Month.vue')
  },
  {
    path: '/year',
    name: 'year',
    component: () => import('../pages/Year.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
