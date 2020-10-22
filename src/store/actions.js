const actions={
    setIsUserInfoCenter({commit},isUserInfoCenter){
        return commit("SET_IS_USER_INFO_CENTER",isUserInfoCenter)
    },
    setIsLogin({commit},isLogin){
        return commit("SET_IS_LOGIN",isLogin)
    },
    setAdministratorsInfo({commit},administratorsInfo){
        return commit("SET_ADMINISTRATORS_INFO",administratorsInfo)
    },
    //设置用户是否登录
    setIsUserLogin({commit},isUserLogin){
        return commit("SET_IS_USER_LOGIN",isUserLogin)
    }
}

export default actions