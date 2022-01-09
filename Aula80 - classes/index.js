

class Pessoa{
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando.`)
    }

    comer(){
        console.log(`${this.nome} está comendo.`)

    }

    beber(){
        console.log(`${this.nome} está bebendo.`)

    }
}

// Com classe sempre usar o new para instanciar a classe.

const p1 = new Pessoa('Wilson', 'Magalhães');

console.log(p1)
p1.falar()
p1.comer()
p1.beber()




// paralelo 

function Pessoa2(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;    
}
Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} está falando.`)
}



