/*

Crie um array numerosPrimos e atribua alguns valores a ele que correspondam ao seu nome. Além disso, crie outro array, desta vez chamado numeros, que deve conter os valores do array numerosPrimos adicionados através do spread, juntos com outros números.

Crie uma função maiorNumero() que receba N parâmetros, e retorne o menor número entre eles, utilizando a função Math.min(). Uma observação importante é que a função Math.min() NÃO deve receber um array como parâmetro, sendo portanto, necessário expandir os valores.

*/

//array de números primos
let numerosPrimos = [2, 3, 5 , 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];

//array contendo os numeros primos + outros números
let numeros = [...numerosPrimos, 1, 4, 6, 8, 9, 10];

//função arrow que obtem o menor número contido no array em spread, numeros (correção do nome da função para menorNumero ao invés de maiorNumero para fazer mais sentido)
let menorNumero = () => Math.min(...numeros);

//print menorNumero
console.log(menorNumero());