
function loguear(){

    let usuario = document.getElementById("user_correo").value;
    let contra = document.getElementById("password").value;

    if (usuario=== "user@gmail.com" && contra === "#Somosdev"){

        window.location="Page_aterrisage.html";
    } else {
        alert("Usuaro o contraseña incorrecta");
    }


}

function closer(){
    window.location="login.html";
    localStorage.clear();
}