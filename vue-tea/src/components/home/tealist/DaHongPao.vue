<template>

  <div class="dahongpao">
    <div class="item">
      <img :src="adImages.image1">
    </div>
    <div class="item">
      <img :src="adImages.image2">
    </div>
    <div class="item">
      <img :src="adImages.image3">
    </div>
    <div class="item" v-for="item in jichuImages" :key="item.id">
      <!-- <img :src="item.image" @load="imageLoad"> -->
      <img :src="item.image">
    </div>
    <div class="item">
      <img :src="adImages.image4">
    </div>
    <div class="product-list">
      <ul>
        <li v-for="item in products" :key="item.id">
          <div class="product-detail">
            <div class="pic">
              <!-- <img :src="item.imageUrl" @load="imageLoad"> -->
              <img :src="item.imageUrl">
            </div>
            <div class="name">{{item.title}}</div>
            <div class="prod-act">{{item.content}}</div>
            <div class="price">
              <div class="pl">
                ￥<b>{{item.price}}</b>
              </div>
              <div class="pr">
                <span>去购买</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="item">
      <img :src="adImages.image5">
    </div>
    <div class="item enter">
      <img :src="adImages.image6">
    </div>
    <div class="item">
      <img :src="adImages.image7">
    </div>
    <!-- <div class="item footer" @click="backTop"> -->
    <div class="item footer">
      <img :src="adImages.image8">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DaHongPao',
  props: { newData: Array },
  data() {
    return {
      daHongPaoList: [],
      adImages: {
        image1: '../images/home/dahongpao/dahongpao1.jpg',
        image2: '../images/home/dahongpao/dahongpao2.jpg',
        image3: '../images/home/dahongpao/dahongpao3.jpg',
        image4: '../images/home/dahongpao/dahongpao7.jpg',
        image5: '../images/home/dahongpao/dahongpao8.jpg',
        image6: '../images/home/dahongpao/dahongpao9.jpg',
        image7: '../images/home/dahongpao/dahongpao10.jpg',
        image8: '../images/home/dahongpao/dahongpao11.jpg',
      },
      jichuImages: [
        { id: 1, image: '../images/home/dahongpao/dahongpao4.jpg' },
        { id: 2, image: '../images/home/dahongpao/dahongpao5.jpg' },
        { id: 3, image: '../images/home/dahongpao/dahongpao6.jpg' },
      ],
      products: [
        {
          id: 1,
          title: '口粮茶 铁盒装200g',
          content: '中火焙制，香气更醇',
          imageUrl: '../images/home/dahongpao/product1.jpeg',
          price: '59',
          path: '',
        },
        {
          id: 2,
          title: '武夷陈茶96g 罐装',
          content: '香气陈韵 口感顺滑',
          imageUrl: '../images/home/dahongpao/product2.jpeg',
          price: '88',
          path: '',
        },
        {
          id: 3,
          title: '远致肉桂96g 盒装',
          content: '果香迷人 口感顺滑',
          imageUrl: '../images/home/dahongpao/product3.jpeg',
          price: '59',
          path: '',
        },
        {
          id: 4,
          title: '花果香肉桂96g 盒装',
          content: '茶师亲制 滋味醇正',
          imageUrl: '../images/home/dahongpao/product4.jpeg',
          price: '99',
          path: '',
        },
      ],
    }
  },
  methods: {
    // imageLoad() {
    //   this.$bus.$emit('imageLoading')
    // },
    // backTop() {
    //   this.scroll.scrollTo(0, 0, 1000)
    // },
  },
  mounted() {
    console.log(this.newData) //[Array(8), __ob__: Observer]
    // console.log(this.newData[2])
  },
  // watch: {
  //   newData: {
  //     deep: true,
  //     // immediate: true,
  //     handler(newVal) {
  //       console.log(newVal)
  //     },
  //   },
  // },
  // this.daHongPaoList = this.newData //
  // console.log(this.daHongPaoList)
  // console.log(this.daHongPaoList[0]) //undefined
}
</script>

<style lang="less" scoped>
.dahongpao {
  width: 100vw;

  .item {
    position: relative;
    img {
      vertical-align: middle;
      width: 100%;
    }
  }

  .product-list {
    background: #fff;

    ul {
      padding: 0.9375rem 0.3125rem 0.3125rem;
      margin: 0.2281rem;
      overflow: hidden;
      li {
        float: left;
        width: 48%;
        box-sizing: border-box;
        background: #f9f8f6;
        padding: 0.3125rem;
        margin: 1%;
        .product-detail {
          border: 1px solid #cb3c38;
          .pic {
            position: relative;
            padding: 0.3125rem;
            img {
              width: 100%;
            }
          }
          .name {
            color: #cb3c38;
            text-align: center;
            font-size: 0.9375rem;
            font-weight: bold;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding: 0 0.3125rem;
          }
          .prod-act {
            color: #666;
            text-align: center;
            padding-bottom: 0 0 0.3125rem;
            border-bottom: 1px dashed #cb3c38;
            margin: 0.4688rem;
            font-size: 0.8125rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .price {
            display: flex;
            justify-content: space-between;
            color: #cb3c38;
            padding: 0 0.625rem 0.625rem;
            .pl {
              font-weight: bold;
              height: 1.5rem;
              line-height: 1.5rem;
              font-size: 0.875rem;
              b {
                font-weight: bold;
                font-size: 1.25rem;
              }
            }
            .pr span {
              text-align: center;
              color: #fff;
              background: #cb3c38;
              height: 1.5rem;
              line-height: 1.5rem;
              display: block;
              padding: 0 0.5938rem;
              font-size: 0.875rem;
            }
          }
        }
      }
    }
  }
  .enter {
    padding: 0.625rem;
    background: #fff;
  }
  .footer {
    height: 8.75rem;
  }
}
</style>