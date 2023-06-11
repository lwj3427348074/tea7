var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var connection = require('../../db/sql')

// function getTimeToken(exp) {
//   let getTime = parseInt(new Date().getTime() / 1000)
//   if (getTime - exp > 4320) {
//     return true
//   }
// }

//添加购物车
router.post('/addCart', function (req, res, next) {
  //后端接收前端的数据
  let goodsId = req.body.goodsId
  let token = req.headers.token
  let tokenObj = jwt.decode(token)


  // if (getTimeToken(tokenObj.exp)) {
  //   res.send({
  //     data: {
  //       code: 1000,
  //       success: false,
  //       msg: '登录已过期'
  //     }
  //   })
  //   return
  // }

  //查询用户
  connection.query(`select * from user where tel = ${tokenObj.tel}`, function (error, results) {
    //用户id
    let uId = results[0].id
    //查询商品
    connection.query(`select * from goods_list where id = ${goodsId}`, function (err, result) {
      let goodsName = result[0].name
      let goodsPrice = result[0].price
      let goodsImgUrl = result[0].imgUrl
      //查询当前用户在之前是否添加过本商品
      connection.query(`select * from goods_cart where uId=${uId} and goods_id=${goodsId}`, function (e, r) {
        //用户之前添加过商品到购物车
        if (r.length > 0) {
          res.send({
            data: {
              code: 200,
              success: false,
              msg: '该商品已添加至购物车'
            }
          })
        } else {
          //用户以前没添加过
          connection.query(`insert into goods_cart (uId,goods_id,goods_name,goods_price,goods_num,goods_imgUrl) values ("${uId}","${goodsId}","${goodsName}","${goodsPrice}","1","${goodsImgUrl}")`, function (e, r) {
            res.send({
              data: {
                code: 200,
                success: true,
                msg: '添加成功'
              }
            })
          })
        }
      })
    })
  })
})

//查询购物车
router.post('/selectCart', function (req, res, next) {
  let token = req.headers.token
  let tokenObj = jwt.decode(token)
  //查询用户
  connection.query(`select * from user where tel = ${tokenObj.tel}`, function (error, results) {
    //用户id
    let uId = results[0].id
    //查询购物车
    connection.query(`select * from goods_cart where uId = ${uId}`, function (err, result) {
      res.send({
        data: {
          code: 200,
          success: true,
          data: result
        }
      })
    })

  })
})


//删除购物车数据
router.post('/deleteCart', function (req, res, next) {
  let arrId = req.body.arrId;
  console.log(arrId);

  let promises = [];

  for (let i = 0; i < arrId.length; i++) {
    let promise = new Promise((resolve, reject) => {
      connection.query(`delete from goods_cart where id = ${arrId[i]}`, function (error, results) {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
    promises.push(promise);
  }

  Promise.all(promises)
    .then(() => {
      res.send({
        data: {
          code: 200,
          success: true,
          msg: '删除成功',
        }
      });
    })
    .catch((error) => {
      res.send({
        data: {
          code: 500,
          success: false,
          msg: '删除失败',
          error: error.message
        }
      });
    });
})

router.post('/deleteCart', async function (req, res, next) {
  try {
    const arrId = req.body.arrId;
    console.log(arrId);

    const promises = arrId.map(async (id) => {
      await connection.execute('DELETE FROM goods_cart WHERE id = ?', [id]);
    });
    await Promise.all(promises);

    res.send({
      data: {
        code: 200,
        success: true,
        msg: '删除成功',
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      data: {
        code: 500,
        success: false,
        msg: '服务器内部错误',
      },
    });
  }
});


//删除购物车商品数量
router.post('/updateNum', function (req, res, next) {
  let id = req.body.id
  let changeNum = req.body.num

  connection.query(`select * from goods_cart where id = ${id}`, function (error, results) {
    //原来的数量
    let num = results[0].goods_num
    connection.query(`update goods_cart set goods_num = replace(goods_num,${num},${changeNum}) where id = ${id}`, function (err, result) {
      res.send({
        data: {
          code: 200,
          success: true,
          msg: '修改成功',
        }
      })
    })
  })
})

module.exports = router;