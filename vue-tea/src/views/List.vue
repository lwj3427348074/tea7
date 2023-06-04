<template>
  <div class="list">
    <Header v-show="isShow"></Header>
    <section>
      <div class="list-left" ref="left">
        <ul class="left-item">
          <li :class="{active:index==currentIndex}" v-for="l,index in leftData" :key="l.id" @click="goSrcroll(l.id)">{{ l.name }}</li>
        </ul>
      </div>

      <div class="list-right" ref="right">
        <div class="right-div">
          <div class="right-img">
            <img :src="topImage">
          </div>
          <div class="right-nav" v-for="r in rightData" :key="r.id">
            <div class="nav-item" v-for="n in r" :key="n.id">
              <div class="nav-hd">
                <span class="nav-txt">{{n.name }}</span>
              </div>

              <ul>
                <li v-for=" i in n.list" :key="i.id">
                  <img v-lazy="i.imgUrl" @load='imageLoad'>
                  <span>{{ i.name }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
import http from '@/request/api/request'
import Header from '@/components/list/Header.vue'
import Tabbar from '@/components/common/Tabbar.vue'

export default {
  name: 'List',
  components: {
    Header,
    Tabbar,
  },
  data() {
    return {
      isShow: true,
      topImage: '/images/fenlei/topbg.jpg',
      leftData: [], //左侧数据
      rightData: [], //右侧数据
      rightBScroll: '',
      allHeight: [], //承载右侧每一块的高度值
      scrollY: [], //右侧滚距离
    }
  },
  computed: {
    currentIndex() {
      return this.allHeight.findIndex((item, index) => {
        return this.scrollY >= item && this.scrollY < this.allHeight[index + 1]
      })
    },
  },
  async created() {
    let res = await http.$axios({ url: '/api/goods/list' })

    let leftArr = []
    let rightArr = []

    res.forEach((v) => {
      leftArr.push({
        id: v.id,
        name: v.name,
      })
      rightArr.push(v.data)
    })

    this.leftData = Object.freeze(leftArr)
    this.rightData = Object.freeze(rightArr)

    this.$bus.$on('imageLoading', () => {
      this.rightBScroll.refresh()
    })

    this.$nextTick(() => {
      //左侧滑动
      new BetterScroll(this.$refs.left, {
        click: true,
      })
      //右侧滑动
      this.rightBScroll = new BetterScroll(this.$refs.right, {
        probeType: 3,
        //取消回弹效果
        bounce: false,
      })
      //统计右侧所有板块
      let height = 112
      this.allHeight.push(height)

      //获取右侧每一块高度
      let uls = this.$refs.right.getElementsByClassName('right-nav')
      // console.log(uls)
      //把dom对象转换成真正的数组
      Array.from(uls).forEach((v) => {
        height += v.clientHeight
        this.allHeight.push(height)
      })
      //得到右侧滚动的值
      this.rightBScroll.on('scroll', (pos) => {
        // console.log(pos)
        this.scrollY = Math.abs(pos.y)
        // console.log(this.scrollY)
        if (Math.abs(pos.y) >= 120) {
          this.isShow = false
        } else {
          this.isShow = true
        }
      })
    })
  },
  methods: {
    goSrcroll(index) {
      // console.log(index)
      this.rightBScroll.scrollTo(0, -this.allHeight[index])
      this.activeIndex = index
    },
    imageLoad() {
      // 由于我们获取图片的时候并没有设置高度，因此需要在监听图片的load事件
      this.$bus.$emit('imageLoading')

      // 图片加载完成后，重新计算高度
      this.$nextTick(() => {
        let height = 112 // 初始高度
        this.allHeight = [height] // 重置高度数组

        // 获取右侧每一块高度
        let uls = this.$refs.right.getElementsByClassName('right-nav')
        Array.from(uls).forEach((v) => {
          height += v.clientHeight
          this.allHeight.push(height)
        })
      })
    },
  },
}
</script>

<style lang="less" scoped>
.list {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  section {
    flex: 1;
    overflow: hidden;
    display: flex;
  }
}

.list-left {
  width: 5.75rem;
  background-color: #fff;
  overflow: hidden;
  border-right: 0.0625rem solid #efefef;
  .left-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    li {
      width: 100%;
      height: 1.875rem;
      line-height: 1.875rem;
      margin: 0.9375rem 0;
      text-align: center;
      font-size: 0.9375rem;
    }
    li:nth-child(1) {
      margin-top: 0.9375rem;
    }
    .active {
      color: #b54f4a;
      border-left: 0.1875rem solid #b54f4a;
    }
  }
}

.list-right {
  padding: 0 0.625rem;
  flex: 1;
  overflow: hidden;
  .right-img {
    margin: 0.625rem 0;
    height: 7rem;
    img {
      width: 100%;
      vertical-align: middle;
      border: 0;
    }
  }
  .right-nav {
    box-sizing: border-box;
    .nav-item {
      color: #333;
      margin-bottom: 0.625rem;
      .nav-hd {
        text-align: center;
        margin: 1.25rem auto 0.625rem;
        font-size: 0.875rem;
        .nav-txt {
          position: relative;
          text-align: center;
          font-size: 1.125rem;
        }
      }
      ul {
        list-style: none;
        overflow: hidden;
        font-size: 0.875rem;
        li {
          width: 33.3%;
          float: left;
          text-align: center;
          padding: 0.625rem;
          box-sizing: border-box;
          img {
            width: 80%;
            display: block;
            margin: 0 auto;
            border-radius: 50%;
          }
          span {
            display: block;
          }
        }
      }
    }
  }
}
.nav-txt::after,
.nav-txt::before {
  position: absolute;
  content: '';
  top: 0;
  bottom: 0;
  margin: auto;
  height: 0.125rem;
  width: 1.25rem;
  background-color: #d9d9d9;
}
.nav-txt::after {
  right: -1.875rem;
}
.nav-txt::before {
  left: -1.875rem;
}
.right-div {
  overflow: hidden;
}
.right-nav:last-child {
  height: 37.5rem;
}
</style>
