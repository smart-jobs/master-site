<template>
  <div class="fd2 data">
    <ul>
      <li class="fj" v-for="(item,index) in items" :key="index" @click="Obtain(index)">
        <div class="fd1 fj txtbox">
          <img src="/www/img/logox.jpg" class="img fd1">
          <div class="fd1 titbox">
            <a @click="Obtain(index)">{{item.title}}</a>
            <p>工作性质：{{item.nature.name}}</p>
            <p>需求人数：{{item.count}}</p>
            <p>所在城市：{{item.city.name}}</p>
          </div>
          <div class="fd1 titbox">
            <br>
            <p>薪资待遇：{{item.salary.name}}</p>
            <p>最低学历：{{item.xlreqs.name}}</p>
          </div>
        </div>
        <span class="fd2 spandata">{{item.meta.updatedAt | date('YYYY-MM-DD')}}</span>
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
    Obtain(index) {
      let _id = this.items[index]._id;
      //跳转地址  前面取分站信息  后面写id
      location.href = 'http://www.baidu.com'
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
