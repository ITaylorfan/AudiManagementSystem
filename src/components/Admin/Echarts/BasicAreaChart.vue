<template>
        <!-- 第一行的统计图 -->
        <div class="basic-area-chart" id="basic-area-chart"></div>
</template>

<script>
export default {
     methods: {
    drawchart() {
      let myChart = this.$echarts.init(document.getElementById("basic-area-chart"));
      var option = {
        title: {
        text: '每月销售总量'
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        xAxis: {
          type: "category",
          data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月","八月","九月","十月"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [20, 92, 90, 34, 12, 13, 20,30,15,55],
            type: "line",
            smooth: true,
          },
        ],
      };
      myChart.setOption(option);
    },

  },
  mounted() {
      //调用画图方法
      this.drawchart()
  },
}
</script>

<style lang="scss" scoped>
     .basic-area-chart{
      width: 50%;
      height: 45%;
      position: absolute;
      padding-left: 10px;
      padding-top: 10px;
      right: 150px;
  }
</style>