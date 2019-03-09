<template>
  <div class="box">
    <div class="fj titlebox">
      <div class="fd1 title">焦点新闻</div>
      <div class="fd2 txt" @click="href">
        MORE
        <img src="/img/z1.jpg" class="icon">
      </div>
    </div>
    <ul>
      <li :style="{top:top}" class="fd1" v-for="(item,index) in list" :key="index">
        <img :src="item.uri" class="bj img">
        <!-- <span>{{item.title}}</span> -->
      </li>
      <div class="fj number">
        <em class="fd1" :class="{active: idx == index + 1}" v-for="(item,index) in list" :key="index" @click="btn(index+1)">{{index+1}}</em>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'imgs',
  data() {
    return {
      idx: 1,
      top: '',
      idxx: '',
      seta: '',
      list: [
        {
          uri: '/img/push_1.jpg',
          title: '赢在广州”创业大赛我校夺魁 获十万创业资助1'
        },
        {
          uri: '/img/push_2.jpg',
          title: '赢在广州”创业大赛我校夺魁 获十万创业资助2'
        },
        {
          uri: '/img/push_3.jpg',
          title: '赢在广州”创业大赛我校夺魁 获十万创业资助3'
        },
        {
          uri: '/img/push_4.jpg',
          title: '赢在广州”创业大赛我校夺魁 获十万创业资助4'
        },
        {
          uri: '/img/push_5.jpg',
          title: '赢在广州”创业大赛我校夺魁 获十万创业资助5'
        }
      ]
    }
  },
  methods: {
    set() {
      if (this.idx == 5) {
        this.idx = 1
      } else {
        this.idx++
      }
      let he = document.getElementsByClassName('img')[0].height
      this.top = -(this.idx - 1) * he + 'px'
    },
    btn(index) {
      this.idx = index - 1
      this.set()
    },
    href () {
      location.href = '/news/focus'
    }
  },
  mounted() {
    setInterval(this.set, 5000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  width: 474px;
  border: 1px solid rgb(196, 196, 196);
  height: 380px;
  overflow: hidden;
  position: relative;
}
ul {
  width: 100%;
  height: 85%;
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
  width: 90%;
  margin: 0 auto;
}
.title {
  display: inline-block;
  font-size: 16px;
  vertical-align: middle;
  position: relative;
  margin-bottom: -1px;
  padding: 0 0 8px;
  font-weight: 700;
  line-height: 3em;
}
.txt {
  color: #1e649f;
  position: relative;
  line-height: 3em;
  height: 3em;
  top: 0;
  right: 0;
  z-index: 5;
  cursor: pointer;
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
</style>
