<template>
  <div class="box">
    <span class="title">联系我们</span>
    <div class="txtbox">
      <div class="text">现场招聘：</div>
      <div class="fj">
        <div class="fd1 txt">联系老师：</div>
        <div class="fd1">{{list.name1}}</div>
      </div>
      <div class="fj">
        <div class="fd1 txt">联系电话：</div>
        <div class="fd1">{{list.number1}}</div>
      </div>
    </div>
    <div class="txtbox">
      <div class="text">网络招聘：</div>
      <div class="fj">
        <div class="fd1 txt">联系老师：</div>
        <div class="fd1">{{list.name2}}</div>
      </div>
      <div class="fj">
        <div class="fd1 txt">联系电话：</div>
        <div class="fd1">{{list.number2}}</div>
      </div>
    </div>
    <div class="txtbox">
      <div class="text">就业手续办理：</div>
      <div class="fj">
        <div class="fd1 txt">联系老师：</div>
        <div class="fd1">{{list.name3}}</div>
      </div>
      <div class="fj">
        <div class="fd1 txt">联系电话：</div>
        <div class="fd1">{{list.number3}}</div>
      </div>
    </div>
    <div class="txtbox">
      <div class="fj">
        <div class="fd1">传真：</div>
        <div class="fd1">{{list.fax}}</div>
      </div>
      <div class="fj">
        <div class="fd1">公共邮箱： </div>
        <div class="fd1">{{list.mailbox}}</div>
      </div>
    </div>
    <img :src="list.imgurl" class="m">
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:{
        name1:'张老师',
        number1: '020-61648520',
        name2: '谢老师',
        number2: '020-61648784',
        name3: '刘老师',
        number3: '020-61648783',
        fax: '020-61648500',
        mailbox: 'nydjyzdzx@126.com',
        imgurl: '/img/mm.png'
      }
    }
  },
}; 
</script>
<style scoped>
.box{position: relative;z-index: 2;width: 900px;padding:0 0 6em 0;background: #f0f0f0;margin: 6em auto auto}
.title{width: 100%;text-align: center;font-size: 1.2em;font-weight: 700;line-height: 6em;border-bottom: 2px solid #000}
.text{font-size: 1.2em}
.txt{text-indent: 2em}
.txtbox{margin: 2em auto;width: 50%;margin-left: 5%}
.m{width: 30%;margin: 6rem auto auto;}
</style>
