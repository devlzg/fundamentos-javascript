// Escopo

/*
    Closure: É uma propriedade que permite que funções dentro de funções continuem acessando
    variáveis da função pai, mesmo após o fim de sua execução. Em outros casos, as variáveis se tornariam inacessíveis.
    Pra ilustrar, é um conceito parecido com o de ter um atributo privado e acessá-lo somente através de um getter.
    Serve principalmente para encapsulamento e para guardar estado.
*/
function contador() {
  let count = 0;
  
  return function() {
    count++;
    return count;
  };
}

const meuContador = contador();
console.log(meuContador()); // 1
console.log(meuContador()); // 2
console.log(meuContador()); // 3
// Cada contador mantém seu próprio estado

function criarUsuario(nome) {
  let senha = "12345"; // "Privada"
  
  return {
    getNome: () => nome,
    verificarSenha: (tentativa) => tentativa === senha
  };
}

const usuario = criarUsuario("João");
console.log(usuario.getNome()); // "João"
console.log(usuario.senha); // undefined (não acessível diretamente)
console.log(usuario.verificarSenha("12345")); // true

/*
    Hoisting: Automaticamente "move" trechos de código para o início do arquivo
    para que o interpretador consiga referenciar variáveis e funções antes de
    serem inicializadas. Ele move apenas trechos específicos, como funções 
    declaradas com a palavra-chave function ou variáveis criadas com var.
    Variáveis declaradas com var sofrem o hoisting mas ficam como undefined,
    é como se tivessem sido declaradas mas não inicializadas.
 */

var a = 10
console.log(a) // printa 10

//                                              --> var b = undefined (declaração)
console.log(b) // printa undefined              --> console.log(b)
var b = 10 //                                   --> b = 10 (inicializa)


