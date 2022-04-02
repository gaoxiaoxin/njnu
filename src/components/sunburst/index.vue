<template>
  <div class="sun">
    <div class="sun_text">
      <div class="ps">
        <p class="serve_title">江南天地日倾覆，况说区区万柳溪。</p>
        <p>
          这些受过良好教育的知识分子们，就更加直接地面对黍离之悲，接受内心的考验，在风雨飘摇下，所接受的圣人之言成了最无力的图腾，他们身为一介书生，如何探索出路，如何坚守道义，与泥沙俱下或是不与时移，纷繁错杂的道路摆在他们面前。更多时候，如何生存这一问题更是直接困扰着文人一生。
        </p>
        <p>青萍之末，安能苟全？</p>
        <div class="tooltip">
          <p>由三层分级归纳<br />诗歌题材主题和具体情感</p>
        </div>
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
      var myChart = echarts.init(this.$refs.sunburst);
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
        color: [
          "#95683f",
          "#ad9d86",
          "#cf9b62",
          "#773e37",
          "#a28064",
          "#c6bcb0",
          "#83642e",
        ],
        series: {
          type: "sunburst",
          data: data,
          center: ["50%", "50%"],
          radius: [0, "35%"], // 旭日图的半径
          sort: undefined,
          emphasis: {
            // 高亮状态的配置
            focus: "ancestor", // 聚集所有的祖先节点
          },
          label: {
            color: "#333",
            fontWeight: "600",
          },
          levels: [
            // 多层配置
            {}, // 留给数据下钻点的空白配置
            {
              r0: "6%", // 内半径
              r: "25%", // 外半径
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
              r0: "25%",
              r: "55%",
              label: {
                align: "center",
              },
            },
            {
              r0: "55%",
              r: "58%",
              label: {
                position: "outside",
                padding: 3,
                silent: false,
                borderWidth: 0,
                color: "inherit",
                textBorderColor: "solid",
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
  height: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(../../assets/img/he2.png);
  background-repeat: no-repeat;
  background-position: top left;
  background-size: 270px 400px;
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
    margin-top: 180px;
  }
}
.tooltip {
  transform: translate(40px, 100px);
}
</style>
