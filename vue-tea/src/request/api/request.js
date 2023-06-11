import axios from "axios";
import store from '@/store/index'
import router from "@/router";
import { Toast } from 'vant';

export default {
  common: {
    method: 'GET',
    data: {},
    params: {},
    headers: {}
  },
  $axios(options = {}) {
    options.method = options.method || this.common.method
    options.data = options.data || this.common.data
    options.params = options.params || this.common.params
    options.headers = options.headers || this.common.headers

    //请求前 ==> 显示加载中
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
    });

    //判断是否是登录状态
    if (options.headers.token) {
      options.headers.token = store.state.user.token
      if (!options.headers.token) {
        //没有登录
        router.push('/userlogin')
      }
    }

    return axios(options).then(v => {
      // console.log(v);
      let data = v.data.data

      // if (data.code === 1000) {
      //   Toast.clear()
      //   return router.push('/userlogin')
      // }

      return new Promise((res, rej) => {
        if (!v) return rej();


        setTimeout(() => {
          //关闭加载中
          Toast.clear()
        }, 500)

        res(data)
      })
    })

  }
}