
//linea de comando que enfoca el elemento de correo electronico
document.getElementById("user_correo").focus();
//

/**linea de comando que funciona en el momento en que la tecla enter es levantada.
 * Esta funcion es el paso del elemento email al elemento de pasword.
*/
document.getElementById("user_correo").addEventListener("keyup", enfocar_paswd);

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



//Funcion destinada a la comparativa de los usuarios y contraceñas.
function loguear(){
    
    /**Se introdujo un arreglo para facilitar la introduccion de datos quemados,
     * para la validacion de otros usuarios solo debo agregar otos OR y las respectivas
     * ubicaciones.
     */
    let data_usuarios = [["user@gmail.com", "#Somosdev"], ["prueba@gmail.com", "q1234"]];
    
    let usuario = document.getElementById("user_correo").value;
    let contra = document.getElementById("password").value;
    
    if ((usuario=== data_usuarios[0][0] && contra === data_usuarios[0][1])||
        (usuario=== data_usuarios[1][0] && contra === data_usuarios[1][1])){
        window.location="Page_aterrisage.html";
        localStorage.setItem( "usuario", usuario );
    } else {
        document.getElementById("btnlogin").focus();/** al agregar esta linea le pido 
        que enfoque el boton si la comparacion no es valida y que despues muestre el modal.*/
        modal.showModal();

       // openmodal();  esta funcion crea redundancia en los eventos asignados al boton de login.
       //colocamos directamente la funcion para evitar el doble click en 
    
    
    
    }
    
    //almacena la informacion 

   
}



function closer(){
    window.location="login.html";
    localStorage.clear();
}



//esta funcion lo que esta haciendo es asignando un nuevo evento al boton de login

// function openmodal(){

//     let entermodal= document.getElementById("btnlogin");

//     entermodal.addEventListener("click", function(){
//         modal.showModal();
//     });
// }




function closemodal(){
    modal.close();

//esta funcion crea redundancia del mismo modo que asignandole un segundo evento al boton de cierre en el modal. 
    // let cancelButton= document.getElementById("cerrar_modal");

    // cancelButton.addEventListener("click", function () {
    // });

//esta funcion ya no es necesaria debido a que se guardara el localstorage.() unicamente si el id y pass son correctos.
    //localStorage.clear();

}

