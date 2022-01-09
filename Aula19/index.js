/**
 * Primitivos (imutaveis) - string, number, boolean, undefined, 
 * null (bigint, symbol) - Valor copiado
 * 
 * Referência(mutável ) - array, object, function - Passados por referência 
 * 
 */


let a = [1,2,3]
let b = a ;
console.log(a,b)

a.push(4)
console.log(a,b)


const pessoa = {
    nome: 'Luiz '
}


// fazendo copia do objeto ou de array.;

const pessoa2 = { ...pessoa}


let c = [...a]