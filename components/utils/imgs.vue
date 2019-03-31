<template>
  <div class="box">
    <div class="fj titlebox">
      <div class="left title">
        <img src="img/x.png" class="left g">
        <em class="left txt">焦点新闻</em>
      </div>
      <div class="right txt" @click="href">更多>></div>
    </div>
    <ul>
      <li :style="{top:top}" class="left" v-for="(item,index) in list" :key="index">
        <img :src="item.uri" class="bj img">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "imgs",
  data() {
    return {
      idx: 1,
      top: "",
      idxx: "",
      seta: "",
      list: [
        {
          uri: "/www/img/push_1.jpg",
          title: "赢在广州”创业大赛我校夺魁 获十万创业资助1"
        },
        {
          uri: "/www/img/push_2.jpg",
          title: "赢在广州”创业大赛我校夺魁 获十万创业资助2"
        },
        {
          uri: "/www/img/push_3.jpg",
          title: "赢在广州”创业大赛我校夺魁 获十万创业资助3"
        },
        {
          uri: "/www/img/push_4.jpg",
          title: "赢在广州”创业大赛我校夺魁 获十万创业资助4"
        },
        {
          uri: "/www/img/push_5.jpg",
          title: "赢在广州”创业大赛我校夺魁 获十万创业资助5"
        }
      ]
    };
  },
  methods: {
    set() {
      if (this.idx == 5) {
        this.idx = 1;
      } else {
        this.idx++;
      }
      let he = document.getElementsByClassName("img")[0].height;
      this.top = -(this.idx - 1) * he + "px";
    },
    btn(index) {
      this.idx = index - 1;
      this.set();
    },
    href() {
      location.href = "/www/news/focus";
    }
  },
  mounted() {
    setInterval(this.set, 5000);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  width: 841px;
  height: 380px;
  overflow: hidden;
  position: relative;
}
ul {
  width: 100%;
  height: 90%;
  position: relative;
  overflow: hidden;
}
li {
  width: 100%;
  height: 100%;
  position: relative;
}
.bj {
  width: 100%;
  height: 100%;
}
span {
  width: 90%;
  position: absolute;
  top: 20%;
  font-size: 1.2em;
  color: #000;
  left: 5%;
}

.icon {
  display: inline;
}
.titlebox {
  border-bottom: 1px solid #ddd;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 0.5em;
  line-height: 2em;
}
.title {
  display: inline-block;
  font-size: 1em;
  vertical-align: middle;
  position: relative;
  font-weight: 700;
}
.txt {
  position: relative;
  line-height: 2em;
  color: #aaaaaa;
}
.number {
  position: absolute;
  bottom: 8%;
  right: 5%;
  display: flex;
  width: 20%;
}
.number em {
  display: block;
  width: 20%;
  border: 1px solid #ddd;
  text-align: center;
  background: #fff;
  cursor: pointer;
}
.active {
  background: #999 !important;
}
.title .g {
  margin-top: 10%;
}
.title .txt {
  color: #1c68a2;
  text-indent: 0.5em;
  font-weight: 600;
}
</style>
