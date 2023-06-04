<template>
  <div class="longjing">
    <img :src="headerImages.background" class="s-img">
    <div class="top-des">
      <div>
        <div class="tea-manager">
          <img :src="headerImages.person">
          <b>陈建国</b>
          <span>龙井产品经理</span>
        </div>
        <p>龙井属于绿茶，是中国茶品之首。龙井茶色泽翠绿，香气浓郁，甘醇爽口，
          是很受大众欢迎的一个茶品种。那一款好的龙井，具体评判标准有哪些？
          怎么选购一款适合自己的龙井呢？希望你们可以通过这个专题找到答案。</p>
      </div>
      <b class="wechat"><em class="iconfont icon-weixin"></em>这是我的微信号：15506901199，欢迎随时找我交流</b>
    </div>
    <!-- 口粮茶 -->
    <div class="tea-item">
      <div class="introduce-title">
        <span><i class="iconfont icon-chaye"></i></span>
      </div>
      <b class="top-title">如果您在寻找一款口粮茶</b>
      <div class="introduce-image">
        <span>
          <img :src="kouliang.image1">
        </span>
        <span>
          <img :src="kouliang.image2" @load="imageLoad">
        </span>
      </div>
      <div class="introduce-format">
        <span>
          <p>作为
            <b style="color: #b54f4a;">中国十大名茶</b>
            之首的龙井，有“色绿、香郁、味甘、形美”
            <b style="color: #b54f4a;">四绝</b>
            的特点
          </p>
          <p>一款适合当口粮茶的龙井，它外形上可能有些许的不足，但优势在于
            <b style="color: #b54f4a;">适口好喝</b>
            的，而且价格不高。
          </p>
          <p>这款龙井，产地非龙井核心产区，但豆香怡人，
            入口很顺，口感鲜爽醇厚，回甘明显。
          </p>
        </span>
        <div class="product-kouliang">
          <img :src="kouliang.product">
          <p class="name">龙井1號</p>
          <p class="price">
            <b>68元/250g</b>
            <em>约140元/斤</em>
          </p>
          <p class="subtitle">
            口感鲜爽醇厚
            <br>
            好喝不贵
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
      <b class="top-title">如果您想要更好一点的外形口感</b>
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
            <p class="name">龙井2號</p>
            <p class="price">
              <b>88元/150g</b>
              <em>约290元/斤</em>
            </p>
            <p class="subtitle">
              清鲜爽滑
              <br>
              果香与栗香混合
            </p>
            <p class="seebtn">查看详情></p>
          </div>
          <div class="product-kouliang addp">
            <img :src="productImages.image2" @load="imageLoad">
            <p class="name">龙井3號</p>
            <p class="price">
              <b>118元/150g</b>
              <em>约370元/斤</em>
            </p>
            <p class="subtitle">
              栗香明显
              <br>
              清爽甘醇
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
        <img :src="dashiImages" class="dashicha-img" @load="imageLoad">
      </div>
      <div class="plate-introduce">
        <p>
          除了龙井，您是否要试一试其他品种的个性茶？这里的
          <b style="color: #b54f4a;">茶师市集</b>
          ，精选了数十位茶师亲制的几十款个性好茶：岩茶、铁观音、红茶、白茶等等。
          每一位茶师，每一款茶叶，我们都仔细甄选过，请您放心品鉴。
          更有优势一些。
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
  mounted() {
    // this.$bus.$on('imageLoading', () => {
    //     this.scroll.refresh()
    // })
    console.log(this.newData.headerImages)
    this.headerImages = this.newData.headerImages
    this.kouliang = this.newData.kouliang
    this.backgroundImages = this.newData.backgroundImages
    this.productImages = this.newData.productImages
    this.dashiImages = this.newData.dashiImages
  },
  methods: {
    imageLoad() {
      // this.$bus.$emit('imageLoading')
    },
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