<template>
  <div class="tabbar">
    <van-tabbar v-model="active" route active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item name="home" to="/home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item name="list" to="/list" icon="bag-o">分类</van-tabbar-item>
      <van-tabbar-item name="cart" to="/cart" icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item name="my" to="/my" icon="user-circle-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  data() {
    return {
      active: 'home',
    }
  },
}
</script>

<style lang="less" scoped>
.tabbar {
  width: 100vw;
}
</style>