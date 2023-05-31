<template>
  <div class="you-favorite">
    <Card>
      <span>猜你喜欢</span>
    </Card>
    <ul>
      <!-- <li v-for="item in favoriteList" :key="item.id" @click="goDetail(item)"> -->
      <li v-for="item in favoriteList" :key="item.id">
        <div class="bg-img">
          <!-- <img :src="item.imgUrl" @load="imageLoad"> -->
          <img :src="item.imgUrl">
        </div>
        <div class="name">{{item.name}}</div>
        <div class="price">
          <span>¥</span>
          <b>{{item.price}}</b>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import http from '@/common/api/request.js'
import Card from './Card.vue'

export default {
  name: 'Favorite',
  props: {
    favoriteList: Array,
  },
  components: {
    Card,
  },
  data() {
    return {}
  },
  mounted() {
    // console.log(this.favoriteList)
  },
  methods: {
    // imageLoad() {
    //   this.$bus.$emit('imageLoading')
    // },
    // async getDatas() {
    //   let res = await http.$axios({
    //     url: '/api/goods/alllist',
    //   })

    //   this.favoriteList = res
    // },
    goDetail(item) {
      this.$router.push({
        name: 'Detail',
        query: {
          id: item.id,
        },
      })
    },
  },
}
</script>


<style lang="less" scoped>
.you-favorite {
  width: 100vw;
  background: #fff;
  margin-top: 0.625rem;
  padding: 0.625rem 0;
  ul {
    padding: 0.625rem;
    list-style: none;
    overflow: hidden;
    li {
      float: left;
      width: 50%;
      box-sizing: border-box;
      padding: 0.3125rem;
      margin-bottom: 0.75rem;
      img {
        display: block;
        width: 100%;
      }
      .name {
        padding: 0.625rem 0;
        font-size: 0.875rem;
        height: 0.75rem;
        line-height: 0.875rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .price {
        color: #b0352f;
        height: 0.5rem;
        line-height: 0.875rem;
        span {
          font-size: 0.875rem;
        }
        b {
          font-size: 0.875rem;
          font-weight: normal;
        }
        .bg-img {
          background: #f3f3f3;
        }
      }
    }
  }
}
</style>