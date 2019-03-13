<template>
  <div class="box">
    <div class="txtbox">
      <div class="fj btnbox">
        <div
          class="btn fd1"
          v-for="(item,index) in tabs"
          :key="index"
          :class="{btnx:index == key}"
          @click="btnshow(item)"
        >{{item.label}}</div>
      </div>
      <faq v-show="link == 'faq'"/>
      <guide v-show="link == 'guide'"/>
      <policy v-show="link == 'policy'"/>
    </div>
  </div>
</template>

<script>
import faq from "./faq";
import guide from "./guide";
import policy from "./policy";
export default {
  name: 'Journalism',
  components: {
    faq,
    guide,
    policy
  },
  data() {
    return {
      key: 0,
      link: "guide",
      page: 1, // 页数
      pagesize: 5, // 条数
      tabs: [
        {
          label: "就业指导",
          link: "guide",
          key: 0
        },
        {
          label: "政策文件",
          link: "policy",
          key: 1
        },
        {
          label: "常见问题",
          link: "faq",
          key: 2
        }
      ]
    };
  },
  mounted() {
  },
  methods: {
    btnshow(item) {
      this.key = item.key;
      this.link = item.link;
    },
  },
  computed: {
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
  height: 370px;
  width: 340px;
  border: 1px solid rgb(196, 196, 196);
}
.txtbox {
  width: 100%;
  margin: 0 auto;
  line-height: 3em;
  overflow: hidden;
}
.title {
  border-bottom: 2px solid #1e649f;
  display: inline-block;
  font-size: 16px;
  vertical-align: middle;
  position: relative;
  margin-bottom: -1px;
  padding: 0 0 8px;
  font-weight: 700;
}
.btn {
  cursor:pointer;
  width: 33.4%;
  text-align: center;
  font-size: 1em;
  font-weight: 600;
  line-height: 2.5em;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
.btnx {
  border-bottom: 1px solid #fff;
  color: #60b0f4;
}
.btnbox {
  width: 100%;
  border-left: 1px solid #ddd;
  display: flex;
}
</style>
