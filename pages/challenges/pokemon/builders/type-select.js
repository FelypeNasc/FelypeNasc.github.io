import { toTitleCase } from '../helpers.js';
import { main, pokemons } from '../script.js';

let expanded = false;

export function buildTypeSelect(pokeTypes) {
  const checkboxes = document.getElementById('poke-type-checkboxes');
  checkboxes.style.display = 'none';
  pokeTypes.forEach((type) => {
    const label = document.createElement('label');
    label.htmlFor = type;
    label.textContent = toTitleCase(type);

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = type;

    input.addEventListener('click', () => {
      const selectedValues = getSelectedTypes();
      if (!selectedValues) return main(pokemons);
      const filteredPokemons = pokemons.filter((pokemon) => {
        return selectedValues.every(type => pokemon.types.includes(type));
      });
      main(filteredPokemons)
    });

    label.appendChild(input);
    checkboxes.appendChild(label);

  });
  
  const selectBox = document.getElementById('poke-type-select-box');
  const selectIcon = document.getElementById('select-icon');
  selectBox.addEventListener('click', () => {
    if (!expanded) {
      checkboxes.style.display = "block";
      selectIcon.style = 'transform: rotate(180deg)'
      expanded = true;
    } else {
      checkboxes.style.display = "none";
      selectIcon.style = 'transform: rotate(0deg)'
      expanded = false;
    }
  })
}

export function getSelectedTypes() {
  const selectedCheckboxes = document.querySelectorAll('#poke-type-checkboxes input[type="checkbox"]:checked');
  const selectedValues = Array.from(selectedCheckboxes).map(checkbox => checkbox.id);
  
  return selectedValues;
}