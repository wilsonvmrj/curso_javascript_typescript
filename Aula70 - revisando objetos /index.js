// const pessoa = {
//     nome: 'Wilson',
//     sobrenome: 'Magalhaes'

// }
// console.log(pessoa.nome)
// console.log(pessoa.sobrenome)


// chave = 'nome'
// console.log(pessoa[chave])
// console.log(pessoa['sobrenome'])



// Factory functiona / Constructor functions  / Classes 

// function criaPessoa (nome,sobrenome){ // Factory functiona
//     return {
//         nome,
//         sobrenome,
//         get nomeCompleto(){
//             return `${this.nome} ${this.sobrenome}`
//         }
//     }

// }
// const p1 = criaPessoa('Wilson', 'Magalhães');

// console.log(p1.nomeCompleto)


function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

}

const p2 = new Pessoa('wilson','Magalhaes')
console.log(p2)