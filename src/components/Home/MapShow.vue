<template>
  <div class="map-wrapper" id="container"></div>
</template>

<script>
export default {
  methods: {
    setMap() {
      var map = new BMapGL.Map("container");
      // 创建地图实例
      var point = new BMapGL.Point(113.945, 30.94);
      // 创建点坐标
      map.centerAndZoom(point, 14);
      // 初始化地图，设置中心点坐标和地图级别
      //map.setCurrentCity("武汉");          // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

      //添加地图类型控件
      map.addControl(
        new BMapGL.MapTypeControl({
          mapTypes: [
            //BMAP_NORMAL_MAP,
            //BMAP_HYBRID_MAP
          ],
        })
      );

      var navi3DCtrl = new BMapGL.NavigationControl3D();  // 添加3D控件
      map.addControl(navi3DCtrl);
   
    },
  },
  mounted() {
    setTimeout(() => {
      this.setMap();
    }, 500);
  },
};
</script>
<style lang="scss" scoped>
</style>