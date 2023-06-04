<template>
  <div class="longjing">
    <img :src="headerImages.background" class="s-img">
    <div class="top-des">
      <div>
        <div class="tea-manager">
          <img :src="headerImages.person">
          <b>陈建国</b>
          <span>普洱产品经理</span>
        </div>
        <p>普洱茶有生茶和熟茶之分，生茶霸气感十足，但随着陈放时间的增长，会转化得越来越柔和。熟茶比较醇厚，喝起来很温润。
          我从云南带来了几款很有代表性的生普和熟普，欢迎品鉴。</p>
      </div>
      <b class="wechat"><em class="iconfont icon-weixin"></em>这是我的微信号：15506901199，欢迎随时找我交流</b>
    </div>
    <!-- 口粮茶 -->
    <div class="tea-item">
      <div class="introduce-title">
        <span><i class="iconfont icon-chaye"></i></span>
      </div>
      <b class="top-title">
        最热单品<br>
        90%用户首选它
      </b>
      <div class="introduce-format">
        <span>
          <p>在普洱茶界，一直流传这种说法：“藏新茶，喝熟茶，品老茶”。
          </p>
          <p>这款茶的口感非常
            <b style="color: #b54f4a;">适合普洱茶入门茶友</b>
          </p>
          <p>茶的
            <b style="color: #b54f4a;">醇厚度适中</b>
            ，没有堆味。入口
            <b style="color: #b54f4a;">甘甜顺滑，口感纯净</b>
            。算是传统“勐海味”标准之作。
          </p>
        </span>
        <div class="product-kouliang">
          <img :src="kouliang.product">
          <p class="name">渤海熟茶</p>
          <p class="price">
            <b>78元/357g</b>
            <em>约230元/斤</em>
          </p>
          <p class="subtitle">
            高性价比
            <br>
            具有传统渤海味
          </p>
          <p class="seebtn">查看详情></p>
        </div>
      </div>

    </div>
    <!-- 外形口感 -->
    <div class="tea-item">
      <div class="introduce-title">
        <span><i class="iconfont icon-chaye"></i></span>
      </div>
      <b class="top-title">如果您喜欢醇厚的普洱</b>
      <div class="introduce-image">
        <span>
          <img :src="kouliang.image1">
        </span>
        <span>
          <img :src="kouliang.image2" @load="imageLoad">
        </span>
      </div>
      <div class="plate-introduce">
        <p>
          龙井等级的高低受到产地、采摘时间、外形等因素的影响。采摘于
          <b style="color: #b54f4a;">雨前</b>
          的这两款龙井，外形美观，口感
          <b style="color: #b54f4a;">鲜爽迷人</b>
          ，而且价格也适中。而初芽价格略高于凝露，主要还是因为初芽
          <b style="color: #b54f4a;">外形</b>
          更有优势一些。
        </p>
      </div>
      <div class="introduce-format-list" :style="{backgroundImage: `url(${backgroundImages})`}">
        <div class="list-product">
          <div class="product-kouliang addp">
            <img :src="productImages.image1">
            <p class="name">宫廷熟茶</p>
            <p class="price">
              <b>168元/357g</b>
              <em>约230元/斤</em>
            </p>
            <p class="subtitle">
              八年陈，全芽制作
              <br>
              香气有层次
            </p>
            <p class="seebtn">查看详情></p>
          </div>
          <div class="product-kouliang addp">
            <img :src="productImages.image2">
            <p class="name">青柑熟茶</p>
            <p class="price">
              <b>159元/24粒</b>
            </p>
            <p class="subtitle">
              新会小青柑礼盒
              <br>
              高颜值，好看更好喝
            </p>
            <p class="seebtn">查看详情></p>
          </div>
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
          当勐海熟茶遇到新会小青柑，茶香和果香一见倾心，完美融合，清新甘甜的滋味，一次就难以忘怀，难道你要错过吗？
          <b style="color: #b54f4a;">山高雾重，温热多雨</b>
          ，方有上等普洱，1000多天沉淀见证时间带来的奇迹-绵绵不绝的滑爽与甘甜
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
  name: 'LongJing',
  props: ['newData', 'scroll'],
  data() {
    return {
      headerImages: {},
      kouliang: {},
      backgroundImages: '',
      productImages: {},
      dashiImages: '',
    }
  },
  methods: {
    imageLoad() {
      //   this.$bus.$emit('imageLoading')
    },
  },
  mounted() {
    console.log(this.newData.headerImages)
    this.headerImages = this.newData.headerImages
    this.kouliang = this.newData.kouliang
    this.backgroundImages = this.newData.backgroundImages
    this.productImages = this.newData.productImages
    this.dashiImages = this.newData.dashiImages
  },
}
</script>

