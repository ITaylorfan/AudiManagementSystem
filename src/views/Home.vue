<template>
  <div class="home-wrapper">
    <!-- 顶部栏 -->
    <div class="top-bar">
      <div class="left">
        <a href="/"><img src="../assets/images/一汽大众logo.png" /></a>
      </div>
      <div class="right">
        <a href="/"><img src="../assets/images/奥迪logo黑色.png" /></a>
      </div>
    </div>
    <!-- 内容展示区 -->
    <div class="content-wrapper">
      <!-- 大图片 -->
      <div class="banner-wrapper" id="banner">
        <div class="bottom-arrow">
          <i class="el-icon-arrow-down"></i>
        </div>
      </div>

      <!-- 车型轮播图 -->
      <div class="scroll-wrapper">
      
      </div>

      <!-- 预约试驾 保养 报修 -->
      <div class="function-wrapper">
          <div class="booking">
            <div class="title-wrapper">
              <span>预约试驾</span>
            </div>
            <div class="button-wrapper">
                <span>即刻预约</span>
            </div>
          </div>
          <div class="booking maintain">
               <div class="title-wrapper">
              <span>预约保养</span>
            </div>
            <div class="button-wrapper">
                <span>即刻预约</span>
            </div>

          </div>
          <div class="booking repair">
               <div class="title-wrapper">
              <span>上报维修</span>
            </div>
            <div class="button-wrapper">
                <span>即刻上报</span>
            </div>
          </div>
      </div>

      <div class="etron-wrapper">
        <!-- 阴影蒙版 -->
        <div class="cover"></div>

        <div class="title-wrapper">
          <div class="main-title">
          <span>充电无忧·绿动未来</span>
          </div>
          <br>
          <div class="second-title">
          <span>全国充电桩网点查询</span>
          </div>
        </div>

        <div class="button-wrapper">
          <span>立即查询</span>
        </div>
      </div>

      <!-- 21 A8L -->
      <div class="A8L-wrapper">
        <div class="image-box">

        </div>
        <div class="content-wrapper">
          <div class="main-title">
            <span>奥迪A8L 21年型<br>驾驭明天的智慧</span>
          </div>
          <div class="list-title">
            <ul>
              <li>· 全系升级MIB3+Asterix平台</li>
              <li>· 虚拟驾驶舱再进一步</li>
              <li>· 新增智能自动泊车系统</li>
              <li>· 智慧辅助再拓一境</li>
              <li>· 座椅和B&O音响不断精进</li>
              <li>· 驾乘体验再上一层</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Q2L-etron -->
      <div class="Q2L-etron-wrapper">
        <!-- 阴影蒙版 -->
        <div class="cover"></div>
        <div class="title-wrapper">
        <div class="main-title">奥迪随e享</div>
        <div class="second-title">为您带来电动出行的潮酷新选择</div>
        <div class="third-title">全新奥迪Q2L e-tron</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  methods: {
    //动态设置主页图片高度
    setBannerHeight() {
      let banner = document.getElementById("banner");
      let innerHeight = window.innerHeight;
      banner.style.cssText = `flex:0 0 ${innerHeight - 50}px`;
      //console.log(banner,innerHeight)
    },
  },
  mounted() {
    //动态设置主页图片高度
    this.setBannerHeight();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/global";
.home-wrapper {
  width: 100%;
  height: auto;
  //background-color: rgb(218, 198, 21);
  display: flex;
  @include columnTopLeft;

  .top-bar {
    width: 100%;
    background-color: rgb(255, 255, 255);
    position: relative;
    top: 0;
    left: 0;
    flex: 0 0 50px;

    .left {
      left: 20px;
      position: absolute;
      width: 120px;
      height: 30px;
      // background-color: antiquewhite;
      top: 5px;
      img {
        width: 120px;
        height: 30px;
      }
    }
    .right {
      right: 20px;
      position: absolute;
      width: 100px;
      height: 100px;
      top: -25px;

      img {
        width: 100px;
        height: 100px;
      }
    }
  }
  .content-wrapper {
    flex: 1;
    width: 100%;
    @include columnTopLeft;
    .banner-wrapper {
      width: 100%;
      flex: 0 0 681px;
      background-image: url("../assets/images/RSBBanner.jpg");
      background-size: cover;
      @include columnBottom;
      .bottom-arrow {
        width: 50px;
        height: 50px;
        margin-bottom: 10px;
        border-radius: 50%;
        background-color: rgba(112, 112, 112, 0.603);
        font-size: 40px;
        text-align: center;
        color: white;
        @include columnCenter;
        cursor: pointer;
        display: none;
      }
      &:hover .bottom-arrow {
        display: block;
      }
    }

    // 小轮播图
    .scroll-wrapper {
      flex: 0 0 250px;
      width: 100%;
      background-color: gray;
      opacity: 0.5;
    }

    .function-wrapper{
      overflow: hidden;
      box-sizing: border-box;
      flex: 0 0 550px;
      width: 100%;
     //background-color: greenyellow;
      // opacity: 0.6;
      @include left;
      .booking{
        flex: 1;
        background-color: hotpink;
        height: 550px;
        margin-right: 5px;
        background-image: url("../assets/images/预约试驾.jpg");
        background-size: cover;
        background-position: -170px 0;
        @include columnLeft;

        &.maintain{
          background-image: url("../assets/images/王一博去LOGO文字.jpg");
           background-position: 0 0;
        }
        &.repair{
            background-image: url("../assets/images/Q5.jpg");
           background-position: -280px 0;
          margin-right: 0;
        }

        .title-wrapper{
          flex: 1;
          width: 100%;
          margin-left: 30px;
          margin-top: 30px;
          span{
            color: white;
            font-size: 30px;
            font-weight: bold;
          }
        }
        .button-wrapper{
          flex: 0 0 50px;
          width: 200px;
          margin-left: 30px;
          margin-bottom: 30px;
          //background-color: white;
          border:1px solid white;
          @include center;
          cursor: pointer;
          span{
            color: white;
            font-size: 16px;
          }
          &:hover{
            opacity: 0.5;
          }
        }
      }
    } 
    //function-wrapper 结束
    .etron-wrapper{
      flex: 0 0 600px;
      width: 100%;
      margin-top: 80px;
      background-image: url("../assets/images/kv_定稿_1920x1920.jpg");
      background-size: cover;
      //background-size: contain;
      background-repeat: no-repeat;
      background-position: 0 -500px;
      @include columnTopLeft;
      //阴影蒙版
      .cover{
        width: 100%;
        height: 600px;
        position: absolute;
        left: 0;
        background-image: linear-gradient(to bottom ,rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0),rgba(0, 0, 0, 0.8));
        z-index: 1;
      }
      // 媒体查询
      @media screen and (min-width: 1580px){
          background-position: 0 -700px;
      }
      @media screen and (min-width: 1255px) and (max-width: 1580px){
          background-position: 0 -500px;
      }
      @media screen and (min-width: 1200px) and (max-width: 1255px){
          background-position: 0 -300px;
      }
      @media screen and (min-width: 992px) and (max-width: 1200px) {
          background-position: 0 -400px;
      }
      @media screen and (min-width: 768px) and (max-width: 992px) {
          background-position: 0 -300px;
      }
      @media screen and (max-width: 768px) {
          background-position: 0 0;
      }
      .title-wrapper{
        flex: 0 0 60px;
        //background-color: rgb(247, 247, 184);
        margin-left: 60px;
        margin-top: 40px;
        width: 400px;
        z-index: 10;
        //@include columnTopLeft;
        .main-title{
          color: white;
          font-size: 35px;
          font-weight: bold;
        }
        .second-title{
          color: white;
          font-size: 24px;
          font-weight: bold;       
        }
      }
      .button-wrapper{
        z-index: 10;
        flex: 0 0 60px;
        width: 250px;
        background-color: white;
        margin-left: 60px;
        margin-top:340px;
        @include center;
        //border:1px solid white;
        cursor: pointer;
        font-size: 20px;
        &:hover{
          background-color: #B3B3B3;
        }
      }
      
    }
    //etron-wrapper 结束

    .A8L-wrapper{
      flex: 0 0 500px;
      width: 100%;
      margin-top: 20px;
      //background-color: rgb(255, 38, 0);
      @include left;
      .image-box{
        flex: 1;
        height: 500px;
        background-image: url("../assets/images/a8l内饰新图.jpg");
        background-size: cover;
      }
      .content-wrapper{
        flex: 0 0 430px;
        height: 500px;
        background-color: rgb(0, 0, 0);
        @include columnTopLeft;
        padding-left: 70px;
        .main-title{
          flex: 0 0 30px;
          margin-top: 30px;
          color: white;
          font-size: 35px;
          font-weight: bold;
        }
        .list-title{
          flex: 1;
          color: white;
          margin-top: 10px;
          ul{
            padding-left: 0;
            li{
             margin-bottom: 20px;
            }
          }
        }
      }
    }
    //A8L-wrappe结束

    .Q2L-etron-wrapper{
      flex: 0 0 500px;
      width: 100%;
      margin-top: 80px;
      background-image: url("../assets/images/e-tron.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 0 -150px;
      @include columnTopRight;
          //阴影蒙版
      .cover{
        width: 100%;
        height: 500px;
        position: absolute;
        left: 0;
        background-image: linear-gradient(to bottom ,rgba(0, 0, 0, 0.6), rgba(255, 255, 255, 0) ,rgba(0, 0, 0, 0.6));
        z-index: 1;
      }

      @media screen and (min-width: 992px) and (max-width: 1200px){
          background-position: 0 -20px;
      }
      @media screen and (max-width: 992px){
          background-position: 0 0;
      }
      .title-wrapper{
        
        flex: 0 0 60px;
        //background-color: rgb(247, 247, 184);
        margin-left: 60px;
        margin-top: 40px;
        width: 400px;
        z-index: 10;
        .main-title{  
          color: white;
          font-size: 35px;
          font-weight: bold;
        }
        .second-title{
          color: white;
          font-size: 24px;
          font-weight: bold;       
        }
        .third-title{
          color: white;
          font-size: 20px;
          margin-top: 20px;
        }
      }
    }

  }
}
</style>