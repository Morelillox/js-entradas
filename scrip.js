//Ingresos a estadios en Pandemia - Uruguay


//aforo por pandemia del 30%
let aforo = 0.3
//aforo total de cada estadio 
let cds = 40700
let gpc = 34000
let centenario = 60235
console.log("Estadios: " + "CDS: " + cds + "\nGPC: " + gpc + "\nCentenario: " + centenario)

//Informacion sobre coronavirus en URUGUAY
alert("En esta nueva fase de la Pandemia Covid-19 en Uruguay, el gobierno decide habilitar el 30% de aforo en los estadios")

//Solicitud para trabajar en los estadios habitlitados para publico
let estadio = parseInt(prompt("Ingrese estadio: \n 1 - Campeon del Siglo (Peñarol) \n 2 - Parque Central (Nacional) \n 3 - Centenario (Seleccion Uruguaya) \n 4 - PARA SALIR DEL PROGRAMA"))

//Asignacion de estadios 
let est1 = "Campeon del Siglo"
let est2 = "Parque Central"
let est3 = "Estadio Centenario"

//Constantes que seran utilizadas 
const ecuacion = x => x * aforo
const entradas = (a, b) => a - b;

//Operacion matematica para asignar la cantidad de aforo disponible para cada estadio
let aforocds = parseInt(ecuacion(cds))
let aforogpc = parseInt(ecuacion(gpc))
let aforocentenario = parseInt(ecuacion(centenario))



while (estadio != 4) {

    switch (estadio) {

        //Campeon del Siglo
        case 1:
            console.log("Estadio seleccionado: " + est1)

            console.log("Aforo de estadio seleccionado: " + aforocds)
            alert("El aforo de este estadio durante la pandemia sera de: " + aforocds)

            let compradorCDS = prompt("ingrese nombre:")
            let edad1 = parseInt(prompt("ingrese edad"))

            if (edad1 < 18) {
                alert("Menores de edad no estan autorizados a comprar entradas para este tipo de eventos")
                
                break
            }
                else {

            let cantEntradascds = parseInt(prompt(compradorCDS + " ingrese cantidad de entradas:"))
            console.log(compradorCDS + " compro para el estadio CDS: " + cantEntradascds)

            alert("Gracias por su compra , aun quedan para el estadio " + est1 + " " + entradas(aforocds, cantEntradascds))

            break
            
            }

            //Gran Parque Central
        case 2:
            console.log("Estadio seleccionado: " + est2)

            console.log("Aforo de estadio seleccionado: " + aforogpc)
            alert("El aforo de este estadio durante la pandemia sera de: " + aforogpc)


            let compradorGPC = prompt("ingrese nombre:")

            let edad2 = parseInt(prompt("ingrese edad"))

            if (edad2 < 18) {
                alert("Menores de edad no estan autorizados a comprar entradas para este tipo de eventos")
                
                break
            }
                else {
            let cantEntradasgpc = parseInt(prompt(compradorGPC + " ingrese cantidad de entradas:"))
            console.log(compradorGPC + " compro para el estadio GPC: " + cantEntradasgpc)

            alert("Gracias por su compra , aun quedan para el estadio " + est2 + " " + entradas(aforogpc, cantEntradasgpc))

            break
            }

            //Centenario
        case 3:
            console.log("Estadio seleccionado: " + est3)

            console.log("Aforo de estadio seleccionado: " + aforocentenario)
            alert("El aforo de este estadio durante la pandemia sera de: " + aforocentenario)

            let compradorCEN = prompt("ingrese nombre:")

            let edad3 = parseInt(prompt("ingrese edad"))

            if (edad3 < 18) {
                alert("Menores de edad no estan autorizados a comprar entradas para este tipo de eventos")
                
                break
            }
                else {
            let cantEntradascen = parseInt(prompt(compradorCEN + " ingrese cantidad de entradas:"))
            console.log(compradorCEN + " compro para el estadio Centenario: " + cantEntradascen)

            alert("Gracias por su compra , aun quedan para el estadio " + est3 + " " + entradas(aforocentenario, cantEntradascen))

            break
            }

            //Default
        default:
            alert("NO SELECCIONO NUMERO VALIDO")
            break;



    }


    alert("En esta nueva fase de la Pandemia Covid-19 en Uruguay, el gobierno decide habilitar el 30% de aforo en los estadios")
    estadio = parseInt(prompt("Ingrese estadio: \n 1 - Campeon del Siglo (Peñarol) \n 2 - Parque Central (Nacional) \n 3 - Centenario (Seleccion Uruguaya) \n 4 - PARA SALIR DEL PROGRAMA"))

}


console.log("FUERA")