<style lang="less" scoped>
.longjing {
  background-color: #f5f5f5;
  width: 100vw;
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
      font-size: 0.7969rem;
      line-height: 1.5;
      text-align: center;
      padding: 0.625rem;
      display: flex;
      .tea-manager {
        text-align: center;
        width: 30%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 1.125rem;
        color: #b54f4a;
        img {
          width: 4.375rem;
          height: 4.375rem;
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
          font-size: 0.75rem;
        }
      }
      p {
        width: 70%;
        padding-left: 0.625rem;
        font-size: 0.8438rem;
        box-sizing: border-box;
        text-align: justify;
        line-height: 1.5;
      }
    }
    .wechat {
      text-align: center;
      color: #b54f4a;
      display: block;
      width: 100%;
      font-size: 0.8125rem;
      padding-bottom: 0.625rem;
      em {
        font-weight: 400;
      }
    }
  }

  .tea-item {
    background: #fff;
    margin-top: 2.5rem;
    .introduce-title {
      font-size: 0.875rem;
      color: #555;
      margin: 0.625rem auto;
      border-bottom: 1px #b54f4a solid;
      position: relative;
      span {
        position: absolute;
        border-radius: 50%;
        width: 1.25rem;
        height: 1.25rem;
        top: -0.625rem;
        left: 50%;
        margin-left: -0.625rem;
        color: #fff;
        line-height: 1.4;
        background: #b54f4a;
        text-align: center;
        i {
          font-size: 12px;
        }
      }
    }
    .introduce-title::after,
    .introduce-title::before {
      content: '';
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background: #b54f4a;
      display: block;
      position: absolute;
    }
    .introduce-title::before {
      left: 0;
      bottom: -2px;
    }
    .introduce-title::after {
      right: 0;
      bottom: -2px;
    }
    .top-title {
      font-size: 1.125rem;
      text-align: center;
      color: #b54f4a;
      margin: 1.25rem auto 0.625rem;
      display: block;
    }
    .introduce-image {
      display: flex;
      padding: 0 0.3125rem 0.625rem;
      .dashicha-img {
        width: 100%;
        height: 100%;
        padding: 0.3125rem;
        box-sizing: border-box;
      }
      span {
        width: 50%;
        float: left;
        img {
          width: 100%;
          height: 100%;
          padding: 0.3125rem;
          box-sizing: border-box;
        }
      }
    }
    .introduce-format {
      padding: 0.625rem 0.625rem 1.25rem;
      display: flex;
      span {
        width: 50%;
        box-sizing: border-box;
        font-size: 0.8438rem;
        line-height: 150%;
        margin-right: 0.625rem;
        padding: 0.625rem;
        flex-direction: column;
        display: flex;
        justify-content: center;
        p {
          padding: 0.625rem 0;
          line-height: 1.25rem;
          letter-spacing: 0.125rem;
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
          font-size: 0.9375rem;
          font-weight: bold;
          margin-top: 0.625rem;
          text-align: center;
        }
        .price {
          text-align: center;
          margin-top: 0.625rem;
          color: #b54f4a;
          b {
            font-size: 0.9375rem;
          }
          em {
            font-weight: normal;
            white-space: nowrap;
            display: inline-block;
            border: 1px solid #ffd580;
            line-height: 0.625rem;
            background: #ffffe5;
            padding: 1px 0.1875rem;
            font-size: 0.75rem;
            color: #b54f4a;
            margin-left: 0.3125rem;
            font-style: normal;
          }
        }
        .subtitle {
          margin-bottom: 0.5rem;
          margin-top: 0.5rem;
          color: #000;
          font-size: 0.8125rem;
          width: 100%;
          text-align: center;
          border-top: 1px solid #f5f5f5;
          padding-top: 0.625rem;
        }
        .seebtn {
          padding: 0.3125rem 0.625rem;
          text-align: center;
          background: #b54f4a;
          color: #fff;
          font-size: 0.875rem;
          font-weight: 700;
          margin: 0.625rem auto;
          border-radius: 5px;
          width: 7rem;
        }
      }
    }
    .plate-introduce {
      padding: 0.625rem 0.625rem 0;
      font-size: 0.875rem;
      text-align: justify;
      p {
        text-indent: 2.125rem;
        letter-spacing: 0.125rem;
        line-height: 1.25rem;
      }
    }
    .introduce-format-list {
      display: flex;
      margin: 0.3125rem;
      .list-product {
        padding: 0.3125rem 0;
      }
    }
  }

  .addp {
    padding: 0.3125rem;
    float: left;
  }
  .back-dashi {
    padding-bottom: 1.25rem;
    background: #fff;
    margin-top: 2.5rem;
    p {
      padding: 0.3125rem 0.625rem;
      text-align: center;
      background: #b54f4a;
      color: #fff !important;
      font-size: 0.875rem;
      font-weight: 700;
      margin: 0.625rem auto;
      border-radius: 0.3125rem;
      width: 7rem;
      display: block;
    }
  }
}
</style>