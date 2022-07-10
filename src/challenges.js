// Desafio 1 ---------------------------------------------------------------------------------------------------
function compareTrue(parametro1, parametro2) {
  if (parametro1 === true && parametro2 === true) {
    return true;
  } else {
    return false;
  }
}
let macaco = true;
let girafa = true;
console.log(compareTrue(macaco, girafa));



// Desafio 2---------------------------------------------------------------------------------------------------
function calcArea(base, height) {
  return (base * height) / 2
}

let valorBase = 10;
let valorHeight = 50;
console.log(calcArea(valorBase, valorHeight));



// Desafio 3 ---------------------------------------------------------------------------------------------------
function splitSentence(frase) {
  let stringArray = frase.split(" ")
  return stringArray;
}

console.log(splitSentence("go Trybe", ""));


// Desafio 4 ---------------------------------------------------------------------------------------------------
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

// Desafio 5 ---------------------------------------------------------------------------------------------------
function footballPoints(wins, ties) {
  let vitorias = wins * 3;
  let empates = ties
  let sum = vitorias + empates;
  return sum
}
console.log(footballPoints(14, 8));



// Desafio 6 ---------------------------------------------------------------------------------------------------
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

// Desafio 7 ---------------------------------------------------------------------------------------------------
function catAndMouse(mouse, cat1, cat2) {

  if (cat1 === cat2 || mouse - cat1 === cat2 - mouse) {
    return "os gatos trombam e o rato foge";
  } else if (cat1 - mouse < cat2 - mouse) {
    return "cat1";
  } else {
    return "cat2";
  }
}

// Desafio 8 ------------------------------------------------------------------------------------------------------
function fizzBuzz(nums) {
  let result = [];

  for (let index = 0; index < nums.length; index += 1) {
    if (nums[index] % 3 === 0 && nums[index] % 5 === 0) {
      result.push("fizzBuzz");
    } else if (nums[index] % 3 === 0) {
      result.push("fizz");
    } else if (nums[index] % 5 === 0) {
      result.push("buzz");
    } else {
      result.push("bug!");
    }
  }
  return result;
}

// Desafio 9 ---------------------------------------------------------------------------------------------------
function encode(sentence) {
  for (let index = 0; index < sentence.length; index++) {
    switch (sentence[index]) {
      case "a":
        sentence = sentence.replace("a", "1");
      case "e":
        sentence = sentence.replace("e", "2");
      case "i":
        sentence = sentence.replace("i", "3");
      case "o":
        sentence = sentence.replace("o", "4");
      case "u":
        sentence = sentence.replace("u", "5");
    }
  }
  return sentence
}

function decode(code) {
  for (let index = 0; index < code.length; index++) {
    switch (code[index]) {
      case "1":
        code = code.replace("1", "a");
      case "2":
        code = code.replace("2", "e");
      case "3":
        code = code.replace("3", "i");
      case "4":
        code = code.replace("4", "o");
      case "5":
        code = code.replace("5", "u");
    }
  }
  return code;
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
