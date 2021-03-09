import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home/home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: "Home",
    component: Home
  },
  {
    path: '/',
    name: "Home",
    component: Home
  },
  {
    path: '/mini',
    name: "Mini",
    component: () => import('../views/Mini/mini.vue')
  },
  {
    path: '/profile',
    name: "Profile",
    component: () => import('../views/Profile/profile.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
