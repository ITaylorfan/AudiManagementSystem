<template>
  <div id="column-chart"></div>
</template>

<script>
export default {
  methods: {
    drawchart() {
      let myChart = this.$echarts.init(document.getElementById("column-chart"));
      var option = {
        title: {
          text: "每月各车型销售情况",
          subtext: "截至2020年10月",
          left: "left",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        legend: {
            orient: 'horizontal',
            right: 10,
          data: [
            "A3",
            "A4",
            "A5",
            "A6",
            "A7",
            "A8",
            "Q3",
            "Q5",
            "Q7",
            "Q8",
          ],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: [
              "一月",
              "二月",
              "三月",
              "四月",
              "五月",
              "六月",
              "七月",
              "八月",
              "九月",
              "十月",
            ],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "A3",
            type: "bar",
            data: [320, 332, 301, 334, 390, 330, 320,555,555,100],
          },
          {
            name: "A4",
            type: "bar",
            stack: "广告",
            data: [120, 132, 101, 134, 90, 230, 210,555,222,120],
          },
          {
            name: "A5",
            type: "bar",
            stack: "广告",
            data: [220, 182, 191, 234, 290, 330, 310,555,222,120],
          },
          {
            name: "A6",
            type: "bar",
            stack: "广告",
            data: [150, 232, 201, 154, 190, 330, 410,555,222,124],
          },
          {
            name: "A7",
            type: "bar",
            data: [862, 1018, 964, 1026, 1679, 1600, 1570,555,222,123],
            markLine: {
              lineStyle: {
                type: "dashed",
              },
              data: [[{ type: "min" }, { type: "max" }]],
            },
          },
          {
            name: "A8",
            type: "bar",
            barWidth: 5,
            stack: "搜索引擎",
            data: [620, 732, 701, 734, 1090, 1130, 1120,555,222,129],
          },
          {
            name: "Q3",
            type: "bar",
            stack: "搜索引擎",
            data: [120, 132, 101, 134, 290, 230, 220,555,222,55],
          },
          {
            name: "Q5",
            type: "bar",
            stack: "搜索引擎",
            data: [60, 72, 71, 74, 190, 130, 110,555,222,33],
          },
          {
            name: "Q7",
            type: "bar",
            stack: "搜索引擎",
            data: [62, 82, 91, 84, 109, 110, 120,555,222,96],
          },
          {
            name: "Q8",
            type: "bar",
            stack: "搜索引擎",
            data: [62, 82, 91, 84, 109, 110, 120,555,222,30],
          },
        ],
      };
      myChart.setOption(option);
    },
  },
  mounted() {
    this.drawchart();
  },
};
</script>

<style lang="scss" scoped>
#column-chart {
  width: 70%;
  height: 45%;
  position: absolute;
  left: 0;
  bottom: 60px;
  padding-left: 10px;
  padding-top: 10px;
}
</style>