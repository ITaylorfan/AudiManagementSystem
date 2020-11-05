<template>
        <!-- 第一行的统计图 -->
        <div class="pie-chart" id="pie-chart"></div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
     methods: {

    drawchart() {
      let myChart = this.$echarts.init(document.getElementById("pie-chart"));
      var option = {
        title: {
        text: '各车型销售总量',
        subtext: '截至2020年10月',
        left: 'center'
    },
     tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['奥迪A3', '奥迪A4', '奥迪A5', '奥迪A6', '奥迪A7','奥迪A8','奥迪Q3','奥迪Q5','奥迪Q7','奥迪Q8']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 335, name: '奥迪A3'},
                {value: 310, name: '奥迪A4'},
                {value: 234, name: '奥迪A5'},
                {value: 135, name: '奥迪A6'},
                {value: 1548, name: '奥迪A7'},
                {value: 1048, name: '奥迪A8'},
                {value: 500, name: '奥迪Q3'},
                {value: 500, name: '奥迪Q5'},
                {value: 500, name: '奥迪Q7'},
                {value: 500, name: '奥迪Q8'},

            ]
        }
    ]
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
     .pie-chart{
      width: 50%;
      height: 45%;
      position: absolute;
      left: 0;
      padding-left: 10px;
      padding-top: 10px;    
  }
</style>