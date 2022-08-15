const items = document.querySelectorAll('t');

for (let i = 0; i < items.length; i++) {
    
    items[i].innerText = `posicion: ${i}`
    items[i].innerHTML = '${items[i]} <h3> Perrituu </h3>'
    console.log(items[i]);
}