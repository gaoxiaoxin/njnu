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
    <div class="groupGathering">
      <heroes></heroes>
    </div>
    <div class="talentedWomanBeauty">
      <twb></twb>
    </div>
    <div class="sunburst_ec">
      <sunburst></sunburst>
    </div>
    <div class="graph_text">
      <div class="ps">
        <p>昔年离散亦如梦，谁料天涯生再共。</p>
        <p>
          这一时期的苏州诗人以诗文书画为纽带，建立了庞大而复杂的社会交游网络，在这个关系网络之中，可以见到具有个人独特魅力的诗人画像，也能挖掘其深层的文化心理，进而能够帮助重现文坛主流与边缘的复杂互动。
        </p>
        <p>嘤其鸣矣，求其友声。</p>
      </div>
    </div>
    <div class="graph">
      <div class="title"><h2>人物关系图</h2></div>
      <relation></relation>
    </div>

    <div class="map-com">
      <map-vue></map-vue>
    </div>
    <div class="ciYundom">
      <div class="img">
        <!-- <img src="./assets/img/46.png" alt="" /> -->
      </div>
      <div class="ciyun"></div>
    </div>
    <div class="overText">
      <div class="ps">
        <p>吴越之孙，千波万澜。世挺伟才，扞灾御难。</p>
        <p>古欢已矣，耆旧雨散。遗容火色，犹照赤岸。翁乎归来，余言岂谩。</p>
      </div>
    </div>
    <change></change>
    <div class="gratitude"></div>
  </div>
</template>

<script>
import { relation } from "./components/personageRelation";
import { twb } from "./components/talentedWomanBeauty";
import heroes from "./components/Heroes/heroes.vue";
import mapVue from "./components/map/mapMyChart.vue";
import sunburst from "./components/sunburst/index.vue";
import change from "./components/changeByTime/index.vue";
export default {
  name: "App",
  components: {
    relation,
    twb,
    heroes,
    mapVue,
    sunburst,
    change,
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
  height: 700px;
  margin-bottom: 30px;
  background-image: url(./assets/img/43.png);
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 500px 250px;
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
  height: 700px;
  border: 1px solid #333;
}
.sunburst_ec {
  display: flex;
  align-items: center;
}
.graph_text {
  background-image: url(./assets/img/47.png);
  background-repeat: no-repeat;
  background-position: top left;
  background-size: 500px 300px;
  width: 100%;
  height: 700px;
  border-top: 1px transparent solid;
  .ps {
    margin-top: 250px;
    padding: 0 40px;
  }
}
.ciYundom {
  width: 100%;
  height: 660px;
  .img {
    background-image: url(./assets/img/46.png);
    background-repeat: no-repeat;
    background-position: right;
    height: 240px;
  }
  .ciyun {
    background-image: url(./assets/img/12.png);
    height: calc(100% - 240px);
    background-position: left bottom;
    background-repeat: no-repeat;
    background-size: 200px 200px;
  }
}
.overText {
  background-image: url(./assets/img/26.png);
  width: 100%;
  height: 700px;
  background-repeat: no-repeat;
  .ps {
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-items: flex-end;
    margin-left: 500px;
    height: 100%;
  }
}
.gratitude {
  height: 700px;
  background-image: url(./assets/img/5.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
