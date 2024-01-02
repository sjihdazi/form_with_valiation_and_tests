import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/pages/LoginPage.vue')
    },
    {
      name: 'register',
      path: '/register',
      component: () => import('@/pages/RegisterAccountPage.vue')
    }
  ]
})

export default router
