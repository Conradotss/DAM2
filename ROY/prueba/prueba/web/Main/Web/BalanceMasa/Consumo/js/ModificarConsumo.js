/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



$(document).ready(function () {

    //Capturamos la ruta para envio de datos a servlet
    var pathArray = window.location.pathname.split('/');
    var urlServlet = "/" + pathArray[1] + "/ModificarConsumo";

    validarFormulario("#frmModificarConsumo", urlServlet);

    //boton de cancelar
    $("#btnCancelarConsumo").click(function (e) {
        ventanaAtras(window, swal);
    });


});

function validarFormulario(nombreForm, urlServlet) {

    $(nombreForm).validate({

        rules: {

            cantidad: {
                required: true,
                maxlength: 100
            },
            lot: {
                required: true,
                maxlength: 100
            },
            bm_material: {
                required: true,
                maxlength: 100
            },
            orden: {
                required: true,
                maxlength: 100
            }


        }, //////Fin de reglas///////////////////////////////////

        messages: {

            cantidad: {
                required: "Debe introducir una cantidad."
            },
            lot: {
                required: "Debe introducir un lot."
            },
            bm_material: {
                required: "Debe introducir un material."
            },
            orden: {
                required: "Debe introducir una orden."
            }


        }, /////////Fin de msg////////////////////////////////

        submitHandler: function () {
            enviarDatosSubirArchivos(urlServlet, getDatosForm(), true);
        }

    });////////Fin Validate

}






function getDatosForm() {
    //capturamos los datos de los campos del formulario    
    var data = new FormData($("#frmModificarConsumo")[0]);

    return data;
}