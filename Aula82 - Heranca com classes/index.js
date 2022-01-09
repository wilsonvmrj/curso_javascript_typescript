class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;        
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + ' já ligado');
            return ;
        }

        this.ligado =true;
    }
    desligar(){
        if (! this.ligado){
            console.log(this.nome + ' já desligado');
            return;            
        }
        this.ligado = false;
    }
}


const d1 = new DispositivoEletronico('Smartphone');

d1.ligar();
d1.ligar();
d1.desligar();
d1.desligar();

console.log(d1)


// exendendo de uma classe 

class Smartphone extends DispositivoEletronico {
    constructor(nome,cor,modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo
    }
}


const s2 = new Smartphone('andriod', 'preto','Galaxy S20 fe');
console.log(s2)