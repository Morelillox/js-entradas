//Ingresos a estadios en Pandemia - Uruguay


//aforo por pandemia del 30%
let aforo = 0.3
//aforo total de cada estadio 
let cds = 40700
let gpc = 34000
let centenario = 60235
console.log("Estadios: " + "CDS: " + cds + "\nGPC: " + gpc + "\nCentenario: " + centenario)



//Asignacion de estadios 
let est1 = "Campeon del Siglo"
let est2 = "Parque Central"
let est3 = "Estadio Centenario"

//Constantes que seran utilizadas 
let ecuacion = x => x * aforo
let entradas = (a, b) => a - b;

//Operacion matematica para asignar la cantidad de aforo disponible para cada estadio
let aforocds = parseInt(ecuacion(cds))
let aforogpc = parseInt(ecuacion(gpc))
let aforocen = parseInt(ecuacion(centenario))

let entradasactualesCDS = [];
let entradasactualesGPC = [];
let entradasactualesCEN = [];

let datoscds = []
let datosgpc = []
let datoscen = []

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


    $("#picCds").mouseenter (function() {
        $( "#contenedorEntradascds" ).append(`<p class="card-text entradas"> Entradas Vendidas al momento: ${entradasactualesCDS}</p>`);
      });

    $("#picCds").mouseleave (function() {
        $( "#contenedorEntradascds p" ).remove();
      });  

    ///Submit boton formulario Campeon del Siglo

    

    let formulariocds = document.getElementById("formulariocds");
    formulariocds.addEventListener("submit", validarDatoscds);

    function validarDatoscds(e) {

        e.preventDefault();



        nombre = $("#nombrecds");
        apellido = $("#apellidocds");
        edad = $("#edadcds");
        cantidadCDS = parseInt($("#entradascds").val());

        console.log(`Nombre: ${nombre.val()} Apellido: ${apellido.val()}`);

    
        let NuevoUsuario = new Dato (++id, nombre.val(), apellido.val(), cantidadCDS)

        datoscds.push(
            NuevoUsuario
        )

        let descuento1 = $('#sociosCDS').val(); 
        
        if (descuento1 == 20 ){
            console.log("socio del Club")
        }
        

        const comprador1 = new Entrada(parseInt(250), parseInt(descuento1), cantidadCDS)
        let cantEntradascds = comprador1.cantidad

        comprador1.compra();
        comprador1.ahorro();

        //////

        let entrada1 = cantEntradascds
        entradasactualesCDS.push(entrada1)
        let suma = 0
        for (var i = 0; i < entradasactualesCDS.length; i++) {
            suma += entradasactualesCDS[i];
        }

        let aforo1 = entradas(aforocds, suma)

        console.log("aforo restante: " + aforo1)


        //////

        if (suma > aforocds) {
            alert("La cantidad de entradas actuales vendidas al momento es de : " + suma + " Solamente puede vender " + entradas(aforocds, suma) + " mas." + "\n Intente nuevamente")

        } else {

            comprador1.visualizar();
            $("#cds").append(`<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
                                            <div class="card-header">RESUMEN</div>
                                            <div class="card-body">
                                            <p class="card-text"> Gracias !!! : ${nombre.val()}</p>
                                            <p class="card-text"> Saldo a Pagar: !!! : ${comprador1.descuento}</p>
                                            <h5 class="card-title">Entradas Compradas: ${cantidadCDS}</h5>
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


        


    }




    ///Submit boton formulario Parque central


    $("#picGPC").mouseenter (function() {
        $( "#contenedorEntradasgpc" ).append(`<p class="card-text entradas"> Entradas Vendidas al momento: ${entradasactualesGPC}</p>`);
      });

    $("#picGPC").mouseleave (function() {
        $( "#contenedorEntradasgpc p" ).remove();
      });  

    ///Submit boton formulario Parque Central

    let formulariogpc = document.getElementById("formulariogpc");
    formulariogpc.addEventListener("submit", validarDatosgpc);

    function validarDatosgpc(e) {

        e.preventDefault();

        nombre = $("#nombregpc");
        apellido = $("#apellidogpc");
        edad = $("#edadgpc");
        cantidadGPC = parseInt($("#entradasgpc").val());

        console.log(`Nombre: ${nombre.val()} Apellido: ${apellido.val()}`);

    
        let NuevoUsuario = new Dato (++id, nombre.val(), apellido.val(), cantidadGPC)

        datosgpc.push(
            NuevoUsuario
        )

        let descuento1 = $('#sociosGPC').val(); 
        
        if (descuento1 == 20 ){
            console.log("socio del Club")
        }

    
        const comprador1 = new Entrada(parseInt(250), parseInt(descuento1), cantidadGPC)
        let cantEntradasgpc = comprador1.cantidad

        comprador1.compra();
        comprador1.ahorro();

        //////

        let entrada1 = cantEntradasgpc
        entradasactualesGPC.push(entrada1)
        let suma = 0
        for (var i = 0; i < entradasactualesGPC.length; i++) {
            suma += entradasactualesGPC[i];
        }

        let aforo2 = entradas(aforogpc, suma)

        console.log("aforo restante: " + aforo2)


        //////

        if (suma > aforogpc) {
            alert("La cantidad de entradas actuales vendidas al momento es de : " + suma + " Solamente puede vender " + entradas(aforogpc, suma) + " mas." + "\n Intente nuevamente")

        } else {
            comprador1.visualizar();
            $("#gpc").append(`<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
                                            <div class="card-header">RESUMEN</div>
                                            <div class="card-body">
                                            <p class="card-text"> Gracias !!! : ${nombre.val()}</p>
                                            <p class="card-text"> Saldo a Pagar: !!! : ${comprador1.descuento}</p>
                                            <h5 class="card-title">Entradas Compradas: ${cantidadGPC}</h5>
                                            <p class="card-text"> Quedan para vender: ${aforo2}</p>
                                            <button  type="submit" id="guardar" class=" btn-boton" >Confirmar</button>
                                            </div>
                                            </div>`);


                    $("#guardar").click(function () {
                        console.log("GUARDAR Y RESET");
                        localStorage.setItem("datosgpc", JSON.stringify(datosgpc));
                        console.log("La lista se ha guardado con " + datosgpc.length + " Compras:");
                    
                        $("#edadgpc").val("")
                        $("#nombregpc").val("")
                        $("#apellidogpc").val("")
                        $("#entradasgpc").val("")
                        $("#gpc").html("");
                    });

        }



    }




    ///Submit boton formulario Centenario

    $("#picCEN").mouseenter (function() {
        $( "#contenedorEntradascen" ).append(`<p class="card-text entradas"> Entradas Vendidas al momento: ${entradasactualesCEN}</p>`);
      });

    $("#picCEN").mouseleave (function() {
        $( "#contenedorEntradascen p" ).remove();
      });  

    var formulariocen = document.getElementById("formulariocen");
    formulariocen.addEventListener("submit", validarDatoscen);

    function validarDatoscen(e) {

        e.preventDefault();

        nombre = $("#nombrecen");
        apellido = $("#apellidocen");
        edad = $("#edadcen");
        cantidadCEN = parseInt($("#entradascen").val());

        console.log(`Nombre: ${nombre.val()} Apellido: ${apellido.val()}`);

    
        let NuevoUsuario = new Dato (++id, nombre.val(), apellido.val(), cantidadCEN)

        datoscen.push(
            NuevoUsuario
        )
        
        let descuento1 = $('#sociosCEN').val(); 
        
        if (descuento1 == 20 ){
            console.log("socio del Club")
        }

        const comprador1 = new Entrada(parseInt(250), parseInt(descuento1), cantidadCEN)
        let cantEntradascen = comprador1.cantidad

        comprador1.compra();
        comprador1.ahorro();

        //////

        let entrada1 = cantEntradascen
        entradasactualesCEN.push(entrada1)
        let suma = 0
        for (var i = 0; i < entradasactualesCEN.length; i++) {
            suma += entradasactualesCEN[i];
        }

        var aforo3 = entradas(aforocen, suma)

        console.log("aforo restante: " + aforo3)


        //////

        if (suma > aforocen) {
            alert("La cantidad de entradas actuales vendidas al momento es de : " + suma + " Solamente puede vender " + entradas(aforocentenario, suma) + " mas." + "\n Intente nuevamente")

        } else {
           comprador1.visualizar();
           $("#cen").append(`<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
                                            <div class="card-header">RESUMEN</div>
                                            <div class="card-body">
                                            <p class="card-text"> Gracias !!! : ${nombre.val()}</p>
                                            <p class="card-text"> Saldo a Pagar: !!! : ${comprador1.descuento}</p>
                                            <h5 class="card-title">Entradas Compradas: ${cantidadCEN}</h5>
                                            <p class="card-text"> Quedan para vender: ${aforo3}</p>
                                            <button  type="submit" id="guardar" class=" btn-boton" >Confirmar</button>
                                            </div>
                                            </div>`);


                    $("#guardar").click(function () {
                        console.log("GUARDAR Y RESET");
                        localStorage.setItem("datoscen", JSON.stringify(datoscen));
                        console.log("La lista se ha guardado con " + datoscen.length + " Compras:");
                    
                        $("#edadcen").val("")
                        $("#nombrecen").val("")
                        $("#apellidocen").val("")
                        $("#entradascen").val("")
                        $("#cen").html("");
                    });


        }


    }

  /*   $("#botonResumen").click(function () {
        console.log("click en el boton ")
        alert("Entradas Vendidas por este usuario hasta el momento:" + 
        "\n Campeon del siglo - " + entradasactualesCDS +
        "\n Campeon Parque Central - " + entradasactualesGPC +
        "\n Campeon Centenario - " + entradasactualesCEN);
    });
     */

});