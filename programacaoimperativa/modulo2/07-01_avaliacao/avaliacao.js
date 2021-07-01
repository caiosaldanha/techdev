/*
Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
*/

//Padroes de tempo de cada prato
let tempoPipoca = 10;
let tempoMacarrao = 8;
let tempoCarne = 15;
let tempoFeijao = 12;
let tempoBrigadeiro = 8;

/*----------------PIPOCA-------------*/
//Objeto Pipoca
function Pipoca(nome, tempo)
{
    this.nome = nome;
    this.tempo = tempo;
    this.checarNome = function () {
        if (this.nome != "Pipoca") {
            return ("Prato inexistente");
        } else {
            return ("OK")
        }
      };
    this.preparar = function () {
        if (this.tempo > 2*tempoPipoca && this.tempo < 3*tempoPipoca){
            return ("A comida queimou!!");
        } if (this.tempo < tempoPipoca) {
            return ("Tempo insuficiente para " + this.nome);
        } if (this.tempo > 3*tempoPipoca) {
            return ("KABUM!!! Já era seu prato de " + this.nome);
        }
        else {
            return ("Prato de " + this.nome + " está pronto! Bom apetite!!!");
        }
    };
}

//Criamos o prato de pipoca
let pratoPipoca = new Pipoca("Pipoca", 10);

//Criamos o pedido de pipoca
function fazerPipoca() {
    if (pratoPipoca.checarNome() == "OK") {
        console.log(pratoPipoca.preparar());
    }else {
        console.log(pratoPipoca.checarNome());
    }
};

//Pedimos para fazer pipoca
fazerPipoca();


/*----------------MACARRAO-------------*/
//Objeto Macarrao
function Macarrao(nome, tempo)
{
    this.nome = nome;
    this.tempo = tempo;
    this.checarNome = function () {
        if (this.nome != "Macarrao") {
            return ("Prato inexistente");
        } else {
            return ("OK")
        }
      };
    this.preparar = function () {
        if (this.tempo > 2*tempoMacarrao && this.tempo < 3*tempoMacarrao){
            return ("A comida queimou!!");
        } if (this.tempo < tempoMacarrao) {
            return ("Tempo insuficiente para " + this.nome);
        } if (this.tempo > 3*tempoMacarrao) {
            return ("KABUM!!! Já era seu prato de " + this.nome);
        }
        else {
            return ("Prato de " + this.nome + " está pronto! Bom apetite!!!");
        }
    };
}

//Criamos o prato de macarrao
let pratoMacarrao = new Macarrao("Macarrao", 10);

//Criamos o pedido de macarrao
function fazerMacarrao() {
    if (pratoMacarrao.checarNome() == "OK") {
        console.log(pratoMacarrao.preparar());
    }else {
        console.log(pratoMacarrao.checarNome());
    }
};

//Pedimos para fazer macarrao
fazerMacarrao();


/*----------------Carne-------------*/
//Objeto Carne
function Carne(nome, tempo)
{
    this.nome = nome;
    this.tempo = tempo;
    this.checarNome = function () {
        if (this.nome != "Carne") {
            return ("Prato inexistente");
        } else {
            return ("OK")
        }
      };
    this.preparar = function () {
        if (this.tempo > 2*tempoCarne && this.tempo < 3*tempoCarne){
            return ("A comida queimou!!");
        } if (this.tempo < tempoCarne) {
            return ("Tempo insuficiente para " + this.nome);
        } if (this.tempo > 3*tempoCarne) {
            return ("KABUM!!! Já era seu prato de " + this.nome);
        }
        else {
            return ("Prato de " + this.nome + " está pronto! Bom apetite!!!");
        }
    };
}

//Criamos o prato de macarrao
let pratoCarne = new Carne("Carne", 10);

//Criamos o pedido de macarrao
function fazerCarne() {
    if (pratoCarne.checarNome() == "OK") {
        console.log(pratoCarne.preparar());
    }else {
        console.log(pratoCarne.checarNome());
    }
};

//Pedimos para fazer carne
fazerCarne();