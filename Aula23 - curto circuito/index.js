/** Aula sobre Curto circuito  
 * && -> false && true --> false "o valor mesmo"

Valores falso 

FALSY
*false0
'' "" ``

null / undefined
NaN


*/

// Exemplo 1 :

console.log('Wilson' && 0 && NaN);



// Exemplo pratico:

function falaOi(){
    return 'Oi';
}

const vaiExecutar = true ;

console.log(vaiExecutar && falaOi());



// fim 


/**
 * || ->  true && false -> Vai retornar o valor verdadeiro.
 */

console.log(0 || false || null || 'Wilson' || true);

// Outro exemplo :
const corUsuario = 'vermelho' ;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao)