/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



$(document).ready(function () {
    //Capturamos la ruta para envio de datos a servlet
    var pathArray = window.location.pathname.split('/');
    var urlServlet = "/" + pathArray[1] + "/BuscarMaterial";
////////////////////////Buscar////////////////////////////////////////////
    validarFormulario("#frmBuscarMaterial", urlServlet);
    //boton de crear
    $("#buttonCrearMaterial").click(function (e) {
        e.preventDefault();
        window.location.href = "CrearMaterial.jsp";
    });
    //

});

function validarFormulario(nombreForm, urlServlet) {

    $(nombreForm).validate({

        rules: {
            id: {
                digits: true,
                range: [0, 99999999],
                maxlength: 8
            },
            referencia: {
                maxlength: 45
            },

            nombre: {
                maxlength: 500
            }

        }, //////Fin de reglas///////////////////////////////////

        messages: {

            id: {
                required: "Debe introducir el id de su Material."
            },
            referencia: {
                required: "Debe introducir el nombre de su Material."
            },
            nombre: {
                required: "Debe introducir una descripción de Material."
            }

        }, /////////Fin de msg////////////////////////////////


        submitHandler: function () {
            setTimeout(function () {
                refrescarDatosTabla(urlServlet, getDatosForm());
            }, 100);
        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {
            //window.location.reload(true);
        }
    }); ////////Fin Validate

}



function getDatosForm() {

    //capturamos los datos de los campos del formulario       
    var id = $("#id").val();
    var referencia = $("#referencia").val();
    var nombre = $("#nombre").val();

    //Datos
    var data = {
        id: id,
        referencia: referencia,
        nombre: nombre

    };

    return data;
}