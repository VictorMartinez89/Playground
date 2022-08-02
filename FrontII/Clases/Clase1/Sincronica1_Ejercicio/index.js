

function sumarArray(arr){
    let resultado = 0;
    arr.forEach(element => {
       resultado  += element;
    });
    return resultado;
}


let arr =  prompt("Ingresar los numeros del array separado por comas").split(",");
arr = arr.map(Number);
let resultadoSuma = sumarArray(arr);
alert("El resultado de la suma de los arrays fue : " + sumarArray(arr));
