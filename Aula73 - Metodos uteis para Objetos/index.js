/* 

Object.values
Object.entries
Object.assifn(des,any)
Object.getOwnPropertyDescriptor(o,'prop')
...(spred)

//Já vimos
Object.keys (retorna as chaves do objeto)
Object.freeze (congela objeto)
Object.defineProperties (define várias propriedades)
Object.definePropertie(define uma propriedade)

*/

const produto = {nome: 'Caneca', preco: 1.8};

const outraCoisa = {...produto, material: 'porcelana'};

outraCoisa.nome = "teste";
console.log(produto);
console.log(outraCoisa);