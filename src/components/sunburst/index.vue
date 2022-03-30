<template>
  <div class="index" ref="sunburst"></div>
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
        width: 800,
        height: 1000,
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
  padding: 20px 0;
}
</style>
