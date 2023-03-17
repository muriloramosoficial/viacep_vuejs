<script setup lang="ts">
import { RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue'
// import Info from './components/TheWelcome.vue'


</script>

<template>
  <div>
    <h1 class="title">VIACEP</h1>
    <p class="subtitle">Informe abaixo o CEP desejado para efetuar a pesquisa</p>
    <div>
      <HomeView/>
    </div>    
  </div>
   
</template>

<style scoped>
.subtitle{
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
    /* font-size: 60px; */
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-transform: uppercase;
  }
.title{
    display: flex;
    justify-content: center;
    padding: 10px;
    font-size: 60px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    
  }
/* .container{
    display: flex;
    justify-content: center;
  } */
  
</style>
