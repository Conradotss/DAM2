/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



/////////////////////Poner cabecera en tabla////////////////////////////////////
$(function () {
    //Capturamos la ruta para envio de datos a servlet
    var pathArray = window.location.pathname.split('/');
    var urlServlet = "/" + pathArray[1] + "/EncontrarConsumo";
    actualizarTabla();
    setTimeout(function () {
        refrescarDatosTabla(urlServlet, getDatosForm());
    }, 100);
});


function actualizarTabla() {
    cargarCabeceraTabla("tablaMaterial");

    var pathArray = window.location.pathname.split('/');
    var btnSeleccion = "div #btnSeleccionarMaterial";


    var idSeleccion = "#btnSeleccionarMaterial";

    var href2 = "SeleccionarMaterial.jsp?consumo_id=";

    //Funcion para agregar o quitar seleccion
    modificarAdmin2(href2, btnSeleccion, idSeleccion);

}



