import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/home',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/list',
    name: 'List',
    component: () =>
      import(/* 懒加载 */ '../views/List.vue'),
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () =>
      import(/* 懒加载 */ '../views/Cart.vue'),
  },
  {
    path: '/my',
    name: 'My',
    component: () =>
      import(/* 懒加载 */ '../views/My.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
