import { USER_LOGIN, INIT_USER, LOGIN_OUT } from './mutation-types'
import { Dialog } from 'vant';
export default {
  state: {
    //登录状态
    loginStatus: false,
    //token
    token: null,
    //用户信息：用户的头像|用户昵称
    userInfo: {

    }
  },
  getters: {},
  mutations: {
    //设置
    [USER_LOGIN](state, user) {
      state.loginStatus = true
      state.token = user.token
      state.userInfo = user

      //持久化存储是本地存储
      localStorage.setItem('teaUserInfo', JSON.stringify(user))
    },
    //读取
    [INIT_USER](state, user) {
      let userInfo = JSON.parse(localStorage.getItem('teaUserInfo'))
      if (userInfo) {
        state.loginStatus = true
        state.token = userInfo.token
        state.userInfo = userInfo
      }
    },
    //退出登录
    [LOGIN_OUT](state, user) {
      Dialog.confirm({
        title: '提示',
        message: '确认退出吗',
      })
        .then(() => {
          // on confirm   
          state.loginStatus = false
          state.token = null
          state.userInfo = {}
          localStorage.removeItem('teaUserInfo')
        })
        .catch(() => {

        });

    }
  },
  actions: {},
}