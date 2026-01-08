/* 
    JavaScript é uma linguagem com tipos dinâmicos e fracos. Isso quer dizer que
    as variáveis não estão associadas a um tipo, podendo ter seu valor alterado
    para outros tipos. Fracamente tipada quer dizer que ela converte variáveis
    para outros tipos caso ocorra um erro de mismatch, ao invés de dar erro.
*/
/*
    Todos tipos primitivos são envoltos em um objeto, trazendo métodos e
    comportamentos próprios.
*/
/* Tipos de declaração de variável:
    - var: mutável e escopo global
    - let: mutável e escopo de bloco
    - const: imutável, bloco e exige inicialização imediata
*/

// String -> cadeia de caracteres. No módulo 4 eu falo sobre manipulação de strings. São indexadas como arrays
const nome = "Giovanna";

// number -> no Javascript, temos o tipo number que abrange tanto int quanto float.
// Porém, é tecnicamente um float double-precision de 64bit. "Use strings for textual data. When representing complex data, parse strings, and use the appropriate abstraction."
const idade = 21;

// boolean -> verdadeiro ou falso
const brasileira = true

// null -> quando uma variável não tem um objeto, como se explicitamente não 
// houvesse nada ali
const nulo = null;

// undefined -> quando um valor não foi declarado
let x;

/*  object -> valor na memória referenciável por um identificador. No JavaScript,
    são os únicos valores mutáveis. Funções também são consideradas objetos, com
    a diferença de que podem ser chamadas. Objetos são um conjunto de propriedades, 
    que são pares chave-valor. As chaves podem ser strings ou symbols, caso seja passado
    um valor numérico ele é convertido pra string. Os valores podem ser qualquer coisa,
    inclusive outro objeto.
    Há dois tipos de propriedades de objeto: data property e accessor property.
        data property: associa uma chave a um valor
        accessor property: não armazena um valor diretamente, mas sim funções getters e setters
    Como objetos são compostos por pares de chave-valor, eles são comumente usados como mapas.
    Prototypes são basicamente uma propriedade secreta que representa a cadeia de ancestrais do objeto.
*/
const pessoa = {
    nome: "Giovanna",
    sobrenome: "Farias",
    idade: 21,
    dataDeNascimento: "28/07/2004",
    saudação: function() {
        console.log(`Oi, meu nome é ${this.nome} e eu tenho ${this.idade} anos!`)
    }
}
pessoa.saudação()

/*
    Date -> Serve para datas, mas é antigo e está entrando em desuso. A alternativa
    moderna é o tipo Temporal, que ainda está sendo padronizado e não está disponível em todos
    os ambientes, mas seria algo assim:
    const aniversario = Temporal.PlainDate.from("2004-07-28")
*/
const aniversario = new Date("2004-07-28")

/*
    Arrays  são coleções indexadas, ou seja, cada valor tem seu índice na lista. Possui um conjunto
    de métodos convenientes para manipulá-los, como indexOf() e push()
*/
const lista = [0, 1, 2, 3, 4, 5]
lista.push(9)
console.log("lista: " + lista)

/*
    Coleções chaveadas: Maps, Sets, WeakMaps, WeakSets
    Maps e WeakMaps são uma coleção de pares chave-valor.
    Sets e WeakSets são uma coleção de elementos únicos.
    Weaks só aceitam objetos, servem para apagar esse objeto quando não houver mais
    referência a ele, otimizando o uso de memória.
*/
const mapa = new Map()
mapa.set("chave", "valor")
console.log(mapa)

const conjunto = new Set()
conjunto.add(1)
conjunto.add(1)
conjunto.add(1)
conjunto.add(2)
conjunto.add(2)
conjunto.add(3)
console.log(conjunto) // { 1, 2, 3 }