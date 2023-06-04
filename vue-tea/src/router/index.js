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
  {
    path: '/search',
    name: 'Search',
    component: () =>
      import(/* 懒加载 */ '../views/Search.vue'),
    children: [
      {
        path: '/',
        name: 'SearchIndex',
        component: () =>
          import(/* 懒加载 */ '../components/search/SearchIndex.vue'),
      },
      {
        path: 'list',
        name: 'list',
        component: () =>
          import(/* 懒加载 */ '../components/search/SearchList.vue'),
      }
    ]
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () =>
      import(/* 懒加载 */ '../views/Detail.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* 懒加载 */ '../views/login/Login.vue'),
  },
  {
    path: '/userLogin',
    name: 'UserLogin',
    component: () =>
      import(/* 懒加载 */ '../views/login/UserLogin.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () =>
      import(/* 懒加载 */ '../views/login/Register.vue'),
  },
  {
    path: '/recovery',
    name: 'Recovery',
    component: () =>
      import(/* 懒加载 */ '../views/recovery/Recovery.vue'),
    children: [
      {
        path: '/',
        name: 'RecoveryIndex',
        component: () =>
          import(/* 懒加载 */ '../views/recovery/RecoveryIndex.vue'),
      },
      {
        path: '/recoverybtn',
        name: 'RecoveryBtn',
        component: () =>
          import(/* 懒加载 */ '../views/recovery/RecoveryBtn.vue'),
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
