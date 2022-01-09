const pessoas = [
    { id: 3, nome: 'Wilson'},
    { id: 2, nome: 'Michele'},
    { id: 1, nome: 'Bernardo'},    
]


// const novasPessoas = {};

// for (const pessoa of pessoas ){
//     const { id }= pessoa;
//     novasPessoas[id] = {...pessoa}

// }



const novasPessoas = new Map();

for (const pessoa of pessoas ){
    const { id }= pessoa;
    novasPessoas.set(id,{...pessoa})

}

console.log(novasPessoas)

