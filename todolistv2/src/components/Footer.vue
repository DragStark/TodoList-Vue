<template>
    <div class="footer-app">
      <footer>
        <button class="all" v-on:click="selectFilter('all')">tất cả</button>
        <button class="done" v-on:click="selectFilter('completed')">đã xong</button>
        <button class="not-done" v-on:click="selectFilter('not-completed')">chưa xong</button>
        <button @click="clear">xóa mục đã xong</button>
    </footer>
    </div>
  </template>
  
  <script>
  
  
  export default {
    name: 'comp-footer',
    components: {
  
    },
    methods: {
      selectFilter(filter){
        this.$emit('changeFilter',filter)
      },
      clear(){
        this.$emit('clear')
      } 
    },
  }
  </script>
  
  <style>
    .footer-app{
      display: flex;
      justify-content: center;
    }
  </style>
  