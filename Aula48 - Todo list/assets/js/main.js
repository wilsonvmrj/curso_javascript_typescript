const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar','');
        listaDeTarefas.push(tarefaTexto.trim());
        
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas',tarefasJSON)
    
}

function adicionaTarefasSalvas(){
    const tarefas =localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    console.log(listaDeTarefas);
    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}


function criaLi(){
    const li= document.createElement('li');
    return li;

}

function criaBtnApagar(li){
    li.innerText += " ";
    const btnApagar = document.createElement('button');
    btnApagar.innerText = "Apagar";
    btnApagar.setAttribute('class','apagar')
    btnApagar.setAttribute('Title','Apagar esta tarefa')
    li.appendChild(btnApagar);
}


function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}


function criaTarefa(textInput){
    const li = criaLi();
    li.innerText = textInput;
    criaBtnApagar(li);
    tarefas.appendChild(li);
    salvarTarefas();
}

inputTarefa.addEventListener('keypress',function(e){
    
    if(e.keyCode === 13){
        if(!inputTarefa.value) return ;
    
        criaTarefa(inputTarefa.value)
        limpaInput()
        
    }

})

btnTarefa.addEventListener('click', function() {    
    // Aqui verifica se esta vazio e nao faz nada
    if(!inputTarefa.value) return ;    
    criaTarefa(inputTarefa.value);
    console.log(inputTarefa.value);
    limpaInput();

});

document.addEventListener('click',function(e){
    const el = e.target ;
    if (el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }

})


adicionaTarefasSalvas();