var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var connection = require('../../db/sql')

//新增收货地址
router.post('/addAddress', function (req, res, next) {
  let token = req.headers.token
  let tokenObj = jwt.decode(token)
  let body = req.body
  //拿到前端给后端传递的数据
  let [name, tel, province, city, county, addressDetail, isDefault, areaCode] = [
    body.name,
    body.tel,
    body.province,
    body.city,
    body.county,
    body.addressDetail,
    body.isDefault,
    body.areaCode,
  ]

  //查询用户
  connection.query(`select * from user where tel = ${tokenObj.tel}`, function (error, results) {
    //用户id
    let uId = results[0].id
    //增加一条收货地址
    if (isDefault != 1) {
      connection.query(`insert into address (uId,name,tel,province,city,county,addressDetail,isDefault,areaCode) values (${uId},"${name}","${tel}","${province}","${city}","${county}","${addressDetail}","${isDefault}","${areaCode}")`, function (err, result) {
        res.send({
          data: {
            code: 200,
            success: true,
            msg: "添加收货地址成功"
          }
        })
      })
    } else {
      //该用户已经有一条默认的收货地址了
      //把所有的地址都变成0，再把该条变成默认地址1
      connection.query(`select * from address where uId = ${uId} and isDefault = ${isDefault}`, function (err, result) {
        if (result.length > 0) {
          let addressId = result[0].id
          connection.query(`update address set isDefault = replace(isDefault,'1','0') where id = ${addressId}`, function (er, re) {
            connection.query(`insert into address (uId,name,tel,province,city,county,addressDetail,isDefault,areaCode) values (${uId},"${name}","${tel}","${province}","${city}","${county}","${addressDetail}","${isDefault}","${areaCode}")`, function (e, r) {
              res.send({
                data: {
                  code: 200,
                  success: true,
                  msg: "添加收货地址成功"
                }
              })
            })
          })
        } else {
          connection.query(`insert into address (uId,name,tel,province,city,county,addressDetail,isDefault,areaCode) values (${uId},"${name}","${tel}","${province}","${city}","${county}","${addressDetail}","${isDefault}","${areaCode}")`, function (err, result) {
            res.send({
              data: {
                code: 200,
                success: true,
                msg: "添加收货地址成功"
              }
            })
          })
        }
      })
    }

  })
})

//查询收货地址
router.post('/selectAddress', function (req, res, next) {
  //token
  let token = req.headers.token
  let tokenObj = jwt.decode(token)
  //查询用户
  connection.query(`select * from user where tel = ${tokenObj.tel}`, function (error, results) {
    //用户id
    let uId = results[0].id
    connection.query(`select * from address where uId = ${uId}`, function (e, r) {
      res.send({
        data: {
          code: 200,
          success: true,
          msg: "查询成功",
          data: r
        }
      })
    })
  })
})

//修改收货地址
router.post('/updateAddress', function (req, res, next) {
  //token
  let token = req.headers.token
  let tokenObj = jwt.decode(token)
  let body = req.body
  //拿到前端给后端传递的数据
  let [id, name, tel, province, city, county, addressDetail, isDefault, areaCode] = [
    body.id,
    body.name,
    body.tel,
    body.province,
    body.city,
    body.county,
    body.addressDetail,
    body.isDefault,
    body.areaCode,
  ]
  //查询用户
  connection.query(`select * from user where tel = ${tokenObj.tel}`, function (error, results) {
    //用户id
    let uId = results[0].id
    //对应查询到0或者1有没有默认收货地址
    connection.query(`select * from address where uId = ${uId} and isDefault = ${isDefault}`, function (err, result) {
      if (result.length > 0) {
        let addressId = result[0].id
        connection.query(`update address isDefault = replace(isDefault,'1','0') where i =${addressId}`, function (ee, rr) {
          let updateSql = `update address set uId = ? ,name = ? , tel = ? , province = ? , city = ? , county = ? , addressDetail = ? , isDefault = ? , areaCode = ? where id = ${addressId}`
          connection.query(updateSql, [uId, name, tel, province, city, county, addressDetail, isDefault, areaCode], function (e, r) {
            res.send({
              data: {
                code: 200,
                success: true,
                msg: "修改成功",
              }
            })
          })
        })
      } else {
        let updateSql = `update address set uId = ? ,name = ? , tel = ? , province = ? , city = ? , county = ? , addressDetail = ? , isDefault = ? , areaCode = ? where id = ${addressId}`
        connection.query(updateSql, [uId, name, tel, province, city, county, addressDetail, isDefault, areaCode], function (e, r) {
          res.send({
            data: {
              code: 200,
              success: true,
              msg: "修改成功",
            }
          })
        })
      }
    })
  })
})

//删除收货地址
router.post('/deleteAddress', function (req, res, next) {
  let id = req.body.id
  console.log(id);

  connection.query(`delete from address where id = ${id}`, function (error, results) {
    res.send({
      data: {
        code: 200,
        success: true,
        msg: "删除成功"
      }
    })
  })

})



module.exports = router;