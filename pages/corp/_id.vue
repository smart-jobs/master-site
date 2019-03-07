<template>
  <div class="corp_list">
    <p class="title">企业名称：{{details && details.corpname}}</p>
    <p class="text">法人代表：{{details | get('info.legalPerson')}}</p>
    <p class="text">企业规模：{{details | get('info.scale.name')}}</p>
    <p class="text">企业行业：{{details | get('info.industry.name')}}</p>
    <p class="text">企业性质：{{details | get('info.nature.name')}}</p>
    <p class="text">企业地址：{{details | get('info.city.name')}}</p>
    <p class="text">企业邮箱：{{details | get('contact.email')}}</p>
    <p class="text">联系电话：{{details | get('contact.mobile')}}</p>
    <p class="text">固定电话：{{details | get('contact.phone')}}</p>
    <p class="text">注册资金：{{details | get('info.registerMoney')}}</p>
    <p class="text">注册时间：{{details | get('info.registerTime')}}</p>
    <p class="text">组织机构代码：{{details | get('info.corpcode')}}</p>
    <p class="text">组织机构代码类型：{{details | corp}}</p>
    <pre class="text">企业详情：{{details && details.description}}</pre>
  </div>
</template>

<script>
// 企业详情
import { createNamespacedHelpers } from 'vuex';
import _ from 'lodash'
const { mapActions, mapState } = createNamespacedHelpers('corp/query');

export default {
  name: 'corp_list',
  data() {
    return {};
  },
  methods: {
    ...mapActions(['detailsy']),
  },
  mounted() {
    let id = this.$route.params.id;
    let tenant = this.$route.query.tenant;
    this.detailsy({ id, tenant});
  },
  computed: {
    ...mapState(['details']),
  },
  filters: {
    corp: function (val) {
      if (val !== null) {
        if (val.info.corptype == '0') {
          return '统一社会信用代码'
        }else{
          return '单位组织机构代码'
        }
      }else{
        return ''
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.corp_list{position: relative;width: 1200px;margin: 6em auto;}
.title {
  font-size: 1.2em;
  font-weight: 600;
  line-height: 3em;
}
.text {
  line-height: 2.5rem;
  border-bottom: 1px solid #dbdbdb;
}
</style>
