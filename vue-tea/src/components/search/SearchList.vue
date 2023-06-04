<template>
  <div class="search-list">
    <div class="headers">
      <Header></Header>
      <ul>
        <li v-for="(s,index) in searchList.data" :key="index" @click="changeTab(index)">
          <div :class="searchList.currentIndex ==index?'active':''">
            {{ s.name }}
          </div>
          <div class=" search-filter" v-if="index !=0">
            <van-icon name="arrow-up" :color=" s.status ==1?'red':''" />
            <van-icon name="arrow-down" :color=" s.status ==2?'red':''" />
          </div>
        </li>

      </ul>
    </div>
    <section>
      <ul v-if="goodsList.length">
        <li v-for="g in goodsList" :key="g.id">
          <img :src="g.imgUrl" alt="">
          <h3>{{ g.name }}</h3>
          <div class="price">
            <div>
              <span>￥</span>
              <b>{{ g.price }}</b>
            </div>
            <div>立即购买</div>
          </div>
        </li>

      </ul>
      <h1 v-else>
        暂无数据...
      </h1>
    </section>
    <Tabber></Tabber>
  </div>
</template>

<script>
import http from '@/request/api/request'
import Tabber from '@/components/common/Tabbar.vue'
import Header from '@/components/search/Header.vue'

export default {
  name: 'SearchList',
  components: {
    Tabber,
    Header,
  },
  data() {
    return {
      goodsList: ['1', '2', '@/../public/images/searchlist/product1.jpeg'],
      scroll: null,
      showList: true,
      searchList: {
        currentIndex: 0,
        data: [
          //status：0   都不亮
          //status：1   上箭头亮
          //status：2   下箭头亮
          { name: '综合', key: 'zh' },
          { name: '价格', status: 0, key: 'price' },
          { name: '销量', status: 0, key: 'num' },
        ],
      },
    }
  },
  computed: {
    orderBy() {
      //知道当前是哪一个对象
      let obj = this.searchList.data[this.searchList.currentIndex]
      //针对于状态，判断是升序还是降序
      let val = obj.status == '1' ? 'asc' : 'desc'
      return {
        [obj.key]: val,
      }
    },
  },
  created() {
    this.getData()
  },
  // activated() {
  //   this.getData()
  // },
  methods: {
    getData() {
      http
        .$axios({
          url: '/api/goods/shopList',
          params: {
            searchName: this.$route.query.key,
            ...this.orderBy,
          },
        })
        .then((res) => {
          console.log(res)
          this.goodsList = res
        })
    },
    changeTab(index) {
      this.searchList.currentIndex = index

      //点击下标对应数据的哪一个
      let item = this.searchList.data[index]
      //取消所有的状态值==>都变成0
      this.searchList.data.forEach((v, i) => {
        if (i != index) {
          v.status = 0
        }
      })
      //让当前点击的切换状态
      if (index == this.searchList.currentIndex) {
        item.status = item.status == 1 ? 2 : 1
      }
      //发送请求进行数据排序
      this.getData()
    },
  },
}
</script>

<style lang="less" scoped>
.search-list {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: rgb(245, 245, 245);
  .headers {
    ul {
      display: flex;
      justify-content: space-around;
      padding: 0.625rem;
      font-size: 1rem;
      li {
        display: flex;
        align-items: center;
        .active {
          color: red;
        }
        .search-filter {
          display: flex;
          flex-direction: column;
        }
        > div {
          padding: 0 0.1875rem;
        }
      }
    }
  }
  section {
    flex: 1;
    overflow: hidden;
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;

        img {
          width: 10.625rem;
          height: 10.625rem;
        }
        h3 {
          padding: 0.625rem;
          width: 100%;
          font-size: 0.875rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #222;
          font-weight: 400;
        }
        .price {
          display: flex;
          justify-content: space-around;
          font-size: 0.875rem;
          width: 100%;
          padding: 0.625rem 0;
          div:first-child {
            span {
              color: #b0352f;
              font-size: 0.75rem;
            }
            b {
              color: #b0352f;
              font-size: 1rem;
            }
          }
          div:last-child {
            padding: 0.1875rem 0.375rem;
            color: #fff;
            background-color: #b0352f;
            border-radius: 0.375rem;
          }
        }
      }
    }
  }
}
</style>