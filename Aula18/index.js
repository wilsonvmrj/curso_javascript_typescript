const nome01 = "Luiz";
const sobrenome01 = 'Miranda';
const idade01 = 40;

const nome02 = 'Maria';
const sobrenome02 = 'Oliveira';
const idade02 = 33;



// Exemplo de objeto
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 24,
    fala() {
        console.log(`${this.nome} ${this.sobrenome} esta falando ! `);
    },
}


// console.log(pessoa1.nome)


// Criando funcao para objeto. chamada de factoring

// function criaPessoa(nome,sobrenome,idade){
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
        
//     };

// }

// Forma resumida de factoring 
// function criaPessoa(nome,sobrenome,idade){
//     return { nome, sobrenome, idade    };
// }



// const pessoa1 = criaPessoa('Wilson','Magalhães',40)
console.log(pessoa1)
pessoa1.fala();