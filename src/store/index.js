import Vue from 'vue'
import Vuex from 'vuex'
import Admin from "./modules/Admin"
import actions from "./actions"
import getters from "./getters"
Vue.use(Vuex)

export default new Vuex.Store({
  //vuex的基础使用
  // state: {
  //   isUserInfoCenter:false
  // },
  // mutations: {
  //   "SET_IS_USER_INFO_CENTER"(state,isUserInfoCenter){
  //     state.isUserInfoCenter=isUserInfoCenter
  //   }
  // },
  // actions: {
  //   setIsUserInfoCenter({commit},isUserInfoCenter){
  //     commit("SET_IS_USER_INFO_CENTER",isUserInfoCenter)
  //   },
  // getters:{
  //   getIsUserInfoCenter(state){
  //     return state.isUserInfoCenter
  //   }
  // }
  // },

  modules: {
    Admin
  },
  actions,
  getters
})
