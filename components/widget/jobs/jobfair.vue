<template>
  <div>
    <div class="main">
      <div class="m2box" v-for="(item, index) in tops" :key="index" @click="btn(item)" :class="{ xbox: index % 2 == 0 }">
        <div class="txtbox2 left">
          <img src="/www/img/logo2.png" class="bj" />
        </div>
        <div class="left titlebox">
          <div class="title title2">{{ item.subject }}</div>
          <p class="p">举办高校：{{ item.unit | dict('unit') }}</p>
        </div>
        <div class="left right2">{{ item.meta.createdAt | date }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { createNamespacedHelpers } from 'vuex';
const { mapActions, mapState } = createNamespacedHelpers('jobs/jobfair');
export default {
  name: 'TabItemJobfair',
  methods: {
    ...mapActions(['top']),
    btn(item) {
      location.href = `http://${item.unit}.smart.jilinjobswx.cn/www/jobs/jobfair/${item._id}`;
    },
  },
  async mounted() {
    await this.$loadDict('unit');
    await this.top({ size: 2 });
  },
  computed: {
    ...mapState(['tops']),
  },
  filters: {
    date: function(value) {
      if (value) return moment(value).format('YYYY-MM-DD');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '~@/assets/widget.less';
</style>
