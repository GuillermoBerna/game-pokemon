<template>
 <h1 v-if="!pokemon">Espere por favor...</h1>


<div v-else>
  <h1>Quien es este Pokemon?</h1>
  <PokemonOption :pokemons="pokemonArr"  />
  <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>

</div>
  
</template>

<script>
import PokemonOption from '../components/PokemonOption.vue'
import PokemonPicture from '../components/PokemonPicture.vue'

import getPokemonOptions from '@/helpers/getPokemonOption'

console.log(getPokemonOptions())

export default {
  components: { PokemonOption, PokemonPicture },
  data(){
    return{
      pokemonArr: [],
      pokemon: null,
      showPokemon: false
    }
  },
  methods: {
    async mixPokemonArray(){
      this.pokemonArr = await getPokemonOptions()
      
      const rndInt = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemonArr[ rndInt ]
    }
  },
  mounted(){
    this.mixPokemonArray()
  }

}
</script>
 
