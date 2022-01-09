// Declaracao de função (Function hoisting)

falaOi();

function falaOi(){
    console.log("Oieee!");

}


// First-Class objects (Objetos de primeira Classe)
// Function expression 


const souUmDado = function(){
    console.log('Sou um dado')
};

souUmDado();
function executaFuncao(funcao){
    console.log('Vou executar sua funcao abaixo.')
    funcao();
};

executaFuncao(souUmDado);

// Arrou function 

const funcaoArrouw = () => {
    console.log('sou uma funcao ');
};

funcaoArrouw()


const obj = {
    falar(){
        console.log('Nao precisa do function ')
    }
}

obj.falar();






