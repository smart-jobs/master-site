<template>
  <div>
    <div class="main">
      <div class="m2box" v-for="(item,index) in tops" :key="index" @click="btn(item)">
        <div class="txtbox2 fd1">
          <p class="txt2">招聘会</p>
        </div>
        <div class="fd1 titlebox">
          <div class="title title2">{{item.subject}}</div>
          <p class="p">分站信息：{{item.unit}}</p>
        </div>
        <div class="fd1 right2">{{item.meta.createdAt | date}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { createNamespacedHelpers } from 'vuex'
const { mapActions, mapState } = createNamespacedHelpers('jobs/jobfair');
export default {
  name: 'TabItemJobfair',
  data() {
    return {
    }
  },
  methods: {
    ...mapActions(['top']),
    btn (item) {
      location.href = `http://${item.unit}.smart.jilinjobswx.cn/www/jobs/jobfair/${item._id}`;
    }
  },
  mounted() {
   this.top({ size: 2 });
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
