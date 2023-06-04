<template>
  <div class="xiaozhong" :style="{backgroundImage: `url(${backgroundImages.img1})`}">
    <div class="toptxt">
      <p class="top-txt1">正山小种</p>
      <p class="top-txt2">源自武夷山 红茶鼻祖</p>
    </div>
    <div class="top-banner">
      <img :src="backgroundImages.img2" @load="imageLoad">
    </div>
    <p class="top-txt3">
      世界上最早的红茶，正山小种延续了四百年的传奇
      <br>
      条索壮实带天然花香，味醇厚甘爽，喉韵悠长尽是特色
      <span><i class="iconfont icon-xiangxia"></i></span>
    </p>
    <div class="nav">
      <ul class="nav-item">
        <li class="nav_conten"><span @click="scroll.scrollTo(0, -675, 50)">基础款</span></li>
        <li class="nav_conten"><span @click="scroll.scrollTo(0, -1750, 50)">礼盒款</span></li>
        <li class="nav_conten"><span @click="scroll.scrollTo(0, -2190, 50)">选购指南</span></li>
      </ul>
    </div>
    <div class="jck-product">
      <img :src="backgroundImages.img3">
      <b>基础款-爆款</b>
      <p>BASIC SECTION</p>
    </div>
    <div class="product1" :style="{backgroundImage: `url(${backgroundImages.img4})`}">
      <div>
        <div class="pd">
          <div class="pic">
            <img :src="productImg.img1">
          </div>
          <div class="pd-price">
            <span>第一档</span>
            <h1>正山小种 1 號</h1>
            <div class="logan">
              <span>天然花香无烟型</span>
            </div>
            <div class="price">
              <b>88</b>
              <span>/250g</span>
            </div>
            <div class="pbtn">立即购买></div>
          </div>
        </div>
        <p class="txt">这款适合当工作口粮茶饮用的正山小种，单泡不到2元，产自武夷山高海拔茶园，山野气息独特，带天然花香，滋味浓醇香甜，性价比实在高。</p>
      </div>
    </div>
    <div class="product1" :style="{backgroundImage: `url(${backgroundImages.img4})`}">
      <div>
        <div class="pd">
          <div class="pic">
            <img :src="productImg.img2">
          </div>
          <div class="pd-price">
            <span>第二档</span>
            <h1>正山小种 2 號</h1>
            <div class="logan">
              <span>薯蜜香馥郁芬芳</span>
            </div>
            <div class="price">
              <b>89</b>
              <span>/150g</span>
            </div>
            <div class="pbtn">立即购买></div>
          </div>
        </div>
        <p class="txt">这款正山小种有三大特点，其一是条索更加紧细秀气，很是好看；其二是薯蜜香桂圆味显著，滋味更加甘醇爽滑；最后是耐泡度更高，可达10泡！</p>
      </div>
    </div>
    <div class="product1" :style="{backgroundImage: `url(${backgroundImages.img4})`}">
      <div>
        <div class="pd">
          <div class="pic">
            <img :src="productImg.img3">
          </div>
          <div class="pd-price">
            <span>第三档</span>
            <h1>正山小种 3 號</h1>
            <div class="logan">
              <span>清甜顺滑花果香</span>
            </div>
            <div class="price">
              <b>99</b>
              <span>/150g</span>
            </div>
            <div class="pbtn">立即购买></div>
          </div>
        </div>
        <p class="txt">这款正山小种是1號的升级款，精选一芽一两叶为原料，等级最高，滋味清甜如蜂蜜水，杯中水中皆是花果香，经久不散，十分稳定耐泡。</p>
      </div>
    </div>
    <div class="jck-product">
      <img :src="backgroundImages.img3">
      <b>礼盒款-大气</b>
      <p>GIFT SECTION</p>
    </div>
    <div class="product2" :style="{backgroundImage: `url(${backgroundImages.img4})`}">
      <div class="product2-bg">
        <div class="name">
          <div class="name-bd">
            <h2>正山小种-1號复古罐装250g</h2>
            <p>花香显 水顺甜</p>
          </div>
        </div>
        <div class="price-btn">
          <div class="price-btn-pr">78</div>
          <div class="price-btn-buy">立即购买></div>
        </div>
        <div class="product2-picture">
          <img :src="productImg.img4">
        </div>
      </div>
    </div>
    <div class="product2" :style="{backgroundImage: `url(${backgroundImages.img4})`}">
      <div class="product2-bg">
        <div class="name">
          <div class="name-bd">
            <h2>正山小种-蓝色臻品250g</h2>
            <p>周正沉稳 经典永传</p>
          </div>
        </div>
        <div class="price-btn">
          <div class="price-btn-pr">99</div>
          <div class="price-btn-buy">立即购买></div>
        </div>
        <div class="product2-picture">
          <img :src="productImg.img5" @load="imageLoad">
        </div>
      </div>
    </div>
    <div class="backtop-footer" @click="backTop">
      回到顶部
    </div>
  </div>
</template>

<script>
export default {
  name: 'XiaoZhong',
  props: ['newData', 'scroll'],
  data() {
    return {
      backgroundImages: {},
      productImg: {},
    }
  },
  methods: {
    imageLoad() {
      //   this.$bus.$emit('imageLoading')
    },
    backTop() {
      // this.scroll.scrollTo(0, 0, 1000)
    },
  },
  mounted() {
    console.log(this.newData.backgroundImages)
    this.backgroundImages = this.newData.backgroundImages
    this.productImg = this.newData.productImg
  },
}
</script>

