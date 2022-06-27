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
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
