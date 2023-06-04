<template>
  <div class="Search">
    <!-- <router-view></router-view> -->
    <Header></Header>
    <!-- <SearchList></SearchList> -->
    <section>
      <div class="search-history" v-if="searchArr.length">
        <h2>
          <van-icon name="fire" color="red" />
          <span>
            历史搜索
          </span>
          <span @click="deleteStorage">
            清空
            <van-icon name="delete-o" />
          </span>
        </h2>
        <ul>
          <li v-for="(s,index) in searchArr" :key="index" @click="toSearchList(s)">{{ s }}</li>
        </ul>
      </div>
      <div v-else>
        暂无搜索记录
      </div>
    </section>
    <Tabbar></Tabbar>

  </div>
</template>

<script>
import { Dialog } from 'vant'
import Tabbar from '@/components/common/Tabbar.vue'
// import SearchList from '@/components/search/SearchList.vue'
import Header from '@/components/search/Header.vue'

export default {
  components: {
    Tabbar,
    // SearchList,
    Header,
    // Favorite,
  },
  name: 'Search',
  data() {
    return {
      searchArr: [],
    }
  },
  created() {
    this.searchArr = JSON.parse(localStorage.getItem('searchList')) || []
  },
  methods: {
    deleteStorage() {
      Dialog.confirm({
        title: '提示',
        message: '弹窗内容',
      }).then((confirm) => {
        if (confirm == 'confirm') {
          //删除本地存储
          localStorage.removeItem('searchList')
          //清空数组
          this.searchArr = []
        }
      })
    },
    //点击历史搜索
    toSearchList(item) {
      this.$router.push({
        name: 'list',
        query: { key: item },
      })
    },
  },
}
</script>

<style lang="less" scoped>
.Search {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  section {
    flex: 1;
    overflow: hidden;
    background-color: #f5f5f5;
    .search-history {
      h2 {
        position: relative;
        font-weight: 500;
        font-size: 1.125rem;
        padding: 1.25rem;
        span:last-child {
          position: absolute;
          right: 1.25rem;
          font-size: 14px;
          line-height: 1.5rem;
          color: #ccc;
        }
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0 0.625rem 0;
        li {
          margin: 0.625rem;
          padding: 0.1875rem 0.375rem;
          font-size: 0.875rem;
          border: 1px solid #ccc;
        }
      }
    }
  }
}
</style>