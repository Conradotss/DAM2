/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    //Capturamos la ruta para envio de datos a servlet
    var pathArray = window.location.pathname.split('/');
    var urlServlet = "/" + pathArray[1] + "/CrearRegistro";
    //Validar el formulario
    validarFormulario("#frmNuevoRegistro", urlServlet);

    //boton de cancelar
    $("#btnCancelarRegistro").click(function (e) {
        ventanaAtras(window, swal);
    });


});

function validarFormulario(nombreForm, urlServlet) {

    $(nombreForm).validate({

        rules: {

            ordenTrabajo: {
                required: true,
                maxlength: 100
            },
            datoProduccion: {
                required: true,
                maxlength: 100
            },
            tipoID: {
                required: true,
                maxlength: 100
            },
            origenID: {
                required: true,
                maxlength: 100
            },
            destinoID: {
                required: true,
                maxlength: 500
            }

        }, //////Fin de reglas///////////////////////////////////

        messages: {

            ordenTrabajo: {
                required: "Debe introducir una orden de trabajo."
            },
            datoProduccion: {
                required: "Debe introducir un dato de produccion."
            },
            tipoID: {
                required: "Debe introducir un tipo de registro."
            },
            origenID: {
                required: "Debe introducir una ubicacion de origen."
            },
            destinoID: {
                required: "Debe introducir una ubicacion de destino."
            }

        }, /////////Fin de msg////////////////////////////////

        submitHandler: function () {
            enviarDatosSubirArchivos(urlServlet, getDatosForm(), true);
        }

    });////////Fin Validate

}







function getDatosForm() {
    //capturamos los datos de los campos del formulario    
    var data = new FormData($("#frmNuevoRegistro")[0]);

    return data;
}