<template>
  <div id="root">
    <Header />
    <TodoList
      :todos="filteredTodos"
      :editIndex="editIndex"
      @handleDoneAll="handleDoneAll"
      @handleAddItem="handleAddItem"
      @handleRemoveItem="handleRemoveItem"
      @handleSetState="handleSetState"
      @startEdit="startEdit"
      @endEdit="endEdit"
    />
    <Footer @changeFilter="changeFilter" @clear="clearDone" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import TodoList from "./components/TodoList.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  data() {
    return {
      todos: [
        { id: 1, title: "an com", completed: false },
        { id: 2, title: "rua bat", completed: false },
        { id: 3, title: "quet nha", completed: false },
        { id: 4, title: "giat quan ao", completed: false },
      ],
      filtered: 'all',
      idCounter: 5,
      editIndex: null,
    };
  },
  computed: {
    filteredTodos(){
      switch (this.filtered) {
        case "all":
          return this.todos;
        case "completed":
          return this.todos.filter(
            (item) => item.completed === true
          );
        case "not-completed":
         return this.todos.filter(
            (item) => item.completed === false
          );
      }
      return this.todos
    }
  },
  methods: {
    handleAddItem(title) {
      if (title === "") alert("bạn chưa nhập gì");
      else
        this.todos.push({
          id: this.idCounter++,
          title: title,
          completed: false,
        });
    },
    handleRemoveItem(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    handleSetState(id, isCompleted) {
      this.todos.forEach((element) => {
        if (element.id === id) {
          element.completed = isCompleted;
        }
      });
    },
    startEdit(id) {
      this.editIndex = id;
    },
    endEdit(id, title) {
      this.todos.forEach((element) => {
        if (element.id === id) {
          element.title = title;
        }
      });
      this.editIndex = null;
    },
    changeFilter(filter) {
      this.filtered = filter
    },
    clearDone() {
      this.todos = this.todos.filter((item) => item.completed === false);
    },
    handleDoneAll(isCompleted) {
      this.todos.forEach((element) => {
        element.completed = isCompleted;
      });
    },
  },
  components: {
    Header,
    TodoList,
    Footer,
  },
};
</script>

<style>
#root {
  margin: 0;
  padding: 0;
}
</style>
