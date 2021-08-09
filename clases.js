/* function saludar() {
    console.log("¡Hola señor kiosquero!");
}
 */

//***************************************************

//ejemplo basico

/* function solicitarNombre(){
    let nombreIngresado   = prompt("Ingresar nombre");
    alert("El nombre ingresado es " + nombreIngresado);
} 

solicitarNombre()
solicitarNombre()
solicitarNombre() */

//***************************************************

/* //Funcion con parametros
//Parametro 1 y parametro 2 son parametros
function conParametros (parametro1, parametro2){
    console.log(parametro1 + " " + parametro2);
}

//argumento de parametros
conParametros("Hola ", prompt("ingrese nombre")); */

//***************************************************

//Ejemplo de funcion suma y mensaje con resultado de la accion de una funcion

/* let resultado = 0;

function sumar (primerNumero, segundoNumero){
    resultado = primerNumero + segundoNumero;
}

function mostrarMensaje (mensaje){
    console.log(mensaje)
}

sumar(prompt("Ingrese numero uno"), prompt("ingrese numero dos"));

mostrarMensaje("El resultado es: " + resultado);
 */

//***************************************************

/* function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}
console.log(calculadora(10, 5, prompt("Ingresar + - * /"))); */


//***************************************************


/* // AMBITO : Variable local

function sumar(primerNumero, segundoNumero) {
    //declarado aca dentro de la funcion
    let resultado = primerNumero + segundoNumero;
}

sumar(3,2)
//No se puede acceder a la variable resultado fuera del bloque
console.log(resultado); */

//***************************************************
/* // AMBITO : Variable global

//Declaro fuera de la funcion
let resultado = 0
function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero;
}
sumar(5,6);
//Se puede acceder a la variable resultado porque es global
console.log(resultado); */

//***************************************************

/* const suma  = (a, b) => { return a + b };
//Si es una función de una sola línea con retorno podemos evitar escribir el cuerpo.
const resta = (a, b) =>  a - b ;
console.log(suma(15,20));
console.log(resta(20,5));
console.log(suma(44,1)) */

//***************************************************

//Funcion Flecha

/* const suma = (a,b) => {return a + b};
const resta = (a,b) => a - b;
const iva = x => x * 0.21;

console.log ("Suma con funcion flecha " + suma(17,3))
console.log ("Resta con funcion flecha: " + resta(2,10))

let precioProducto = 500;
let precioDescuento = 50;


let nuevoPrecio = resta(suma(precioProducto, iva (precioProducto)),precioDescuento);
console.log("El costo final es de: " + nuevoPrecio)
 */
//***************************************************
