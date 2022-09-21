<template>
    <div class="footer-app">
      <footer>
        <button class="all" v-on:click="handleChangeFilter('all')">tất cả</button>
        <button class="done" v-on:click="handleChangeFilter('completed')">đã xong</button>
        <button class="not-done" v-on:click="handleChangeFilter('not-completed')">chưa xong</button>
        <button @click="clearDone">xóa mục đã xong</button>
    </footer>
    </div>
  </template>
  
  <script>
import { mapActions, mapMutations,  } from 'vuex'
  
  
  export default {
    name: 'comp-footer',
    methods: {
      ...mapMutations(['setDoneAll']),
      ...mapActions(['handleChangeFilter','handleClearDone']),
      clearDone(){
        this.setDoneAll(false)
        this.handleClearDone()
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
  