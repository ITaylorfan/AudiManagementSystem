const admin={
    state:{
        //是否点击管理员个人中心
        isUserInfoCenter:false,
        //管理员是否登录
        isLogin:false,
        //存放管理员登录信息
        administratorsInfo:{},

        //用户登录
        isUserLogin:false

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
        },
        "SET_IS_USER_LOGIN"(state,isUserLogin){
            state.isUserLogin=isUserLogin
        }
    }
}

export default admin