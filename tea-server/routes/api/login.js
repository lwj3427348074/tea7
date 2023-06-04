var express = require('express');
var router = express.Router();
var connection = require('../../db/sql')
var userSql = require('../../db/userSql.js')
var QcloudSms = require("qcloudsms_js");


//手机密码登录
router.post('/login', function (req, res, next) {
  console.log(req.body, req.body.userPwd);
  //后端接收前端传过来的值
  let params = {
    userTel: req.body.userTel,
    userPwd: req.body.userPwd
  }
  //查询用户手机号是否存在
  connection.query(userSql.queryUserTel(params), function (err, results) {
    if (err) throw err
    //手机号存在
    if (results.length > 0) {
      connection.query(userSql.queryUserPwd(params), function (error, result) {
        if (error) throw error
        //手机和密码都对
        if (result.length > 0) {
          res.json({
            code: 200,
            data: {
              success: true,
              data: result[0]
            }
          })
        } else {
          //密码错误
          res.json({
            code: 302,
            data: {
              success: false,
              msg: '密码错误'
            }
          })
        }
      })
    } else {
      //不存在
      res.json({
        code: 301,
        data: {
          success: false,
          msg: '手机号不存在'
        }
      })
    }
  })


})

//短信验证码登录
router.post('/code', function (req, res, next) {

  let tel = req.body.userTel
  console.log(tel);
  // 短信应用SDK AppID
  var appid = 1400187558;  // SDK AppID是1400开头

  // 短信应用SDK AppKey
  var appkey = "dc9dc3391896235ddc2325685047edc7";

  // 需要发送短信的手机号码
  var phoneNumbers = [tel];

  // 短信模板ID，需要在短信应用中申请
  var templateId = 285590;  // NOTE: 这里的模板ID`7839`只是一个示例，真实的模板ID需要在短信控制台中申请

  // 签名
  var smsSign = "三人行慕课";  // NOTE: 这里的签名只是示例，请使用真实的已申请的签名, 签名参数使用的是`签名内容`，而不是`签名ID`

  // 实例化QcloudSms
  var qcloudsms = QcloudSms(appid, appkey);

  // 设置请求回调处理, 这里只是演示，用户需要自定义相应处理回调
  function callback(err, ress, resData) {
    if (err) {
      console.log("err: ", err);
    } else {
      console.log("request data: ", ress.req);
      console.log("response data: ", resData);
      res.send({
        code: 200,
        data: {
          success: true,
          data: ress.req.body.params[0]
        }
      })
    }
  }

  var ssender = qcloudsms.SmsSingleSender();
  //这个5678，就是往手机上发送的短信
  // var params = ["5678"];
  var params = [Math.floor(Math.random() * (9999 - 1000)) + 1000];
  ssender.sendWithParam(86, phoneNumbers[0], templateId,
    params, smsSign, "", "", callback);  // 签名参数不能为空串
})

//增加一个用户
router.post('/addUser', function (req, res, next) {
  let params = {
    userTel: req.body.userTel
  }
  //查询用户是否存在
  connection.query(userSql.queryUserTel(params), function (error, results) {
    if (error) throw error
    if (results.length > 0) {
      //用户存在
      res.send({
        code: 200,
        data: {
          success: true,
          msg: '登录成功',
          data: results[0]
        }
      })
    } else {
      //不存在新增一跳数据
      connection.query(userSql.inserData(params), function (error, results) {
        connection.query(userSql.queryUserTel(params), function (err, result) {
          res.send({
            code: 200,
            data: {
              success: true,
              msg: '登录成功',
              data: result[0]
            }
          })
        })
      })
    }
  })
})

//注册
router.post('/register', function (req, res, next) {
  let params = {
    userTel: req.body.userTel,
    userPwd: req.body.userPwd
  }
  //查询用户是否存在
  connection.query(userSql.queryUserTel(params), function (error, results) {
    if (error) throw error
    if (results.length > 0) {
      //用户存在
      res.send({
        code: 200,
        data: {
          success: true,
          msg: '登录成功',
          data: results[0]
        }
      })
    } else {
      //不存在新增一跳数据
      connection.query(userSql.inserData(params), function (error, results) {
        connection.query(userSql.queryUserTel(params), function (err, result) {
          res.send({
            code: 200,
            data: {
              success: true,
              msg: '登录成功',
              data: result[0]
            }
          })
        })
      })
    }
  })
})

//找回密码=>查询用户是否存在
router.post('/selectUser', function (req, res, next) {
  let params = {
    userTel: req.body.userTel,
  }
  //查询用户是否存在
  connection.query(userSql.queryUserTel(params), function (error, results) {
    if (error) throw error
    if (results.length > 0) {
      //用户存在
      res.send({
        code: 200,
        data: {
          success: true,
        }
      })
    } else {
      //不存在
      res.send({
        code: 200,
        data: {
          success: false,
          msg: '用户不存在',
        }
      })
    }
  })
})

//找回密码=>修改密码
router.post('/recovery', function (req, res, next) {
  let params = {
    userTel: req.body.userTel,
    userPwd: req.body.userPwd,
  }
  //查询用户是否存在
  connection.query(userSql.queryUserTel(params), function (error, results) {
    if (error) throw error
    //某一条记录数id
    let id = results[0].id
    let pwd = results[0].pwd

    console.log(`update user set pwd = replace(pwd,"${pwd}","${params.userPwd}" where id =${id}`);
    connection.query(`update user set pwd = replace(pwd,"${pwd}","${params.userPwd}") where id =${id}`, function (err, result) {

      res.send({
        code: 200,
        data: {
          success: true,
          msg: '修改成功'
        }
      })

    })

  })
})



module.exports = router;