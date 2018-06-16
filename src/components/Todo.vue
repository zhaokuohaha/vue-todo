<template>
  <div class="content">
    <div class="tabs">
      <div class="tab" :class="{'tab-active': this.data.active===status.todo}" @click="data.active=status.todo">DOTO</div>
      <div class="tab" :class="{'tab-active': this.data.active===status.deleted}" @click="data.active=status.deleted">DONE</div>
    </div>
    <mdinput v-show="this.data.active === status.todo"
      :text.sync="data.msg"
      @submit="addTodo">
    </mdinput>
    
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
            <div class="list-action" 
              v-show="item.status === status.todo"
              @click="editTodo(item)">
              <i class="iconfont icon-edit"></i>
            </div>
            
            <div class="list-action"
              v-show="item.status != status.todo"
              @click="deleteTodo(item)">
                <i  class="iconfont icon-delete"></i>
            </div>
          </div>      
      </div>
    </div>

    <el-dialog
      title="编辑"
      :visible.sync="editdialog">
      <mdinput 
        :text.sync="editing.value"
        @submit="editok"></mdinput>
    </el-dialog>

    <div class="option-menu" v-show="data.active == status.todo">
      <circle-menu type="top" :number="2" circle :colors="[ '#4fc08d', '#ddd', '#ddd', '#ddd', '#ddd']">
        <button type="button" slot="item_btn" class="circle-menu-button iconfont icon-plus"></button>
        <a slot="item_1" class="iconfont icon-delete" @click="hideAll"></a>
        <a slot="item_2" class="iconfont icon-sync" @click="syncData"></a>
      </circle-menu>
    </div>

  </div>
</template>

<script src="./Todo.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.circle-menu-button{
  outline: none;
  border: none;
  background-color: transparent;
  
}

.option-menu{
  position: fixed;
  right: 50px;
  bottom: 50px;    
}

.option-menu a{
  cursor: pointer;
}
</style>
