<template>
  <div class="youxuan">
    <Card>
      <span>专题优选</span>
    </Card>
    <div class="youxuan-swiper">
      <van-swipe :loop="false" :width="280">
        <van-swipe-item v-for="y in youXuanList" :key="y.id">
          <div>
            <img :src="y.imgUrl" alt="">
          </div>
        </van-swipe-item>
        <template #indicator>
          <div></div>
        </template>
      </van-swipe>
    </div>

  </div>
</template>

<script>
// 引入插件和样式
// import 'swiper/dist/css/swiper.css'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Card from '@/components/home/Card.vue'

export default {
  props: ['youXuanList'],
  name: 'YouXuan',
  data() {
    return {}
  },
  components: {
    Card,
  },
  mounted() {
    // console.log(this.youXuanList)
  },
}
</script>

<style lang="less" scoped>
.youxuan {
  background: #fff;
  margin-top: 0.9375rem;
  padding: 0.4688rem 0;
  width: 100vw;
  .youxuan-swiper {
    height: 7.5rem;

    div {
      margin: 0.25rem;
      img {
        width: 100%;
        border-radius: 0.625rem;
      }
    }
  }
}
</style>