<template>
  <div class="relationImg" ref="relation"></div>
</template>

<script>
import * as echarts from "echarts";
import graph from "./config";
import peopleRelation from "./config/index";
export default {
  name: "relationImg",
  props: {},
  components: {},
  data() {
    return {
      personArray: [""],
      nodes: [],
      links: [],
      people: {},
      peopleList: [
        {
          name: "李根源",
          spell: "ligengyuan",
        },
        {
          name: "高旭",
          spell: "gaoxu",
        },
        {
          name: "陈去病",
          spell: "chenqubing",
        },
        {
          name: "贝青乔",
          spell: "beiqingqiao",
        },
        {
          name: "江湜",
          spell: "jiangshi",
        },
        {
          name: "翁同龢",
          spell: "wengtonghe",
        },
        {
          name: "曾朴",
          spell: "cengpu",
        },
        {
          name: "叶昌炽",
          spell: "yechangchi",
        },
        {
          name: "潘祖荫",
          spell: "panzuyin",
        },
        {
          name: "潘遵祁",
          spell: "panzunqi",
        },
        {
          name: "冯桂芬",
          spell: "fengguifen",
        },
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {
    addChart() {
      // 初始化实例
      var myChart = echarts.init(this.$refs.relation);
      this.nodes.forEach((node) => {
        node.label = {
          show: node.symbolSize > 5, // 设置是否显示label的内容
        };
      });
      // 绘制图表
      myChart.hideLoading();
      var option = {
        title: {
          text: "关系图",
          subtext: "Default layout",
          top: "top",
          left: "left",
        },
        tooltip: {},
        legend: [
          {
            // selectedMode: 'single',
            data: graph.categories.map(function (a) {
              return a.name;
            }),
          },
        ],
        animationDuration: 1500,
        animationEasingUpdate: "quinticInOut",
        series: [
          {
            name: "人物及其关系", // 名称
            type: "graph", // 图形样式
            layout: "none", // 设置采取什么模式
            data: this.nodes, // 节点的数据
            links: this.links, // 节点间的关系
            categories: graph.categories, //节点的分类类目
            roam: true, // 是否开启鼠标缩放和平移漫游
            label: {
              // 图形上的文本标签
              position: "top", // 显示的位置
              formatter: "{b}", // 要显示的内容, 这个是显示名称
            },
            lineStyle: {
              // 关系边的公共线条样式
              color: "target", // 自动选取源节点的颜色作为自己的颜色
              curveness: 0.2, // 边的曲度
              width: 3, // 线的宽度
            },
            emphasis: {
              // 高亮状态的图形样式
              focus: "adjacency", // 聚焦关系图中的邻接点和边
              lineStyle: {
                width: 5, // 线宽
              },
            },
          },
        ],
      };
      myChart.setOption(option);
    },
    changeCoor(name, Xcoor, Ycoor) {
      let people = peopleRelation[name];
      let nodes = people.nodes;
      nodes.forEach((node) => {
        node.x += Xcoor;
        node.y += Ycoor;
      });
      people.nodes = nodes;
    },
  },
  mounted() {
    this.changeCoor("gaoxu", 800, 0);
    this.changeCoor("chenqubing", 0, 800);
    this.changeCoor("beiqingqiao", -800, 0);
    this.changeCoor("jiangshi", 0, -800);
    this.changeCoor("wengtonghe", 800, 800);
    this.changeCoor("cengpu", -800, 800);
    this.changeCoor("yechangchi", -800, -800);
    this.changeCoor("panzuyin", 800, -800);
    this.changeCoor("panzunqi", 1400, -1400);
    this.changeCoor("fengguifen", 1600, 0);
    this.people = peopleRelation;
    for (let i = 0; i < this.peopleList.length; i++) {
      let nameNode = this.people[this.peopleList[i].spell];
      this.nodes = this.nodes.concat(nameNode.nodes);
      this.links = this.links.concat(nameNode.links);
    }
    this.links = this.links.concat(graph.links);
    this.addChart();
  },
};
</script>

<style scoped lang="less">
.relationImg {
  width: 100%;
  height: 600px;
  margin-bottom: 200px;
}
</style>
