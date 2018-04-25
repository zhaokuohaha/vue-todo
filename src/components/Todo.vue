<template>
  <div class="content">
    <div class="tabs">
      <div class="tab" :class="{'tab-active': this.data.active===status.todo}" @click="data.active=status.todo">DOTO</div>
      <div class="tab" :class="{'tab-active': this.data.active===status.deleted}" @click="data.active=status.deleted">DONE</div>
    </div>
    <div class="input-group" v-show="this.data.active === status.todo">
      <textarea 
        class="textarea"
        name="input" 
        cols="80" 
        rows="2"
        v-model="data.msg"
        @keyup.enter="addTodo"
      ></textarea>
      <button class="btn btn-send" @click="addTodo">
        <i class="iconfont icon-send"></i>
      </button>
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
            {{item.value}}
          </div> 
          <div class="list-after">
            <div class="list-action" @click="hideTodo(item)" v-show="item.status==status.done">
                <i class="iconfont icon-hide"></i>
            </div>
            <div class="list-action"  @click="deleteTodo(item)" v-show="item.status==status.deleted">
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
.textarea{
  font-size: 1.3rem;
  font-family: 'Segoe UI','微软雅黑';
  border-radius: 5px 0 0 5px ;
}
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
  align-items: center;
}
.list-before{
  min-width: 20px;
}
.list-after{
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
  font-size: 1.5rem;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
}
.btn-text{
  background-color: transparent
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
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin: 16px auto;
}
</style>
