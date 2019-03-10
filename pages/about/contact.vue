<template>
  <div class="box">
    <span class="title">联系我们</span>
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
<style scoped>
.box {
  position: relative;
  z-index: 2;
  width: 1200px;
  padding-bottom: 2em;
  background: #f0f0f0;
  margin: 0 auto;
}
.title {
  width: 100%;
  text-align: center;
  font-size: 1.2em;
  font-weight: 700;
  line-height: 6em;
  border-bottom: 2px solid #000;
}
.main {
  padding: 2em;
}
</style>
