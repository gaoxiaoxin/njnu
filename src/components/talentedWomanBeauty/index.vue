<template>
  <div class="twb">
    <div class="container">
      <div
        class="talented-img"
        v-for="item in talented"
        :key="item.id"
        @click="changeDetail(item.id)"
      >
        <img :src="item.imgSrc" alt="one people img" />
        <span>{{ item.name }}</span>
      </div>
    </div>
    <transition name="detail" mode="out-in">
      <div class="talented-detail" ref="detail">
        <p
          v-for="(item, index) in nowDetail"
          :key="item.node"
          :class="item.class"
          :data-index="index"
        >
          {{ item.node }}
        </p>
      </div>
    </transition>
    <audio src="../../assets/audio/0.mp3" id="audio" ref="audio"></audio>
  </div>
</template>

<script>
import { details } from "./config";
export default {
  name: "demo",
  props: {},
  components: {},
  data() {
    return {
      talented: [
        {
          id: 0,
          name: "吴茝",
          imgSrc: "https://s1.ax1x.com/2022/03/09/b2tMHU.png",
        },
        {
          id: 1,
          name: "吴兰畹",
          imgSrc: "https://s1.ax1x.com/2022/03/09/b2tlEF.png",
        },
        {
          id: 2,
          name: "徐璨",
          imgSrc: "https://s1.ax1x.com/2022/03/09/b2tKBT.png",
        },
        {
          id: 3,
          name: "王采苹",
          imgSrc: "https://s1.ax1x.com/2022/03/09/b2t34J.png",
        },
        {
          id: 4,
          name: "吴瓊仙",
          imgSrc: "https://s1.ax1x.com/2022/03/09/b2tGC9.png",
        },
        {
          id: 5,
          name: "朱沁香",
          imgSrc: "https://s1.ax1x.com/2022/03/09/b2tJ3R.png",
        },
      ],
      details: details,
      nowDetail: [],
      id: "",
      isMove: false,
    };
  },
  computed: {},
  watch: {},
  methods: {
    changeDetail(id) {
      /*
      1. 首先看是否已经有播放
      2. 看是否id相同，如果相同看是否已经暂停
      3. 如果暂停就开始播放
      4. 如果没有暂停，就暂停
      */
      if (this.id === "") {
        // 说明现在没有播放
      } else {
        if (this.id === id) {
          if (this.$refs.audio.paused) {
            this.$refs.audio.play();
          } else {
            this.$refs.audio.pause();
          }
          return;
        }
      }
      this.id = id;
      new Promise((resolve, reject) => {
        this.$refs.detail.style.opacity = 0;
        setTimeout(() => {
          resolve();
        }, 1000);
      })
        .then(() => {
          this.nowDetail = this.details[id];
          this.$refs.detail.style.opacity = 1;
          this.$refs.audio.src = require(`@/assets/audio/${id}.mp3`);
          this.$refs.audio.play();
        })
        .catch((err) => {
          return new Error(err);
        });
    },
  },
  mounted() {
    this.nowDetail = this.details[0];
  },
};
</script>

<style scoped lang="less">
.twb {
  margin-top: 40px;
  // height: 800px;
  background: url(../../assets/img/sakura.png) no-repeat top right;
  background-size: 40%;
  padding-bottom: 40px;
  .container {
    margin-top: 120px;
    display: flex;
    justify-content: center;
    .talented-img {
      height: 400px;
      cursor: pointer;
      display: flex;
      margin-left: 10px;
      span {
        writing-mode: vertical-lr;
        font-weight: 600;
        text-align: center;
      }
      img {
        height: 100%;
      }
      &:hover {
        img {
          filter: drop-shadow(2px 4px 8px #585858);
          transition: filter 1s;
        }
      }
      &:nth-child(1) {
        transform: translateY(30px);
      }
      &:nth-child(2) {
        transform: rotate(2deg);
      }
      &:nth-child(3) {
        transform: translateY(-40px);
      }
      &:nth-child(4) {
        transform: translateY(20px);
      }
      &:nth-child(5) {
        transform: translateY(40px);
      }
      &:nth-child(6) {
        transform: translateY(-20px);
      }
    }
  }
  .talented-detail {
    margin-top: 60px;
    padding: 0px 40px;
    transition: all 1s ease-in;
  }
  .enter {
    opacity: 1;
  }
  .move {
    opacity: 0;
  }
}
.center {
  text-align: center;
}
.op {
  opacity: 0;
}
.font {
  font-size: 34px;
  font-weight: 800;
  font-family: "STKaiti";
}
.detail-enter {
  opacity: 0;
}
.detail-enter-active {
  transition: opacity 0.5s;
}
.detail-leave {
  opacity: 1;
}
.detail-leave-active {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>