<style lang="less" scoped>
.xiaozhong {
  background-size: contain;
  overflow: hidden;
  width: 100vw;
  .toptxt {
    .top-txt1 {
      color: #a30112;
      text-align: center;
      padding: 0.3125rem;
      font-size: 1.875rem;
      font-weight: bold;
      box-sizing: border-box;
      margin-top: 0.625rem;
    }
    .top-txt2 {
      color: #a30112;
      text-align: center;
      font-size: 0.9375rem;
      box-sizing: border-box;
      letter-spacing: 0.3125rem;
      padding-left: 0.5rem;
    }
  }
  .top-banner {
    border-radius: 0.3125rem;
    overflow: hidden;
    position: relative;
    margin: 0.75rem;
    box-shadow: -4px 0px 10px rgb(0 0 0 / 30%);
    img {
      width: 100%;
      vertical-align: middle;
    }
  }
  .top-txt3 {
    text-align: center;
    box-sizing: border-box;
    color: #363636;
    font-size: 0.9375rem;
    line-height: 1.8;
    font-weight: 600;
    span {
      display: block;
      font-size: 0.75rem;
      color: #363636;
      font-size: 0.8125rem;
    }
  }
  .nav {
    background: #a30112;
    padding: 0.625rem 0;
    margin-bottom: 1.25rem;
    box-sizing: border-box;
    .nav-item {
      display: flex;
      .nav_conten {
        flex: 1;
        text-align: center;
        line-height: 1.5625rem;
        span {
          padding: 0.25rem 0rem;
          border-radius: 5px;
          color: #e8c689;
          display: inline-block;
          font-size: 0.9375rem;
        }
      }
    }
  }
  .jck-product {
    text-align: center;
    background-size: contain;
    color: #a30112;
    img {
      display: block;
      width: 2.375rem;
      margin: 0 auto;
    }
    b {
      font-size: 0.875rem;
      display: block;
      padding: 0.3125rem;
    }
    p {
      font-size: 0.75rem;
    }
  }
  .product1 {
    margin: 0.5rem 0.75rem 1.5rem;
    border-radius: 0.3125rem;
    padding: 0.5rem;
    .pd {
      display: flex;
      padding: 0.5rem 0.5rem;
      .pic {
        width: 10.625rem;
        img {
          width: 100%;
          vertical-align: middle;
        }
      }
      .pd-price {
        text-align: center;
        padding-left: 0.5rem;
        flex: 1;
        span {
          text-align: center;
          display: inline-block;
          position: relative;
          font-size: 1rem;
          color: #e7c588;
        }
        h1 {
          font-size: 1.25rem;
          color: #fff;
          text-align: center;
          margin: 0.3125rem auto;
          font-weight: bold;
        }
        .logan {
          text-align: center;
          margin: 0.3125rem auto;
          span {
            color: #fff;
            text-align: center;
            padding-top: 0.3125rem;
            border-top: 1px dashed #fff;
            display: block;
          }
        }
        .price {
          color: #fff;
          b {
            position: relative;
            padding-left: 0.9375rem;
            font-size: 2.375rem;
            height: 2.375rem;
            line-height: 2.375rem;
          }
          b::after {
            content: '¥';
            position: absolute;
            left: 0;
            top: 0;
            font-size: 0.9375rem;
          }
          span {
            color: #fff;
          }
        }
        .pbtn {
          background: #e7c588;
          border-radius: 0.3125rem;
          color: #a30112;
          font-size: 0.9375rem;
          padding: 0.3125rem;
          box-sizing: border-box;
          margin: 0.3125rem 0.625rem 0;
        }
      }
    }
    .txt {
      display: block;
      line-height: 2;
      font-size: 0.875rem;
      color: #e8c688;
      margin-top: 0.5rem;
      padding: 0.5rem;
      border-radius: 0.3125rem;
      text-align: justify;
    }
  }

  .product2 {
    text-align: center;
    margin-top: 2.8125rem;
    margin-bottom: 10.625rem;
    .product2-bg {
      position: relative;
      display: block;
      padding-bottom: 8.25rem;
      .name {
        background-color: rgb(172, 18, 22);
        margin: 0 auto;
        padding: 0.5rem;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        .name-bd {
          border: 2px solid #e7c588;
          padding: 0.5rem;
          color: #e7c588;
          h2 {
            font-size: 0.9375rem;
            padding-bottom: 0.5rem;
            text-align: center;
          }
          p {
            text-align: center;
            font: 14px/1.4 PingFangSC-Light, helvetica, 'Microsoft YaHei', arial;
          }
        }
      }
      .price-btn {
        margin-top: 3rem;
        display: inline-table;
        .price-btn-pr {
          position: relative;
          display: inline-block;
          padding-left: 0.9375rem;
          font-size: 2.375rem;
          height: 2.375rem;
          line-height: 2.375rem;
          color: #e7c588;
        }
        .price-btn-pr::after {
          content: '¥';
          position: absolute;
          left: 0;
          top: 0.125rem;
          font-size: 1rem;
          height: 1rem;
          line-height: 1rem;
        }
      }
      .price-btn-buy {
        display: inline-block;
        background: #e7c588;
        border-radius: 0.3125rem;
        color: #a30112;
        font-size: 0.9375rem;
        padding: 0.125rem 0.3125rem;
        box-sizing: border-box;
        margin: 0.5rem 1.25rem 0 0.625rem;
        vertical-align: top;
      }
    }
    .product2-picture {
      position: absolute;
      width: 90%;
      top: 13.125rem;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 0.3125rem;
      border: 1px solid #de090e;
      img {
        width: 100%;
        border: 0;
        vertical-align: middle;
      }
    }
  }
  .backtop-footer {
    background-color: rgb(172, 18, 22);
    height: 5rem;
    font-size: 1.25rem;
    letter-spacing: 0.375rem;
    color: #e7c588;
    line-height: 5rem;
    text-align: center;
  }
}
</style>