function sumArr(arr){
    let response  = "";
    let total = 0;
    
    response = " [ " + arr + " ] " + "\n";

    for(let i = 0; i< arr.length; i++){
       let temp = arr[i];
       if(i == 0){ 
           response += temp + "\n";
           total = temp;
        }else{
            response += total1, + " + " + temp + "\n";
            total  += temp;
       }
    }
    return response;
}


let arr =  prompt("Ingresar los numeros del array separado por comas").split(",");
arr = arr.map(Number);
let totalResult = sumArr(arr);
alert("El resultado de la suma de los arrays fue : " + totalResult);
