<template>
  <div class="content">
    <div class="tabs">
      <div class="tab" :class="{'tab-active': this.data.active===status.todo}" @click="data.active=status.todo">DOTO</div>
      <div class="tab" :class="{'tab-active': this.data.active===status.deleted}" @click="data.active=status.deleted">DONE</div>
    </div>
    <div class="input-group">
      <textarea 
        class="textarea"
        name="input" 
        cols="80" 
        rows="2"
        v-model="data.msg"
        @keyup.enter="addTodo"
      ></textarea>
      <button class="btn" @click="addTodo">
        <i class="iconfont icon-send"></i>
      </button>
    </div>
    <div class="list">
      <div class="list-item"
        v-for="(item,index) in showlist"
        :key="index">
          <div class="list-before" v-show="item.status != status.deleted">
            <i class="iconfont icon-checkboxunpress" 
               v-show="item.status === status.todo"
               @click="item.status=status.done">
            </i>
            <i class="iconfont icon-checkboxpress" 
               v-show="item.status === status.done"
               @click="item.status=status.todo">
            </i>
          </div>
          <div class="list-content" :class="'list-item-'+item.status">
            {{item.value}}
          </div> 
          <div class="list-after">
            <div v-show="item.status==status.done">
              <button class="btn btn-text">
                <i class="iconfont icon-hide" @click="hideTodo(item)"></i>
              </button>
            </div>
            <div v-show="item.status==status.deleted">
              <button class="btn btn-text">
                <i  class="iconfont icon-delete" @click="deleteTodo(item)"></i>
              </button>
            </div>
          </div>      
      </div>
    </div>
  </div>
</template>

<script src="./Todo.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  padding: 8px;
  box-shadow: 1px 1px 1px 1px red;
}
.list-before{
  min-width: 20px;
}
.list-after{
  min-width: 20px;
}
.list-content{
  margin: 0 8px;
  width: 0;
  overflow-wrap: break-word;
  text-align: left;
  flex-grow: 1;
}
.btn{
  font-size: 1.2rem;
  border: none;
  padding: 8px 16px;
}
.input-group{
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin: 16px auto;
}
</style>
