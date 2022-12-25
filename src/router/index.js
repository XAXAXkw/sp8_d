import { createRouter, createWebHashHistory } from 'vue-router'
import SplashComp from '../components/SplashComp.vue'


const routes = [
 
   {
    path: '/',
    name: 'splashcomp',
    component: SplashComp
  },
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
