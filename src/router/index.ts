import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },{
      path: '/personView',
      name: 'personView',
      component: () => import('../views/PersonView.vue')
    },{
      path: '/element-plus',
      name: 'element-plus',
      component: () => import('../views/Element_Plus.vue')
    },{
      path: '/i18n',
      name: 'i18n',
      component: () => import('../views/i18n.vue')
    },{
      path: '/vue-demo',
      name: 'vue-demo',
      component: () => import('../views/VueDemo.vue')
    },{
      path: '/vue-note',
      name: '/vue-note',
      component: () => import('../views/VueNote.vue')
    },{
      path: '/typeScript',
      name: 'typeScript',
      component: () => import('../views/TypeScript.vue')
    },{
      path: '/es6',
      name: 'es6',
      component: () => import('../views/ES6.vue')
    },{
      path: '/ts_more',
      name: 'ts_more',
      component: () => import('../views/TypeScript_More.vue')
    },{
      path: '/module',
      name: 'module',
      component: () => import('../views/VueModule.vue')
    },{
      path: '/screenDesigner',
      name: 'screenDesigner',
      component: () => import('../views/ScreenDesigner.vue')
    },
  ]
})

export default router
