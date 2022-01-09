// defineProperty -> Getter e Setter 
function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco

    Object.defineProperty(this, 'estoque',{
        enumerable: true, //mostra a chave        
        configurable: true, // configurável,
        get: function(){
            return estoque;
        },
        set: function(valor){
            console.log(valor)
        }

    });
}


// const p1 = new Produto('Camiseta',30,3);
// console.log(p1)
// p1.estoque = 'O valor que eu quero';
// console.log(p1.estoque)


function NovoProduto(nome){
    return {
            
        get nome(){
            return nome;
        },

        set nome(valor){
            valor = valor.replace('coisa.','');
            nome= valor ;
        }
    };
}


const p2 = NovoProduto('Camiseta');
console.log(p2.nome);
p2.nome = 'Qualquer coisa.';
console.log(p2);
console.log(p2.nome);