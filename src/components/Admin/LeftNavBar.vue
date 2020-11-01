<template>
    <div class="nav-wrapper">
        <div class="logo-wrapper">
            <a href="/"><img src="../../assets/images/奥迪.png" alt="">
            <span class="logo-title">奥迪4S店管理系统</span></a>
        </div>
          <el-menu
      default-active="1"
      class="el-menu-vertical-demo clearBorder"
      @open="handleOpen"
      @close="handleClose"
      @select="selectClick"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b" ref="elMenu">
      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>主页</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu> -->
      <el-menu-item index="1">
        <i class="el-icon-s-home"></i>
        <span slot="title">主页</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-s-custom"></i>
        <span slot="title">客户信息</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-coin"></i>
        <span slot="title">销售信息</span>
      </el-menu-item>
          <el-menu-item index="4">
        <i class="el-icon-user-solid"></i>
        <span slot="title">已注册用户管理</span>
      </el-menu-item>
         <el-menu-item index="5">
        <i class="el-icon-user"></i>
        <span slot="title">用户预约信息管理</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-setting"></i>
        <span slot="title">个人中心</span>
      </el-menu-item>
    </el-menu>
    </div>
</template>

<script>
export default {
    methods: {
      //父组件调用这个方法
      AdminClick(index){
        //console.log(index)
        //console.log(this.$refs.elMenu.activeIndex)
        this.$refs.elMenu.activeIndex=index
      },
      //菜单点击触发回调 获取上面的index值
      selectClick(index){
        //调用父组件方法
        this.$emit("selectClick",index)
      },
      //多级菜单 展开收起触发的回调
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },

}
</script>

<style lang="scss" scoped>
    .nav-wrapper{
        width: 100%;
        height: 100%;
        background-color: #545C64;
        
        .clearBorder{
            border:none;
        }
        .logo-wrapper{
            width: 100%;
            height: 60px;
            //border-bottom: 1px solid white;
            background-color: rgb(46, 50, 54);
            //box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
           img{
               width: 80px;
               height: 80px;
               top: -20px;
               position: absolute;
               left: 21px;
           }
           .logo-title{
               color: white;
               display: block;
               top: 40px;
               position: absolute;
               padding-left: 26px;
               font-size: 12px;
           }
        }
    }
</style>