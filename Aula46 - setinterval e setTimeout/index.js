function mostraHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    })   
}



// function funcaoDoInterval(){
//     console.log(mostraHora())

// }

// setInterval(funcaoDoInterval, 1000);


// com funcao anonima.

const timer = setInterval(function () {
    console.log(mostraHora());
    
},1000);


// Aqui voce seta para sair 
setTimeout(() => {
    clearInterval(timer);
    
}, 3000);

