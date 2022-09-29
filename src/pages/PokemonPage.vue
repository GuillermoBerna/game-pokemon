<template>
  <h1>Quien es este Pokemon?</h1>

  
  <PokemonOption  />

  <PokemonPicture :pokemonId="152" :showPokemon="true"/>
  
</template>

<script>
import PokemonOption from '../components/PokemonOption.vue'
import PokemonPicture from '../components/PokemonPicture.vue'

import getPokemonOptions from '@/helpers/getPokemonOption'

console.log(getPokemonOptions())

export default {
  components: { PokemonOption, PokemonPicture },

}
</script>

