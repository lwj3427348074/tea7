<template>
  <div class="tea-culture">
    <Card>
      <span>茶文化</span>
    </Card>
    <ul>
      <!-- <li v-for="item in cultureLinks" :key="item.id" @click="$router.push('/goodslist')"> -->
      <li v-for="item in teaCultureList" :key="item.id">
        <router-link :to="item.path" class="bd">
          <div class="cnt">
            <h1>{{item.title}}</h1>
            <span>{{item.content}}</span>
          </div>
          <!-- <img :src="item.imgUrl" @load="imageLoad"> -->
          <img :src="item.imgUrl">
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Card from '@/components/home/Card.vue'
export default {
  components: { Card },
  name: 'TeaCulture',
  props: ['teaCultureList'],
  data() {
    return {}
  },
  mounted() {
    // console.log(this.teaCultureList)
  },
  methods: {
    // imageLoad() {
    //   this.$bus.$emit('imageLoading')
    // },
  },
}
</script>


<style lang="less" scoped>
.tea-culture {
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
        .cnt {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          color: #fff;
          padding: 0.7031rem;
          box-sizing: border-box;
          h1 {
            font-size: 0.9375rem;
            color: #333;
            font-weight: bold;
            display: block;
          }
          span {
            font-size: 0.75rem;
            color: #999;
            display: block;
          }
        }
      }
      img {
        width: 100%;
        border-radius: 0.213333rem;
      }
    }
  }
}

::v-deep .bd {
  position: relative;
}
</style>