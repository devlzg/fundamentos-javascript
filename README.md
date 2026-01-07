# 📚 Roteiro de Estudos JavaScript

> Esse repositório centraliza meus estudos de fundamentos da linguagem JavaScript, com foco em preparação para React.

## 📋 Índice
- [Módulo 1: Fundamentos Essenciais](#módulo-1-fundamentos-essenciais)
- [Módulo 2: Funções e Escopo](#módulo-2-funções-e-escopo)
- [Módulo 3: Assíncrono e Promessas](#módulo-3-assíncrono-e-promessas)
- [Módulo 4: Trabalhando com Dados](#módulo-4-trabalhando-com-dados)
- [Módulo 5: DOM e Eventos](#módulo-5-dom-e-eventos-básico)
- [Módulo 6: Classes](#módulo-6-classes-opcionalbásico)
- [Módulo 7: Conceitos Avançados](#módulo-7-conceitos-avançados)

---

## Módulo 1: Fundamentos Essenciais

**Tipos de dados**
- `string`, `number`, `boolean`, `null`, `undefined`, `object`, `array`

**Manipulação de arrays**
- `map()`, `filter()`, `reduce()`, `forEach()`, `find()`

**Objetos**
- Desestruturação
- `Object.keys()`, `Object.values()`, `Object.entries()`

**Operadores modernos**
- Spread: `...`
- Rest parameters
- Optional chaining: `?.`
- Nullish coalescing: `??`

## Módulo 2: Funções e Escopo

**Tipos de funções**
- Arrow functions vs funções tradicionais

**Conceitos importantes**
- **Closures:** entender como funções "lembram" do escopo
- **Hoisting:** diferenças entre `var`, `let` e `const`
- **`this`:** contexto de execução

## Módulo 3: Assíncrono e Promessas

**Evolução do código assíncrono**
- Callbacks → Promises → `async/await`

**Event loop**
- `setTimeout()` / `setInterval()`

**Requisições HTTP**
- Como lidar com requisições usando `fetch()`

## Módulo 4: Trabalhando com Dados

**Template literals**
- Interpolação de strings: `` `Olá ${nome}` ``

**Métodos de string comuns**
- `slice()`, `substring()`, `includes()`, `split()`, `trim()`, `replace()`

**JSON**
- `JSON.parse()` e `JSON.stringify()`

**Operadores úteis**
- Ternários: `condição ? valorTrue : valorFalse`
- Short-circuit: `valor || default`, `valor && action`

## Módulo 5: DOM e Eventos (Básico)

**Conceitos fundamentais**
- O que é o DOM
- Manipulação básica com `document.querySelector()`

**Eventos**
- `addEventListener()` - conceito básico
- Propagação de eventos (bubbling/capturing)

> **💡 Nota:** React abstrai muito disso, então o foco aqui é entender os conceitos, não praticar extensivamente.

## Módulo 6: Classes (Opcional/Básico)

**Sintaxe básica**
- Classes e herança
- Construtores e métodos

> **💡 Nota:** Com React moderno sendo baseado em hooks, esse módulo é mais para leitura de código legado. Não é necessário aprofundar muito.

## Módulo 7: Conceitos Avançados

**Imutabilidade**
- Por que não modificar arrays/objetos diretamente
- Como trabalhar com dados de forma imutável

**Higher-order functions**
- Funções que recebem ou retornam funções

**Modules**
- `import` e `export`
- ES6 modules

---