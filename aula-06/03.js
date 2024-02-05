const prompt = require("readline-sync"); //Importando a biblioteca neste código.

const idade = prompt.question("Qual é a sua idade ?");

const idadeNumber = Number(idade);

console.log(idadeNumber, typeof idadeNumber);

// Coerção de Tipos
// Explicita
console.log(Number("x"));

// Implicita
soma = console.log(1 + "1");
console.log(soma);
console.log(10 - "5");
