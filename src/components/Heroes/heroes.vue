<template>
  <div class="heroes">
    <div class="change">
      <div class="peopleList">
        <button
          class="changePerson"
          v-for="(item, index) in person"
          :key="index"
          @click="changePerson(index)"
        >
          {{ item }}
        </button>
      </div>
    </div>
    <div class="canvas" ref="heroes"></div>
    <div class="text">
      <p>{{ nowData.summary }}</p>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import graph from "./config";
console.log(graph);
export default {
  name: "heroes",
  props: {},
  components: {},
  data() {
    return {
      person: ["陆嵩", "贝青乔", "王韬", "胡石予", "金天翮", "高旭"],
      nowData: {},
      myChart: null,
    };
  },
  methods: {
    addChart() {
      // 初始化实例
      // var myChart = echarts.init(this.$refs.heroes);
      this.myChart = echarts.init(this.$refs.heroes);
      // 绘制图表
      this.myChart.hideLoading();
      this.option = {
        title: {},
        radar: {
          indicator: [
            {
              name: "主题创作完整度",
              max: 6000,
            },
            {
              name: "诗体类型丰富度",
              max: 6000,
            },
            {
              name: "诗学论著构架完成度",
              max: 6000,
            },
            {
              name: "个人风格鲜明度",
              max: 6000,
            },
            {
              name: "交游网络广泛度",
              max: 6000,
            },
            {
              name: "后世影响程度",
              max: 6000,
            },
          ],
          axisName: {
            color: "#773e33",
          },
        },

        series: [
          {
            name: "人物及其关系", // 名称
            type: "radar", // 图形样式
            data: [
              {
                value: this.nowData.value,
                name: this.nowData.name,
              },
            ],
          },
        ],
      };
      this.myChart.setOption(this.option);
    },
    changePerson(id) {
      this.nowData = graph.people[id];
      console.log(this.nowData.value);
      this.addChart();
    },
  },
  mounted() {
    this.nowData = graph.people[0];
    console.log(this.nowData);
    this.addChart();
  },
};
</script>

<style scoped lang="less">
.heroes {
  width: 100%;
  margin-bottom: 200px;
  display: flex;
  height: 700px;
  background-image: url(../../assets/img/heroes.png),
    url(../../assets/img/heroesBg.png);
  background-repeat: no-repeat, no-repeat;
  background-size: 500px 300px, 100% 100%;
  background-position: top left;
  align-items: center;
}
.change {
  width: 350px;
  .peopleList {
    display: flex;
    width: 350px;
    flex-wrap: wrap;
    margin-top: 240px;
    .changePerson {
      width: 100px;
      letter-spacing: 1px;
      height: 50px;
      font-size: 18px;
      border-radius: 50px;
      border: 1px solid #af957d;
      background-color: #9b784d;
      margin: 1px;
      color: #d8cec4;
      margin-top: 20px;
      margin-left: 14px;
      cursor: pointer;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
    }
  }
}
.canvas {
  width: 600px;
  height: 400px;
}
.text {
  margin-right: 20px;
}
</style>
