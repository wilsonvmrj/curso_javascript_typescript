// Produto 
// Camiseta, caneca, lapis 
function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;

}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};


function Camiseta(nome,preco,cor){
    Produto.call(this,nome,preco)
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta;

const camiseta = new Camiseta('regata',7.5,'Preta')


camiseta.aumento(10)


console.log(camiseta)


function Caneca(nome,preco, material,estoque){
    Produto.call(this,nome,preco)
    this.material = material
    
    Object.defineProperty(this, 'estoque'{
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number') return;
            estoque = valor;
        }

    });


}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const caneca = new Caneca('aluminio',50,'aluminio', 5)
caneca.aumento(10)

console.log(caneca)
