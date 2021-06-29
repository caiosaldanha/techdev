//conceito de callback = função é passada como parâmetro para outra função
let texto = "bla bla bla";
let funcao = (_) => console.log("Olá mundo!!!!!");

//esta função será passada como parâmetro para outra função
//milissegundos 1seg=1000 milissegundos

//setTimeout(funcao,5000);   //não colocar ()
setInterval(() => {
  console.log(texto);
}, 3000);
