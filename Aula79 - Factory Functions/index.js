
function criaPessoa(nome,sobrenome){
    const pressoaPrototype ={
        falar(){
            console.log(`${this.nome} está falando.`)
        },

        comer(){
            console.log(`${this.nome} está comendo.`)
        },

        beber(){
            console.log(`${this.nome} está bebendo.`)
        }
    };

    return Object.create(pressoaPrototype,{
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}








const p1 = criaPessoa('Wilson','Magalhaes')

p1.falar()