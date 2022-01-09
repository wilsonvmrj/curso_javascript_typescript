
// Superclass
function Conta(agencia,conta,saldo){
    this.agencia= agencia;
    this.conta = conta;
    this.saldo = saldo ;
}

Conta.prototype.sacar = function(valor){
    if(valor > this.saldo){
        console.log(`Saldo insuficiente: R$ ${this.saldo}`)
        return ;
    };
    this.saldo -= valor;
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function(valor){
    console.log(`Ag/c: ${this.agencia}/${this.conta} |` + 
    `Saldo: R$${this.saldo.toFixed(2)}`);
};

function contaCorrente(agencia,conta,saldo,limite){
    Conta.call(this,agencia,conta,saldo);
    this.limite=limite
}

contaCorrente.prototype = Object.create(Conta.prototype);
contaCorrente.prototype.constructor = contaCorrente;

contaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo+this.limite) ){
        console.log(`Ag/C: Saldo insuficiente: R$ ${this.saldo}`);
        return ;
    };
    this.saldo -= valor;
};



function ContaP(agencia,conta,saldo,limite){
    Conta.call(this,agencia,conta,saldo);
    this.limite=limite
}

ContaP.prototype = Object.create(Conta.prototype);
ContaP.prototype.constructor = ContaP;



const conta1 = new Conta('11',22,10);
console.log(conta1)
conta1.depositar(10)
console.log(conta1)

corrente = new contaCorrente(11,22,10,100);
corrente.verSaldo();

// corrente.sacar(10);


// poupanca = ContaP(11,22,100);
// console.log(poupanca.verSaldo() )