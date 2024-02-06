// ESTRUTURAS DE REPETIÇÃO WHILE - DO WHILE

const prompt = require("readline-sync");

//let saldo = Number(prompt.question("Qual eh o seu saldo ?"));

//while (saldo < 0) {
//saldo = Number(
//  prompt.question("Saldo inva-lido! Por favor, informe novamente!!")
// );
//}

//console.log(saldo);

// Exemplo 2

let notaDoAluno = Number(prompt.question("Informe a nota do aluno: "));

let somaDasNotas = 0; // Acumulador
// 10 > 10
// 8 > 18

let qtdNotasValidas = 0; // Acumulador (Quantidade de notas válidas digitadas)

while (notaDoAluno >= 5) {
  somaDasNotas = somaDasNotas + notaDoAluno; //Incrementando o acumulador que é a soma das notas.
  notaDoAluno = Number(prompt.question("Informe a próxima nota: "));
  qtdNotasValidas = qtdNotasValidas + 1;
}

console.log(somaDasNotas);
console.log(qtdNotasValidas);

console.log("Média das notas dos alunos", somaDasNotas / qtdNotasValidas);
