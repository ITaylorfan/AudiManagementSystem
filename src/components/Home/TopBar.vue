<template>
<!-- topBar组件 -->
    <div class="top-bar">
      <div class="left">
        <a href="/"><img src="../../assets/images/一汽大众logo.png" /></a>
      </div>
      <div class="right">
        <a href="/"><img src="../../assets/images/奥迪logo黑色.png" /></a>
      </div>
    </div>
</template>


<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.top-bar {
    width: 100%;
    background-color: rgb(255, 255, 255);
    position: absolute;
    top: 0;
    left: 0;
    height: 50px;

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
</style>