<template>
  <div class="right-switch-wrapper">
    <transition
      name="backInRight"
      appear
      enter-active-class="animate__animated animate__backInRight"
      leave-active-class="animate__animated  animate__backOutRight"
    >
      <div class="out-wrapper" v-if="!drawer">
        <div class="content-wrapper" :class="{ changeBg: isUserLogin }">
          <span v-show="!isUserLogin">登录更精彩...</span>
          <span v-show="isUserLogin">欢迎登录</span>
        </div>

        <div class="arrow-wrapper" @click="drawer = true">
          <i class="el-icon-arrow-left"></i>
        </div>
      </div>
    </transition>

    <el-drawer
      :visible.sync="drawer"
      :direction="direction"
      :modal="false"
      style=""
      :before-close="handleClose"
    >
      <div class="login-wrapper">
        <home-login-input
          ref="loginInput"
          v-if="!isUserLogin"
          @getUserInfoId="getUserInfoId"
        ></home-login-input>

        <div class="user-center" v-else>
          <div class="exitLogin" @click="exitLogin">
            <span>注销</span>
          </div>
          <h2>欢迎您,{{ dataList.name }}</h2>

          <el-collapse v-model="activeName" accordion>
            <el-collapse-item name="1">
              <template slot="title">
                个人中心<i class="header-icon el-icon-user-solid"></i>
              </template>
              <!-- 内容区 -->
              <el-card class="box-card">
                <div class="text item">
                  {{ "姓名：" + dataList.name }}
                </div>
                <div class="text item">
                  {{ "性别：" + dataList.sex }}
                </div>
                <div class="text item">
                  {{ "年龄：" + dataList.age }}
                </div>
                <div class="text item">
                  {{ "生日：" + dataList.birthday }}
                </div>
                <div class="text item">
                  {{ "手机：" + dataList.phone }}
                </div>
              </el-card>
            </el-collapse-item>

            <el-collapse-item title="反馈 Feedback" name="2">
              <template slot="title">
                <!-- 统计个数的小红点 -->
                <el-badge :value="noticeList.length" class="item">
                  我的通知<i class="header-icon el-icon-message-solid"></i>
                </el-badge>
              </template>
              <!-- 内容区 -->
              <div v-if="noticeList.length !== 0">
                <div
                  class="text item"
                  v-for="(item, index) in noticeList"
                  :key="index"
                >
                  {{ index + 1 + ".  " +item.createTime+" "+ item.content}}
                </div>
              </div>
              <div v-else>
                <div class="text item">暂无通知</div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { getUserLoginInfo, getUserNotice } from "@/api/index.js";
