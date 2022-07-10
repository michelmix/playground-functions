//1
function compareTrue(parametro1, paramentro2) {
  if (parametro1 === true && paramentro2 === true) {
    return true;
  } else {
    return false;
  }
}
const girafa = true;
const elefante = true;
const macaco = false;

compareTrue(girafa, elefante);
console.log(compareTrue);

//2
function calcArea(base, height) {
  return (base * height) / 2
}