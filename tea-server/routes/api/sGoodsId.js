var express = require('express');
var router = express.Router();
var connection = require('../../db/sql')



router.get('/goods/id', function (req, res, next) {
  let id = req.query.id

  connection.query('select * from goods_list where id = ' + id + '', function (err, results) {
    if (err) throw err
    res.send({
      code: 0,
      data: results[0]
    })
  })
});


module.exports = router;
