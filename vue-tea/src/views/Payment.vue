<template>
  <div class="payment container">
    <header>
      <div>
        <span v-if="payStatus"> 支付成功 </span>
        <span v-else> 支付失败 </span>
      </div>
    </header>
    <section>
      <div v-if="payStatus">
        恭喜您支付成功
      </div>
      <div v-else>
        支付失败
      </div>
    </section>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import qs from 'qs'
import http from '@/request/api/request'
import Tabbar from '@/components/common/Tabbar.vue'
export default {
  name: 'Payment',

  data() {
    return {
      payStatus: false,
    }
  },
  components: {
    Tabbar,
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      let data = {
        out_trade_no: this.$route.query.out_trade_no,
        trade_no: this.$route.query.trade_no,
      }

      http
        .$axios({
          url: 'api/paymentSuccess',
          method: 'POST',
          headers: {
            token: true,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          //qs是增加安全性的序列化
          data: qs.stringify(data),
        })
        .then((res) => {
          if (res.code == 2) {
            this.payStatus = true
          }
        })
    },
  },
}
</script>

<style lang="less" scoped>
.payment {
  width: 100vw;
  header {
    width: 100vw;
    height: 2.75rem;
    background-color: #b0352f;
    display: flex;
    justify-content: center;
    div {
      flex: 1;
      text-align: center;
      color: #fff;
      line-height: 2.75rem;
    }
  }
  section {
    flex: 1;
    background-color: #f7f7f7;
    width: 100%;
    div {
      margin: 12.5rem auto;
      text-align: center;
    }
  }
}
</style>