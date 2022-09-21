<template>
  <div class="todo-item">
    <div class="editing" v-show="editIndex === id">
      <input
        class="edit-box"
        v-model="editBox"
        type="text"
        name="edit"
        id="id"
        v-on:keyup.enter="end"
      />
      <button v-on:click="end">xong</button>
    </div>
    <div class="non-edit" v-show="editIndex !== id">
      <input
        v-model="isCompleted"
        v-on:change="setState"
        type="checkbox"
        name="todo-item"
        :checked="todo.completed"
        id=""
      />
      <label
        :class="isCompleted ? 'completed' : 'not-completed'"
        v-on:dblclick="edit"
        for="todo-item"
      >
        {{ todo.title }}</label
      >
      <button v-on:click="remove">xóa</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "comp-todo-item",
  props: {
    editIndex: {
      type: Number,
      default: null,
    },
    id: Number,
    todo: Object,
    doneAll: Boolean,
  },
  watch: {
    doneAll(value) {
      this.isCompleted = value;
    },
  },
  methods: {
    remove() {
      this.$emit("removeItem", this.id);
    },
    setState() {
      this.$emit("setState", this.id, this.isCompleted);
    },
    edit() {
      this.$emit("edit", this.id);
    },
    end() {
      this.$emit("end", this.id, this.editBox);
    },
  },
  data() {
    return {
      editBox: this.todo.title,
      isCompleted: this.todo.completed,
    };
  },
};
</script>

<style>
.editing {
  display: flex;
}
.todo-item .non-edit {
  width: 320px;
  display: flex;
  justify-content: space-between;
}
.non-edit .completed {
  text-decoration: line-through;
}
.editing {
  margin-left: 25px;
}
.editing .edit-box {
  width: 240px;
  margin-right: 10px;
  text-align: center;
}
</style>
