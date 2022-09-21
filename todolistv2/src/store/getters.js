export default {
    filteredTodos(state) {
      switch (state.filter) {
        case "all":
          return state.todos;
        case "completed":
          return state.todos.filter((item) => item.completed === true);
        case "not-completed":
          return state.todos.filter((item) => item.completed === false);
      }
      return state.todos;
    },
    todos: (state) => state.filteredTodos,
    editIndex: (state) => state.editIndex,
    doneAll: (state) => state.doneAll
  }