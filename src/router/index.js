import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

import PrimeiroComponente from "../components/PrimeiroComponente.vue";
import LifeCycle from "../components/LifeCycle.vue";
import Pessoa from "../components/PessoaItem.vue";
import HeaderItem from "../components/HeaderItem.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/primeiro',
    name: 'PrimeiroComponente',
    component: PrimeiroComponente
  },
  {
    path: '/life',
    name: 'LifeCycle',
    component: LifeCycle
  },
  {
    path: '/pessoa',
    name: 'Pessoa',
    component: Pessoa
  },
  {
    path: '/header',
    name: 'HeaderItem',
    component: HeaderItem
  },
  {
    path: '/users/:id',
    component: Pessoa
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
