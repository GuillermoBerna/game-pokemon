<template>
  <h1>Quien es este Pokemon?</h1>

  
  <PokemonOption  />

  <PokemonPicture :pokemonId="6" :showPokemon="true"/>
  
</template>

<script>
import PokemonOption from '../components/PokemonOption.vue'
import PokemonPicture from '../components/PokemonPicture.vue'


export default {
  components: { PokemonOption, PokemonPicture },

}
</script>

