/* 
Crie uma função construtora chamada Restaurante, que receba como parâmetros o nome do restaurante e o cardápio (que será um array de strings).

Após isso chame a função entrada() dentro do objeto, que irá trazer uma mensagem de boas-vindas, informando o nome do restaurante, e o cardápio.
*/

//Restaurante
let restaurante = {
    nome: 'Lê comidê',
    cardapio: ['Omelete','Ovo no prato','Salsicha maluca'],
    saudacao: 'Seja bem-vindo ao Le comidê, nosso cardápio: ',
    entrada: function() {return this.saudacao + this.cardapio.join(", ");}
};

//chamada da função entrada
console.log(restaurante.entrada());