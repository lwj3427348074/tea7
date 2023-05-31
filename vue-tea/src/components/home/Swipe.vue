<template>
  <div class="swipe">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#b0352f">
      <van-swipe-item v-for="s in swipeList" :key="s.id">
        <img :src="s.imgUrl">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'Swipe',
  props: {
    swipeList: Array,
  },
  data() {
    return {}
  },
  mounted() {
    // console.log(this.swipeList)
  },
}
</script>

<style lang="less" scoped>
.swipe {
  width: 100vw;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 1.25rem;
  height: 11.5625rem;
  line-height: 9.375rem;
  text-align: center;
  background-color: #39a9ed;
}
/deep/ .van-swipe__indicator {
  width: 0.5rem;
  height: 0.5rem;
  opacity: 1;
}
img {
  width: 100%;
  height: 100%;
}
</style>