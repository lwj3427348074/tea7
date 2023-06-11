<template>
  <div class="order container">
    <header>
      <div>
        <van-icon name="arrow-left" @click="$router.back()" />
      </div>
      <div>
        <span>提交订单</span>
      </div>
      <div>
        <span>完成</span>
      </div>
    </header>
    <section>
      <div class="path">
        <h3 class="path-title">收货信息</h3>
        <div class="path-content" @click="goAddress">
          <div>
            <span>{{ address.name }}</span>
            <span>{{ address.tel }}</span>
          </div>
          <div>
            <span>{{ address.province }}</span>
            <span>{{ address.city }}</span>
            <span>{{ address.county }}</span>
            <span>{{ address.addressDetail }}</span>
          </div>
        </div>
      </div>
      <div class="payment">
        <div class="payment-title">支付方式</div>
        <van-radio-group v-model="radioPayment">
          <van-radio name="ali">支付宝</van-radio>
          <van-radio name="wx">微信</van-radio>
        </van-radio-group>
      </div>
      <div class="goods">
        <ul>
          <li v-for="g in goodsList" :key="g.id">
            <div>
              <img :src="g.goods_imgUrl" alt="">
            </div>
            <div class="goods-content">
              <h4>{{ g.goods_name }}</h4>
              <div class="goods_total">
                <span>￥{{ g.goods_price }}</span>
                <span>x{{ g.goods_num }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <footer>

      <div class="total">
        <div>共有
          <span class="total-active">{{orders.num }}</span>
          件,
        </div>
        <div>
          <span>总金额：</span>
          <span class="total-active">￥{{ orders.price }}</span>
        </div>
      </div>
      <div class="order" @click="goPayment">提交订单</div>
    </footer>
  </div>

</template>

<script>
import qs from 'qs'
import { Toast } from 'vant'
import http from '@/request/api/request'
import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
  name: 'Order',
  data() {
    return {
      goodsList: [],
      radioPayment: 'ali',
      address: {},
      selectListId: [],
      orders: {
        price: 0,
        num: 0,
      },
    }
  },
  computed: {
    ...mapState({
      order_id: (state) => state.order.order_id,
    }),
    ...mapGetters(['defaultAddress']),
  },
  methods: {
    ...mapMutations(['initData', 'initOrder']),
    //选择收货地址
    goAddress() {
      this.$router.push({
        path: '/address',
        query: {
          type: 'select',
        },
      })
    },
    //提交订单
    goPayment() {
      if (this.address) {
        //发送请求 1.修改订单状态 2.删除购物车数据
        http
          .$axios({
            url: 'api/submitOrder',
            method: 'POST',
            headers: {
              token: true,
            },
            data: {
              orderId: this.order_id,
              shopArr: this.selectListId,
            },
          })
          .then((res) => {
            console.log(res)
            let newArr = []
            this.goodsList.forEach((g) => {
              newArr.push(g.goods_name)
            })

            //支付传递的参数
            let dataOrder = {
              orderId: this.order_id,
              name: newArr.join(''),
              price: this.orders.price,
            }
            console.log(qs.stringify(dataOrder))
            if (res.success) {
              http
                .$axios({
                  url: 'api/payment',
                  method: 'POST',
                  headers: {
                    token: true,
                    'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  //qs是增加安全性的序列化
                  data: qs.stringify(dataOrder),
                })
                .then((res) => {
                  if (res.success) {
                    window.location.href = res.paymentUrl
                  }
                })
            }
          })
      } else {
        Toast.fail('请填写收货地址')
      }
    },
    //查询订单
    selectOrder() {
      http
        .$axios({
          url: 'api/selectOrder',
          method: 'POST',
          headers: {
            token: true,
          },
          data: {
            order_id: this.order_id,
          },
        })
        .then((res) => {
          this.initOrder(res.data)
          //订单金额和件数
          this.orders.price = res.data[0].goods_price
          this.orders.num = res.data[0].goods_num
        })
    },
    //查询地址
    selectAddress() {
      http
        .$axios({
          url: 'api/selectAddress',
          method: 'POST',
          headers: {
            token: true,
          },
        })
        .then((res) => {
          this.initData(res.data)
          //有默认收货地址
          if (this.defaultAddress.length) {
            this.address = this.defaultAddress[0]
          } else {
            this.address = res.data[0]
          }
        })
    },
  },
  activated() {
    this.$bus.$on('selectAddress', (data) => {
      this.address = JSON.parse(data)
    })
    //选中的商品id号
    this.selectListId = JSON.parse(this.$route.query.detail)
    this.goodsList = JSON.parse(this.$route.query.goodsList)
    this.selectOrder()
  },
  created() {
    this.goodsList = JSON.parse(this.$route.query.goodsList)
    this.selectAddress()
  },
}
</script>

<style lang="less" scoped>
.order {
  header {
    width: 100vw;
    height: 2.75rem;
    background-color: #b0352f;
    display: flex;
    justify-content: space-between;
    div {
      flex: 1;
      text-align: center;
      span {
        color: #fff;
        line-height: 2.75rem;
      }
      span:last-child {
        margin: 0.625rem;
      }
      i {
        display: block;
        width: 2.75rem;
        height: 2.75rem;
        font-size: 1.125rem;
        line-height: 2.75rem;
        text-align: center;
        color: #fff;
      }
    }
    div:last-child {
      text-align: right;
    }
  }
  section {
    flex: 1;
    background-color: #f7f7f7;
    overflow: auto;
    .path-title {
      padding: 0.9375rem;
      font-size: 1.125rem;
    }
    .path-content {
      padding: 0.375rem 0.9375rem;
      font-size: 0.875rem;
      background-color: #fff;
      span {
        padding-right: 0.375rem;
      }
    }
    .payment {
      padding: 0.375rem 0.625rem;
      margin-top: 15px;
      background-color: #fff;
      .payment-title {
        font-size: 1rem;
      }
      .van-radio-group {
        padding: 0.375rem 0;
        display: flex;
        .van-radio {
          padding-right: 0.625rem;
        }
      }
    }
    .goods {
      padding: 0.375rem 0.625rem;
      margin-top: 15px;
      background-color: #fff;
      ul {
        li {
          display: flex;
          align-items: center;
          img {
            width: 4.625rem;
            height: 4.625rem;
            padding: 0.3125rem;
          }
          .goods-content {
            flex: 1;
            height: 5.5rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 0.3125rem 0 0.3125rem 0.9375rem;
            h4 {
              font-weight: 400;
            }
            .goods_total {
              display: flex;
              justify-content: space-between;
              span:first-child {
                color: #b0352f;
              }
            }
          }
        }
      }
    }
  }
  footer {
    justify-content: space-between;
    display: flex;
    width: 100%;
    height: 3rem;
    border-top: 1px solid #ccc;
    align-items: center;

    .total {
      flex: 1;
      font-size: 0.875rem;
      display: flex;
      justify-content: start;
      .total-active {
        color: #b0352f;
      }
      div {
        margin-left: 0.625rem;
      }
    }
    .order {
      width: 7.5rem;
      height: 100%;
      text-align: center;
      line-height: 3rem;
      padding: 0 1.25rem;
      background-color: #b0352f;
      color: #fff;
      font-size: 1rem;
    }
  }
}
</style>