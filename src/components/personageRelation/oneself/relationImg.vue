<template>
  <div class="relation">
    <div class="relationImg" ref="relation" v-if="!isShow"></div>
    <ch2-vue v-else></ch2-vue>
    <div class="buttons">
      <div class="right">
        <button class="changeEnsemable" @click="change">
          {{ isShow ? "显示个人" : "显示全部" }}
        </button>
      </div>
      <div class="left">
        <template v-for="(item, index) in people">
          <button
            @click="changePoet(item.spell, index)"
            :class="['poetBtn', index === activeIndex ? 'btnActive' : '']"
          >
            {{ item.name }}
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import peopleRelation from "../ensemable/config/index";
import graphCategories from "../ensemable/config";
import ch2Vue from "../ch2/ch2.vue";
export default {
  name: "relationImg",
  props: {},
  components: {
    ch2Vue,
  },
  data() {
    return {
      peopleRelation: {},
      isShow: true,
      activeIndex: null,
      preIndex: null,
      people: [
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
      graph: {},
    };
  },
  computed: {},
  watch: {},
  methods: {
    addChart() {
      // 初始化实例
      console.log(this.$refs.relation);
      var myChart = echarts.init(this.$refs.relation);
      this.graph.nodes.forEach((node) => {
        node.label = {
          show: node.symbolSize > 5, // 设置是否显示label的内容
        };
      });
      // 绘制图表
      myChart.hideLoading();
      var option = {
        tooltip: {},
        color: [
          "#95683f",
          "#ad9d86",
          "#cf9b62",
          "#773e37",
          "#a28064",
          "#c6bcb0",
          "#83642e",
        ],
        legend: [
          {
            // selectedMode: 'single',
            data: graphCategories.categories.map(function (a) {
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
            data: this.graph.nodes, // 节点的数据
            links: this.graph.links, // 节点间的关系
            categories: [
              { name: "本人" },
              { name: "亲族" },
              { name: "师生" },
              { name: "友人" },
            ], //节点的分类类目
            roam: true, // 是否开启鼠标缩放和平移漫游
            label: {
              // 图形上的文本标签
              position: "top", // 显示的位置
              formatter: "{b}", // 要显示的内容, 这个是显示名称
              textBorderColor: "none",
            },
            lineStyle: {
              // 关系边的公共线条样式
              color: "target", // 自动选取源节点的颜色作为自己的颜色
              curveness: 0.3, // 边的曲度
              width: 3, // 线的宽度
            },
            emphasis: {
              // 高亮状态的图形样式
              focus: "adjacency", // 聚焦关系图中的邻接点和边
              lineStyle: {
                width: 10, // 线宽
              },
            },
          },
        ],
      };
      myChart.setOption(option);
    },
    changePoet(poetSpell, index) {
      if (index !== "") {
        if (!this.isShow) {
          this.activeIndex = index;
          this.graph = peopleRelation[poetSpell];
          this.addChart();
        }
      } else {
        return;
      }
    },
    change() {
      this.isShow = !this.isShow;
      if (!this.isShow) {
        if (this.preIndex === null) {
          // 如果为null, 则没有经过上一次
          this.activeIndex = 0;
        } else {
          this.activeIndex = this.preIndex;
        }
        new Promise((reject, response) => {
          reject();
        }).then(() => {
          this.addChart();
        });
      } else {
        this.preIndex = this.activeIndex;
        this.activeIndex = null;
      }
    },
  },
  mounted() {
    this.peopleRelation = peopleRelation;
    this.graph = peopleRelation.ligengyuan;
    this.addChart();
  },
};
</script>

<style scoped lang="less">
.relationImg {
  width: 100%;
  height: 600px;
  margin-bottom: 40px;
}
.btnActive {
  background-color: #cf7a64 !important;
  color: #fff;
}
.buttons {
  height: 50px;
  margin-top: 5px;
  border-top: 1px solid transparent;
  display: flex;
  justify-content: space-around;
  .changeEnsemable {
    border: none;
    height: 40px;
    width: 80px;
    border-radius: 8px;
    background-color: #cf7a64;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    cursor: pointer;
  }
  .poetBtn {
    width: 80px;
    border: none;
    height: 40px;
    border-radius: 8px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
    margin-right: 10px;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    cursor: pointer;
    background-color: #cbcbc8;
    &:hover {
      background-color: #cf7a64;
      color: #fff;
    }
  }
}
</style>
