var todoVue = new Vue({
  el: "#root",
  data: {
    todos: [
      {
        title: "rửa bát",
        isCompleted: true,
      },
      {
        title: "quét nhà",
        isCompleted: true,
      },
      {
        title: "nấu cơm",
        isCompleted: true,
      },
    ],
    editIndex: null,
    inputTemp: null,
    editTemp: null,
  },
  methods: {
    add(){
        this.todos.push({
            title: this.inputTemp,
            isCompleted: false
        })
    },
    remove(index){
        this.todos.splice(index,1)
    },
    startEdit(index){
        this.editIndex = index
    },
    endEdit(index){
        this.todos[this.editIndex].title = this.$refs[`input${index}`][0].value
        this.editIndex = null
    },
  },
  computed: {
    
  },
});
