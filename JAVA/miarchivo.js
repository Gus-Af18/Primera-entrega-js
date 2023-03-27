
for (let i = 1; i <=3;i++) {
let nombre = prompt("Ingrese el nombre")

function saludoConNombre(nombre) {
    alert("Bienvenido " + nombre);
  }saludoConNombre(nombre)


let opcion1 = prompt("Por favor seleccione el tipo de torta \n1 -Torta de colores \n2 -Torta de flores \n3 -Torta de chocolate \n4 Torta de zanahoria");
switch (opcion1){
    case "1": alert("Seleccionaste Torta de colores"); break;
    case "2": alert("Seleccionaste Torta de Flores"); break;
    case "3": alert("Seleccionaste Torta de Chocolate"); break;
    case "4": alert("Seleccionaste Torta de Zanahoria"); break;
    default: alert("Ingreso no valido"); break;
}
while(opcion1 != "1" && opcion1 != "2" && opcion1 != "3" && opcion1 != "4"){
    opcion1 = prompt("Por favor seleccione el tipo de torta \n1 -Torta de colores \n2 -Torta de flores \n3 -Torta de chocolate \n4 Torta de zanahoria");
    
}

let opcion2 = prompt("Por favor seleccione el tamaño de la torta \n1 -Torta de 1/4 de libra \n2 -Torta de 1/2 libra \n3 -Torta de libra \n4 Torta de 2 libras");

switch (opcion2){
    case "1": alert("Seleccionaste Torta de 1/4 de Libra"); break;
    case "2": alert("Seleccionaste Torta de 1/2 de Libra"); break;
    case "3": alert("Seleccionaste Torta de Libra"); break;
    case "4": alert("Seleccionaste Torta de 2 Libras"); break;
    default: alert("Ingreso no valido"); break;
}
while(opcion2 != "1" && opcion2 != "2" && opcion2 != "3" && opcion2 != "4"){
    opcion2 = prompt("Por favor seleccione el tamaño de la torta \n1 -Torta de 1/4 de libra \n2 -Torta de 1/2 libra \n3 -Torta de libra \n4 Torta de 2 libras");
    
}

alert("Tenga en cuenta que el horario de trabajo es de 7 AM a 8 PM, de lunes a viernes y los pedidos se hace con dos dias de antelacion");
let dia = prompt("Dia del domicilio")
let entrega = prompt("Por favor escriba la hora de entrega");
let horario = prompt(" -AM  -PM");


alert("Feliciades " + " " + nombre + "su turno es " +" "+ i + " " + "su pedido sera entregado el " + " " + dia + "a las " + entrega + horario)

}
alert("No hay mas turnos ")


