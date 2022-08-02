let option = prompt(`Calculadora Basica
    \n Suma (+)
    \n resta (-)
    \n division (/)
    \n multiplicacion (*)`);


let num1 = parseInt(prompt("Ingrese primer numero"));
let num2 = parseInt(prompt("Ingrese segundo numero"));

let resultado = 0;

switch (option){
    
    case("+"):
        resultado = num1 + num2;
        break;
    case("*"):
        resultado = num1 * num2;
        break;
    case("-"):
        resultado = num1 - num2;
        break;
    case("/"):
        resultado = num1 / num2;
        break;    
    default: 
        resultado = 0;
}

alert("El resultado es : "  + resultado);