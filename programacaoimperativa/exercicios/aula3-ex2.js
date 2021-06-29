let total;
function somar(n1, n2) {
  //corpo - escopo da função
  return n1 + n2;
}

//invocando a função
//excução se dá de dentro para fora
//console.log(somar(100, 200));
total = somar(100, 200);
console.log("Total = " + total);
