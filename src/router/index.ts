import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/element-plus',
      name: 'element-plus',
      component: () => import('../views/Element_Plus.vue')
    },{
      path: '/i18n',
      name: 'i18n',
      component: () => import('../views/i18n.vue')
    },
  ]
})

export default router
