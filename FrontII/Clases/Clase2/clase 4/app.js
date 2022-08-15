let h1 = document.querySelector('h1');
h1.innerText = 'El Periodico';
h1.style.fontSize = '40px';

let contenido = document.querySelector(".contenido");
contenido.style.textAlign = 'center';

let section = document.querySelectorAll("article");

for(const articulo of section){
    articulo.classList.add("clasePrueba");
}


let button = document.querySelector("#noche");
button.addEventListener('click', cambiarNocturno);

function cambiarNocturno(){
 for(const articulo of section){
    articulo.classList.add("claseSinPrueba");
 }
}