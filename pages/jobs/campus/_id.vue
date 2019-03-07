<template>
  <div class="details">
    <p class="title">{{currents && currents.subject}}</p>
    <p class="text">企业名称：{{currents && currents.corpname}}</p>
    <p class="text">分站信息：{{currents && currents.unit}}</p>
    <p class="text">举办时间：{{currents && currents.date+ ' '+currents.time}}</p>
    <p class="text">联系电话：{{currents && currents.contact}}</p>
    <p class="text">电子邮箱：{{currents && currents.email}}</p>
    <p class="text">举办地址：{{currents && currents.address}}</p>
    <p class="text3">温馨提示：为防讯息临时变动,参会前可联系招聘会举办方确认。</p>
    <p class="title">宣讲会详情</p>
    <pre class="text2">{{currents && currents.content}}</pre>
    <p class="title">职位详情</p>
    <div class="text2" v-for="(item,index) in currents && currents.jobs" :key="index">
      <p class="title2">职位{{index+1}}</p>
      <p class="text">招聘职位：{{item && item.name}}</p>
      <p class="text">需求人数：{{item && item.count}}</p>
      <p class="text">职位要求：{{item && item.requirement}}</p>
      <br>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapActions, mapState } = createNamespacedHelpers('jobs/campus');

export default {
  name: 'JobinfoDetail',
  data() {
    return {};
  },
  methods: {
    ...mapActions(['fetch']),
  },
  mounted() {
    let id = this.$route.params.id;
    this.fetch({ id });
  },
  computed: {
    ...mapState(['currents']),
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.title {
  font-size: 1.2em;
  font-weight: 600;
  line-height: 3em;
}
.title2 {
  font-size: 1em;
  font-weight: 600;
  line-height: 3em;
}
.text {
  line-height: 2.5rem;
  border-bottom: 1px solid #dbdbdb;
}
.text2 {
  margin-top: 1em;
  line-height: 2rem;
}
.text3{color: #ff9913;line-height: 5em}
</style>
