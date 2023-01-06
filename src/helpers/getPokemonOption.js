import PokemonApi from "@/api/PokemonAPI"



const getPokemons = () => {
    
    const pokemonsArr = Array.from( Array(650))//creamon el arreglo para guardar los nombre, dado que son 650 aprox, hacemos un arreglo de 650
    return pokemonsArr.map((_ , index)=> index+1)
}

const getPokemonOptions = async () => {//luego llamamos a getPokemons option para mezclar y crear aleatoridad
   const mixedPokemons = getPokemons().sort(()=>Math.random() - 0.5)
    
   const pokemons = await getPokemonsNames( mixedPokemons.splice(0,4))

   //console.table(pokemons)
   return pokemons
}
const getPokemonsNames =async ([a,b,c,d] = [])=>{

   //const resp = await PokemonApi.get("/1")
   //console.log(resp.data.name)
   const promiseArr =[
    PokemonApi.get(`/${a}`),
    PokemonApi.get(`/${b}`),
    PokemonApi.get(`/${c}`),
    PokemonApi.get(`/${d}`)
   ]

   const [p1,p2,p3,p4] = await Promise.all (promiseArr)
    
   return [
    {name:p1.data.name, id:p1.data.id},
    {name:p2.data.name, id:p2.data.id},
    {name:p3.data.name, id:p3.data.id},
    {name:p4.data.name, id:p4.data.id}
   ]
}


export default getPokemonOptions //obviamente se debe exportar para que en esta caso la pagina PokemonsPage.vue puedo tomar la informacion y mostrala para realizar las funciones