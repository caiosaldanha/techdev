/*---------------------------------------------------------------- 

- Transformar as seguintes funcoes em arrow functions:

function print(mensagem){
    console.log(mensagem)
}

print("Ola, bom dia");

function soma(n1,n2) {
    return n1 + n2
}

console.log(soma(10, 10));

------------------------------------------------------------------*/

//print
let print = mensagem => console.log(mensagem)
print("Ola, bom dia");

//soma com callback da print arrow function declarada anteriormente "print"
let soma = (n1,n2) => n1+n2;
print(soma(10,20));