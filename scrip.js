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

const entradasactualesCDS = [];
const entradasactualesGPC = [];
const entradasactualesCEN = [];


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
                console.log("La persona no puede comprar por ser menor de edad")
                break
            }
                else {

        class entrada {
        constructor(precio, descuento, cantidad) {
        this.precio  = 250;
        this.descuento  = parseFloat(descuento);
        this.cantidad = cantidad;
        }
    
        compra(){
            this.venta = (this.precio - this.descuento) * this.cantidad;
        }
        
        ahorro() {
            this.descuento = this.venta; 
        }

        visualizar(){
            console.log(this)
            console.log(compradorCDS + " compro para el estadio CDS: " + cantEntradascds + "entradas")
        }
        

        }

        

        const comprador1 = new entrada (this.precio,prompt("Ingrese descuento: Socios $20 descuento / No socios Ingrese 0"),parseInt(prompt(compradorCDS + " ingrese cantidad de entradas:")))
        let cantEntradascds = comprador1.cantidad
        
        comprador1.compra();
        comprador1.ahorro();

        //////
        
        let entrada1 = cantEntradascds
        entradasactualesCDS.push(entrada1)
        let suma =0
        for (let i =0; i<entradasactualesCDS.length;i++){
        suma += entradasactualesCDS[i];
        }

        let aforo1 = entradas(aforocds,suma)

        console.log("aforo restante: " + aforo1)
        
        //////

        if(suma > aforocds){
            alert("La cantidad de entradas actuales vendidas al momento es de : " + suma + " Solamente puede vender " + entradas(aforocds,suma) + " mas." + "\n Intente nuevamente" )
            break
        }

        else{
            alert("Total a pagar: " + "$" + comprador1.descuento)
            alert("Gracias por su compra , aun quedan para el estadio " + est1 + " " + entradas(aforocds, suma))

        comprador1.visualizar(); 

        entradasactualesCDS.sort(function(a, b) {
            return a - b;
          });
        console.log("Entradas ordenadas: " + entradasactualesCDS)


            break
          }

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
                console.log("La persona no puede comprar por ser menor de edad")
                break
                }
                else {

                    class entrada {
                        constructor(precio, descuento, cantidad) {
                        this.precio  = 250;
                        this.descuento  = parseFloat(descuento);
                        this.cantidad = cantidad;
                        }
                    
                        compra(){
                            this.venta = (this.precio - this.descuento) * this.cantidad;
                        }
                        
                        ahorro() {
                            this.descuento = this.venta; 
                        }
                
                        visualizar(){
                            console.log(this)
                            console.log(compradorGPC + " compro para el estadio GPC: " + cantEntradasgpc + "entradas")
                        }
                
                        }
                
                        const comprador1 = new entrada (this.precio,prompt("Ingrese descuento: Socios $20 descuento / No socios Ingrese 0"),parseInt(prompt(compradorGPC + " ingrese cantidad de entradas:")))
                        let cantEntradasgpc = comprador1.cantidad
                        
                        comprador1.compra();
                        comprador1.ahorro();

                        //////
                        let entrada2 = cantEntradasgpc
                        entradasactualesGPC.push(entrada2)
                        let suma =0
                        for (let i =0; i<entradasactualesGPC.length;i++){
                        suma += entradasactualesGPC[i];
                        }

                        let aforo2 = entradas(aforogpc,suma)

                        console.log("aforo restante: " + aforo2)
                        
                        //////
                    
               
                        if(suma > aforogpc){
                            alert("La cantidad de entradas actuales vendidas al momento es de : " + suma + " Solamente puede vender " + entradas(aforogpc,suma) + " mas." + "\n Intente nuevamente" )
                            break
                        }
                
                        else{
                            alert("Total a pagar: " + "$" + comprador1.descuento)
                            alert("Gracias por su compra , aun quedan para el estadio " + est2 + " " + entradas(aforogpc, suma))
                
                        comprador1.visualizar(); 

                        entradasactualesGPC.sort(function(a, b) {
                            return a - b;
                          });
                        console.log("Entradas ordenadas: " + entradasactualesGPC)
                    
                            break
                          }
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
                console.log("La persona no puede comprar por ser menor de edad")
                
                break
            }
                else {

                    class entrada {
                        constructor(precio, descuento, cantidad) {
                        this.precio  = 250;
                        this.descuento  = parseFloat(descuento);
                        this.cantidad = cantidad;
                        }
                    
                        compra(){
                            this.venta = (this.precio - this.descuento) * this.cantidad;
                        }
                        
                        ahorro() {
                            this.descuento = this.venta; 
                        }
                
                        visualizar(){
                            console.log(this)
                            console.log(compradorCEN + " compro para el estadio Centenario: " + cantEntradascen + "entradas")
                        }
                
                        }

                        const comprador1 = new entrada (this.precio,prompt("Ingrese descuento: Socios $20 descuento / No socios Ingrese 0"),parseInt(prompt(compradorCEN + " ingrese cantidad de entradas:")))

                        let cantEntradascen = comprador1.cantidad

                        comprador1.compra();
                        comprador1.ahorro();

                        //////
                        let entrada3 = cantEntradascen
                        entradasactualesCEN.push(entrada3)
                        let suma =0
                        for (let i =0; i<entradasactualesCEN.length;i++){
                        suma += entradasactualesCEN[i];
                        }

                        let aforo3 = entradas(aforocentenario,suma)

                        console.log("aforo restante: " + aforo3)
                        
                        //////
                    
                        if(suma > aforocentenario){
                            alert("La cantidad de entradas actuales vendidas al momento es de : " + suma + " Solamente puede vender " + entradas(aforocentenario,suma) + " mas." + "\n Intente nuevamente" )
                            break
                        }
                
                        else{
                            alert("Total a pagar: " + "$" + comprador1.descuento)
                            alert("Gracias por su compra , aun quedan para el estadio " + est3 + " " + entradas(aforocentenario, suma))
                
                        comprador1.visualizar(); 

                        entradasactualesCEN.sort(function(a, b) {
                            return a - b;
                          });
                        console.log("Entradas ordenadas: " + entradasactualesCEN)

                            break
                          }
                        
                        }
            //Default
        default:
            alert("NO SELECCIONO NUMERO VALIDO")
            break;



    }


    alert("En esta nueva fase de la Pandemia Covid-19 en Uruguay, el gobierno decide habilitar el 30% de aforo en los estadios")
    estadio = parseInt(prompt("Ingrese estadio: \n 1 - Campeon del Siglo (Peñarol) \n 2 - Parque Central (Nacional) \n 3 - Centenario (Seleccion Uruguaya) \n 4 - PARA SALIR DEL PROGRAMA"))

}


console.log("FUERA DEL PROGRAMA MIMIX - 1.0")