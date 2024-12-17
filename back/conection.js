
function loguear(){

    let usuario = document.getElementById("user_correo").value;
    let contra = document.getElementById("password").value;

    if (usuario=== "user@gmail.com" && contra === "#Somosdev"){

        window.location="Page_aterrisage.html";
    } else {
        //alert("Usuaro o contraseña incorrecta");
        openmodal();
    }

    //almacena la informacion 
    localStorage.setItem( "usuario", usuario );

   
}



function closer(){
    window.location="login.html";
    localStorage.clear();
}



function openmodal(){

    let entermodal= document.getElementById("btnlogin");

    entermodal.addEventListener("click", function(){
        modal.showModal();
    })
}

function closemodal(){
    let cancelButton= document.getElementById("cerrar_modal");

    cancelButton.addEventListener("click", function () {
      modal.close();
    });
}











