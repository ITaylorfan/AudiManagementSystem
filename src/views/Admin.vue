<template>
    <div class="admin-wrapper">
        <!-- 左侧导航栏 -->
        <div class="left-nav-wrapper">
            <left-nav-bar @selectClick="selectClick"></left-nav-bar>
        </div>

        <div class="right-wrapper">
             <!-- 顶部栏 -->
             <div class="top-bar-wrapper">
                <top-bar></top-bar>
             </div>
             <!-- 内容显示区 -->
             <div class="content-wrapper">
                 <!-- 主页显示内容 -->
                 <home-content v-show="select==='1'"></home-content>
                 <!-- 客户页面显示内容 -->
                 <customer-content v-show="select==='2'"></customer-content>
             </div>
        </div>
    </div>
</template>

<script>
import LeftNavBar from "../components/Admin/LeftNavBar"
import TopBar from "../components/Admin/TopBar"
import HomeContent from "../components/Admin/HomeContent"
import CustomerContent from "../components/Admin/CustomerContent"
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
        CustomerContent
    },
    methods: {
        //根据导航栏显示不同内容
        selectClick(index){
            //console.log(index)
            this.select=index
        }
    },
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";
    .admin-wrapper{
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