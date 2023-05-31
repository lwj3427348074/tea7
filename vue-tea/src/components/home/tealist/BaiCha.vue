<template>
  <div class="baicha">
    <img :src="headerImages.background" class="s-img">
    <div class="top-des">
      <div>
        <div class="tea-manager">
          <img :src="headerImages.person">
          <b>肖丽梅</b>
          <span>白茶产品经理</span>
        </div>
        <p>白茶的制作工艺是最天然的，通过阳光晾晒，再文火慢慢烘干，
          既保留了其独有药效，也保持了它的天然香气。白茶的品种较多，
          其中的档次也有细分，希望你们能通过这个专题更好的选购白茶产品。</p>
      </div>
      <b class="wechat"><em class="iconfont icon-weixin"></em>这是我的微信号：18960632380，欢迎随时找我交流</b>
    </div>
    <!-- 口粮茶 -->
    <div class="tea-item">
      <div class="introduce-title">
        <span><i class="iconfont icon-chaye"></i></span>
      </div>
      <b class="top-title">如果您想要寻找一款口粮茶</b>
      <div class="introduce-image">
        <span>
          <img :src="kouliang.image1">
        </span>
        <span>
          <img :src="kouliang.image2" @load="imageLoad">
        </span>
      </div>
      <div class="plate-introduce">
        <p>选购一款口粮茶，品种可能不是白茶中最优质的，但口感绝对是不错的。</p>
        <p>
          这里的几款产品，价格和外形可能有些差异，但各有各的
          <b style="color: #b54f4a;">特色优势</b>
          ，每一款都值得选购。
        </p>
      </div>
      <div class="introduce-format-list" :style="{backgroundImage: `url(${backgroundImages})`}">
        <div class="list-product">
          <div class="product-kouliang addp">
            <img :src="kouliang.product1">
            <p class="name">远致白茶清香型</p>
            <p class="price">
              <b>39元/80g</b>
              <em>约300元/斤</em>
            </p>
            <p class="subtitle">
              铁罐包装
              <br>
              时尚典雅
            </p>
            <p class="seebtn">查看详情></p>
          </div>
          <div class="product-kouliang addp">
            <img :src="kouliang.product2">
            <p class="name">福鼎白杜丹</p>
            <p class="price">
              <b>128元/350g</b>
              <em>约180元/斤</em>
            </p>
            <p class="subtitle">
              幸福礼盒装
              <br>
              5年陈茶 用心好礼
            </p>
            <p class="seebtn">查看详情></p>
          </div>
        </div>
      </div>

    </div>
    <!-- 外形口感 -->
    <div class="tea-item">
      <div class="introduce-title">
        <span><i class="iconfont icon-chaye"></i></span>
      </div>
      <b class="top-title">如果您想要更好一点的品种</b>
      <div class="introduce-image">
        <span>
          <img :src="productImages.image1">
        </span>
        <span>
          <img :src="productImages.image2" @load="imageLoad">
        </span>
      </div>
      <div class="introduce-format">
        <span>
          <p>白牡丹分为特级.一级.二级。特级白牡丹，又称牡丹王。</p>
          <p>这款<b style="color: #b54f4a;">牡丹王</b>产自福建政和。芽叶连枝，白毫多。采用政和白茶传统工艺制作，口感鲜醇凉爽，有青草香和花香，还增了一丝醇厚。</p>
        </span>
        <div class="product-kouliang">
          <img :src="productImages.image3">
          <p class="name">远致白茶政和牡丹王清香型铁罐装80g</p>
          <p class="price">
            <b>79元/80g</b>
            <em>约490元/斤</em>
          </p>
          <p class="subtitle">
            传统工艺
            <br>
            口感鲜醇
          </p>
          <p class="seebtn">查看详情></p>
        </div>
      </div>

    </div>

    <!-- 个性好茶 -->
    <div class="tea-item">
      <div class="introduce-title">
        <span><i class="iconfont icon-chaye"></i></span>
      </div>
      <b class="top-title">如果您想要更好一点的外形口感</b>
      <div class="introduce-image">
        <img :src="dashiImages" class="dashicha-img">
      </div>
      <div class="plate-introduce">
        <p>
          要知道，白茶如果做出个性，是非常有魅力的！这里的
          <b style="color: #b54f4a;">茶师市集</b>
          ，精选了3位茶师的4款白茶！每一位茶师，每一款茶叶，我们都仔细甄选过，请您放心品鉴。
        </p>
      </div>
      <div class="back-dashi">
        <p>查看详情></p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'BaiCha',
  props: ['scroll'],
  data() {
    return {
      headerImages: {
        background: '../images/home/baicha/baicha1.png',
        person: '../images/home/baicha/person.jpg',
      },
      kouliang: {
        image1: '../images/home/baicha/kouliangcha1.jpg',
        image2: '../images/home/baicha/kouliangcha2.jpg',
        product1: '../images/home/baicha/kouliangcha3.jpeg',
        product2: '../images/home/baicha/kouliangcha4.jpeg',
      },
      backgroundImages: '../images/home/baicha/background.gif',
      productImages: {
        image1: '../images/home/baicha/product1.jpg',
        image2: '../images/home/baicha/product2.jpg',
        image3: '../images/home/baicha/product3.jpeg',
      },
      dashiImages: '../images/home/baicha/dashi.jpg',
    }
  },
  methods: {
    imageLoad() {
      // this.$bus.$emit('imageLoading')
    },
  },
}
</script>

