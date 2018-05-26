<template>
  <div class="mdinput">
    <el-input
        type="textarea"
        class="textarea"
        :autosize="{ minRows: 2, maxRows: 10}"
        placeholder="支持Markdown"
        v-model="msg">
      </el-input>

      <div style="text-align:right">
        <button class="btn btn-text" @click="showPreview = !showPreview">
          <span class="h-center">
            <i class="iconfont icon-moreinfo"></i>预览
          </span>
        </button>
        <button class="btn" @click="submit">
          <i class="iconfont icon-send"></i> 提交
        </button>
      </div>

      <div class="md-preview" v-show="showPreview && msg">
        <span class="markdown-body" v-html="renderMd(msg)"></span>
      </div>
  </div>
</template>

<script>
import { renderMd } from "./tools";
export default {
  name: "mdinput",
  data() {
    return {
      showPreview: false,
      msg: this.text
    };
  },
  props: {
    text: { default: "" }
  },
  methods: {
    submit: function() {
      this.$emit("update:text", this.msg);
      this.$emit("submit");
      this.msg = "";
    },
    renderMd: text => renderMd(text)
  },
  watch:{
    text(val){
      this.msg = val
    }
  }
};
</script>

<style scoped>
.mdinput{
  border: #ddd solid 1px;
  border-radius: 5px;
}
</style>
