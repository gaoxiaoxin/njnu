<template>
  <div class="ciyunCom">
    <div class="content">
      <div class="ciyun_text">
        <p class="serve_title">江南好手探微笔，能写趋庭孺慕心。</p>
        <p>
          在这种情境下，过去弥漫在文坛的几种风格嬗变都显得羸弱而可笑。纸笔仿佛成了炮口刀尖下最百无一用的东西。但是也正成了文人手中最锋利的刀刃。在时事沉浮中，有些文人仍然不愿抛弃旧学，在试图摸索出一条融合古意与今时的道路。
        </p>
        <p>悠悠魂梦依先垄，吾侪何以济穷乡？</p>
      </div>
      <div class="left">
        <div class="ciyun_img">
          <img :src="imgSrc" alt="img" />
        </div>
        <div class="change_btn">
          <button :class="[isActive ? 'active' : '']" @click="imgChange(1)">
            风格宗法
          </button>
          <button :class="[isActive ? '' : 'active']" @click="imgChange(2)">
            艺术取向
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ciyun",
  props: {},
  components: {},
  data() {
    return {
      imgSrc: "/ciyun1.png",
      isActive: true,
    };
  },
  computed: {},
  watch: {},
  methods: {
    imgChange(num) {
      this.imgSrc = `/ciyun${num}.png`;
      if (num === 1) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    },
  },
};
</script>

<style scoped lang="less">
.ciyunCom {
  height: 700px;
  width: 100%;
  background-image: url(../../assets/img/46.png);
  background-repeat: no-repeat;
  background-size: 500px 300px;
  background-position: top 20px left 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: calc(100% - 150px);
    display: flex;
    .left {
      margin-right: 60px;
      margin-top: 30px;
      .change_btn {
        margin-top: 30px;
        display: flex;
        justify-content: center;
        button {
          width: 140px;
          height: 50px;
          border: 2px solid rgb(83 62 78);
          opacity: 0.5;
          font-size: 24px;
          border-radius: 50px;
          font-family: STFangsong;
          cursor: pointer;
          background-color: transparent;
          &:nth-child(1) {
            border-right: none;
            transform: translateX(10px);
          }
          &:nth-child(2) {
            border-left: none;
            transform: translateX(-10px);
          }
          &:hover {
            opacity: 1;
            font-weight: 700;
          }
        }
      }
    }
    .ciyun_text {
      margin-top: 180px;
      p {
        margin: 0 20px 0 0;
        &:nth-child(1) {
          margin: 0;
        }
      }
    }
  }
}
.ciyun_img {
  height: 450px;
}
.active {
  opacity: 1 !important;
  font-weight: 700;
}
</style>
