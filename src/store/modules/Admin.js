const admin={
    state:{
        //是否点击用户中心用户中心
        isUserInfoCenter:false,
        //是否登录
        isLogin:true,
        //存放用户登录信息
        administratorsInfo:{}
    },
    mutations:{
        "SET_IS_USER_INFO_CENTER"(state,isUserInfoCenter){
            state.isUserInfoCenter=isUserInfoCenter
        },
        "SET_IS_LOGIN"(state,isLogin){
            state.isLogin=isLogin
        },
        "SET_ADMINISTRATORS_INFO"(state,administratorsInfo){
            state.administratorsInfo=administratorsInfo
        }
    }
}

export default admin