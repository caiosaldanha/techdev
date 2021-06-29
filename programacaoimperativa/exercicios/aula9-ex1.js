function min(...numeros){
    let menor = numeros[0]
    for(let i=0; i<numeros.length; i++){
      if(numeros[i] < menor ){
        menor = numeros[i]
      }
    }
    
    return menor
  }
  console.log(Math.min(1,5))
  console.log(min(1,5))