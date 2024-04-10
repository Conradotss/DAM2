/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



/////////////////////Poner cabecera en tabla////////////////////////////////////
$(function () {
    //Capturamos la ruta para envio de datos a servlet
    var pathArray = window.location.pathname.split('/');
    var urlServlet = "/" + pathArray[1] + "/BuscarConsumo";
    actualizarTabla();
    setTimeout(function () {
        refrescarDatosTabla(urlServlet, getDatosForm());
    }, 100);
});


function actualizarTabla() {
    cargarCabeceraTabla("tablaConsumo");
    //
    //
    //Capturamos la ruta para envio de datos a servlet
    var pathArray = window.location.pathname.split('/');
    var urlServlet = "/" + pathArray[1] + "/EliminarConsumo";
    var btnEliminar = "div #btnEliminarConsumo";
    var btnModificar = "div #btnModificarConsumo";
    var btnSeleccion = "div #btnSeleccionarConsumo";


    //
    var idModificar = "#btnModificarConsumo";
    var idSeleccion = "#btnSeleccionarConsumo";

    var idEliminar = "#btnEliminarConsumo";
    var nombreEliminar = "#nombreConsumo";
    //
    var href = "ModificarConsumo.jsp?consumo_id=";
    var href2 = "SeleccionarConsumo.jsp?consumo_id=";


    //Funcion para eliminar
    eliminarAdmin(urlServlet, btnEliminar, idEliminar, nombreEliminar);
    //Funcion para ir a modificar
    modificarAdmin(href, btnModificar, idModificar);

    //Funcion para agregar o quitar seleccion
    modificarAdmin2(href2, btnSeleccion, idSeleccion);

}

