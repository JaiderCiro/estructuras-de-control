/* Condicionales 
1- simple
2- compuesto 
3- anidado 
4- Multiple
5- Operador ternario
*/




// /*Simple */
// if(true){
//     console.log("Esto es verdad")
// }

// /*Compuesto */

// if(False){
//     console.log("Esto es falso")
// }

// /*Multiple */
// switch (1) {
//     case1 :
//     break;
//     default:
//     break;
// }

// /*Anidado*/
// if (true) {
    
// } else if (true) {
    
// } else if (true) {
    
// } else if (true) {
    
// } else {

// }

// /* Ternario */
// let variable = condicion ? true : false


/* Ciclo
1- for 
2- white 
3- Do - White
 */

let opcion = prompt("Ingrese una opcion: \n1 - Calcular bruto \n2 - Calcular  deducciones\n3 - Calcular auxilio de transporte\n4 - Calcular salario neto ");

let valorHora
let cantidadHoras

switch (opcion) {
    case "1":
        valorHora = prompt("Ingrese el valor de la hora: ");
        cantidadHoras = prompt ("Ingrese la cantidad de horas: ");
        if (isNaN (valorHora) || isNaN (cantidadHoras)) {
            console.log ("El valor ingresado no corresponde a un numero valido");
            
        } else{
            console.log("El valor bruto es: " + (valorHora * cantidadHoras));
        } 
        break;
    case "2": 
        valorHora = prompt("Ingrese el valor de la hora: ");
        cantidadHoras = prompt ("Ingrese la cantidad de horas: ");
        if (isNaN (valorHora) || isNaN (cantidadHoras)) {
            console.log ("El valor ingresado no corresponde a un numero valido");
        } else {
            console.log ("Las deduciones son: " + valorHora * cantidadHoras * 0.08); 
        }
        break; 

    case "3": 
        valorHora = prompt("Ingrese el valor de la hora: ");
        cantidadHoras = prompt ("Ingrese la cantidad de horas: ");
        if (isNaN (valorHora) || isNaN (cantidadHoras)) {
            console.log ("El valor ingresado no corresponde a un numero valido");
        } else if (valorHora * cantidadHoras < 1400000) {
            console.log ("Tiene derecho a auxilio de transporte"); 
        } else {
            console.log ("No tiene derecho a auxilio de transporte"); 
        }
        break; 

        case "4": 
        valorHora = prompt("Ingrese el valor de la hora: ");
        cantidadHoras = prompt ("Ingrese la cantidad de horas: ");
        if (isNaN (valorHora) || isNaN (cantidadHoras)) {
            console.log ("El valor ingresado no corresponde a un numero valido");
        } else if (valorHora * cantidadHoras < 1400000) {
            console.log ("El salario neto es: " + (valorHora * cantidadHoras) - (valorHora * 0.08) + 200000); 
        } else {
             console.log ("El salario neto es: " + (valorHora * cantidadHoras) - (valorHora * 0.08)); 
        }
        break; 

    default:
        break;
}