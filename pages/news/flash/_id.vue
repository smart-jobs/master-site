<template>
  <div class="fd2 data">
    <section class="main">
        <h1 class="title">{{ currents && currents.title }}</h1>
        <div class="content" v-html="currents && currents.content"></div>
    </section>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapActions, mapState } = createNamespacedHelpers('news');
export default {
  data() {
    return {
    };
  },
  mounted() {
      let id = this.$route.params.id
      this.fetch({id:id})
  },
  methods: {
    ...mapActions(['fetch']),
  },
  computed: {
    ...mapState(['currents']),
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '~@/assets/secondary.less';
.main {
  padding: 10px 20px;
  .title {
    text-align: center;
    font-size: 1.5em;
    padding: 10px 20px;
  }
  .content {
    margin-top: 20px;
    text-indent: 2em;
  }
}
</style>
