// Útil quando sua variável possui valores especificos.
// Break para não sair executando os demais passos.

//SWITCH CASE

const permissoes = "trainee";

switch (permissoes) {
  case "master":
    console.log("Você é administrador master !!");
    break;

  case "pleno":
    console.log("Você é administrador pleno !!");
    break;

  case "senior":
    console.log("Você é administrador senior !!");
    break;

  case "trainee":
    console.log("Você é administrador trainee !!");
    break;
}
