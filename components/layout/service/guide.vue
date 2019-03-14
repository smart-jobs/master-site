<template>
  <div class="box">
    <div class="txtbox">
      <div class="fj titlebox">
        <div class="fd1 title">
          <img src="img/x.png" class="fd1 g">
          <em class="fd1 txt">就业指导</em>
        </div>
        <div class="fd2 txt" @click="all">更多>></div>
      </div>
      <ul class="ul">
        <li
          v-for="(item,index) in itema"
          :key="index"
          class="fj"
          @click="btn(item)"
          @mouseenter="enter(index)"
        >
          <span class="txt2 fd1" :class="{txt3:index == idx}">{{item.title}}</span>
          <a class="fd2 time" :class="{txt3:index == idx}">{{item.meta.createdAt | time}}</a>
        </li>
      </ul>
    </div>
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
      pagesize: 4, // 条数
      itema: null,
      idx:''
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
      location.href = '/www/service/guide/'+id
    },
    all() {
      location.href = "/www/service/guide";
    },
    enter(idx) {
      this.idx = idx;
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
.box {
  width: 340px;
}
.titlebox {
  border-bottom: 1px solid #ddd;
}
.title {
  display: inline-block;
  font-size: 16px;
  vertical-align: middle;
  position: relative;
  margin-bottom: -1px;
  padding: 0 0 8px;
  font-weight: 700;
}
.txtbox {
  width: 90%;
  margin: 0 auto;
  line-height: 3em;
  overflow: hidden;
}
.icon {
  display: inline;
}
.titlebox {
  border-bottom: 1px solid #ddd;
}
.txt {
  color: #aaaaaa;
  position: relative;
  line-height: 3em;
  height: 3em;
  top: 0;
  right: 0;
  z-index: 5;
  cursor: pointer;
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
  color: #333;
}
.txt3 {
  color: #ff9000;
}
li {
  cursor: pointer;
  display: block;
  line-height: 30px;
  padding: 10px 0 9px 0px;
  border-bottom: 1px dashed #ddd;
}
a {
  cursor: pointer;
}
.title .g {
  margin-top: 20%;
}
.title .txt {
  color: #1c68a2;
  text-indent: 0.5em;
  font-weight: 600;
}
</style>
