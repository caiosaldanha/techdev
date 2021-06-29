module.exports = {
  soma: (a, b) => a + b,
  subtracao: (a, b) => a - b,
  multiplicacao: (a, b) => a * b,
  divisao: (a, b) => {
    if (b != 0) {
      return a / b;
    }
    return "Impossível dvidir por 0!";
  },
};
