const elementos = [
    {tag: 'p', texto: "Qualquer texto que você quiser."},
    {tag: 'div', texto: "texto2 "},
    {tag: 'section', texto: "texto 3"},
    {tag: 'footer', texto: "texto 4"},
];

const container = document.querySelector('.container');

const div = document.createElement('div');

for (let i=0; i < elementos.length; i++){
    let{tag,texto} = elementos[i]
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    div.append(tagCriada)
    

}

container.appendChild(div);


// Referencia :https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/learn/lecture/16501568#overview

// Tem mais coisas para ser olhada 
