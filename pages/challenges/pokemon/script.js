import { buildCard } from "./builders.js";

const searchInput = document.getElementById('search-input')
main();

let pokemons;

async function main(filteredPokemons) {
  if (filteredPokemons) return createPokemonCards(filteredPokemons);
  pokemons = await fetchAndStorePokemons();
  createPokemonCards(pokemons);
}

searchInput.addEventListener('input', function () {
  const value = searchInput.value
  const localStoragePokemons = JSON.parse(localStorage.getItem('pokemons'))
  const filteredPokemons = searchPokemons(value, localStoragePokemons);
  main(filteredPokemons)
});

async function fetchAndStorePokemons() {
  const pokemons = [];
  if (!localStorage.getItem('pokemons')) {
    for (let i = 1; i <= 151; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      if (response.ok) {
        const pokemonData = await response.json();
        pokemons.push(pokemonData);
      } else {
        console.error(`Erro ao buscar o pokemon ${i}:${response.status}`);
      }
    }
    const pokemonFilteredData = pokemons.map((poke) => formatPokeObj(poke))
    localStorage.setItem('pokemons', JSON.stringify(pokemonFilteredData));
  }
  return JSON.parse(localStorage.getItem('pokemons'));
}

function createPokemonCards(pokemons) {
  const container = document.getElementById('poke-cards-container');
  container.innerHTML = '';

  pokemons.forEach(pokemon => {
    container.appendChild(buildCard(pokemon))
  });
}

function searchPokemons(input, pokemonArray) {
  const searchTerm = input.toLowerCase().trim();

  if (!searchTerm) {
    return pokemonArray;
  }

  return pokemonArray.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(searchTerm);
  });
}


