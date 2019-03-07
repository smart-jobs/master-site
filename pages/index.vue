<template>
  <div>
    <div class="fj xwbox">
      <!-- <login class="fd1 login" /> -->
      <calendar class="fd1" />
      <imgs class="fd1 zon" />
      <journalism class="fd1 journalism" />
    </div>
    <div class="databox fj">
      
      <jobs-widget class="fd2" />
    </div>
  </div>
</template>

<script>
import Journalism from '~/components/layout/Journalism';
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
  margin: 4rem auto;
  position: relative;
}
.zon {
  margin: 0 17px;
}
.journalism{
  height: 380px;
}
</style>
