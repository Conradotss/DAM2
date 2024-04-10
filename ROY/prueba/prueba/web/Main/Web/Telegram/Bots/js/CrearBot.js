/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    //Capturamos la ruta para envio de datos a servlet
    var pathArray = window.location.pathname.split('/');
    var urlServlet = "/" + pathArray[1] + "/CrearBot";
    //Validar el formulario
    validarFormulario("#frmNuevoBot", urlServlet);

    //boton de cancelar
    $("#btnCancelarBot").click(function (e) {
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
            telegram: {
                required: true,
                maxlength: 100
            }


        }, //////Fin de reglas///////////////////////////////////

        messages: {

            nombre: {
                required: "Debe introducir un nombre."
            },
            telegram: {
                required: "Debe introducir una ID de Telegram."
            }


        }, /////////Fin de msg////////////////////////////////

        submitHandler: function () {
            enviarDatosSubirArchivos(urlServlet, getDatosForm(), true);
        }

    });////////Fin Validate

}







function getDatosForm() {
    //capturamos los datos de los campos del formulario    
    var data = new FormData($("#frmNuevoBot")[0]);

    return data;
}