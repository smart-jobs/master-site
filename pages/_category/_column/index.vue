<template>
  <div class="right data">
    <div class="fj xt">
      <img src="img/x.png" class="xg left" />
      <div class="left xtxt">{{ columnName }}</div>
    </div>
    <ul>
      <li v-for="(item, index) in items" :key="index" class="fj">
        <router-link class="left" :to="item._id" append>{{ item.title }}</router-link>
        <span class="right spandata"> {{ item.meta.createdAt | time }} </span>
      </li>
    </ul>
    <el-pagination
      class="pv"
      :current-page.sync="page"
      :page-size="pagesize"
      layout="prev, pager, next, jumper"
      :total="total"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import { createNamespacedHelpers, mapState } from 'vuex';

const { mapActions, mapState: newsState } = createNamespacedHelpers('news');

export default {
  data() {
    return {
      page: 1, // 页数
      pagesize: 20, // 条数
    };
  },
  mounted() {
    this.query({ page: this.page, pagesize: this.pagesize, column: this.column });
  },
  methods: {
    ...mapActions(['query']),
    handleCurrentChange(val) {
      this.query({ page: val, pagesize: this.pagesize, column: this.column });
    },
  },
  computed: {
    ...newsState(['items', 'total']),
    ...mapState(['column', 'menus']),
    columnName() {
      // 通过Menu查找栏目名称
      const menu = this.menus.find(p => (p.key == this.column));
      return menu && menu.label;
    },
  },
  filters: {
    time: function(val) {
      let a = val.slice(0, 10);
      return a;
    },
  },
}; // l轮播图宽度为424
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '~@/assets/secondary.less';
</style>
