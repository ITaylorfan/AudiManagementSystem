<template>
  <div class="top-bar-wrapper">
    <div class="left-wrapper">
      <div class="search-bar">
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="inputSearch"
          clearable
          id="input-search"
        >
        </el-input>
      </div>
      <!-- 撑空间 -->
      <div class="blank"></div>
      <!-- 通知logo -->
      <div class="notice" v-popover:popover>
        <i class="el-icon-bell"></i>
        <div class="count">
          <span>{{ count }}</span>
        </div>

        <el-popover placement="right" width="460" trigger="click" ref="popover">
          <el-table
            :data="gridData"
            height="250"
            :span-method="arraySpanMethod"
          >
            <el-table-column
              width="160"
              property="date"
              label="日期"
            ></el-table-column>
            <el-table-column
              width="200"
              property="content"
              label="内容"
            ></el-table-column>

            <el-table-column>
              <template slot="header">
                <el-button size="mini" type="danger">清空</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-popover>
      </div>
    </div>
    <div class="userInfo">
      <div class="avater-wrapper">
        <div class="avater" id="closeImage">
          <!-- <img src="../../assets/images/TS.jpg" alt="" /> -->
          <el-image
            style="width: 40px; height: 40px;border-radius:50%"
            :src="url"
            :preview-src-list="srcList"
            >
          </el-image>
        </div>
      </div>
      <div class="name-wrapper">
        <span>{{dataList.nickname}}</span>
      </div>
      <div class="arrow-wrapper">
        <!-- <i class="el-icon-caret-bottom"></i> -->
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link" id="arrow-bottom">
            <i class="el-icon-caret-bottom el-icon--right color"></i>
          </span>
          <div class="marginTop">
            <!-- 下拉列表 -->
            <el-dropdown-menu slot="dropdown" style="top: 50px">
              <el-dropdown-item icon="el-icon-user" command="a">个人中心</el-dropdown-item>

              <el-dropdown-item icon="el-icon-circle-close" id="exitLogin"  command="b"
                >退出登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </div>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import {Admin} from "../../utils/mixin"
import { administratorsInfo,notice } from "@/api/index.js";
import {saveLoginStatus} from "@/api/localStorage"
export default {
  mixins:[Admin],
  methods: {
      handleCommand(command) {
        //console.log(command)
        switch(command){
          case "a":
            this.$emit("dropdownMenu","4")
            break
          case "b":
            //退出登录
            this.setIsLogin(false)
            saveLoginStatus("isLogin",false)
            this.$router.push("Login")
            //console.log(this.isLogin)
            break
        }
      },
    //去个人用户中心
    goUserInfoCenter(){
     this.setIsUserInfoCenter(true)
     console.log(this.isUserInfoCenter)
    },
    // 合并列用到的函数
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex >= 0) {
        if (columnIndex === 1) {
          return [1, 2];
        } else if (columnIndex === 3) {
          return [0, 0];
        }
      }
    },
  },
  data() {
    return {
      //数据
      dataList:{},
      // 图片预览
      url:"https://pic.downk.cc/item/5f7b19dd160a154a67b5027d.jpg",
        
      srcList: [
        "https://pic.downk.cc/item/5f7b19dd160a154a67b5027d.jpg"
      ],
      //搜索框变量
      inputSearch: "",
      gridData: [
        {
          date: "2016-05-02  20:00:00",
          name: "王小虎",
          content: "上海市普陀区金沙江路 1518 弄啊啊啊啊啊啊阿",
        },
        
      ],
    };
  },
  computed: {
    count() {
      return this.gridData.length;
    },
    //获取vuex中的值
    // isUserInfoCenter(){
    //   return this.$store.getters.getIsUserInfoCenter
    // }
  },

  mounted() {
    //console.log("topbar")
    let data={
      manageId:1
    }
    administratorsInfo(data).then(success=>{
      //console.log(success)
      this.dataList=success.data[0]
      this.url=this.dataList.avatar,
      this.srcList[0]=this.dataList.avatar
      //装到vuex中方便其他地方掉用
      this.setAdministratorsInfo(this.dataList)
      //console.log(this.dataList)
    },error=>{
      console.log(error)
      let data={
        nickname:"error"
      }
      this.dataList=data
    })

    notice().then(success=>{
      //console.log(success)
      this.gridData=success.data
      //调用原型扩展函数进行转换
      //console.log(new Date(this.gridData[0].date).format("yyyy-MM-dd h:m:s"))
      this.gridData.forEach((item,index)=>{
        //console.log(item)
        item.date=new Date(item.date).format("yyyy-MM-dd h:m:s")
      })
      //需要转化时间格式
    },error=>{

    })
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global";
.top-bar-wrapper {
  width: 100%;
  height: 100%;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  @include left;
  .left-wrapper {
    background-color: rgb(46, 50, 54);
    flex: 1;
    height: 100%;
    //background-color: rgb(46, 50, 54);
    @include left;
    .search-bar {
      background-color: white;
      flex: 0 0 30%;
    }
    .blank {
      flex: 1;
    }
    .notice {
      cursor: pointer;
      flex: 0 0 50px;
      height: 100%;
      color: white;
      font-size: 20px;
      @include center;
      border-left: 1px solid white;

      .count {
        position: absolute;
        top: 12px;
        right: 210px;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        @include center;
        span {
          font-size: 10px;
        }
      }
    }
  }
  .userInfo {
    flex: 0 0 200px;
    height: 100%;
    //background-color: yellow;
    background-color: rgb(46, 50, 54);
    @include left;
    // 头像
    .avater-wrapper {
      flex: 0 0 50px;
      height: 100%;
      @include columnCenter;
      padding-left: 10px;
      border-left: 1px solid #ffffff;
      .avater {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: yellowgreen;
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
      }
    }
    //名称
    .name-wrapper {
      flex: 1;
      height: 100%;
      font-size: 14px;
      @include columnLeft;
      padding-left: 10px;
      color: white;
    }
    .arrow-wrapper { 
      flex: 0 0 40px;
      height: 100%;
      color: white;
      @include columnLeft;

      .color {
        color: white;
      }

      //   .marginTop{
      //     margin-top: 10px;
      //   }
    }
  }
}
</style>


<style lang="scss">
// 用于重置elui样式
#input-search {
  border: none;
}
#exitLogin {
  color: red;
}
#closeImage{
  color: white;
}
#arrow-bottom{
  cursor: pointer;
}
</style>