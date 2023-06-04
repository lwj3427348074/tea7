<template>
  <div class="login-message container">
    <Header>
      <span>找回密码</span>
    </Header>
    <section>
      <div class="login_tel">
        <input type="text" v-model.trim="userPwd" placeholder="请输入新密码">
      </div>

      <div class="login_btn" @click="submitBtn">
        确认
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
      userPwd: '',
      //验证规则
      rules: {
        //密码
        userPwd: {
          rule: /^\w{6,12}$/,
          msg: '密码不能为空，6-12位',
        },
      },
    }
  },
  methods: {
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
    submitBtn() {
      if (!this.validate('userPwd')) return
      //确认修改
      http
        .$axios({
          url: '/api/recovery',
          method: 'POST',
          data: {
            userTel: this.$route.query.userTel,
            userPwd: this.userPwd,
          },
        })
        .then((res) => {
          Notify({
            message: res.msg,
            color: '#fff',
            background: 'rgba(0,0,0,.8)',
          })

          if (res.success) {
            this.$router.push({
              path: '/userlogin',
            })
          }
        })
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
    .login_btn {
      text-align: center;
      background-color: #b0352f;
      color: #fff;
      font-size: 0.9375rem;
    }
  }
}
</style>