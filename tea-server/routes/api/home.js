var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function (req, res, next) {
  //res.send和res.json都行
  res.send({
    code: 0,
    a: 1
  })
});

router.get('/index_list/0/data/1', function (req, res, next) {
  //res.send和res.json都行
  res.send({
    code: 0,
    data: {
      topBar: [
        { id: 0, label: '推荐' },
        { id: 1, label: '白茶' },
        { id: 2, label: '大红袍' },
        { id: 3, label: '金骏眉' },
        { id: 4, label: '龙井茶' },
        { id: 5, label: '普洱' },
        { id: 6, label: '正山小种' },
      ],
      data: [
        //swipe
        {
          id: 0,
          type: 'swipeList',
          data: [
            { id: 0, imgUrl: './images/home/swipe/swiper1.jpeg' },
            { id: 1, imgUrl: './images/home/swipe/swiper2.jpeg' },
            { id: 2, imgUrl: './images/home/swipe/swiper3.jpeg' },
            { id: 3, imgUrl: './images/home/swipe/swiper4.jpeg' },
            { id: 4, imgUrl: './images/home/swipe/swiper5.jpeg' },
          ]
        },
        //icons
        {
          id: 1,
          type: 'iconsList',
          data: [
            { id: 0, title: '自饮茶', imgUrl: './images/home/icons/icons1.png' },
            { id: 1, title: '品牌茶', imgUrl: './images/home/icons/icons2.png' },
            { id: 2, title: '茶具', imgUrl: './images/home/icons/icons3.png' },
            { id: 3, title: '领福利', imgUrl: './images/home/icons/icons4.png' },
            { id: 4, title: '官方验证', imgUrl: './images/home/icons/icons5.png' },
          ]
        },
        //茶七头条
        {
          id: 2,
          type: 'teaNewsList',
          data: [
            { id: 0, title: '岩茶为何不提春茶概念？' },
            { id: 1, title: '重要公告 | 客服功能已经上线' },
          ]
        },
        //小七推荐
        {
          id: 3,
          type: 'severnCommendList',
          data: [
            {
              id: 0,
              imgUrl: './images/home/xiaoqituijian/xiaoqituijian1.png',
              path: '/home',
            },
            {
              id: 1,
              imgUrl: './images/home/xiaoqituijian/xiaoqituijian2.png',
              path: '/home',
            },
          ]
        },
        //专题优选
        {
          id: 4,
          type: 'youXuanList',
          data: [
            {
              id: 1,
              imgUrl: './images/home/youxuan/youxuan1.jpeg',
            },
            {
              id: 2,
              imgUrl: './images/home/youxuan/youxuan2.jpeg',
            },
            {
              id: 3,
              imgUrl: './images/home/youxuan/youxuan3.jpeg',
            },
          ]
        },
        //爆款推荐
        {
          id: 5,
          type: 'recommedList',
          data: [
            {
              id: 80,
              name: '龙井1號铁罐250g',
              content: '鲜爽甘醇 口粮首选',
              title: '销冠款',
              imgUrl: './images/home/recommend/recommend1.jpg',
              price: '68',
            },
            {
              id: 81,
              name: '铁观音2號250g',
              content: '核心产区滋味正',
              title: '老铁推荐',
              imgUrl: './images/home/recommend/recommend2.jpg',
              price: '128',
            },
            {
              id: 82,
              name: '正山小种3號150g',
              content: '难以忘怀的桂花香',
              title: '爆款',
              imgUrl: './images/home/recommend/recommend3.jpg',
              price: '99',
            },
            {
              id: 83,
              // name: '黑檀镂空六君子',
              // content: '给生活一点精致的仪式感',
              title: '茶友必备',
              imgUrl: './images/home/recommend/recommend4.jpg',
              // price: '45',
            },
          ]
        },
        //茶文化
        {
          id: 6,
          type: 'teaCultureList',
          data: [
            {
              id: 1,
              imgUrl: './images/home/teaculture/teaculture1.jpg',
              path: '/home',
              title: '好文精选',
              content: '原创好文都在这',
            },
            {
              id: 2,
              imgUrl: './images/home/teaculture/teaculture2.jpg',
              path: '/home',
              title: '茶叶百科',
              content: '让您喝茶更专业',
            },
          ]
        },
        //猜你喜欢
        {
          id: 7,
          type: 'favoriteList',
          data: [
            {
              id: 91,
              imgUrl: './images/home/favorite/favorite1.png',
              name: '雨前珍稀白茶1号',
              price: 68,
            },
            {
              id: 92,
              imgUrl: './images/home/favorite/favorite2.jpeg',
              name: '武夷山灰芽花香金骏眉3号',
              price: 128,
            },
            {
              id: 93,
              imgUrl: './images/home/favorite/favorite3.jpeg',
              name: '2023春茶明前龙井飞花',
              price: 128,
            },
            {
              id: 94,
              imgUrl: './images/home/favorite/favorite4.jpeg',
              name: '云南凤庆高海拔古树滇红',
              price: 99,
            },
          ]
        },
      ]
    }
  })
});

