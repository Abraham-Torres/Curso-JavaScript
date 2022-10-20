//Manera con if
var compra=51;

if(compra<=10){
    compra+=3;
    console.log(`El total de la compra con envio incluido es de ${compra}`);
}else if(compra>10 && compra<=20){
    compra+=5;
    console.log(`El total del la compra con envio incluido es de ${compra}`);
}else if(compra>20 && compra<=50){
    compra+=7;
    console.log(`El total de la compra con envio incluido es de ${compra}`);
}else if(compra>50){
    console.log(`Envio GRATIS total a pagar: ${compra}`);
}else{
    console.log("ha ocurrido algun error");
}


var compra=10;

switch(compra){
    case compra<=10:
        compra+=3;
        console.log(compra);
        break;
}

switch(compra){
    case compra >10 && compra<=20:
        compra+=5;
        console.log(compra);
        break;
}