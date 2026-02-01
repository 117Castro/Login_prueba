

document.getElementById("btn_closer").focus();


function closer(){
    window.location = "login.html";
    localStorage.clear();
    //localStorage.removeItem("usuario");//unicamente borra el item de usuario sin tocar algo mas.

}


function accion_btn_home(){


    const botones = document.querySelectorAll("button");

    botones.forEach(boton =>{
        boton.addEventListener("click", (event)=>{
            switch(event.target.id){
                case "btn_inventario":
                    window.location = "inventario.html";
                    break;
                case "btn_Pedido":
                    window.location = "pedidos.html";
                    break;
                case "btn_cliente":
                    window.location = "";
                    break;
                case "btn_usuario":
                    window.location = "";
                    break;
                    
                // default: alert("no funciono");
                    
            }
        });
    });
};

accion_btn_home();


















//esta funcion lo que esta haciendo es asignando un nuevo evento al boton de login

// function openmodal(){

//     let entermodal= document.getElementById("btnlogin");

//     entermodal.addEventListener("click", function(){
//         modal.showModal();
//     });
// }