router.get('/index_list/1/data/1', function (req, res, next) {
  //res.send和res.json都行
  res.send({
    code: 0,
    data:
    {
      id: 1,
      type: 'baiChaList',
      data: {
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
    }
  })
});

router.get('/index_list/2/data/1', function (req, res, next) {
  //res.send和res.json都行
  res.send({
    code: 0,
    data:
    {
      id: 2,
      type: 'daHongPaoList',
      data: {
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
          { id: 0, image: '../images/home/dahongpao/dahongpao4.jpg' },
          { id: 1, image: '../images/home/dahongpao/dahongpao5.jpg' },
          { id: 2, image: '../images/home/dahongpao/dahongpao6.jpg' },
        ],
        products: [
          {
            id: 0,
            title: '口粮茶 铁盒装200g',
            content: '中火焙制，香气更醇',
            imageUrl: '../images/home/dahongpao/product1.jpeg',
            price: '59',
            path: '',
          },
          {
            id: 1,
            title: '武夷陈茶96g 罐装',
            content: '香气陈韵 口感顺滑',
            imageUrl: '../images/home/dahongpao/product2.jpeg',
            price: '88',
            path: '',
          },
          {
            id: 2,
            title: '远致肉桂96g 盒装',
            content: '果香迷人 口感顺滑',
            imageUrl: '../images/home/dahongpao/product3.jpeg',
            price: '59',
            path: '',
          },
          {
            id: 3,
            title: '花果香肉桂96g 盒装',
            content: '茶师亲制 滋味醇正',
            imageUrl: '../images/home/dahongpao/product4.jpeg',
            price: '99',
            path: '',
          },
        ],
      }
    }
  })
});

router.get('/index_list/3/data/1', function (req, res, next) {
  //res.send和res.json都行
  res.send({
    code: 0,
    data: {
      id: 3,
      type: 'jinJunMeiList',
      data: {
        adImages: {
          image1: '../images/home/jinjunmei/jinjunmei1.jpg',
          image2: '../images/home/jinjunmei/jinjunmei2.jpg',
          image3: '../images/home/jinjunmei/jinjunmei3.jpg',
          image4: '../images/home/jinjunmei/jinjunmei7.jpg',
          image5: '../images/home/jinjunmei/jinjunmei8.jpg',
          image6: '../images/home/jinjunmei/jinjunmei9.jpg',
          image7: '../images/home/jinjunmei/jinjunmei10.jpg',
          image8: '../images/home/jinjunmei/jinjunmei11.jpg',
        },
        jichuImages: [
          { id: 1, image: '../images/home/jinjunmei/jinjunmei4.jpeg' },
          { id: 2, image: '../images/home/jinjunmei/jinjunmei5.jpg' },
          { id: 3, image: '../images/home/jinjunmei/jinjunmei6.jpg' },
        ],
        products: [
          {
            id: 1,
            title: '金骏眉-御品豪茗礼盒 250g',
            content: '滋味醇香 彰显情意',
            imageUrl: '../images/home/jinjunmei/product1.jpeg',
            price: '128',
            path: '',
          },
          {
            id: 2,
            title: '金骏眉-如意小罐装180g',
            content: '经典小罐 罐罐尊享',
            imageUrl: '../images/home/jinjunmei/product2.jpeg',
            price: '158',
            path: '',
          },
          {
            id: 3,
            title: '金骏眉-特级黄芽单罐200g',
            content: '名茶易得 佳茗难寻',
            imageUrl: '../images/home/jinjunmei/product3.jpeg',
            price: '188',
            path: '',
          },
          {
            id: 4,
            title: '金骏眉-以茶为礼 200g',
            content: '复古镂空 古典雅致',
            imageUrl: '../images/home/jinjunmei/product4.jpeg',
            price: '188',
            path: '',
          },
        ],
      }
    }
  })
});

router.get('/index_list/4/data/1', function (req, res, next) {
  //res.send和res.json都行
  res.send({
    code: 0,
    data:
    {
      id: 4,
      type: 'longJingList',
      data: {
        headerImages: {
          background: '../images/home/longjing/longjing1.png',
          person: '../images/home/longjing/person.jpg',
        },
        kouliang: {
          image1: '../images/home/longjing/kouliangcha1.jpg',
          image2: '../images/home/longjing/kouliangcha2.jpg',
          product: '../images/home/longjing/kouliangcha3.jpeg',
        },
        backgroundImages: '../images/home/longjing/background.gif',
        productImages: {
          image1: '../images/home/longjing/product1.jpeg',
          image2: '../images/home/longjing/product2.jpeg',
        },
        dashiImages: '../images/home/longjing/dashi.jpg',
      }
    }
  })
});

router.get('/index_list/5/data/1', function (req, res, next) {
  //res.send和res.json都行
  res.send({
    code: 0,
    data:
    {
      id: 5,
      type: 'puErList',
      data: {
        headerImages: {
          background: '../images/home/puer/puer1.jpg',
          person: '../images/home/puer/person.jpg',
        },
        kouliang: {
          image1: '../images/home/puer/puer2.jpg',
          image2: '../images/home/puer/puer3.jpg',
          product: '../images/home/puer/puer4.jpeg',
        },
        backgroundImages: '../images/home/longjing/background.gif',
        productImages: {
          image1: '../images/home/puer/product1.jpeg',
          image2: '../images/home/puer/product2.jpeg',
        },
        dashiImages: '../images/home/longjing/dashi.jpg',
      }
    }
  })
});

router.get('/index_list/6/data/1', function (req, res, next) {
  //res.send和res.json都行
  res.send({
    code: 0,
    data:
    {
      id: 6,
      type: 'xiaoZhongList',
      data: {
        backgroundImages: {
          img1: '../images/home/xiaozhong/bg.png',
          img2: '../images/home/xiaozhong/bg2.png',
          img3: '../images/home/xiaozhong/bg3.png',
          img4: '../images/home/xiaozhong/bg4.png',
        },
        productImg: {
          img1: '../images/home/xiaozhong/product1.jpeg',
          img2: '../images/home/xiaozhong/product2.jpeg',
          img3: '../images/home/xiaozhong/product3.jpeg',
          img4: '../images/home/xiaozhong/product4.jpg',
          img5: '../images/home/xiaozhong/product5.jpg',
        },
      }
    }
  })
});

module.exports = router;
