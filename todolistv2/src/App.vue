<template>
  <div id="root">
    <Header />
    <TodoList/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import TodoList from "./components/TodoList.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
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
