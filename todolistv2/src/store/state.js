import storage from "../storage";
export default {
    title: "MY TODO LIST",
    todos: storage.get(),
    filter: "all",
    idCounter: 1,
    doneAll: false,
    editIndex: null,
  };