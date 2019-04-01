<template>
  <div class="box" :class="{ boxed: border }">
    <div class="txtbox">
      <div class="fj titlebox">
        <div class="left title">
          <img src="img/x.png" class="left g" />
          <em class="left txt">{{ label }}</em>
        </div>
        <div class="right txt" @click="all">更多>></div>
      </div>
      <loading class="pending" v-if="loading"/>
      <ul class="ul" v-else>
        <li v-for="(item, index) in items" :key="index" class="fj" @click="btn(item)" @mouseenter="enter(index)">
          <el-tooltip :content="item.title" effect="light">
            <span class="txt2 left" :class="{ act: index == idx }">
              {{ item.title }}
            </span>
          </el-tooltip>
          <span class="right date" :class="{ act: index == idx }">{{ item.meta.createdAt | date }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import Loading from '@/components/utils/loading';

const { mapActions } = createNamespacedHelpers('news');
export default {
  name: 'NewsPod',
  components: {
    Loading,
  },
  props: {
    column: { type: String, required: true },
    label: { type: String, required: true },
    url: { type: String, required: true },
    border: { type: Boolean, default: false },
    limit: { type: Number, default: 4 },
  },
  data() {
    return {
      items: null,
      idx: '',
      loading: true,
    };
  },
  async mounted() {
    const res = await this.top({
      limit: this.limit,
      column: this.column,
    });
    this.loading = false;
    if (this.$checkRes(res)) {
      this.items = res.data;
    }
  },
  methods: {
    ...mapActions(['top']),
    btn(item) {
      let id = item._id;
      if (this.url.endsWith('/')) {
        location.href = `${this.url}${id}`;
      } else {
        location.href = `${this.url}/${id}`;
      }
    },
    all() {
      location.href = this.url;
    },
    enter(idx) {
      this.idx = idx;
    },
  },
  filters: {
    date: function(val) {
      let a = val.slice(0, 10);
      return a;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box, .pending {
  width: 340px;
  min-height: 200px;
}
.titlebox {
  border-bottom: 1px solid #ddd;
}
.title {
  display: inline-block;
  font-size: 16px;
  vertical-align: middle;
  position: relative;
  margin-bottom: -1px;
  padding: 0 0 8px;
  font-weight: 700;
}
.txtbox {
  width: 90%;
  margin: 0 auto;
  line-height: 3em;
  overflow: hidden;
}
.icon {
  display: inline;
}
.titlebox {
  border-bottom: 1px solid #ddd;
}
.txt {
  color: #aaaaaa;
  position: relative;
  line-height: 3em;
  height: 3em;
  top: 0;
  right: 0;
  z-index: 5;
  cursor: pointer;
}
.date {
  width: 30%;
  text-align: right;
}
.txt2 {
  width: 70%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #333;
}
.act {
  color: #ff9000;
}
li {
  cursor: pointer;
  display: block;
  line-height: 30px;
  padding: 10px 0 9px 0px;
  border-bottom: 1px dashed #ddd;
}
.title .g {
  margin-top: 20%;
}
.title .txt {
  color: #1c68a2;
  text-indent: 0.5em;
  font-weight: 600;
}
.boxed {
  border: 1px solid #c4c4c4;
  border-radius: 4px;
}
</style>
