<template>
  <div>
    <div class="alert" style="display: none;" v-show="showAlert">
      <span>您使用的浏览器版本过低，可能会影响网站浏览效果，建议使用IE10以上浏览器或最新版谷歌浏览器。</span>
    </div>
    <div class="header">
      <banner />
      <navx />
    </div>
    <div class="content">
      <nuxt />
    </div>
    <div class="footer">
      <feet />
    </div>
  </div>
</template>

<script>
import banner from '~/components/layout/banner';
import navx from '~/components/layout/navx';
import feet from '~/components/layout/feet';
import { detect } from 'detect-browser';
import semver from 'semver';

export default {
  components: {
    banner,
    navx,
    feet,
  },
  data() {
    return {
      showAlert: false,
    };
  },
  mounted() {
    // 检查浏览器版本
    if (process.browser) {
      const browser = detect();
      console.log(browser);
      if(browser.name === 'ie' && semver.lt(browser.version, '10.0.0')) {
        this.showAlert = true;
        console.warn('您使用的浏览器版本过低，可能会影响网站浏览效果，请更换新版本的浏览器，建议使用最新版谷歌浏览器。')
      }
    }
  },
};
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
<style scoped>
.content {
  margin: 2em 0;
}
.content > div {
  min-height: 400px;
}

.alert {
  text-align: center;
  line-height: 24px;
  background: lightyellow;
  position: fixed;
  top: 0;
  z-index: 99999;
  width: 100%;  
}
.alert span {
  display: inline;
}
</style>
