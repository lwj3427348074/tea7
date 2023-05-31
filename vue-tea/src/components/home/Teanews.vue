<template>
  <div class="teanews">
    <div class="toutiao"></div>
    <div class="scroll-up">
      <ul :class="{marquee_top:animate}">
        <li v-for="item in teaNewsList" :key="item.id"><router-link to="/home">{{item.title}}</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Teanews',
  props: {
    teaNewsList: Array,
  },
  data() {
    return {
      animate: false,
    }
  },
  mounted() {
    // console.log(this.teaNewsList)
    setInterval(this.showMarquee, 2000)
  },
  methods: {
    showMarquee() {
      this.animate = true

      setTimeout(() => {
        this.teaNewsList.push(this.teaNewsList[0])
        this.teaNewsList.shift()
        this.animate = false
      }, 500)
    },
  },
}
</script>


<style lang="less" scoped>
.teanews {
  width: 100vw;
  display: flex;
  width: 100%;
  height: 2.6875rem;
  border-top: 1px solid #f0f0f0;
  align-items: center;
  .toutiao {
    width: 6.25rem;
    height: 1.25rem;
    background: url('./../../../public/images/home/caption.png') center center
      no-repeat;
    background-size: contain;
  }
  .scroll-up {
    position: relative;
    height: 1.25rem;
    line-height: 1.25rem;
    overflow: hidden;
    list-style: none;
    flex: 1;
    li {
      height: 1.25rem;
      font-size: 0.875rem;
    }
  }
}
.marquee_top {
  transition: all 0.5s;
  margin-top: -1.25rem;
}
</style>
