<template>
  <div class="fd2 data">
    <ul>
      <li v-for="(item, index) in list" :key="index" class="fj">
        <a class="fd1" @click="Obtain(index)"> {{ item.txt }} </a>
        <span class="fd2 spandata"> {{ item.data }}
        </span>
      </li>
    </ul>
    <el-pagination class="pv" :current-page.sync="page" :page-size="pagesize" layout="prev, pager, next, jumper" :total="total"
                   @current-change="handleCurrentChange" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1, // 页数
      pagesize: 10, // 条数
      total: 100, // 总数
      list: [
        // 数据
        {
          txt: '网上创业能复制吗？给大学生创业的6点建议',
          data: '2016-04-10',
          id: '1',
        },
        {
          txt: '网上创业能复制吗？给大学生创业的6点建议',
          data: '2016-04-10',
          id: '2',
        },
        {
          txt: '网上创业能复制吗？给大学生创业的6点建议',
          data: '2016-04-10',
          id: '3',
        },
        {
          txt: '网上创业能复制吗？给大学生创业的6点建议',
          data: '2016-04-10',
          id: '4',
        },
        {
          txt: '网上创业能复制吗？给大学生创业的6点建议',
          data: '2016-04-10',
          id: '5',
        },
        {
          txt: '网上创业能复制吗？给大学生创业的6点建议',
          data: '2016-04-10',
          id: '6',
        },
        {
          txt: '网上创业能复制吗？给大学生创业的6点建议',
          data: '2016-04-10',
          id: '7',
        },
        {
          txt: '网上创业能复制吗？给大学生创业的6点建议',
          data: '2016-04-10',
          id: '8',
        },
        {
          txt: '网上创业能复制吗？给大学生创业的6点建议',
          data: '2016-04-10',
          id: '9',
        },
        {
          txt: '网上创业能复制吗？给大学生创业的6点建议',
          data: '2016-04-10',
          id: '10',
        },
      ],
    };
  },
  mounted() {
  },
  methods: {
    handleCurrentChange(val) {
    },
    Obtain(index) {
    },
  },
}; // l轮播图宽度为424
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '~@/assets/secondary.less';
</style>
