<template>
  <div class="changeByTime">
    <div ref="change" class="changeTime"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import res0 from "./res0.json";
import res1 from "./res1.json";
export default {
  name: "change",
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    addChart() {
      let myChart = echarts.init(this.$refs.change);
      const updateFrequency = 2000; // 更新频率
      const dimension = 0; // dataset对应的维度
      const countryColors = {
        // 城市的颜色
        changzhou: "#00008b",
        yuanhe: "#f00",
        wuxian: "#ffde00",
        wujiang: "#002a8f",
        zhenze: "#003580",
        changshu: "#ed2939",
        kunshan: "#000",
        taicang: "#003897",
        zhaowen: "#f93",
        chengqu: "#bc002d",
      };
      const flags = res0;
      const data = res1;
      const years = [];
      // 当 year 的数据, 为0或者为和data中的下一个展示的数据不同的时候去push
      for (let i = 1; i < data.length; ++i) {
        if (years.length === 0 || years[years.length - 1] !== data[i][1]) {
          years.push(data[i][1]);
        }
      }
      let startIndex = 0; // 起始下标
      let startYear = years[startIndex]; // 获取起始的年数
      let option = {
        grid: {
          // 距离容器的各个方向的位置
          top: 10,
          bottom: 30,
          left: 150,
          right: 80,
        },
        xAxis: {
          max: "dataMax", // 坐标轴刻度最大值, 设置成特殊值 dataMax 获取该轴上的最大值作为最大刻度
          axisLabel: {
            // 坐标轴刻度标签的相关设置
            formatter: function (n) {
              return Math.round(n) + "";
            },
          },
        },
        dataset: {
          // 专门用来管理数据的组件, 返回一个数组, 其中包含全部的和开始年数相同的数据
          source: data.slice(1).filter(function (d) {
            return d[1] === startYear;
          }),
        },
        yAxis: {
          type: "category", // 坐标轴的类型 , "value" => "数值"， c => 类目
          inverse: true, // 是否是反向坐标轴
          max: 10, // 最多11类
          axisLabel: {
            show: true,
            fontSize: 14,
            formatter: function (param) {
              console.log(1, param);
              // 富标签
              return "{flag|" + param + "}";
            },
            rich: {
              flag: {
                fontSize: 25,
                padding: 5,
              },
            },
          },
          animationDuration: 300, // 初始动画时长
          animationDurationUpdate: 300, // 数据更新动画的时长
        },
        series: [
          {
            realtimeSort: true, // 开启实时排序效果
            seriesLayoutBy: "column",
            // dataset 的列对应于系列，从而 dataset 中每一列是一个维度（dimension）
            type: "bar",
            itemStyle: {
              // 柱状图的条形颜色
              color: function (param) {
                return countryColors[param.value[3]] || "#5470c6";
              },
            },
            encode: {
              // 设置对应的映射 从 0 开始
              x: dimension, // 0
              y: 2,
            },
            label: {
              // 柱形图条上面的数字
              show: true,
              precision: 1, // 保留一位小数
              position: "right",
              valueAnimation: true, // 标签的数字动画
              fontFamily: "monospace",
            },
          },
        ],
        // Disable init animation.
        animationDuration: 0, // 表示第一份数据不需要开始动画
        animationDurationUpdate: updateFrequency, // 调用setInterval
        animationEasing: "linear", // 初始动画的缓动效果
        animationEasingUpdate: "linear",
        graphic: {
          // 使下角的年不断变化
          elements: [
            {
              type: "text",
              right: 160,
              bottom: 60,
              style: {
                text: startYear,
                font: "bolder 80px monospace",
                fill: "rgba(100, 100, 100, 0.25)",
              },
              z: 100,
            },
          ],
        },
      };
      myChart.setOption(option);
      for (let i = startIndex; i < years.length - 1; ++i) {
        (function (i) {
          setTimeout(function () {
            updateYear(years[i + 1]);
          }, (i - startIndex) * updateFrequency);
        })(i);
      }
      function updateYear(year) {
        let source = data.slice(1).filter(function (d) {
          return d[1] === year;
        });
        option.series[0].data = source;
        option.graphic.elements[0].style.text = year;
        myChart.setOption(option);
      }
    },
  },
  mounted() {
    this.addChart();
  },
};
</script>

<style scoped lang="less">
.changeTime {
  width: 100%;
  height: 700px;
  border: 1px solid #333;
}
</style>
