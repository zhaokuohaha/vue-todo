/*
enum Status{
  todo,
  done,
  deleted,
}
type Todo{
  value: String,
  status: status,
  createTime: Date
}
*/
let ls = window.localStorage
export default {
  name: 'HelloWorld',
  data () {
    return {
      data:{
        msg: '',
        todo: [],
        active: 'todo'
      },
    }
  },
  computed:{
    showlist: function() {
      if(this.data.active === 'todo')
        return this.data.todo.filter(d => d.status === 'todo' || d.status === 'done')
      else
        return this.data.todo.filter(d => d.status === this.data.active)
    }
  },
  methods: {
    addTodo: function() {
      this.data.todo.push(this.newTodo(this.data.msg))
      this.data.msg = ''
    },
    newTodo: function(value = '', status = 'todo', createTime = new Date()){
      return {
        value: value,
        status: status,
        createTime: createTime
      }
    },
    deleteTodo: function(item){
      item.status = 'deleted'
    },
    saveTodo: function() {
      console.log('save run')
      ls.setItem('tododata',JSON.stringify(this.data))
    },
    loadTodo: function() {
      let lsdata = JSON.parse(ls.getItem('tododata'))
      if(!!lsdata){
        this.data = lsdata
      }
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