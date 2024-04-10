/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    //Capturamos la ruta para envio de datos a servlet
    var pathArray = window.location.pathname.split('/');
    var urlServlet = "/" + pathArray[1] + "/Login";
    //Validar el formulario
    validarFormulario("#frmNuevoLogin", urlServlet);

    //boton de cancelar
    $("#btnCancelarLogin").click(function (e) {
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
            email: {
                required: true,
                maxlength: 100
            },
            password: {
                required: true,
                maxlength: 100
            }



        }, //////Fin de reglas///////////////////////////////////

        messages: {

            nombre: {
                required: "Debe introducir un nombre."
            },
            email: {
                required: "Debe introducir un email."
            },
            password: {
                required: "Debe introducir una contraseña."
            }


        }, /////////Fin de msg////////////////////////////////

        submitHandler: function () {
           enviarDatosSubirArchivos(urlServlet, getDatosForm(), true);
//            $(nombreForm).submit();
        }

    });////////Fin Validate

}


function getDatosForm() {
    //capturamos los datos de los campos del formulario    
    var data = new FormData($("#frmNuevoLogin")[0]);

    return data;
}


