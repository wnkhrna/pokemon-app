<template> 

  <div class="container mt-5"> 

    <h1 class="text-center mb-4">Pokémon List</h1> 

    <div class="input-group mb-4"> 

      <input type="text" v-model="search" placeholder="Search Pokémon" class="form-control" /> 

    </div> 

    <LoadingSpinner v-if="loading" /> 

    <div v-else> 

      <div class="row"> 

        <div class="col-md-4 mb-4" v-for="pokemon in filteredPokemons" :key="pokemon.name"> 

          <router-link :to="`/pokemon/${pokemon.url.split('/')[6]}`" class="text-decoration-none"> 

            <div class="card h-100"> 

              <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`" class="card-img-top" alt="..."> 

              <div class="card-body"> 

                <h5 class="card-title text-capitalize">{{ pokemon.name }}</h5> 

              </div> 

            </div> 

          </router-link> 

        </div> 

      </div> 

    </div> 

  </div> 

</template> 

 

<script> 

import { ref, computed, onMounted } from 'vue'; 

import { fetchPokemon } from './services/pokemonService'; 

import LoadingSpinner from './components/LoadingSpinner.vue'; 

 

export default { 

  components: { 

    LoadingSpinner 

  }, 

  setup() { 

    const pokemons = ref([]); 

    const loading = ref(true); 

    const search = ref(''); 

 

    onMounted(async () => { 

      pokemons.value = await fetchPokemon(); 

      loading.value = false; 

    }); 

 

    const filteredPokemons = computed(() => { 

      return pokemons.value.filter(pokemon => pokemon.name.toLowerCase().includes(search.value.toLowerCase())); 

    }); 

 

    return { pokemons, loading, search, filteredPokemons }; 

  } 

}; 

</script> 

 

<style> 

/* Add any custom styles here */ 

.card:hover { 

  transform: scale(1.05); 

  transition: transform 0.2s; 

} 

</style> 