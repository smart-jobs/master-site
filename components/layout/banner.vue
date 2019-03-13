<template>
  <div>
    <div class="box"  v-if="logo2 == null">
      <img :src="bj1" class="bj">
      <div class="logobox">
        <div>{{config && config.name}}</div>
      </div>
    </div>
    <img v-else :src="logo2" class="box">
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'home',
  data() {
    return {
      bj1: '/www/img/banner.jpg',
      logo2: null
    }
  },
  methods: {
  },
  mounted() {
    if (this.config.banner) {
      this.logo2 = this.config.banner
    }
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
  position: relative;
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
  position: absolute;
  font-size: 3em;
  font-family:'楷体';
  left: 20%;
  top: 25%;
  color: #0b628e;
  text-shadow:2px 2px 0px #fff
}
</style>
