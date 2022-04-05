<template>
  <div id="app">
    <div class="head-picture margin_bottom_middle">
      <img src="./assets/img/logo2.png" alt="head-picture" />
    </div>
    <div class="preface-text margin_bottom_big" id="preface">
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
    <div class="first-module margin_bottom_big" id="first">
      <div class="first-module-text margin_bottom_middle">
        <p class="serve_title">
          勾吴始启宇，三让来就封。人文蔚然起，风尚为时宗。
        </p>
        <p>
          苏州地处江南，地灵水秀，人文荟萃，世世代代的苏州先贤创造了灿烂的吴地文化，而在整个诗歌史上，苏州都扮演着一个诗学重镇的角色。
        </p>
        <p>
          以上古吴歌为源，苏州拥有着长期的诗歌文学传统和浓郁的人文氛围，温山软水的自然生态和吴依软语的方言，赋予了苏州人钟情文艺的性格。
        </p>
      </div>
      <div class="first-module-data">
        <change></change>
      </div>
      <div class="tooltip first-tooltip">
        <p>鼠标点击燕子 <br />演示数据</p>
      </div>
    </div>

    <div class="two-module margin_bottom_big" id="two">
      <div class="two-module-text">
        <div class="bamboo_img">
          <img src="./assets/img/bamboo.png" alt="" />
        </div>
        <div class="ps">
          <p class="serve_title">石湖风景数吴门，无复长桥印月痕。</p>
          <p>
            清末民初的苏州，沿袭过去郡县区划同时又有所变更。江南灵气氤氲之下的苏州景观，引起了诗人们的唱和共鸣。阳春召我以烟景，大块假我以文章，苏州文人雅集，尽显名一风流。他们以自己的创作，记录了苏州城的寻常巷陌与钟灵山水，勾勒出时代的剪影。
          </p>
        </div>
      </div>
      <div class="map-com">
        <map-vue></map-vue>
      </div>
    </div>

    <div class="three-module margin_bottom_big" id="three">
      <div class="three-module-text">
        <div class="content">
          <p class="serve_title">吾邑人才盛，文采旧王孙。</p>
          <p>
            苏州这一地域，鸾翔凤集，自古是才子故乡、科举大镇，而此时更是才人辈出。他们走进现实社会，以诗歌记录一个时代和民族的转变。诗歌成为了他们浇胸中块垒的手段，寄托着他们无数难以言说的复杂情感，也成为了一代有识之士爱国意识觉醒的历史佐证。
          </p>
          <p>穆穆清禁，济济群英。</p>
        </div>
      </div>
      <div class="groupGathering margin_bottom_middle">
        <heroes></heroes>
      </div>
      <!-- 才女佳人部分开始 -->
      <div class="twb_text">
        <div class="content">
          <p class="serve_title">接浣花之宗派，洗俗藻之繁华。</p>
          <p>
            苏州女子是这个时代晦暗天地之间的一抹亮色。自有史以来，从未出现如此密集的女性文人涌现，清末民初的闺秀诗人步入诗坛,
            她们以女性的敏感和细腻，记录着闺阁内外的时代风波。这些跨越性别的文学互动,
            实现了情感交流、价值认同与文学观念的传递,
            对女性诗史的面貌产生了重要影响。
          </p>
          <p>虽然是巾帼，而有侠士之风。</p>
        </div>
      </div>
      <div class="talentedWomanBeauty">
        <twb></twb>
      </div>
    </div>
    <div class="four-module margin_bottom_big" id="four">
      <div class="sunburst_ec">
        <sunburst></sunburst>
      </div>
    </div>
    <div class="five-module margin_bottom_big" id="five">
      <div class="graph_text">
        <div class="ps">
          <p class="serve_title">昔年离散亦如梦，谁料天涯生再共。</p>
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
    </div>

    <div class="ciYundom margin_bottom_big" id="six">
      <ciyunCom></ciyunCom>
    </div>
    <div class="overText margin_bottom_big">
      <div class="ps">
        <p>
          吴越之孙，千波万澜。世挺伟才，扞灾御难。古欢已矣，耆旧雨散。遗容火色，犹照赤岸。翁乎归来，余言岂谩。
        </p>
        <p>吴蒙自幸生同郡，万里来招逐客魂。</p>
        <p>
          苏州诗人传承文脉，继往开来，在乱世当中与命运不懈抗争。他们是这个时代里无数为国家和民族谋求出路的仁人志士缩影。以诗歌作诗史，以笔尖作利刃，他们成为划开时代晦暗夜色里的一点火光，而后才有我们的四海清平和国泰民安。
        </p>
        <p>向所有这条路上以血泪书写诗歌的文人致敬。</p>
      </div>
    </div>
    <div class="gratitude">
      <div class="content">
        <p class="about">关于我们</p>
        <p>
          本项目基于古籍智能信息处理与数字人文资源研究；所涉及地图数据来源《苏州人文地图》（学习强国与中国地图出版集团)及诸可宝：《江苏全省舆图》（1895），并后期处理完成；图片均来源于网络。
        </p>
        <p>小组成员：谭惠予，李丹，何天赐</p>

        <p>在此由衷感谢陈波老师、黄卓颖老师所提供的帮助。</p>
      </div>
    </div>
    <div class="nav" v-if="isShowNav">
      <div class="img" @click="changeShowList">
        <img src="./assets/img/logo2.png" alt="" />
      </div>
      <div class="nav_list" v-if="isShowList">
        <a href="#first">传统源流</a>
        <a href="#two">地域分布</a>
        <a href="#three">群像撷英</a>
        <a href="#four">主题探究</a>
        <a href="#five">关系网络</a>
        <a href="#six">诗学思想</a>
      </div>
    </div>
  </div>
