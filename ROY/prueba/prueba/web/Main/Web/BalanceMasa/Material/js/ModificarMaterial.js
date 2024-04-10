/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



$(document).ready(function () {

    //Capturamos la ruta para envio de datos a servlet
    var pathArray = window.location.pathname.split('/');
    var urlServlet = "/" + pathArray[1] + "/ModificarMaterial";

    validarFormulario("#frmModificarMaterial", urlServlet);

    //boton de cancelar
    $("#btnCancelarMaterial").click(function (e) {
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
            referencia: {
                required: true,
                maxlength: 100
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
            referencia: {
                required: "Debe introducir una referencia."
            },
            descripcion: {
                required: "Debe introducir una descripcion de material."
            }

        }, /////////Fin de msg////////////////////////////////

        submitHandler: function () {
            enviarDatosSubirArchivos(urlServlet, getDatosForm(), true);
        }

    });////////Fin Validate

}







function getDatosForm() {
    //capturamos los datos de los campos del formulario    
    var data = new FormData($("#frmModificarMaterial")[0]);

    return data;
}