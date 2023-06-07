<template>
  <div class="recommend">
    <Card></Card>
    <ul>
      <li v-for="r in recommedList" :key="r.id" @click="goDetail(r.id)">
        <h2>
          <img v-lazy="r.imgUrl" alt="">
        </h2>
        <div class="right">
          <div>
            <h3>{{ r.name }}</h3>
            <p>{{ r.content}}</p>
          </div>
          <div class="price">
            <span>￥</span>
            <b>{{ r.price }}</b>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Card from './Card.vue'
export default {
  components: { Card },
  name: 'Recommend',
  props: {
    recommedList: Array,
  },
  data() {
    return {}
  },
  mounted() {
    // console.log(this.recommedList)
  },
  methods: {
    goDetail(id) {
      if (id == 83) return
      this.$router.push({
        path: '/detail',
        query: {
          id: id,
        },
      })
    },
  },
}
</script>

<style lang="less" scoped>
.recommend {
  background-color: #fff;
  margin-top: 0.625rem;
  border-radius: 0.625rem;
  width: 100vw;
  ul {
    li {
      position: relative;
      margin-top: 0.6rem;

      h2 {
        text-align: center;
        img {
          width: 22.5rem;
          height: 9rem;
        }
      }

      .right {
        position: absolute;
        top: 0;
        right: 0;
        width: 50%;
        height: 100%;
        padding-right: 2.5rem;
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: center;
        div {
          display: flex;
          flex-direction: column;
          align-items: end;
          h3 {
            font-size: 0.75rem;
            color: #666;
            font-weight: 400;
          }
          p {
            font-size: 0.875rem;
            color: #333;
          }
        }

        .price {
          display: flex;
          flex-direction: row;
          margin-top: 1.25rem;
          color: #b0352f;
          span {
            font-size: 0.875rem;
          }
        }
      }
    }
  }
}
</style>