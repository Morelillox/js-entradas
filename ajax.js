$(function(){

    const URL = $("form").attr("action");
    const METH = $("form").attr("method");
    //Capturamos el click de listarUsers
    $("#listarUsers").click( () => {
        //vamos a llamar una api que trae lista de usuarios
        $.ajax({
            method: METH,
            url: URL,
            success: function(resp){
                //console.log(resp.data);
                for ( user of resp.data){
                   // console.log(user);
                    $("#caja-lista-users").append(`                        
                        <div class="card" style="width: 18rem;">
                        <img src="${user.avatar}" class="card-img-top" alt="${user.first_name} ${user.last_name}">
                        <div class="card-body">
                            <h5 class="card-title">${user.first_name} ${user.last_name}</h5>
                            <p class="card-text"> Email: ${user.email}</p>
                            <a href="" id="${user.id}" value="${user.id}" class="btn btn-primary btn-boton">Seleccionar</a>
                        </div>
                    </div>`
                    );
                }
                //capturamos evento de click en a
                $(".card-body > a").on("click", function(e) {
                    e.preventDefault();
                    console.log(this);
                    console.log(e);

                    console.log((this).id)

                                    

                    if ((this).id == 7){
                        console.log("Usuario seleccionado Michael Lawson")
                        $("#master").append(`
                        <img src="https://reqres.in/img/faces/7-image.jpg" class="user" alt="Lawson">
                        <p class="userTx"> Usuario: M.Lawson </p>`);
                        $(".usersMaster").remove()
                        $("#caja-lista-users").html("")
                    }

                    else if((this).id == 8){
                        console.log("Usuario seleccionado Lindsay Ferguson")
                        $("#master").append(`
                        <img src="https://reqres.in/img/faces/8-image.jpg" class="user" alt="Ferguson">
                        <p class="userTx"> Usuario: L.Ferguson </p>`);
                        $(".usersMaster").remove()
                        $("#caja-lista-users").html("")
                    }

                    else if((this).id == 9){
                        console.log("Usuario seleccionado Tobias Funke")
                        $("#master").append(`
                        <img src="https://reqres.in/img/faces/9-image.jpg" class="user" alt="Funke">
                        <p class="userTx"> Usuario: T.Funke </p>`);
                        $(".usersMaster").remove()
                        $("#caja-lista-users").html("")
                    }

                    
                    else if((this).id == 10){
                        console.log("Usuario seleccionado Byron Fields")
                        $("#master").append(`
                        <img src="https://reqres.in/img/faces/10-image.jpg" class="user" alt="Fields">
                        <p class="userTx"> Usuario: B.Fields </p>`);
                        $(".usersMaster").remove()
                        $("#caja-lista-users").html("")
                    }    

                    else if((this).id == 11){
                        console.log("Usuario seleccionado George Edwards")
                        $("#master").append(`
                        <img src="https://reqres.in/img/faces/11-image.jpg" class="user" alt="Edwards">
                        <p class="userTx"> Usuario: G.Edwards </p>`);
                        $(".usersMaster").remove()
                        $("#caja-lista-users").html("")
                    }   

                    else if((this).id == 12){
                        console.log("Usuario seleccionado Rachel Howell")
                        $("#master").append(`
                        <img src="https://reqres.in/img/faces/11-image.jpg" class="user" alt="Howell">
                        <p class="userTx"> Usuario: R.Howell </p>`);
                        $(".usersMaster").remove()
                        $("#caja-lista-users").html("")
                    } 

                    


                });

            }

        });
    });

                
                    

    
})