<template>
  <div>
    <div>
      <img :src="dataUrl" class="qrimg">
    </div>
    <span class="txt">请使用微信扫码登录</span>
  </div>
</template>

<script>
import Vue from 'vue';
import QRCode from 'qrcode';
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapActions } = createNamespacedHelpers('login');

export default {
  name: 'QrcodePod',
  data() {
    return {
      dataUrl: null,
    };
  },
  async mounted() {
    await this.initQrcode();
  },
  computed: {
    ...mapState(['qrcode']),
  },
  methods: {
    ...mapActions({
      createQrcode: 'qrcode',
      fetchToken: 'fetchToken',
    }),
    async onMessage(message) {
      if (message.body == 'scaned') {
        try {
          const res = await this.fetchToken({
            qrcode: this.qrcode,
          });
          if(this.$checkRes(res, '扫码登录成功')) {
            this.$emit('scaned');
          }
        } catch (err) {
          this.$message({
            type: 'error',
            message: err.message || '扫码登录失败',
            duration: 1000,
          });
          console.error(err);
        }
      }
    },
    async initQrcode() {
      // 创建二维码
      await this.createQrcode();
      let uri = `${Vue.config.weixin.baseUrl}/qrcode/${this.qrcode}/scan`;
      if (uri.startsWith('/')) {
        uri = `${location.protocol}//${location.host}${uri}`;
      }
      this.dataUrl = await QRCode.toDataURL(uri);
      this.$stomp({
        [`/exchange/qrcode.login/${this.qrcode}`]: this.onMessage,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.txt {
  color: #1e649f;
  line-height: 3em;
  width: 100%;
  text-align: center;
}
.qrimg {
  width: 70%;
  margin: 0 auto;
}
</style>
