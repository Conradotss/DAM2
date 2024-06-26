/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



$(document).ready(function () {

    //Capturamos la ruta para envio de datos a servlet
    var pathArray = window.location.pathname.split('/');
    var urlServlet = "/" + pathArray[1] + "/ModificarTarea";

    validarFormulario("#frmModificarTarea", urlServlet);

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
                required: true,
                maxlength: 500
            },
            descripcion: {
                required: true,
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
            descripcion: {
                required: "Debe introducir una descripcion de Tarea."
            }

        }, /////////Fin de msg////////////////////////////////

        submitHandler: function () {
            enviarDatosSubirArchivos(urlServlet, getDatosForm(), false);
        }

    });////////Fin Validate

}






function getDatosForm() {
    //capturamos los datos de los campos del formulario    
    var data = new FormData($("#frmModificarTarea")[0]);

    return data;
}