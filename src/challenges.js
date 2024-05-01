// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2 ? true : false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(code) {
  return code.split(' ');
}

// console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(arraycodes) {
  return arraycodes[arraycodes.length - 1] + ', ' + arraycodes[0];
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
function encode(code) {
  for (let index = 0; index < code.length; index++) {
    switch (code[index]) {
      case 'a':
        code = code.replace('a', 1);
        break;
      case 'e':
        code = code.replace('e', 2);
        break;
      case 'i':
        code = code.replace('i', 3);
        break;
      case 'o':
        code = code.replace('o', 4);
        break;
      case 'u':
        code = code.replace('u', 5);
        break;
    }
  }
  return code;
}

// console.log(encode('hi there!'));

function decode(code) {
  for (let index = 0; index < code.length; index++) {
    switch (code[index]) {
      case '1':
        code = code.replace(1, 'a');
        break;
      case '2':
        code = code.replace('2', 'e');
        break;
      case '3':
        code = code.replace('3', 'i');
        break;
      case '4':
        code = code.replace('4', 'o');
        break;
      case '5':
        code = code.replace('5', 'u');
        break;
    }
  }
  return code;
}

// Desafio 10
function techList(arrayTechNames, names) {
  let arrayResultado = [];
  arrayTechNames.sort();
  if (arrayTechNames.length === 0 || !arrayTechNames ) {
    return 'Vazio!';
  } else {
    for (let tecnology of arrayTechNames) {
      arrayResultado.push({
        tech: tecnology,
        name: names,
      });
    }
  }
  return arrayResultado;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

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
