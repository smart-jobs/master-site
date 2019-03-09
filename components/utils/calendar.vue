<template>
  <div class="box">
    <div class="fj btnbox">
      <img src="/img/web_icon_left_dis.png" class="left fd1" @click="up">
      <div class="fd1 data">
        <p>招聘日历</p>
        {{this.y}}年{{this.m+1}}月
      </div>
      <img src="/img/web_icon_right_dis.png" class="right fd2" @click="dw">
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
        class="fd1 yuan"
        :class="{a1:item[0] == '今',a2:item[0] == '聘' || item[0] == '宣'}"
        v-for="(item,index) in this.arr"
        :key="index"
      >{{item[0]}}</span>
      <!-- @mouseenter="enter(item[0])" -->
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapActions } = createNamespacedHelpers("jobs/jobfair");
const { mapActions:campusactions } = createNamespacedHelpers("jobs/campus");
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
    ...campusactions(['calendar2']),
    Obtain() {
      let x = new Date(this.y, this.m + 1, 0);
      this.k = x.getDate(); // 所有日
      this.arr = [];
      for (let i = 1; i <= this.k; i++) {
        let z = this.date.setFullYear(this.y, this.m, i); // 星期
        let w = this.date.getDay(); // 星期几
        this.arr.push([i, w, i]);
        if (i == this.k) {
          let num = Number(this.arr[0][1]);
          for (let z = 0; z < this.arr.length; z++) {
            if (
              this.d == this.arr[z][0] &&
              this.m2 == this.m &&
              this.y2 == this.y
            ) {
              this.arr[z][0] = "今";
            }
          }
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
    },
    // enter(number) {
    //   for (let i = 0; i < this.data.length; i++) {
    //     if (number == this.data[i].datanum) {
    //       this.txt = this.data[i].txt;
    //     }
    //   }
    // }
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
  height: 380px;
  border: 1px solid #ddd;
}
.left,
.right {
  width: 10%;
}
.btnbox {
  width: 90%;
  margin: 5% auto;
}
.data {
  width: 80%;
  text-align: center;
  font-size: 1.2em;
  font-weight: 700;
}
.week {
  width: 100%;
  display: flex;
  background: #60b0f4;
  color: #fff;
  font-size: 1.2em;
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
  color: #999;
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
.a1 {
  background: #60b0f4;
  color: #fff;
}
.a2 {
  color: #fff;
  background: #00d30b;
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
</style>
