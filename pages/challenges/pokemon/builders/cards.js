import { pokeTypeStyles, statsTranslate } from '../data.js';
import { toTitleCase } from '../helpers.js';

export function buildCard(pokemon) {
  const card = document.createElement('div');
  card.classList.add('poke-card');
  card.style.backgroundColor = pokeTypeStyles[pokemon.types[0]];

  const header = buildHeader(pokemon);
  card.appendChild(header);

  const figure = buildFigure(pokemon);
  card.appendChild(figure);

  const characteristics = buildCharacteristics(pokemon);
  card.appendChild(characteristics);

  return card;
}

export function buildHeader(pokemon) {
  const cardHeader = document.createElement('div');
  cardHeader.classList.add('card-header');
  const id = document.createElement('div');
  id.classList.add('poke-id');
  id.textContent = `Nº${pokemon.id}`;
  cardHeader.appendChild(id);

  const titleContainer = document.createElement('div');
  const title = document.createElement('p');
  title.textContent = toTitleCase(pokemon.name);

  titleContainer.appendChild(title);
  titleContainer.classList.add('poke-title');
  cardHeader.appendChild(titleContainer);

  return cardHeader;
}

export function buildFigure(pokemon) {
  const figureContainer = document.createElement('div');
  figureContainer.classList.add('poke-figure-container');
  const sprite = document.createElement('img');
  sprite.classList.add('poke-img');
  sprite.src = pokemon.sprite;
  sprite.alt = pokemon.name;
  figureContainer.appendChild(sprite);

  return figureContainer;
}

export function buildCharacteristics(pokemon) {
  const characteristics = document.createElement('div');
  characteristics.classList.add('poke-stats-container');

  const divider = document.createElement('div');
  divider.classList.add('card-divider');
  characteristics.append(divider);

  const stats = document.createElement('div');
  stats.classList.add('poke-stats');

  const typeContainer = document.createElement('div');
  typeContainer.classList.add('poke-type-container');

  pokemon.types.forEach((typeName) => {
    const type = document.createElement('div');
    type.style.backgroundColor = pokeTypeStyles[typeName];
    type.classList.add('poke-type');
    type.textContent = toTitleCase(typeName);
    typeContainer.appendChild(type);
  });
  stats.appendChild(typeContainer);

  const normalStats = document.createElement('div');
  normalStats.classList.add('poke-normal-status');

  const height = document.createElement('p');
  const heightSpan = document.createElement('span');
  const heightValueSpan = document.createElement('span');
  heightSpan.textContent = 'Height';
  heightValueSpan.textContent = `${pokemon.height / 10}m`;
  height.appendChild(heightSpan);
  height.appendChild(heightValueSpan);
  normalStats.appendChild(height);

  const weight = document.createElement('p');
  const weightSpan = document.createElement('span');
  const weightValueSpan = document.createElement('span');
  weightSpan.textContent = 'Weight';
  weightValueSpan.textContent = `${pokemon.weight / 10}kg`;
  weight.appendChild(weightSpan);
  weight.appendChild(weightValueSpan);
  normalStats.appendChild(weight);

  stats.appendChild(normalStats);

  const baseStats = document.createElement('div');
  baseStats.classList.add('poke-base-stats-container');

  const baseStatsTitle = document.createElement('h3');
  baseStatsTitle.classList.add('poke-base-stats-title');
  baseStatsTitle.textContent = 'Base Stats';
  baseStats.appendChild(baseStatsTitle);

  const statsList = document.createElement('div');
  statsList.classList.add('poke-base-stats-list');
  const statsKeys = Object.keys(pokemon.stats);
  statsKeys.forEach((stat) => {
    const statItem = document.createElement('div');
    statItem.classList.add('poke-stat-item');
    const statTitle = document.createElement('p');
    statTitle.classList.add('poke-stat-item-title');

    const statValue = document.createElement('p');
    statValue.classList.add('poke-stat-item-value');

    statTitle.textContent = statsTranslate[stat];
    statValue.textContent = pokemon.stats[stat];
    statItem.appendChild(statTitle);
    statItem.appendChild(statValue);
    statsList.appendChild(statItem);
  });
  baseStats.appendChild(statsList);

  stats.appendChild(baseStats);
  characteristics.appendChild(stats);
  return characteristics;
}