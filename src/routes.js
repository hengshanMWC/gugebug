import { createRouter, createWebHashHistory } from 'vue-router'
import home from './pages/home/index.vue'

const routes = [
  {
    path: '/',
    component: home,
  },
]

export default routes

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
