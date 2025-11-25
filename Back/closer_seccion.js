

document.getElementById("btn_closer").focus();


function closer(){
    window.location = "login.html";
    localStorage.clear();
    //localStorage.removeItem("usuario");//unicamente borra el item de usuario sin tocar algo mas.

}



//esta funcion lo que esta haciendo es asignando un nuevo evento al boton de login

// function openmodal(){

//     let entermodal= document.getElementById("btnlogin");

//     entermodal.addEventListener("click", function(){
//         modal.showModal();
//     });
// }