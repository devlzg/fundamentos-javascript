
/*
    Manipulação de arrays
        Arrays possuem métodos imbutidos que nos permitem manipulá-los
*/

// map() - Pra cada elemento em um array, ele aplica a função passada como argumento. Retorna um novo array, mantendo imutabilidade
const arr = [2, 4, 7, 9, 10, 12, 13, 13, 19, 20]
const double = (x) => {return x * 2}
const mappedArray = arr.map(double)
//const mappedArray = arr.map(x => x * 2)
console.log("map: " + mappedArray)

// filter() - Cria uma cópia de um array filtrando somente os elementos que passaram no teste(função) passado como argumento
filteredArray = arr.filter(x => x % 2 === 1)
console.log("filter: " + filteredArray)

// reduce() - Aplica uma função a um acumulador e a cada valor do array (da esquerda para a direita) para reduzi-lo a um único valor
const arrReduce = [1, 2, 3, 4];
const initialValue = 0; // determina onde o acumulador começa, por padrão ele começa com o primeiro elemento do array, o que pode causar um comportamento inesperado
const sumWithInitialValue = arrReduce.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue)
console.log("reduce: " + sumWithInitialValue)

/*
    forEach() - Executa a função passada em cada elemento do array.
    Se difere do map() pois retorna undefined, enquanto o map() retorna uma cópia do array.
    forEach() serve para efeitos colaterais, enquanto o map() serve para manipular dados.
*/
arrForEach = [1, 2, 3]
arrForEach.forEach(x => console.log("forEach: " + x))

/* 
find() - Retorna o primeiro elemento encontrado que satisfaz a função de teste,
retornando undefined se não encontrar nada. Alguns métodos parecidos:
    findIndex() - Parecido com o find, mas retorna um índice
    indexOf() - Procura por um elemento com o valor passado e retorna seu índice
    includes() - Checa se um elemento existe dentro de um array
    some() - Checa se pelo menos um elemento satisfaz a função teste
*/

const arrFind = arr.find(elemento => elemento < 10)
console.log("find: " + arrFind)

// Há mais métodos de arrays importantes, mas por enquanto vou abordar somente esses