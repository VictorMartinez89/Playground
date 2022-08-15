let titulo =  document.querySelector("h1");
titulo.innerHTML += "Soy un contenido nuevo desde JS"
console.log(titulo.innerHTML);

let pEspecial = document.querySelector('.parrafo-especial');
console.log(pEspecial.innerHTML);
pEspecial.innerHTML = 'Un texto con algo <i> en cursiva <i>';
console.log(pEspecial.innerHTML);

titulo.style.color = 'cyan';
titulo.style.textAlign = 'center';
titulo.style.fontSize = '40px';
titulo.style.backgroundColor = '#dddddd'