<template>
  <div class="boxone">
    <div class="main">
      <a v-for="(item, index) in lists" :key="index" :href="'http://' + item.domain">{{ item && item.name }}</a>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapActions, mapState } = createNamespacedHelpers('news');
export default {
  name: 'website_list',
  data() {
    return {};
  },
  methods: {
    ...mapActions(['list']),
  },
  mounted() {
    this.list();
  },
  computed: {
    ...mapState(['lists']),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '~@/assets/jobs.less';
.main {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
a {
  width: 20%;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: inline-block;
  margin: 0.5em 0;
  font-size: 1.2em;
  font-weight: 600;
}
</style>
