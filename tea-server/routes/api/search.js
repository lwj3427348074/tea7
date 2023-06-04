var express = require('express');
var router = express.Router();
var connection = require('../../db/sql')

//查询商品数据接口
router.get('/goods/shopList', function (req, res, next) {

  //前端给后端的数据
  let [searchName, orderName] = Object.keys(req.query)
  let [name, order] = Object.values(req.query)
  console.log(orderName, name, order);
  //   
  connection.query(`select * from goods_list where name like "%${name}%" order by ${orderName} ${order}`, function (err, results) {
    console.log(results);
    res.send({
      code: 0,
      data: results
    })
  })
})

module.exports = router;