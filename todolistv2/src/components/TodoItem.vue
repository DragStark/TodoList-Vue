<template>
  <div class="todo-item">
    <div class="editing" v-show="editIndex === id">
      <input
        class="edit-box"
        v-model="editBox"
        type="text"
        name="edit"
        id="id"
        v-on:keyup.enter="handleEndEdit({id, title: editBox})"
      />
      <button v-on:click="handleEndEdit({id, title: editBox})">xong</button>
    </div>
    <div class="non-edit" v-show="editIndex !== id">
      <input
        v-model="isCompleted"
        v-on:change="handleSetState({id,isCompleted})"
        type="checkbox"
        name="todo-item"
        :checked="todo.completed"
        id=""
      />
      <label
        :class="isCompleted ? 'completed' : 'not-completed'"
        v-on:dblclick="handleStartEdit(id)"
        for="todo-item"
      >
        {{ todo.title }}</label
      >
      <button v-on:click="handleRemoveItem(id)">xóa</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters} from 'vuex';
  
export default {
  name: "comp-todo-item",
  data() {
    return {
      editBox: this.todo.title,
      isCompleted: this.todo.completed,
    };
  },
  props: {
    id: Number,
    todo: Object,
  },
  watch: {
    doneAll(value) {
      this.isCompleted = value;
    },
  },
  computed:{
    ...mapGetters(['editIndex','doneAll'])
  },
  methods: {
    ...mapActions(['handleSetState','handleRemoveItem','handleStartEdit','handleEndEdit']),
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
