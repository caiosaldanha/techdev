/*
Crie um array que contenha nomes de produtos para compra.

Após isso, exiba no console os resultados das funções relacionadas aos arrays,
que são: Join, Pop, Push, Shift e Unshift.

Também se deve escrever com suas palavras, o que cada função realiza.

Seguem abaixo alguns exemplos.
console.log(“O método Join realiza tal coisa”)
console.log(RESULTADO_DO_JOIN)
 */


//Criamos nosso array com a lista de compras
let listaCompras = ['Detergente', 'Banana', 'Abacate', 'Shampoo'];


//Quero saber quantos elementos, inicialmente possuimos em nossa lista/array
console.log("Em nossa lista de compras temos", listaCompras.length,"elementos! A seguir, com o metodo join() vou mostra-la para voce quebrando uma linha para cada elemento como separador. Veja so que legal:", '\n');

//O metodo Join junta os elementos de um array usando um separador que eu estabelecer. Nesse caso, quero uma lista com cada item ocupando uma linha, portando vou utilizar o comando '\n' para obter a quebra de linha desejada.
console.log(listaCompras.join("\n"),'\n');

//O metodo Pop retira o ultimo elemento de nossa lista/array e, ao mesmo tempo, nos retorna o elemento eliminado
console.log("Eliminamos o ultimo elemento", listaCompras.pop(), "com o metodo pop():",'\n');
console.log("Nossa lista agora eh composta pelos seguintes itens:",'\n')
console.log(listaCompras.join("\n"),'\n');

//O metodo de array Push adiciona um ou quantos elementos nos desejarmos ao FINAL do array e retorna o novo numero de elementos do array.
console.log("Ops! Esqueci de adicionar o Sabao em po a minha lista.",'\n')
console.log("Agora que adicionei o Sabao em po com o metodo push(), tenho de comprar",listaCompras.push('Sabao em po'),"itens",'\n');
console.log("Minha lista esta assim agora:",'\n')
console.log(listaCompras.join("\n"),'\n');

//O metodo shift elimina o primeiro elemento de nossa lista/array e retorna o elemento eliminado
console.log("Vamos eliminar o primeiro elemento", listaCompras.shift(), "com o metodo shift()?",'\n');
console.log("Nossa lista agora eh composta pelos seguintes itens:",'\n')
console.log(listaCompras.join("\n"),'\n');

//O metodo unshift adiciona um ou mais elementos ao inicio de nossa lista/array e retorna o novo numero de elementos
console.log("Ainda esqueci de adicionar dois itens importantissimos! OH MY GOD!", listaCompras.unshift('Tomate', 'Batata'), "itens deve ter minha lista na verdade!",'\n');
console.log("Adicionei o tomate e a batata ao incio de nossa lista com o metodo unshift(), veja so:",'\n')
console.log(listaCompras.join("\n"),'\n');

//final da historinha
console.log("Agora sim estou preparado para ir ao mercado!\nObrigado titio array, digo, lista de compras! :)");