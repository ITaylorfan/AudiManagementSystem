import axios from "axios"
 //管理员登录验证校验     
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

//普通用户登录
export function userLoginCheck(loginInfo) {
  return axios({
      method: 'post',
      url: `api/user/userLoginCheck`,
      data: loginInfo
    })
}

//获取普通用户信息
export function getUserLoginInfo(userInfoId){
  return axios({
    method:"post",
    url:`api/user/userInfo`,
    data:userInfoId
  })
}
//获取普通用户通知信息
export function getUserNotice(userInfoId){
  return axios({
    method:"post",
    url:`api/user/userNotice`,
    data:userInfoId
  })
}

//用户提交的信息
export function userSubmit(submitInfo){
  return axios({
    method:"post",
    url:`api/user/userSubmit`,
    data:submitInfo
  })
}

//后台获取所有已注册普通用户信息
export function getAllUserInfo(){
  return axios({
    method:"get",
    url:`api/user/getAllUserInfo`,
    
  })
}

//后台获取所有普通用户预约的信息
export function getAllUserBookingInfo(){
  return axios({
    method:"get",
    url:`api/user/getAllUserBookingInfo`,
    
  })
}

//后台获取销售信息
export function getAllSellInfo(){
  return axios({
    method:"get",
    url:`api/user/getAllSellInfo`,

  })
}

export function saveCustomerInfo(customerInfo){
  return axios({
    method:"post",
    url:`api/user/saveCustomerInfo`,
    data:customerInfo
  })
}
//删除客户信息
export function deleteCustomerInfo(customerId){
  return axios({
    method:"post",
    url:`api/user/deleteCustomerInfo`,
    data:customerId
  })
}

//添加客户信息
export function addCustomerInfo(customerInfo){
  return axios({
    method:"post",
    url:`api/user/addCustomerInfo`,
    data:customerInfo
  })
}


//保存销售信息
export function saveSellInfo(sellInfo){
  return axios({
    method:"post",
    url:`api/user/saveSellInfo`,
    data:sellInfo
  })
}

//删除销售信息
export function deleteSellInfo(orderId){
  return axios({
    method:"post",
    url:`api/user/deleteSellInfo`,
    data:orderId
  })
}

//添加销售信息
export function addSellInfo(addData){
  return axios({
    method:"post",
    url:`api/user/addSellInfo`,
    data:addData
  })
}

//更改已注册用户信息
export function updateRegisterUserInfo(updateData){
  return axios({
    method:"post",
    url:`api/user/updateRegisterUserInfo`,
    data:updateData
  })
}

export function deleteUserInfo(userInfoId){
  return axios({
    method:"post",
    url:`api/user/deleteUserInfo`,
    data:userInfoId
  })
}
export function addUserInfo(addData){
  return axios({
    method:"post",
    url:`api/user/addUserInfo`,
    data:addData
  })
}


//通过一条用户预约信息
export function pastUserSubmit(id){
  return axios({
    method:"post",
    url:`api/user/pastUserSubmit`,
    data:id
  })
}

//拒绝通过一条用户预约信息
export function noPastUserSubmit(info){
  return axios({
    method:"post",
    url:`api/user/noPastUserSubmit`,
    data:info
  })
}

//删除一条用户预约信息
export function deleteUserSubmit(id){
  return axios({
    method:"post",
    url:`api/user/deleteUserSubmit`,
    data:id
  })
}

//修改管理员信息
export function updateAdministratorInfo(info){
  //console.log(info)
  return axios({
    method:"post",
    url:`api/user/updateAdministratorInfo`,
    data:info
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

//blob对象转base64
export function blobToDataURI(blob, callback) {
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = function (e) {
        callback(e.target.result);
    }
 }

 //url转blob
export function urlToBlob(the_url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open("get", the_url, true);
  xhr.responseType = "blob";
  xhr.onload = function() {
      if (this.status == 200) {
          if (callback) {
              callback(this.response);
          }
      }
  };
  xhr.send();
}

//url转base64
export function getBase64(url, callback) {
  var Img = new Image(),
    dataURL = '';
  Img.src = url + '?v=' + Math.random();
  Img.setAttribute('crossOrigin', 'Anonymous');
  Img.onload = function() {
    var canvas = document.createElement('canvas'),
      width = Img.width,
      height = Img.height;
    canvas.width = width;
    canvas.height = height;
    canvas.getContext('2d').drawImage(Img, 0, 0, width, height);
    dataURL = canvas.toDataURL('image/jpeg');
    return callback ? callback(dataURL) : null;
  };
}

//blob转base64
export function blobToDataURL(blob, callback) {
  let a = new FileReader();
  a.onload = function (e) { callback(e.target.result); }
  a.readAsDataURL(blob);
}


