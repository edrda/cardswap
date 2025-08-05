import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Dashboard from '../pages/Dashboard.vue'
import CreateTrade from '../pages/CreateTrade.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/trades/new', name: 'CreateTrade', component: CreateTrade }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: '', // desabilita classe padrão
  linkExactActiveClass: ''
})

export default router
