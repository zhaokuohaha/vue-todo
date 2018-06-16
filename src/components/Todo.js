import mdinput from './mdinput'
import {renderMd} from './tools'
import CircleMenu from 'vue-circle-menu'
import {MessageBox} from 'element-ui'

const status = {
  todo:"todo",
  done:"done",
  deleted:"deleted",
}

let ls = window.localStorage
export default {
  name: 'Todo',
  data () {
    return {
      status:status,
      editdialog: false,
      editing: {},
      data:{
        msg: '',
        todo: [],
        active: status.todo
      },
    }
  },
  components:{
    mdinput:mdinput,
    circleMenu: CircleMenu
  },
  computed:{
    showlist: function() {
      if(this.data.active === status.todo)
        return this.data.todo.filter(d => d.status === status.todo || d.status === status.done)
      else
        return this.data.todo.filter(d => d.status === this.data.active)
    }
  },
  methods: {
    addTodo: function() {
      if(this.data.msg)
        this.data.todo.unshift(this.newTodo(this.data.msg))
      this.data.msg = ''
    },
    newTodo: function(value = '', status = "todo", createTime = new Date()){
      return {
        value: value,
        status: status,
        createTime: createTime
      }
    },
    toggleTodo: function(item){
      item.status = item.status == status.todo ? status.done : status.todo
    },
    hideTodo: function(item){
      item.status = status.deleted
    },
    deleteTodo: function(item){
      // todo 或者 done 时不直接删除而是隐藏
      if(item.status == status.todo || item.status == status.done){
        this.hideTodo(item)
      }else{
        var index = this.data.todo.indexOf(item)
        this.data.todo.splice(index,1)
      }
    },
    saveTodo: function() {
      ls.setItem('tododata',JSON.stringify(this.data))
    },
    loadTodo: function() {
      let lsdata = JSON.parse(ls.getItem('tododata'))
      if(!!lsdata){
        this.data = lsdata
      }
    },
    renderMd: (text) => renderMd(text),
    editTodo: function(item){
      this.editing = item
      this.editdialog = true
    },
    editok: function(){
      this.editdialog = false
    },
    hideAll: function(){
      this.data.todo.map(t => {
        if(t.status == status.done)
          t.status = status.deleted
      })
    },
    syncData(){
      MessageBox('同步功能尚未完成')
    }
  },
  watch: {
    'data.todo': {
      deep:true,
      handler: function(){this.saveTodo()}
    },
  },
  mounted () {
    this.loadTodo()
  }
}