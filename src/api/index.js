import axios from "axios"
 //登录验证校验     
export function loginCheck(loginInfo) {
    return axios({
        method: 'post',
        url: `api/user/loginCheck`,
        data: loginInfo
      })
}

export function register(registerInfo){
  return axios({
    method:"post",
    url:`api/user/register`,
    data:registerInfo
  })
}

//获取通知信息方法
export function notice(){
  return axios({
    method:"get",
    url:`api/user/notice`,
  })
}
//根据管理员ID获取管理员信息
export function administratorsInfo(manageId){
  return axios({
    method:"post",
    url:`api/user/administratorsInfo`,
    data:manageId
  })
}

//获取客户信息
export function getCustomerInfo(){
  return axios({
    method:"get",
    url:`api/user/customerInfo`,
  })
}



//Date对象原型方法扩展
Date.prototype.format = function (fmt) {
    //author: meizz

    var o = {
      "M+": this.getMonth() + 1, //月份

      "d+": this.getDate(), //日

      "h+": this.getHours(), //小时

      "m+": this.getMinutes(), //分

      "s+": this.getSeconds(), //秒

      "q+": Math.floor((this.getMonth() + 3) / 3), //季度

      S: this.getMilliseconds(), //毫秒
    };

    if (/(y+)/.test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        (this.getFullYear() + "").substr(4 - RegExp.$1.length)
      );

    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt))
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length == 1
            ? o[k]
            : ("00" + o[k]).substr(("" + o[k]).length)
        );

    return fmt;
  }; //将data转换为yyyy/MM/dd类型
