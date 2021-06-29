//Variáveis
var nomeJogador = "Zé da Silva";
var golsJogador = 0;
var precoEmDolares = 0;

//funcoes
function fazerGol(adicionarGol, adicionarValor) {
  adicionarGol = golsJogador++;
  adicionarValor = precoEmDolares += 10000;
  return console.log("GOL!!!!!!!");
}

function hatTrick(fezTresGols, valorizouZe) {
  (fezTresGols = fazerGol()), fazerGol(), fazerGol();
  valorizouZe = precoEmDolares *= 1.1;
}

//Gols do Zé
fazerGol();

//HatTrick
hatTrick();

//Mostre os gols
console.log(golsJogador);
console.log(precoEmDolares);
