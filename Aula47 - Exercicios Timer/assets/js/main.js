const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

function getTimeFromSeconds(segundos){
    let data = new Date(segundos*1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC'
    })   
}

let segundos = 0;
let timer;


function iniciaRelogio(){
    
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML= getTimeFromSeconds(segundos);

    },1000)
}

iniciar.addEventListener('click',function(event) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
    
});

pausar.addEventListener('click',function(event) {
    relogio.classList.add('pausado');
    clearInterval(timer);
    
});

zerar.addEventListener('click',function(event) {
    clearInterval(timer);
    relogio.innerHTML= '00:00:00'
    segundos = 0
});










// // Aqui voce seta para sair 
// setTimeout(() => {
//     clearInterval(timer);
    
// }, 3000);

