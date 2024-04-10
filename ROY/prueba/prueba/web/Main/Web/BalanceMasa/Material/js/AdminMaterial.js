/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



/////////////////////Poner cabecera en tabla////////////////////////////////////
$(function () {
    //Capturamos la ruta para envio de datos a servlet
    var pathArray = window.location.pathname.split('/');
    var urlServlet = "/" + pathArray[1] + "/BuscarMaterial";
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
    var urlServlet = "/" + pathArray[1] + "/EliminarMaterial";
    var btnEliminar = "div #btnEliminarMaterial";
    var btnModificar = "div #btnModificarMaterial";
        var btnSeleccion = "div #btnSeleccionarMaterial";

    //
    var idModificar = "#btnModificarMaterial";
    var idEliminar = "#btnEliminarMaterial";
        var idSeleccion = "#btnSeleccionarMaterial";

        var idEliminar = "#btnEliminarMaterial";
    var nombreEliminar = "#nombreMaterial";
    //
    var href = "ModificarMaterial.jsp?material_id=";
    var href2 = "SeleccionarMaterial.jsp?material_id=";

    //Funcion para eliminar
    eliminarAdmin(urlServlet, btnEliminar, idEliminar, nombreEliminar);
    //Funcion para ir a modificar
    modificarAdmin(href, btnModificar, idModificar);
    
    //Funcion para agregar o quitar seleccion
    modificarAdmin2(href2, btnSeleccion, idSeleccion);

}

