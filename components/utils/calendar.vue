<template>
  <div>
    <p class="title fj">
      <img src="img/x.png" class="left g" />
      <span class="left txt">招聘日历</span>
    </p>
    <div class="box">
      <div class="fj btnbox">
        <img src="/www/img/web_icon_left_dis.png" class="dis left" @click="up" />
        <div class="left data">{{ this.cal.format('YYYY/M') }}</div>
        <img src="/www/img/web_icon_right_dis.png" class="dis right" @click="dw" />
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
        <span class="left yuan" v-for="(item, index) in padding" :key="'pad_' + index"></span>
        <template v-for="(item, index) in dates">
          <span class="left yuan a2" :key="index" v-if="items_fair[index]">
            <el-tooltip :content="items_fair[index].subject" effect="light"><span class="inner">聘</span></el-tooltip>
          </span>
          <span class="left yuan a2" :key="index" v-else-if="items_campus[index]">
            <el-tooltip :content="items_campus[index].subject" effect="light"><span class="inner">宣</span></el-tooltip>
          </span>
          <span class="left yuan" :key="index" v-else>{{ index + 1 }}</span>
        </template>
        <!-- <span class="left yuan" :class="{ a2: item[0] == '聘' || item[0] == '宣' }" v-for="(item, index) in this.arr" :key="index">{{ item[0] }}</span> -->
        <!-- @mouseenter="enter(item[0])" -->
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import moment from 'moment';

const { mapActions: fairActions } = createNamespacedHelpers('jobs/jobfair');
const { mapActions: campusActions } = createNamespacedHelpers('jobs/campus');
export default {
  name: 'Calendar',
  data() {
    return {
      items_fair: [],
      items_campus: [],
      cal: moment(),
    };
  },
  methods: {
    ...fairActions({
      cal_fair: 'calendar',
    }),
    ...campusActions({
      cal_campus: 'calendar',
    }),
    async fetchData(month) {
      this.items_fair = [];
      this.items_campus = [];
      let res = await this.cal_fair({ month });
      if (!this.$checkRes(res)) return;
      this.items_fair = res.data;
      res = await this.cal_campus({ month });
      if (!this.$checkRes(res)) return;
      this.items_campus = res.data;
    },
    up() {
      this.cal = moment(this.cal).subtract(1, 'month');
    },
    dw() {
      this.cal = moment(this.cal).add(1, 'month');
    },
  },
  mounted() {
    this.fetchData(this.cal.format('YYYY-MM'));
  },
  watch: {
    cal() {
      this.fetchData(this.cal.format('YYYY-MM'));
    },
  },
  computed: {
    padding() {
      const len = moment(this.cal)
        .date(1)
        .day();
      return new Array(len);
    },
    dates() {
      // 取当月最后一天
      const len = moment(this.cal)
        .add(1, 'month')
        .date(1)
        .subtract(1, 'days')
        .date();
      return new Array(len);
    },
    dates_fair() {
      return this.items_fair.reduce((p, c) => {
        p[moment(c.date).date()] = c;
        return p;
      }, []);
    },
    dates_campus() {
      return this.items_campus.reduce((p, c) => {
        p[moment(c.date).date()] = c;
        return p;
      }, []);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  width: 340px;
  height: 340px;
  border: 1px solid #ddd;
  border-radius: 4px;
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
  border-radius: 4px;
}
.title .g {
  margin-top: 2%;
  margin-left: 1em;
}
.title .txt {
  color: #1c68a2;
  text-indent: 0.5em;
  font-weight: 600;
}
span.inner {
  display: inline;
}
</style>
