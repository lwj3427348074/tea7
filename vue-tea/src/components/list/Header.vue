<template>
  <header>
    <div class="logo-icon" @click="$router.back()">
      <van-icon name="arrow-left" size="18" style="line-height: 44px;font-weight: 400;
    color: #fff;" />
    </div>

    <div class="search">
      <div class="search-i">
        <van-icon name="search" size="18" />
      </div>
      <form action="" onsubmit="return false" @keyup.enter="toSearchList">
        <input type="search" placeholder="搜您喜欢的..." v-model.trim="inputValue">
      </form>
    </div>

    <div class="soushuo">
      <van-icon name="wap-home-o" />
    </div>
  </header>
</template>

<script>
export default {
  name: 'SearchHeader',
  data() {
    return {
      inputValue: this.$route.query.key || '',
      searchArr: [],
    }
  },
  methods: {
    toSearchList() {
      // console.log(this.inputValue)
      // 如果搜索的关键字为空，直接return
      if (this.inputValue.trim().length == 0) {
        return
      }
      // 判断之前有没有搜索的本地存储
      if (localStorage.getItem('searchList')) {
        this.searchArr = JSON.parse(localStorage.getItem('searchList'))
      } else {
        localStorage.setItem('searchList', '[]')
      }

      // // 增加数据
      this.searchArr.unshift(this.inputValue)

      // // 把数据传入本地存储
      localStorage.setItem(
        'searchList',
        JSON.stringify([...new Set(this.searchArr)])
      )

      // // 如果查询的结果与query参数一致，直接return
      if (this.inputValue == this.$route.query.key) return

      // 跳转页面
      this.$router.push({
        name: 'list',
        query: { key: this.inputValue },
      })
    },
  },
  watch: {
    // 监听路由的变化
    $route() {
      this.inputValue = this.$route.query.key
    },
  },
}
</script>

<style lang="less" scoped>
header {
  width: 100%;
  height: 2.75rem;
  background-color: #b0352f;
  display: flex;
  .logo-icon {
    width: 2.75rem;
    height: 2.75rem;
    color: #fff;
    font-size: 1.125rem;
    text-align: center;
  }
  .soushuo {
    height: 100%;
    width: 2.75rem;
    color: #fff;
    text-align: center;
    line-height: 2.75rem;
    font-size: 1.25rem;
  }
  .search {
    flex: 1;
    display: flex;
    height: 1.875rem;
    border-radius: 1rem;
    background-color: #fff;
    margin-top: 0.375rem;
    .search-i {
      height: 100%;
      width: 1.25rem;
      text-align: center;
      line-height: 2.25rem;
      margin-left: 0.625rem;
    }
    form {
      flex: 1;
      width: 100%;
      height: 100%;
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
      font-size: 0.9375rem;
      input {
        flex: 1;
        width: 100%;
        height: 100%;
        border-top-right-radius: 1rem;
        border-bottom-right-radius: 1rem;
        border: none;
        font-size: 0.9375rem;
        outline: none;
      }
      input::-webkit-input-placeholder {
        font-size: 0.9375rem;
      }
    }
  }
}
</style>