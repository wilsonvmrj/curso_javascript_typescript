const paragrafos = document.querySelector('.paragrafos');

const ps = paragrafos.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body);
const bagroundColorBody = estilosBody.backgroundColor;
console.log(bagroundColorBody);


for (let p of ps){
    p.style.backgroundColor=bagroundColorBody;
    p.style.color= 'white'
}