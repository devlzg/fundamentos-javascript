/*
    Spread: ...
    Rest parameters
    Optional chaining: ?.
    Nullish coalescing: ??
*/

/*  Spread (...): Serve para "espalhar" elementos de um objeto iterável (arrays, strings, objetos).
    Útil para criar cópias independentes, mantendo a imutabilidade. */
const original = [1, 2, 3];
const copia = [...original]; // <- cria um novo array copiando o original, mas alterações nele não afetam o original

const numeros = [2, 3];
const novosNumeros = [1, ...numeros, 4, 5]; // [1, 2, 3, 4, 5]

// Atualiza valores específicos no objeto, mantendo os anteriores
const usuario = { nome: "Maria", idade: 25 };
const usuarioAtualizado = { ...usuario, idade: 26 }; // Atualiza idade

// Converte strings em arrays
const texto = "Hello";
const caracteres = [...texto]; // ["H", "e", "l", "l", "o"]

/*  Rest Parameters (...): Representa um número indefinido de parâmetros, 
    é o oposto do spread operator, apesar de usar a mesma sintaxe
*/
function minhaFuncao(...args) {
  // 'args' é um array com todos os argumentos passados
  console.log(args);
}

minhaFuncao(1, 2, 3); // [1, 2, 3]
minhaFuncao('a', 'b'); // ['a', 'b']

// Possível combinar com outros argumentos, mas deve ser colocado por último
function calcular(op, ...valores) {
  if (op === '+') {
    return valores.reduce((a, b) => a + b, 0);
  } else if (op === '*') {
    return valores.reduce((a, b) => a * b, 1);
  }
}

console.log(calcular('+', 1, 2, 3)); // 6
console.log(calcular('*', 2, 3, 4)); // 24

// Útil para separar elementos

// Arrays
const [primeiro, segundo, ...resto] = [1, 2, 3, 4, 5];
console.log(primeiro); // 1
console.log(segundo);  // 2
console.log(resto);    // [3, 4, 5]

// Objetos
const pessoa = {
  nome: "João",
  idade: 30,
  cidade: "SP",
  profissao: "Dev"
};

const { nome, ...outrosDados } = pessoa;
console.log(nome);        // "João"
console.log(outrosDados); // { idade: 30, cidade: "SP", profissao: "Dev" }

function criarUsuario(nome, email, ...permissoes) {
  return {
    nome,
    email,
    permissoes: permissoes.length > 0 ? permissoes : ['leitura']
  };
}

const admin = criarUsuario("Ana", "ana@email.com", "admin", "moderador", "leitura");
const user = criarUsuario("João", "joao@email.com"); // Usa valor padrão

console.log(admin.permissoes); // ['admin', 'moderador', 'leitura']

/*  
    Rest: "Junte os itens RESTantes em um array"
    Spread: "ESPALHE os itens deste array"
*/

/*
    Optional Chaining Operator (?.): Permite acessar propriedades aninhadas de objetos de forma segura,
    sem causar erros caso alguma propriedade intermediária seja null ou undefined. Antes desse operador
    existir, era necessário fazer verificações manuais em cada propriedade para checar se existiam antes
    de acessá-las. Utilizado principalmente quando tentar acessar uma propriedade que pode não existir.
*/

const usuarioOC = {
  nome: "Maria",
  endereco: {
    cidade: "Rio de Janeiro",
    cep: "20000-000"
  }
};

// Acesso seguro
console.log(usuarioOC?.endereco?.cidade);    // "Rio de Janeiro"
console.log(usuarioOC?.contato?.telefone);   // undefined (não dá erro!)

/*
    Nullish Coalescing (??): é um operador lógico que retorna o operando do lado
    direito apenas quando o operando do lado esquerdo é null ou undefined.
    É uma forma segura de fornecer valores padrão.
 */

// Problema com o operador OR (||)
const valorOR = 0;
const valorPadraoOR = valorOR || 10;
console.log(valorPadrao); // 10 (ERRO! 0 é um valor válido!)

const textoOR = "";
const textoPadraoOR = textoOR || "vazio";
console.log(textoPadrao); // "vazio" (ERRO! "" é um valor válido!)

const falsoOR = false;
const booleanoPadraoOR = falsoOR || true;
console.log(booleanoPadrao); // true (ERRO! false é um valor válido!)

const valorNC = 0;
const valorPadrao = valorNC ?? 10;
console.log(valorPadrao); // 0 (CORRETO! Só usa 10 se for null/undefined)

const textoNC = "";
const textoPadrao = textoNC ?? "vazio";
console.log(textoPadrao); // "" (CORRETO!)

const falsoNC = false;
const booleanoPadrao = falsoNC ?? true;
console.log(booleanoPadrao); // false (CORRETO!)

/*
    ?? → Só usa valor padrão se for null ou undefined
    || → Usa valor padrão se for falsy (false, 0, "", null, undefined, NaN)
 */