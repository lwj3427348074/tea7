<template>
  <div class="login-message container">
    <Header>
      <span>找回密码</span>
    </Header>
    <section>
      <div class="login_tel">
        <input type="text" v-model.trim="userTel" placeholder="请输入手机号" pattern="[0-9]*">
      </div>
      <div class="login_code">
        <input type="text" v-model.trim="userCode" placeholder="请输入短信验证码" pattern="[0-9]*">
        <button :disabled="disabled" @click="sendCode">{{ codeMsg }}</button>
      </div>
      <div class="login_btn" @click="next">
        下一步
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
  name: 'RecoveryIndex',
  components: {
    Header,
    Tabber,
  },
  data() {
    return {
      userTel: '',
      userCode: '',
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
      code: 'a', //收到的短信验证码
    }
  },
  methods: {
    goUserLogin() {
      this.$router.push('/userLogin')
    },
    goRegister() {
      this.$router.push('/register')
    },
    //获取短信验证码按钮
    sendCode() {
      //前端验证
      if (!this.validate('userTel')) return

      //查询用户是否存在
      http
        .$axios({
          url: '/api/selectUser',
          method: 'POST',
          data: {
            userTel: this.userTel,
          },
        })
        .then((res) => {
          if (!res.success) {
            Notify({
              message: res.msg,
              color: '#fff',
              background: 'rgba(0,0,0,.8)',
            })
            return
          } else {
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
          }
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
    //下一步
    next() {
      if (this.code != this.userCode) {
        if (!this.validate('userTel')) return
        //提示信息
        Notify({
          message: '验证码不正确',
          color: '#fff',
          background: 'rgba(0,0,0,.8)',
        })
        return
      } else {
        this.$router.push({
          name: 'RecoveryBtn',
          query: {
            userTel: this.userTel,
          },
        })
      }
    },
  },
}
</script>

<style scoped lang="less">
.login-message {
  height: 100vh;
  background-color: #f5f5f5;
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
        background-color: #f5f5f5;
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
        background-color: #f5f5f5;
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
  }
}
</style>