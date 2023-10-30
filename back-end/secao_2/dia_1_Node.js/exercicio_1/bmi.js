const readline = require('readline-sync');


function bmi (weightInKg, heightInCm) {
  const heightInMeters = heightInCm / 100;
  const heightSquared = heightInMeters * heightInMeters;

  const imc = weightInKg / heightSquared;
  return imc;
}

// ponto de partida será a função main

function main () {
  const weight = readline.questionFloat('What is your weight? ');
  const height = readline.questionFloat('What is your height? ');

  const imc = bmi(weight, height);
  //console.log(`Hi!, My weight is ${weight} and my height is ${height}`);
  //const imc = bmi(weightInKg, heightInCm);
   console.log(`IMC: ${imc.toFixed(2)}`);
}

 main();