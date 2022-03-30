<template>
  <div class="ch2">
    <div class="ch2-echarts" ref="ch2"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import config from "./config";
export default {
  name: "ch2",
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    addChart() {
      var myChart = echarts.init(this.$refs.ch2); // 初始化
      var option = {
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        series: [
          {
            type: "graph", // 选择是属于那种类型
            tooltip: {}, //提示框
            ribbonType: true,
            layout: "circular", // 布局类型 (环状类型)

            circular: {
              rotateLabel: true, // 是否旋转标签
            },
            symbolSize: 30, // 节点标记大小
            roam: false, // 是否开启鼠标缩放和平移漫游
            focusNodeAdjacency: true, // 焦点节点邻接

            edgeSymbol: ["circle", "arrow"],
            edgeSymbolSize: 4,
            itemStyle: {
              normal: {
                label: {
                  rotate: true,
                  show: true,
                  textStyle: {
                    color: "#333",
                    fontWeight: "bold",
                  },
                },
                color: [
                  "#393f51",
                  "#393f51",
                  "#393f51",
                  "#393f51",
                  "#393f51",
                  "#393f51",
                  "#393f51",
                  "#85d6f7",
                  "#85d6f7",
                  "#85d6f7",
                  "#85d6f7",
                  "#85d6f7",
                  "#85d6f7",
                  "#85d6f7",
                  "#85d6f7",
                  "#85d6f7",
                  "#85d6f7",
                ] /* 内的颜色#393f51，外的颜色#85d6f7 */,
              },
            },

            data: config.data,
            links: config.links,
          },
        ],
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
.ch2 {
  width: 100%;
  height: 600px;
  .ch2-echarts {
    width: 100%;
    height: 600px;
  }
}
</style>
