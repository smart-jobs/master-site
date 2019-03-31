<template>
  <div class="right data">
    <ul>
      <li class="fj" v-for="(item,index) in items" :key="index" @click="Obtain(item)">
        <div class="left fj txtbox">
          <img src="/www/img/logox.png" class="img left">
          <div class="left titbox">
            <a @click="Obtain(index)">{{item.title}}</a>
            <p>工作性质：{{item.nature.name}}</p>
            <p>需求人数：{{item.count}}</p>
            <p>所在城市：{{item.city.name}}</p>
          </div>
          <div class="left titbox">
            <br>
            <p>薪资待遇：{{item.salary.name}}</p>
            <p>最低学历：{{item.xlreqs.name}}</p>
          </div>
        </div>
        <span class="right spandata">{{item.meta.updatedAt | date('YYYY-MM-DD')}}</span>
      </li>
    </ul>
    <el-pagination class="pv" @current-change="handleCurrentChange" :current-page.sync="page" :page-size="size"
                   layout="prev, pager, next, jumper" :total="total">
    </el-pagination>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapActions, mapState } = createNamespacedHelpers('jobs/jobinfo');

export default {
  name: 'TabItemJobinfo',
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
      location.href = `http://${item.unit}.smart.jilinjobswx.cn/www/jobs/jobinfo/${item._id}`;
    },
  },
  mounted() {
    this.query({ paging: { page: this.page, size: this.size } });
  },
  computed: {
    ...mapState(['items','total']),
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '~@/assets/jobs.less';
.titbox {
  width: 45%;
}
</style>
