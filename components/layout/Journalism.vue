<template>
  <div class="box">
    <div class="txtbox">
      <div class="fj titlebox">
        <div class="fd1 title">就业快讯</div>
        <div class="fd2 txt">
          MORE
          <img src="/img/z1.jpg" class="icon">
        </div>
      </div>
      <ul class="ul">
        <li v-for="(item,index) in data" :key="index" class="fj">
          <span class="time fd1">{{item.time}}</span>
          <a class="fd1 txt2">{{item.txt}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Journalism',
  data() {
    return {
      data: [
        { txt: '本周中国南方航空股份有限公司将来校招聘', time: '3-9' },
        { txt: '本周中国南方航空股份有限公司将来校招聘', time: '3-9' },
        { txt: '本周中国南方航空股份有限公司将来校招聘', time: '3-9' },
        { txt: '本周中国南方航空股份有限公司将来校招聘', time: '3-9' },
        { txt: '本周中国南方航空股份有限公司将来校招聘', time: '3-9' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  width: 340px;
  border: 1px solid rgb(196, 196, 196);
}
.txtbox {
  width: 90%;
  margin: 0 auto;
  line-height: 3em;
}
.icon {
  display: inline;
}
.titlebox {
  border-bottom: 1px solid #ddd;
}
.title {
  border-bottom: 2px solid #1e649f;
  display: inline-block;
  font-size: 16px;
  vertical-align: middle;
  position: relative;
  margin-bottom: -1px;
  padding: 0 0 8px;
  font-weight: 700;
}
.txt {
  color: #1e649f;
  position: relative;
  line-height: 3em;
  height: 3em;
  top: 0;
  right: 0;
  z-index: 5;
  cursor: pointer;
}
.ul {
  height: 250px;
  overflow: hidden;
  margin: 10px auto;
}
.time {
  width: 15%;
}
.txt2 {
  width: 85%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
li {
  display: block;
  line-height: 30px;
  padding: 10px 0 9px 0px;
  border-bottom: 1px dashed #ddd;
  color: #60b0f4;
}
a {
  cursor: pointer;
}
li a:hover {
  color: #60b0f4;
}
</style>
