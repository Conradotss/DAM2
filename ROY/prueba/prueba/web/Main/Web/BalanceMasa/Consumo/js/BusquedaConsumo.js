/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



$(document).ready(function () {
//Capturamos la ruta para envio de datos a servlet
    var pathArray = window.location.pathname.split('/');
    var urlServlet = "/" + pathArray[1] + "/BuscarConsumo";
////////////////////////Buscar////////////////////////////////////////////
    validarFormulario("#frmBuscarConsumo", urlServlet);
    //boton de crear
    $("#buttonCrearConsumo").click(function (e) {
        e.preventDefault();
        window.location.href = "CrearConsumo.jsp";
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
            nombre: {
                maxlength: 45
            },
            descripcion: {
                maxlength: 500
            }

        }, //////Fin de reglas///////////////////////////////////

        messages: {

            id: {
                required: "Debe introducir el id de su Consumo."
            },
            nombre: {
                required: "Debe introducir el nombre de su Consumo."
            },
            descripcion: {
                required: "Debe introducir una descripción de Consumo."
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
    var cantidad = $("#cantidad").val();
    var lot = $("#lot").val();
    var material = $("#material").val();
    var orden = $("#orden").val();
    //Datos
    var data = {
        id: id,
        cantidad: cantidad,
        lot: lot,
        material: material,
        orden: orden

    };
    return data;
}