var express = require('express');
var router = express.Router();
var connection = require('../../db/sql')
var jwt = require('jsonwebtoken');
//引入支付宝配置文件
const AlipayFormData = require('alipay-sdk/lib/form').default;
const alipaySdk = require('../../db/alipay')
//引入axios
const axios = require('axios')





//查询商品数据接口
router.post('/addOrder', function (req, res, next) {
  //token
  let token = req.headers.token
  let tokenObj = jwt.decode(token)
  //前端给后端的数据
  let goodsArr = req.body.arr
  // 生成订单号order_id,规则：时间戳+6位随机数
  function setTimeDateFmt(s) {
    return s < 10 ? '0' + s : s
  }
  function radomNumber() {
    const now = new Date()
    let month = now.getMonth() + 1
    let day = now.getDate()
    let hour = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()
    month = setTimeDateFmt(month)
    day = setTimeDateFmt(day)
    hour = setTimeDateFmt(hour)
    minutes = setTimeDateFmt(minutes)
    seconds = setTimeDateFmt(seconds)
    let orderCode = now.getFullYear().toString() + month.toString() + day + hour + minutes + seconds + (Math.floor(Math.random() * (999999 - 100000)) + 100000).toString()
    return orderCode
  }
  /*
    未支付：1
    待支付：2
    支付成功：3
    支付失败：4
  */

  //商品列表名称
  let goodsName = []
  //订单商品总金额
  let goodsPrice = 0
  //订单商品总数量
  let goodsNum = 0
  //订单号
  let orderId = radomNumber()

  goodsArr.forEach(g => {
    goodsName.push(g.goods_name)
    goodsPrice += g.goods_price * g.goods_num
    goodsNum += parseInt(g.goods_num)
  })

  //查询用户
  connection.query(`select * from user where tel = ${tokenObj.tel}`, function (error, results) {
    //用户id
    let uId = results[0].id
    connection.query(`insert into goods_order (order_id,goods_name,goods_price,goods_num,order_status,uId) values ('${orderId}','${goodsName}','${goodsPrice}','${goodsNum}','1',${uId})`, function (error, results) {
      connection.query(`select * from goods_order where uId = ${uId} and order_id = '${orderId}'`, function (err, result) {
        res.send({
          data: {
            code: 200,
            data: result,
            success: true
          }
        })
      })
    })
  })
})
//查询订单
router.post('/selectOrder', function (req, res, next) {
  //接收前端传递过来的id号
  let orderId = req.body.order_id
  connection.query(`select * from goods_order where order_id = '${orderId}'`, function (error, results) {
    res.send({
      data: {
        code: 200,
        success: true,
        data: results
      }
    })
  })
})
//修改订单状态
router.post('/submitOrder', async function (req, res, next) {
  try {
    //token
    let token = req.headers.token
    let tokenObj = jwt.decode(token)
    //订单号
    let orderId = req.body.orderId
    //购物车选中的商品id
    let shopArr = req.body.shopArr
    //查询用户
    let results = await new Promise((resolve, reject) => {
      connection.query(`select * from user where tel = ${tokenObj.tel}`, function (error, results) {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
    //用户id
    let uId = results[0].id
    let result = await new Promise((resolve, reject) => {
      connection.query(`select * from goods_order where uId = ${uId} and order_id = '${orderId}'`, function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
    //订单的数据库id
    let id = result[0].id
    await new Promise((resolve, reject) => {
      connection.query(`update goods_order set order_status = replace(order_status,'1','2') where id =${id}`, function (er, re) {
        if (er) {
          reject(er);
        } else {
          resolve(re);
        }
      });
    });
    //删除购物车数据
    for (let s of shopArr) {
      await new Promise((resolve, reject) => {
        connection.query(`delete from goods_cart where id = ${s}`, function (e, r) {
          if (e) {
            reject(e);
          } else {
            resolve(r);
          }
        });
      });
    }
    res.json({
      data: {
        code: 200,
        success: true
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Internal Server Error'
    });
  }
});

//发起支付
router.post('/payment', async function (req, res, next) {
  // //订单号
  let orderId = req.body.orderId
  // //商品总价
  let price = req.body.price
  // //购买商品的名称
  let name = req.body.name

  //开始对接支付宝API
  const formData = new AlipayFormData();
  // 调用 setMethod 并传入 get，会返回可以跳转到支付页面的 url
  formData.setMethod('get');
  //支付时信息
  // get method 需要确保 field 都是字符串
  formData.addField('bizContent', {
    outTradeNo: orderId,//订单号
    productCode: 'FAST_INSTANT_TRADE_PAY',//写死的
    totalAmount: price,//总价
    subject: name,//商品名称
    // body: '商品详情',//描述
  });
  //支付成功或者失败跳转的链接
  formData.addField('returnUrl', 'http://localhost:8081/payment');

  try {
    const result = await alipaySdk.exec(
      'alipay.trade.page.pay',
      {},
      { formData: formData },
    );
    // 处理支付宝返回的数据
    res.send({
      data: {
        code: 200,
        success: true,
        msg: '支付中',
        paymentUrl: result
      }
    });
  } catch (error) {
    // 处理错误
    res.send({
      data: {
        code: 500,
        success: false,
        msg: '支付失败',
        error: error.message
      }
    });
  }
});

//支付状态
router.post('/paymentSuccess', async function (req, res, next) {
  //token
  let token = req.headers.token
  let tokenObj = jwt.decode(token)
  //订单号
  let out_trade_no = req.body.out_trade_no
  let trade_no = req.body.trade_no

  console.log(out_trade_no, trade_no);
  //支付宝配置
  const formData = new AlipayFormData();
  // 调用 setMethod 并传入 get，会返回可以跳转到支付页面的 url
  formData.setMethod('get');
  //支付时信息
  // get method 需要确保 field 都是字符串
  formData.addField('bizContent', {
    out_trade_no,
    trade_no
    // body: '商品详情',//描述
  });

  try {
    const result = await alipaySdk.exec(
      'alipay.trade.query',
      {},
      { formData: formData },
    );
    //后端请求支付宝

    axios({
      method: 'GET',
      url: result
    }).then(data => {
      let responseCode = data.data.alipay_trade_query_response
      console.log(responseCode);
      if (responseCode.code == '10000') {
        switch (responseCode.trade_status) {
          case 'WAIT_BUYER_PAY':
            res.send({
              data: {
                code: 0,
                data: {
                  msg: '交易创建，等待买家付款。'
                }
              }
            })
            break;
          case 'TRADE_CLOSED':
            res.send({
              data: {
                code: 1,
                data: {
                  msg: '未付款交易超时关闭，或支付完成后全额退款。'
                }
              }
            })
            break;
          case 'TRADE_SUCCESS':
            //查询用户
            connection.query(`select * from user where tel = ${tokenObj.tel}`, function (error, results) {
              //用户id
              let uId = results[0].id
              connection.query(`select * from goods_order where uId = ${uId} and order_id = '${out_trade_no}'`, function (err, result) {
                //订单的数据库id
                let id = result[0].id
                //修改订单状态2=>3
                connection.query(`update goods_order set order_status = replace(order_status,'2','3') where id =${id}`, function (er, re) {
                  res.send({
                    data: {
                      code: 2,
                      data: {
                        msg: '交易支付成功。'
                      }
                    }
                  })
                })
              })
            })
            break;
          case 'TRADE_FINISHED':
            res.send({
              data: {
                code: 2,
                data: {
                  msg: '交易结束。'
                }
              }
            })
            break;
        }
      } else if (responseCode.code == '40004') {
        res.send({
          data: {
            code: 4,
            msg: '交易不存在'
          }
        })
      }
    })
  } catch (error) {
    // 处理错误
    res.send({
      data: {
        code: 500,
        success: false,
        msg: '支付失败',
        error: error.message
      }
    });
  }
});

module.exports = router;