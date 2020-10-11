const admin={
    state:{
        //是否点击用户中心用户中心
        isUserInfoCenter:false,
        //是否登录
        isLogin:false
    },
    mutations:{
        "SET_IS_USER_INFO_CENTER"(state,isUserInfoCenter){
            state.isUserInfoCenter=isUserInfoCenter
        },
        "SET_IS_LOGIN"(state,isLogin){
            state.isLogin=isLogin
        }
    }
}

export default admin