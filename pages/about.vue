<template>
<div class="boxone2">
  <div class="boxone fj">
    <!--二级导航菜单-->
    <sub-nav :data="columns" :activated="column" v-if="!$route.params.id"/>
    <!--页面内容-->
    <nuxt-child />
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex';
import SubNav from '@/components/layout/subnav';

export default {
  components: {
    SubNav,
  },
  computed: {
    ...mapState(['menu', 'page','column']),
    columns() {
      const data = this.menu.find(p => p.key === this.page);
      return data && data.children;
    },
  },
};
</script>

<style lang="less" scoped>
@import '~@/assets/secondary.less';
</style>