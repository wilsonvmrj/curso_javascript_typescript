// new Object  -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
};


const objB = {
    chaveB: 'B'

    // __proto__: objA
}

const objC = new Object();

objC.chaveC = 'C'

Object.setPrototypeOf(objB,objA)
Object.setPrototypeOf(objC,objB)


// console.log(objA.__proto__ === Object.prototype)
console.log(objB.chaveA)
console.log(objC.chaveB)
console.log(Object.getPrototypeOf(objC));
console.log(Object.getPrototypeOf(objB));
console.log(Object.getPrototypeOf(objA));

function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco *(percentual/100))
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual/100))
}


const p1 = new Produto('Camiseta', 50)
console.log(p1);
p1.aumento(100);
console.log(p1);
p1.desconto(30);
console.log(p1)

// De forma literal 

const p2 = {
    nome: 'Caneca',    
    preco: 15
};

Object.setPrototypeOf(p2,Produto.prototype);

p2.aumento(19)
console.log(p2)


const p3 = Object.create(Produto.prototype,{
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 33
    }
});

console.log('P3:',p3)

p3.aumento(10)
console.log(p3)

