var express = require('express');
var router = express.Router();


//分类的接口接口
router.get('/goods/list', function (req, res, next) {
  res.send({
    code: 0,
    data: [
      //一级
      {
        id: 0,
        name: '推荐',
        data: [
          //二级
          {
            id: 0,
            name: '推荐',
            list: [
              //三级
              { id: 0, name: '铁观音', imgUrl: '/images/fenlei/tuijian/product1.jpeg' },
              { id: 1, name: '金骏眉', imgUrl: '/images/fenlei/tuijian/product2.jpeg' },
              { id: 2, name: '武夷岩茶', imgUrl: '/images/fenlei/tuijian/product3.jpeg' },
              { id: 3, name: '龙井', imgUrl: '/images/fenlei/tuijian/product4.jpeg' },
              { id: 4, name: '云南滇红', imgUrl: '/images/fenlei/tuijian/product5.jpeg' }
            ]
          }
        ]
      },
      {
        id: 1,
        name: '绿茶',
        data: [
          //二级
          {
            id: 0,
            name: '绿茶',
            list: [
              //三级
              { id: 0, name: '龙井', imgUrl: '../images/fenlei/lvcha/product1.jpeg' },
              { id: 1, name: '黄山毛峰', imgUrl: '../images/fenlei/lvcha/product2.jpeg' },
              { id: 2, name: '碧螺春', imgUrl: '../images/fenlei/lvcha/product3.jpeg' },
              { id: 3, name: '雀舌', imgUrl: '../images/fenlei/lvcha/product4.png' },
              { id: 4, name: '太平猴魁', imgUrl: '../images/fenlei/lvcha/product5.jpeg' },
              { id: 5, name: '安吉白茶', imgUrl: '../images/fenlei/lvcha/product6.png' },
              { id: 6, name: '六安瓜片', imgUrl: '../images/fenlei/lvcha/product7.png' }
            ]
          }
        ]
      },
      {
        id: 2,
        name: '乌龙',
        data: [
          //二级
          {
            id: 0,
            name: '乌龙',
            list: [
              //三级
              { id: 0, name: '铁观音', imgUrl: '/images/fenlei/wulong/product1.jpeg' },
              { id: 1, name: '武夷岩茶', imgUrl: '/images/fenlei/wulong/product2.jpeg' },
              { id: 2, name: '漳平水仙', imgUrl: '/images/fenlei/wulong/product3.jpeg' }
            ]
          }
        ]
      },
      {
        id: 3,
        name: '红茶',
        data: [
          //二级
          {
            id: 0,
            name: '红茶',
            list: [
              //三级
              { id: 0, name: '金骏眉', imgUrl: '/images/fenlei/hongcha/product1.jpeg' },
              { id: 1, name: '正山小种', imgUrl: '/images/fenlei/hongcha/product2.jpeg' },
              { id: 2, name: '云南滇红', imgUrl: '/images/fenlei/hongcha/product3.jpeg' },
              { id: 3, name: '祁门红茶', imgUrl: '/images/fenlei/hongcha/product3.jpeg' }
            ]
          }
        ]
      },
      {
        id: 4,
        name: '白茶',
        data: [
          //二级
          {
            id: 0,
            name: '白茶',
            list: [
              //三级
              { id: 0, name: '白牡丹', imgUrl: '../images/fenlei/baicha/product1.jpeg' },
              { id: 1, name: '牡丹王', imgUrl: '../images/fenlei/baicha/product2.jpeg' },
              { id: 2, name: '白毫银针', imgUrl: '../images/fenlei/baicha/product3.jpeg' },
              { id: 3, name: '寿眉', imgUrl: '../images/fenlei/baicha/product3.jpeg' }
            ]
          }
        ]
      },
      {
        id: 5,
        name: '普洱',
        data: [
          //二级
          {
            id: 0,
            name: '普洱',
            list: [
              //三级
              { id: 0, name: '生茶', imgUrl: '/images/fenlei/puer/product1.jpeg' },
              { id: 1, name: '熟茶', imgUrl: '/images/fenlei/puer/product2.jpeg' }
            ]
          }
        ]
      },
      {
        id: 6,
        name: '花茶',
        data: [
          //二级
          {
            id: 0,
            name: '花茶',
            list: [
              //三级
              { id: 0, name: '茉莉花茶', imgUrl: '/images/fenlei/huacha/product1.jpeg' }
            ]
          }
        ]
      },
    ]
  })

})

module.exports = router;