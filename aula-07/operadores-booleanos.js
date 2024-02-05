// Operadores Booleanos

// = ATRIBUIÇÃO
// === IGUAL
// ===! DIFERENTE
// > MAIOR
// < MENOR
// >= MAIOR OU IGUAL
// <= MENOR OU IGUAL
// && e... (conjunção)
// || (ou um ou outro)

const numero1 = 10; // Atribuição
const numero2 = 21; // Atribuição

console.log(numero1 == numero2); //Comparação - IGUAL
console.log(numero1 === numero2); //Comparação - IGUAL
console.log(numero1 == "10"); //Comparação com dois ==, só compara o valor, não compara o tipo.

// Uma boa prática é utilizar os três === !!! Pois compara conteúdo e tipo.

console.log(numero1 !== numero2); //Diferente

const idadePessoa1 = 15;
const idadePessoa2 = 39;

console.log(idadePessoa1 >= 18 && idadePessoa2 >= 18); // SE UM OU OUTRO FOR FALSO, A RESPOSTA É FALSO.
console.log(idadePessoa1 >= 18 || idadePessoa2 >= 18); // SE UM OU OUTRO FOR VERDADEIRO, A RESPOSTA É VERDADEIRO.

// OPERADOR DE INVERSÃO
console.log(!true); // OBTER A RESPOSTA AO CONTRÁRIO

console.log(!((idadePessoa1) => 18)); // Retorna verdadeiro se a pessoa for menor de idade.

// ESTRTUTURAS CONDICIONAIS.
