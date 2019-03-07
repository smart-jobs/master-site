<template>
  <div class="box">
    <div class="btn" v-for="(item,index) in menu" :key="index" :class="{a1:a1 == index}" @click="menuClick(item)"
         @mouseenter="enter1(index)" @mouseleave="leave1">
      {{item.label}}
      <div class="Submenu" v-if="item.children && item.children.length &gt; 0" v-show="a1 == index && showSub">
        <div v-for="(sub, index2) in item.children" :key="index2" @mouseenter="enter2(index2)" @mouseleave="leave2"
             :class="{a2: a2 == index2}" @click.stop="menuClick(sub)">{{sub.label}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import { mapState, createNamespacedHelpers } from 'vuex';
const { mapState: loginState } = createNamespacedHelpers('login');

export default {
  name: 'navx',
  mounted() {
    this.a1 = this.pageIndex;
  },
  data() {
    return {
      a1: -1,
      a2: -1,
      showSub: false,
      menus: [],
    };
  },
  computed: {
    ...mapState(['menu', 'page']),
    ...loginState(['userinfo']),
    pageIndex() {
      const idx = _.isArray(this.menu) && this.menu.findIndex(p => p.key === this.page);
      return idx;
    },
    role: function () {
      return this.userinfo ? this.userinfo.role : 'guest';
    },
  },
  methods: {
    // 一级菜单点击
    menuClick(item) {
      if (item && item.link) location.href = item.link;
    },
    // 移入
    enter1(index) {
      this.a1 = index;
      this.showSub = true;
    },
    enter2(index) {
      this.a2 = index;
    },
    // 移出
    leave1() {
      this.a1 = this.pageIndex;
      this.showSub = false;
    },
    leave2() {
      this.a2 = -1;
    },
    btn () {
      location.href = 'user'
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  position: relative;
  display: flex;
  background: #1e649f;
  width: 1200px;
  color: #fff;
  margin: 0 auto;
  z-index: 9;
}
.box .btn {
  min-width: 140px;
  text-align: center;
  line-height: 2.5em;
  font-size: 1.2em;
  cursor: pointer;
  position: relative;
}
.box .btn:hover {
  background: #60b0f4;
}
.a1 {
  background: #60b0f4;
}
.Submenu {
  position: absolute;
  width: 100%;
  left: 0;
  top: 100%;
  background: #60b0f4;
}
.Submenu div:hover {
  background: #1e649f;
}
.a2 {
  background: #1e649f;
}
</style>
