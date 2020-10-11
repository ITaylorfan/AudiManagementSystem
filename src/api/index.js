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