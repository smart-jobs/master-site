<template>
  <div class="box">
    <div class="header fj">
      <div class="btnbox fd1">
        <div
          class="btn"
          v-for="(item,index) in tabs"
          :key="index"
          :class="{btnx:index == key}"
          @mouseenter="btnshow(item)"
        >{{item.label}}</div>
      </div>
      <div class="all fd2">
        <img src="/img/z1.jpg" class="icon fd2">
        <span class="fd2 a" @click="all">MORE</span>
      </div>
    </div>

    <tab-item-jobinfo v-show="link == 'jobinfo'"/>
    <tab-item-jobfair v-show="link == 'jobfair'"/>
    <tab-item-campus v-show="link == 'campus'"/>
  </div>
</template>

<script>
import TabItemCampus from "./campus";
import TabItemJobfair from "./jobfair";
import TabItemJobinfo from "./jobinfo";

export default {
  name: "JobsWidget",
  components: {
    TabItemCampus,
    TabItemJobfair,
    TabItemJobinfo
  },
  data() {
    return {
      key: 0,
      link: "jobinfo",
      tabs: [
        {
          label: "招聘信息",
          link: "jobinfo",
          key: 0
        },
        {
          label: "招聘会",
          link: "jobfair",
          key: 1
        },
        {
          label: "宣讲会",
          link: "campus",
          key: 2
        }
      ]
    };
  },
  methods: {
    btnshow(item) {
      this.key = item.key;
      this.link = item.link;
    },
    all() {
      location.href = "/jobs/jobinfo";
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  width: 841px;
  margin-left: 17px;
  height: 370px;
  border-top: 5px solid #60b0f4;
  border-bottom: 5px solid #60b0f4;
}
.header {
  width: 100%;
}
.btnbox {
  width: 50%;
  border-left: 1px solid #ddd;
  display: flex;
}
.btn {
  width: 33.3%;
  text-align: center;
  font-size: 1.2em;
  font-weight: 600;
  line-height: 2.5em;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
.btnx {
  border-bottom: 1px solid #fff;
  color: #60b0f4;
}
.all {
  width: 50%;
  color: #60b0f4;
  line-height: 2.5em;
  border-bottom: 1px solid #ddd;
  font-size: 1.2em;
}
.icon {
  margin-top: 4%;
  margin-left: 3%;
  margin-right: 5%;
}
.a {
  cursor: pointer;
}
</style>
