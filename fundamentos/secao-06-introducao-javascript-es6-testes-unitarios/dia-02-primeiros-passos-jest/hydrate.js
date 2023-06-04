const hydrate = (string) => {
   const stringSplit = string.split('');
   let glassWater = 0;
  for (let index = 0; index < stringSplit.length; index += 1) {
    const drinks = parseInt(stringSplit[index]);

    if (drinks) {
      glassWater += drinks;
    }
  }

  let glass = 'copo';
  if (glassWater > 1) {
    glass = 'copos';
  }

  return `${glassWater} ${glass} de água`;
}

module.exports = hydrate;