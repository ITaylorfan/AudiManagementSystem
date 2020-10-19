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
        <div class="title">
          车型一览
        </div>
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in 6" :key="item">
            <div class="image-wrapper">
              <div class="image-title">
                <span>Audi A3</span>
              </div>
              <div class="image-box">
              <img src="../assets/images/A3.jpg" alt="">
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
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
          <br />
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
        <div class="image-box"></div>
        <div class="content-wrapper">
          <div class="main-title">
            <span>奥迪A8L 21年型<br />驾驭明天的智慧</span>
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

      <!-- 延长保修 -->
      <div class="repair-server">
        <div class="title-wrapper">
          <div class="main-title">
            <span>延续如初 再多一程</span>
          </div>
          <div class="second-title">
            <span>100%奥迪原厂品质保障</span>
          </div>
        </div>
      </div>

      <!-- 奥迪官方账号 -->
      <div class="Audi-account">
        <div class="title-wrapper">
          <span>奥迪官方账号</span>
        </div>
        <div class="content-wrapper">
          <div class="list-wrapper">
            <a href="https://weibo.com/login.php">
              <div class="image-wrapper">
                <img src="../assets/images/奥迪微博.jpg" alt="官方微博" />
              </div>
              <div class="title-wrapper">
                <span>奥迪官方微博 <i class="el-icon-arrow-right"></i></span>
              </div>
            </a>
          </div>
          <div class="list-wrapper">
            <a
              href="https://www.audi.cn/cn/web/zh/audi_brand/news_experience/wechat_recommend.html"
            >
              <div class="image-wrapper">
                <img src="../assets/images/奥迪微信.jpg" alt="官方微信" />
              </div>
              <div class="title-wrapper">
                <span>奥迪官方微信 <i class="el-icon-arrow-right"></i></span>
              </div>
            </a>
          </div>
          <div class="list-wrapper">
            <a href="https://www.zhihu.com/org/ao-di-66-50">
              <div class="image-wrapper">
                <img src="../assets/images/奥迪知乎.jpg" alt="官方知乎" />
              </div>
              <div class="title-wrapper">
                <span>奥迪官方知乎 <i class="el-icon-arrow-right"></i></span>
              </div>
            </a>
          </div>
          <div class="list-wrapper">
            <a
              href="https://www.iesdouyin.com/share/user/78114859257?u_code=17kichgbj&sec_uid=MS4wLjABAAAAnHJLePsjhRKeDVl_ejXgVDjWXvIfB_zN2Wk_Yy7YTGw&app=aweme&utm_campaign=client_share&utm_medium=ios&tt_from=copy&utm_source=copy"
            >
              <div class="image-wrapper">
                <img src="../assets/images/奥迪抖音.jpg" alt="官方抖音" />
              </div>
              <div class="title-wrapper">
                <span>奥迪官方抖音 <i class="el-icon-arrow-right"></i></span>
              </div>
            </a>
          </div>
          <div class="list-wrapper">
            <a
              href="https://www.xiaohongshu.com/user/profile/5a1933fddb2e60610ccd3e70?xhsshare=CopyLink&appuid=5f3b8d870000000001003ac0&apptime=1597738427"
            >
              <div class="image-wrapper">
                <img src="../assets/images/奥迪小红书.jpg" alt="官方小红书" />
              </div>
              <div class="title-wrapper">
                <span>奥迪官方小红书 <i class="el-icon-arrow-right"></i></span>
              </div>
            </a>
          </div>
          <div class="list-wrapper">
            <a
              href="https://space.bilibili.com/194087395?from=search&seid=18063015535242217187"
            >
              <div class="image-wrapper">
                <img
                  src="../assets/images/奥迪bilibili.jpg"
                  alt="官方bilibili"
                />
              </div>
              <div class="title-wrapper">
                <span
                  >奥迪官方bilibili <i class="el-icon-arrow-right"></i
                ></span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- 尾部 -->
      <footer>
        <div class="text-content">
          <div class="text">
            <span>订阅奥迪新闻专递</span>
            <span>法律声明</span>
            <span>奥迪全球</span>
            <span>一汽-大众</span>
            <span>English Version</span>
            <span>鄂ICP备090XXXXX号</span>
            <span>鄂公网安备 22XXXX0X000241号</span>
          </div>
          <div class="text-icon">
            <i class="el-icon-share"></i>
            <i class="el-icon-s-help"></i>
            <i class="el-icon-chat-dot-round"></i>
          </div>
        </div>

        <div class="rights">
          <div class="rights-text-content">
            <span>© 2020 一汽-大众汽车有限公司 版权所有</span>
          </div>
        </div>
      </footer>
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
      margin-top: 40px;
      flex: 0 0 250px;
      width: 100%;
      //background-color: gray;
      opacity: 1;
      .title{
        color: black;
        font-size: 14px;
        margin-left: 30px;
        //font-weight: bold;
      }
      .image-wrapper{
        @include columnTopLeft;
        .image-title{
          flex:  0 0 30px;
          width: 200px;
          @include left;
          padding-left: 20px;
          color: white;
          //background-color: white;
        }
        .image-box{
          flex: 1;
          img{
          width: 100%;
          height: 170px;
        }
        }
      
      }
      .el-carousel__item h3 {
        //color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
      }

      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }

      .el-carousel__item:nth-child(2n + 1) {
        //background-color: #d3dce6;
         background-color: #99a9bf;
      }
    }
    //主页功能区块
    .function-wrapper {
      overflow: hidden;
      box-sizing: border-box;
      flex: 0 0 550px;
      width: 100%;
      margin-top: 20px;
      //background-color: greenyellow;
      // opacity: 0.6;
      @include left;
      .booking {
        flex: 1;
        background-color: rgb(201, 201, 201);
        height: 550px;
        margin-right: 5px;
        background-image: url("../assets/images/预约试驾.jpg");
        background-size: cover;
        background-position: -170px 0;
        @include columnLeft;

        &.maintain {
          background-image: url("../assets/images/王一博去LOGO文字.jpg");
          background-position: 0 0;
        }
        &.repair {
          background-image: url("../assets/images/Q5.jpg");
          background-position: -280px 0;
          margin-right: 0;
        }

        .title-wrapper {
          flex: 1;
          width: 100%;
          margin-left: 30px;
          margin-top: 30px;
          span {
            color: white;
            font-size: 30px;
            font-weight: bold;
          }
        }
        .button-wrapper {
          flex: 0 0 50px;
          width: 200px;
          margin-left: 30px;
          margin-bottom: 30px;
          //background-color: white;
          border: 1px solid white;
          @include center;
          cursor: pointer;
          span {
            color: white;
            font-size: 16px;
          }
          &:hover {
            opacity: 0.5;
          }
        }
      }
    }

    //function-wrapper 结束
    .etron-wrapper {
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
      .cover {
        width: 100%;
        height: 600px;
        position: absolute;
        left: 0;
        background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.8),
          rgba(255, 255, 255, 0),
          rgba(0, 0, 0, 0.8)
        );
        z-index: 1;
      }
      // 媒体查询
      @media screen and (min-width: 1580px) {
        background-position: 0 -700px;
      }
      @media screen and (min-width: 1255px) and (max-width: 1580px) {
        background-position: 0 -500px;
      }
      @media screen and (min-width: 1200px) and (max-width: 1255px) {
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
      .title-wrapper {
        flex: 0 0 60px;
        //background-color: rgb(247, 247, 184);
        margin-left: 60px;
        margin-top: 40px;
        width: 400px;
        z-index: 10;
        //@include columnTopLeft;
        .main-title {
          color: white;
          font-size: 35px;
          font-weight: bold;
        }
        .second-title {
          color: white;
          font-size: 24px;
          font-weight: bold;
        }
      }
      .button-wrapper {
        z-index: 10;
        flex: 0 0 60px;
        width: 250px;
        background-color: white;
        margin-left: 60px;
        margin-top: 340px;
        @include center;
        //border:1px solid white;
        cursor: pointer;
        font-size: 20px;
        &:hover {
          background-color: #b3b3b3;
        }
      }
    }
    //etron-wrapper 结束

    .A8L-wrapper {
      flex: 0 0 500px;
      width: 100%;
      margin-top: 20px;
      //background-color: rgb(255, 38, 0);
      @include left;
      .image-box {
        flex: 1;
        height: 500px;
        background-image: url("../assets/images/a8l内饰新图.jpg");
        background-size: cover;
      }
      .content-wrapper {
        flex: 0 0 430px;
        height: 500px;
        background-color: rgb(0, 0, 0);
        @include columnTopLeft;
        padding-left: 70px;
        .main-title {
          flex: 0 0 30px;
          margin-top: 30px;
          color: white;
          font-size: 35px;
          font-weight: bold;
        }
        .list-title {
          flex: 1;
          color: white;
          margin-top: 10px;
          ul {
            padding-left: 0;
            li {
              margin-bottom: 20px;
            }
          }
        }
      }
    }
    //A8L-wrappe结束

    .Q2L-etron-wrapper {
      flex: 0 0 500px;
      width: 100%;
      margin-top: 80px;
      background-image: url("../assets/images/e-tron.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 0 -150px;
      @include columnTopRight;
      //阴影蒙版
      .cover {
        width: 100%;
        height: 500px;
        position: absolute;
        left: 0;
        background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.6),
          rgba(255, 255, 255, 0),
          rgba(0, 0, 0, 0.6)
        );
        z-index: 1;
      }

      @media screen and (min-width: 992px) and (max-width: 1200px) {
        background-position: 0 -20px;
      }
      @media screen and (max-width: 992px) {
        background-position: 0 0;
      }
      .title-wrapper {
        flex: 0 0 60px;
        //background-color: rgb(247, 247, 184);
        margin-left: 60px;
        margin-top: 40px;
        width: 400px;
        z-index: 10;
        .main-title {
          color: white;
          font-size: 35px;
          font-weight: bold;
        }
        .second-title {
          color: white;
          font-size: 24px;
          font-weight: bold;
        }
        .third-title {
          color: white;
          font-size: 20px;
          margin-top: 20px;
        }
      }
    }

    // Q2L-etron-wrapper 结束

    // 延长保修
    .repair-server {
      flex: 0 0 600px;
      width: 100%;
      margin-top: 20px;
      background-image: url("../assets/images/延长保修.jpg");
      background-size: cover;
      @include columnTopRight;
      .title-wrapper {
        flex: 0 0 60px;
        width: 400px;
        margin-left: 60px;
        margin-top: 40px;
        .main-title {
          color: white;
          font-size: 35px;
          font-weight: bold;
        }
        .second-title {
          margin-top: 10px;
          color: white;
          font-size: 22px;
          font-weight: bold;
        }
      }
    }

    // 奥迪官方账号
    .Audi-account {
      flex: 0 0 800px;
      width: 100%;
      box-sizing: border-box;
      margin-top: 20px;
      @include columnTopLeft;
      padding: 0 40px;
      //background-color: aquamarine;
      .title-wrapper {
        flex: 0 0 50px;
        width: 100%;
        span {
          font-size: 35px;
          color: black;
          font-weight: bold;
        }
      }
      .content-wrapper {
        flex: 1;
        width: 100%;
        margin-top: 20px;
        // background-color: blanchedalmond;
        @include top;
        flex-direction: row; //注意这里会继承父级元素的 column方向
        flex-wrap: wrap; //换行
        .list-wrapper {
          flex: 0 0 33%;
          height: 290px;
          margin-right: 5px;
          //width: 100px;
          //background-color: rgb(218, 214, 214);
          @include columnTopLeft;
          a {
            text-decoration: none;
          }
          &:nth-child(3n) {
            margin-right: 0;
          }
          .image-wrapper {
            flex: 1;
            img {
              width: 100%;
              height: 250px;
            }
          }
          .title-wrapper {
            flex: 0 0 40px;
            //background-color: white;
            @include left;
            span {
              color: black;
              font-size: 16px;
              font-weight: normal;
            }
          }
        }
      }
    }

    //尾部
    footer {
      flex: 0 0 150px;
      width: 100%;
      background-color: #4c4c4c;
      @include columnTopLeft;

      .text-content {
        margin-top: 20px;
        flex: 0 0 50px;
        width: 100%;
        //background-color: rgb(218, 171, 171);
        padding: 0 40px;
        box-sizing: border-box;
        @include left;
        .text {
          color: white;
          flex: 1;
          span {
            margin-right: 20px;
          }
        }
        .text-icon {
          flex: 0 0 250px;
          height: 50px;
          //background-color: yellow;
          @include right;
          color: white;
          i {
            font-size: 40px;
            margin-right: 20px;
          }
        }
      }

      .rights {
        flex: 1;
        width: 100%;
        padding: 0 40px;
        //border-top: 1px solid #666666;
        margin-top: 20px;
        box-sizing: border-box;
        .rights-text-content {
          //  padding: 0 40px;
          border-top: 1px solid #666666;
          padding-top: 5px;
          span {
            font-size: 12px;
            color: #999999;
          }
        }
      }
    }
  }
}
</style>