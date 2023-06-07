<template>
  <div id="app">
    <!-- 缓存要缓存的路由 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <!-- 不缓存的路由 -->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'APP',
  created() {
    this.$store.commit('initUser')
  },
}
</script>

