<template>
  <div class="home">
    <Header></Header>
    <div class="tab">
      <van-tabs v-model="active" swipeable title-active-color="red" title-inactive-color="#222" sticky style="top:2.75rem" text-size="1rem" @click="onClick">
        <van-tab v-for="t in tabs" :key="t.id" :title="t.label">
          <div class="session"> <!--这个div包裹了很多东西导致高度比较大，我需要让它滚动显示-->
            <div>
              <!-- 如果id为0则展示第一页页面 -->
              <div v-if="t.id===0">
                <section>
                  <Swipe :swipeList='newData[t.id][0].data'></Swipe>
                  <Icons :iconsList='newData[t.id][1].data'></Icons>
                  <Teanews :teaNewsList="newData[t.id][2].data"></Teanews>
                </section>
                <main>
                  <Sevenrecommend :severnCommendList="newData[t.id][3].data"></Sevenrecommend>
                  <YouXuan :youXuanList="newData[t.id][4].data"></YouXuan>
                  <Recommend :recommedList="newData[t.id][5].data"></Recommend>
                  <TeaCulture :teaCultureList="newData[t.id][6].data"></TeaCulture>
                  <Favorite :favoriteList="newData[t.id][7].data"></Favorite>
                  <Footer></Footer>
                </main>
              </div>
              <BaiCha :newData="newData[t.id]" v-else-if="t.id ===1 && newData[t.id] !== undefined "></BaiCha>
              <DaHongPao :newData="newData[t.id]" v-else-if="t.id ===2 && newData[t.id] !== undefined "></DaHongPao>
              <JinJunMei :newData="newData[t.id]" v-else-if="t.id ===3 && newData[t.id] !== undefined "></JinJunMei>
              <LongJing :newData="newData[t.id]" v-else-if="t.id ===4 && newData[t.id] !== undefined "></LongJing>
              <PuEr :newData="newData[t.id]" v-else-if="t.id ===5 && newData[t.id] !== undefined "></PuEr>
              <XiaoZhong :newData="newData[t.id]" v-else-if="t.id ===6 && newData[t.id] !== undefined "></XiaoZhong>
              <div class="fotter"></div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>

    <Tabbar></Tabbar>
  </div>
</template>

<script>
import { getTabLists } from '@/request/api/home'
import http from '@/request/api/request'
import Tabbar from '@/components/common/Tabbar.vue'
import Header from '@/components/home/Header.vue'
import Swipe from '@/components/home/Swipe.vue'
import Icons from '@/components/home/Icons.vue'
import Teanews from '@/components/home/Teanews.vue'
import Sevenrecommend from '@/components/home/Sevenrecommend.vue'
import YouXuan from '@/components/home/YouXuan.vue'
import Recommend from '@/components/home/Recommend.vue'
import TeaCulture from '@/components/home/TeaCulture.vue'
import Favorite from '@/components/home/Favorite.vue'
import BaiCha from '@/components/home/tealist/BaiCha.vue'
import DaHongPao from '@/components/home/tealist/DaHongPao.vue'
import JinJunMei from '@/components/home/tealist/JinJunMei.vue'
import LongJing from '@/components/home/tealist/LongJing.vue'
import PuEr from '@/components/home/tealist/PuEr.vue'
import XiaoZhong from '@/components/home/tealist/XiaoZhong.vue'
import Footer from '@/components/home/Footer.vue'

export default {
  name: 'Home',
  components: {
    Tabbar,
    Header,
    Swipe,
    Icons,
    Teanews,
    YouXuan,
    Recommend,
    Sevenrecommend,
    TeaCulture,
    Favorite,
    BaiCha,
    DaHongPao,
    JinJunMei,
    LongJing,
    PuEr,
    XiaoZhong,
    Footer,
  },

  data() {
    return {
      active: 0,
      tabs: [],
      newData: [],
    }
  },
  methods: {
    async getData() {
      try {
        let res = await http.$axios({
          url: '/api/index_list/0/data/1',
        })
        this.tabs = Object.freeze(res.topBar)
        this.newData[0] = Object.freeze(res.data)
        console.log(this.newData[0])
      } catch (error) {
        console.log('请求数据失败：', error)
      }
    },
    // getData() {
    //   getTeaLists()
    //     .then((res) => {
    //       this.tabs = Object.freeze(res.data.data.topBar)
    //       this.newData[0] = Object.freeze(res.data.data.data)
    //     })
    //     .catch((error) => {
    //       console.log('请求数据失败：', error)
    //     })
    // },
    addData(index) {
      getTabLists(index)
        .then((res) => {
          this.$set(this.newData, index, res.data.data.data)
          console.log(this.newData[index])
        })
        .catch((error) => {
          console.log('请求数据失败：', error)
        })
    },
    onClick(index, title) {
      // console.log(index)
      this.addData(index)
    },
  },
  mounted() {
    this.getData()
  },
}
</script>

<style lang="less" scoped>
.home {
  width: 100vw;
  position: relative;

  .tab {
    position: fixed;
    top: 0;
    z-index: 1;
    /deep/ .van-tab__text {
      font-size: 1rem;
    }
    .session {
      overflow: auto;
      max-height: calc(100vh - 2.75rem); /* 调整最大高度以适应视口大小 */
      main {
        background-color: #f5f5f5;
        width: 100vw;
        border-top: 1px solid #fff;
      }
      .fotter {
        width: 100vw;
        height: 7rem;
      }
    }
  }
}
</style>