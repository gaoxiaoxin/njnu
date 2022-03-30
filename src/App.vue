<template>
  <div id="app">
    <div class="head-picture">
      <img src="./assets/img/feng.png" alt="head-picture" />
    </div>
    <div class="preface-text">
      <div class="preface">
        <p>江南旧游凡几处，旧中最忆吴江隈。</p>
        <p>
          吴越自古是温软水乡，也是诗学重镇。当时间来到19世纪中叶到20世纪初这一特殊的时间节点，千年未有之大变局触发了诗坛的勃勃生机，朝代的更迭、社会结构的变化引发了广泛的思考，“变”与“不变”中体现出的都是深刻的民族情结和时代精神。
        </p>
        <p>
          苏州一众文人借诗述怀，上下求索，以吴文化精神内核所展现出的“刚柔并济”的特征，表现出身为知识分子强烈的社会责任心和忧时济民的情怀，他们的精神气质与革新探索，汇聚成了大变革时代独特的苏州诗学地图。
        </p>
      </div>
      <div class="img-house">
        <img src="./assets/img/house.png" alt="one house png" />
      </div>
    </div>
    <div class="first-module">
      <div class="img-lantern">
        <img src="./assets/img/lantern .png" alt="background-lantern" />
      </div>
      <div class="first-module-text">
        <p>勾吴始启宇，三让来就封。人文蔚然起，风尚为时宗</p>
        <p>
          苏州地处江南，地灵水秀，人文荟萃，世世代代的苏州先贤创造了灿烂的吴地文化，而在整个诗歌史上，苏州都扮演着一个诗学重镇的角色。
        </p>
        <p>
          以上古吴歌为源，苏州拥有着长期的诗歌文学传统和浓郁的人文氛围，温山软水的自然生态和吴依软语的方言，赋予了苏州人钟情文艺的性格。
        </p>
      </div>
    </div>
    <div class="first-module-data"></div>
    <div class="two-module">
      <div class="bamboo_img">
        <img src="./assets/img/bamboo.png" alt="" />
      </div>
      <div></div>
    </div>
    <div class="graph">
      <div class="title"><h2>人物关系图</h2></div>
      <relation></relation>
    </div>
    <div class="talentedWomanBeauty">
      <twb></twb>
    </div>
    <div class="groupGathering">
      <heroes></heroes>
    </div>
    <div class="map-com">
      <!-- <map-vue></map-vue> -->
    </div>
    <div class="sunburst_ec">
      <sunburst></sunburst>
    </div>
  </div>
</template>

<script>
import { relation } from "./components/personageRelation";
import { twb } from "./components/talentedWomanBeauty";
import heroes from "./components/Heroes/heroes.vue";
import mapVue from "./components/map/mapMyChart.vue";
import sunburst from "./components/sunburst/index.vue";
export default {
  name: "App",
  components: {
    relation,
    twb,
    heroes,
    mapVue,
    sunburst,
  },
  data() {
    return {
      isShow: false,
    };
  },
};
</script>

<style lang="less">
#app {
  font-family: STFangsong;
  background: url(./assets/img/background.png);
}
.preface-text {
  display: flex;
  height: 500px;
  margin-top: 30px;
  .preface {
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      margin-left: 50px;
    }
  }
  .img-house {
    width: 320px;
    height: 320px;
  }
}
.first-module {
  display: flex;
  height: 500px;
  margin-top: 30px;
  .img-lantern {
    width: 300px;
    height: 300px;
    transform: translateX(-40px);
  }
  .first-module-text {
    margin-top: 130px;
  }
}
.title {
  text-align: center;
  margin-bottom: 20px;
  letter-spacing: 2px;
  h2 {
    font-weight: 800;
    font-size: 28px;
  }
}
.first-module-data {
  height: 700px;
  background: url(./assets/img/room.png) no-repeat top right;
}
.two-module {
  display: flex;
  height: 500px;
  margin-bottom: 30px;
  .bamboo_img {
    width: 400px;
    img {
      height: 100%;
      width: 100%;
    }
  }
}
.graph {
  background-image: url("./assets/img/mummer.png");
  background-repeat: no-repeat;
  background-position: right bottom;
}
.map-com {
  height: 400px;
}
.sunburst_ec {
  height: 1000px;
  display: flex;
  background-image: url(./assets/img/42.png);
  background-repeat: no-repeat;
  background-size: 400px 250px;
  background-position: right;
  justify-content: center;
  align-items: center;
}
</style>
