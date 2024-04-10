/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



/////////////////////Poner cabecera en tabla////////////////////////////////////
$(function () {
    //Capturamos la ruta para envio de datos a servlet
    var pathArray = window.location.pathname.split('/');
    var urlServlet = "/" + pathArray[1] + "/BuscarRegistro";
    actualizarTabla();
    setTimeout(function () {
        refrescarDatosTabla(urlServlet, getDatosForm());
    }, 100);
});


function actualizarTabla() {
    cargarCabeceraTabla("tablaRegistro");
    //
    //
    //Capturamos la ruta para envio de datos a servlet
    var pathArray = window.location.pathname.split('/');
    var urlServlet = "/" + pathArray[1] + "/EliminarRegistro";
    var btnEliminar = "div #btnEliminarRegistro";
    var btnModificar = "div #btnModificarRegistro";
    //
    var idModificar = "#btnModificarRegistro";
    var idEliminar = "#btnEliminarRegistro";
    var nombreEliminar = "#nombreRegistro";
    //
    var href = "ModificarRegistro.jsp?registro_id=";

    //Funcion para eliminar
    eliminarAdmin(urlServlet, btnEliminar, idEliminar, nombreEliminar);
    //Funcion para ir a modificar
    modificarAdmin(href, btnModificar, idModificar);

}

