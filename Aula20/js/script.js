function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function criaPessoa (nome,sobrenome,peso,altura){
        return {nome,sobrenome,peso,altura}
    }

    

    const pessoas = [];






    // form.onsubmit = function (evento){
    //     // Altera caracteristica padrao de enviar o formulario e atualizar a pagina .
    //     evento.preventDefault()
    //     alert('foi enviado ')
    //     console.log('Foi enviado.')
        
    // };

    // Outramaneira de fazer a mesma coisa




    function receberEventForm(evento){
        evento.preventDefault() ;

        const nome = form.querySelector('.nome')        
        const sobrenome = form.querySelector('.sobrenome')        
        const peso = form.querySelector('.peso')        
        const altura = form.querySelector('.altura')              
        
        
        // console.log(nome,sobrenome,peso,altura)
        pessoas.push(criaPessoa(nome.value,sobrenome.value,peso.value,altura.value))
        resultado.innerHTML += `<p> Nome=> ${nome.value},${sobrenome.value}, Peso=> ${peso.value},Altura=> ${altura.value}`;
        sobrenome.value= ''
        peso.value= ''
        altura.value= ''
        nome.value= ''
        
        

        console.log(pessoas)






    }
    form.addEventListener('submit', receberEventForm);
    
}



meuEscopo();