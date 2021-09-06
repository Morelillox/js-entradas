//Ingresos a estadios en Pandemia - Uruguay


//aforo por pandemia del 30%
var aforo = 0.3
//aforo total de cada estadio 
var cds = 40700
var gpc = 34000
var centenario = 60235
console.log("Estadios: " + "CDS: " + cds + "\nGPC: " + gpc + "\nCentenario: " + centenario)



//Asignacion de estadios 
var est1 = "Campeon del Siglo"
var est2 = "Parque Central"
var est3 = "Estadio Centenario"

//Constantes que seran utilizadas 
var ecuacion = x => x * aforo
var entradas = (a, b) => a - b;

//Operacion matematica para asignar la cantidad de aforo disponible para cada estadio
var aforocds = parseInt(ecuacion(cds))
var aforogpc = parseInt(ecuacion(gpc))
var aforocentenario = parseInt(ecuacion(centenario))

var entradasactualesCDS = [];
var entradasactualesGPC = [];
var entradasactualesCEN = [];

var datoscds = []
var datosgpc = []
var datoscen = []

/// clases

class Entrada {
    constructor(precio, descuento, cantidad) {
        this.precio = precio;
        this.descuento = descuento;
        this.cantidad = cantidad;
    }

    compra() {
        this.venta = (this.precio - this.descuento) * this.cantidad;
    }

    ahorro() {
        this.descuento = this.venta;
    }

    visualizar() {
        console.log(this)
        console.log(`Nombre: ${nombre.val()} Apellido: ${apellido.val()}`);
        console.log("Compro para el estadio: " + this.cantidad + " entradas");
    }


}

class Dato {
    constructor(id, nombre, apellido, cantidad) {
        this.id = id;
        this.name = nombre;
        this.last = apellido;
        this.qty = cantidad;
    }

    toString() {
        //devolvemos nuestro objeto en formato json
        return JSON.stringify(this);
    }
}

let id = 0;



/* function guardarLista() {
    localStorage.setItem("datoscds", JSON.stringify(datoscds));
    console.log("La lista se ha guardado con " + datoscds.length + " Compras:");
    for (Dato of datoscds) {
        console.log(Dato.toString());
    }
} */

///funcion botones desplegables

function agregarItemcds() {

    console.log("Estadio seleccionado: " + est1 + " aforo: " + aforocds)

};

function agregarItemgpc() {

    console.log("Estadio seleccionado: " + est2 + " aforo: " + aforogpc)

};

function agregarItemcen() {

    console.log("Estadio seleccionado: " + est3 + " aforo: " + aforocen)
};


///Aplicando JQuerry

