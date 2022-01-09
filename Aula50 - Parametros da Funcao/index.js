// A funcao criada dessa maneira tem uma variavel especial 
// chamada arguments que contem todos os parmetros passados na funcao.
// ps só para reforcar só criada com a palavra function;

function funcao(){
    console.log(arguments)

};


funcao('Valor');

// exemplo de funcao pegando o resto(todos os argumentos.)

// function conta(operador, acumulador, ...numeros){
//     for (let numero of numeros){
//         if (operador === '+') acumulador += numero;
//         if (operador === '-') acumulador -= numero;
//         if (operador === '*') acumulador *= numero;
//         if (operador === '/') acumulador /= numero;
//     }
//     console.log(acumulador)
// }

// outro exemplo da mesma funcao 


const conta=function (operador, acumulador, ...numeros){
    for (let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador)
};




conta('+',1,20,30,40,50);
