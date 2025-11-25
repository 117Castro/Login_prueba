
async function loguear() {

    const usuario = document.getElementById("user_correo").value;
    const contra = document.getElementById("password").value;

    try {
        const response = await fetch("http://localhost:3000/api/loginusuario", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            usuario: usuario,
            contraceña: contra
        })
        });

        const data = await response.json();
        console.log(data);

        if (response.ok) {
        
        window.location = "Page_aterrisage.html";
        } else {
        // alert("Usuario o contraseña incorrectos");
        error_usuario();
            

        }
    } catch (error) {
        
         // esta etapa se puede mejorar colocando un modal
        // console.error("Error al intentar iniciar sesión:", error);
        // alert("Error de conexión con el servidor 44");
        document.getElementById("mensajeError").textContent = "No pudimos completar tu solicitud. Por favor, vuelve a intentarlo.";
        modal.showModal();
    }
}