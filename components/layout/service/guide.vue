<template>
  <div class="">
      <ul class="ul">
        <li v-for="(item,index) in itema" :key="index" class="fj" @click="btn(item)">
          <span class="txt2 fd1">{{item.title}}</span>
          <a class="fd2 time">{{item.meta.createdAt | time}}</a>
        </li>
      </ul>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapActions } = createNamespacedHelpers('news');
export default {
  name: 'Journalism',
  data() {
    return {
      page: 1, // 页数
      pagesize: 6, // 条数
      itema: null
    };
  },
  async mounted() {
    const res = await this.query2({page:this.page,pagesize:this.pagesize,column:'guide'})
    if (this.$checkRes(res)) {
        this.itema = res.data
    }
  },
  methods: {
    ...mapActions(['query2']),
    btn (item) {
      let id = item._id
      location.href = '/service/guide/'+id
    }
  },
  filters: {
    time: function (val){
      let a = val.slice(0,10)
      return a
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ul {
  margin: 10px auto;
  width: 90%;
  margin: 0 auto
}
.time {
  width: 50%;
  text-align: right;
}
.txt2 {
  width: 50%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
li {
  cursor: pointer;
  display: block;
  line-height: 30px;
  padding: 10px 0 9px 0px;
  border-bottom: 1px dashed #ddd;
  color: #60b0f4;
}
a {
  cursor: pointer;
}
li a:hover {
  color: #60b0f4;
}
</style>
