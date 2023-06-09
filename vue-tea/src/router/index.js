import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Home.vue'

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};

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
    meta: {
      keepAlive: true, //此组件需要被缓存
    },
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
  {
    path: '/address',
    name: 'Address',
    component: () =>
      import(/* 懒加载 */ '../views/address/Address.vue'),
    children: [
      {
        path: '/',
        name: 'AddressIndex',
        component: () =>
          import(/* 懒加载 */ '../views/address/AddressIndex.vue'),
      },
      {
        path: '/addressList',
        name: 'AddressList',
        component: () =>
          import(/* 懒加载 */ '../views/address/AddressList.vue'),
      }
    ]
  },
  {
    path: '/order',
    name: 'Order',
    meta: {
      keepAlive: true, //此组件需要被缓存
    },
    component: () =>
      import(/* 懒加载 */ '../views/Order.vue'),
  },
  {
    path: '/payment',
    name: 'Payment',
    component: () =>
      import(/* 懒加载 */ '../views/Payment.vue'),
  },
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
//导航守卫
router.beforeEach((to, from, next) => {
  let nextRoute = ['Payment', 'Cart', 'Address', 'Order', 'AddressIndex', 'AddressList']
  //是否是登录中
  let userInfo = JSON.parse(localStorage.getItem('teaUserInfo'))
  //当前进入的页面，是不是需要验证的页面
  if (nextRoute.indexOf(to.name) >= 0) {
    if (!userInfo) {
      router.push('/userlogin')
    }
  }
  next()
})

export default router
