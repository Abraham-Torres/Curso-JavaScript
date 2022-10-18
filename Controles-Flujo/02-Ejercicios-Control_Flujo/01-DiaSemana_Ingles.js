//Manera 1 de hacerlo
var lunes='Monday';
var martes='Tuesday';
var miercoles='Wednesday';
var jueves='Thursday';
var viernes='Friday';
var sabado='Saturday';
var domingo='Sunday';

const DIA_SEMANA=viernes;
if (DIA_SEMANA==lunes){
    console.log(lunes);
}else if(DIA_SEMANA==martes){
    console.log(martes);
}else if(DIA_SEMANA==miercoles){
    console.log(miercoles);
}else if(DIA_SEMANA==jueves){
    console.log(jueves);
}else if(DIA_SEMANA==viernes){
    console.log(viernes);
}else if(DIA_SEMANA==sabado){
    console.log(sabado);
}else if (DIA_SEMANA==domingo){
    console.log(domingo);
}else{
    console.log('El dia ingresado no es valido');
}

//Manera 2 de hacerlo

var dia='viernes';

if (dia==='lunes'){
    console.log('Monday');
}else if (dia ==='martes'){
    console.log('Tuesday');
}else if(dia==='miercoles'){
    console.log("Wednesday");
}else if (dia==='jueves'){
    console.log('Thursday");');
}else if (dia==='viernes'){
    console.log('Friday');
}else if (dia==='sabado'){
    console.log('Saturday');
}else if (dia==='domingo'){
    console.log('Sunday');
}else{
    console.log('El dia ingresado no es valido');
}

//Manera 3 de hacerlo swtch case
var dia='sabado';

switch(dia){
    case 'lunes':
        console.log('Monday');
        break;
    case 'martes':
        console.log('Tuesday');
        break;
    case 'miercoles':
        console.log('Wednesday');    
        break;
    case 'jueves':
        console.log('Thursday');
        break;
    case 'viernes':
        console.log('Friday');
        break;
    case 'sabado':
        console.log('Saturday');
        break;
    case 'domingo':
        console.log('Sunday'); 
        break;
    default:
        console.log('El dia ingresado no es valido');                
}
