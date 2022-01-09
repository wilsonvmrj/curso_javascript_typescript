// const data = new Date();


// // Mes começa em 0 = Janeiro
// const data2 = new Date(2019,3,20,15,14,27); // a,m,d,h,M,s,ms
// const data3 = new Date('2019-04-20 20:20:30'); // a,m,d,h,M,s,ms


// // console.log(data.toString());
// // console.log(data2.toString());
// // console.log(data3.toString());

// console.log('Dia',data.getDate());
// console.log('Mês',data.getMonth()+1);
// console.log('Ano',data.getFullYear());
// console.log('Hora',data.getHours());
// console.log('Min',data.getMinutes());
// console.log('Seg',data.getSeconds());
// console.log('ms',data.getMilliseconds());
// console.log('Dia semana',data.getDay());

// console.log(Date.now())

function zeroAEsquerda(numero){
    return numero >= 10 ? numero :`0${numero}`;
}



function formataData(data){
    // console.log(data);
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hor = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const sec = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hor}:${min}:${sec}` ;
}

const data = new Date();
const dataBrasil = formataData(data)
console.log(dataBrasil)

