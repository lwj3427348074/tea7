<template>
  <div class="address-index">
    <Header></Header>
    <section>
      <ul v-if="list.length">
        <li v-for="l in list" :key="l.id">
          <div>
            <div>
              <span>{{ l.name }}</span>
              <span>{{ l.tel }}</span>
            </div>
            <div class='city'>

              <span class='active' v-if="l.isDefault == 1">[默认]</span>
              <span>{{ l.province }}</span>
              <span>{{ l.city }}</span>
              <span>{{ l.county }}</span>
              <span>{{ l.addressDetail }}</span>
            </div>
          </div>
          <div class="icon-right">
            <van-icon name="arrow" @click="goList(l)" />
          </div>
        </li>
      </ul>
      <h1 v-else>暂无数据，请添加地址</h1>
      <div class='add-path' @click="goList('add')">添加地址</div>
    </section>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import http from '@/request/api/request'
import Header from '@/views/address/Header.vue'
import Tabbar from '@/components/common/Tabbar.vue'
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'AddressIndex',
  components: {
    Header,
    Tabbar,
  },
  computed: {
    ...mapState({
      list: (state) => state.address.list,
    }),
  },
  methods: {
    ...mapMutations(['initData']),
    getData() {
      http
        .$axios({
          url: 'api/selectAddress',
          method: 'POST',
          headers: {
            token: true,
          },
        })
        .then((res) => {
          // console.log(res)
          this.initData(res.data)
        })
    },
    //添加地址
    goList(option) {
      this.$router.push({
        name: 'AddressList',
        params: {
          key: JSON.stringify(option),
        },
      })
    },
  },
  created() {
    this.getData()
  },
}
</script>

<style lang="less" scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f7f7;
  height: 100vh;
  ul {
    width: 100%;
    li {
      display: flex;
      justify-content: space-between;
      padding: 0.625rem 0.75rem;
      margin: 0.625rem 0;
      background-color: #ffffff;
      align-items: center;
      div {
        span {
          font-weight: 600;
          padding-right: 0.75rem;
          font-size: 0.875rem;
        }
        .active {
          color: #b0352f;
        }
        .city {
          margin-top: 0.625rem;
          font-size: 0.875rem;
          span {
            font-weight: normal;
            padding-right: 0.3125rem;
          }
        }
      }
      .icon-right {
        font-size: 1.5rem;
      }
    }
  }
  h1 {
    margin-top: 1.875rem;
  }
  .add-path {
    margin-top: 2.5rem;
    padding: 0.625rem 0.75rem;
    width: 6.25rem;
    line-height: 1.25rem;
    font-size: 0.875rem;
    text-align: center;
    color: #ffffff;
    background-color: #b0352f;
    border-radius: 6px;
  }
}
</style>