<template>
  <div class="sun">
    <div class="sun_text">
      <div class="ps">
        <p>江南天地日倾覆，况说区区万柳溪</p>
        <p>
          这些受过良好教育的知识分子们，就更加直接地面对黍离之悲，接受内心的考验，在风雨飘摇下，所接受的圣人之言成了最无力的图腾，他们身为一介书生，如何探索出路，如何坚守道义，与泥沙俱下或是不与时移，纷繁错杂的道路摆在他们面前。更多时候，如何生存这一问题更是直接困扰着文人一生。
        </p>
        <p>青萍之末，安能苟全？</p>
      </div>
    </div>
    <div class="index" ref="sunburst"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import config from "./index";
export default {
  name: "index",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    addChart() {
      var myChart = echarts.init(this.$refs.sunburst, null, {
        width: 1200,
        height: 1200,
      });
      const colors = ["#FFAE57", "#FF7853", "#EA5151", "#CC3F57", "#9A2555"];
      const bgColor = "transparent";
      const itemStyle = {
        star5: {
          color: colors[0],
        },
        star4: {
          color: colors[1],
        },
        star3: {
          color: colors[2],
        },
        star2: {
          color: colors[3],
        },
      };
      const data = config.data;
      let option = {
        title: {
          text: "",
          subtext: "",
          textStyle: {
            fontSize: 14,
            align: "center",
          },
          subtextStyle: {
            align: "center",
          },
        },
        series: {
          type: "sunburst",
          data: data,
          center: ["50%", "50%"],
          radius: [0, "95%"], // 旭日图的半径
          sort: undefined,
          emphasis: {
            // 高亮状态的配置
            focus: "ancestor", // 聚集所有的祖先节点
          },
          levels: [
            // 多层配置
            {}, // 留给数据下钻点的空白配置
            {
              r0: "15%", // 内半径
              r: "35%", // 外半径
              itemStyle: {
                // 扇形块的样式
                borderWidth: 2,
              },
              label: {
                rotate: "radial", // 表示标签的旋转角, 'radial'表示径向旋转, 'tangential' 表示切向旋转
                align: "center",
              },
            },
            {
              r0: "35%",
              r: "70%",
              label: {
                align: "center",
              },
            },
            {
              r0: "70%",
              r: "72%",
              label: {
                position: "outside",
                padding: 3,
                silent: false,
              },
              itemStyle: {
                borderWidth: 3,
              },
            },
          ],
        },
      };
      myChart.setOption(option);
    },
  },
  mounted() {
    this.addChart();
  },
};
</script>

<style scoped lang="less">
.index {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ::v-deep canvas {
    transform: scale(0.9);
    width: 100% !important;
    height: 100% !important;
  }
}
.sun_text {
  width: 100%;
  height: 550px;
  background-image: url(../../assets/img/42.png);
  background-repeat: no-repeat;
  background-size: 500px 300px;
  background-position: right top;
  display: flex;
  justify-content: center;
  .ps {
    margin-top: 150px;
    width: calc(100vw - 300px);
  }
}
</style>
