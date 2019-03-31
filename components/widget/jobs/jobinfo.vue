<template>
  <div>
    <div class="main">
      <div class="mbox left fj" v-for="(item,index) in tops" :key="index" @click="btn(item)" :class="{xbox:(index%2) == 0}">
        <div class="imgbox left">
          <img src="/www/img/logox.png" class="bj">
        </div>
        <div class="txtbox left">
          <p class="title">{{item.title || item.subject}}</p>
          <p class="txt">{{item.corpname}}</p>
        </div>
        <div class="data right">
          <span>{{item.meta.createdAt | date}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { createNamespacedHelpers } from 'vuex'

const { mapActions, mapState } = createNamespacedHelpers('jobs/jobinfo');

export default {
  name: 'TabItemJobinfo',
  data() {
    return {
    }
  },
  methods: {
    ...mapActions(['top']),
    btn (item) {
      location.href = `http://${item.unit}.smart.jilinjobswx.cn/www/jobs/jobinfo/${item._id}`;
    }
  },
  mounted() {
    this.top({ size: 6 });
  },
  computed: {
    ...mapState(['tops']),
  },
  filters: {
    date: function (value) {
      if(value)
        return moment(value).format('YYYY-MM-DD');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '~@/assets/widget.less';
</style>
