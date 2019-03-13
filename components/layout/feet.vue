<template>
  <div class="box">
    <div class="txtbox">
      <div class="abox">
        <a href="/www/">首页</a>
        <a href="/www/service/guide">就业服务</a>
        <a href="/www/news/focus">新闻公告</a>
        <a href="/www/jobs/jobinfo">招聘信息</a>
        <a href="/www/about/contact">联系我们</a>
      </div>
      <div class="fj">
        <p class>{{config && config.copyright}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  computed: {
    ...mapGetters(["config"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  background:linear-gradient(#0196c3, #1d66a0);;
  width: 100%;
  padding: 3% 0;
  color: #aecce3
}
.txtbox {
  width: 1200px;
  margin: 0 auto;
}
.abox {
  text-align: center;
  width: 100%;
}
a {
  color: #aecce3;
  width: 8%;
  cursor: pointer;
  display: inline-block;
}
.fj {
  width: 100%;
}
p {
  line-height: 1.8em;
  text-align: center;
}
span {
  width: 100%;
  display: block;
  text-align: center;
  line-height: 1.8em;
  color: cornflowerblue;
}
.qr {
  width: 50%;
  margin: 0 auto;
}
</style>
