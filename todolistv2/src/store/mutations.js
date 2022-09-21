import storage from "../storage";
export default {
    setState(state, args) {
      let todo = state.todos.find((todo) => todo.id === args.id);
      todo.completed = args.isCompleted;
      storage.set(state)
    },
    addItem(state, title) {
      state.todos.push({ id: state.idCounter++, title, isCompleted: false });
      storage.set(state)
    },
    removeItem(state, id){
        state.todos = state.todos.filter(todo => todo.id !== id)
        storage.set(state)
    },
    changeEditIndex(state, id){
        state.editIndex = id
        storage.set(state)
    },
    setTitle(state, args){
        state.todos.forEach((element) => {
            if (element.id === args.id) {
              element.title = args.title;
            }
          });
        state.editIndex = null;
        storage.set(state)
    },
    changeFilter(state,filter){
        state.filter = filter
        console.log(state.filter);
        storage.set(state)
    },
    clearDone(state){
        state.todos = state.todos.filter(todo => todo.completed === false)
        storage.set(state)
    },
    setStateAll(state, isCompleted) {
        state.todos.forEach((element) => {
          element.completed = isCompleted;
        });
        storage.set(state)
    },
    setDoneAll(state,value){
        state.doneAll = value
    }
  }