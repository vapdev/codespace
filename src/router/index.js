import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '../stores/auth.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('../views/HomeView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  const auth = useAuth();
  if (to.name !== 'login' && !auth.token) next({ name: 'login' })
  else next()
})

export default router
