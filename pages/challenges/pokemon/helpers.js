export function toCammelCase(s) {
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

export function transformString(str) {
  const words = str.split(/(?=[A-Z])/);
  const transformedString = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return transformedString;
}

export function formatPokeObj(poke) {
  const { id, name, height, weight, sprites, stats, types } = poke;
  const formatStats = stats.reduce((acc, stat) => {
    return {
      ...acc,
      [toCammelCase(stat.stat.name)]: stat.base_stat,
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