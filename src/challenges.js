// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2 ? true : false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(arrayStrings) {
  return arrayStrings[arrayStrings.length - 1] + ', ' + arrayStrings[0];
}

// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}
// Desafio 6
function highestCount(arrayNumbers) {
  let count = 0;
  let biggestNumber = arrayNumbers[0];

  for (let index = 1; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index] > biggestNumber) {
      biggestNumber = arrayNumbers[index];
    }
  }

  for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index] === biggestNumber) {
      count += 1;
    }
  }
  return count;
}
//   let count = 0;
//   const biggestNumber = Math.max(...arrayNumbers);
//   for (let index = 0; index < arrayNumbers.length; index++) {
//     if (arrayNumbers[index] === biggestNumber) {
//       count += 1;
//     }
//   }
//   return count;
//

// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (mouse - cat1 === cat2 - mouse || cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  }
  if (cat1 - mouse < cat2 - mouse) {
    return 'cat1';
  }
  if (cat2 - mouse < cat1 - mouse) {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(arrayNumbers2) {
  const arrayFizzBuzz = [];

  for (let index = 0; index < arrayNumbers2.length; index++) {
    if (arrayNumbers2[index] % 3 === 0 && arrayNumbers2[index] % 5 === 0) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (arrayNumbers2[index] % 3 === 0) {
      arrayFizzBuzz.push('fizz');
    } else if (arrayNumbers2[index] % 5 === 0) {
      arrayFizzBuzz.push('buzz');
    } else {
      arrayFizzBuzz.push('bug!');
    }
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode(string) {}

function decode(code) {}

// Desafio 10
function techList(arrayTechNames, names) {}

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
