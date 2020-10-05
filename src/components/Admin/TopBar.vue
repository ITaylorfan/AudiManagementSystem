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
    </div>
    <div class="userInfo">
      <div class="avater-wrapper">
        <div class="avater">
          <img src="../../assets/images/TS.jpg" alt="" />
        </div>
      </div>
      <div class="name-wrapper">
        <span>ITaylorfan</span>
      </div>
      <div class="arrow-wrapper">
        <!-- <i class="el-icon-caret-bottom"></i> -->
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <i class="el-icon-caret-bottom el-icon--right color"></i>
          </span>
          <div class="marginTop">
            <el-dropdown-menu slot="dropdown" style="top: 50px">
              <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus"
                >狮子头</el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-circle-plus-outline"
                >螺蛳粉</el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-check"
                >蚵仔煎</el-dropdown-item
              >
            </el-dropdown-menu>
          </div>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            inputSearch:""
        }
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
    #input-search{
        border: none;
       
    }
</style>