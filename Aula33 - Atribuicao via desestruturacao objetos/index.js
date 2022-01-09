const pessoa = {
    nome:"Wilson",
    sobrenome: "Magallhaes",
    idade: 40,
    endereco:{
        rua: 'Av Brasil',
        numero: 320
    }
};


// const nome1 = pessoa.nome;
// const {nome,sobrenome} = pessoa;


// console.log(nome,sobrenome)


// Mudando o nome da variavel na hora da desestruturacao, caso o atributo nome noa exista esta 
// definindo como padrao vazio.

const {nome: teste = '', sobrenome} = pessoa; 

console.log(teste,sobrenome)

// Pegando o objeto endereco :

const {endereco: {rua,numero},endereco} = pessoa;

console.log(rua,numero,endereco);