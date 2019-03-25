<template>
  <div>
    <div class="fj xwbox">
      <calendar class="fd1" />
      <imgs class="fd1 zon" />
    </div>
    <div class="databox fj">
      <journalism class="fd1 journalism" />
      <jobs-widget class="fd2" />
    </div>
    <div class="databox fj">
      <news-widget class="fd1 z" column="guide" label="就业指导" url="/www/service/guide"/>
      <news-widget class="fd1 z z1" column="policy" label="政策文件" url="/www/service/policy"/>
      <news-widget class="fd2 z" column="faq" label="常见问题" url="/www/service/faq"/>
    </div>
  </div>
</template>

<script>
import Journalism from '~/components/layout/Journalism';
import imgs from '~/components/utils/imgs';
import calendar from '~/components/utils/calendar';
import JobsWidget from '~/components/widget/jobs';
import NewsWidget from '~/components/widget/news';
export default {
  name: 'home',
  data() {
    return {};
  },
  components: {
    Journalism,
    imgs,
    calendar,
    JobsWidget,
    NewsWidget,
  },
}; // l轮播图宽度为424
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.xwbox {
  width: 1200px;
  margin: 0 auto;
  position: relative;
  margin-top: 2rem;
}
.databox {
  width: 1200px;
  margin: 2rem auto;
  position: relative;
}
.zon {
  margin-left: 17px;
}
.z{width: 32%}
.z1{margin: 0 2%}
</style>
