<template>
  <PokemonPage />
</template>

<script>

import PokemonPage from './pages/PokemonPage.vue'


export default {
  name:"app",
  components:{
    PokemonPage,
    
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color:#2c3e50;
  margin-top: 60px;
  text-align: center;
  -moz-osx-font-smoothing:grayscale;
  -webkit-font-smoothing:antialiased;

}
</style>

