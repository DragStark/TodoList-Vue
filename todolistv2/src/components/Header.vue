<template>
    <div class="header-title">
      <header>
        <h1>{{$store.state.title}}</h1>
    </header>
    </div>
  </template>
  
  <script>

  //import { mapGetters } from 'vuex'

  export default {
    name: 'comp-header',
  }
  </script>
  
  <style>
    .header-title {
      margin-top: 100px;
      justify-content: center;
      display: flex;
    }
    .header-title header h1{
      font-size: 50px;
      font-family: 'Saira', sans-serif;
      color: #ccc;
    }
  </style>
  