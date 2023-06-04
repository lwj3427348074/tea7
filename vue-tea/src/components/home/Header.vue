<template>
  <div class="header">
    <div class="title">
      <h1>
        <img src="@/assets/logo.png" alt="">
      </h1>
    </div>
    <div class="search" @click="goSearch">
      <div class="i">
        <van-icon name="search" size="1.2rem" />
      </div>
      <input type="text" placeholder="搜您喜欢的...">
    </div>
    <div class="service">
      <van-icon name="service-o" color="#fff" size="1.5rem" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    goSearch() {
      this.$router.push('/search')
    },
  },
}
</script>

<style scoped lang="less">
.header {
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100vw;
  height: 2.75rem;
  background-color: #b0352f;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  margin-left: 0.3125rem;
}
.search {
  width: 15.375rem;
  height: 1.875rem;
  background-color: #fff;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .i {
    margin: 0.375rem;
  }
  input {
    border: #fff;
    font-size: 0.875rem;
  }
}
.service {
  margin-right: 0.375rem;
}
</style>