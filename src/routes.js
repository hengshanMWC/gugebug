import { createRouter, createWebHistory } from 'vue-router'
import home from './pages/home/index.vue'

const routes = [
  {
    path: '/',
    component: home,
  },
]

export default routes

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
