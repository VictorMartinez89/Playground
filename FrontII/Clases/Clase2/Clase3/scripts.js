const nombres = ['maria', 'jose', 'carlos', 'pedro'];

const container = document.createElement('div');

for(const nombre of nombres){
    const item = document.createElement('p');
    item.innerText = nombre;

    container.appendChild(item);
}

document.body.appendChild(container);

