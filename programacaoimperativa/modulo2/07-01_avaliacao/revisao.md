# Revisão

1.  Node.js

    1.1 Módulos e requires

    - Unidade de código que se encarrega de resolver uma problemática em particular

        <br>

          //exportar um módulo com o **module.exports**

              module.exports = nomedomodulo;

        <br>
        <br>

          //requerer o módulo exportado em um arquivo como o **require**

              let umaVariavelQualquer = require(./modulos/nomedoarquivo)

        <br>
        <br>

          //execução de um log no terminal, de um módulo exportado e requerido

              console.log( **umaVariavelQualquer** . *funcaoQualquer( **param1**, **param2** )* )

        <br>
        <br>
        <br>

      1.2 Documentação do Node.js

        [nodejs.org](https://nodejs.org/dist/latest-v12.x/docs/api/)

        [File System module](https://nodejs.org/api/fs.html)

        [Process module](https://nodejs.org/dist/latest-v12.x/docs/api/process.html)

        <br>

2.  Tipos de dados

    - number
    - string
    - boolean
    - object = data collection

            let pessoa = { nome: Pedro, idade: 34, solteiro: true}

    - array = special type of object

            let comidasFavoritas = ['Pizza', 'Macarronada', 'Lasanha'];

    - NaN = not a number
    - Null
    - Undefined

            let saudacao; // undefined, doesn't have a value
                        saudacao = "Olá!"; // now it has a value

    <br>

3.  Funções, arrowfunctions e callbacks

    3.1 Basic structure

        function **somar** (*a, b*) {
                      return a + b

    <br>

    3.2 Functions declaration / function statement

        function **fazerSorvete** (*quantidade*) {
                      return 'sorvete'.repeat (quantidade);

    <br>

    3.3 Functions Expression (anonym functions)

    - São atribuídas como _valor de uma variável_

    <br>

        let fazerSushi = function (*quantidade*) {
                      return 'sushi'.repeat (quantidade);

    <br>

    3.4 Invocar uma função

    <br>

        fazerSushi(param1, param2, paramX); //retornará muitos sushis

    <br>

    - Outra maneira de atribuir valores

    <br>

        let fazerSushi = function (*quantidade = 10*) {

            return 'sushi'.repeat (quantidade);
        }

        fazerSushi();

    <br>

    3.5 Arrow functions => (fat arrow)

        let saudacao = () => 'Olá mundo!';

        let dobro = numero => numero * 2;

        let soma = (a, b) => a + b;

        let horaAtual = () => {
                      let data = new Date();
              return data.getHours() + ':' + data.getMinutes();

    <br>

    3.6 Callback

    > Um callback é uma função que é passada como parâmetro de outra função.<br>A função que o recebe é quem se encarregará de executá-lo quando for necessário.

4.  Condicionais

5.  Arrays e Métodos de Arrays

6.  Strings e Métodos de Strings

7.  Objetos literais
