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
  return string.split(" ")
  
}

// console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(arrayStrings) {
  return arrayStrings[arrayStrings.length -1] + ", " + arrayStrings[0];
};

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;

};
// Desafio 6
function highestCount(arrayNumbers) {
  let maiorNumero = arrayNumbers[0];
  let contador = 0;

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
function catAndMouse(mouse, cat1, cat2) {
  if (mouse - cat1 === cat2 - mouse || cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  } if (cat1 - mouse < cat2 - mouse) {
    return 'cat1';
  } if (cat2 - mouse < cat1 - mouse) {
    return 'cat2';
  }
}
const array = [2, 15, 7, 9, 45]
// Desafio 8
function fizzBuzz(arrayNumbers2) {
  const arrayFizzBuzz = [];
  for (let index = 0; index < arrayNumbers2.length; index += 1) {
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
function encode(string) {
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
      case 'a':
        string = string.replace('a', '1');
      case 'e':
        string = string.replace('e', '2');
      case 'i':
        string = string.replace('i', '3');
      case 'o':
        string = string.replace('o', '4');
      case 'u':
        string = string.replace('u', '5');
    }
  }
  return string;
}

function decode(code) {
  for (let index = 0; index < code.length; index += 1) {
    switch (code[index]) {
      case '1':
        code = code.replace('1', 'a');
      case '2':
        code = code.replace('2', 'e');
      case '3':
        code = code.replace('3', 'i');
      case '4':
        code = code.replace('4', 'o');
      case '5':
        code = code.replace('5', 'u');
    }
  }
  return code;
}

// Desafio 10
function techList(arrayTechNames, names) {
  let arrayResultado = [];
  arrayTechNames.sort();
  if (arrayTechNames.length === 0) {
    return 'Vazio!';
  } else {
    for (let tech of arrayTechNames) {
      arrayResultado.push({
        tech: tech,
        name: names,
      });
    }
  }
  return arrayResultado;
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
