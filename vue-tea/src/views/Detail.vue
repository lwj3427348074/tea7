<template>
  <div class="detail">
    <header>
      <div class="head-one" v-show="isShow">
        <div>
          <van-icon name="arrow-left" @click="$router.back()" />
        </div>
        <div>
          <van-icon name="wap-home-o" />
        </div>
      </div>
      <div class="head-back" v-show="!isShow" :style="styleOption">

        <van-icon name="arrow-left" @click="$router.back()" />
        <h2>商品详情</h2>
        <h2>猜你喜欢</h2>
        <van-icon name="wap-home-o" />
      </div>
    </header>
    <section ref="wrapper">
      <div>
        <div class="swipe">
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#b0352f" @change="onChange">
            <van-swipe-item v-for="s in swipeList" :key="s.id">
              <img v-lazy="s.imgUrl">
            </van-swipe-item>
            <template #indicator>
              <div class="custom-indicator">{{ current + 1 }}/{{ swipeList.length }}</div>
            </template>
          </van-swipe>
        </div>
        <div class="goods_name">
          <h1>{{ goods.name }}</h1>
          <div> {{goods.content || '2023年明前龙井，全芽的外形超漂亮，口感一级棒'}}</div>
        </div>
        <div class="goods_price">
          <div class="oprice">
            <span>￥</span>
            <b>{{ goods.price }}</b>
          </div>
          <div class="pprice">
            <span> 价格：</span>
            <del>{{ goods.price }}</del>
          </div>
        </div>
        <div>
          <img style="width: 100%;height: 500px;" :src="goods.imgUrl" alt="">
          <img style="width: 100%;height: 500px;" :src="goods.imgUrl" alt="">
        </div>
      </div>

    </section>

    <footer>
      <div class="add-cart" @click="addCart">加入购物车</div>
      <div>立即购买</div>
    </footer>
  </div>
</template>

<script>
import { Toast } from 'vant'
import BetterScroll from '@better-scroll/core'
import http from '@/request/api/request'
export default {
  name: 'Detail',
  data() {
    return {
      id: 0,
      // 控制头部的切换
      isShow: true,
      styleOption: {},
      BetterScroll: '',
      current: 0,
      goods: {},
      swipeList: [
        { id: 0, imgUrl: './images/home/swipe/swiper1.jpeg' },
        { id: 1, imgUrl: './images/home/swipe/swiper2.jpeg' },
        { id: 2, imgUrl: './images/home/swipe/swiper3.jpeg' },
        { id: 3, imgUrl: './images/home/swipe/swiper4.jpeg' },
        { id: 4, imgUrl: './images/home/swipe/swiper5.jpeg' },
      ],
    }
  },
  methods: {
    onChange(index) {
      this.current = index
    },
    async getData() {
      //显式接收
      let id = this.$route.query.id
      //隐式接收
      // console.log(this.$route.params.id)
      let res = await http.$axios({
        url: '/api/goods/id',
        params: {
          id,
        },
      })
      this.goods = res
      console.log(this.goods)
    },
    //加入购物车
    addCart() {
      let token = JSON.parse(localStorage.getItem('teaUserInfo'))
      if (!token) {
        Toast.fail('您还未登录')
        this.$router.push('/userlogin')
        return
      }
      let id = this.$route.query.id
      http
        .$axios({
          method: 'POST',
          url: '/api/addCart',
          data: {
            goodsId: id,
          },
          headers: {
            //通过true
            token: true,
          },
        })
        .then((res) => {
          if (res.success) {
            Toast.success(res.msg)
          } else {
            Toast.fail(res.msg)
          }
        })
    },
  },
  created() {
    this.id = this.$route.query.id
    this.getData()
  },
  mounted() {
    this.BetterScroll = new BetterScroll(this.$refs.wrapper, {
      // 运行在better-scroll中触发点击事件
      click: true,
      // 禁止better-scroll回弹
      bounce: false,
      probeType: 3,
    })
    this.BetterScroll.on('scroll', (pos) => {
      let posY = Math.abs(pos.y)
      let opacity = posY / 180

      opacity = opacity > 1 ? 1 : opacity
      this.styleOption = {
        opacity: opacity,
      }

      if (posY >= 50) {
        this.isShow = false
      } else {
        this.isShow = true
      }
    })
  },
  activated() {
    if (this.$route.query.id != this.id) {
      this.getData()
      this.id = this.$route.query.id
    }
  },
}
</script>

<style lang="less" scoped>
.detail {
  overflow: hidden;
  header {
    .head-one {
      position: fixed;
      width: 100%;
      height: 2.75rem;
      line-height: 2.75rem;
      z-index: 999;
      display: flex;
      justify-content: space-between;
      align-items: center;
      div {
        height: 2.125rem;
        width: 2.125rem;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.3);
        i {
          display: block;
          width: 2.125rem;
          height: 2.125rem;
          color: #fff;
          font-size: 1.125rem;
          line-height: 2.125rem;
          text-align: center;
        }
      }
    }
    .head-back {
      position: fixed;
      display: flex;
      width: 100%;
      height: 2.75rem;
      line-height: 2.75rem;
      color: #222;
      background: #fff;
      z-index: 999;
      border-bottom: 0.0625rem solid #e3e3e3;
      h2 {
        flex: 1;
        height: 100%;
        font-size: 0.875rem;
        font-weight: 400;
        display: block;
        text-align: center;
        span {
          display: inline-block;
          height: 100%;
        }
      }
      i {
        display: block;
        width: 2.75rem;
        height: 2.75rem;
        font-size: 1.125rem;
        line-height: 2.75rem;
        text-align: center;
      }
    }
  }
  section {
    height: 100vh;
    .swipe {
      width: 100vw;
      height: 23.4375rem;
      .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 1.25rem;
        height: 23.4375rem;
        line-height: 9.375rem;
        text-align: center;
        background-color: #39a9ed;
      }
      /deep/ .van-swipe__indicator {
        width: 0.5rem;
        height: 0.5rem;
        opacity: 1;
      }
      .custom-indicator {
        position: absolute;
        right: 5px;
        bottom: 5px;
        padding: 2px 5px;
        font-size: 12px;
        color: #fff;
        background: rgba(0, 0, 0, 0.1);
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .goods_name {
    padding: 1.25rem 0.625rem;
    border-bottom: 1px solid #e3e3e3;
    h1 {
      font-size: 1.25rem;
      font-weight: 500;
    }
    div {
      padding: 0.1875rem 0;
      font-size: 0.875rem;
      color: #999;
    }
  }
  .goods_price {
    padding: 1.25rem 0.625rem;
    .oprice {
      color: red;
      span {
        font-size: 0.875rem;
      }
    }
    .pprice {
      color: #999;
      font-size: 0.75rem;
      span {
      }
    }
  }
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #fff;
    border-top: 1px solid #ccc;
    width: 100%;
    height: 3.0625rem;
    div {
      width: 50%;
      line-height: 3.0625rem;
      font-size: 1rem;
      text-align: center;
      color: #fff;
      background-color: red;
      &.add-cart {
        background-color: #ff9500;
      }
    }
  }
}
</style>