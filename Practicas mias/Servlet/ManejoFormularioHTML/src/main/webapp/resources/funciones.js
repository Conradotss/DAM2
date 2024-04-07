function  validarForm(forma){
    var usuario = forma.usuario;
    if(usuario.value == "" || usuario.value == "Escribir usuario"){
        alert("Debe proporcionar un nombre de usuario");
        usuario.focus();
        usuario.select();
        return false;
    }
    
    var password = forma.password;

    if(password.value == "" || password.value.length < 3){
        alert("Debe proporcionar un password al menos de 3 caracteres");
        password.focus();
        password.select();
        return false;
    }
    
    var tecnologias = forma.tecnologia;
    var chechSeleccionado = false;
    
    for(var i = 0; i<tecnologias.length; i++){
        if(tecnologias[i].checked){
            chechSeleccionado=true;
        }
    }
    
    if(!chechSeleccionado){
        alert("Debe seleccionar una tecnologia");
        return false;
    }
    
    var generos = forma.genero;
    var radioSeleccionado = false;
    
    for (var i = 0; i < generos.length; i++) {
        if(generos[i].checked){
           radioSeleccionado = true; 
        }
    }
    
    if(!radioSeleccionado){
        alert("Debe seleccionar un genero");
        return false;
    }
    
    var trabajo = forma.trabajo;
    if(trabajo.value===""){
        alert("Debes selccionar un trabajo");
        return false;
    }
    
    alert("Formulario valida , enviado datos al servidor");
    return true;
}

