<template>
    <div class="login-wrapper">
        <div class="top-bar">
            <div class="left">
                <a href="/"><img src="../assets/images/一汽大众logo.png"></a>
            </div>
            <div class="right">
                <a href="/"><img src="../assets/images/奥迪logo黑色.png"></a>
            </div>
        </div>
        <div class="bottom-text">
            <span class="big-text">未来由我 放手一搏</span>
            <br>
            <span class="normal-text">与奥迪英杰汇品牌大使王一博一起，更新未来！</span>
        </div>
        <div class="bottom-button">
            <div class="open-login" @click="openLoginInput">
                <span>点击登录管理系统</span>
            </div>
        </div>
         <transition name="el-fade-in-linear">
        <login-input v-show="isLoginInput" @closeLoginInput="closeLoginInput"></login-input>
         </transition>
    </div>
</template>

<script>
import LoginInput from "../components/LoginInput"
import {Admin} from "../utils/mixin"
export default {
    mixins:[Admin],
    data() {
        return {
            isLoginInput:false
        }
    },
    components:{
        LoginInput
    },
    methods: {
        openLoginInput(){
            //console.log(this.isLogin)
            if(this.isLogin){
                //已经登录就直接跳转
                this.$router.push("Admin")
            }else{
                this.isLoginInput=true
            }
            
        },
        closeLoginInput(){
            this.isLoginInput=false
        }
    },
}
</script>

<style lang="scss" scoped>
    @import "../assets/styles/global";
    .login-wrapper{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-image: url("../assets/images/bg1920x1080.jpg");
        background-size:cover;
        background-repeat: no-repeat;
      
        .top-bar{
            width: 100%;
            height: 50px;
            background-color: rgb(255, 255, 255);
            position: relative;
            top: 0;
            left: 0;
            .left{
                left: 20px;
                position: absolute;
                width: 120px;
                height: 30px;
                // background-color: antiquewhite;
                top: 5px;
                img{
                    width: 120px;
                    height: 30px;                                     
                }
            }
            .right{
                right: 20px;
                position: absolute;
                width: 100px;
                height: 100px;  
                top: -25px;
               
                img{
                    width: 100px;
                    height: 100px;
                }
            }
        }
        .bottom-text{
            left: 50px;
            bottom: 150px;
            position: absolute;
            width: 530px;
            height: 100px;
           // background-color: antiquewhite;
            font-weight: bold;
            line-height: 40px;
            .big-text{
                font-size: 40px;
                color: white;
            }
            .normal-text{
                font-size: 25px;
                color: white;
            }
        }
        .bottom-button{
            width: 400px;
            height: 60px;
            position: absolute;
            bottom: 50px;
            left: 50px;
            //background-color: whitesmoke;
            .open-login{
                width: 250px;
                height: 60px;
                left: 0;
                position: absolute;
                background-color: rgb(255, 255, 255);
                line-height: 60px;
                font-size: 18px;
                text-align: center;
                cursor:pointer;
               
            }
            .open-login:hover{
                background-color: #B3B3B3;
            }
        }

    }
</style>