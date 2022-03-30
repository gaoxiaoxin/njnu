<template>
  <div>
    <div class="map_myChart" ref="EcMap"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import svg from "../../assets/img/map.svg";
import axios from "axios";
export default {
  name: "map_myChart",
  props: {},
  components: {},
  data() {
    return {
      myChart: null,
    };
  },

  methods: {
    addChart() {
      // 初始化实例
      axios(svg).then((res) => {
        let mapSvg = res.data;
        echarts.registerMap("sicily", { svg: mapSvg });
        this.myChart = echarts.init(this.$refs.EcMap);
        // 绘制图表
        let option = {
          tooltip: {
            formatter: function (params) {
              let str = `<div class="map_bg">${params.name} <br/> 排放量： ${params.value}万吨 <br/>减排量：${params.data.value1}万吨</div>`;
              return str;
            },
          },
          geo: [
            {
              map: "sicily",
              roam: true,
              layoutCenter: ["50%", "50%"],
              layoutSize: "100%",
              selectedMode: "single",
              tooltip: {
                show: true,
                confine: true,
                formatter: function (params) {
                  let str = `<div class="map_bg">${params} <br/> 排放量${params}万吨 <br/>减排量：${params}万吨</div>`;
                  console.log(str);
                  return str;
                },
              },
              itemStyle: {
                color: undefined,
              },
              emphasis: {
                label: {
                  show: false,
                },
              },
            },
          ],
        };
        this.myChart.setOption(option);
      });
    },
    toadd() {
      this.addChart();
    },
  },
  mounted() {
    this.toadd();
  },
};
</script>

<style scoped lang="less">
.map_myChart {
  width: 100%;
  height: 500px;
  div {
    width: 500px;
    height: 100px;
    background-image: url(../../assets/img/bamboo.png);
    background-size: 100%;
    border: 1px solid red;
  }
}
.demo {
  width: 300px;
  height: 300px;
  background-image: url(../../assets/img/bamboo.png);
  background-size: 100%;
}
::v-deep .map_bg {
  width: 200px;
  height: 100px;
  background-image: url(../../assets/img/bamboo.png);
  background-size: 100%;
  border: 1px solid red;
}
</style>
