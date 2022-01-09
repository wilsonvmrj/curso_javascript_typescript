// ... rest, spread

const numeros = [1,2,3,4,5,6,7,8,9];

const [primeiroNumero,segundoNumero] = numeros;

console.log(primeiroNumero,segundoNumero)



const [um,,tres, ,cinco] = numeros;


console.log(um,tres,cinco);


// Coisa de maluco, mas para conhecimento .


const numeros2 = [[1,2,3],[4,5,6],[7,8,9]];

const [,[,,seis]] = numeros2;
console.log(seis)


// Forma mais elegante.
const [lista1,lista2,lista3] = numeros2;
console.log(lista1,lista2,lista3);