$(document).ready(function () {

    ///Submit boton formulario Campeon del Siglo

    var formulario = document.getElementById("formulariocds");
    formulario.addEventListener("submit", validarDatoscds);

    function validarDatoscds(e) {

        e.preventDefault();



        nombre = $("#nombrecds");
        apellido = $("#apellidocds");
        edad = $("#edadcds");
        cantidadd = parseInt($("#entradascds").val());

        console.log(`Nombre: ${nombre.val()} Apellido: ${apellido.val()}`);

    
        let NuevoUsuario = new Dato (++id, nombre.val(), apellido.val(), cantidadd)

        datoscds.push(
            NuevoUsuario
        )


        var miCheckbox = $("#checkcds");
        var descuento1 = 0
        if (miCheckbox.checked == true) {
            descuento1 = 20
        } else {
            descuento1 = 0
        };


        const comprador1 = new Entrada(parseInt(250), parseInt(descuento1), cantidadd)
        var cantEntradascds = comprador1.cantidad

        comprador1.compra();
        comprador1.ahorro();

        //////

        var entrada1 = cantEntradascds
        entradasactualesCDS.push(entrada1)
        var suma = 0
        for (var i = 0; i < entradasactualesCDS.length; i++) {
            suma += entradasactualesCDS[i];
        }

        var aforo1 = entradas(aforocds, suma)

        console.log("aforo restante: " + aforo1)


        //////

        if (suma > aforocds) {
            alert("La cantidad de entradas actuales vendidas al momento es de : " + suma + " Solamente puede vender " + entradas(aforocds, suma) + " mas." + "\n Intente nuevamente")

        } else {

            comprador1.visualizar();

        }


        $("#cds").append(`<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
                                <div class="card-header">RESUMEN</div>
                                <div class="card-body">
                                <p class="card-text"> Gracias !!! : ${nombre.val()}</p>
                                <p class="card-text"> Saldo a Pagar: !!! : ${comprador1.descuento}</p>
                                <h5 class="card-title">Entradas Compradas: ${cantidadd}</h5>
                                <p class="card-text"> Quedan para vender: ${aforo1}</p>
                                <button  type="submit" id="guardar" class=" btn-boton" >Confirmar</button>
                                </div>
                                </div>`);


        $("#guardar").click(function () {
            console.log("GUARDAR Y RESET");
            localStorage.setItem("datoscds", JSON.stringify(datoscds));
            console.log("La lista se ha guardado con " + datoscds.length + " Compras:");
        
            $("#edadcds").val("")
            $("#nombrecds").val("")
            $("#apellidocds").val("")
            $("#entradascds").val("")
            $("#cds").html("");
        });


    }




    ///Submit boton formulario Parque central

    var formulario = document.getElementById("formulariogpc");
    formulario.addEventListener("submit", validarDatosgpc);

    function validarDatosgpc(e) {

        e.preventDefault();

        nombre = document.getElementById("nombregpc")
        apellido = document.getElementById("apellidogpc")
        edad = document.getElementById("edadgpc")



        var miCheckbox = document.getElementById("checkgpc");
        var descuento1 = 0
        if (miCheckbox.checked == true) {
            descuento1 = 20
            alert("Selecciono que la persona es socia. " + " Tendra un descuento de : $" + descuento1 + " por cada entrada comprada.")
        } else {
            descuento1 = 0
        };




        class entrada {
            constructor(precio, descuento, cantidad) {
                this.precio = parseInt(250);
                this.descuento = parseInt(descuento1);
                this.cantidad = parseInt(document.getElementById("entradasgpc").value);
            }

            compra() {
                this.venta = (this.precio - this.descuento) * this.cantidad;
            }

            ahorro() {
                this.descuento = this.venta;
            }

            visualizar() {
                console.log(this)
                console.log(`${nombre.value} : ${apellido.value}`);
                console.log("Compro para el estadio GPC: " + this.cantidad + " entradas");
            }


        }


        const comprador1 = new entrada(this.precio, this.descuento, this.cantidad)
        var cantEntradasgpc = comprador1.cantidad

        comprador1.compra();
        comprador1.ahorro();

        //////

        var entrada1 = cantEntradasgpc
        entradasactualesGPC.push(entrada1)
        var suma = 0
        for (var i = 0; i < entradasactualesGPC.length; i++) {
            suma += entradasactualesGPC[i];
        }

        var aforo2 = entradas(aforogpc, suma)

        console.log("aforo restante: " + aforo2)


        //////

        if (suma > aforogpc) {
            alert("La cantidad de entradas actuales vendidas al momento es de : " + suma + " Solamente puede vender " + entradas(aforogpc, suma) + " mas." + "\n Intente nuevamente")

        } else {
            alert("Total a pagar: " + "$" + comprador1.descuento)
            alert("Gracias por su compra , aun quedan para el estadio " + est2 + " " + entradas(aforogpc, suma))

            comprador1.visualizar();

        }


        //PLANTILLAS LITERALES E innerHTML


        var divgpc = document.getElementById("gpc");

        var infogpc = {
            titulo: "Resumen",
            saldo: comprador1.descuento,
            entradasactuales: parseInt(document.getElementById("entradasgpc").value),
            resto: aforo2
        };
        var contenedor = document.createElement("div");
        //Definimos el innerHTML del elemento con una plantilla de texto
        contenedor.innerHTML = `<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
                                <div class="card-header">${infogpc.titulo}</div>
                                <div class="card-body">
                                <p class="card-text"> Gracias !!! : ${nombre.value}</p>
                                <p class="card-text"> Saldo a Pagar: !!! : ${infogpc.saldo}</p>
                                <h5 class="card-title">Entradas Compradas: ${infogpc.entradasactuales}</h5>
                                <p class="card-text"> Quedan para vender: ${infogpc.resto}</p>
                                </div>
                                </div>`;
        //Agregamos el contenedor creado al body
        //Agregamos el contenedor creado al body

        divgpc.innerHTML = " ";
        divgpc.appendChild(contenedor);

        window.localStorage.setItem(entradasgpc, infogpc.resto)
        var guardado1 = localStorage.getItem(entradasgpc)
        console.log(guardado1)


        alert("chequea info")




    }





    ///Submit boton formulario Centenario

    var formulario = document.getElementById("formulariocen");
    formulario.addEventListener("submit", validarDatoscen);

    function validarDatoscen(e) {

        e.preventDefault();

        nombre = document.getElementById("nombrecen")
        apellido = document.getElementById("apellidocen")
        edad = document.getElementById("edadcen")



        var miCheckbox = document.getElementById("checkcen");
        var descuento1 = 0
        if (miCheckbox.checked == true) {
            descuento1 = 20
            alert("Selecciono que la persona es socia. " + " Tendra un descuento de : $" + descuento1 + " por cada entrada comprada.")
        } else {
            descuento1 = 0
        };





        class entrada {
            constructor(precio, descuento, cantidad) {
                this.precio = parseInt(250);
                this.descuento = parseInt(descuento1);
                this.cantidad = parseInt(document.getElementById("entradascen").value);
            }

            compra() {
                this.venta = (this.precio - this.descuento) * this.cantidad;
            }

            ahorro() {
                this.descuento = this.venta;
            }

            visualizar() {
                console.log(this)
                console.log(`${nombre.value} : ${apellido.value}`);
                console.log("Compro para el estadio CEN: " + this.cantidad + " entradas");
            }


        }


        const comprador1 = new entrada(this.precio, this.descuento, this.cantidad)
        var cantEntradascen = comprador1.cantidad

        comprador1.compra();
        comprador1.ahorro();

        //////

        var entrada1 = cantEntradascen
        entradasactualesCEN.push(entrada1)
        var suma = 0
        for (var i = 0; i < entradasactualesCEN.length; i++) {
            suma += entradasactualesCEN[i];
        }

        var aforo3 = entradas(aforocentenario, suma)

        console.log("aforo restante: " + aforo3)


        //////

        if (suma > aforocentenario) {
            alert("La cantidad de entradas actuales vendidas al momento es de : " + suma + " Solamente puede vender " + entradas(aforocentenario, suma) + " mas." + "\n Intente nuevamente")

        } else {
            alert("Total a pagar: " + "$" + comprador1.descuento)
            alert("Gracias por su compra , aun quedan para el estadio " + est3 + " " + entradas(aforocentenario, suma))

            comprador1.visualizar();

        }


        //PLANTILLAS LITERALES E innerHTML


        var divcen = document.getElementById("cen");

        var infocen = {
            titulo: "Resumen",
            saldo: comprador1.descuento,
            entradasactuales: parseInt(document.getElementById("entradascen").value),
            resto: aforo3
        };
        var contenedor = document.createElement("div");
        //Definimos el innerHTML del elemento con una plantilla de texto
        contenedor.innerHTML = `<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
                                <div class="card-header">${infocen.titulo}</div>
                                <div class="card-body">
                                <p class="card-text"> Gracias !!! : ${nombre.value}</p>
                                <p class="card-text"> Saldo a Pagar: !!! : ${infocen.saldo}</p>
                                <h5 class="card-title">Entradas Compradas: ${infocen.entradasactuales}</h5>
                                <p class="card-text"> Quedan para vender: ${infocen.resto}</p>
                                </div>
                                </div>`;
        //Agregamos el contenedor creado al body
        divcen.innerHTML = " ";
        divcen.appendChild(contenedor);

        window.localStorage.setItem(entradascen, infocen.resto)
        var guardado1 = localStorage.getItem(entradascen)
        console.log(guardado1)

        alert("chequea info")




    }



});