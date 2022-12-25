import { createRouter, createWebHashHistory } from 'vue-router'



const routes = [
 

  {
    path: '/card/:id',
    name: 'card',
    component: () => import('../components/CardComp.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../components/ListComp.vue')
  }, 
   {
    path: '/',
    name: 'splash',
    component: () => import('../components/SplashComp.vue')
  },

  {
    path: '/register',
    name: 'reigstercomp',
    component: () => import('../components/RegisterComp.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
