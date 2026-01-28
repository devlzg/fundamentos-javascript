// Tipos de Funções

/*
    Função tradicional
 */

function funcaoTradicional(argumento1, argumento2) {
    resultado = argumento1 + argumento2;
    return resultado;
}

/*
    Arrow Function: Sintaxe mais simples para criar funções
*/
const funcaoArrow = (arg1, arg2) => {
    resultado = arg1 + arg2;
    return
}
// Ou ainda mais simplificado (sem return)
const arrowFunctionArgs = (arg1, arg2) => arg1 + arg2;
const arrowFunctionArg = arg1 => arg1 + arg1;
const arrowFunctionNoArgs = () => "Olá!";


// FUNÇÃO TRADICIONAL
const numeros = [1, 2, 3];
const dobradosTradicional = numeros.map(function(n) {
  return n * 2;
});
// ARROW FUNCTION (muito mais limpo!)
const dobradosArrow = numeros.map(n => n * 2);
// Outros exemplos
setTimeout(function() {
  console.log("Oi");
}, 1000);
setTimeout(() => console.log("Oi"), 1000);


// Diferente da tradicional, é possível usar o this
const pessoa = {
  nome: "João",
  saudacao: function() {
    setTimeout(() => {
      console.log(`Olá, ${this.nome}`); // Funciona! Usa 'this' do escopo pai
    }, 1000);
  }
};
pessoa.saudacao(); // "Olá, João"


// Arrow function NÃO tem arguments
const arrow1 = () => {
  console.log(arguments); // ReferenceError!
};
// Solução: usar rest parameters
const arrow2 = (...args) => {
  console.log(args); // Array real
};


// Arrow function NÃO pode ser usada como construtor
const Pessoa = (nome) => {
  this.nome = nome;
};
const p = new Pessoa("João"); // TypeError!


// Arrow não tem prototype
function Tradicional() {}
console.log(Tradicional.prototype); // Existe
const Arrow = () => {};
console.log(Arrow.prototype); // undefined


// A principal vantagem é legibilidade, o código fica mais conciso:
// Em arrays
const numeros1 = [1, 2, 3, 4];
// Tradicional
const pares1 = numeros1.filter(function(n) {
  return n % 2 === 0;
});
// Arrow
const pares2 = numeros1.filter(n => n % 2 === 0);

