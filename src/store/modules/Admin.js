const admin={
    state:{
        //是否点击用户中心用户中心
        isUserInfoCenter:false
    },
    mutations:{
        "SET_IS_USER_INFO_CENTER"(state,isUserInfoCenter){
            state.isUserInfoCenter=isUserInfoCenter
          }
    }
}

export default admin