var entrada = require("readline-sync");
var nome = (entrada.question("Como voce se chama?: "));
var anos = parseFloat(entrada.question("Quantos anos voce trabalha aqui?: "));
var salario = parseFloat(entrada.question("Qual é o seu salario atual?: "));
if (anos < 3) {
    salario = (salario * 0.3 + salario);
    console.log("".concat(nome, ", O seu novo salario ficou em ").concat(salario));
}
else if (3 == salario || salario < 10) {
    salario = (salario * 0.125 + salario);
    console.log("".concat(nome, ", O seu novo salario ficou em ").concat(salario));
}
else {
    salario = (salario * 0.20 + salario);
    console.log("".concat(nome, ", O seu novo salario ficou em ").concat(salario));
}
