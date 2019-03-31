<template>
  <div class="boxone">
    <div class="fj xt">
        <img src="img/x.png" class="xg left">
        <div class="left xtxt">高校分站列表</div>
      </div>
      <br>
    <div class="main">
      <a v-for="(item, index) in lists" :key="index" :href="'http://' + item.domain">{{ item && item.name }}</a>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapActions, mapState } = createNamespacedHelpers('news');
export default {
  name: 'website_list',
  data() {
    return {};
  },
  methods: {
    ...mapActions(['list']),
  },
  mounted() {
    this.list();
  },
  computed: {
    ...mapState(['lists']),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '~@/assets/jobs.less';
.main {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: 65vh;
  background: url('../static/img/bj.png') no-repeat;
  background-size:100%;
  // background-attachment:fixed;
  overflow-y: auto;
}
a {
  height: 2.5em;
  line-height: 2.5em;
  width: 16%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: inline-block;
  margin: 0.5em 2%;
  font-size: 1.2em;
  font-weight: 600;
  text-align: center;
  border-bottom:1px dashed #999; 
}
.xt{width: 100%;margin: 0 auto;border-bottom:1px solid #dddddd;}
.xtxt{text-indent: 1em;color: #1e649f;line-height: 2.5em;font-size: 1.1em;font-weight: 600}
.xg{margin-top: 1%}
</style>
