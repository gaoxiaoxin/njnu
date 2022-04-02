<template>
  <div>
    <div class="tooltip">
      <p>
        此处展示的区县分界<br />古苏州地图， 是根据<br />1899年储可宝江苏省<br />舆图制作而成。
      </p>
    </div>
    <div class="map_myChart" ref="EcMap"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import svg from "../../assets/img/map_new.svg";
import axios from "axios";
import config from "./config.js";
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
        // 注册地图
        echarts.registerMap("sicily", { svg: mapSvg });
        this.myChart = echarts.init(this.$refs.EcMap);
        // 绘制图表
        let option = {
          tooltip: {
            formatter: function (params) {
              let node = config.node[params.value[3] - 1];
              let str = `
              <div class="tooltipShow">
                <div class="title">${node.title}</div>
                <div class="content">`;
              for (let i = 0; i < node.verses.length; i++) {
                if (node.verses[i].endsWith("，")) {
                  str += `<p>「${node.verses[i]}</p>`;
                } else {
                  if (node.verses[i].indexOf("，") === -1) {
                    str += `<p>${node.verses[i]}」</p>`;
                  } else {
                    str += `<p>「${node.verses[i]}」</p>`;
                  }
                }
              }
              str += `</div>
              <div class="map_img"> <img src="/map_img/map_${
                node.id + 1
              }.jpg"> </img> </div> 
              </div>`;
              return str;
            },
            backgroundColor: "transparent",
            borderColor: "transparent",
            borderWidth: 0,
            enterable: true,
          },
          geo: {
            map: "sicily",

            layoutCenter: ["50%", "50%"],
            layoutSize: "100%", // 地图的大小
            selectedMode: "single", // 是否支持多个选中
            tooltip: {
              show: true,
            },
          },
          series: [
            {
              type: "effectScatter",
              coordinateSystem: "geo",
              geoIndex: 0,
              symbolSize: function (params) {
                return (params[2] / 100) * 10;
              },
              itemStyle: {
                color: "#3378c5",
              },
              encode: {
                tooltip: 2,
              },
              data: config.data,
            },
            {
              name: "点",
              type: "scatter",
              coordinateSystem: "geo",
              symbol: "pin", //气泡
              symbolSize: function (val) {
                return 30;
              },
              itemStyle: {
                normal: {
                  color: "red", //标志颜色
                },
              },
              label: {
                show: false,
                formatter: function (val) {
                  return val.value[3];
                },
              },
              zlevel: 6,
              data: config.data,
            },
          ],
        };
        this.myChart.setOption(option);
      });
    },
  },
  mounted() {
    this.addChart();
  },
};
</script>

<style scoped lang="less">
.map_myChart {
  width: 100%;
  height: 680px;
  background-image: url(../../assets/img/new_bg1.png),
    url(../../assets/img/new_bg2.png);
  background-repeat: no-repeat;
  background-position: bottom -130px right, left top;
  background-size: 482px 400px;
  ::v-deep div {
    box-shadow: none !important;
    border: none;
  }
  ::v-deep canvas {
    left: -20px !important;
  }
}
::v-deep .tooltipShow {
  width: 300px;
  height: 400px;
  background-image: url(../../assets/img/tooltipbg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border: 1px solid red;
  display: flex;
  border: 1px solid transparent;
  align-items: center;
  flex-direction: column;
  .title {
    font-size: 24px;
    font-weight: 800;
    margin-top: 60px;
  }
  .content {
    p {
      text-align: left;
      text-indent: 0;
      font-size: 16px;
    }
  }
  .map_img {
    width: 200px;
    height: 120px;
    img {
      display: block;
      height: 100%;
      width: 100%;
    }
  }
}
.tooltip {
  background-image: url(../../assets/img/he2.png);
  background-repeat: no-repeat;
  background-size: 100%;
  width: 220px;
  height: 223px;
  float: right;
  transform: translate(-120px, 335px);
  p {
    position: relative;
  }
}
</style>
