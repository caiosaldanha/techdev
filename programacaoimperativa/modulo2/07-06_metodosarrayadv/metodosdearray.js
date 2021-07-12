//Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.

let evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

console.log("Array par, original, evenNumbers: ", "\n", evenNumbers, "\n");

const makeItOdd = evenNumbers.map(function (arrayElements) {
  return arrayElements + 1;
});

console.log("Array ímpar, makeItOdd: ", "\n", makeItOdd, "\n");

//Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.
let arrayDeNomes = ["Maria", "Joao", "Maria", "Carlos", "José", "Everardow"];

let mostraMaria = arrayDeNomes.filter(function (cadeMaria) {
  return cadeMaria == "Maria";
});

console.log(mostraMaria, "\n");

//Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados. (????????????)
let arrayDeNumeros = [
  1, 5, 7, 9, 8, 3, 44, 55, 88, 77, 363, 66, 99, 252452, 527, 2827, 27827, 2452,
  42, 639,
];

let formatarArray = arrayDeNumeros.reduce(function (acumulador, numero) {
  return acumulador + numero;
});

console.log(formatarArray, "\n");

//Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”. Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7

const animais = ["Boi", "Pato", "Cavalo", "Vaca", "Cachorro"];

animais.forEach((nome_do_animal) =>
  console.log("O animal é", nome_do_animal, "\n")
);
