import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//公共css文件
// import('./assets/css/common.css')
import('@/assets/css/common.css')

//导入封装好的Vant2组件按需引入
import getVant from '@/plugins/index'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()


getVant(Vue)


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
