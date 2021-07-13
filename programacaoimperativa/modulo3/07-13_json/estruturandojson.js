let objeto = {
  numero: 1,
  string: "Uma string!",
  objetoinside: { variavel: 1 },
  array: ["indice0", "indice1"],
};

let arrayTransformado = JSON.stringify(objeto.array);

console.log(arrayTransformado);

let desserializado = JSON.stringify(objeto);

console.log(objeto);

console.log(objeto.objetoinside);
