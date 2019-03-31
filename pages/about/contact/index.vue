<template>
  <div class="data right">
    <div class="fj xt">
      <img src="img/x.png" class="xg left">
      <div class="left xtxt">联系我们</div>
    </div>
    <br>
    <section class="main">
      <div v-html="contents"></div>
    </section>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapActions, mapState } = createNamespacedHelpers('news');

export default {
  data() {
    return {};
  },
  mounted() {
    this.content();
  },
  methods: {
    ...mapActions(['content']),
  },
  computed: {
    ...mapState(['contents']),
  },
};
</script>
<style lang="less" scoped>
@import '~@/assets/secondary.less';
.main{width: 90%;margin: 0 auto}
</style>
