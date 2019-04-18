<template>
  <div class="right data">
    <ul>
      <li class="fj" v-for="(item,index) in items" :key="index" @click="Obtain(item)">
        <div class="left fj txtbox">
          <img src="/www/img/logo2.png" class="img left">
          <div class="left titbox">
            <a>{{item.subject}}</a>
            <p>举办时间：{{item.date}} {{item.time}}</p>
            <p>举办地址：{{item.address}}</p>
            <p>举办高校：{{item.unit|dict('unit')}}</p>
          </div>
        </div>
      </li>
    </ul>
    <el-pagination class="pv" @current-change="handleCurrentChange" :current-page.sync="page" :page-size="size" layout="prev, pager, next, jumper"
                   :total="total">
    </el-pagination>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapActions, mapState } = createNamespacedHelpers('jobs/jobfair');
export default {
  name: 'TabItemJobfair',
  data() {
    return {
      page: 1, // 页数
      size: 10, // 条数
    };
  },
  methods: {
    ...mapActions(['query']),
    handleCurrentChange(val) {
      this.page = val
      this.query({ paging: { page: val, size: this.size } });
    },
    Obtain(item) {
      //跳转地址  前面取分站信息  后面写id
      location.href = `http://${item.unit}.smart.jilinjobswx.cn/www/jobs/jobfair/${item._id}`;
    },
  },
  async mounted() {
    await this.$loadDict('unit');
    await this.query({ paging: { page: this.page, size: this.size } });
  },
  computed: {
    ...mapState(['items','total']),
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '~@/assets/jobs.less';
</style>
