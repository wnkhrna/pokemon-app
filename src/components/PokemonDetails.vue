<template> 

  <div class="container"> 

    <h1>{{ pokemon.name }}</h1> 

    <img :src="pokemonImage" alt="Pokemon Image"> 

    <p>{{ pokemonDetails }}</p> 

    <button @click="editing = true" class="btn btn-primary">Edit</button> 

    <div v-if="editing"> 

      <input v-model="newName" placeholder="New Name" class="form-control mb-2"> 

      <button @click="saveEdit" class="btn btn-success">Save</button> 

    </div> 

  </div> 

</template> 

 

<script> 

import { ref, onMounted } from 'vue'; 

import { usePokemonStore } from '@/stores/pokemonStore'; 

import axios from 'axios'; 

 

export default { 

  props: ['id'], 

  setup(props) { 

    const store = usePokemonStore(); 

    const pokemon = ref({}); 

    const pokemonDetails = ref(''); 

    const pokemonImage = ref(''); 

    const editing = ref(false); 

    const newName = ref(''); 

 

    onMounted(async () => { 

      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.id}`); 

      pokemon.value = response.data; 

      pokemonDetails.value = `Height: ${response.data.height}, Weight: ${response.data.weight}`; 

      pokemonImage.value = response.data.sprites.front_default; 

    }); 

 

    const saveEdit = () => { 

      pokemon.value.name = newName.value; 

      store.updatePokemon(pokemon.value); 

      editing.value = false; 

    }; 

 

    return { pokemon, pokemonDetails, pokemonImage, editing, newName, saveEdit }; 

  } 

}; 

</script> 

 

<style> 

/* Add any custom styles here */ 

</style> 