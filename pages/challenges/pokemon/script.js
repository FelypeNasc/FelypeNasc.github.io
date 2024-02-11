import { buildPage } from "./builders/index.js";
import { buildCard } from "./builders/cards.js";
import { formatPokeObj } from "./helpers.js";

const searchInput = document.getElementById('search-input')
buildPage();
main();

export let pokemons;

export async function main(filteredPokemons) {
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
    const requests = [];
    for (let i = 1; i <= 1025; i++) {
      requests.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`));
    }

    const responses = await Promise.all(requests);

    for (const response of responses) {
      if (response.ok) {
        const pokemonData = await response.json();
        pokemons.push(pokemonData);
      } else {
        const pokemonNumber = response.url.match(/\/(\d+)\/$/)[1];
        console.error(`Erro ao buscar o pokemon ${pokemonNumber}:${response.status}`);
      }
    }

    const pokemonFilteredData = pokemons.map((poke) => formatPokeObj(poke));
    console.log(pokemonFilteredData)
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

  if (pokemons.length < 1) {
    const noPokeFound = document.createElement('h2');
    noPokeFound.textContent = 'No Pokemon were found :(';

    container.appendChild(noPokeFound)
  }
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


