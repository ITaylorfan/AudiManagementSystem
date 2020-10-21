<template>
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
</template>

<style lang="scss" scoped>
@import "../../assets/styles/global";
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
</style>