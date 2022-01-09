function rand(min, max) {
    min *=  1000
    max *=  1000
    return Math.floor(Math.random() * (max - min) + min)

}

function esperaAi(msg, tempo) {
    return new Promise((resolve,reject)=>{
        if(typeof msg !== 'string') reject('BAD VALUE');
        setTimeout(() => {           
            resolve(msg);
        }, tempo);

    });
    
}

esperaAi("Frase1", rand(1,3))
    .then(resposta => {
        console.log(resposta)
        return esperaAi(2,rand(1,3));
    })
    .then(resposta =>{
        console.log(resposta)
        return esperaAi("Frase 3",rand(1,3));
    })
    .then(()=>{
        console.log("Esse eh o ultimo");
    })
    .catch(e => {
        console.log("ERRO:=>",e)
    })