import HomeLoginInput from "../Home/HomeLoginInput";
import { Admin } from "../../utils/mixin";
import { getUserLoginStatus, deleteUserLoginStatus } from "@/api/localStorage";
export default {
  mixins: [Admin],
  components: {
    HomeLoginInput,
  },
  data() {
    return {
      dataList: {},
      drawer: false,
      direction: "rtl",
      activeName: "0",
      noticeList: [],
    };
  },
  //   computed: {
  //   getStoreItem () {
  //     return this.isUserLogin
  //   }
  // },
  // watch: {
  //   getStoreItem (v) {
  //     console.log("adada")
  //     console.log(v)
  //   }
  // },
  // watch: {
  //   isUserLogin: function (v) {
  //     console.log(v);
  //     if(v){
  //       console.log(this)
  //     }
  //   },
  // },
  computed: {
    redPoint() {},
  },
  methods: {
    //注销
    exitLogin() {
      setTimeout(() => {
        this.$message({
          message: "注销成功！",
          type: "success",
        });
      }, 1000);
      //归位
      this.setIsUserLogin(false);
      deleteUserLoginStatus("isUserLogin");
      this.drawer = false;

      //加载中动画
      let loadingInstance = this.$Loading.service({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      setTimeout(() => {
        loadingInstance.close();
      }, 1000);
    },

    //根据id获取用户信息
    getUserInfoId(v) {
      //封装
      let data = {
        userInfoId: v,
      };
      getUserLoginInfo(data).then(
        (success) => {
          //console.log(success)
          //取值存值
          if (success) {
            this.dataList = success.data[0];
            //把数据库中的date类型进行转换
            this.dataList.birthday = new Date(this.dataList.birthday).format(
              "yyyy-MM-dd"
            );
            //成功获取到信息后 通知消息
            if (this.isFirstLogin) {
              this.$message({
                message: "欢迎登录！",
                type: "success",
              });
              this.setIsFirstLogin(false);
            }
            //给父组件传值
            let getInfoToParent = this.dataList;
            getInfoToParent["userInfoId"] = v;
            this.$emit("getUserLoginInfo", getInfoToParent);
          }
        },
        (error) => {
          console.log(error);
          if (error) {
            this.$message.error("服务器错误！");
            this.setIsUserLogin(false);
          }
        }
      );
      //获取用户通知信息
      getUserNotice(data).then(
        (success) => {
          //console.log(success);
          this.noticeList = success.data;
          this.noticeList.forEach((item, index) => {
            item.createTime = new Date(item.createTime).format("yyyy-MM-dd");
          });
          this.noticeList.reverse()
        },
        (error) => {
          this.$message.error("获取通知信息错误！");
        }
      );
    },
    handleClose(done) {
      // this.$confirm('确认关闭？')
      //   .then(_ => {
      //     done();
      //   })
      //   .catch(_ => {});
      if (!this.isUserLogin) {
        this.$refs.loginInput.resetForm("ruleForm");
      }

      done();
    },
  },
  mounted() {
    //先从localStorage中取值
    // console.log(getUserLoginStatus("isUserLogin"))
    let LoginStatus = getUserLoginStatus("isUserLogin");
    //如果不为空就可以跳过登录
    if (LoginStatus) {
      //设置登录状态
      this.setIsUserLogin(LoginStatus.isUserLogin);
      //获取用户信息id
      this.getUserInfoId(LoginStatus.userInfoId);
    }
  },
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
  //background-color: rgb(255, 255, 255);
  z-index: 9000;
  border-radius: 10px 0 0 10px;
  //overflow: hidden;
  // cursor: pointer;
  outline: none;
  .out-wrapper {
    width: 50px;
    height: 100%;
    @include columnTopLeft;
    .content-wrapper {
      flex: 1;
      width: 100%;
      //background-color: blanchedalmond;
      @include center;
      cursor: default;
      background-image: url("../../assets/images/A3.jpg");
      span {
        color: white;
        font-size: 20px;
        letter-spacing: 5px; //设置字与字的间距
        writing-mode: vertical-lr; //垂直方向，从左向右
      }
      &.changeBg {
        background-image: url("../../assets/images/RSBBanner.jpg");
      }
    }
    .arrow-wrapper {
      flex: 0 0 50px;
      width: 100%;
      //background-color: rgb(221, 221, 221);
      background-color: white;
      border-radius: 0 0 0 10px;
      border: 1px solid #c7c7c7;
      cursor: pointer;
      @include center;
      i {
        font-size: 30px;
        font-weight: bold;
      }
      &:hover {
        background-color: #d1cdc9;
      }
    }
  }

  .login-wrapper {
    width: 100%;
    height: 100%;
    //background-color: #6666;
    cursor: default;
    .user-center {
      padding-left: 10px;
      .exitLogin {
        position: absolute;
        width: 40px;
        height: 30px;
        top: 17px;
        left: 5px;
        line-height: 30px;
        text-align: center;
        color: red;
        font-size: 14px;
        cursor: pointer;
      }
    }
  }
}
</style>

<style lang="scss">
// 重置elementui 样式
.el-collapse-item__header {
  font-size: 16px;
  .header-icon {
    font-size: 20px;
  }
}
.el-badge__content {
  &.is-fixed {
    top: 11px;
  }
}
</style>