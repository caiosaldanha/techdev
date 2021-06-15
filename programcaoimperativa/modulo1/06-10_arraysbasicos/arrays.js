//microdesafio supimpa de arrays

//array filmes
let filmes = ["star wars", "clube da luta", "o poderoso chefão", "top gun", "interestelar"]

//checagem
console.log("O segundo elemento do array filmes eh:",filmes[1],'\n');

//segundo arrays
let cartoons = ["toy story", "Procurando Nemo", "kung-fu panda", "wally", "fortnite"]

//funcao que adiciona cada elemento do array de desenhos animados (cartoons) ao array de filme
function adicionar(x) {
    filmes.push(cartoons[x]);
    x++;
    filmes.push(cartoons[x]);
    x++;
    filmes.push(cartoons[x]);
    x++;
    filmes.push(cartoons[x]);
    x++;
    filmes.push(cartoons[x]);
    x++;
    return console.log(filmes,'\n');
}

//executa a funcao que adiciona cartoons em filmes
adicionar(0);

//eliminar o fortnite danadinho
filmes.pop();
console.log("Removendo fortnite...", '\n');
console.log(filmes);