/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    //Capturamos la ruta para envio de datos a servlet
    var pathArray = window.location.pathname.split('/');
    var urlServlet = "/" + pathArray[1] + "/CrearTarea";
    //Validar el formulario
    validarFormulario("#frmNuevoTarea", urlServlet);

    //boton de cancelar
    $("#btnCancelarTarea").click(function (e) {
        ventanaAtras(window, swal);
    });
    

});

function validarFormulario(nombreForm, urlServlet) {

    $(nombreForm).validate({

        rules: {

            nombre: {
                required: true,
                maxlength: 100
            },
            
            tipo: {
                required: false,
                maxlength: 500
            },
            descripcion: {
                required: false,
                maxlength: 500
            }

        }, //////Fin de reglas///////////////////////////////////

        messages: {

            nombre: {
                required: "Debe introducir un nombre."
            },
            
            tipo: {
                required: "Debe introducir un tipo."
            },
            descripcion:{
                required: "Debe introducir una descripcion de Tarea."
            }

        }, /////////Fin de msg////////////////////////////////

        submitHandler: function () {
            enviarDatosSubirArchivos(urlServlet, getDatosForm(), true);
        }

    });////////Fin Validate

}






function getDatosForm() {
    //capturamos los datos de los campos del formulario    
    var data = new FormData($("#frmNuevoTarea")[0]);

    return data;
}