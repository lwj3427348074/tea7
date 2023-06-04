<template>
  <div class="header">
    <div>
      <van-icon name="arrow-left" @click="$router.back()" />
    </div>
    <div>
      <slot>
        <span>登录</span>
      </slot>
    </div>
    <div>
      <van-icon name="wap-home-o" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="less" scoped>
.header {
  width: 100vw;
  height: 2.75rem;
  background-color: #b0352f;
  display: flex;
  justify-content: space-between;
  div {
    span {
      color: #fff;
      line-height: 2.75rem;
    }
    i {
      display: block;
      width: 2.75rem;
      height: 2.75rem;
      font-size: 1.125rem;
      line-height: 2.75rem;
      text-align: center;
      color: #fff;
    }
  }
}
</style>