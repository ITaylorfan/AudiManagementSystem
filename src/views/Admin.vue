<template>
<!-- 后台管理页面 -->
    <div class="admin-wrapper">
        <!-- 左侧导航栏 -->
        <div class="left-nav-wrapper">
            <left-nav-bar @selectClick="selectClick" ref="leftNavBar"></left-nav-bar>
        </div>

        <div class="right-wrapper">
             <!-- 顶部栏 -->
             <div class="top-bar-wrapper">
                <top-bar @dropdownMenu="dropSelectClick"></top-bar>
             </div>
             <!-- 内容显示区 -->
             <div class="content-wrapper">
                 <!-- 主页显示内容 -->
                 <home-content v-show="select==='1'"></home-content>
                 <!-- 客户页面显示内容 -->
                 <customer-content v-show="select==='2'"></customer-content>
                 <!-- 销售页面 -->
                 <sell-content v-show="select==='3'"></sell-content>
                 <!-- 已注册用户管理 -->
                  <register-user-admin v-show="select==='4'"></register-user-admin>  
                  <!-- 用户预约信息管理 -->
                  <user-booking-info v-show="select==='5'"></user-booking-info>
                 <!-- 个人中心 -->
                 <user-content v-if="select==='6'"></user-content>
             </div>
        </div>
    </div>
</template>

<script>
import LeftNavBar from "../components/Admin/LeftNavBar"
import TopBar from "../components/Admin/TopBar"
import HomeContent from "../components/Admin/HomeContent"
import CustomerContent from "../components/Admin/CustomerContent"
import SellContent from "../components/Admin/SellContent"
import UserContent from "../components/Admin/UserCenter"
import RegisterUserAdmin from "../components/Admin/RegisterUserAdmin"
import UserBookingInfo from "../components/Admin/UserBookingInfo"
export default {
    data() {
        return {
            select:"1"
        }
    },
    components:{
        LeftNavBar,
        TopBar,
        HomeContent,
        CustomerContent,
        SellContent,
        UserContent,
        RegisterUserAdmin,
        UserBookingInfo
    },
    methods: {
        //根据导航栏显示不同内容
        selectClick(index){
            //console.log(index)
            this.select=index
        },
        //下拉菜单的点击
        dropSelectClick(index){
            this.select=index
            //调用子组件中的方法
            this.$refs.leftNavBar.AdminClick(index)
        }
    },
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";
    .admin-wrapper{
        overflow: hidden;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-color: #F0F2F5;
        @include left;
        .left-nav-wrapper{
            flex: 0 0 180px;
            height: 100%;
            z-index: 100;
        }
        .right-wrapper{
            flex:1;
            height: 100%;
            //background-color: yellow;
            @include columnLeft;
            .top-bar-wrapper{
                flex:0 0 60px;
                width: 100%;
            }
            .content-wrapper{
                flex: 1;
                height: 100%;
                width: 100%;
               
            }
        }
    }
</style>