// Factory functions


function criaPessoa(nome,sobrenome,altura,peso){
    return {
        nome, 
        sobrenome,
        altura,
        peso,

        fala: function(assunto){
            return `${this.nome} está ${assunto}`;
        },
        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor)
        },


        
        // Transforma em Getter
        get imc(){
            const indice = this.peso/(this.altura ** 2);
            return indice.toFixed(2);
        }     
    };
}

const p1 = criaPessoa('Wilson', 'Magalhães',1.8,110);
p1.nomeCompleto = "Michele Souza Magalhães";
console.log(p1.nomeCompleto)
// console.log(p1.imc);
// const p2 = criaPessoa('Michele', 'Souza',1.6,65);
// console.log(p2.imc);





