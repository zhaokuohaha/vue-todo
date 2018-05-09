const prism = require('markdown-it-prism')
var md = require('markdown-it')({
  html: true,
  linkify: true,
}).use(prism)

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
      showPreview: false,
      data:{
        msg: '',
        todo: [],
        active: status.todo
      },
    }
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
      var index = this.data.todo.indexOf(item)
      this.data.todo.splice(index,1)
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
    renderMd(text){
      return md.render(text)
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