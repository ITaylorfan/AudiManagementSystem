<template>
  <div class="home-content-wrapper">
     <!-- 饼状图 -->
    <pie-chart></pie-chart>
    <!-- 折现图 -->
    <basic-area-chart></basic-area-chart>
    
    <!-- 柱状图 -->
    <column-chart></column-chart>
    
  </div>
</template>

<script>
import BasicAreaChart from "../Admin/Echarts/BasicAreaChart"
import PieChart from "../Admin/Echarts/PieChart"
import ColumnChart from "../Admin/Echarts/ColumnChart"
export default {
    components:{
        BasicAreaChart,
        PieChart,
        ColumnChart
    },
  methods: {
 
    

  },
  mounted() {
      
  },
};
</script>

<style lang="scss" scoped>
.home-content-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  
  //background-color: yellow;
    
}
</style>