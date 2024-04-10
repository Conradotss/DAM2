/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



/////////////////////Poner cabecera en tabla////////////////////////////////////
$(function () {
    //Capturamos la ruta para envio de datos a servlet
    var pathArray = window.location.pathname.split('/');
    var urlServlet = "/" + pathArray[1] + "/BuscarTipo";
    actualizarTabla();
    setTimeout(function () {
        refrescarDatosTabla(urlServlet, getDatosForm());
    }, 100);
});


function actualizarTabla() {
    cargarCabeceraTabla("tablaTareas");
    //
    //
    //Capturamos la ruta para envio de datos a servlet
    var pathArray = window.location.pathname.split('/');
    var urlServlet = "/" + pathArray[1] + "/EliminarTipo";
    var btnEliminar = "div #btnEliminarTipo";
    var btnModificar = "div #btnModificarTipo";
    //
    var idModificar = "#btnModificarTipo";
    var idEliminar = "#btnEliminarTipo";
    var nombreEliminar = "#nombreTipo";
    //
    var href = "ModificarTipo.jsp?tipo_id=";

    //Funcion para eliminar
    eliminarAdmin(urlServlet, btnEliminar, idEliminar, nombreEliminar);
    //Funcion para ir a modificar
    modificarAdmin(href, btnModificar, idModificar);

}

