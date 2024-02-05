// ESTRUTURAS DE REPETIÇÃO WHILE - DO WHILE

const prompt = require("readline-sync");

let saldo = Number(prompt.question("Qual eh o seu saldo ?"));

while (saldo < 0) {
  saldo = Number(
    prompt.question("Saldo inva-lido! Por favor, informe novamente!!")
  );
}

console.log(saldo);
