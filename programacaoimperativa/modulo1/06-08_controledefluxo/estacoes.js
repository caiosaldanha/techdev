/*
Crie um algoritmo utilizando switch que receba uma string e tenha 5 situações:
Situação 1 – Caso na string esteja escrito “Verão”, deve exibir no console a mensagem: “Que calor hein?!”.
Situação 2 – Caso na string esteja escrito “Inverno”, deve exibir no console a mensagem: “Frio dms!”.
Situação 3 – Caso na string esteja escrito “Outono”, deve exibir no console a mensagem: “É a estação em que as folhas caem”.
Situação 4 – Caso na string esteja escrito “Primavera”, deve exibir no console a mensagem: “O momento em que as flores crescem”.
*/

let estacao = "primavera";

switch (estacao) {
    case "verao":
        console.log("Que calor hein?!");
        break;
    case "inverno":
        console.log("Frio dms!");
        break;
    case "outono":
        console.log("E a estacao em que as folhas caem");
        break
    case "primavera":
        console.log("O momento em que as flores crescem")
        break;
    default:
        console.log("Ops, estacao invalida");
}