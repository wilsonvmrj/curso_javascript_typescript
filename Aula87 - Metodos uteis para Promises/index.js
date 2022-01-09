function rand(min, max) {
    min *=  1000
    max *=  1000
    return Math.floor(Math.random() * (max - min) + min)

}

function esperaAi(msg, tempo) {
    return new Promise((resolve,reject)=>{
        if(typeof msg !== 'string') reject('BAD VALUE');
        setTimeout(() => {           
            resolve(msg.toUpperCase());
        }, tempo);

    });
    
}


// Promise.all Promise.rece Promise.resolve Promise.reject

const promises = [

    esperaAi('Prmise 1', rand(1,3)),
    esperaAi('Prmise 2', rand(1,3)),
    esperaAi('Prmise 3', rand(1,3))

];

// Promise.all(promises)
//     .then(function(valor){
//         console.log(valor);
//     })
//     .catch(function(erro){
//         console.log(erro);
//     });

Promise.race(promises)
    .then(function(valor){
        console.log(valor);
    })
    .catch(function(erro){
        console.log(erro);
    });


