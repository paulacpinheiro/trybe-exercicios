//Função 1
const substituaX = (person) => {
    const frase = 'Trybe x aqui!';
    const fraseArray = frase.split(' ');
    for (let index = 0; index < fraseArray.length; index += 1) {
        if (fraseArray[index] === 'x') {
            fraseArray[index] = person;
        }
    }
    return fraseArray.join(' ');
};
//console.log(substituaX('Bebeto'));

//Função 2
const minhasSkills = (substituaX) => {
    const skills = ['HTML', 'CSS', 'JavaScript'];
    let result = `${substituaX} 

    Minhas principais habilidades são:
    `;
    for (let index = 0; index < skills.length; index += 1) {
        result = `${result}
        - ${skills[index]}`;
    }
    return result;
};
console.log(minhasSkills(substituaX('Bebeto')));