import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import About from '@/views/AboutView.vue'

const routes = [
  
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    }
  
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
