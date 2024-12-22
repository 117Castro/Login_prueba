
function loguear(){

    
    
    let usuario = document.getElementById("user_correo").value;
    let contra = document.getElementById("password").value;
    
    if (usuario=== "user@gmail.com" && contra === "#Somosdev"){
        window.location="Page_aterrisage.html";
        localStorage.setItem( "usuario", usuario );
    } else {
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

