/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function getDatosTree(urlServlet, data, div) {
    //////////////////////Ajax//////////////////////////
    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,
        dataType: "json",          
        success: function (respuesta) {

            try {

                $(div).jstree({
                    'core': {
                        'data': respuesta
                    }
                });

            } catch (e) {
                //mesageDialog
                swal({
                    title: "Error",
                    text: "No se ha podido crear el árbol",
                    type: "error"
                });
//                alert("error");
            }
        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {
            //window.location.reload(true);
        }
    });
    
    
}