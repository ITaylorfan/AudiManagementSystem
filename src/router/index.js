import Vue from 'vue'
import VueRouter from 'vue-router'
//小坑 这里必须引入vuex，不然下面的getters报错
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/Login"
  },
  {
    path:"/Login",
    name:"Login",
    component:()=>import("../views/Login")
  },
  {
    path:"/Admin",
    name:"Admin",
    component:()=>import("../views/Admin")
  },
  {
    path:"/Register",
    name:"Register",
    component:()=>import("../components/Register")
  },
  {
    path:"*",
    component:()=>import("../components/NotFind")
  }

]

const router = new VueRouter({
  routes
})

//路由拦截
router.beforeEach((to,from,next)=>{
  // console.log("-----------------beforeEach-------------------------")
  // console.log(to,from)
  
  //此处没有挂载到vue实例上，所以this为undefined
  //获取vuex中的变量
  //console.log(router.app.$store.getters.isLogin)
  
  if(to.path!=="/Admin"){
    next()
  }
  else if(router.app.$store.getters.isLogin&&to.path=="/Admin"){
    
    next()
  }else if(!router.app.$store.getters.isLogin&&to.path=="/Admin"){
    
    next({
      path:"/Login"
    })
  }
})



export default router
