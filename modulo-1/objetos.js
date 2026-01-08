/*
    Manipulação de Objetos
        Operações básicas com objetos
*/

// Desestruturação
// é uma propriedade de objetos e arrays que permite desempacotar seus valores.
obj = {
    nome: "Luiz",
    idade: 20,
    profissao: "Programador"
}
let {nome, profissao} = obj;
console.log("Desestruturação: " + nome + " " + profissao)

const array = [1, 2, 3]
const [a, b, c] = array // <- por curiosidade, isso aqui funciona e é desestruturação também

// Object.keys() - Retorna um array com as chaves, ou seja, nomes das propriedades do objeto
console.log("Object.keys(obj): " + Object.keys(obj))

// Object.values() - Retorna um array com os valores de cada propriedade do objeto
console.log("Object.values(obj): " + Object.values(obj))

// Object.entries() - Retorna um array com os pares chave-valor de um objeto
entries = Object.entries(obj)
for (const [key, value] of entries) {
    console.log("Chave: " + key + " Valor: " + value)
}