</template>

<script>
import { relation } from "./components/personageRelation";
import { twb } from "./components/talentedWomanBeauty";
import heroes from "./components/Heroes/heroes.vue";
import mapVue from "./components/map/mapMyChart.vue";
import sunburst from "./components/sunburst/index.vue";
import change from "./components/changeByTime/index.vue";
import ciyunCom from "./components/ciyun/index.vue";
export default {
  name: "App",
  components: {
    relation,
    twb,
    heroes,
    mapVue,
    sunburst,
    change,
    ciyunCom,
  },
  data() {
    return {
      isShowList: false,
      isShowNav: true,
    };
  },
  methods: {
    changeShowList() {
      this.isShowList = !this.isShowList;
    },
    changeShowNav(e) {
      let top = e.srcElement.scrollingElement.scrollTop;
      if (top > 400) {
        this.isShowNav = true;
      } else {
        this.isShowNav = false;
      }
      return;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.changeShowNav);
  },
};
</script>

<style lang="less">
#app {
  font-family: STFangsong;
  background: url(./assets/img/background.png);
}
.head-picture {
  background-image: url(./assets/img/feng.png);
  background-repeat: no-repeat;
  display: flex;
  background-size: 100% 100%;
  justify-content: flex-end;
  height: 600px;
  img {
    width: 150px;
    height: 150px;
    transform: translate(-580px, 290px);
  }
}
.tooltip {
  p {
    font-size: 14px;
    writing-mode: vertical-rl;
    text-indent: 0;
  }
}
.first-tooltip {
  color: rgba(51, 51, 51, 0.863);
  font-weight: 800 !important;
  transform: translate(0px, -220px);
  float: right;
}
.margin_bottom_big {
  margin-bottom: 150px;
}
.margin_bottom_middle {
  margin-bottom: 70px;
}
.serve_title {
  font-size: 40px;
  font-weight: 900;
  font-family: kaiti;
  text-indent: 0;
}
.preface-text {
  display: flex;
  height: 500px;
  align-items: center;
  .preface {
    p {
      margin-left: 130px;
      margin-right: 50px;
    }
  }
  .img-house {
    width: 380px;
    height: 380px;
    margin-right: 40px;
  }
}
.first-module {
  border: 1px solid transparent;
  background-image: url(./assets/img/lantern.png);
  background-repeat: no-repeat;
  background-size: 500px 300px;
  .first-module-text {
    margin-top: 230px;
  }
  .first-module-data {
    height: 500px;
    background: url(./assets/img/room.png) no-repeat top right;
    background-size: 500px 500px;
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

.two-module {
  border: 1px solid transparent;
  .two-module-text {
    display: flex;
    width: 100%;
    height: 700px;
    margin-bottom: 80px;
    background-image: url(./assets/img/43.png), url(./assets/img/12.png);
    background-repeat: no-repeat;
    background-position: top right, bottom -90px right;
    background-size: 500px 300px, 250px 250px;
    border: 1px solid transparent;
    .bamboo_img {
      width: 400px;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .ps {
      width: 1050px;
      margin-top: 250px;
    }
  }
  .map-com {
    height: 700px;
  }
}
.three-module {
  border: 1px solid transparent;
  .three-module-text {
    border: 1px solid transparent;
    height: 530px;
    background-image: url(./assets/img/heroes.png);
    background-repeat: no-repeat;
    background-size: 470px 250px;
    background-position: top left;
    .content {
      margin-top: 250px;
    }
  }
  .groupGathering {
    border-bottom: 1px solid transparent;
    margin-bottom: 85px;
  }
  .twb_text {
    width: 100%;
    height: 330px;
  }
}

.five-module {
  border: 1px solid transparent;
  .graph {
    background-image: url("./assets/img/mummer.png");
    background-repeat: no-repeat;
    background-position: right 50px bottom 60px;
    background-size: 380px 460px;
  }
  .graph_text {
    background-image: url(./assets/img/47.png);
    background-repeat: no-repeat;
    background-position: top left;
    background-size: 500px 300px;
    width: 100%;
    height: 630px;
    border-top: 1px transparent solid;
    .ps {
      margin-top: 280px;
    }
  }
}

.ciYundom {
  width: 100%;
  height: 600px;
}
.overText {
  background-image: url(./assets/img/7.png);
  width: 100%;
  height: 500px;
  background-repeat: no-repeat;
  background-size: 500px 500px;
  background-position: right bottom;
  // 给背景图片边缘做模糊化处理
  box-shadow: 0 0 30px 30px #cdbda4 inset;
  .ps {
    height: 100%;
    margin-right: 60px;
  }
}
.gratitude {
  height: 500px;
  padding-top: 30px;
  background-image: url(./assets/img/logo.png);
  background-repeat: no-repeat;
  background-size: 150px 150px;
  background-position: top 20px left 80px;
  .about {
    margin-top: 50px;
    font-size: 32px;
    font-weight: 800;
  }
  p {
    font-size: 21px;
    font-weight: 600;
  }
}

.nav {
  position: fixed;
  bottom: 60px;
  right: 40px;
  .img {
    height: 100px;
    width: 100px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .nav_list {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: -70px;
    top: -40px;
    a {
      text-decoration: none;
      color: #333;
      margin-top: 5px;
      font-weight: 800;
      font-family: kaiti;
      text-shadow: 0 0 10px #a28064;
    }
  }
}
</style>
