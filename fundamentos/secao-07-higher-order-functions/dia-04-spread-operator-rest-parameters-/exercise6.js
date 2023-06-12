const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
const { spring, summer, autumn, winter } = yearSeasons;

const monthsOfYear = [...winter, ...spring, ...summer, ...autumn];

console.log(monthsOfYear)
