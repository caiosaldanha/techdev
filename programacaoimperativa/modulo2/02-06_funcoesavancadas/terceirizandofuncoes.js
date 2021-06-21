/*---------------------------------------------------

Crie uma função acaoCarro(), que receberá uma callback como parâmetro. Após isso, crie duas funções: andar() – deve exibir uma mensagem dizendo que o carro está andando – e parar() – deve exibir uma mensagem dizendo que o carro parou.

Execute ambas as ações utilizando a função acaoCarro(), passando suas ações como callbacks.

----------------------------------------------------*/

//acoes de para e andar do carrinho
let andar = () => "o carro esta andando";
let parar = () => "o carro parou";

//aqui esta o motor do carro
let acaoCarro = (acao) => console.log(acao);

//o carro ira andar 10km para chegarmos em casa
for (let i = 0; i < 10; i++) {
    let km = 0;
    acaoCarro(andar());    
}

//chegamos em casa! uhull o/
acaoCarro(parar());
