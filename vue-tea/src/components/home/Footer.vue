<template>
  <div class="home-footer">
    <div class="footer-text">到底啦，您还可以看看这里</div>
    <div class="footer-btn">
      <span>
        <router-link to="/home" class="footer-link">更多茶叶</router-link>
      </span>
      <span>
        <router-link to="/home" class="footer-link">更多茶具</router-link>
      </span>
    </div>
    <div class="footer-text" style="margin-top: 1.25rem">Copyright 2016, 茶七网 TEA7.COM</div>
    <div class="footer-text">服务时间：08:30-21:00 客服热线: 400-9993-513</div>
    <div class="footer-text">备案号：闽ICP备14011677号-2</div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.home-footer {
  padding: 1.125rem 0;
  font-size: 0.9375rem;
  .footer-text {
    text-align: center;
    color: #999;
  }
  .footer-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      padding: 0.3125rem 0.9375rem;
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 1.333333rem;
      margin: 0.9375rem 1.4063rem;
    }
    ::v-deep .footer-link {
      text-decoration: none;
      color: #222;
    }
  }
}
</style>