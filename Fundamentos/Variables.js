/**
 * Variables
 * 
 * 
 * 3 formas de definir variables
 * var 
 * let 
 * const
 * 
 */

//Variables con var

var nombre='Abraham';
console.log(nombre);

var edad=22;
console.log(edad);

var persona={
   nombre:'Abraham',
   apelido:'Torres',
   edad:27,
   direccion:{
    calle:'siempre viva',
    numeroCasa:183,
   },
   ciudadesVisitadas:[
    'Colombia',
    'Ecuador',
    'Peru'
   ]
}
console.log(persona);

var ciudad;
ciudad='Mexico';
ciudad='MoRELOS';
ciudad=22;
console.log(ciudad);

//Varibles con let

let nombre='Abraham';
console.log(nombre);
/**
 * Nota:La diferencia entre var y let, es que let solo permitira usar la variable
 * en determinado en cierto bloque de codigo, mientras que var, podran ser usadas
 * de forma global
 */

//Bloque de codigo
{
    let saludo='Hola soy Abraham';
    console.log(saludo);
}


{
    var saludo='Hola soy Abraham';
}
console.log(saludo);



//Variables con const (son variables que no cambian con el tiempo)
//NOTA: Todas las variables que se declaren con const, deben de ser escritas con mayusculas y separadas por guiones bajos
const PI=3.1416;
console.log(PI);

var nombre='Abraham Torres';
var saludo=`Hola soy ${nombre}
como estas?`;
console.log(saludo);
