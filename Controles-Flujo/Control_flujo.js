/**
 * Control de flujo
 */

//Estructura if

if(condicion){
    //bloque de codigo en caso de la condicion se cumpla
}

var llueve=true;
if (llueve){
    console.log('Necesito una sombrilla');
}

var administrador='administrador';
if (administrador==='administradora'){
    console.log('Bienvenido al sistema');
}
else{
    console.log('No tienes acceso');
}

const MAYORIA_EDAD=18;
var edadPersona= 21;

if (edadPersona>=MAYORIA_EDAD){
    console.log('Es mayor de edad');
}
else{
    console.log('Es menor de edad');
}

// else/if 
var semaforo='verde';

if(semaforo==='verde'){
    console.log('Arranca');
} else if(semaforo==='amarrillo'){
    console.log('listo');
}else if (semaforo==='rojo'){
    console.log('Motores apagados');
}else{
    console.log('No es un color valido');
}

//estructura switch
switch(expresion){
    //bloque de codigo
}

var producto='mango';
switch(producto){
    case 'papaya':
        console.log('Las papayas cuestan $10');
        break;
    case 'naranjas':
        console.log('Las naranjas cuestan $5');    
        break;
    case 'mango':   
            console.log('El mango cuesta 1$5');
            break;
    default://este es como un else, en caso de que ninguno de los casos se cumpla, imprime el siguiente mensaje
            console.log('No tenemos ese producto');    
}
//NOTA:En caso de no existir un break despues del caso, se seguira con el siguiente caso