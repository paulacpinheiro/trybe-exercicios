const numberCheck = (myNumber, number) => myNumber === number; 

const loteria = (myNumber, numberCheck) => {
  const number = Math.floor((Math.random() * 5) + 1);
  return numberCheck(myNumber, number) ? 'Parabéns, você ganhou' : 'Tente novamente';
}; 
console.log(loteria(2, numberCheck));
