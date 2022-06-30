// Desafio 1
function compareTrue(parametro1, parametro2) {
  if (parametro1 === true && parametro2 === true) {
    return true;
  } else {
    return false;
  }   
}
let macaco = true;
let girafa = true;
console.log(compareTrue(macaco, girafa))



// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2  
}

let valorBase = 10;
let valorHeight = 50;
console.log(calcArea(valorBase, valorHeight));



// Desafio 3

function splitSentence(frase) {
  let stringArray = frase.split(" ")
  return stringArray;
}

console.log(splitSentence("go Trybe", ""));


// Desafio 4
function concatName(arrayStrings) {
  let primeiro;
  let ultimo;
  let posicoes;

  for (let index = 0; index < arrayStrings.length; index += 1) {
    primeiro = arrayStrings[0];
    ultimo = arrayStrings[arrayStrings.length - 1];
    posicoes = ultimo + ", " + primeiro;
  }

return posicoes;
}

// Desafio 5

function footballPoints(wins, ties) {
  let vitorias = wins * 3;
  let empates = ties
  let sum = vitorias + empates;
  return sum
}
  console.log(footballPoints(14, 8));



 /* 6 - Crie uma função que calcula o número de repetições do maior número
  Implemente a função highestCount que deverá retornar a quantidade de vezes que o maior número 
  se repete ao receber um array de números.
// Desafio 6
//[9, 1, 2, 3, 9, 5, 7]*/


function highestCount(arrayNumbers) {

let contador = 0;
  
  let maiorNumero = arrayNumbers[0];
  for (let index = 1; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] > maiorNumero) {
      maiorNumero = arrayNumbers[index];
    }
  }
  for (let index2 = 0; index2 < arrayNumbers.length; index2 += 1) {
   
    if (arrayNumbers[index2] === maiorNumero) {
      contador += 1;  
          
    }   
  }
  return contador;
}




      
    
  
  











// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
