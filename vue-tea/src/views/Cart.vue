<template>
  <div class="cart container">
    <header>
      <div>
        <van-icon name="arrow-left" @click="$router.back()" />
      </div>
      <div>
        <span>购物车</span>
      </div>
      <div>
        <span @click="changeEdit">{{isEdit?"编辑":"完成"}}</span>
      </div>
    </header>
    <section v-if="list.length">
      <div class="cart-title">
        <van-checkbox checked-color="#b0352f" @click="checkAllFn" :value="isCheckedAll"></van-checkbox>
        <span>商品</span>
      </div>
      <ul>
        <li v-for="l,index in list" :key="index">
          <div class="check">
            <van-checkbox checked-color="#b0352f" @click="checkItem(index)" v-model="l.checked"></van-checkbox>
          </div>
          <h2>
            <img :src="l.goods_imgUrl" alt="">
          </h2>

          <div class="goods">
            <div class="goods-title">
              <span>
                {{ l.goods_name }}
              </span>
              <van-icon name="delete-o" @click="delGoodsFn(l.id)" />
            </div>
            <div class="goods-price">
              ￥{{ l.goods_price }}
            </div>
            <van-stepper v-model="l.goods_num" @change="changeNum($event,l)" />
          </div>

        </li>
      </ul>

    </section>
    <section v-else class="nodata">
      <div>
        暂无数据
        <br>
        <router-link to="/home">去首页逛逛吧</router-link>
      </div>
    </section>

    <footer v-if="list.length">
      <div class="radio">
        <van-checkbox checked-color="#b0352f" :value="isCheckedAll"></van-checkbox>
      </div>
      <div class="total" v-show="isEdit">
        <div>共有
          <span class="total-active">{{ total.num }}</span>
          件商品
        </div>
        <div>
          <span>总计：</span>
          <span class="total-active">￥{{total.price}} + 0茶币</span>
        </div>
      </div>
      <div class="order" v-if="isEdit" @click="goOrder">
        去结算
      </div>
      <div class="order" v-if="!isEdit" @click="delGoodsFn"> 删除 </div>
    </footer>
  </div>
</template>

<script>
import { Toast } from 'vant'
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
import http from '@/request/api/request'
export default {
  name: 'Cart',
  components: {},
  data() {
    return {
      checked: true,
      isEdit: true,
    }
  },
  computed: {
    ...mapState({
      list: (state) => state.cart.list,
      selectList: (state) => state.cart.selectList,
    }),
    ...mapGetters(['isCheckedAll', 'total']),
    goosList() {
      return this.selectList.map((id) => {
        return this.list.find((l) => l.id == id)
      })
    },
  },
  created() {
    this.getData()
  },
  methods: {
    ...mapMutations(['cartList', 'checkItem', 'initOrder']),
    ...mapActions(['checkAllFn', 'delGoodsFn']),
    //去结算
    goOrder() {
      if (this.selectList.length > 0) {
        //发起请求生成一个订单
        let newList = []
        this.list.forEach((l) => {
          this.selectList.filter((s) => {
            if (s == l.id) {
              newList.push(l)
            }
          })
        })
        http
          .$axios({
            url: 'api/addOrder',
            method: 'POST',
            headers: {
              token: true,
            },
            data: {
              arr: newList,
            },
          })
          .then((res) => {
            if (!res.success) return
            //存储订单号
            this.initOrder(res.data)
            //进入提交订单页面
            this.$router.push({
              path: '/order',
              query: {
                detail: JSON.stringify(this.selectList),
                goodsList: JSON.stringify(this.goosList),
              },
            })
          })
      } else {
        Toast.fail('您还未选择商品')
      }
    },
    getData() {
      http
        .$axios({
          method: 'POST',
          url: '/api/selectCart',
          headers: {
            token: true,
          },
        })
        .then((res) => {
          res.data.forEach((v) => {
            v['checked'] = true
          })
          this.cartList(res.data)
        })
    },
    //点击编辑或完成按钮
    changeEdit() {
      this.isEdit = !this.isEdit
    },
    //修改数量
    changeNum(value, item) {
      //当前购物车商品的id以及修改后的数量==>传递给后端
      //value就是修改后的数量
      http.$axios({
        url: '/api/updateNum',
        method: 'POST',
        headers: {
          token: true,
        },
        data: {
          id: item.id,
          num: value,
        },
      })
    },
  },
}
</script>

<style lang="less" scoped>
.cart {
  width: 100vw;
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
    background-color: #f5f5f5;
    overflow: auto;
    width: 100%;
    height: 100%;
    .cart-title {
      display: flex;
      padding: 1.25rem;
      span {
        padding: 0 0.9375rem;
        font-weight: 500;
        font-size: 1.125rem;
      }
    }
    ul {
      display: flex;
      flex-direction: column;
      li {
        display: flex;
        padding: 0.375rem 1.25rem;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        margin: 8px 0;

        .check {
          padding-right: 0.875rem;
        }
        .goods {
          display: flex;
          flex-direction: column;
          font-size: 0.75rem;
          padding-left: 0.9375rem;
          width: 100%;
          .goods-title {
            display: flex;
            justify-content: space-between;
            span {
              display: flex;
            }
            i {
              font-size: 1.125rem;
            }
          }
          .goods-price {
            padding: 0.1875rem 0;
            color: #b0352f;
          }
          /deep/ .van-stepper {
            text-align: right;
          }
        }
        img {
          width: 4.625rem;
          height: 4.625rem;
        }
      }
      li:last-child {
        margin-bottom: 3rem;
      }
    }
  }
  .nodata {
    margin: auto;
    text-align: center;
    div {
      margin-top: 200px;
      a {
        color: #b0352f;
      }
    }
  }
  footer {
    position: fixed;
    bottom: 0;
    background-color: #fff;
    justify-content: space-between;
    display: flex;
    width: 100%;
    height: 3rem;
    border-top: 1px solid #ccc;
    align-items: center;

    .radio {
      padding: 0 0.9375rem;
    }
    .total {
      flex: 1;
      font-size: 0.75rem;
      .total-active {
        color: #b0352f;
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