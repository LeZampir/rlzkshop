import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import About from '../views/About.vue'
import Clothes from '../views/Clothes.vue'
import Hats from '../views/Hats.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/clothes',
    name: 'Clothes',
    component: Clothes
  },
  {
    path: '/hats',
    name: 'Hats',
    component: Hats
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
