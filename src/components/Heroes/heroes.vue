<template>
  <div>
    <div class="heroes">
      <div class="text">
        <p>{{ nowData.summary }}</p>
      </div>
      <div class="peopleList"></div>
      <div class="canvas" ref="heroes"></div>
    </div>
    <div class="btns">
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
      imgSrc: "/heroes_img/heroes_1.png",
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
        radar: {
          indicator: [
            {
              name: "主题创作\n完整度",
              max: 6000,
            },
            {
              name: "诗体类型\n丰富度",
              max: 6000,
            },
            {
              name: "诗学论著\n构架完成度",
              max: 6000,
            },
            {
              name: "个人风格\n鲜明度",
              max: 6000,
            },
            {
              name: "交游网络\n广泛度",
              max: 6000,
            },
            {
              name: "后世影响\n程度",
              max: 6000,
            },
          ],
          axisName: {
            color: "#fff",
            fontSize: 16,
            fontFamily: "STFangsong",
          },
        },
        color: ["#9b784d"],
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
      console.log(id);
      this.nowData = graph.people[id];
      this.imgSrc = `/heroes_img/heroes_${id + 1}.png`;
      this.addChart();
    },
  },
  mounted() {
    this.nowData = graph.people[0];
    this.addChart();
  },
};
</script>

<style scoped lang="less">
.heroes {
  width: 100%;
  display: flex;
  height: 900px;
  background-image: url(../../assets/img/heroesBg.png),
    url(../../assets/img/crane.png);
  background-repeat: no-repeat, no-repeat;
  background-size: 100% 100%, 340px 300px;
  background-position: left, top -100px right 200px;
  align-items: center;
}
.peopleList {
  display: flex;
  min-width: 300px;
  transform: translateY(40px);
  align-self: flex-end;

  .active {
    background-color: #fff;
    color: #9b784d;
  }
}
.canvas {
  width: 600px;
  height: 500px;
  transform: translate(20px, 220px);
}
.text {
  margin-left: 60px;
  width: 420px;
  height: 360px;
  transform: translateY(280px);
  p {
    margin: 0px;
  }
}

.btns {
  display: flex;
  justify-content: center;
  transform: translateX(-180px);
  .changePerson {
    width: 54px;
    letter-spacing: 1px;
    height: 32px;
    font-family: STFangsong;
    font-size: 15px;
    border-radius: 10px;
    border: 1px solid #af957d;
    background-color: #9b784d;
    color: #fff;
    margin-left: 14px;
    cursor: pointer;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
    &:hover {
      background-color: #fff;
      color: #9b784d;
    }
  }
}
</style>
