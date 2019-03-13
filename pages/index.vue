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
      <guide class="fd1 z"/>
      <policy class="fd1 z z1"/>
      <faq class="fd2 z"/>
    </div>
  </div>
</template>

<script>
import Journalism from '~/components/layout/Journalism';
import faq from '~/components/layout/service/faq';
import policy from '~/components/layout/service/policy';
import guide from '~/components/layout/service/guide';
import imgs from '~/components/utils/imgs';
import calendar from '~/components/utils/calendar';
import JobsWidget from '~/components/widget/jobs';
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
    faq,
    policy,
    guide
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
