<template>
  <div class="login-message container">
    <Header>
      <span>注册</span>
    </Header>
    <section>
      <div class="login_tel">
        <input type="text" v-model.trim="userTel" placeholder="请输入手机号" pattern="[0-9]*">
      </div>
      <div class="login_code">
        <input type="text" v-model.trim="userCode" placeholder="请输入短信验证码" pattern="[0-9]*">
        <button :disabled="disabled" @click="sendCode">{{ codeMsg }}</button>
      </div>
      <div class="login_tel">
        <input type="text" v-model.trim="userPwd" placeholder="请设置密码" pattern="[0-9]*">
      </div>
      <div class="login_btn" @click="regisster">
        注册
      </div>

    </section>
    <Tabber></Tabber>
  </div>
</template>

<script>
import { Notify } from 'vant'
import http from '@/request/api/request'
import Header from '@/views/login/Header.vue'
import Tabber from '@/components/common/Tabbar.vue'
export default {
  name: 'Register',
  components: {
    Header,
    Tabber,
  },
  data() {
    return {
      userTel: '',
      userCode: '',
      userPwd: '',
      disabled: false,
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
      codeNum: 6,
      codeMsg: '获取短信验证码',
      code: '', //收到的短信验证码
    }
  },
  methods: {
    //获取短信验证码按钮
    sendCode() {
      //前端验证
      if (!this.validate('userTel')) return

      //请求短信验证码接口
      http
        .$axios({
          url: '/api/code',
          method: 'POST',
          data: {
            userTel: this.userTel,
          },
        })
        .then((res) => {
          if (res.success) {
            this.code = res.data
          }
        })

      //禁用
      this.disabled = true
      //倒计时
      let timer = setInterval(() => {
        --this.codeNum
        this.codeMsg = `重新发送${this.codeNum}`
      }, 1000)

      //判断什么时候停止定时器
      setTimeout(() => {
        clearInterval(timer)
        this.codeNum = 6
        this.disabled = false
        this.codeMsg = '获取短信验证码'
      }, 6000)
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
    //点击注册
    regisster() {
      // 验证密码
      if (!this.validate('userPwd')) return
      // 判断验证码是否正确
      if (this.code != this.userCode) {
        //提示信息
        Notify({
          message: '验证码不正确',
          color: '#fff',
          background: 'rgba(0,0,0,.8)',
        })
        return
      } else {
        //验证码正确

        http
          .$axios({
            url: '/api/register',
            method: 'POST',
            data: {
              userTel: this.userTel,
              userPwd: this.userPwd,
            },
          })
          .then((res) => {
            console.log(res)
          })
      }
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