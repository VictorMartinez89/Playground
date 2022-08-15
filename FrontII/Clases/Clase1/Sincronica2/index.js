let opciones = ['piedra', 'papel', 'tijera'];
let opcionUser;
let user;

do{
    
    user = parseInt(prompt(`Elija una opcion:
            \n1. Piedra 
            \n2. Papel
            \n3. Tijera
    `));

    switch( user ){
        case 1:
            opcionUser = 'piedra';
            break;
        case 2:
            opcionUser = 'papel';
            break;
        case 3:
            opcionUser = 'tijera';
            break;
        default:
            alert('Ingrese un valr correcto');
            break;
    }
}while(opcionUser != '1' && opcionUser != '2' && opcionUser != '3' );

alert(opcionUser);