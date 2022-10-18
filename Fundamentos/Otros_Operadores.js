/**
 * Otros operadores
 */

//Cadena - concatenacion ( + )
var nombre="Abraham";
var apellido="Torres";
var nombresCompletos=nombre + " " +apellido;//Las comillas vacias es para darle espacio a la concatenacion
console.log(nombresCompletos);

//Operador de condicinal (condicion ? val : val2)
console.log(2>3 ? 'el numero es mayor ': 'el numero es menor');

//Operador de desesctrurador
var persona={
    nombre:'Abraham',
    apellido:'Torres'
}

var {nombre} =persona;
console.log(nombre);
console.log(persona);
/**
 * Lo que hace este operador, es extrar el dato exacto de una variable
 * por ejemplo, del objeto persona, extrae la variable nombre
 * y solo imprimira el nombre, y no todos los datos completos del objeto
 */

//Desectruador de arreglos 

/**
 * Para poder extrar/desesctruar un arreglo se hace por posiciones (indices)
 * guardarndolos en una variable
 */
var arreglo=[1,2,3,4,5,6,6]
var[primeraPosicion,segundaPosicion]=arreglo;
console.log(primeraPosicion);
console.log(segundaPosicion);

//Operadores de miembro o acceso de propiedad
//Notacion punto

var persona={
    nombre:'Abraham',
    apellido:'Torres'
}
console.log(persona.nombre);
console.log(persona.apellido);

//Notacion por corchetes

var persona={
    nombre:'Abraham',
    apellido:'Torres'
}
console.log(persona['nombre']);

//Notacion por corchetes en arreglos
var arreglo=[21,22,23,24,25,26]
console.log(arreglo[0]);//accedemos al valor por medio del indice

//Operacion de determinacion de tipo (typeof)
console.log(typeof'Abraham');//este es como type de python
