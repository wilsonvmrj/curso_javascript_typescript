const data = new Date('2019-04-10');
const diaSeman = data.getDay()



function diaSemanTexto(data){
    switch(data){
        case 0:
            return 'Domingo';
            
        case 1:
            return 'segunda-feira';
            
        case 2:
            return 'terça-feira';
            
        case 3:
            return 'quarta-feira';
            
        case 4:
            return 'quinta-feira';
            
        case 5:
            return 'sexta-feira';
            
        case 6:
            return 'sábado';
            
        default:
            return ''                            
    }

}


console.log(diaSeman);
console.log(diaSemanTexto(diaSeman));
