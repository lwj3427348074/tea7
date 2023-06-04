<template>
  <div class="sevenrecommend">
    <Card>
      <span>小七推荐</span>
    </Card>
    <ul>
      <li v-for="item in severnCommendList" :key="item.id" @click="$router.push('/goodslist')">
        <router-link :to="item.path" class="bd"><img v-lazy="item.imgUrl"></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Card from './Card.vue'
export default {
  components: { Card },
  name: 'Sevenrecommend',
  props: {
    severnCommendList: Array,
  },
  data() {
    return {}
  },
  mounted() {
    // console.log(this.severnCommendList)
  },
}
</script>


<style scoped lang="less">
.sevenrecommend {
  background: #fff;
  margin-top: 0.625rem;
  width: 100vw;
  ul {
    padding: 0 0.15rem 0.15rem;
    display: flex;
    li {
      width: 50%;
      box-sizing: border-box;
      padding: 0.1875rem;
      display: inline-block;
      .bd {
        display: block;
      }
      img {
        width: 100%;
      }
    }
  }
}
</style>