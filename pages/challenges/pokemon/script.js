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

function buildCard(pokemon) {
  const card = document.createElement('div');
  card.classList.add('poke-card');
  card.style.backgroundColor = pokeTypeStyles[pokemon.types[0]]

  const header = buildHeader(pokemon)
  card.appendChild(header)

  const figure = buildFigure(pokemon)
  card.appendChild(figure);

  const characteristics = buildCharacteristics(pokemon)
  card.appendChild(characteristics);

  return card
}

function buildHeader(pokemon) {
  const cardHeader = document.createElement('div');
  cardHeader.classList.add('card-header')
  const id = document.createElement('div');
  id.classList.add('poke-id')
  id.textContent = `Nº${pokemon.id}`
  cardHeader.appendChild(id);

  const titleContainer = document.createElement('div');
  const title = document.createElement('p')
  title.textContent = toTitleCase(pokemon.name)

  titleContainer.appendChild(title)
  titleContainer.classList.add('poke-title')
  cardHeader.appendChild(titleContainer);

  return cardHeader
}

function buildFigure(pokemon) {
  const figureContainer = document.createElement('div')
  figureContainer.classList.add('poke-figure-container')
  const sprite = document.createElement('img');
  sprite.classList.add('poke-img')
  sprite.src = pokemon.sprite;
  sprite.alt = pokemon.name;
  figureContainer.appendChild(sprite);

  return figureContainer
}

function buildCharacteristics(pokemon) {
  const characteristics = document.createElement('div')
  characteristics.classList.add('poke-stats-container')

  const divider = document.createElement('div');
  divider.classList.add('card-divider')
  characteristics.append(divider)

  const stats = document.createElement('div')
  stats.classList.add('poke-stats')

  const typeContainer = document.createElement('div');
  typeContainer.classList.add('poke-type-container')

  pokemon.types.forEach((typeName) => {
    const type = document.createElement('div')
    type.style.backgroundColor = pokeTypeStyles[typeName]
    type.classList.add('poke-type')
    type.textContent = toTitleCase(typeName)
    typeContainer.appendChild(type)
  })
  stats.appendChild(typeContainer)

  const normalStats = document.createElement('div');
  normalStats.classList.add('poke-normal-status')

  const height = document.createElement('p');
  const heightSpan = document.createElement('span');
  const heightValueSpan = document.createElement('span');
  heightSpan.textContent = 'Height'
  heightValueSpan.textContent = `${pokemon.height / 10}m`;
  height.appendChild(heightSpan)
  height.appendChild(heightValueSpan)
  normalStats.appendChild(height);

  const weight = document.createElement('p');
  const weightSpan = document.createElement('span');
  const weightValueSpan = document.createElement('span');
  weightSpan.textContent = 'Weight'
  weightValueSpan.textContent = `${pokemon.weight / 10}kg`;
  weight.appendChild(weightSpan)
  weight.appendChild(weightValueSpan)
  normalStats.appendChild(weight);

  stats.appendChild(normalStats)

  const baseStats = document.createElement('div');
  baseStats.classList.add('poke-base-stats-container')

  const baseStatsTitle = document.createElement('h3');
  baseStatsTitle.classList.add('poke-base-stats-title')
  baseStatsTitle.textContent = 'Base Stats';
  baseStats.appendChild(baseStatsTitle)

  const statsList = document.createElement('div');
  statsList.classList.add('poke-base-stats-list')
  const statsKeys = Object.keys(pokemon.stats);
  statsKeys.forEach(stat => {
    const statItem = document.createElement('div');
    statItem.classList.add('poke-stat-item');
    const statTitle = document.createElement('p');
    statTitle.classList.add('poke-stat-item-title');

    const statValue = document.createElement('p');
    statValue.classList.add('poke-stat-item-value')

    statTitle.textContent = statsTranslate[stat]
    statValue.textContent = pokemon.stats[stat]
    statItem.appendChild(statTitle)
    statItem.appendChild(statValue)
    statsList.appendChild(statItem);
  });
  baseStats.appendChild(statsList);

  stats.appendChild(baseStats)
  characteristics.appendChild(stats)
  return characteristics
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


function formatPokeObj(poke) {
  const { id, name, height, weight, sprites, stats, types } = poke;
  const formatStats = stats.reduce((acc, stat) => {
    return {
      ...acc,
      [cammelize(stat.stat.name)]: stat.base_stat,
    };
  }, {});
  const formatTypes = types.map((type) => type.type.name);
  return {
    id,
    name,
    height,
    weight,
    sprite: sprites.front_default,
    types: formatTypes,
    stats: formatStats,
  };
}

export const pokeTypeStyles = {
  normal: '#aa9',
  fire: '#f42',
  water: '#39f',
  electric: '#fc3',
  grass: '#7c5',
  ice: '#6cf',
  fighting: '#b54',
  poison: '#a59',
  ground: '#db5',
  flying: '#89f',
  psychic: '#f59',
  bug: '#ab2',
  rock: '#ba6',
  ghost: '#66b',
  dragon: '#76e',
  dark: '#754',
  steel: '#aab',
  fairy: '#e9e'
}

const statsTranslate = {
  hp: 'HP',
  attack: 'ATK',
  defense: 'DEF',
  specialAttack: 'SP. ATK',
  specialDefense: 'SP. DEF',
  speed: 'SPD',
}

export function cammelize(s) {
  return s.replace(/-./g, (x) => x[1].toUpperCase());
}

export function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

function transformString(str) {
  const words = str.split(/(?=[A-Z])/);
  const transformedString = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return transformedString;
}