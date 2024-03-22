/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



$(function () {
    alert("Hola Main");
    var ruta = "/Main/js/";
    //Jquery
    //Menu
    loadScript(ruta + "jquery-1.10.2.js", function () {
        alert(ruta + "jquery-1.10.2.js");
    });
    loadScript(ruta + "jquery-ui-1.10.4.js", function () {
        alert(ruta + "jquery-ui-1.10.4.js");
    });

    //Alertas
    loadScript(ruta + "sweetalert2.js", function () {
        alert(ruta + "sweetalert2.js");
    });

    //Validaciones
    loadScript(ruta + "jquery.vadilate.js", function () {
        alert(ruta + "jquery.vadilate.js");
    });
    loadScript(ruta + "onLibJs/utilidades.js", function () {
        alert(ruta + "onLibJs/utilidades.js");
    });

    //Sesion
    loadScript("/Main/Web/login/Sesion/js/CerrarSesion.js", function () {
        alert("/Main/Web/login/Sesion/js/CerrarSesion.js");
    });

});

function loadScript(url, callback) {

    var script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) {  //IE
        script.onreadystatechange = function () {
            if (script.readyState === "loaded" ||
                    script.readyState === "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function () {
            callback();
        };
    }

//    alert(url);
    script.src = url;
//    document.write(objToString(script));
    document.getElementsByTagName("head")[0].appendChild(script);
}

function objToString(obj) {
    var str = '';
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            str += p + '::' + obj[p] + '\n';
        }
    }
    return str;
}