
async function inscribir() {

    const nombre = document.getElementById("user_name").value;
    const nombre_usuario = document.getElementById("user_alias").value.toLowerCase();
    const edad = document.getElementById("user_age").value;
    const correo = document.getElementById("user_correo").value.toLowerCase();
    const contraceña = document.getElementById("password").value;


    if ( nombre == "" ){
        document.getElementById("mensajeError").textContent = "Debe colocar un nombre";
        modal.showModal();
    
        return;
        
     } else if (nombre_usuario == "") {
        
        document.getElementById("mensajeError").textContent = "Debe colocar un nombre de usuario ";
        document.getElementById("password").value = "";
        modal.showModal();
        return; 
     } else if (edad <= 17 || edad == "") {
        
        document.getElementById("mensajeError").textContent = "Debe ser mayor de edad ";
        document.getElementById("password").value = "";
        modal.showModal();
        return; 
    } else if (correo == "" || contraceña == "" || !validaEmail(correo)) {
        
        document.getElementById("mensajeError").textContent = "Debe colocar un correo y contraceña";
        document.getElementById("password").value = "";
        modal.showModal();
        return; 
    }
        
    try {
        const response = await fetch("http://localhost:3000/api/inscribirUsuario", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre: nombre,
                nombre_usuario: nombre_usuario, 
                contraceña: contraceña,
                edad: edad,
                correo: correo
            })

        });

        const data = await response.json();
        console.log(data);

        if (response.ok){
            window.location = "login.html";
            
        } else {
            document.getElementById("mensajeError").textContent = data.mensajeDeServidor || "Error en el registro(front)";
            modal.showModal();
        }



    } catch (error) {
        
        document.getElementById("mensajeError").textContent = "No pudimos completar tu solicitud. Por favor, vuelve a intentarlo.";
        modal.showModal();
    }
};
