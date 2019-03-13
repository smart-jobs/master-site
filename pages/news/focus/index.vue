<template>
  <div class="fd2 data">
    <ul><br>
      <li v-for="(item, index) in items" :key="index" class="fj">
        <a class="fd1" @click="Obtain(item)"> {{ item.title }} </a>
        <span class="fd2 spandata"> {{ item.meta.createdAt | time }}
        </span>
      </li>
    </ul>
    <el-pagination class="pv" :current-page.sync="page" :page-size="pagesize" layout="prev, pager, next, jumper" :total="total"
                   @current-change="handleCurrentChange" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapActions, mapState } = createNamespacedHelpers('news');

export default {
  data() {
    return {
      page: 1, // 页数
      pagesize: 20, // 条数
    };
  },
  mounted() {
    this.query({page:this.page,pagesize:this.pagesize,column:'focus'})
  },
  methods: {
    ...mapActions(['query']),
    handleCurrentChange(val) {
      this.query({page:val,pagesize:this.pagesize,column:'focus'})
    },
    Obtain(item) {
      let _id = item._id
      this.$router.push('/news/focus/'+_id)
    },
  },
  computed: {
    ...mapState(['items','total']),
  },
  filters: {
    time: function (val){
      let a = val.slice(0,10)
      return a
    }
  }
}; // l轮播图宽度为424
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '~@/assets/secondary.less';
</style>
