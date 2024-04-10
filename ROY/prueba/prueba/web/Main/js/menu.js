/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
//Capturamos la ruta para envio de datos a servlet
    var pathArray = window.location.pathname.split('/');
    var urlInicio = "/" + pathArray[1] + "/";
    var urlNosotros = "/" + pathArray[1] + "/Main/Web/Pages/Nosotros/Frame/Nosotros.jsp";
    var urlServicios = "/" + pathArray[1] + "/Main/Web/Pages/Servicios/Frame/Servicios.jsp";
    var urlMarcas = "/" + pathArray[1] + "/Main/Web/Pages/Marcas/Frame/Marcas.jsp";
    var urlEmpleo = "/" + pathArray[1] + "/Main/Web/Pages/Empleos/Frame/Empleos.jsp";
    var urlContacto = "/" + pathArray[1] + "/Main/Web/Pages/Contacto/Frame/Contacto.jsp";
    var urlDescargas = "/" + pathArray[1] + "/Main/Web/Pages/Descargas/Frame/Descargas.jsp";


    var url = window.location.pathname;

//    alert(url + " /// " + urlInicio + " // " + urlNosotros);

    //Si estamos en urlInicio
    if (url === urlInicio) {
        $("#menuInicio").addClass("current");
        $("#menuNosotros").removeClass("current");
        $("#menuServicios").removeClass("current");
        $("#menuMarcas").removeClass("current");
        $("#menuEmpleos").removeClass("current");
        $("#menuContacto").removeClass("current");
        $("#menuDescargas").removeClass("current");
    } 
    //Si estamos en urlNosotros
    else if (url === urlNosotros) {
        $("#menuInicio").removeClass("current");
        $("#menuNosotros").addClass("current");
        $("#menuServicios").removeClass("current");
        $("#menuMarcas").removeClass("current");
        $("#menuEmpleos").removeClass("current");
        $("#menuContacto").removeClass("current");
        $("#menuDescargas").removeClass("current");
    }
    //Si estamos en urlServicios
    else if (url === urlServicios) {
        $("#menuInicio").removeClass("current");
        $("#menuNosotros").removeClass("current");
        $("#menuServicios").addClass("current");
        $("#menuMarcas").removeClass("current");
        $("#menuEmpleos").removeClass("current");
        $("#menuContacto").removeClass("current");
        $("#menuDescargas").removeClass("current");
    }
    //Si estamos en urlMarcas
    else if (url === urlMarcas) {
        $("#menuInicio").removeClass("current");
        $("#menuNosotros").removeClass("current");
        $("#menuServicios").removeClass("current");
        $("#menuMarcas").addClass("current");
        $("#menuEmpleos").removeClass("current");
        $("#menuContacto").removeClass("current");
        $("#menuDescargas").removeClass("current");
    }
    //Si estamos en urlEmpleo
    else if (url === urlEmpleo) {
        $("#menuInicio").removeClass("current");
        $("#menuNosotros").removeClass("current");
        $("#menuServicios").removeClass("current");
        $("#menuMarcas").removeClass("current");
        $("#menuEmpleos").addClass("current");
        $("#menuContacto").removeClass("current");
        $("#menuDescargas").removeClass("current");
    }
    //Si estamos en urlContacto
    else if (url === urlContacto) {
        $("#menuInicio").removeClass("current");
        $("#menuNosotros").removeClass("current");
        $("#menuServicios").removeClass("current");
        $("#menuMarcas").removeClass("current");
        $("#menuEmpleos").removeClass("current");
        $("#menuContacto").addClass("current");
        $("#menuDescargas").removeClass("current");
    }
    //Si estamos en urlDescargas
    else if (url === urlDescargas) {
        $("#menuInicio").removeClass("current");
        $("#menuNosotros").removeClass("current");
        $("#menuServicios").removeClass("current");
        $("#menuMarcas").removeClass("current");
        $("#menuEmpleos").removeClass("current");
        $("#menuContacto").removeClass("current");
        $("#menuDescargas").addClass("current");
    }


});