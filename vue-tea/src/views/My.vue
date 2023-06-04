<template>
  <div class="my">
    <header>
      <div class="my-header">
        <div class="feader-login">

          <div class="user-info" v-if="loginStatus">
            <img :src="userInfo.imgUrl" alt="">
            <span>{{ userInfo.nickName }}</span>
          </div>
          <div class="login" @click="goLogin" v-else>登录 / 注册</div>
        </div>
      </div>
    </header>
    <section>
      <ul>
        <li>
          地址管理
        </li>
        <li v-if="loginStatus" @click="loginOut">
          退出登录
        </li>
      </ul>
    </section>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Tabbar from '@/components/common/Tabbar.vue'
export default {
  name: 'My',
  components: {
    Tabbar,
  },
  computed: {
    ...mapState({
      loginStatus: (state) => state.user.loginStatus,
      userInfo: (state) => state.user.userInfo,
    }),
  },
  methods: {
    ...mapMutations(['loginOut']),
    goLogin() {
      this.$router.push('/login')
    },
    //退出登录
  },
}
</script>

<style scoped lang="less">
.my {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: rgb(245, 245, 245);
  header {
    overflow: hidden;
    .my-header {
      background: rgb(182, 79, 74);
      width: 100%;
      height: 9.75rem;
      display: flex;
      flex-direction: column;
      .feader-login {
        flex: 1;
        width: 100%;
        position: relative;
        .login {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: inline-block;
          background: rgba(255, 181, 0, 0.9);
          padding: 5px 20px;
          color: #fff;
          border-radius: 5px;
          margin: 0 auto;
          font-size: 0.9375rem;
        }
        .user-info {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          img {
            width: 4.125rem;
            height: 4.125rem;
            border-radius: 50%;
          }
          span {
            text-align: center;
            font-size: 0.9375rem;
            color: #fff;
            background: rgba(255, 181, 0, 0.9);
            border-radius: 5px;
            margin-top: 10px;
          }
        }
      }
    }
  }
  section {
    overflow: hidden;
    ul {
      li {
        padding: 0.9375rem;
        font-size: 1rem;
      }
    }
  }
}
</style>