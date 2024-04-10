/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



/////////////////////Poner cabecera en tabla////////////////////////////////////
$(function () {
    //Capturamos la ruta para envio de datos a servlet
    var pathArray = window.location.pathname.split('/');
    var urlServlet = "/" + pathArray[1] + "/BuscarUbicacion";
    actualizarTabla();
    setTimeout(function () {
        refrescarDatosTabla(urlServlet, getDatosForm());
    }, 100);
});


function actualizarTabla() {
    cargarCabeceraTabla("tablaUbicacion");
    //
    //
    //Capturamos la ruta para envio de datos a servlet
    var pathArray = window.location.pathname.split('/');
    var urlServlet = "/" + pathArray[1] + "/EliminarUbicacion";
    var btnEliminar = "div #btnEliminarUbicacion";
    var btnModificar = "div #btnModificarUbicacion";
    //
    var idModificar = "#btnModificarUbicacion";
    var idEliminar = "#btnEliminarUbicacion";
    var nombreEliminar = "#nombreUbicacion";
    //
    var href = "ModificarUbicacion.jsp?ubicacion_id=";

    //Funcion para eliminar
    eliminarAdmin(urlServlet, btnEliminar, idEliminar, nombreEliminar);
    //Funcion para ir a modificar
    modificarAdmin(href, btnModificar, idModificar);

}

