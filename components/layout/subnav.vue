<template>
  <div class="fd1 tab">
    <div class="tabs" v-for="(item,index) in data" :key="index">
        <div class="tabx" @click="menuClick(item)" :class="{ a1: item.key == activated }">{{item.label}}</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'subnav',
  props: {
    data: { type: Array, required: true },
    activated: { type: String },
  },
  methods: {
    // 一级菜单点击
    menuClick(item) {
      if (item && item.link) location.href = item.link;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab {
  width: 25%;
  background:#ffffff;
  line-height: 3em;
  color: #000;
}
.tab .tabx {
  border: 1px solid #e9e9e9;
  border-radius:4px; 
  text-indent: 1.5em;
  cursor: pointer;
  width: 90%;
  margin: 0.5em auto;
}
.a1 {
  background: #eeeeee;
  color: #1c68a2;
}
</style>
