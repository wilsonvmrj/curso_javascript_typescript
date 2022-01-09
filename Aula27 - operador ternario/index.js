/**Operador ternário  */

const pontuacaoUsuario = 50;

// if (pontuacaoUsuario >= 100){
//     console.log('Usuario vip');
// } else {
//     console.log('Usuario normal ');
// }

// Exemplo de condição ternária 
//  (condicao) ? 'Valor verdadeiro' : 'Valor falso';
const nivelUsuario = pontuacaoUsuario >= 100 ? 'Usuario VIP' : 'Usuário normal';

console.log(nivelUsuario);

const corUsuario = 'Amarelo' ;
const corPadrao = corUsuario || 'Preta';

console.log(corPadrao);
