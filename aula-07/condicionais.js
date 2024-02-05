const prompt = require("readline-sync"); // Importando biblioteca.

//prompt.question antes da pergunta, faz parte da biblioteca readline-sync.
//const idade = Number(prompt.question("Qual sua idade ?")); // Convertendo o texto para número com "Number"
//const ehMaiorDeIdade = idade >= 18;

// ESTRUTURA CONDICIONAL. if/else

//if (idade >= 18) {
//console.log("Voce e maior de idade");
//} else {
// console.log("Você é menor de idade");
//}

// Média >= 7 => Aprovado
// Média < 7 e Média >= 5 Prova Final
// Média < 5 => Reprovado

const mediaDoAluno = 3;

if (mediaDoAluno >= 7) {
  console.log("Parabéns, você foi aprovado !! 👍😉");
} else if (mediaDoAluno >= 5) {
  console.log("Lamentamos, você foi para a prova final !!😪");
} else {
  console.log("Você foi reprovado, desejamos sorte para o próximo ano 💪");
}
