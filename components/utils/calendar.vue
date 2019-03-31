<template>
  <div>
    <p class="title fj">
      <img src="img/x.png" class="left g">
      <span class="left txt">招聘日历</span>
    </p>
    <div class="box">
      <div class="fj btnbox">
        <img src="/www/img/web_icon_left_dis.png" class="dis left" @click="up">
        <div class="left data">{{this.y}}/{{this.m+1}}</div>
        <img src="/www/img/web_icon_right_dis.png" class="dis right" @click="dw">
      </div>
      <div class="week">
        <span>日</span>
        <span>一</span>
        <span>二</span>
        <span>三</span>
        <span>四</span>
        <span>五</span>
        <span>六</span>
      </div>
      <div class="week2 fj">
        <span
          class="left yuan"
          :class="{a2:item[0] == '聘' || item[0] == '宣'}"
          v-for="(item,index) in this.arr"
          :key="index"
        >{{item[0]}}</span>
        <!-- @mouseenter="enter(item[0])" -->
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapActions } = createNamespacedHelpers("jobs/jobfair");
const { mapActions: campusactions } = createNamespacedHelpers("jobs/campus");
export default {
  name: "home",
  data() {
    return {
      date: "",
      arr: [], // 二位数组
      y: "", // 动态年
      y2: "", // 当前年
      m: "", // 动态月
      m2: "", // 当前月
      d: "", // 当前日
      k: "", // 当前月最大天
      txt: "",
      show1: false,
      list: [],
      items: []
    };
  },
  methods: {
    ...mapActions(["calendar"]),
    ...campusactions(["calendar2"]),
    Obtain() {
      let x = new Date(this.y, this.m + 1, 0);
      this.k = x.getDate(); // 所有日
      this.arr = [];
      for (let i = 1; i <= this.k; i++) {
        let w = this.date.getDay(); // 星期几
        this.arr.push([i, w, i]);
        if (i == this.k) {
          let num = Number(this.arr[0][1]);
          for (let y = 0; y < num; y++) {
            this.arr.unshift([]);
          }
          // 宣讲会
          for (let k = 0; k < this.items.length; k++) {
            for (let x = 0; x < this.arr.length; x++) {
              let a = this.items[k].date.slice(8, 10);
              if (
                a == this.arr[x][2] &&
                this.m2 == this.m &&
                this.y2 == this.y
              ) {
                this.arr[x][0] = "宣";
              }
            }
          }
          // 招聘会
          for (let k = 0; k < this.list.length; k++) {
            for (let x = 0; x < this.arr.length; x++) {
              let a = this.list[k].date.slice(8, 10);
              if (
                a == this.arr[x][2] &&
                this.m2 == this.m &&
                this.y2 == this.y
              ) {
                this.arr[x][0] = "聘";
              }
            }
          }
        }
      }
    },
    up() {
      if (this.m < 1) {
        this.m = 11;
        this.y--;
      } else {
        this.m--;
      }
      this.Obtain();
    },
    dw() {
      if (this.m >= 11) {
        this.m = 0;
        this.y++;
      } else {
        this.m++;
      }
      this.Obtain();
    }
  },
  async mounted() {
    this.date = new Date();
    this.y = this.date.getFullYear(); // 当前年
    this.y2 = this.date.getFullYear(); // 当前年
    this.m = this.date.getMonth(); // 当前月
    this.m2 = this.date.getMonth(); // 当前月
    this.d = this.date.getDate(); // 当前日
    if (this.m < 10) {
      let m = "0" + (this.m + 1);
      let month = this.y + "-" + m;
      const res = await this.calendar({
        month: month
      });
      if (this.$checkRes(res)) {
        this.list = res.data;
        const rest = await this.calendar2({
          month: month
        });
        if (this.$checkRes(rest)) {
          this.items = rest.data;
          this.Obtain();
        }
      }
    } else {
      let month = this.y + "-" + (this.m + 1);
      const res = await this.calendar({
        month: month
      });
      if (this.$checkRes(res)) {
        this.list = res.data;
        const rest = await this.calendar2({
          month: month
        });
        if (this.$checkRes(rest)) {
          this.items = rest.data;
          this.Obtain();
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  width: 340px;
  height: 340px;
  border: 1px solid #ddd;
  border-radius:4px; 
}
.dis {
  width: 3%;
  margin-top: 2%;
}
.dis.left {
  margin-left: 32%;
}
.dis.right {
  float: left;
}
.btnbox {
  width: 90%;
  margin: 5% auto;
}
.data {
  width: 30%;
  text-align: center;
  font-size: 1em;
  font-weight: 700;
}
.week {
  width: 100%;
  display: flex;
  color: #ddd;
  font-size: 1em;
  font-weight: 600;
  line-height: 2em;
}
.week span {
  width: 14.28%;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;
}
.week2 {
  width: 100%;
  color: #000;
  font-size: 1.2em;
  font-weight: 600;
  line-height: 2em;
}
.week2 span {
  width: 12%;
  text-align: center;
  margin: 0.5% 1.14%;
  cursor: pointer;
  border-radius: 50%;
}
.a2 {
  color: #fff;
  background: #1c68a2;
}
.yuan {
  position: relative;
}
.week2txtbox {
  position: absolute;
  width: 20%;
  top: -100%;
  left: -10%;
}
.title {
  width: 100%;
  border: 1px solid #dddddd;
  line-height: 2em;
  margin-bottom: 0.5em;
  border-radius:4px; 
}
.title .g {
  margin-top: 2%;
  margin-left: 1em
}
.title .txt {
  color: #1c68a2;
  text-indent: 0.5em;
  font-weight: 600;
}
</style>
