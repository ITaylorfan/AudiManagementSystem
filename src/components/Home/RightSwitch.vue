<template>
  <div class="right-switch-wrapper">
    <div class="content-wrapper">
      <span>登录更精彩...</span>
    </div>
    <div class="arrow-wrapper" @click="drawer=true">
      <i class="el-icon-arrow-left"></i>
    </div>

    <el-drawer
      :visible.sync="drawer"
      :direction="direction"
      :modal="false"
      style=""
    >
     <div class="login-wrapper">
         <home-login-input></home-login-input>
     </div>
    </el-drawer>
  </div>
</template>

<script>
import HomeLoginInput from "../Home/HomeLoginInput";
export default {
    components:{
        HomeLoginInput
    },
    data() {
      return {
        drawer: false,
        direction: 'rtl',
      };
    },
     methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }

};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global";
.right-switch-wrapper {
  position: fixed;
  width: 50px;
  height: 50%;
  right: 0;
  top: 25%;
  background-color: rgb(255, 255, 255);
  z-index: 9000;
  border-radius: 10px 0 0 10px;
  //overflow: hidden;
  cursor: pointer;
  outline: none;
  @include columnTopLeft;
  .content-wrapper {
    flex: 1;
    width: 100%;
    //background-color: blanchedalmond;
    @include center;
    background-image: url("../../assets/images/A3.jpg");
    span {
      color: white;
      font-size: 20px;
      letter-spacing: 5px; //设置字与字的间距
      writing-mode: vertical-lr; //垂直方向，从左向右
    }
  }
  .arrow-wrapper {
    flex: 0 0 50px;
    width: 100%;
    background-color: rgb(221, 221, 221);
    border-radius: 0 0 0 10px;
    @include center;
    i {
      font-size: 30px;
      font-weight: bold;
    }
  }

  .login-wrapper{
      width: 100%;
      height: 100%;
      //background-color: yellow;
  }
}
</style>