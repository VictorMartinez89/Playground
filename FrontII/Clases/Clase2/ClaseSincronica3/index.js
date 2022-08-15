
let parrafosPrincipales = document.querySelectorAll('p');
let nombres = ["Mauro", "Alicia", "Catalina", "Laura"];

const template = `<h1> Hola Mundo! </h1>`;

parrafosPrincipales.forEach(
    parrafo =>{ 
        for (let i = 0; i< nombres.length; i++) {
            parrafo.innerHTML = `Este es el párrafo de ${nombres[i]}`;
            
        }
    }    
)

const body = document.querySelector("body");
body.innerHTML += template;

function escribirtHTML(titulo, texto){
    const body = document.getElementById('body');
    const miTemplate = `
        <h1>${titulo}</h1>
        <p>${texto}</p>
    `;

    body.innerHTML += miTemplate ;
}
escribirtHTML('Hola',  'Esto es un ejemplo de template string en html');
escribirtHTML('Es dinamico',  'Podemos insertar elementos HTML mediante <b>Javascrkpt</b>');
escribirtHTML('Facilita la programación',  'Evita escribir mucho codigo y reutilizar el que si escribamos. ');
escribirtHTML('En este ejemplo',  'Hemos utilizado una única función para poder escribir 4 veces en HTML, ¿Te imaginás lo que sería esto sin esta función?');

