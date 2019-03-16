<template>
  <div class="fd2 data">
    <section class="main">
      <div class="top">
        <h1 class="title">{{ currents && currents.title }}</h1>
        <span
          class="txt"
        >发布单位：{{currents && currents.issuer}}； 发布时间：{{currents && currents.meta.updatedAt | data}}；</span>
        <br>
      </div>
      <div class="fj">
        <div class="fd2 bq" v-for="(item,index) in currents && currents.tags" :key="index">{{item}}</div>
      </div>
      <div class="content" v-html="currents && currents.content"></div>
      <div class="fj">
        <div class="fd1 lj" v-for="(item,index) in currents && currents.attachment" :key="index" @click="hre(item)">
          <img src="img/q.png" class="q fd1">
          <span class="name">{{item.name}}</span>
        </div>
      </div>
      <br>
    </section>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapActions, mapState } = createNamespacedHelpers("news");
export default {
  data() {
    return {};
  },
  mounted() {
    let id = this.$route.params.id;
    this.fetch({ id: id });
  },
  methods: {
    ...mapActions(["fetch"]),
    hre (item) {
      location.href = item.uri
    }
  },
  computed: {
    ...mapState(["currents"])
  },
  filters: {
    data: function(val) {
      if (val !== null) {
        let date = new Date(val);
        let n = date.getFullYear();
        let y = date.getMonth() + 1;
        let t = date.getDate();
        let h = date.getHours();
        let f = date.getMinutes();
        if (y < 10) {
          y = '0'+y
        }
        if (t < 10) {
          t = '0'+t
        }
        if (h < 10) {
          h = '0'+h
        }
         if (f < 10) {
          f = '0'+f
        }
        return n + "-" + y + "-" + t + " " + h + ":" + f;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "~@/assets/secondary.less";
.main {
  padding: 10px 20px;
  .top {
    width: 100%;
    border-bottom: 1px solid #ddd;
  }
  .title {
    text-align: center;
    font-size: 1.5em;
    padding: 10px 20px;
    color: #1c68a2;
  }
  .content {
    margin-top: 20px;
    text-indent: 2em;
    padding-bottom: 1em;
    border-bottom: 1px solid #ddd;
  }
  .txt {
    text-align: center;
  }
  .bq {
    width: 3.5em;
    background: #1c68a2;
    text-align: center;
    color: #fff;
    border-radius: 5px;
    margin: 1em 0.5em;
    font-size: 0.8em;
    padding: 5px 5px 5px 5px;
  }
  .lj{width: 15%;border: 1px solid #ddd;border-radius: 5px;margin: 1em 0.5em;height: 2em;}
  .q{width: 15%;margin: 5%}
  .name{width: 75%;color: #1c68a2;overflow: hidden;height: 100%;line-height: 2em;white-space: nowrap;text-overflow: ellipsis;}
}
</style>
