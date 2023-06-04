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
    return 'insert into user (tel,pwd,imgUrl,nickName,token) values ("' + userTel + '","' + userPwd + '","/images/user.jpg","用户","1")'
  }
}

exports = module.exports = User