let acessoAutorizado = "Acesso autorizado";
let acessoNegado = "Acesso negado";
let acessoAutorizadoAcompanhado = "Acesso autorizado somente com acompanhante";

function podeSubir(altura, acompanhada) {
  if (altura >= 1.4 && altura <= 2.0) {
    console.log(acessoAutorizado);
  } else if (altura >= 1.2 && altura <= 1.4 && acompanhada == "sim") {
    console.log(acessoAutorizadoAcompanhado);
  } else if (altura >= 1.2 && altura <= 1.4 && acompanhada == "nao") {
    console.log(acessoNegado);
  } else if (altura < 1.2) {
    console.log(acessoNegado);
  } else if ((altura > 2.1 && (acompanhada = "nao")) || (acompanhada = "sim")) {
    console.log("Nao vai rolar de brincar!");
  }
}

podeSubir(1.3, "sim");
