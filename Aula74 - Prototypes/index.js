function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}


const pessoa1 = new Pessoa('Wilson','Magalhaes');
const pessoa2 = new Pessoa('Michele', 'Souza');

console.dir(pessoa1);
console.dir(pessoa2);