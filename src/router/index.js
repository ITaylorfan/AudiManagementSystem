import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/Admin"
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
  }

]

const router = new VueRouter({
  routes
})

export default router
