let personajes = {
    nombre: "Michael",
    apellido: "Scott",
    nacimiento: {
        fecha: "15/04/1965",
        ciudad: "Scranton",
        estado: "Pensilvania"
    },
    imagenUrl : "https://fantasytopics.com/wp-content/uploads/2022/03/Sasuke-Mangekyo-Sharingan-735x398.jpg.webp",
    trabajo: {
        rol: "manager regional",
        compania: "Dunder Mifflin"
    }
};

function displayHtml(personaje){
    let plantillaHtml = `
        <div style="border:1px solid black; width: 500px;">
            <img src="${personaje.imagenUrl}"
            width="100%" alt="">
            <h3>Nombre</h3>
            <h4>(${personaje.nombre})</h4>
            <h3>Apellido</h3>
            <h4>(${personaje.apellido})</h4>
            <hr>
            <h3>Nacimiento</h3>
            <h4>(${personaje.nacimiento.ciudad})</h4> 
            <h3>Lugar</h3>
            <h4>(${personaje.nacimiento.estado})</h4>
            <h3>Trabajo</h3>
            <p>(${personaje.trabajo.rol}), en <strong> (${personaje.trabajo.compania}) </strong>.</p>
            </div>
    `;
    let body = document.querySelector("body");
    body.innerHTML = plantillaHtml;
}

displayHtml(personajes);