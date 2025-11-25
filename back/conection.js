
//linea de comando que enfoca el elemento de correo electronico
document.getElementById("user_correo").focus();

//

/**linea de comando que funciona en el momento en que la tecla enter es levantada.
 * Esta funcion es el paso del elemento email al elemento de pasword.
*/
document.getElementById("user_correo").addEventListener("keypress", enfocar_paswd);

function enfocar_paswd(event){

    if (event.keyCode == 13) {
        document.getElementById("password").focus();
    }

}


/**linea de comando que funciona en el momento en que la tecla enter es presionada.
 * Esta funcion es paso del elemento de pasword al btnLogin.
 * 
 * keypress me permite que solo funcione cuando la tecla es presionada asi no me salta el modal
 * en la cara.
 */
document.getElementById("password").addEventListener("keypress", enfocar_btnLogin);

function enfocar_btnLogin(event){

    if (event.keyCode == 13) {
        loguear();// ejecutara la funcion de logear en cuanto la tecla este presionada. 

    }

}

// -------------------------------------------------------------------------------------
//Funcion destinada a la comparativa de los usuarios y contraceñas. Con datos quemados. 
// function loguear(){
    
//     let data_usuarios = [["user@gmail.com", "#Somosdev"], ["prueba@gmail.com", "q1234"]];
    
//     /**Se introdujo un arreglo para facilitar la introduccion de datos quemados,
//      * para la validacion de otros usuarios solo debo agregar otos OR y las respectivas
//      * ubicaciones.
//      */
    
//     let usuario = document.getElementById("user_correo").value;
//     let contra = document.getElementById("password").value;
    
//     if ((usuario === data_usuarios[1][0])){
        
//         if ((contra === data_usuarios[1][1])){

//                 window.location="Page_aterrisage.html";
//                 localStorage.setItem( "usuario", usuario );
//         } else {
//             data_pwd_error();
//         } 

//     } else if ((usuario !== data_usuarios[1][0])) {

//         data_user_error();

        
//     } else {
//         data_pwd_error();
      
       
    
    
    
//     }
    
//     //almacena la informacion 

   
// }
// -------------------------------------------------------------------------------------


function data_pwd_error(){

    document.getElementById("mensajeError").textContent = "Su contraceña es incorrecta";
    document.getElementById("password").value = "";
    document.getElementById("password").focus();
    modal.showModal();
}



function data_user_error(){

    document.getElementById("mensajeError").textContent = "Su correo es incorrecta";
    document.getElementById("password").value = "";
    document.getElementById("user_correo").focus();
    modal.showModal();
}


function error_usuario(){

    document.getElementById("mensajeError").textContent = "Su correo o contraceña es incorrecta";
    document.getElementById("password").value = "";
    document.getElementById("user_correo").focus();
    modal.showModal();
}





function closemodal(){
    modal.close();



 
//esta funcion crea redundancia del mismo modo que asignandole un segundo evento al boton de cierre en el modal. 
    // let cancelButton= document.getElementById("cerrar_modal");

    // cancelButton.addEventListener("click", function () {
    // });

//esta funcion ya no es necesaria debido a que se guardara el localstorage.() unicamente si el id y pass son correctos.
    //localStorage.clear();

}

