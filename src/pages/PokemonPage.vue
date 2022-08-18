<template>
  <h1>Quien es este pokemon?</h1>

  
  <PokemonOption />

  <PokemonPicture />
  
</template>

<script>
import PokemonOption from '../components/PokemonOption.vue'
import PokemonPicture from "../components/PokemonPicture.vue"


export default {
  components: { PokemonOption, PokemonPicture },

}
</script>

