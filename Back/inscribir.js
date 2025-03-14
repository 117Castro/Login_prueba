
document.getElementById("user_name").focus();

document.getElementById("user_name").addEventListener("keypress", edadUsuario);

function edadUsuario(event){
    if(event.keyCode == 13){
    document.getElementById("user_age").focus();
    }
}

document.getElementById("user_age").addEventListener("keypress", correoUsuario);

function correoUsuario (event){
    
    if (event.keyCode == 13) {
        document.getElementById("user_correo").focus();
        
    }
}

document.getElementById("user_correo").addEventListener("keypress", contraceñaUsuario);

function contraceñaUsuario (event){
    
    if (event.keyCode == 13) {
        document.getElementById("password").focus();
      
       
    }
}



function continuarLogin(){

    let usuario = document.getElementById("user_name").value;
    let edad = document.getElementById("user_age").value;
    let correo = document.getElementById("user_correo").value;
    let contraceña = document.getElementById("password").value; 
    
    if ( usuario == ""){
        document.getElementById("mensajeError").textContent = "Debe colocar un nombre de usuario";
        modal.showModal();

        
    } else if (correo == "" || contraceña == "") {
        
        document.getElementById("mensajeError").textContent = "Debe colocar un correo y contraceña";
        document.getElementById("password").value = "";
        modal.showModal();
        

    }else{
        window.location="login.html";
    }
    
}




function retrocederLogin(){
    window.location="login.html";
    



}



function closemodal(){
    modal.close();

}