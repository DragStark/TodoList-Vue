<template>
  <div class="todo-list">
    <div class="input-todo">
      <input v-model="doneAll" class="check-all" type="checkbox" />
      <input
        class="input-content"
        v-model="inputTodo"
        type="text"
        name="todo-title"
        placeholder="việc cần làm"
        v-on:keyup.enter="inputDone"
      />
      <button class="btn-add" @click="inputDone">Thêm</button>
    </div>
    <div class="list-container">
      <ul class="list-item">
        <TodoItem
          v-for="todo in filteredTodos"
          :key="todo.id"
          :todo="todo"
          :id="todo.id"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "comp-todo-list",
  data() {
    return {
      doneAll: this.doneAll,
      inputTodo: "",
    };
  },
  watch: {
    doneAll(value) {
      this.setStateAll(value)
      this.setDoneAll(value)
    },
  },
  computed: {
    ...mapGetters(['filteredTodos','doneAll']) //lấy todos đã được filter
  },
  methods: {
    ...mapActions(['handleAddItem']),
    ...mapMutations(['setStateAll','setDoneAll']),
    inputDone(){
      this.handleAddItem(this.inputTodo)
      this.inputTodo=""
    }
  },
  components: {
    TodoItem,
  },
};
</script>

<style>
.todo-list {
  margin: 15px auto;
  padding: 30px 30px;
  display: flex;
  justify-content: center;
  height: 300px;
  width: 320px;
  position: relative;
  border: 1px solid black;
  border-radius: 10px;
}
.list-container {
  position: absolute;
  margin: 30px auto;
}
.input-todo {
  display: flex;
  height: 30px;
  width: 350px;
  justify-content: space-between;
}
.input-todo .input-content {
  width: 240px;
}
.input-todo .btn-add {
  margin-left: 10px;
}
.input-todo .check-all {
  margin-right: 10px;
}
.list-container {
  display: flex;
  justify-content: space-between;
  background-color: antiquewhite;
  height: 300px;
  width: 350px;
}
.list-container ul {
  margin: 10px 10px;
  padding: 0;
}
</style>
