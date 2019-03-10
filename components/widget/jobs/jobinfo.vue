<template>
  <div>
    <div class="main">
      <div class="mbox fd1 fj" v-for="(item,index) in tops" :key="index" @click="btn(item)">
        <div class="imgbox fd1">
          <img src="/www/img/logox.jpg" class="bj">
        </div>
        <div class="txtbox fd1">
          <p class="title">{{item.title || item.subject}}</p>
          <p class="txt">{{item.corpname}}</p>
        </div>
        <div class="data fd2">
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
