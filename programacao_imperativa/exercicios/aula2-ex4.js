//Jose
nome = 'José';
sobrenome = 'da Silva';
idade = 27;
peso = 83.5;
altura = 1.70;
plano = true;

if (plano == true) {
    statusPlano = 'Possui plano';
}else {
    statusPlano = 'Não possui plano'
}

//Sobre José
console.log(nome, sobrenome, '\n', idade, '\n', peso, '\n', altura, '\n', statusPlano, '\n',)

//Resultado
let imc = peso/(altura**2);
console.log(nome + ' ' + sobrenome + ' ' + 'tem' + ' ' + idade + ' ' + 'anos e seu índice de massa corporal é de' + ' ' + imc.toFixed(2));