

//验证数据库中的用户相关内容
const User = {
  //查询用户手机号
  queryUserTel(option) {
    return 'select * from user where tel = ' + option.userTel + ''
  },
  queryUserPwd(option) {
    return 'select * from user where (tel = ' + option.userTel + ') and pwd = ' + option.userPwd + ''

  },
  //新增用户
  inserData(option) {
    let userTel = option.userTel
    let userPwd = option.userPwd || '666666'

    //引入token
    var jwt = require('jsonwebtoken');
    //用户信息
    let payload = {
      tel: userTel
    }
    //口令
    let secret = 'luowangji'
    //生成token
    let token = jwt.sign(payload, secret)


    return 'insert into user (tel,pwd,imgUrl,nickName,token) values ("' + userTel + '","' + userPwd + '","/images/user.jpg","用户","' + token + '")'
  }
}

exports = module.exports = User