<template>
  <div class="icons">
    <a href="" v-for="i in iconsList" :key="i.id">
      <i>
        <img :src="i.imgUrl" />
      </i>
      <span>{{ i.title }}</span>
    </a>

  </div>
</template>

<script>
export default {
  name: 'Icons',
  props: {
    iconsList: Array,
  },
  data() {
    return {}
  },
  mounted() {
    // console.log(this.iconsList)
  },
}
</script>

<style lang="less" scoped>
.icons {
  display: flex;
  height: 6.25rem;
  align-items: center;
  width: 100vw;
  a {
    width: 4.6875rem;
    height: 4.375rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    i {
      img {
        width: 2.3438rem;
        height: 2.3438rem;
      }
    }
    span {
      font-size: 0.875rem;
    }
  }
}
</style>