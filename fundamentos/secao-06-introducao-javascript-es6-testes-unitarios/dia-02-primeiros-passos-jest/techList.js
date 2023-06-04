const techList = (array, name) => {
if (array.length === 0) return 'Vazio!';

  const technology = [];
  const sortArray = array.sort();

  for (index = 0; index < sortArray.length; index += 1) {
    technology.push({
      tech: sortArray[index],
      name,
    });
  }
  return technology;
}











module.exports = techList;