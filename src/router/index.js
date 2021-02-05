import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DATA from '../views/data_elast.vue'
Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
    
  },
  {
    path: '/data',
    name: 'DATA',
    component: DATA
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
