<template>
  <div>
    <div class="box">
      <img :src="bj1" class="bj">
      <img :src="bj2" v-if="logo2 == null" class="bottom">
      <img :src="bj2" v-else class="bottom">
    </div>
    <div class="logobox">
      <div class="logo" v-if="logo2 == null">{{config && config.name}}</div>
      <img :src="logo2" v-else class="logo">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'home',
  data() {
    return {
      bj1: '/www/img/1477572201-3251.jpg',
      bj2: '/www/img/bg-shade.png',
      logo2: null
    }
  },
  methods: {
  },
  mounted() {
  },
  computed: {
    ...mapGetters(['config'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  min-width: 1200px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}
.bj {
  width: 100%;
}
.bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 200px;
  width: 100%;
}
.logobox {
  width: 1200px;
  position: relative;
  margin: 50px auto;
  font-size: 3em;
  font-family:'楷体';
}
</style>
