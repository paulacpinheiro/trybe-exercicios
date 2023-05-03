let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// Parte 1//

/*for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}*/

//Parte 2//

/*let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}
console.log(soma);*/

//Parte 3//

/*let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}

let mediaAritmetica = soma / numbers.length;

console.log(mediaAritmetica);*/

//Parte 4//


/*let mediaAritmetica = 0;

for (let index = 0; index < numbers.length; index += 1) {
    mediaAritmetica += numbers[index];
}

 if (mediaAritmetica > 20) {
    console.log("O valor da média aritmética é maior que 20");
} else {
    };console.log("O valor da média aritmética é menor ou igual a 20");*/

//Parte 5//

/*let maiorNumero = numbers [0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > maiorNumero) {
      maiorNumero = numbers[index];
    }
  }
  console.log(maiorNumero);*/

//Parte 6//

/*let impar = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        impar += 1;
    }
}

if (impar === 0) {
    console.log('nenhum valor ímpar encontrado');
  } else {
    console.log(impar);
  }*/

  //Parte 7//

  /*let menorNumero = numbers[0];

  for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] < menorNumero) {
        menorNumero = numbers[index];
    }
  }
  console.log(menorNumero);*/

  //Parte 8//

  /*let newNumbers = [];

  for (let index = 0; index <= 25 ; index += 1) {
    newNumbers.push(index);
  }
  console.log(newNumbers);*/

  //Parte 9//

  let newNumbers = [ 0,  1,  2,  3,  4,  5,  6,  7, 8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
  24, 25];
  
for (let index = 0; index < newNumbers.length; index += 1){
  console.log(newNumbers[index] / 2);
}


