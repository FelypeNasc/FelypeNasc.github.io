import { pokeTypes } from "../data.js";
import { buildTypeSelect } from "./type-select.js";

export function buildPage () {
  buildTypeSelect(pokeTypes)
}
