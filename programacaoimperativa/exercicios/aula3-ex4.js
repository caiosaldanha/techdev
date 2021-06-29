function calcularIndiceDeMassaCorporal(peso, altura) {
  return (peso / (altura / 100) ** 2).toFixed(2);
}

jose = calcularIndiceDeMassaCorporal(100, 185);
console.log("IMC= " + jose);

rose = calcularIndiceDeMassaCorporal(50, 156);
console.log("IMC= " + rose);

/* raciocinio professora

function calcularIndiceDeMassaCorporal (peso, altura) {

    //altura deve ser em m - converter
    altura = altura/100
    return peso/Math.pow(altura,2);
    return peso/altura*altura;
    return peso/altura**2;

}

//invocando a função
console.log(calcularIndiceDeMassaCorporal(70,168))


*/