<style lang="less" scoped>
.baicha {
  background-color: #f5f5f5;
  .s-img {
    width: 100%;
    text-align: center;
    display: block;
    margin: 0 auto;
  }
  .top-des {
    background: #fff;
    > div {
      position: relative;
      font-size: 0.34rem;
      line-height: 1.5;
      text-align: center;
      padding: 0.266667rem;
      display: flex;
      .tea-manager {
        text-align: center;
        width: 30%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 0.48rem;
        color: #b54f4a;
        img {
          width: 1.866667rem;
          height: 1.866667rem;
          border-radius: 50%;
          border: 1px solid #dedede;
          text-align: center;
          margin: 0 auto;
        }
        b {
          display: block;
          white-space: nowrap;
          text-align: center;
        }
        span {
          color: #000;
          white-space: nowrap;
          font-size: 0.32rem;
        }
      }
      p {
        width: 70%;
        padding-left: 0.266667rem;
        font-size: 0.36rem;
        box-sizing: border-box;
        text-align: justify;
      }
    }
    .wechat {
      text-align: center;
      color: #b54f4a;
      display: block;
      width: 100%;
      font-size: 0.35rem;
      padding-bottom: 0.266667rem;
      em {
        font-weight: 400;
      }
    }
  }
}

.tea-item {
  background: #fff;
  margin-top: 1.066667rem;
  .introduce-title {
    font-size: 0.373333rem;
    color: #555;
    margin: 0.266667rem auto;
    border-bottom: 1px #b54f4a solid;
    position: relative;
    span {
      position: absolute;
      border-radius: 50%;
      width: 0.533333rem;
      height: 0.533333rem;
      top: -0.266667rem;
      left: 50%;
      margin-left: -0.266667rem;
      color: #fff;
      line-height: 1.4;
      background: #b54f4a;
      text-align: center;
      i {
        font-size: 0.373333rem;
      }
    }
  }
  .introduce-title::after,
  .introduce-title::before {
    content: '';
    width: 0.08rem;
    height: 0.08rem;
    border-radius: 50%;
    background: #b54f4a;
    display: block;
    position: absolute;
  }
  .introduce-title::before {
    left: 0;
    bottom: -0.053333rem;
  }
  .introduce-title::after {
    right: 0;
    bottom: -0.053333rem;
  }
  .top-title {
    font-size: 0.5rem;
    text-align: center;
    color: #b54f4a;
    margin: 0.533333rem auto 0.266667rem;
    display: block;
  }
  .introduce-image {
    display: flex;
    padding: 0 0.133333rem 0.266667rem;
    span {
      width: 50%;
      float: left;
      img {
        width: 100%;
        height: 100%;
        padding: 0.133333rem;
        box-sizing: border-box;
      }
    }
  }
  .plate-introduce {
    padding: 0.266667rem 0.266667rem 0;
    font-size: 0.36rem;
    text-align: justify;
    p {
      text-indent: 0.82rem;
      letter-spacing: 0.05rem;
      line-height: 0.6rem;
    }
  }
  .introduce-format-list {
    display: flex;
    margin: 0.133333rem;
    .list-product {
      padding: 0.133333rem 0;
      .addp {
        padding: 0.133333rem;
        float: left;
      }
    }
  }
}

.introduce-format {
  padding: 0.266667rem 0.266667rem 0.533333rem;
  display: flex;
  span {
    width: 50%;
    box-sizing: border-box;
    font-size: 0.36rem;
    line-height: 150%;
    margin-right: 0.266667rem;
    padding: 0.266667rem;
    flex-direction: column;
    display: flex;
    justify-content: center;
    p {
      padding: 0.266667rem 0;
      line-height: 0.6rem;
      letter-spacing: 0.05rem;
    }
  }
}

.product-kouliang {
  width: 50%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  img {
    width: 100%;
    border: 0;
    vertical-align: middle;
  }
  .name {
    font-size: 0.386rem;
    font-weight: bold;
    margin-top: 0.266667rem;
    text-align: center;
  }
  .price {
    text-align: center;
    margin-top: 0.266667rem;
    color: #b54f4a;
    b {
      font-size: 0.386rem;
    }
    em {
      font-weight: normal;
      white-space: nowrap;
      display: inline-block;
      border: 1px solid #ffd580;
      line-height: 0.373333rem;
      background: #ffffe5;
      padding: 1px 0.08rem;
      font-size: 0.32rem;
      color: #b54f4a;
      margin-left: 0.133333rem;
      font-style: normal;
    }
  }
  .subtitle {
    margin-bottom: 0.213333rem;
    margin-top: 0.213333rem;
    color: #000;
    font-size: 0.34rem;
    width: 100%;
    text-align: center;
    border-top: 1px solid #f5f5f5;
    padding-top: 0.266667rem;
  }
  .seebtn {
    padding: 0.133333rem 0.266667rem;
    text-align: center;
    background: #b54f4a;
    color: #fff;
    font-size: 0.373333rem;
    font-weight: 700;
    margin: 0.266667rem auto;
    border-radius: 5px;
    width: 3rem;
  }
}

.back-dashi {
  padding-bottom: 0.533333rem;
  background: #fff;
  margin-top: 1.066667rem;
  p {
    padding: 0.133333rem 0.266667rem;
    text-align: center;
    background: #b54f4a;
    color: #fff !important;
    font-size: 0.373333rem;
    font-weight: 700;
    margin: 0.266667rem auto;
    border-radius: 0.133333rem;
    width: 3rem;
    display: block;
  }
}
.introduce-image .dashicha-img {
  width: 100%;
  height: 100%;
  padding: 0.133333rem;
  box-sizing: border-box;
}
</style>