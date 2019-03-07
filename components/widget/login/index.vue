<template>
  <div class="box">
    <div class="titlebox">
      <div class="title a">
        微信登录
      </div>
    </div>
    <div class="loading" v-show="loading"><span>正在加载，请稍候...</span></div>
    <div v-show="!loading">
      <Qrcode v-show="userinfo == null"></Qrcode>
      <div class="buttonbox" v-show="userinfo && userinfo.role == 'guest'">
        <div class="row">
          <el-button type="primary">学生入口</el-button>
        </div>
        <div class="row">
          <el-button type="primary">企业入口</el-button>
        </div>
      </div>
      <div class="buttonbox" v-show="userinfo && userinfo.role !== 'guest'">
        <div class="row">
          <img src="@/static/img/logok.png" class="bj" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import Qrcode from './qrcode';

const { mapState, mapActions } = createNamespacedHelpers('login');

export default {
  name: 'LoginWidget',
  components: {
    Qrcode,
  },
  data() {
    return {
      dataUrl: null,
    };
  },
  computed: {
    ...mapState(['loading', 'userinfo']),
  },
  methods: {
    ...mapActions({
      login: 'login',
    }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.box {
  width: 340px;
  border: 1px solid rgb(196, 196, 196);
}
.box > div {
  width: 100%;
}
/* .titlebox{border-bottom: 1px solid #ddd} */
.title {
  font-size: 16px;
  vertical-align: middle;
  position: relative;
  font-weight: 700;
  text-align: center;
  width: 100%;
  background: #1e649f;
  color: #fff;
  line-height: 2.5em;
}
.loading {
  margin: 0 auto;
  text-align: center;
  padding: 20px;
}
.buttonbox {
  margin: 0 auto;
  text-align: center;
  padding: 20px;
  .el-button {
    width: 70%;
  }
  .row {
    padding: 20px;
  }
}
.bj {
  width: 50%;
  margin: 0 auto;
}
</style>
