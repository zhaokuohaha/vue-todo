<template>
  <div class="content">
    <div class="tabs">
      <div class="tab" :class="{'tab-active': this.data.active===status.todo}" @click="data.active=status.todo">DOTO</div>
      <div class="tab" :class="{'tab-active': this.data.active===status.deleted}" @click="data.active=status.deleted">DONE</div>
    </div>
    <div v-show="this.data.active === status.todo">
      <el-input
        type="textarea"
        class="textarea"
        :autosize="{ minRows: 2, maxRows: 10}"
        placeholder="支持Markdown"
        v-model="data.msg">
      </el-input>
      <div class="md-preview" v-show="showPreview">
        <span class="markdown-body" v-html="renderMd(data.msg)"></span>
      </div>
      <div style="text-align:right">
        <button class="btn btn-text" @click="showPreview = !showPreview">
          <span class="h-center">
            <i class="iconfont icon-moreinfo"></i>预览
          </span>
        </button>
        <button class="btn" @click="addTodo">
          <i class="iconfont icon-send"></i> 提交
        </button>
      </div>
    </div>
    
    <div class="list">
      <div class="list-item"
        v-for="(item,index) in showlist"
        :key="index">
          <div class="list-before" v-show="item.status != status.deleted">
            <div class="list-action" @click="toggleTodo(item)">
              <i class="iconfont icon-checkboxunpress" 
                v-show="item.status === status.todo">
              </i>
              <i class="iconfont icon-checkboxpress" 
                v-show="item.status === status.done">
              </i>
            </div>
          </div>
          <div class="list-content" :class="'list-item-'+item.status">
            <span class="markdown-body" v-html="renderMd(item.value)"></span>
          </div> 
          <div class="list-after">
            <div class="list-action"  @click="deleteTodo(item)">
                <i  class="iconfont icon-delete"></i>
            </div>
          </div>      
      </div>
    </div>
  </div>
</template>

<script src="./Todo.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-send{
  width: 120px !important;
  border-radius: 0 5px 5px 0;
}
.tabs{
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.tab{
  flex: 1;
  padding: 8px;
}
.tab-active{
  border-bottom: 5px #20a0ff solid;
}
.content{
  width: 60%;
  margin: auto;
}
.list-item{
  display: flex;
  margin: 8px;
  font-size: 1.5rem;
  box-shadow: 1px 1px 1px 1px gainsboro;
}
.list-before{
  min-width: 20px;
}
.list-after{
  display: flex;
  min-width: 60px;
}
.list-content{
  margin: 8px;
  width: 0;
  overflow-wrap: break-word;
  text-align: left;
  flex-grow: 1;
}
.btn{
  font-size: 1rem;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
}
.btn-text{
  background-color: transparent;
  color: #20a0ff;
}
.btn-text:focus{
  border: none;
  outline: none;
}
.list-action{
  cursor: pointer;
  padding: 16px;
  /* background-color: thistle; */
}
.iconfont{
  font-size: 1.5rem !important;
}
.input-group{
  margin: 16px auto 0;
}
/* list content style */
.list-item-done{
  font-size: 1.2rem;
  font-style: italic;
  text-decoration: line-through;
  opacity: .3;
}


.list-item-deleted{
  opacity: .4;
}
.h-center{
  display: flex;
  align-items: center;
}
.md-preview{
  background-color: #fefefe;
  padding: 8px;
  text-align: left;
  box-shadow: 0px 0px 8px gray;
  margin: 8px 0;
}
.markdown-body {
		box-sizing: border-box;
		min-width: 200px;
		max-width: 980px;
    max-height: 300px;
		margin: 0 auto;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}

</style>
