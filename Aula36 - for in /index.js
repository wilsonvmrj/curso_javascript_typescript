const frutas = ['Pera', 'Maça','Uva','Morango']

const pessoa = {
    nome: 'Wilson',
    sobrenome: 'Magalhaes',
    idade: 30
};



for (let fruta in frutas){
    console.log(frutas[fruta]);
}




for (let chave in pessoa){
    console.log(pessoa[chave]);

}



// Iterando mostrando o valor das chaves :

for (let fruta of frutas ){
    console.log(fruta)
};

// for (let pe of pessoa ){
//     console.log(pe)
// };


frutas.forEach(function(elemento){
    console.log(elemento);

});