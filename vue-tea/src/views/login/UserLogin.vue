<template>
  <div class="login-message container">

    <Header></Header>
    <section>
      <div class="login_tel">
        <input type="text" placeholder="请输入手机号" v-model.trim="userTel" pattern="[0-9]*">
      </div>
      <div class="login_code">
        <input type="text" v-model.trim="userPwd" placeholder="请输入密码">

      </div>
      <div class="login_btn" @click="login">
        登录
      </div>
      <div class="tab">
        <span @click="goLogin">短信登录</span>
        <span @click="goRecovery">找回密码</span>
        <span @click="goRegister">快速注册</span>
      </div>
    </section>
    <Tabber></Tabber>
  </div>
</template>

<script>
import { Notify } from 'vant'
import { mapMutations } from 'vuex'
import http from '@/request/api/request'
import Header from '@/views/login/Header.vue'
import Tabber from '@/components/common/Tabbar.vue'
export default {
  name: 'UserLogin',
  components: {
    Header,
    Tabber,
  },
  data() {
    return {
      userTel: '',
      userPwd: '',
      //验证规则
      rules: {
        //手机号
        userTel: {
          rule: /^1[23456789]\d{9}$/,
          msg: '手机号不能为空，并且是11位数字',
        },

        //密码
        userPwd: {
          rule: /^\w{6,12}$/,
          msg: '密码不能为空，6-12位',
        },
      },
    }
  },
  methods: {
    ...mapMutations(['userLogin']),
    goLogin() {
      this.$router.push('/login')
    },
    goRecovery() {
      this.$router.push('/recovery')
    },
    goRegister() {
      this.$router.push('/register')
    },
    login() {
      //前端验证
      if (!this.validate('userTel')) return
      if (!this.validate('userPwd')) return
      //发送请求，后端验证
      // console.log(this.userTel, this.userPwd)
      http
        .$axios({
          method: 'POST',
          url: '/api/login',
          data: {
            userTel: this.userTel,
            userPwd: this.userPwd,
          },
        })
        .then((res) => {
          //提示信息
          Notify({
            message: res.msg,
            color: '#fff',
            background: 'rgba(0,0,0,.8)',
          })
          //登录失败
          if (!res.success) return

          //登录成功==>跳转页面，存储用户信息
          this.userLogin(res.data)

          //跳转到我的页面
          this.$router.push({
            path: '/my',
          })
        })
    },
    //验证信息提示
    validate(key) {
      let bool = true
      if (!this.rules[key].rule.test(this[key])) {
        //提示信息
        Notify({
          message: this.rules[key].msg,
          color: '#fff',
          background: 'rgba(0,0,0,.8)',
        })
        bool = false
        return false
      }
      return bool
    },
  },
}
</script>

<style scoped lang="less">
.login-message {
  section {
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.25rem;
    line-height: 2.75rem;
    div {
      margin-top: 1.125rem;
      width: 100%;
      height: 2.75rem;
      border-radius: 5px;
      font-size: 0.875rem;
    }
    .login_tel {
      border: 1px solid #ccc;
      input {
        border: 0px;
        margin-left: 0.625rem;
      }
    }
    .login_code {
      display: flex;
      border: 1px solid #ccc;
      input {
        flex: 6;
        width: 60%;
        border: 0px;
        margin-left: 0.625rem;
      }
      button {
        flex: 4;
        width: 40%;
        background-color: #b0352f;
        border: 0;
        color: #fff;
        border-radius: 5px;
        font-size: 0.9375rem;
      }
    }
    .login_btn {
      text-align: center;
      background-color: #b0352f;
      color: #fff;
      font-size: 0.9375rem;
    }
    .tab {
      display: flex;
      justify-content: space-between;
      font-size: 0.875rem;
    }
  }
}
</style>