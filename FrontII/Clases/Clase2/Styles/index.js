let confirmaCambios = confirm('¿Querés cambiar el color del título? ');
let toggle = true;
if(confirmaCambios){
    let titulo = document.querySelector("h1");
    titulo.innerHTML += ' Soy un contenido nuevo desde JS';
    titulo.style.color = 'crimson';
    titulo.style.fontSize= '40px';
}

function cambiarColor(){
    //toggle = (toggle)?false:true;   
    let pElement = document.querySelector('p');
    pElement.classList.toggle('negrita');

    var botonVerMas = document.createElement('button');
    var botonTexto = document.createTextNode('Ver más');
    var comment = document.createComment("My Comment");
    botonVerMas.appendChild(comment);
    botonVerMas.appendChild(botonTexto);
    document.body.appendChild(botonVerMas);
    
    /*if(toggle){
        pElement.style.backgroundColor= null;
        pElement.classList.add('negrita');
        pElement.classList.remove('white');   
        }else{
        pElement.classList.remove('negrita');
        pElement.classList.add('white')
        pElement.style.backgroundColor= 'blue';
    } */   
}

//let pElements = document.querySelectorAll('p');

  


