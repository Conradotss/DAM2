/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



/////////////////////Poner cabecera en tabla////////////////////////////////////
$(function () {
    //Capturamos la ruta para envio de datos a servlet
    var pathArray = window.location.pathname.split('/');
    var urlServlet = "/" + pathArray[1] + "/Encontrar";
    actualizarTabla();
    setTimeout(function () {
        refrescarDatosTabla(urlServlet, getDatosForm());
    }, 100);
});


function actualizarTabla() {
    cargarCabeceraTabla("tablaConsumo");

    var pathArray = window.location.pathname.split('/');
    var btnSeleccion = "div #btnSeleccionarConsumo";


    var idSeleccion = "#btnSeleccionarConsumo";

    var href2 = "SeleccionarConsumo.jsp?consumo_id=";

    //Funcion para agregar o quitar seleccion
    modificarAdmin2(href2, btnSeleccion, idSeleccion);

}



