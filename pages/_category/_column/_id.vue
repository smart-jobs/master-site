<template>
  <div class="right data">
    <loading v-if="loading"/>
    <section class="main" v-else>
      <div class="top">
        <h1 class="title">{{ currents && currents.title }}</h1>
        <p class="desc">
          <span>发布单位：{{currents && currents.issuer}}</span>
          <span> 发布时间：{{currents && currents.meta.updatedAt | date}}</span>
        </p>
      </div>
      <div class="fj">
        <div class="right bq" v-for="(item,index) in currents && currents.tags" :key="index">{{item}}</div>
      </div>
      <div class="content" v-html="currents && currents.content"></div>
      <div class="fj">
        <div class="left lj" v-for="(item,index) in currents && currents.attachment" :key="index" @click="hre(item)">
          <img src="img/q.png" class="q left">
          <span class="name">{{item.name}}</span>
        </div>
      </div>
      <br>
    </section>
  </div>
</template>

<script>
import moment from 'moment';
import { createNamespacedHelpers } from "vuex";
import Loading from '@components/utils/loading';

const { mapState, mapActions } = createNamespacedHelpers("news");
export default {
  // async asyncData({ store, params }) {
  //   console.log(params);
  //   const res = await store.dispatch('news/fetch', { id: params.id })
  //   return { currents: res.data };
  // },
  components: {
    Loading,
  },
  data() {
    return {
      loading: true,
    };
  },
  async mounted() {
    let id = this.$route.params.id;
    await this.fetch({ id: id });
    this.loading = false;
  },
  methods: {
    ...mapActions(['fetch']),
    hre (item) {
      location.href = item.uri
    }
  },
  computed: {
    ...mapState(["currents"])
  },
  filters: {
    date: function(val) {
      if(val) return moment(val).format('YYYY-MM-DD hh:mm:ss');
      return '';
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "~@/assets/secondary.less";
.main {
  padding: 10px 20px;
  .top {
    width: 100%;
    padding-bottom: 1em;
    border-bottom: 1px solid #ddd;
  }
  .title {
    text-align: center;
    font-size: 1.5em;
    padding: 10px 20px;
    color: #1c68a2;
  }
  .content {
    margin-top: 20px;
    text-indent: 2em;
    padding-bottom: 1em;
    border-bottom: 1px solid #ddd;
  }
  .desc {
    text-align: center;
    font-size: .9em;
    color: gray;
    span { display: inline-block };
  }
  .bq {
    width: 3.5em;
    background: #1c68a2;
    text-align: center;
    color: #fff;
    border-radius: 5px;
    margin: 1em 0.5em;
    font-size: 0.8em;
    padding: 5px 5px 5px 5px;
  }
  .lj{width: 15%;border: 1px solid #ddd;border-radius: 5px;margin: 1em 0.5em;height: 2em;}
  .q{width: 15%;margin: 5%}
  .name{width: 75%;color: #1c68a2;overflow: hidden;height: 100%;line-height: 2em;white-space: nowrap;text-overflow: ellipsis;}
}
</style>
