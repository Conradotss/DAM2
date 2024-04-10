/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function () {


    //Creamos la etiqueta para todas las paginas
    var html = '<span class="ir-arriba" title="Subir"></span>';
    $('body').append(html);

    //Animamos para subir
    $('.ir-arriba').click(function () {
        $('body, html').animate({
            scrollTop: '0px'
        }, 500);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.ir-arriba').slideDown(500);
        } else {
            $('.ir-arriba').slideUp(500);
        }
    });


//    if ("loading" in HTMLImageElement.prototype) {
//    // Si el navegador soporta lazy-load, tomamos todas las imágenes que tienen la clase
//    // `lazyload`, obtenemos el valor de su atributo `data-src` y lo inyectamos en el `src`.
//    const images = document.querySelectorAll("img.lazyload");
//    images.forEach((img) => {
//      img.src = img.dataset.src;
//    });
//  } else {
//    // Importamos dinámicamente la libreria `lazysizes`
//    let script = document.createElement("script");
//    script.async = true;
//    script.src =
//      "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.0/lazysizes.min.js";
//    document.body.appendChild(script);
//  }



//    $(window).on('mouseover', (function () {
//        window.onbeforeunload = null;
//    }));
//    $(window).on('mouseout', (function () {
//        window.onbeforeunload = ConfirmLeave;
//    }));
//    function ConfirmLeave() {
//        return "";
//    }
//    var prevKey = "";
//    $(document).keydown(function (e) {
//        if (e.key === "F5") {
//            window.onbeforeunload = ConfirmLeave;
//        } else if (e.key.toUpperCase() === "W" && prevKey === "CONTROL") {
//            window.onbeforeunload = ConfirmLeave;
//        } else if (e.key.toUpperCase() === "R" && prevKey === "CONTROL") {
//            window.onbeforeunload = ConfirmLeave;
//        } else if (e.key.toUpperCase() === "F4" && (prevKey === "ALT" || prevKey === "CONTROL")) {
//            window.onbeforeunload = ConfirmLeave;
//        }
//        prevKey = e.key.toUpperCase();
//    });

});
function aleatorio(inferior, superior) {
    let numPosibilidades = superior - inferior;
    let aleat = Math.random() * numPosibilidades;
    aleat = Math.floor(aleat);
    return parseInt(inferior) + aleat;
}

function colorAleatorio() {
    let hexadecimal = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F");
    let color_aleatorio = "#";
    for (i = 0; i < 6; i++) {
        let posarray = aleatorio(0, hexadecimal.length);
        color_aleatorio += hexadecimal[posarray];
    }
    return color_aleatorio;
}

function colorDefinido(indice) {
    var colors = [
        "#63b598", "#ce7d78", "#ea9e70", "#a48a9e", "#c6e1e8", "#648177", "#0d5ac1",
        "#f205e6", "#1c0365", "#14a9ad", "#4ca2f9", "#a4e43f", "#d298e2", "#6119d0",
        "#d2737d", "#c0a43c", "#f2510e", "#651be6", "#79806e", "#61da5e", "#cd2f00",
        "#9348af", "#01ac53", "#c5a4fb", "#996635", "#b11573", "#4bb473", "#75d89e",
        "#2f3f94", "#2f7b99", "#da967d", "#34891f", "#b0d87b", "#ca4751", "#7e50a8",
        "#c4d647", "#e0eeb8", "#11dec1", "#289812", "#566ca0", "#ffdbe1", "#2f1179",
        "#935b6d", "#916988", "#513d98", "#aead3a", "#9e6d71", "#4b5bdc", "#0cd36d",
        "#250662", "#cb5bea", "#228916", "#ac3e1b", "#df514a", "#539397", "#880977",
        "#f697c1", "#ba96ce", "#679c9d", "#c6c42c", "#5d2c52", "#48b41b", "#e1cf3b",
        "#5be4f0", "#57c4d8", "#a4d17a", "#225b8", "#be608b", "#96b00c", "#088baf",
        "#f158bf", "#e145ba", "#ee91e3", "#05d371", "#5426e0", "#4834d0", "#802234",
        "#6749e8", "#0971f0", "#8fb413", "#b2b4f0", "#c3c89d", "#c9a941", "#41d158",
        "#fb21a3", "#51aed9", "#5bb32d", "#807fb", "#21538e", "#89d534", "#d36647",
        "#7fb411", "#0023b8", "#3b8c2a", "#986b53", "#f50422", "#983f7a", "#ea24a3",
        "#79352c", "#521250", "#c79ed2", "#d6dd92", "#e33e52", "#b2be57", "#fa06ec",
        "#1bb699", "#6b2e5f", "#64820f", "#1c271", "#21538e", "#89d534", "#d36647",
        "#7fb411", "#0023b8", "#3b8c2a", "#986b53", "#f50422", "#983f7a", "#ea24a3",
        "#79352c", "#521250", "#c79ed2", "#d6dd92", "#e33e52", "#b2be57", "#fa06ec",
        "#1bb699", "#6b2e5f", "#64820f", "#1c271", "#9cb64a", "#996c48", "#9ab9b7",
        "#06e052", "#e3a481", "#0eb621", "#fc458e", "#b2db15", "#aa226d", "#792ed8",
        "#73872a", "#520d3a", "#cefcb8", "#a5b3d9", "#7d1d85", "#c4fd57", "#f1ae16",
        "#8fe22a", "#ef6e3c", "#243eeb", "#1dc18", "#dd93fd", "#3f8473", "#e7dbce",
        "#421f79", "#7a3d93", "#635f6d", "#93f2d7", "#9b5c2a", "#15b9ee", "#0f5997",
        "#409188", "#911e20", "#1350ce", "#10e5b1", "#fff4d7", "#cb2582", "#ce00be",
        "#32d5d6", "#17232", "#608572", "#c79bc2", "#00f87c", "#77772a", "#6995ba",
        "#fc6b57", "#f07815", "#8fd883", "#060e27", "#96e591", "#21d52e", "#d00043",
        "#b47162", "#1ec227", "#4f0f6f", "#1d1d58", "#947002", "#bde052", "#e08c56",
        "#28fcfd", "#bb09b", "#36486a", "#d02e29", "#1ae6db", "#3e464c", "#a84a8f",
        "#911e7e", "#3f16d9", "#0f525f", "#ac7c0a", "#b4c086", "#c9d730", "#30cc49",
        "#3d6751", "#fb4c03", "#640fc1", "#62c03e", "#d3493a", "#88aa0b", "#406df9",
        "#615af0", "#4be47", "#2a3434", "#4a543f", "#79bca0", "#a8b8d4", "#00efd4",
        "#7ad236", "#7260d8", "#1deaa7", "#06f43a", "#823c59", "#e3d94c", "#dc1c06",
        "#f53b2a", "#b46238", "#2dfff6", "#a82b89", "#1a8011", "#436a9f", "#1a806a",
        "#4cf09d", "#c188a2", "#67eb4b", "#b308d3", "#fc7e41", "#af3101", "#ff065",
        "#71b1f4", "#a2f8a5", "#e23dd0", "#d3486d", "#00f7f9", "#474893", "#3cec35",
        "#1c65cb", "#5d1d0c", "#2d7d2a", "#ff3420", "#5cdd87", "#a259a4", "#e4ac44",
        "#1bede6", "#8798a4", "#d7790f", "#b2c24f", "#de73c2", "#d70a9c", "#25b67",
        "#88e9b8", "#c2b0e2", "#86e98f", "#ae90e2", "#1a806b", "#436a9e", "#0ec0ff",
        "#f812b3", "#b17fc9", "#8d6c2f", "#d3277a", "#2ca1ae", "#9685eb", "#8a96c6",
        "#dba2e6", "#76fc1b", "#608fa4", "#20f6ba", "#07d7f6", "#dce77a", "#77ecca"];
    if (indice > colors.length - 1) {
        return colorAleatorio();
    } else {
        return colors[indice];
    }
}

var hover = false;
var contador = 2;
var intervalo;
function estaVisible() {


    intervalo = setInterval(function () {

        if (!hover) {
            // console.log(contador);
            contador--;
            if (contador < 1) {
                $(".desplegable").fadeTo("slow", 0);
                setTimeout(function () {
                    $(".desplegable").remove();
                }, 500);
                clearInterval(intervalo);
            }
        }
    }, 1000);
}

function menuON(elemento) {
    clearInterval(intervalo);
    estaVisible();
    // console.log($(".desplegable"));
//    if ($(".desplegable").length !== 0) {// si quieres hacer el efecto desvanecedor cuando cambias de boton
//        
//    }
    $(".desplegable").remove();
    hover = true;
    contador = 2;
    // console.log("reinicio: "+contador);
    let classname = $(elemento).attr("class");
    var div = document.createElement("div");
    $(div).css("animation", "taadaa 2s");


    $(".menuAccesosPrincipales").after(div);

    //$(div).fadeIn(1000);

    $(div).css("height", "32px");
    $(div).css("position", "absolute");
    $(div).attr("class", "desplegable");
    $(".desplegable").hover(function () {
        hover = true;
        //console.log(true);
        contador = 2;
    }, function () {
        //console.log(false);
        hover = false;
    });
    $(".desplegable").css("height", "42px");
    $(".desplegable").css("background-color", "white");
    $(".desplegable").css("z-index", "1000");
    let divContenedor = $("#" + classname);
    let contenido = $(divContenedor).html();
    $(div).html(replaceAll(contenido, "display: none;", "display: inline-block;"));
    $(div).children().each(function () {

        $(this).css("background-size", "32px 32px");
    });

    var position = elemento.getBoundingClientRect();
    var x = position.left - 5;
    var y = position.top + 35;

    $(div).css("position", "absolute");

    $(div).css("top", y);
    $(div).css("left", x);

}

function menuOFF(elemento) {
    hover = false;
    //$(".desplegable").mouseleave(estaVisible());
//$(".desplegable").fadeTo("slow", 0);
}

function valideKey(evt) {

    // code is the decimal ASCII representation of the pressed key.
    var code = (evt.which) ? evt.which : evt.keyCode;

    if (code == 8) { // backspace.
        return true;
    } else if (code >= 48 && code <= 57) { // is a number.
        return true;
    } else { // other keys.
        return false;
    }
}

function getHoraMinSec() {
    var date = new Date();

    var h, m, s;

    if (date.getHours().toString().length === 1) {
        h = "0" + date.getHours();
    } else {
        h = date.getHours();
    }

    if (date.getMinutes().toString().length === 1) {
        m = "0" + date.getMinutes();
    } else {
        m = date.getMinutes();
    }

    if (date.getSeconds().toString().length === 1) {
        s = "0" + date.getSeconds();
    } else {
        s = date.getSeconds();
    }
    return h + ":" + m + ":" + s;
}
//Capturamos cualquier movimiento de cualquier campo del form
function formMovimientoCambio(claseSmall, claseLarge) {

    //Capturamos cualquier movimiento de cualquier campo del form
    $('form').on('keyup change paste checked', 'input, select, textarea, output', function () {
        //Obtenemos su id y valor
        let idCampo = this.id;
        let valorCampo = this.value;
        //Obtenemos la clase de la tabla que contiene el campo
        let claseTabla = $(this).parent().parent().parent().parent()[0].className;
        claseTabla = "." + replaceAll(claseTabla, " ", ".");
        //console.log(claseTabla);
        //console.log(idCampo);

        //Construimos los punteros de los campos
        let tagClaseSmall = claseSmall + " #" + idCampo;
        // console.log(tagClaseSmall);
        let tagClaseLarge = claseLarge + " #" + idCampo;
        //console.log(tagClaseLarge);

        //console.log(claseTabla);
        //console.log(idCampo);
        //Si es esta ruta
        if (claseTabla === claseSmall) {
            //console.log(tagClaseLarge);            
            if (this.type === 'checkbox') {
                $(tagClaseLarge).prop('checked', $(tagClaseSmall).is(':checked'));
            } else {
                $(tagClaseLarge).val(valorCampo);
            }
        } else if (claseTabla === claseLarge) {
            //alert($(tagClaseSmall).is(':checked'));
            //console.log(tagClaseSmall);
            if (this.type === 'checkbox') {
                $(tagClaseSmall).prop('checked', $(tagClaseLarge).is(':checked'));
            } else {
                $(tagClaseSmall).val(valorCampo);
            }
        }
    });

}

function contarFilasVisibles() {
    $(".nFilasTabla span").html("");
    var idTabla = document.getElementsByClassName('tabla')[0].id;
    if (idTabla === '') {
        idTabla = document.getElementsByClassName('large-only')[0].id;
    }
    var nFilas = $("#" + idTabla + " tbody tr:visible").length;
    //console.log(nFilas);
    $(".nFilasTabla span").html('Se han encontrado ' + nFilas + ' resultados.');
}

function formMovimientoCambioTabla(claseSmall, claseLarge) {
    //Capturamos cualquier movimiento de cualquier campo del form
    $('table').on('keyup change paste checked', 'input, select, textarea, output', function () {
        //Obtenemos su id y valor
        let idCampo = this.id;
        let valorCampo = this.value;
        //Obtenemos la clase de la tabla que contiene el campo
        let claseTabla = $(this).parent().parent().parent().parent()[0].className;
        claseTabla = "." + replaceAll(claseTabla, " ", ".");
        //console.log(claseTabla);
        //console.log(idCampo);

        //Construimos los punteros de los campos
        let tagClaseSmall = claseSmall + " #" + idCampo;
        //console.log(tagClaseSmall);
        let tagClaseLarge = claseLarge + " #" + idCampo;
        //console.log(tagClaseLarge);
        //Si es esta ruta
        // console.log(claseTabla);
        // console.log(idCampo);
        if (claseTabla === claseSmall) {
            //console.log(tagClaseLarge);            
            if (this.type === 'checkbox') {
                $(tagClaseLarge).prop('checked', $(tagClaseSmall).is(':checked'));
            } else {
                $(tagClaseLarge).val(valorCampo);
            }
        } else if (claseTabla === claseLarge) {
            //alert($(tagClaseSmall).is(':checked'));
            //console.log(tagClaseSmall);
            if (this.type === 'checkbox') {
                $(tagClaseSmall).prop('checked', $(tagClaseLarge).is(':checked'));
            } else {
                $(tagClaseSmall).val(valorCampo);
            }
        }
    });
}

//Para dejar seleccionado un option en un select
function selectInCombo(combo, val)
{
    // console.log(combo);
    for (var indice = 0; indice < document.getElementById(combo).length; indice++)
    {
        if (document.getElementById(combo).options[indice].value === val)
            document.getElementById(combo).selectedIndex = indice;
    }
}

function selectInComboTrigger(combo, val, id, tipoEvento)
{
    for (var indice = 0; indice < document.getElementById(combo).length; indice++)
    {
        if (document.getElementById(combo).options[indice].value === val)
            document.getElementById(combo).selectedIndex = indice;
    }
    $("#" + id).trigger(tipoEvento);
}

function selectInComboIncludes(combo, val)
{
    for (var indice = 0; indice < document.getElementById(combo).length; indice++)
    {
        if (document.getElementById(combo).options[indice].value.includes(val))
            document.getElementById(combo).selectedIndex = indice;
    }
}

function deshabilitarTituloCampo(id) {
    $(id).css("color", "#dbdbdb");
}

function habilitarTituloCampo(id) {
    $(id).css("color", "#5f5f5f");
}

function deshabilitarCampo(id) {
    $(id).prop("disabled", true);
}

function habilitarCampo(id) {
    $(id).prop("disabled", false);
}

function ocultarCampo(id) {
    $(id).hide();
}

function mostrarCampo(id) {
    $(id).show();
}

//Poner tooltip
$(document).tooltip();

function getIPPuerto() {
    var currentLocation = window.location + "";
    var ipPuerto = currentLocation.split('/')[2];
    var nombre = currentLocation.split('/')[3];
    return ipPuerto + "/" + nombre;
}

//Abrir ventanas independientes
function abrirVentanaEmergente(URLHtml, width, height) { //v2.0
    var alto = window.screen.height;
    var ancho = window.screen.width;
    var yposi = (alto - height) / 2;
    var xposi = (ancho - width) / 2;
    var features = 'scrollbars = yes, top=' + yposi + ',left=' + xposi + ',width=' + width + ',height=' + height;
    var replace = false;
    var ventana = window.open(URLHtml, "_blank", features, replace);

//    if (xposi !== null && yposi !== null) {
//        if (ventana !== null) {
    ventana.moveTo(xposi, yposi);
//        }
//    }

//    $.get(URLHtml, function (response) {
//        var html;
//        var js;
//
//        html = response;
////        alert(html);
//
//
//        $.get(URLJs, function (respon) {
//            html = html + " <script> " + respon + " </script>";
//            alert(html);
//        });
//
//        alert(html);
//
//        swal({
//            html: html,
//            showCloseButton: false,
//            showCancelButton: false,
//            showConfirmButton: false
//        });
//
////        Cambiamos la alineación del contenido html del swal
//        $(".swal2-content").css("text-align", "left");
//
//    });


}

function abrirVentanaEmergenteReturn(URLHtml, width, height) { //v2.0
    var alto = window.screen.height;
    var ancho = window.screen.width;
    var yposi = (alto - height) / 2;
    var xposi = (ancho - width) / 2;
    var features = 'scrollbars = yes, top=' + yposi + ',left=' + xposi + ',width=' + width + ',height=' + height;
    var replace = false;
    var ventana = window.open(URLHtml, "_blank", features, replace);

    ventana.moveTo(xposi, yposi);

    return ventana;
}

function escribirCampoPlanos(tag_id, variable_id, tag_nombre, variable_nombre, id, maquinaZona_id, maquinaZona_nombre) {

    var yaEsta = false;
    var textoMostrar = "";
    $("g").each(function () {

        var hrefT = $(this).context.obj.href;
//        console.log(hrefT + " - ");
//        console.log(id + variable_id);
        if (id.includes("zona_id=")) {

        } else {

            if (hrefT.includes("maquina_id=" + variable_id)) {
                yaEsta = true;
                textoMostrar = "Esta maquina ya esta ubicada en el plano.";
            }
        }

//        if (hrefT.includes("zona_id=" + variable_id)) {
//            yaEsta = true;
//            textoMostrar = "Esta zona ya esta ubicada en el plano.";
//        }


    });

    if (yaEsta === false) {
        var texto = "";
        if (maquinaZona_id !== null && maquinaZona_id !== "") {
            texto = "=" + maquinaZona_id;
            texto += "=" + maquinaZona_nombre;
        }
        $(tag_id).val(variable_id);
        $(tag_nombre).val(variable_nombre);
        $("#href_attr").val(id + variable_id + "=" + variable_nombre + texto);
        $("#title_attr").val(variable_nombre);
//    console.log(tag_id);
//    console.log(tag_nombre);
//        console.log(id + variable_id + "=" + variable_nombre + texto);
//    console.log(variable_nombre);

    } else {
        // swal.close();
        $("#edit_details").css("display", "none");
//        $("#yaExiste").css("display", "block");
//        $("#textoEscribir").html(textoMostrar);


//        alert("rydvfb");

    }
}

function escribirCampo(tag_id, variable_id, tag_nombre, variable_nombre) {

    $(tag_id).val(variable_id);
    $(tag_nombre).val(variable_nombre);
    if ($("#estoyFamiliaMaquina").val() === "1") {

        tipo();
    }
}

function cambiarTipoFamiliaSiExiste() {

}

////////////////Crear y modificar datos///////////////////////////

function enviarDatosConArchivos(urlServlet, data, isCrear) {
    //////////////////////Ajax//////////////////////////

    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,
        contentType: false,
        processData: false,

        //Antes del envio
        beforeSend: function () {
            //mesageDialog
            swal({
                title: "Procesando:",
                text: "Procesando, espere por favor...",
                type: "info",
                width: "auto",
                showLoaderOnConfirm: true
            });
        },

        //Envio
        success: function (respuesta) {
            var valores = eval(respuesta);
            //Si se ha guardado
            if (valores.length === 1) {
                //mesageDialog
                swal({
                    title: "Perfecto:",
                    text: valores[0],
                    type: "success"
                });

                if (isCrear === true) {
                    setTimeout(function () {
                    }, 1000); // in milliseconds
                }

            } else {
                //mesageDialog
                swal({
                    title: valores[0],
                    text: valores[1],
                    type: "error"
                });
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

function enviarDatosSinActualizar(urlServlet, data) {
//////////////////////Ajax//////////////////////////

    $.ajax({
        url: urlServlet,
        enctype: "multipart/form-data",
        type: 'POST',
        data: data,
//        contentType: false,
//        processData: false,
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
            swal({
                title: "Procesando:",
                text: "Procesando, espere por favor...",
                type: "info",
//                width: "100",

                showLoaderOnConfirm: true
            });
        },
        //Envio
        success: function (respuesta) {
            try {

                var valores = eval(respuesta);
                //Si se ha guardado
                if (valores.length === 1) {
                    //mesageDialog
                    swal({
                        title: "Perfecto:",
                        text: valores[0],
                        type: "success"
                    });

                    setTimeout(function () {

                        swal.close();
                    }, 1000); // in milliseconds


                } else {
                    //mesageDialog
                    swal({
                        title: valores[0],
                        text: valores[1],
                        width: "200px",
                        type: "error"
                    });
                }

            } catch (exception) {
                document.write(respuesta);
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

function cambioEjercicio(ejercicio) {
    $("#ejercicioCabecera").html(ejercicio);
}

function enviarDatos(urlServlet, data, isCrear) {
//////////////////////Ajax//////////////////////////

    $.ajax({
        url: urlServlet,
        enctype: "multipart/form-data",
        type: 'POST',
        data: data,
//        contentType: false,
//        processData: false,
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
            swal({
                title: "Procesando:",
                text: "Procesando, espere por favor...",
                type: "info",
//                width: "100",

                showLoaderOnConfirm: true
            });
        },
        //Envio
        success: function (respuesta) {
            try {

                var valores = eval(respuesta);
                //Si se ha guardado
                if (valores.length === 1) {
                    //mesageDialog
                    swal({
                        title: "Perfecto:",
                        text: valores[0],
                        type: "success"
                    });
                    if (isCrear === true) {
                        setTimeout(function () {
                            swal.close();
                            window.location.reload(true);
                        }, 1000); // in milliseconds
                    } else {
                        setTimeout(function () {
                            ventanaAtras(window, swal);
                        }, 1000); // in milliseconds
                    }

                } else {
                    //mesageDialog
                    swal({
                        title: valores[0],
                        text: valores[1],
                        width: "200px",
                        type: "error"
                    });
                }

            } catch (exception) {
                document.write(respuesta);
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

function enviarDatosSinCrearMetodo(urlServlet, data, metodo) {
//////////////////////Ajax//////////////////////////
    var realizado = false;
    $.ajax({
        url: urlServlet,
        enctype: "multipart/form-data",
        type: 'POST',
        data: data,
//        contentType: false,
//        processData: false,
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
            swal({
                title: "Procesando:",
                text: "Procesando, espere por favor...",
                type: "info",
//                width: "100",

                showLoaderOnConfirm: true
            });
        },
        //Envio
        success: function (respuesta) {
            try {

                var valores = eval(respuesta);
                //Si se ha guardado
                if (valores.length === 1) {
                    //mesageDialog
                    swal({
                        title: "Perfecto:",
                        text: valores[0],
                        type: "success"
                    });
                    realizado = true;

                } else {
                    //mesageDialog
                    swal({
                        title: valores[0],
                        text: valores[1],
                        width: "200px",
                        type: "error"
                    });
                    realizado = false;
                }

            } catch (exception) {
                document.write(respuesta);
            }

        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {
            if (realizado) {
                metodo();
            }

        }
    });
}

function enviarDatosFuncion(urlServlet, data, isCrear, metodo) {
//////////////////////Ajax//////////////////////////

    $.ajax({
        url: urlServlet,
        enctype: "multipart/form-data",
        type: 'POST',
        data: data,
//        contentType: false,
//        processData: false,
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
            swal({
                title: "Procesando:",
                text: "Procesando, espere por favor...",
                type: "info",
//                width: "100",

                showLoaderOnConfirm: true
            });
        },
        //Envio
        success: function (respuesta) {
            try {

                var valores = eval(respuesta);
                //Si se ha guardado
                if (valores.length === 1) {
                    //mesageDialog
                    swal({
                        title: "Perfecto:",
                        text: valores[0],
                        type: "success"
                    });
                    if (isCrear !== null) {
                        if (isCrear === true) {
                            setTimeout(function () {
                                swal.close();
                                window.location.reload(true);
                            }, 1000); // in milliseconds
                        } else {
                            setTimeout(function () {
                                ventanaAtras(window, swal);
                            }, 1000); // in milliseconds
                        }
                    }


                } else {
                    //mesageDialog
                    swal({
                        title: valores[0],
                        text: valores[1],
                        width: "200px",
                        type: "error"
                    });
                }

            } catch (exception) {
                document.write(respuesta);
            }

        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {
            //window.location.reload(true);
            metodo();
        }
    });
}

function enviarDatosFuncionSinSwalSinCrear(urlServlet, data, metodo) {
//////////////////////Ajax//////////////////////////

    $.ajax({
        url: urlServlet,
        enctype: "multipart/form-data",
        type: 'POST',
        data: data,
//        contentType: false,
//        processData: false,
        //Antes del envio
        beforeSend: function () {
            //mesageDialog

        },
        //Envio
        success: function (respuesta) {
            try {

                var valores = eval(respuesta);
                //Si se ha guardado
                if (valores.length === 1) {
                    //mesageDialog




                } else {
                    //mesageDialog
                    swal({
                        title: valores[0],
                        text: valores[1],
                        width: "200px",
                        type: "error"
                    });
                }

            } catch (exception) {
                document.write(respuesta);
            }

        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {
            //window.location.reload(true);
            //metodo();
        }
    });
}

function enviarDatosFuncionSinSwal(urlServlet, data, isCrear, metodo) {
//////////////////////Ajax//////////////////////////

    $.ajax({
        url: urlServlet,
        enctype: "multipart/form-data",
        type: 'POST',
        data: data,
//        contentType: false,
//        processData: false,
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
//            swal({
//                title: "Procesando:",
//                text: "Procesando, espere por favor...",
//                type: "info",
////                width: "100",
//
//                showLoaderOnConfirm: true
//            });
        },
        //Envio
        success: function (respuesta) {
            try {

                var valores = eval(respuesta);
                //Si se ha guardado
                if (valores.length === 1) {
                    //mesageDialog
//                    swal({
//                        title: "Perfecto:",
//                        text: valores[0],
//                        type: "success"
//                    });
                    if (isCrear !== null) {
                        if (isCrear === true) {
                            setTimeout(function () {
                                //  swal.close();
                                window.location.reload(true);
                            }, 1000); // in milliseconds
                        } else {
                            setTimeout(function () {
                                ventanaAtras(window, swal);
                            }, 1000); // in milliseconds
                        }
                    }


                } else {
                    //mesageDialog
                    swal({
                        title: valores[0],
                        text: valores[1],
                        width: "200px",
                        type: "error"
                    });
                }

            } catch (exception) {
                document.write(respuesta);
            }

        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {
            //window.location.reload(true);
            metodo();
        }
    });
}

function enviarDatosMetodoActualizar(urlServlet, data, metodoActualizar) {
//////////////////////Ajax//////////////////////////

    $.ajax({
        url: urlServlet,
        enctype: "multipart/form-data",
        type: 'POST',
        data: data,
//        contentType: false,
//        processData: false,
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
            swal({
                title: "Procesando:",
                text: "Procesando, espere por favor...",
                type: "info",
//                width: "100",

                showLoaderOnConfirm: true
            });
        },
        //Envio
        success: function (respuesta) {
            try {

                var valores = eval(respuesta);
                //Si se ha guardado
                if (valores.length === 1) {
                    //mesageDialog
                    swal({
                        title: "Perfecto:",
                        text: valores[0],
                        type: "success"
                    });
//                    if (isCrear === true) {
//                        setTimeout(function () {
//                            swal.close();
//                            window.location.reload(true);
//                        }, 1000); // in milliseconds
//                    } else {
//                        setTimeout(function () {
//                            ventanaAtras(window, swal);
//                        }, 1000); // in milliseconds
//                    }

                } else {
                    //mesageDialog
                    swal({
                        title: valores[0],
                        text: valores[1],
                        width: "200px",
                        type: "error"
                    });
                }

            } catch (exception) {
                document.write(respuesta);
            }

        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {
            //window.location.reload(true);
            setTimeout(function () {
                metodoActualizar();
            }, 1000);
        }
    });
}

function enviarDatosMetodoActualizarSinSwal(urlServlet, data, metodoActualizar) {
//////////////////////Ajax//////////////////////////

    $.ajax({
        url: urlServlet,
        enctype: "multipart/form-data",
        type: 'POST',
        data: data,
//        contentType: false,
//        processData: false,
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
//            swal({
//                title: "Procesando:",
//                text: "Procesando, espere por favor...",
//                type: "info",
////                width: "100",
//
//                showLoaderOnConfirm: true
//            });
        },
        //Envio
        success: function (respuesta) {
            try {

                var valores = eval(respuesta);
                //Si se ha guardado
                if (valores.length === 1) {
                    //mesageDialog
//                    swal({
//                        title: "Perfecto:",
//                        text: valores[0],
//                        type: "success"
//                    });
//                    if (isCrear === true) {
//                        setTimeout(function () {
//                            swal.close();
//                            window.location.reload(true);
//                        }, 1000); // in milliseconds
//                    } else {
//                        setTimeout(function () {
//                            ventanaAtras(window, swal);
//                        }, 1000); // in milliseconds
//                    }

                } else {
                    //mesageDialog
                    swal({
                        title: valores[0],
                        text: valores[1],
                        width: "200px",
                        type: "error"
                    });
                }

            } catch (exception) {
                document.write(respuesta);
            }

        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {
            //window.location.reload(true);
            setTimeout(function () {
                metodoActualizar();
            }, 1000);
        }
    });
}

function enviarDatosCerrar(urlServlet, data, isCrear) {
//////////////////////Ajax//////////////////////////

    $.ajax({
        url: urlServlet,
        enctype: "multipart/form-data",
        type: 'POST',
        data: data,
//        contentType: false,
//        processData: false,
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
            swal({
                title: "Procesando:",
                text: "Procesando, espere por favor...",
                type: "info",
//                width: "100",

                showLoaderOnConfirm: true
            });
        },
        //Envio
        success: function (respuesta) {
            try {

                var valores = eval(respuesta);
                //Si se ha guardado
                if (valores.length === 1) {
                    //mesageDialog
                    swal({
                        title: "Perfecto:",
                        text: valores[0],
                        type: "success"
                    });
                    if (isCrear === true) {
                        setTimeout(function () {
                            window.location.href = 'main.jsp';
                            window.close();
                        }, 1000); // in milliseconds
                    } else {
                        setTimeout(function () {
                            window.location.href = 'main.jsp';
                        }, 1000); // in milliseconds
                    }

                } else {
                    //mesageDialog
                    swal({
                        title: valores[0],
                        text: valores[1],
                        width: "200px",
                        type: "error"
                    });
                }

            } catch (exception) {
                document.write(respuesta);
            }

        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {
            //window.close();
            //window.location.reload(true);
        }
    });
}

function borrarJSPUsado(usuariosEsperaJSP) {
    var pathArray = window.location.pathname.split('/');
    var urlServlet = "/" + pathArray[1] + "/BorrarJSPUsado";
    var data = {
        usuariosEsperaJSP: usuariosEsperaJSP
    };
    enviarDatosJSPUsado(urlServlet, data);
}

function enviarDatosJSPUsado(urlServlet, data) {
//////////////////////Ajax//////////////////////////

    $.ajax({
        url: urlServlet,
        enctype: "multipart/form-data",
        type: 'POST',
        data: data,
//        contentType: false,
//        processData: false,
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
//            swal({
//                title: "Procesando:",
//                text: "Procesando, espere por favor...",
//                type: "info",
////                width: "100",
//
//                showLoaderOnConfirm: true
//            });
        },
        //Envio
        success: function (respuesta) {
            try {

                var valores = eval(respuesta);
                //Si se ha guardado
                if (valores.length === 1) {
                    //mesageDialog
//                    swal({
//                        title: "Perfecto:",
//                        text: valores[0],
//                        type: "success"
//                    });


                } else {
                    //mesageDialog
//                    swal({
//                        title: valores[0],
//                        text: valores[1],
//                        width: "200px",
//                        type: "error"
//                    });
                }

            } catch (exception) {
                document.write(respuesta);
            }

        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {
            $("form").submit();
        }

    });
}

function enviarDatosRefrescar(urlServlet, data, isCrear) {
//////////////////////Ajax//////////////////////////

    $.ajax({
        url: urlServlet,
        enctype: "multipart/form-data",
        type: 'POST',
        data: data,
//        contentType: false,
//        processData: false,
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
            swal({
                title: "Procesando:",
                text: "Procesando, espere por favor...",
                type: "info",
//                width: "100",

                showLoaderOnConfirm: true
            });
        },
        //Envio
        success: function (respuesta) {
            try {

                var valores = eval(respuesta);
                //Si se ha guardado
                if (valores.length === 1) {
                    //mesageDialog
                    swal({
                        title: "Perfecto:",
                        text: valores[0],
                        type: "success"
                    });
                    if (isCrear === true) {
                        setTimeout(function () {
                            swal.close();
                        }, 1000); // in milliseconds
                    } else {
                        setTimeout(function () {
                            ventanaAtras(window, swal);
                        }, 1000); // in milliseconds
                    }

                } else {
                    //mesageDialog
                    swal({
                        title: valores[0],
                        text: valores[1],
                        width: "200px",
                        type: "error"
                    });
                }

            } catch (exception) {
                document.write(respuesta);
            }

        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {
            setTimeout(function () {
                refrescar();
            }, 1000); // in milliseconds
            //window.location.reload(true);
        }

    });
}

function enviarDatosActualizar(urlServlet, data, rutaPadre) {
//////////////////////Ajax//////////////////////////

    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
            swal({
                title: "Procesando:",
                text: "Procesando, espere por favor...",
                type: "info",
                width: "auto",
                showLoaderOnConfirm: true
            });
        },
        //Envio
        success: function (respuesta) {
            try {

                var valores = eval(respuesta);
                //Si se ha guardado
                if (valores.length === 1) {
                    //mesageDialog
                    swal({
                        title: "Perfecto:",
                        text: valores[0],
                        type: "success"
                    });

                    setTimeout(function () {
                        swal.close();
                        window.location.href = rutaPadre;
                    }, 1000); // in milliseconds


                } else {
                    //mesageDialog
                    swal({
                        title: valores[0],
                        text: valores[1],
                        type: "error"
                    });
                }

            } catch (exception) {
                document.write(respuesta);
            }

        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {

        }

    });
}

function enviarDatosSinSwal(urlServlet, data, isCrear) {
//////////////////////Ajax//////////////////////////
    $.ajax({
        url: urlServlet,
        enctype: "multipart/form-data",
        type: 'POST',
        data: data,
//        contentType: false,
//        processData: false,
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
//            swal({
//                title: "Procesando:",
//                text: "Procesando, espere por favor...",
//                type: "info",
////                width: "100",
//
//                showLoaderOnConfirm: true
//            });
        },
        //Envio
        success: function (respuesta) {
            try {

                var valores = eval(respuesta);
                //Si se ha guardado
                if (valores.length === 1) {
                    //mesageDialog
                    //swal.close();
                    //setTimeout(function () {
                    //swal.close();
                    setTimeout(function () {
                        //alert("wqefg");
                        //location.reload();
                    }, 100);
                    //}, 200); // in milliseconds
//                    swal({
//                        title: "Perfecto:",
//                        text: valores[0],
//                        type: "success"
//                    });
//                    if (isCrear === true) {
//                        setTimeout(function () {
//                            limpiarCampos();
//                            swal.close();
//                        }, 1000); // in milliseconds
//                    } else {
//                        setTimeout(function () {
//                            ventanaAtras(window, swal);
//                        }, 1000); // in milliseconds
//                    }

                } else {
                    //mesageDialog
                    swal({
                        title: valores[0],
                        text: valores[1],
                        width: "200px",
                        type: "error"
                    });
                }

            } catch (exception) {
                document.write(exception);
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

function activarTriger(selector, tipoEvento) {
    $(selector).trigger(tipoEvento);
}

function enviarDatosSinSwalMetodo(urlServlet, data, metodo) {
//////////////////////Ajax//////////////////////////
    $.ajax({
        url: urlServlet,
        enctype: "multipart/form-data",
        type: 'POST',
        data: data,
//        contentType: false,
//        processData: false,
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
//            swal({
//                title: "Procesando:",
//                text: "Procesando, espere por favor...",
//                type: "info",
////                width: "100",
//
//                showLoaderOnConfirm: true
//            });
        },
        //Envio
        success: function (respuesta) {
            try {

                var valores = eval(respuesta);
                //Si se ha guardado
                if (valores.length === 1) {
                    //mesageDialog
                    //swal.close();
                    //setTimeout(function () {
                    //swal.close();
                    setTimeout(function () {
                        //alert("wqefg");
                        //location.reload();
                    }, 100);
                    //}, 200); // in milliseconds
//                    swal({
//                        title: "Perfecto:",
//                        text: valores[0],
//                        type: "success"
//                    });
//                    if (isCrear === true) {
//                        setTimeout(function () {
//                            limpiarCampos();
//                            swal.close();
//                        }, 1000); // in milliseconds
//                    } else {
//                        setTimeout(function () {
//                            ventanaAtras(window, swal);
//                        }, 1000); // in milliseconds
//                    }

                } else {
                    //mesageDialog
                    swal({
                        title: valores[0],
                        text: valores[1],
                        width: "200px",
                        type: "error"
                    });
                }

            } catch (exception) {
                document.write(exception);
            }

        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {
            metodo();
            //window.location.reload(true);
        }

    });
}

function enviarDatosSinSwalSinReload(urlServlet, data) {
//////////////////////Ajax//////////////////////////
    $.ajax({
        url: urlServlet,
        enctype: "multipart/form-data",
        type: 'POST',
        data: data,
//        contentType: false,
//        processData: false,
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
//            swal({
//                title: "Procesando:",
//                text: "Procesando, espere por favor...",
//                type: "info",
////                width: "100",
//
//                showLoaderOnConfirm: true
//            });
        },
        //Envio
        success: function (respuesta) {
            try {

                // var valores = eval(respuesta);
                //Si se ha guardado
//                if (valores.length === 1) {
                //mesageDialog
                //swal.close();
                //setTimeout(function () {
                //swal.close();
//                    setTimeout(function () {
//                        //alert("wqefg");
//                        location.reload();
//                    }, 100);
                //}, 200); // in milliseconds
//                    swal({
//                        title: "Perfecto:",
//                        text: valores[0],
//                        type: "success"
//                    });
//                    if (isCrear === true) {
//                        setTimeout(function () {
//                            limpiarCampos();
//                            swal.close();
//                        }, 1000); // in milliseconds
//                    } else {
//                        setTimeout(function () {
//                            ventanaAtras(window, swal);
//                        }, 1000); // in milliseconds
//                    }

//                } else {
//                    //mesageDialog
//                    swal({
//                        title: valores[0],
//                        text: valores[1],
//                        width: "200px",
//                        type: "error"
//                    });
//                }

            } catch (exception) {
                document.write(exception);
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

function enviarDatosPermisos(urlServlet, data) {
//////////////////////Ajax//////////////////////////
    $.ajax({
        url: urlServlet,
        enctype: "multipart/form-data",
        type: 'POST',
        data: data,
//        contentType: false,
//        processData: false,
        //Antes del envio
//        beforeSend: function () {
//            //mesageDialog
//            swal({
//                title: "Procesando:",
//                text: "Procesando, espere por favor...",
//                type: "info",
////                width: "100",
//
//                showLoaderOnConfirm: true
//            });
//        },
        //Envio
        success: function (respuesta) {
            try {

                var valores = eval(respuesta);
                //Si se ha guardado
                if (valores.length === 1) {
                    //mesageDialog
//                    swal({
//                        title: "Perfecto:",
//                        text: valores[0],
//                        type: "success"
//                    });


                } else {
                    //mesageDialog
//                    swal({
//                        title: valores[0],
//                        text: valores[1],
//                        width: "200px",
//                        type: "error"
//                    });
                }

            } catch (exception) {
                document.write(respuesta);
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

function enviarDatosPadre(urlServlet, data, isCrear) {
//////////////////////Ajax//////////////////////////

    $.ajax({
        url: urlServlet,
        enctype: "multipart/form-data",
        type: 'POST',
        data: data,
//        contentType: false,
//        processData: false,
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
            swal({
                title: "Procesando:",
                text: "Procesando, espere por favor...",
                type: "info",
//                width: "100",

                showLoaderOnConfirm: true
            });
        },
        //Envio
        success: function (respuesta) {
            try {

                var valores = eval(respuesta);
                //Si se ha guardado
                if (valores.length === 1) {
                    //mesageDialog
                    swal({
                        title: "Perfecto:",
                        text: valores[0],
                        type: "success"
                    });
                    if (isCrear === true) {
                        setTimeout(function () {
                            window.opener.actualizarPadre();
                            swal.close();
                        }, 1000); // in milliseconds
                    } else {
                        setTimeout(function () {
                            window.opener.actualizarPadre();
                            ventanaAtras(window, swal);
                        }, 1000); // in milliseconds
                    }

                } else {
                    //mesageDialog
                    swal({
                        title: valores[0],
                        text: valores[1],
                        width: "200px",
                        type: "error"
                    });
                }

            } catch (exception) {
                document.write(respuesta);
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

function enviarDatosPadreRefrescar(urlServlet, data, isCrear) {
//////////////////////Ajax//////////////////////////

    $.ajax({
        url: urlServlet,
        enctype: "multipart/form-data",
        type: 'POST',
        data: data,
//        contentType: false,
//        processData: false,
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
            swal({
                title: "Procesando:",
                text: "Procesando, espere por favor...",
                type: "info",
//                width: "100",

                showLoaderOnConfirm: true
            });
        },
        //Envio
        success: function (respuesta) {
            try {

                var valores = eval(respuesta);
                //Si se ha guardado
                if (valores.length === 1) {
                    //mesageDialog
                    swal({
                        title: "Perfecto:",
                        text: valores[0],
                        type: "success"
                    });
                    if (isCrear === true) {
                        setTimeout(function () {
                            window.opener.refrescar();
                            swal.close();
                        }, 1000); // in milliseconds
                    } else {
                        setTimeout(function () {
                            window.opener.refrescar();
                            ventanaAtras(window, swal);
                        }, 1000); // in milliseconds
                    }

                } else {
                    //mesageDialog
                    swal({
                        title: valores[0],
                        text: valores[1],
                        width: "200px",
                        type: "error"
                    });
                }

            } catch (exception) {
                document.write(respuesta);
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

function enviarDatosJson_servletActualizarPadre(urlServlet, data, isCrear) {
//////////////////////Ajax//////////////////////////    

    $.ajax({
        url: urlServlet,
        enctype: "multipart/form-data",
        type: 'POST',
        data: data,
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
            swal({
                title: "Procesando:",
                text: "Procesando, espere por favor...",
                type: "info",
                width: "auto",
                showLoaderOnConfirm: true
            });
        },
        //Envio
        success: function (respuesta) {
            try {
                var valores = eval(respuesta);
                //Si se ha guardado
                if (valores.length === 1) {
                    //mesageDialog
                    swal({
                        title: "Perfecto:",
                        text: valores[0],
                        type: "success"
                    }).then(function () {
                        if (isCrear === true) {
                            setTimeout(function () {
                                window.opener.mostrardivDetalleOTLote();
                                swal.close();
                                ventanaAtras(window, swal);
                            }, 10); // in milliseconds
                        } else {
                            setTimeout(function () {
                                ventanaAtras(window, swal);
                            }, 1000); // in milliseconds
                        }
                    });

                } else {
                    //mesageDialog
                    swal({
                        title: valores[0],
                        text: valores[1],
                        type: "error"
                    });
                }

            } catch (exception) {
                document.write(respuesta);
            }

        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        }

    });
}

function actualizarPrecioComun(elemento) {
    setTimeout(function () {
        let linea = $(elemento).attr("id").split("_")[2];

        var articulo_id = $("#articuloId_linea_" + linea).val();
        if (articulo_id != "") {

            var precio = $("#precio_linea_" + linea).val();
            var descuento = $("#descuento_linea_" + linea).val();

            //console.log(descuento);
            if (descuento === "") {
                descuento = 0;
            }
            //var pvp = $("#pvp_linea_" + linea);
            var precioCoste = precio * (descuento / 100);

            if (precioCoste == 0) {
                precioCoste = precio;
            }
            //Capturamos la ruta para envio de datos a servlet
            var pathArray = window.location.pathname.split('/');
            var urlServlet = "/" + pathArray[1] + "/ModificarPrecioDescuentoArticulo";

            var data = {
                articulo_id: articulo_id,
                precio: precio,
                precioCoste: precioCoste,
                descuento: descuento
            };
            swal({
                title: '¡Atención!',
                type: 'info',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                text: 'Has cambiado el precio/descuento de la línea, ¿Deseas modificar el precio también del artículo?',
                input: 'select',
                inputOptions: {
                    '0': 'No',
                    '1': 'Si'
                },
                showCancelButton: true,
                inputValidator: (value) => {
                    return new Promise((resolve) => {
                        if (value === '1') {
                            //alert("Solo en recepción");
                            swal({
                                title: '¡Modificar el precio!',
                                text: 'Has modificado el precio/descuento de la linea',
                                timer: 1800
                            });

                            setTimeout(function () {
                                enviarDatosFuncionSinSwalSinCrear(urlServlet, data, function () {});
                                resolve();
                            }, 1900);
                        } else {
                            resolve();

                        }
                    });
                }
            });
        }
    }, 100);
}

function enviarDatosSubirArchivosPadre(urlServlet, data, isCrear) {
//////////////////////Ajax//////////////////////////

    $.ajax({
        url: urlServlet,
        enctype: "multipart/form-data",
        type: 'POST',
        data: data,
        contentType: false,
        processData: false,
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
            swal({
                title: "Procesando:",
                text: "Procesando, espere por favor...",
                type: "info",
//                width: "100",

                showLoaderOnConfirm: true
            });
        },
        //Envio
        success: function (respuesta) {
            try {

                var valores = eval(respuesta);
                //Si se ha guardado
                if (valores.length === 1) {
                    //mesageDialog
                    swal({
                        title: "Perfecto:",
                        text: valores[0],
                        type: "success"
                    });
                    if (isCrear === true) {
                        setTimeout(function () {
                            window.opener.actualizarPadre();
                            swal.close();
                        }, 1000); // in milliseconds
                    } else {
                        setTimeout(function () {

                            if (window.opener !== null) {
                                window.opener.actualizarPadre();
                            }
                            ventanaAtras(window, swal);

                        }, 1000); // in milliseconds
                    }

                } else {
                    //mesageDialog
                    swal({
                        title: valores[0],
                        text: valores[1],
                        width: "200px",
                        type: "error"
                    });
                }

            } catch (exception) {
                document.write(respuesta);
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

function enviarDatosSubirArchivos(urlServlet, data, isCrear) {
//////////////////////Ajax//////////////////////////

    $.ajax({
        url: urlServlet,
        enctype: "multipart/form-data",
        type: 'POST',
        data: data,
        contentType: false,
        processData: false,
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
            swal({
                title: "Procesando:",
                text: "Procesando, espere por favor...",
                type: "info",
//                width: "100",

                showLoaderOnConfirm: true
            });
        },
        //Envio
        success: function (respuesta) {
            try {

                var valores = eval(respuesta);
                //Si se ha guardado
                if (valores.length === 1) {
                    //mesageDialog
                    swal({
                        title: "Perfecto:",
                        text: valores[0],
                        type: "success"
                    });
                    if (isCrear === true) {
                        setTimeout(function () {
                            swal.close();
                            window.location.reload();
                        }, 1000); // in milliseconds
                    } else {
                        setTimeout(function () {
                            ventanaAtras(window, swal);
                        }, 1000); // in milliseconds
                    }

                } else {
                    //mesageDialog
                    swal({
                        title: valores[0],
                        text: valores[1],
                        width: "200px",
                        type: "error"
                    });
                }

            } catch (exception) {
                document.write(respuesta);
            }

        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {

        }

    });
}

function enviarDatosSubirArchivos2(urlServlet, data, isCrear) {
//////////////////////Ajax//////////////////////////

    $.ajax({
        url: urlServlet,
        enctype: "multipart/form-data",
        type: 'POST',
        data: data,
        contentType: false,
        processData: false,
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
            swal({
                title: "Procesando:",
                text: "Procesando, espere por favor...",
                type: "info",
//                width: "100",

                showLoaderOnConfirm: true
            });
        },
        //Envio
        success: function (respuesta) {
            try {

                var valores = eval(respuesta);
                //Si se ha guardado
                if (valores.length === 1) {
                    //mesageDialog
                    swal({
                        title: "Perfecto:",
                        text: valores[0],
                        type: "success"
                    });
                    if (isCrear === true) {
                        setTimeout(function () {
                            swal.close();
                            window.location.reload();
                        }, 60000); // in milliseconds
                    } else {
                        setTimeout(function () {
                            ventanaAtras(window, swal);
                        }, 60000); // in milliseconds
                    }

                } else {
                    //mesageDialog
                    swal({
                        title: valores[0],
                        text: valores[1],
                        width: "200px",
                        type: "error"
                    });
                }

            } catch (exception) {
                document.write(respuesta);
            }

        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {

        }

    });
}





function enviarDatosSubirArchivosSinSwal(urlServlet, data) {
//////////////////////Ajax//////////////////////////

    $.ajax({
        url: urlServlet,
        enctype: "multipart/form-data",
        type: 'POST',
        data: data,
        contentType: false,
        processData: false,
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
            swal({
                title: "Procesando:",
                text: "Procesando, espere por favor...",
                type: "info",
//                width: "100",

                showLoaderOnConfirm: true
            });
        },
        //Envio
        success: function (respuesta) {
            try {

                var valores = eval(respuesta);
                //Si se ha guardado
                if (valores.length === 1) {
                    //mesageDialog


                } else {
                    //mesageDialog
                    swal({
                        title: valores[0],
                        text: valores[1],
                        width: "200px",
                        type: "error"
                    });
                }

            } catch (exception) {
                document.write(respuesta);
            }

        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {

        }

    });
}

function enviarDatosSubirArchivosWindowReload(urlServlet, data, isCrear) {
//////////////////////Ajax//////////////////////////

    $.ajax({
        url: urlServlet,
        enctype: "multipart/form-data",
        type: 'POST',
        data: data,
        contentType: false,
        processData: false,
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
            swal({
                title: "Procesando:",
                text: "Procesando, espere por favor...",
                type: "info",
//                width: "100",

                showLoaderOnConfirm: true
            });
        },
        //Envio
        success: function (respuesta) {
            try {

                var valores = eval(respuesta);
                //Si se ha guardado
                if (valores.length === 1) {
                    //mesageDialog
                    swal({
                        title: "Perfecto:",
                        text: valores[0],
                        type: "success"
                    });
                    if (isCrear === true) {
                        setTimeout(function () {
                            location.reload();
                            swal.close();
                        }, 1000); // in milliseconds
                    } else {
                        setTimeout(function () {
                            ventanaAtras(window, swal);
                        }, 1000); // in milliseconds
                    }

                } else {
                    //mesageDialog
                    swal({
                        title: valores[0],
                        text: valores[1],
                        width: "200px",
                        type: "error"
                    });
                }

            } catch (exception) {
                document.write(respuesta);
            }

        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {

        }

    });
}

function enviarDatosEnvio(urlServlet, data) {
//////////////////////Ajax//////////////////////////
    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
            swal({
                title: "Procesando:",
                text: "Procesando, espere por favor...",
                type: "info",
                width: "auto",
                showLoaderOnConfirm: true
            });
        },
        //Envio
        success: function (respuesta) {
            try {

                var valores = eval(respuesta);
                //Si se ha guardado
                if (valores.length === 1) {
                    //mesageDialog
                    swal({
                        title: "Perfecto:",
                        text: valores[0],
                        type: "success"
                    });

                    setTimeout(function () {
                        swal.close();
                    }, 1000); // in milliseconds                    

                } else if (valores.length === 3) {
                    //mesageDialog
                    swal({
                        title: "Error:",
                        text: valores[0] + valores[1] + valores[2],
                        type: "error"
                    });

                } else {
                    //mesageDialog
                    swal({
                        title: valores[0],
                        text: valores[1],
                        type: "error"
                    });
                }

            } catch (exception) {
                document.write(respuesta);
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

function enviarDatosJsonMaquinaPropiedad(urlServlet, data, isCrear) {
//////////////////////Ajax//////////////////////////

    $.ajax({
        url: urlServlet,
        enctype: "multipart/form-data",
        type: 'POST',
        data: data,
        dataType: "json",
        //Antes del envio

        //Envio
        success: function (respuesta) {
            try {

                var valores = eval(respuesta);
                //Si se ha guardado
                if (valores.length === 1) {
                    //mesageDialog

                    if (isCrear === true) {

                    } else {

                    }

                } else if (valores.length === 2) {
                    //mesageDialog

                } else {
                    //mesageDialog

                }

            } catch (exception) {
                document.write(respuesta);
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

function enviarDatosJson(urlServlet, data, isCrear) {
//////////////////////Ajax//////////////////////////
//console.log(data);
    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,
        dataType: "json",
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
            swal({
                title: "Procesando:",
                text: "Procesando, espere por favor...",
                type: "info",
                width: "auto",
                showLoaderOnConfirm: true
            });
        },
        //Envio
        success: function (respuesta) {
            try {

                var valores = eval(respuesta);
                //Si se ha guardado
                if (valores.length === 1) {
                    //mesageDialog
                    swal({
                        title: "Perfecto:",
                        text: valores[0],
                        type: "success"
                    });
                    if (isCrear === true) {
                        setTimeout(function () {
                            swal.close();
                            actualizar();
                        }, 2000); // in milliseconds
                    } else {
                        setTimeout(function () {
                            ventanaAtras(window, swal);
                        }, 1000); // in milliseconds
                    }

                } else if (valores.length === 2) {
                    //mesageDialog
                    swal({
                        title: valores[0],
                        text: valores[1],
                        type: "error"
                    });
                } else {
                    //mesageDialog
                    swal({
                        title: valores[0],
                        text: valores[2],
                        type: "warning"
                    });
                }

            } catch (exception) {
                document.write(respuesta);
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

function enviarDatosJsonSinSwal(urlServlet, data, isCrear) {
//////////////////////Ajax//////////////////////////
//console.log(data);
    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,
        dataType: "json",
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
//            swal({
//                title: "Procesando:",
//                text: "Procesando, espere por favor...",
//                type: "info",
//                width: "auto",
//                showLoaderOnConfirm: true
//            });
        },
        //Envio
        success: function (respuesta) {
            try {

                var valores = eval(respuesta);
                //Si se ha guardado
                if (valores.length === 1) {
                    //mesageDialog
                    //swal.close();
//                    swal({
//                        title: "Perfecto:",
//                        text: valores[0],
//                        type: "success"
//                    });
//                    if (isCrear === true) {
//                        setTimeout(function () {
//                            limpiarCampos();
//                            
//                            actualizar();
//                        }, 2000); // in milliseconds
//                    } else {
//                        setTimeout(function () {
//                            ventanaAtras(window, swal);
//                        }, 1000); // in milliseconds
//                    }

                } else if (valores.length === 2) {
                    //mesageDialog
                    swal({
                        title: valores[0],
                        text: valores[1],
                        type: "error"
                    });
                } else {
                    //mesageDialog
                    swal({
                        title: valores[0],
                        text: valores[2],
                        type: "warning"
                    });
                }

            } catch (exception) {
                document.write(respuesta);
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

function enviarDatosJsonActualizarPadre(urlServlet, data, isCrear) {
//////////////////////Ajax//////////////////////////

    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,
        dataType: "json",
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
            swal({
                title: "Procesando:",
                text: "Procesando, espere por favor...",
                type: "info",
                width: "auto",
                showLoaderOnConfirm: true
            });
        },
        //Envio
        success: function (respuesta) {
            try {

                var valores = eval(respuesta);
                //Si se ha guardado
                if (valores.length === 1) {
                    //mesageDialog
                    swal({
                        title: "Perfecto:",
                        text: valores[0],
                        type: "success"
                    });
                    if (isCrear === true) {
                        setTimeout(function () {
                            window.opener.actualizarPadre();
                            swal.close();
                            actualizar();
                        }, 2000); // in milliseconds
                    } else {
                        setTimeout(function () {
                            window.opener.refrescar();
                            ventanaAtras(window, swal);
                        }, 1000); // in milliseconds
                    }

                } else if (valores.length === 2) {
                    //mesageDialog
                    swal({
                        title: valores[0],
                        text: valores[1],
                        type: "error"
                    });
                } else {
                    //mesageDialog
                    swal({
                        title: valores[0],
                        text: valores[2],
                        type: "warning"
                    });
                }

            } catch (exception) {
                document.write(respuesta);
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

function enviarDatosJson_servlet(urlServlet, data, isCrear) {
//////////////////////Ajax//////////////////////////    

    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,
        dataType: "json",
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
            swal({
                title: "Procesando:",
                text: "Procesando, espere por favor...",
                type: "info",
                width: "auto",
                showLoaderOnConfirm: true
            });
        },
        //Envio
        success: function (respuesta) {
            try {
                var valores = eval(respuesta);
                //Si se ha guardado
                if (valores.length === 1) {
                    //mesageDialog
                    swal({
                        title: "Perfecto:",
                        text: valores[0],
                        type: "success"
                    });

                    if (isCrear === true) {
                        setTimeout(function () {
                            swal.close();
                            actualizar();
                        }, 1000); // in milliseconds
                    } else {
                        setTimeout(function () {
                            ventanaAtras(window, swal);
                        }, 1000); // in milliseconds
                    }

                } else {
                    //mesageDialog
                    swal({
                        title: valores[0],
                        text: valores[1],
                        type: "error"
                    });
                }

            } catch (exception) {
                document.write(respuesta);
            }

        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        }

    });
}

function enviarDatosJsonHtml(urlServlet, data) {
//////////////////////Ajax//////////////////////////

    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,
        dataType: "json",

        //Envio
        success: function (respuesta) {
            try {

                var valores = eval(respuesta);
                //Si se ha guardado
                if (valores.length === 1) {
                    //mesageDialog
//                    alert(respuesta);
                    $("#htmlcode").val(valores[0]);
                }

            } catch (exception) {
                document.write(respuesta);
            }

        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        }

    });
}

function enviarDatosMostrar(urlServlet, data, isCrear) {
//////////////////////Ajax//////////////////////////

    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
            swal({
                title: "Procesando:",
                text: "Procesando, espere por favor...",
                type: "info",
                width: "auto",
                showLoaderOnConfirm: true
            });
        },
        //Envio
        success: function (respuesta) {
            try {

                var valores = eval(respuesta);
                //Si se ha guardado
                if (valores.length === 1) {
                    //mesageDialog
                    swal({
                        title: "Perfecto:",
                        text: valores[0],
                        type: "success"
                    });
                    if (isCrear === true) {
                        setTimeout(function () {
                            window.opener.mostrardivDetalle();
                        }, 10); // in milliseconds
                        setTimeout(function () {
                            swal.close();
                        }, 1000); // in milliseconds
                    } else {
                        setTimeout(function () {
                            window.opener.mostrardivDetalle();
                            ventanaAtras(window, swal);
                        }, 1000); // in milliseconds                        
                    }

                } else if (valores.length === 2) {
                    //mesageDialog
                    swal({
                        title: valores[0],
                        text: valores[1],
                        type: "error"
                    });
                } else if (valores.length === 3) {
                    //mesageDialog
                    swal({
                        title: valores[0],
                        text: valores[1] + valores[2],
                        type: "error"
                    });
                }
            } catch (exception) {
                document.write(respuesta);
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

function exportarExcelModificar(tabla, filename = '') {

    var downloadLink;
    var dataType = 'application/vnd.ms-excel; charset=UTF-8';
    for (var i = 0; i < tabla.children.length; i++) {
        if (tabla.children[i].className === "tableFloatingHeader") {
            var child = tabla.children[i];
            tabla.removeChild(child);
        }
    }

    var tableHTML = tabla.outerHTML.replace(/ /g, '%20');
    tableHTML = tableHTML.replaceAll("<table", "<table style=\""
            + "font-family: Trebuchet MS, Arial, Helvetica, sans-serif;\n"
            + "    border-collapse: collapse;\n"
            + "    min-width: 100%;\n"
            + "    min-height: 100%;\n"
            + "    box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.08);\"");
    tableHTML = tableHTML.replaceAll("<th", "<th style=\"border: 1px solid #ddd;\n" +
            "    min-width: 100%; \n" +
            "    height: 20px;\n" +
            "    width: auto;    \n" +
            "    padding-left: 10px; \n" +
            "    padding-top: 10px;\n" +
            "    padding-bottom: 10px;\n" +
            "    padding-right: 30px;\n" +
            "    text-align: center;\n" +
            "    background-color: #333333;\n" +
            "    color: white;\n" +
            "    opacity: 0.90;\"");
    tableHTML = tableHTML.replaceAll("<td", "<td style=\"border: 1px solid #ddd;\n" +
            "padding: 8px;\n" +
            "height: 20px;\n" +
            "width: auto;\"");
    var splitTR = tableHTML.split(" ");
    var numeroPares = 0;
    var primerTr = false;

    for (var i = 0; i < splitTR.length; i++) {
        if (splitTR[i].includes("<tr")) {
            if (primerTr === false) {
                splitTR[i] = "";
                primerTr = true;
            } else {
                if (numeroPares % 2 === 0) {
                    splitTR[i] = splitTR[i].replaceAll("<tr", "<tr style=\"background-color: #f2f2f2;" +
                            "height: 10px; \"");
                }
                numeroPares = numeroPares + 1;
            }
        }
    }
    tableHTML = "";
    for (var i = 0; i < splitTR.length; i++) {
        tableHTML += splitTR[i] + " ";
    }

    tableHTML = tableHTML.replaceAll("<tr", "<tr style=\"\"");

    tableHTML = tableHTML.replace(/ /g, '%20');
    tableHTML = tableHTML.replace(/#/g, '%23');
    //tableHTML = tableHTML.replace(/:/g, '%20');
    var cabecera = '<meta http-equiv="content-type" content="application/vnd.ms-excel;" charset="UTF-8">';
    cabecera = cabecera.replace(/ /g, '%20');
    tableHTML = cabecera + tableHTML;
    //tableHTML = escape(tableHTML);
    tableHTML += "</body></html>";
    // Specify file name
    filename = filename ? filename + '.xls' : 'excel_data.xls';

    // Create download link element
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
        var blob = new Blob(['ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

        // Setting the file name
        downloadLink.download = filename;

        //triggering the function
        downloadLink.click();
}
}

function exportarExcelModificarProyecto(tablas, filename = '') {
    var tableHTML = "";
    for (var i = 0; i < tablas.length; i++) {
        var tabla = tablas[i];
        tableHTML += tabla.outerHTML.replace(/ /g, '%20');
    }
    var downloadLink;
    var dataType = 'application/vnd.ms-excel; charset=UTF-8';
//    for (var i = 0; i < tabla.children.length; i++) {
//        if (tabla.children[i].className === "tableFloatingHeader") {
//            var child = tabla.children[i];
//            tabla.removeChild(child);
//        }
//    }


    // var tableHTML = tabla.outerHTML.replace(/ /g, '%20');
    tableHTML = tableHTML.replaceAll("<table", "<table style=\""
            + "font-family: Trebuchet MS, Arial, Helvetica, sans-serif;\n"
            + "    border-collapse: collapse;\n"
            + "    min-width: 100%;\n"
            + "    min-height: 100%;\n"
            + "    box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.08);\"");
    tableHTML = tableHTML.replaceAll("<th", "<th style=\"border: 1px solid #ddd;\n" +
            "    min-width: 100%; \n" +
            "    height: 20px;\n" +
            "    width: auto;    \n" +
            "    padding-left: 10px; \n" +
            "    padding-top: 10px;\n" +
            "    padding-bottom: 10px;\n" +
            "    padding-right: 30px;\n" +
            "    text-align: center;\n" +
            "    background-color: #333333;\n" +
            "    color: white;\n" +
            "    opacity: 0.90;\"");
    tableHTML = tableHTML.replaceAll("<td", "<td style=\"border: 1px solid #ddd;\n" +
            "padding: 8px;\n" +
            "height: 20px;\n" +
            "width: auto;\"");
    var splitTR = tableHTML.split(" ");
    var numeroPares = 0;
    var primerTr = false;

    for (var i = 0; i < splitTR.length; i++) {
        if (splitTR[i].includes("<tr")) {
            if (primerTr === false) {
                splitTR[i] = "";
                primerTr = true;
            } else {
                if (numeroPares % 2 === 0) {
                    splitTR[i] = splitTR[i].replaceAll("<tr", "<tr style=\"background-color: #f2f2f2;" +
                            "height: 10px; \"");
                }
                numeroPares = numeroPares + 1;
            }
        }
    }
    tableHTML = "";
    for (var i = 0; i < splitTR.length; i++) {
        tableHTML += splitTR[i] + " ";
    }

    tableHTML = tableHTML.replaceAll("<tr", "<tr style=\"\"");

    tableHTML = tableHTML.replace(/ /g, '%20');
    tableHTML = tableHTML.replace(/#/g, '%23');
    //tableHTML = tableHTML.replace(/:/g, '%20');
    var cabecera = '<meta http-equiv="content-type" content="application/vnd.ms-excel;" charset="UTF-8">';
    cabecera = cabecera.replace(/ /g, '%20');
    tableHTML = cabecera + tableHTML;
    //tableHTML = escape(tableHTML);
    tableHTML += "</body></html>";
    // Specify file name
    filename = filename ? filename + '.xls' : 'excel_data.xls';

    // Create download link element
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
        var blob = new Blob(['ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

        // Setting the file name
        downloadLink.download = filename;

        //triggering the function
        downloadLink.click();
}
}

function exportarExcel(tabla, filename = '', css) {
    //
    var tabla_id = $(tabla)[0].id;

    $("#" + tabla_id + " img").each(function () {//para poner la ruta de la imagen y asi que se vea en el excel

        //console.log($(this).attr("name"));
        $(this).attr("src", $(this).attr("name"));
        // console.log(this);
    });
    var contadorTh = 0;
    $("#" + tabla_id + " th").each(function () {//borramos los th vacios y así tenemos la referencia de cuantos tds borrar

        if ($(this).html().trim() === "") {

            $(this).remove();
            contadorTh++;

        }
    });
    $("#" + tabla_id + " tr td input").each(function () {//borramos los los input hidden
//        console.log();
        if ($(this).attr('type') === 'hidden') {
            $(this).remove();
        }
    });

    $("#" + tabla_id + " tr td span").each(function () {//borramos los spans ocultos
//        console.log();
        if ($(this).css('display') === 'none') {
            $(this).remove();
        }
    });

    var u = 0;
    //console.log(contadorTh);
    contadorTh = contadorTh - (contadorTh / 2);//por el stactable se duplica

    $("#" + tabla_id + " tr").each(function () {//por cada tr sacamos los tds
        if (u > 1) {
            var contadorTd = contadorTh;

            var tds = $(this).children();

            for (var i = 0; i < tds.length; i++) {//y aqui sacamos el numero de ths eliminados para eliminar tambien los tds
                //console.log(contadorTd);
                if (contadorTd > 0) {
                    //console.log(tds[i]);
                    $(tds[i]).remove();
                    contadorTd--;
                    //console.log(contadorTd);
                }
            }
        }
        u++;
    }
    );

    var downloadLink;
    var dataType = 'application/vnd.ms-excel; charset=UTF-8';
    for (var i = 0; i < tabla.children.length; i++) {
        if (tabla.children[i].className === "tableFloatingHeader") {
            var child = tabla.children[i];
            tabla.removeChild(child);
        }
    }

    var tableHTML = tabla.outerHTML.replace(/ /g, '%20');
    tableHTML = tableHTML.replaceAll("<table", "<table style=\""
            + "font-family: Trebuchet MS, Arial, Helvetica, sans-serif;\n"
            + "    border-collapse: collapse;\n"
            + "    min-width: 100%;\n"
            + "    min-height: 100%;\n"
            + "    box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.08);\"");
    tableHTML = tableHTML.replaceAll("<th", "<th style=\"border: 1px solid #ddd;\n" +
            "    min-width: 100%; \n" +
            "    height: 20px;\n" +
            "    width: auto;    \n" +
            "    padding-left: 10px; \n" +
            "    padding-top: 10px;\n" +
            "    padding-bottom: 10px;\n" +
            "    padding-right: 30px;\n" +
            "    text-align: center;\n" +
            "    background-color: #333333;\n" +
            "    color: white;\n" +
            "    opacity: 0.90;\"");
    tableHTML = tableHTML.replaceAll("<td", "<td style=\"border: 1px solid #ddd;\n" +
            "padding: 8px;\n" +
            "height: 20px;\n" +
            "width: auto;\"");
    var splitTR = tableHTML.split(" ");
    var numeroPares = 0;
    var primerTr = false;

    for (var i = 0; i < splitTR.length; i++) {
        if (splitTR[i].includes("<tr")) {
            if (primerTr === false) {
                splitTR[i] = "";
                primerTr = true;
            } else {
                if (numeroPares % 2 === 0) {
                    splitTR[i] = splitTR[i].replaceAll("<tr", "<tr style=\"background-color: #f2f2f2;" +
                            "height: 10px; \"");
                }
                numeroPares = numeroPares + 1;
            }
        }
    }
    tableHTML = "";
    for (var i = 0; i < splitTR.length; i++) {
        tableHTML += splitTR[i] + " ";
    }

    tableHTML = tableHTML.replaceAll("<tr", "<tr style=\"\"");

    tableHTML = tableHTML.replace(/ /g, '%20');
    tableHTML = tableHTML.replace(/#/g, '%23');
    //tableHTML = tableHTML.replace(/:/g, '%20');
    var cabecera = '<meta http-equiv="content-type" content="application/vnd.ms-excel;" charset="UTF-8">';
    cabecera = cabecera.replace(/ /g, '%20');
    tableHTML = cabecera + tableHTML;
    //tableHTML = escape(tableHTML);
    tableHTML += "</body></html>";
    // Specify file name
    filename = filename ? filename + '.xls' : 'excel_data.xls';

    // Create download link element
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
        var blob = new Blob(['ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

        // Setting the file name
        downloadLink.download = filename;

        //triggering the function
        downloadLink.click();
    }
    window.location.reload();
}

function exportarExcelComparativoPrecios(tabla) {
    //
    var tabla_id = $(tabla)[0].id;
    //lo que hace actualmente es borrarla
    $("#" + tabla_id + " img").each(function () {//para poner la ruta de la imagen y asi que se vea en el excel
        $(this).parent().parent().remove();
    });
    var indice = 0;
    $("#" + tabla_id + " thead tr:nth-child(1) th").each(function () {//borramos los th vacios y así tenemos la referencia de cuantos tds borrar
        //console.log($(this)[0]);
        if (indice === 0) {
            //$(this).attr("colspan","4");
            $(this).after("<th></th><th></th><th></th>");
        }
//       // $(this).remove();
        indice++;
        if ($(this).html().trim() === "") {
            //$(this).remove();
        } else {
            $(this).children()[0].remove();
            $(this).after("<th></th><th></th>");
            $(this).html($(this).html().trim());
        }
    });


    var contadorTh = 0;
    $("#" + tabla_id + " tr:nth-child(2) th").each(function () {//borramos los th vacios y así tenemos la referencia de cuantos tds borrar
        //console.log($(this)[0]);
        if ($(this).html().trim() === "") {
            $(this).remove();
            contadorTh++;
        } else
        if ($(this).html().trim() === "Imagen") {//y el th de imagen
            $(this).remove();
        }
    });

    $("#" + tabla_id + " tr td input").each(function () {//borramos los los input hidden
        if ($(this).attr('type') === 'hidden') {
            $(this).remove();
        } else {
            var valor = $(this).val();
            $(this).parent().html("<output>" + valor + "</output>");
        }
    });

    $("#" + tabla_id + " tr td output").each(function () {//busco output modelo para rellenarlo
        var valor = $(this).val();
        if (valor.trim() === "") {
            $(this).val("*");
        }
    });
//
    $("#" + tabla_id + " tr td span").each(function () {//borramos los spans ocultos
//        console.log();
        if ($(this).css('display') === 'none') {
            $(this).remove();
        }
    });
//
    //var u = 0;
    //console.log(contadorTh);
    //contadorTh = contadorTh - (contadorTh / 2);//por el stactable se duplica

    $("#" + tabla_id + " tr").each(function () {//por cada tr sacamos los tds
        //if (u > 1) {
        var contadorTd = contadorTh;
        var tds = $(this).children();
        //console.log(tds);
        for (var i = 0; i < tds.length; i++) {//y aqui sacamos el numero de ths eliminados para eliminar tambien los tds
            //console.log(contadorTd);
            if (contadorTd > 0 && $(tds[i]).prop("tagName") !== "TH") {
                // console.log(tds[i]);
                $(tds[i]).remove();
                contadorTd--;
                //console.log(contadorTd);
            }
        }
        //}
        //u++;
    }
    );
//
    //var downloadLink;
    // var dataType = 'application/vnd.ms-excel; charset=UTF-8';
    for (var i = 0; i < tabla.children.length; i++) {
        if (tabla.children[i].className === "tableFloatingHeader") {
            var child = tabla.children[i];
            tabla.removeChild(child);
        }
    }

    var tableHTML = tabla.outerHTML.replace(/ /g, '%20');
    tableHTML = tableHTML.replaceAll("<table", "<table style=\""
            + "font-family: Trebuchet MS, Arial, Helvetica, sans-serif;\n"
            + "    border-collapse: collapse;\n"
            + "    min-width: 100%;\n"
            + "    min-height: 100%;\n"
            + "    box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.08);\"");
    tableHTML = tableHTML.replaceAll("<th", "<th style=\"border: 1px solid #ddd;\n" +
            "    min-width: 100%; \n" +
            "    height: 20px;\n" +
            "    width: auto;    \n" +
            "    padding-left: 10px; \n" +
            "    padding-top: 10px;\n" +
            "    padding-bottom: 10px;\n" +
            "    padding-right: 30px;\n" +
            "    text-align: center;\n" +
            "    background-color: #333333;\n" +
            "    color: white;\n" +
            "    opacity: 0.90;\"");
    tableHTML = tableHTML.replaceAll("<td", "<td style=\"border: 1px solid #ddd;\n" +
            "padding: 8px;\n" +
            "height: 20px;\n" +
            "width: auto;\"");
    var splitTR = tableHTML.split(" ");
    var numeroPares = 0;
    var primerTr = false;

    for (var i = 0; i < splitTR.length; i++) {
        if (splitTR[i].includes("<tr")) {
            if (primerTr === false) {
                splitTR[i] = "";
                primerTr = true;
            } else {
                if (numeroPares % 2 === 0) {
                    splitTR[i] = splitTR[i].replaceAll("<tr", "<tr style=\"background-color: #f2f2f2;" +
                            "height: 10px; \"");
                }
                numeroPares = numeroPares + 1;
            }
        }
    }
    tableHTML = "";
    for (var i = 0; i < splitTR.length; i++) {
        tableHTML += splitTR[i] + " ";
    }

    tableHTML = tableHTML.replaceAll("<tr", "<tr style=\"\"");

    tableHTML = tableHTML.replace(/ /g, '%20');
    tableHTML = tableHTML.replace(/#/g, '%23');
    //tableHTML = tableHTML.replace(/:/g, '%20');
    var cabecera = '<meta http-equiv="content-type" content="application/vnd.ms-excel;" charset="UTF-8">';
    cabecera = cabecera.replace(/ /g, '%20');
    tableHTML = cabecera + tableHTML;
    tableHTML = escape(tableHTML);
    tableHTML += "</body></html>";

//window.location.reload();
}

function exportarExcelBorrar(tabla) {
    //
    var tabla_id = $(tabla)[0].id;

    //lo que hace actualmente es borrarla
    $("#" + tabla_id + " tbody tr td img").each(function () {//para poner la ruta de la imagen y asi que se vea en el excel
        //console.log($($(this).parent().parent()[0]).prop("tagName"));
        if ($($(this).parent().parent()[0]).prop("tagName") !== "TR") {

            $(this).parent().parent().remove();
        } else {
            let posibleTD = $(this).parent();
            let hijosTD = posibleTD.children();
            let titleIMG = "";
            for (var i = 0; i < hijosTD.length; i++) {
                if ($(this).prop("tagName") === "IMG") {
                    titleIMG = $(this).attr("title");
                    $(this).parent().html(titleIMG);
                    $(this).remove();

                }

            }

        }

    });

    var contadorTh = 0;
    $("#" + tabla_id + " thead:visible tr th").each(function () {//borramos los th vacios y así tenemos la referencia de cuantos tds borrar
        if ($(this).html().trim() === "") {
            $(this).remove();
            contadorTh++;
        } else
        if ($(this).html().trim() === "Imagen") {//y el th de imagen
            $(this).remove();
        }
    });

//    console.log(contadorTh);
    $("#" + tabla_id + " tr td input").each(function () {//borramos los los input hidden
        if ($(this).attr('type') === 'hidden') {
            $(this).remove();
        } else {

            var valor = $(this).val();
            $(this).parent().html("<output>" + valor + "</output>");
        }
    });

//
    $("#" + tabla_id + " tr td span").each(function () {//borramos los spans ocultos
//        console.log();
        if ($(this).css('display') === 'none') {
            $(this).remove();
        }
    });
//

    //var u = 0;
    //console.log(contadorTh);
    //contadorTh = contadorTh - (contadorTh / 2);//por el stactable se duplica

    $("#" + tabla_id + " tr").each(function () {//por cada tr sacamos los tds
        //if (u > 1) {
        var contadorTd = contadorTh;
//        console.log(contadorTd);
        var tds = $(this).children();
        //console.log(tds);
        for (var i = 0; i < tds.length; i++) {//y aqui sacamos el numero de ths eliminados para eliminar tambien los tds
            //console.log(contadorTd);
            //console.log($(tds[i]).prop("tagName"));
            if (contadorTd > 0 && $(tds[i]).prop("tagName") !== "TH") {
                // console.log(tds[i]);
                //console.log($(tds[i]).text());
                $(tds[i]).remove();
                contadorTd--;
                //console.log(contadorTd);
            }
        }
        //}
        //u++;
    }
    );

    //var downloadLink;
    // var dataType = 'application/vnd.ms-excel; charset=UTF-8';
    for (var i = 0; i < tabla.children.length; i++) {
        if (tabla.children[i].className === "tableFloatingHeader") {
            var child = tabla.children[i];
            //console.log(child);
            tabla.removeChild(child);
        }
    }

    var tableHTML = tabla.outerHTML.replace(/ /g, '%20');
    tableHTML = tableHTML.replaceAll("<table", "<table style=\""
            + "font-family: Trebuchet MS, Arial, Helvetica, sans-serif;\n"
            + "    border-collapse: collapse;\n"
            + "    min-width: 100%;\n"
            + "    min-height: 100%;\n"
            + "    box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.08);\"");
    tableHTML = tableHTML.replaceAll("<th", "<th style=\"border: 1px solid #ddd;\n" +
            "    min-width: 100%; \n" +
            "    height: 20px;\n" +
            "    width: auto;    \n" +
            "    padding-left: 10px; \n" +
            "    padding-top: 10px;\n" +
            "    padding-bottom: 10px;\n" +
            "    padding-right: 30px;\n" +
            "    text-align: center;\n" +
            "    background-color: #333333;\n" +
            "    color: white;\n" +
            "    opacity: 0.90;\"");
    tableHTML = tableHTML.replaceAll("<td", "<td style=\"border: 1px solid #ddd;\n" +
            "padding: 8px;\n" +
            "height: 20px;\n" +
            "width: auto;\"");
    var splitTR = tableHTML.split(" ");
    var numeroPares = 0;
    var primerTr = false;

    for (var i = 0; i < splitTR.length; i++) {
        if (splitTR[i].includes("<tr")) {
            if (primerTr === false) {
                splitTR[i] = "";
                primerTr = true;
            } else {
                if (numeroPares % 2 === 0) {
                    splitTR[i] = splitTR[i].replaceAll("<tr", "<tr style=\"background-color: #f2f2f2;" +
                            "height: 10px; \"");
                }
                numeroPares = numeroPares + 1;
            }
        }
    }
    tableHTML = "";
    for (var i = 0; i < splitTR.length; i++) {
        tableHTML += splitTR[i] + " ";
    }

    tableHTML = tableHTML.replaceAll("<tr", "<tr style=\"\"");

    tableHTML = tableHTML.replace(/ /g, '%20');
    tableHTML = tableHTML.replace(/#/g, '%23');
    //tableHTML = tableHTML.replace(/:/g, '%20');
    var cabecera = '<meta http-equiv="content-type" content="application/vnd.ms-excel;" charset="UTF-8">';
    cabecera = cabecera.replace(/ /g, '%20');
    tableHTML = cabecera + tableHTML;
    tableHTML = escape(tableHTML);
    tableHTML += "</body></html>";
}

function exportarExcelXLSX(nombreArchivo, nombreHoja, tableID) {
//$('#table_1').tableExport({type:'excel', fileName: new Date().getTime(), escape:'false', ignoreColumn:'[5]'});
//$('#table_1').tableExport({type:'excel', fileName: new Date().getTime(), escape:'false', ignoreColumn:'[3]', excelstyles: ['background-color', 'color', 'font-weight', 'border']});
    let tabla = document.querySelector(tableID);
    let idSin = tableID.split("#")[1];

    exportarExcelComparativoPrecios(tabla);
    setTimeout(function () {
        let tabla2 = document.querySelector(tableID);

        let tableExport = new TableExport(tabla2, {
            type: 'excel',
            exportButtons: false, // No queremos botones
            filename: nombreArchivo, //Nombre del archivo de Excel
            sheetname: nombreHoja //Título de la hoja
                    //excelstyles: ['background-color', 'color', 'font-weight', 'border']
        });
        let datos = tableExport.getExportData();
        //console.log(datos);
        //console.log(datos['tablaCompComparativoPrecio']['xlsx']);
        //let preferenciasDocumento = datos.tablaCompComparativoPrecio.xlsx;
        // console.log(datos[idSin]['xlsx']);
        //console.log(datos.tablaCompComparativoPrecio.xlsx);

        let preferenciasDocumento = datos[idSin]['xlsx'];

        tableExport.export2file(preferenciasDocumento.data, preferenciasDocumento.mimeType, preferenciasDocumento.filename, preferenciasDocumento.fileExtension, preferenciasDocumento.merges, preferenciasDocumento.RTL, preferenciasDocumento.sheetname);
        window.location.reload();
    }, 200);
    //return preferenciasDocumento;
}

function exportarExcelXLSXStilos(tableID, nombreArchivo, nombreHoja) {

    let tabla2 = document.querySelector(tableID);
    //exportarExcelComparativoPrecios(tabla2);
    exportarExcelBorrar(tabla2);
    setTimeout(function () {
        // let tabla = document.querySelector(tableID);

        /* Object for the excel workbook data */
        class Workbook {
            constructor() {
                this.SheetNames = [];
                this.Sheets = {};
            }
        }

        /* function for downloading the excel file */
        function s2ab(s) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i = 0; i !== s.length; ++i)
                view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }

// create the worksheet data
        var ws_data = {};
        let idSin = tableID.split("#")[1];

        var rows = document.getElementById(idSin).rows.length;

        var cols = $(tableID + " tr:last td").length;
//console.log(rows + " " + cols);
        var range = {s: {c: 0, r: 0}, e: {c: cols, r: rows}}; // worksheet cell range 
        ws_data['!ref'] = XLSX.utils.encode_range(range); // set cell the range



        var indiceTH = 0;
        $(tableID + " thead tr th").each(function () {
            // console.log($(this).text());
            let valor = $(this).text().trim();
            let cell = {// create cell
                v: valor, // value
                s: {// style
                    fill: {
                        fgColor: {rgb: "333333"}
                        //bgcolor: {rgb: "333333"}
                    }, font: {
                        name: "Calibri",
                        sz: 14,
                        bold: true,
                        color: {rgb: "FFFFFF"}
                    }, border: {
                        top: {style: 'thin', color: {rgb: "FFFFFF"}},
                        bottom: {style: 'thin', color: {rgb: "FFFFFF"}},
                        left: {style: 'thin', color: {rgb: "FFFFFF"}},
                        right: {style: 'thin', color: {rgb: "FFFFFF"}}
                    }
                }
            };

            ws_data[XLSX.utils.encode_cell({c: indiceTH, r: 0})] = cell; // add the cell to the sheet data
            indiceTH++;
        });
        // console.log(indiceTH);
        var indiceTD = 0;
        var limiteTD = 1;
        $(tableID + " tbody tr td").each(function () {
            var elemento = $(this).text();
            //console.log(elemento);
            let valor = elemento;
            if (valor.trim() === "") {
                valor = "*";
            }
            if (valor !== undefined) {
                let color = "4F4C4C";//$(this).css("color");
                // console.log(valor);
                //let color = $(elemento).css("color");
                //console.log($(elemento).css("color"));

                let cell = {// create cell
                    v: valor, // value
                    s: {// style
                        fill: {
                            fgColor: {rgb: "E6E6E6"}//,
                            // bgcolor: {rgb: "FFFFFF"}
                        }, font: {
                            name: "Calibri",
                            sz: 12,
                            bold: false,
                            color: {rgb: color}
                        }, border: {
                            top: {style: 'thin', color: {rgb: "000000"}},
                            bottom: {style: 'thin', color: {rgb: "000000"}},
                            left: {style: 'thin', color: {rgb: "000000"}},
                            right: {style: 'thin', color: {rgb: "000000"}}
                        }
                    }
                };

                ws_data[XLSX.utils.encode_cell({c: indiceTD, r: limiteTD})] = cell; // add the cell to the sheet data
                indiceTD++;
                //limiteTD++;
                if (indiceTD === indiceTH) {
                    indiceTD = 0;
                    limiteTD++;
                }
            }
        });
//
//console.log(indiceTD + " - " + limiteTD);


// create workbook and download
        var wb = new Workbook();
        wb.SheetNames.push(nombreHoja); // create new worksheet
        wb.Sheets[nombreHoja] = ws_data; // set workseet data to the cell data
        var wbout = XLSX.write(wb, {bookType: 'xlsx', bookSST: true, type: 'binary'}); //workbook output
        saveAs(new Blob([s2ab(wbout)], {type: "application/octet-stream"}), nombreArchivo + ".xlsx"); // save workbook
        window.location.reload();
    }, 200);

}

function exportarExcelXLSXStilosMultiple(tablesID, nombreArchivo, nombreHoja) {

    for (var i = 0; i < tablesID.length; i++) {
        let tabla2 = document.querySelector(tablesID[i]);
        //exportarExcelComparativoPrecios(tabla2);
        exportarExcelBorrar(tabla2);
    }

    setTimeout(function () {
        // let tabla = document.querySelector(tableID);

        /* Object for the excel workbook data */
        class Workbook {
            constructor() {
                this.SheetNames = [];
                this.Sheets = {};
            }
        }

        /* function for downloading the excel file */
        function s2ab(s) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i = 0; i !== s.length; ++i)
                view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }

// create the worksheet data
        var ws_data = {};
        var rows = 0;
        var cols = 0;
        for (var i = 0; i < tablesID.length; i++) {
            let idSin = tablesID[i].split("#")[1];

            rows += document.getElementById(idSin).rows.length;

            cols += $(tablesID[i] + " tr:last td").length;
        }

//console.log(rows + " " + cols);
        var range = {s: {c: 0, r: 0}, e: {c: cols, r: rows}}; // worksheet cell range 
        ws_data['!ref'] = XLSX.utils.encode_range(range); // set cell the range

        var colGeneral = 0;
        for (var i = 0; i < tablesID.length; i++) {
            var indiceTH = 0;
            $(tablesID[i] + " thead tr th").each(function () {
                // console.log($(this).text());
                let valor = $(this).text().trim();
                let cell = {// create cell
                    v: valor, // value
                    s: {// style
                        fill: {
                            fgColor: {rgb: "333333"}
                            //bgcolor: {rgb: "333333"}
                        }, font: {
                            name: "Calibri",
                            sz: 14,
                            bold: true,
                            color: {rgb: "FFFFFF"}
                        }, border: {
                            top: {style: 'thin', color: {rgb: "FFFFFF"}},
                            bottom: {style: 'thin', color: {rgb: "FFFFFF"}},
                            left: {style: 'thin', color: {rgb: "FFFFFF"}},
                            right: {style: 'thin', color: {rgb: "FFFFFF"}}
                        }
                    }
                };

                ws_data[XLSX.utils.encode_cell({c: indiceTH, r: colGeneral})] = cell; // add the cell to the sheet data
                indiceTH++;
            });
            // console.log(indiceTH);
            var indiceTD = 0;
            limiteTD = colGeneral + 1;
            $(tablesID[i] + " tbody tr td").each(function () {
                var elemento = $(this).text();
                //console.log(elemento);
                let valor = elemento;
                if (valor.trim() === "") {
                    valor = "*";
                }
                if (valor !== undefined) {
                    let color = "4F4C4C";//$(this).css("color");
                    // console.log(valor);
                    //let color = $(elemento).css("color");
                    //console.log($(elemento).css("color"));

                    let cell = {// create cell
                        v: valor, // value
                        s: {// style
                            fill: {
                                fgColor: {rgb: "E6E6E6"}//,
                                // bgcolor: {rgb: "FFFFFF"}
                            }, font: {
                                name: "Calibri",
                                sz: 12,
                                bold: false,
                                color: {rgb: color}
                            }, border: {
                                top: {style: 'thin', color: {rgb: "000000"}},
                                bottom: {style: 'thin', color: {rgb: "000000"}},
                                left: {style: 'thin', color: {rgb: "000000"}},
                                right: {style: 'thin', color: {rgb: "000000"}}
                            }
                        }
                    };

                    ws_data[XLSX.utils.encode_cell({c: indiceTD, r: limiteTD})] = cell; // add the cell to the sheet data
                    indiceTD++;
                    //limiteTD++;
                    if (indiceTD === indiceTH) {
                        indiceTD = 0;
                        limiteTD++;
                    }
                }
            });
            colGeneral = limiteTD;
        }
//
//console.log(indiceTD + " - " + limiteTD);


// create workbook and download
        var wb = new Workbook();
        wb.SheetNames.push(nombreHoja); // create new worksheet
        wb.Sheets[nombreHoja] = ws_data; // set workseet data to the cell data
        var wbout = XLSX.write(wb, {bookType: 'xlsx', bookSST: true, type: 'binary'}); //workbook output
        saveAs(new Blob([s2ab(wbout)], {type: "application/octet-stream"}), nombreArchivo + ".xlsx"); // save workbook
        window.location.reload();
    }, 200);

}


function exportarExcelXLSXStilosComparativo(tableID, nombreArchivo, nombreHoja) {

    let tabla2 = document.querySelector(tableID);
    exportarExcelComparativoPrecios(tabla2);

    setTimeout(function () {
        // let tabla = document.querySelector(tableID);

        /* Object for the excel workbook data */
        class Workbook {
            constructor() {
                this.SheetNames = [];
                this.Sheets = {};
            }
        }

        /* function for downloading the excel file */
        function s2ab(s) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i = 0; i !== s.length; ++i)
                view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }

// create the worksheet data
        var ws_data = {};
        let idSin = tableID.split("#")[1];

        var rows = document.getElementById(idSin).rows.length;

        var cols = $(tableID + " tr:last td").length;

        var range = {s: {c: 0, r: 0}, e: {c: cols, r: rows}}; // worksheet cell range 
        ws_data['!ref'] = XLSX.utils.encode_range(range); // set cell the range

        var indiceTHSuperior = 0;

        $(tableID + " thead tr:nth-child(1) th").each(function () {
            //console.log($(this)[0]);
            let valor = $(this).html();
            let cell = {// create cell
                v: valor, // value
                s: {// style
                    fill: {
                        fgColor: {rgb: "333333"}
                        //bgcolor: {rgb: "333333"}
                    }, font: {
                        name: "Calibri",
                        sz: 14,
                        bold: true,
                        color: {rgb: "FFFFFF"}
                    }, border: {
                        top: {style: 'thin', color: {rgb: "FFFFFF"}},
                        bottom: {style: 'thin', color: {rgb: "FFFFFF"}},
                        left: {style: 'thin', color: {rgb: "FFFFFF"}},
                        right: {style: 'thin', color: {rgb: "FFFFFF"}}
                    }
                }
            };

            ws_data[XLSX.utils.encode_cell({c: indiceTHSuperior, r: 0})] = cell; // add the cell to the sheet data
            indiceTHSuperior++;
        });

        var indiceTH = 0;
        $(tableID + " thead tr:nth-child(2) th").each(function () {
            //console.log($(this)[0]);
            let valor = $(this).html();
            let cell = {// create cell
                v: valor, // value
                s: {// style
                    fill: {
                        fgColor: {rgb: "333333"}
                        //bgcolor: {rgb: "333333"}
                    }, font: {
                        name: "Calibri",
                        sz: 14,
                        bold: true,
                        color: {rgb: "FFFFFF"}
                    }, border: {
                        top: {style: 'thin', color: {rgb: "FFFFFF"}},
                        bottom: {style: 'thin', color: {rgb: "FFFFFF"}},
                        left: {style: 'thin', color: {rgb: "FFFFFF"}},
                        right: {style: 'thin', color: {rgb: "FFFFFF"}}
                    }
                }
            };

            ws_data[XLSX.utils.encode_cell({c: indiceTH, r: 1})] = cell; // add the cell to the sheet data
            indiceTH++;
        });
        // console.log(indiceTH);
        var indiceTD = 0;
        var limiteTD = 2;
        $(tableID + " tbody tr td").each(function () {
            var elemento = $(this).children()[0];
            // console.log($(elemento).val());
            let valor = $(elemento).val();
            if (valor !== undefined) {
                let color = "2f2f2f";
                if ($(elemento).css("color") === "rgb(255, 0, 0)") {
                    color = "FF0000";
                } else if ($(elemento).css("color") === "rgb(0, 128, 0)") {
                    color = "008000";
                }
                //let color = $(elemento).css("color");
                //console.log($(elemento).css("color"));

                let cell = {// create cell
                    v: valor, // value
                    s: {// style
                        fill: {
                            fgColor: {rgb: "E6E6E6"}//,
                            // bgcolor: {rgb: "FFFFFF"}
                        }, font: {
                            name: "Calibri",
                            sz: 12,
                            bold: false,
                            color: {rgb: color}
                        }, border: {
                            top: {style: 'thin', color: {rgb: "000000"}},
                            bottom: {style: 'thin', color: {rgb: "000000"}},
                            left: {style: 'thin', color: {rgb: "000000"}},
                            right: {style: 'thin', color: {rgb: "000000"}}
                        }
                    }
                };
                //console.log(indiceTD + " - " + limiteTD);
                ws_data[XLSX.utils.encode_cell({c: indiceTD, r: limiteTD})] = cell; // add the cell to the sheet data
                indiceTD++;
                //limiteTD++;
                if (indiceTD === indiceTH) {
                    indiceTD = 0;
                    limiteTD++;
                }
            }
        });




// create workbook and download
        var wb = new Workbook();
        wb.SheetNames.push(nombreHoja); // create new worksheet
        wb.Sheets[nombreHoja] = ws_data; // set workseet data to the cell data
        var wbout = XLSX.write(wb, {bookType: 'xlsx', bookSST: true, type: 'binary'}); //workbook output
        saveAs(new Blob([s2ab(wbout)], {type: "application/octet-stream"}), nombreArchivo + ".xlsx"); // save workbook
        window.location.reload();
    }, 200);

}

function exportarExcelMultiple(listaTablas, filename = '') {

    var downloadLink;
    var dataType = 'application/vnd.ms-excel; charset=UTF-8';
    //var template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>';
    //var base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s)));};
    var tableHTML = "";
    //console.log(listaTablas.length);
    for (var e = 0; e < listaTablas.length; e++) {
        var tabla = listaTablas[e];
        //console.log(tabla);
        for (var i = 0; i < tabla.children.length; i++) {
            if (tabla.children[i].className === "tableFloatingHeader") {
                var child = tabla.children[i];
                tabla.removeChild(child);
            }
        }
        tableHTML += tabla.outerHTML.replace(/ /g, '%20');
    }


    var cabecera = '<meta http-equiv="content-type" content="application/vnd.ms-excel;" charset="UTF-8"> <meta charset="UTF-8">';
    tableHTML = cabecera + tableHTML;
//    tableHTML = tableHTML.replace(/á/g, 'a');
//    tableHTML = tableHTML.replace(/é/g, 'e');
//    tableHTML = tableHTML.replace(/í/g, 'i');
//    tableHTML = tableHTML.replace(/ó/g, 'o');
//    tableHTML = tableHTML.replace(/ú/g, 'u');
    //tableHTML = tableHTML.replace("Ã³", 'o');
    //console.log(tableHTML);

    // Specify file name
    filename = filename ? filename + '.xls' : 'excel_data.xls';

    // Create download link element
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
        var blob = new Blob(['ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

        // Setting the file name
        downloadLink.download = filename;

        //triggering the function
        downloadLink.click();
}
}

function exportarExcelMultipleNoAdmin(listaTablas, filename = '') {
//todo esto de momento solo sirve para proyectos modificar
//guardo el body entero para luego restaurarlo
    //var bodyPagOriginal = $("body").html();

    var downloadLink;
    var dataType = 'application/vnd.ms-excel; charset=UTF-8';
    var tableHTML = "";
    for (var e = 0; e < listaTablas.length; e++) {
        //console.log(listaTablas[e]);
        var tabla = listaTablas[e];
        if (tabla.id === "tablaProyectoVenta") {
            //console.log($("#" + tabla.id + " tr"));
            var inputRef = "<!--Referencia-->";//18;
            var textareaDesc = "<!--Descripción-->";//19;
            var inputCant = "<!--Cantidad-->";//20;
            var inputPrecio = "<!--Precio-->";//21;
            var inputDescuento = "<!--Descuento-->";//22;
            var outImporte = "<!--Importe-->";//23;

            var lista = new Array;
            lista.push(inputRef);
            lista.push(inputCant);
            lista.push(inputPrecio);
            lista.push(inputDescuento);
            var listaText = new Array;
            listaText.push(textareaDesc);
            listaText.push(outImporte);
            //var numIncrementar = 13;

            $("#" + tabla.id + " tr td img").each(function () {//para poner la ruta de la imagen y asi que se vea en el excel

                //console.log($(this).attr("name"));
                $(this).attr("src", $(this).attr("name"));
                // console.log(this);
            });


            //bucle para inputs
            for (var u = 0; u < lista.length; u++) {
                let num = lista[u];
                for (var i = 0; i < $("#" + tabla.id + " tr td").length; i++) {
                    let td = $("#" + tabla.id + " tr td")[i];
                    //console.log(td);
                    let t = $(td).html();
                    //console.log(t.includes(""));
                    //console.log(i + " - " + num);
                    if (t.includes(num) && $("#" + tabla.id + " tr td")[i] !== undefined) {
                        //console.log($("#" + tabla.id + " tr td")[i]);
                        //console.log($(tdRef)[0]);
                        //console.log($(tdRef).children()[0]);
                        var input = $(td).children()[0];
                        //console.log(input);
                        if ($(input).val() !== undefined) {
                            // console.log($(input).val());
                            var valorInput = $(input).val();
                            $(input).remove();
                            $(td).html(valorInput);
                            //num = num + numIncrementar;
                        }
                    }

                }
            }
            //bucle para textArea
            for (var u = 0; u < listaText.length; u++) {
                let num = listaText[u];
                for (var i = 0; i < $("#" + tabla.id + " tr td").length; i++) {
                    let td = $("#" + tabla.id + " tr td")[i];
                    let t = $(td).html();
                    if (t.includes(num) && $("#" + tabla.id + " tr td")[i] !== undefined) {
                        //console.log($("#" + tabla.id + " tr td")[inputRef]);
                        //console.log($(tdRef).children()[0]);
                        var input = $(td).children()[0];
                        if ($(input).val() !== undefined) {
                            //console.log($(input).html());
                            var valorInput = $(input).html();
                            $(input).remove();
                            $(td).html(valorInput);
                            //num = num + numIncrementar;
                        }
                    }
                }
            }

            $("#" + tabla.id + " th").each(function () {//borramos los th display none

                if ($(this).css("display") === "none") {
                    $(this).remove();
                }
            });
            $("#" + tabla.id + " tr td").each(function () {//borramos los td display none

                if ($(this).css("display") === "none") {
                    $(this).remove();
                }
            });
            var contadorTh = 0;
            $("#" + tabla.id + " th").each(function () {//borramos los th vacios y así tenemos la referencia de cuantos tds borrar

                if ($(this).html().trim() === "") {

                    $(this).remove();
                    contadorTh++;

                }
            });
            var u = 0;
            //console.log(contadorTh);
            //contadorTh = contadorTh - (contadorTh / 2);//por el stactable se duplica



            $("#" + tabla.id + " tr").each(function () {//por cada tr sacamos los tds
                if (u > 1) {
                    var contadorTd = contadorTh;

                    var tds = $(this).children();

                    for (var i = 0; i < tds.length; i++) {//y aqui sacamos el numero de ths eliminados para eliminar tambien los tds
                        //console.log(contadorTd);
                        if (contadorTd > 0) {
                            //console.log(tds[i]);
                            $(tds[i]).remove();
                            contadorTd--;
                            //console.log(contadorTd);
                        }
                    }
                }
                u++;
            });

        } else {//tarifas
            //console.log($("#" + tabla.id + " tr"));
            var nTarifa = 9;
            var nPrecioTarifa = 10;
            var nCantidad = 11;
            var nPrecio = 12;
            var nImporte = 13;

            var lista = new Array();

            lista.push(nTarifa);
            lista.push(nPrecioTarifa);

            var listaText = new Array();

            listaText.push(nPrecio);
            listaText.push(nImporte);

            for (var l = 0; l < lista.length; l++) {//dos selects

                var num = lista[l];
                for (var i = 0; i < $("#" + tabla.id + " tr td").length; i++) {
                    if ($("#" + tabla.id + " tr td")[num] !== undefined) {
                        //console.log($("#" + tabla.id + " tr td")[n]);
                        var tdSelect = $("#" + tabla.id + " tr td")[num];
                        //console.log($(tdSelect).children()[0]);
                        var select = $(tdSelect).children()[0];
                        //console.log($(select).val());
                        var valueSelect = $(select).val();
                        var options = $(select).children();
                        var textOption;
                        for (var u = 0; u < options.length; u++) {
                            var option = $(options)[u];
                            //console.log($(option).val());
                            if ($(option).val() === valueSelect) {
                                textOption = $(option).text();
                                //console.log($(option).text());
                            }
                        }
                        $(select).remove();
                        $(tdSelect).html(textOption);
                    }
                    num = num + 7;
                }
            }

            //bucle para textArea
            for (var u = 0; u < listaText.length; u++) {
                var num = listaText[u];
                for (var i = 0; i < $("#" + tabla.id + " tr td").length; i++) {
                    if ($("#" + tabla.id + " tr td")[num] !== undefined) {
                        //console.log($("#" + tabla.id + " tr td")[inputRef]);
                        var tdRef = $("#" + tabla.id + " tr td")[num];
                        //console.log($(tdRef).children()[0]);
                        var input = $(tdRef).children()[0];
                        if ($(input).val() !== undefined) {
                            //console.log($(input).html());
                            var valorInput = $(input).html();
                            $(input).remove();
                            $(tdRef).html(valorInput);
                        }
                    }
                    num = num + 7;
                }
            }

            //para cantidad
            for (var i = 0; i < $("#" + tabla.id + " tr td").length; i++) {
                //console.log($("#" + tabla.id + " tr td"));
                if ($("#" + tabla.id + " tr td")[nCantidad] !== undefined) {
                    //console.log($("#" + tabla.id + " tr td")[n]);
                    var tdInput = $("#" + tabla.id + " tr td")[nCantidad];
                    //console.log($(tdInput).children()[0]);
                    var input = $(tdInput).children()[0];
                    var valorInput = $(tdInput).children()[0].value;
                    //console.log(valorInput);
                    $(input).remove();
                    $(tdInput).html(valorInput);
                    //var selectSelected = $(select).s
                }
                nCantidad = nCantidad + 7;
            }

            var contadorTh = 0;
            $("#" + tabla.id + " th").each(function () {//borramos los th vacios y así tenemos la referencia de cuantos tds borrar

                if ($(this).html().trim() === "") {

                    $(this).remove();
                    contadorTh++;

                }
            });
            var u = 0;
            //console.log(contadorTh);
            //contadorTh = contadorTh - (contadorTh / 2);//por el stactable se duplica

            $("#" + tabla.id + " tr").each(function () {//por cada tr sacamos los tds
                if (u > 1) {
                    var contadorTd = contadorTh;

                    var tds = $(this).children();

                    for (var i = 0; i < tds.length; i++) {//y aqui sacamos el numero de ths eliminados para eliminar tambien los tds
                        //console.log(contadorTd);
                        if (contadorTd > 0) {
                            //console.log(tds[i]);
                            $(tds[i]).remove();
                            contadorTd--;
                            //console.log(contadorTd);
                        }
                    }
                }
                u++;
            });
        }
        for (var i = 0; i < tabla.children.length; i++) {
            if (tabla.children[i].className === "tableFloatingHeader") {
                var child = tabla.children[i];
                tabla.removeChild(child);
            }

        }
        //bucle para borrar inputs y textareas
        for (var i = 0; i < $("#" + tabla.id + " tr td").length; i++) {
            if ($("#" + tabla.id + " tr td")[i] !== undefined) {
                //console.log($("#" + tabla.id + " tr td")[inputRef]);
                var tdRef = $("#" + tabla.id + " tr td")[i];
                //console.log($(tdRef).children()[0]);
                var input = $(tdRef).children()[0];

                //console.log($(input).html());
                $(input).remove();

            }
        }

        //console.log(tableHTML);
        tableHTML += tabla.outerHTML.replace(/ /g, '%20');
        tableHTML = tableHTML.replace(/#/g, '%23');




    }

    tableHTML = tableHTML.replaceAll("<table", "<table style=\""
            + "font-family: Trebuchet MS, Arial, Helvetica, sans-serif;\n"
            + "    border-collapse: collapse;\n"
            + "    min-width: 100%;\n"
            + "    min-height: 100%;\n"
            + "    box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.08);\"");
    tableHTML = tableHTML.replaceAll("<th", "<th style=\"border: 1px solid #ddd;\n" +
            "    min-width: 100%; \n" +
            "    height: 20px;\n" +
            "    width: auto;    \n" +
            "    padding-left: 10px; \n" +
            "    padding-top: 10px;\n" +
            "    padding-bottom: 10px;\n" +
            "    padding-right: 30px;\n" +
            "    text-align: center;\n" +
            "    background-color: #333333;\n" +
            "    color: white;\n" +
            "    opacity: 0.90;\"");
    tableHTML = tableHTML.replaceAll("<td", "<td style=\"border: 1px solid #ddd;\n" +
            "padding: 8px;\n" +
            "height: 20px;\n" +
            "width: auto;\"");
    var splitTR = tableHTML.split(" ");
    var numeroPares = 0;
    var primerTr = false;
    for (var i = 0; i < splitTR.length; i++) {

        if (splitTR[i].includes("<tr")) {

            if (primerTr === false) {
                splitTR[i] = "";
                primerTr = true;
            } else {
                //console.log(splitTR[i]);
                if (numeroPares % 2 === 0) {
                    splitTR[i] = splitTR[i].replaceAll("<tr", "<tr style=\"background-color: #f2f2f2;" +
                            "height: 10px; \"");
                }
                numeroPares = numeroPares + 1;
            }
        }
    }
    tableHTML = "";
    for (var i = 0; i < splitTR.length; i++) {
        tableHTML += splitTR[i] + " ";
    }

    tableHTML = tableHTML.replaceAll("<tr", "<tr style=\"\"");


    //console.log(tableHTML);


    var cabecera = '<meta http-equiv="content-type" content="application/vnd.ms-excel;" charset="UTF-8">';
    //cabecera = cabecera.replace(/ /g, '%20');
    tableHTML = cabecera + tableHTML;
    tableHTML = tableHTML.replace(/ /g, '%20');
    tableHTML = tableHTML.replace(/#/g, '%23');
    tableHTML += "</body></html>";
    //console.log(tableHTML);
    // Specify file name
    filename = filename ? filename + '.xls' : 'excel_data.xls';

    // Create download link element
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
        var blob = new Blob(['ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

        // Setting the file name
        downloadLink.download = filename;

        //triggering the function
        downloadLink.click();
    }
//$("body").html(bodyPagOriginal);
    window.location.reload();
}

function exportarExcelMultipleNoAdminPresupuesto(listaTablas, filename = '') {
//todo esto de momento solo sirve para proyectos modificar
//guardo el body entero para luego restaurarlo
    //var bodyPagOriginal = $("body").html();
    var downloadLink;
    var dataType = 'application/vnd.ms-excel; charset=UTF-8';
    var tableHTML = "";
    for (var e = 0; e < listaTablas.length; e++) {
        //console.log(" - bucle tabla");
        //console.log(listaTablas[e]);
        var tabla = listaTablas[e];
        if (tabla.id === "tablaPresupuestoVenta") {
            //console.log($("#" + tabla.id + " tr"));

            var inputRef = "<!--Referencia-->";//18;
            var textareaDesc = "<!--Descripción-->";//19;
            var inputCant = "<!--Cantidad-->";//20;
            var inputPrecio = "<!--Precio-->";//21;
            var inputDescuento = "<!--Descuento-->";//22;
            var outImporte = "<!--Importe-->";//23;

            var lista = new Array;

            lista.push(inputRef);
            lista.push(inputCant);
            lista.push(inputPrecio);
            lista.push(inputDescuento);
            var listaText = new Array;
            listaText.push(textareaDesc);
            listaText.push(outImporte);
            //var numIncrementar = 13;

            $("#" + tabla.id + " tr td img").each(function () {//para poner la ruta de la imagen y asi que se vea en el excel

                //console.log($(this).attr("name"));
                $(this).attr("src", $(this).attr("name"));
                // console.log(this);
            });
            //console.log(" - bucle kitar rutas de img");


            //bucle para inputs
            for (var u = 0; u < lista.length; u++) {
                let num = lista[u];
                for (var i = 0; i < $("#" + tabla.id + " tr td").length; i++) {
                    let td = $("#" + tabla.id + " tr td")[i];
                    //console.log(td);
                    let t = $(td).html();
                    //console.log(t.includes(""));
                    //console.log(i + " - " + num);
                    if (t.includes(num) && $("#" + tabla.id + " tr td")[i] !== undefined) {
                        //console.log($("#" + tabla.id + " tr td")[i]);
                        //console.log($(tdRef)[0]);
                        //console.log($(tdRef).children()[0]);
                        var input = $(td).children()[0];
                        //console.log(input);
                        if ($(input).val() !== undefined) {
                            // console.log($(input).val());
                            var valorInput = $(input).val();
                            $(input).remove();
                            $(td).html(valorInput);
                            //num = num + numIncrementar;
                        }
                    }
                }
            }
            //  console.log(" - bucle kitar inputs");

            //bucle para textArea
            for (var u = 0; u < listaText.length; u++) {
                let num = listaText[u];
                for (var i = 0; i < $("#" + tabla.id + " tr td").length; i++) {
                    let td = $("#" + tabla.id + " tr td")[i];
                    let t = $(td).html();
                    if (t.includes(num) && $("#" + tabla.id + " tr td")[i] !== undefined) {
                        //console.log($("#" + tabla.id + " tr td")[inputRef]);
                        //console.log($(tdRef).children()[0]);
                        var input = $(td).children()[0];
                        if ($(input).val() !== undefined) {
                            //console.log($(input).html());
                            var valorInput = $(input).html();
                            $(input).remove();
                            $(td).html(valorInput);
                            //num = num + numIncrementar;
                        }
                    }
                }
            }
            //  console.log(" - bucle kitar selects");

            $("#" + tabla.id + " th").each(function () {//borramos los th display none

                if ($(this).css("display") === "none") {
                    $(this).remove();
                }
            });
            //  console.log(" - bucle kitar th display none");

            $("#" + tabla.id + " tr td").each(function () {//borramos los td display none

                if ($(this).css("display") === "none") {
                    $(this).remove();
                }
            });
            // console.log(" - bucle kitar td display none");

            var contadorTh = 0;
            $("#" + tabla.id + " th").each(function () {//borramos los th vacios y así tenemos la referencia de cuantos tds borrar

                if ($(this).html().trim() === "") {

                    $(this).remove();
                    contadorTh++;

                }
            });
            //  console.log(" - bucle kitar th vacios");

            var u = 0;
            //console.log(contadorTh);
            //contadorTh = contadorTh - (contadorTh / 2);//por el stactable se duplica



            $("#" + tabla.id + " tr").each(function () {//por cada tr sacamos los tds
                if (u > 1) {
                    var contadorTd = contadorTh;

                    var tds = $(this).children();

                    for (var i = 0; i < tds.length; i++) {//y aqui sacamos el numero de ths eliminados para eliminar tambien los tds
                        //console.log(contadorTd);
                        if (contadorTd > 0) {
                            //console.log(tds[i]);
                            $(tds[i]).remove();
                            contadorTd--;
                            //console.log(contadorTd);
                        }
                    }
                }
                u++;
            });
            // console.log(" - bucle kitar th sacamos tds");


        }
        for (var i = 0; i < tabla.children.length; i++) {
            if (tabla.children[i].className === "tableFloatingHeader") {
                var child = tabla.children[i];
                tabla.removeChild(child);
            }

        }
        // console.log(" - bucle kitar hijos");

        //bucle para borrar inputs y textareas
        for (var i = 0; i < $("#" + tabla.id + " tr td").length; i++) {
            if ($("#" + tabla.id + " tr td")[i] !== undefined) {
                //console.log($("#" + tabla.id + " tr td")[inputRef]);
                var tdRef = $("#" + tabla.id + " tr td")[i];
                //console.log($(tdRef).children()[0]);
                var input = $(tdRef).children()[0];

                //console.log($(input).html());
                $(input).remove();

            }
        }
        //  console.log(" - bucle kitar inputs y textareas");


        //console.log(tableHTML);
        tableHTML += tabla.outerHTML.replace(/ /g, '%20');
        tableHTML = tableHTML.replace(/#/g, '%23');


        // console.log(" - reemplaces grandes");


    }

    tableHTML = tableHTML.replaceAll("<table", "<table style=\""
            + "font-family: Trebuchet MS, Arial, Helvetica, sans-serif;\n"
            + "    border-collapse: collapse;\n"
            + "    min-width: 100%;\n"
            + "    min-height: 100%;\n"
            + "    box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.08);\"");
    // console.log(" - reemplaces table css");

    tableHTML = tableHTML.replaceAll("<th", "<th style=\"border: 1px solid #ddd;\n" +
            "    min-width: 100%; \n" +
            "    height: 20px;\n" +
            "    width: 150px;    \n" +
            "    padding-left: 10px; \n" +
            "    padding-top: 10px;\n" +
            "    padding-bottom: 10px;\n" +
            "    padding-right: 30px;\n" +
            "    text-align: center;\n" +
            "    background-color: #333333;\n" +
            "    color: white;\n" +
            "    opacity: 0.90;\"");
    // console.log(" - reemplaces th css");

    tableHTML = tableHTML.replaceAll("<td", "<td style=\"border: 1px solid #ddd;\n" +
            "padding: 8px;\n" +
            "height: 20px;\n" +
            "width: auto;\"");
    // console.log(" - reemplaces td css");

    var splitTR = tableHTML.split(" ");
    var numeroPares = 0;
    var primerTr = false;
    for (var i = 0; i < splitTR.length; i++) {

        if (splitTR[i].includes("<tr")) {

            if (primerTr === false) {
                splitTR[i] = "";
                primerTr = true;
            } else {
                //console.log(splitTR[i]);
                if (numeroPares % 2 === 0) {
                    splitTR[i] = splitTR[i].replaceAll("<tr", "<tr style=\"background-color: #f2f2f2;" +
                            "height: 10px; \"");
                }
                numeroPares = numeroPares + 1;
            }
        }
    }
    //  console.log(" - reemplaces tr css");

    tableHTML = "";
    for (var i = 0; i < splitTR.length; i++) {
        tableHTML += splitTR[i] + " ";
    }

    tableHTML = tableHTML.replaceAll("<tr", "<tr style=\"\"");

    // console.log(" - reemplaces tr2 css");

    //console.log(tableHTML);


    var cabecera = '<meta http-equiv="content-type" content="application/vnd.ms-excel;" charset="UTF-8">';
    //cabecera = cabecera.replace(/ /g, '%20');
    tableHTML = cabecera + tableHTML;
    tableHTML = tableHTML.replace(/ /g, '%20');
    console.log(" - reemplaces g css");

    tableHTML = tableHTML.replace(/#/g, '%23');
    tableHTML += "</body></html>";
    console.log(" - reemplaces g2 css");

    //console.log(tableHTML);
    // Specify file name
    filename = filename ? filename + '.xls' : 'excel_data.xls';

    // Create download link element
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
        var blob = new Blob(['ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

        // Setting the file name
        downloadLink.download = filename;

        //triggering the function
        downloadLink.click();
    }
//$("body").html(bodyPagOriginal);
    window.location.reload();
}

function tipo(tipo) {
    setTimeout(function () {
        $("#tipo").val(tipo);
    }, 100);
}

function anotaciones(anotaciones) {
    setTimeout(function () {
        //console.log(anotaciones + " 1");
        $("#anotaciones").val(anotaciones);
        //console.log($("#anotaciones").val() + " 2");
    }, 100);
}

function enviarCorreos(id, seleccion) {
    var lista = new Array("pedido", "albaranCompra", "facturaCompra", "presupuestoVenta", "albaranVenta", "facturaVenta");

    $("#tipo").val("1");
    $("#anotaciones").val("");
    var solicitudOferta = "";
    var noValorado = "";

//alert(id +" - "+ seleccion);
    if (seleccion === 0) {
        solicitudOferta = '<input type=\"radio\" id=\"tipo3\" name=\"tipo\" value=\"2\" onClick=\"tipo(this.value)\">' +
                '<label for=\"tipo3\">Solicitud de oferta</label>';
    }
    if (seleccion === 0 || seleccion === 4) {
        noValorado = '<input type=\"radio\" id=\"tipo2\" name=\"tipo\" value=\"1\" onClick=\"tipo(this.value)\" checked>' +
                '<label for=\"tipo2\">No valorado</label><br>';
    }
    var seleccionado = "";
    if (noValorado === "") {
        seleccionado = "checked";
        $("#tipo").val("0");
    }
    var valorado = '<input type=\"radio\" id=\"tipo1\" name=\"tipo\" value=\"0\" onClick=\"tipo(this.value)\" ' + seleccionado + '>' +
            '<label for=\"tipo1\">Valorado</label><br>';

    swal({
        title: 'Seleccione el tipo de informe que enviará.',
        text: "",
        type: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Ok',
        html:
                '<div class=\"form-basic\">' +
                '<div class=\"divBusqueda\">' +
                '<div class=\"formBusqueda\">' +
                '<div class=\"formFila\" style="display: inline-block; padding: 3px;margin: 3px; text-align: left !important;">' +
                '<label style=\"\">' +
                '<span>Tipo de informe</span>' +
                '<br>' +
                noValorado +
                valorado +
                solicitudOferta +
                '</label>' +
                '</div>' +
                '<br>' +
                '<div class=\"formFila\" style="display: inline-block; padding: 3px;margin: 3px; text-align: left !important;">' +
                '<label style=\"\">' +
                '<span>Anotaciones</span>' +
                '<br>' +
                '<textarea id=\"anotaciones1\" name=\"anotaciones1\" onChange=\"anotaciones(this.value)\"></textarea>' +
                '</label>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>',
        onOpen: () => {

        }
    }).then((result) => {
        if (result === true) {
//            swal(
//                    'Enviado!',
//                    '¡Has enviado el correo con exito!',
//                    'success'
//                    );
            setTimeout(function () {
                var tipo = $("#tipo").val();
                var anotaciones = $("#anotaciones").val();
                //console.log(anotaciones + " 0");
                //enviarDatosSubirArchivos(urlServlet, data, true);
                abrirVentanaEmergente('../../../Configuracion/CorreoEnviado/Dialog/EnviarCorreoEnviado.jsp?' + lista[seleccion] + '_id=' + id + '&tipo=' + tipo + '&anotaciones=' + anotaciones, window.screen.width, window.screen.height);

            }, 200);
        }
    });
}

/////////////////////////Buscar datos//////////////////////////////
function refrescarDatosTabla(urlServlet, data) {

    var complete = false;

    //////////////////////Ajax//////////////////////////
    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
            setTimeout(function () {
                if (complete === false) {
                    swal({
                        title: "Procesando:",
                        text: "Procesando, espere por favor...",
                        type: "info",
                        showLoaderOnConfirm: false,
                        showConfirmButton: false
                    });
                } else {

                }
            }, 200);
            // alert();
        },
        success: function (respuesta) {
            var valores = eval(respuesta);
//            alert(valores[0]);
            if (valores.length === 1) {

                var nFilasTabla = "<div class='nFilasTabla'><span></span></div>";
                $("#divTablaDatos").html(nFilasTabla + valores[0]);
                $("#divTablaDatos").change(actualizarTabla());
                //Obtenemos el número de filas de la tabla y escribimos en el div justo encima de la tabla
                var idTabla = document.getElementsByClassName('tabla')[0].id;
                if (idTabla === '') {
                    idTabla = document.getElementsByClassName('large-only')[0].id;
                }
                var nFilas = $("#" + idTabla + " tbody tr").length;
                $(".nFilasTabla span").html('Se han encontrado ' + nFilas + ' resultados.');

            } else {
                //mesageDialog
                swal({
                    title: valores[0],
                    text: valores[1],
                    type: "error"
                });
            }
        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {
            complete = true;
            setTimeout(function () {
                swal.close();
            }, 200);
        }
    });
}
function refrescarDatosTablaMetodoComplete(urlServlet, data, metodo) {

    var complete = false;

    //////////////////////Ajax//////////////////////////
    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
            setTimeout(function () {
                if (complete === false) {
                    swal({
                        title: "Procesando:",
                        text: "Procesando, espere por favor...",
                        type: "info",
                        showLoaderOnConfirm: false,
                        showConfirmButton: false
                    });
                } else {

                }
            }, 200);
            // alert();
        },
        success: function (respuesta) {
            var valores = eval(respuesta);
//            alert(valores[0]);
            if (valores.length === 1) {

                var nFilasTabla = "<div class='nFilasTabla'><span></span></div>";
                $("#divTablaDatos").html(nFilasTabla + valores[0]);
                $("#divTablaDatos").change(actualizarTabla());
                //Obtenemos el número de filas de la tabla y escribimos en el div justo encima de la tabla
                var idTabla = document.getElementsByClassName('tabla')[0].id;
                if (idTabla === '') {
                    idTabla = document.getElementsByClassName('large-only')[0].id;
                }
                var nFilas = $("#" + idTabla + " tbody tr").length;
                $(".nFilasTabla span").html('Se han encontrado ' + nFilas + ' resultados.');

            } else {
                //mesageDialog
                swal({
                    title: valores[0],
                    text: valores[1],
                    type: "error"
                });
            }
        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {
            complete = true;
            setTimeout(function () {
                metodo();
                swal.close();
            }, 200);
        }
    });
}
function refrescarDatosTablaSinActualizar(urlServlet, data) {

    var complete = false;

    //////////////////////Ajax//////////////////////////
    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
            setTimeout(function () {
                if (complete === false) {
                    swal({
                        title: "Procesando:",
                        text: "Procesando, espere por favor...",
                        type: "info",
                        showLoaderOnConfirm: false,
                        showConfirmButton: false
                    });
                } else {

                }
            }, 200);
            // alert();
        },
        success: function (respuesta) {
            var valores = eval(respuesta);

            if (valores.length === 1) {

                var nFilasTabla = "<div class='nFilasTabla'><span></span></div>";
                $("#divTablaDatos").html(nFilasTabla + valores[0]);
                //$("#divTablaDatos").change(actualizarTabla());
                //Obtenemos el número de filas de la tabla y escribimos en el div justo encima de la tabla
                var idTabla = document.getElementsByClassName('tabla')[0].id;
                if (idTabla === '') {
                    idTabla = document.getElementsByClassName('large-only')[0].id;
                }
                var nFilas = $("#" + idTabla + " tbody tr").length;
                $(".nFilasTabla span").html('Se han encontrado ' + nFilas + ' resultados.');

            } else {
                //mesageDialog
                swal({
                    title: valores[0],
                    text: valores[1],
                    type: "error"
                });
            }
        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {
            complete = true;
            setTimeout(function () {
                swal.close();
            }, 200);
        }
    });
}


function refrescarDatosTablaID(urlServlet, data, id) {
    var complete = false;
    //////////////////////Ajax//////////////////////////
    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
            setTimeout(function () {
                if (complete === false) {
                    swal({
                        title: "Procesando:",
                        text: "Procesando, espere por favor...",
                        type: "info",
                        showLoaderOnConfirm: false,
                        showConfirmButton: false
                    });
                } else {

                }
            }, 200);

        },
        success: function (respuesta) {
            var valores = eval(respuesta);
//            alert(valores[0]);
            if (valores.length === 1) {
                var nFilasTabla = "<div class='nFilasTabla' id='" + id + "'><span></span></div>";
                $("#divTablaDatos").html(nFilasTabla + valores[0]);
                $("#divTablaDatos").change(actualizarTabla());
                //Obtenemos el número de filas de la tabla y escribimos en el div justo encima de la tabla
                var idTabla = document.getElementsByClassName('tabla')[0].id;
                if (idTabla === '') {
                    idTabla = document.getElementsByClassName('large-only')[0].id;
                }
                var nFilas = $("#" + idTabla + " tbody tr").length;
                $("#" + id + " span").html('Se han encontrado ' + nFilas + ' resultados.');

            } else {
                //mesageDialog
                swal({
                    title: valores[0],
                    text: valores[1],
                    type: "error"
                });
            }
        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {
            complete = true;
            setTimeout(function () {
                swal.close();
            }, 200);
        }
    });
}


function refrescarDatosTablaNombreDiv(urlServlet, data, nombreDivTablaDatos) {
    var complete = false;
    //////////////////////Ajax//////////////////////////
    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
            setTimeout(function () {
                if (complete === false) {
                    swal({
                        title: "Procesando:",
                        text: "Procesando, espere por favor...",
                        type: "info",
                        showLoaderOnConfirm: false,
                        showConfirmButton: false
                    });
                } else {

                }
            }, 200);

        },
        success: function (respuesta) {
            var valores = eval(respuesta);
//            alert(valores[0]);
            if (valores.length === 1) {
                var nFilasTabla = "<div class='nFilasTabla'><span></span></div>";
                $("#" + nombreDivTablaDatos).html(nFilasTabla + valores[0]);
                $("#" + nombreDivTablaDatos).change(actualizarTabla());
                //Obtenemos el número de filas de la tabla y escribimos en el div justo encima de la tabla
                var idTabla = document.getElementsByClassName('tabla')[0].id;
                if (idTabla === '') {
                    idTabla = document.getElementsByClassName('large-only')[0].id;
                }
                var nFilas = $("#" + idTabla + " tbody tr").length;
                $(".nFilasTabla span").html('Se han encontrado ' + nFilas + ' resultados.');

            } else {
                //mesageDialog
                swal({
                    title: valores[0],
                    text: valores[1],
                    type: "error"
                });
            }
        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {
            complete = true;
            setTimeout(function () {
                swal.close();
            }, 200);
        }
    });
}

function refrescarDatosTablaNombreDivMetodo(urlServlet, data, nombreDivTablaDatos, metodo) {
    var complete = false;
    //////////////////////Ajax//////////////////////////
    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
            setTimeout(function () {
                if (complete === false) {
                    swal({
                        title: "Procesando:",
                        text: "Procesando, espere por favor...",
                        type: "info",
                        showLoaderOnConfirm: false,
                        showConfirmButton: false
                    });
                } else {

                }
            }, 200);

        },
        success: function (respuesta) {
            var valores = eval(respuesta);
//            alert(valores[0]);
            if (valores.length === 1) {
                var nFilasTabla = "<div class='nFilasTabla'><span></span></div>";
                $("#" + nombreDivTablaDatos).html(nFilasTabla + valores[0]);
                $("#" + nombreDivTablaDatos).change(metodo());
                //Obtenemos el número de filas de la tabla y escribimos en el div justo encima de la tabla
                var idTabla = document.getElementsByClassName('tabla')[0].id;
                if (idTabla === '') {
                    idTabla = document.getElementsByClassName('large-only')[0].id;
                }
                var nFilas = $("#" + idTabla + " tbody tr").length;
                $(".nFilasTabla span").html('Se han encontrado ' + nFilas + ' resultados.');

            } else {
                //mesageDialog
                swal({
                    title: valores[0],
                    text: valores[1],
                    type: "error"
                });
            }
        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {
            metodo();
            complete = true;
            setTimeout(function () {
                swal.close();
            }, 200);
        }
    });
}

function refrescarDatosTablaNombreDivID(urlServlet, data, nombreDivTablaDatos, idContadorFilas, idTabla) {
    var complete = false;
    //////////////////////Ajax//////////////////////////
    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
            setTimeout(function () {
                if (complete === false) {
                    swal({
                        title: "Procesando:",
                        text: "Procesando, espere por favor...",
                        type: "info",
                        showLoaderOnConfirm: false,
                        showConfirmButton: false
                    });
                } else {

                }
            }, 200);

        },
        success: function (respuesta) {
            var valores = eval(respuesta);
//            alert(valores[0]);
            if (valores.length === 1) {
                var nFilasTabla = "<div class='nFilasTablaId' id='" + idContadorFilas + "'><span></span></div>";
                $("#" + nombreDivTablaDatos).html(nFilasTabla + valores[0]);
                $("#" + nombreDivTablaDatos).change(actualizarTabla());
                //Obtenemos el número de filas de la tabla y escribimos en el div justo encima de la tabla

                var nFilas = $("#" + idTabla + " tbody tr").length;
                $("#" + idContadorFilas + " span").html('Se han encontrado ' + nFilas + ' resultados.');

            } else {
                //mesageDialog
                swal({
                    title: valores[0],
                    text: valores[1],
                    type: "error"
                });
            }
        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {
            complete = true;
            setTimeout(function () {
                swal.close();
            }, 200);
        }
    });
}
function refrescarDatosTablaNombreDivIDActualizarTabla(urlServlet, data, nombreDivTablaDatos, idContadorFilas, idTabla) {
    var complete = false;
    //////////////////////Ajax//////////////////////////
    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
            setTimeout(function () {
                if (complete === false) {
                    swal({
                        title: "Procesando:",
                        text: "Procesando, espere por favor...",
                        type: "info",
                        showLoaderOnConfirm: false,
                        showConfirmButton: false
                    });
                } else {

                }
            }, 200);

        },
        success: function (respuesta) {
            var valores = eval(respuesta);
//            alert(valores[0]);
            if (valores.length === 1) {
                var nFilasTabla = "<div class='nFilasTabla' id='" + idContadorFilas + "'><span></span></div>";
                $("#" + nombreDivTablaDatos).html(nFilasTabla + valores[0]);
                $("#" + nombreDivTablaDatos).change(actualizarTabla());
                //Obtenemos el número de filas de la tabla y escribimos en el div justo encima de la tabla

                var nFilas = $("#" + idTabla + " tbody tr").length;
                $("#" + idContadorFilas + " span").html('Se han encontrado ' + nFilas + ' resultados.');

            } else {
                //mesageDialog
                swal({
                    title: valores[0],
                    text: valores[1],
                    type: "error"
                });
            }
        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {
            complete = true;
            setTimeout(function () {
                window.opener.actualizarTabla();
                swal.close();
            }, 200);
        }
    });
}
function refrescarDatosTablaLog(urlServlet, data) {
    var complete = false;
    //////////////////////Ajax//////////////////////////
    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,
        //Antes del envio
        beforeSend: function () {
            //mesageDialog
            setTimeout(function () {
                if (complete === false) {
                    swal({
                        title: "Procesando:",
                        text: "Procesando, espere por favor...",
                        type: "info",
                        showLoaderOnConfirm: false,
                        showConfirmButton: false
                    });
                } else {

                }
            }, 200);

        },
        success: function (respuesta) {
            var valores = eval(respuesta);
//            alert(valores[0]);
            if (valores.length === 1) {
                var nFilasTabla = "<div class='nFilasTabla'><span></span></div>";
                $("#divTablaDatos").html(nFilasTabla + valores[0]);
                //$("#divTablaDatos").change(actualizarTabla());


            } else {
                //mesageDialog
                swal({
                    title: valores[0],
                    text: valores[1],
                    type: "error"
                });
            }
        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {
            complete = true;
            setTimeout(function () {
                swal.close();
            }, 200);
        }
    });
}

function refrescarDatosDetalleCom(urlServlet, data) {

    //////////////////////Ajax//////////////////////////
    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,
        success: function (respuesta) {
            var valores = eval(respuesta);
//            alert(valores[0]);
            if (valores.length === 1) {
                $("#divTablaDatosDetalle").html(valores[0]);
                $("#divTablaDatosDetalle").change(actualizarTabla());
            } else {
                //mesageDialog
                swal({
                    title: valores[0],
                    text: valores[1],
                    type: "error"
                });
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

function refrescarDatosDetalle(urlServlet, data) {

    //////////////////////Ajax//////////////////////////
    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,
        success: function (respuesta) {
            var valores = eval(respuesta);
//            alert(valores[0]);
            if (valores.length === 1) {
                var nFilasTabla = "<div class='nFilasTabla'><span></span></div>";
                $("#divTablaDatosDetalle").html(nFilasTabla + valores[0]);
                $("#divTablaDatosDetalle").change(actualizarTabla());
                //Obtenemos el número de filas de la tabla y escribimos en el div justo encima de la tabla
                var idTabla = document.getElementsByClassName('tabla')[0].id;
                if (idTabla === '') {
                    idTabla = document.getElementsByClassName('large-only')[0].id;
                }
                var nFilas = $("#" + idTabla + " tbody tr").length;
                $(".nFilasTabla span").html('Se han encontrado ' + nFilas + ' resultados.');
            } else {
                //mesageDialog
                swal({
                    title: valores[0],
                    text: valores[1],
                    type: "error"
                });
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
/////////////////////////Buscar datos//////////////////////////////
function cargaInforme(urlServlet) {

    //////////////////////Ajax//////////////////////////
    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: null,
        success: function (respuesta) {
//            alert(respuesta);
//            var valores = eval(respuesta);
//            alert(valores);


//            if (valores.length === 1) {
            $("#divInforme").append(respuesta);
//            } else {
//                //mesageDialog
//                swal({
//                    title: valores[0],
//                    text: valores[1],
//                    type: "error"
//                });
//            }
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
/////////////////////////Buscar datos//////////////////////////////
function cargaContenidoHtmldeServrlet(urlServlet, idCampo) {

    //////////////////////Ajax//////////////////////////
    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: null,
        success: function (respuesta) {
//            alert(respuesta);
            var valores = eval(respuesta);
//            alert(valores);

            if (valores.length === 1) {
//                alert(idCampo);
                $(idCampo).append(valores[0]);
            } else {
                //mesageDialog
                swal({
                    title: valores[0],
                    text: valores[1],
                    type: "error"
                });
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
/////////////////////////Buscar datos//////////////////////////////
function cargaCodigoHtmlenDiv(urlServlet, data, idDiv) {
//console.log(urlServlet + " - " + data['pedido_id']+ " - " + idDiv);
    //////////////////////Ajax//////////////////////////
    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,
        success: function (respuesta) {
            var valores = eval(respuesta);
//            alert(valores[0]);
            if (valores.length === 1) {
                $(idDiv).html(valores[0]);
                $(idDiv).change(actualizarTabla());
            } else {
                //mesageDialog
                swal({
                    title: valores[0],
                    text: valores[1],
                    type: "error"
                });
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

function cargaCodigoHtmlenDivNoRefrescar(urlServlet, data, idDiv) {
//console.log(urlServlet + " - " + data['pedido_id']+ " - " + idDiv);

    //////////////////////Ajax//////////////////////////
    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,
        success: function (respuesta) {
            var valores = eval(respuesta);
//            alert(valores[0]);
            if (valores.length === 1) {
                $(idDiv).html(valores[0]);
//                    $(idDiv).change(actualizarTabla());
            } else {
                //mesageDialog
                swal({
                    title: valores[0],
                    text: valores[1],
                    type: "error"
                });
            }
        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {

//            alert('');
            //recorrerTabla();
            //calcularImporte();

        }
    });
}

function cargaCodigoHtmlenDivNoRefrescarMetodo(urlServlet, data, idDiv, metodo) {
//console.log(urlServlet + " - " + data['pedido_id']+ " - " + idDiv);

    //////////////////////Ajax//////////////////////////
    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,
        success: function (respuesta) {
            var valores = eval(respuesta);
//            alert(valores[0]);
            if (valores.length === 1) {
                $(idDiv).html(valores[0]);
//                    $(idDiv).change(actualizarTabla());
            } else {
                //mesageDialog
                swal({
                    title: valores[0],
                    text: valores[1],
                    type: "error"
                });
            }
        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {
            metodo();
//            alert('');
            //recorrerTabla();
            //calcularImporte();

        }
    });
}

function cargaCodigoHtmlenDivNoRefrescarMetodosComplete1(urlServlet, data, idDiv) {

    //////////////////////Ajax//////////////////////////
    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,
        success: function (respuesta) {
            var valores = eval(respuesta);
//            alert(valores[0]);
            if (valores.length === 1) {
                $(idDiv).html(valores[0]);
//                    $(idDiv).change(actualizarTabla());
            } else {
                //mesageDialog
                swal({
                    title: valores[0],
                    text: valores[1],
                    type: "error"
                });
            }
        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {
            metodoComplete1();

//            alert('');
            //recorrerTabla();
            //calcularImporte();

        }
    });
}
function cargaCodigoHtmlenDivNoRefrescarMetodosComplete2(urlServlet, data, idDiv) {

    //////////////////////Ajax//////////////////////////
    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,
        success: function (respuesta) {
            var valores = eval(respuesta);
//            alert(valores[0]);
            if (valores.length === 1) {
                $(idDiv).html(valores[0]);
//                    $(idDiv).change(actualizarTabla());
            } else {
                //mesageDialog
                swal({
                    title: valores[0],
                    text: valores[1],
                    type: "error"
                });
            }
        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {
            metodoComplete2();
//            alert('');
            //recorrerTabla();
            //calcularImporte();

        }
    });
}

function cargaCodigoHtmlenDivNoRefrescarVariablesComplete(urlServlet, data, idDiv, listaVariablesComplete) {

    //////////////////////Ajax//////////////////////////
    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,
        success: function (respuesta) {
            var valores = eval(respuesta);
//            alert(valores[0]);
            if (valores.length === 1) {
                $(idDiv).html(valores[0]);
//                    $(idDiv).change(actualizarTabla());
            } else {
                //mesageDialog
                swal({
                    title: valores[0],
                    text: valores[1],
                    type: "error"
                });
            }
        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {
            for (var i = 0; i < listaVariablesComplete.length; i++) {
                var variableTemp = $("#" + listaVariablesComplete[i]).val();
                console.log(variableTemp);

            }
//            alert('');
            //recorrerTabla();
            //calcularImporte();

        }
    });
}
function cargaCodigoHtmlenDivStackTable(urlServlet, data, idDiv, nombreTabla) {

    //////////////////////Ajax//////////////////////////
    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,
        success: function (respuesta) {
            var valores = eval(respuesta);
//            alert(valores[0]);
            if (valores.length === 1) {
                $(idDiv).html(valores[0]);
                $(idDiv).change(actualizarTabla());
            } else {
                //mesageDialog
                swal({
                    title: valores[0],
                    text: valores[1],
                    type: "error"
                });
            }
        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {
            $(nombreTabla).stacktable();
        }
    });
}


function cargaCodigoHtmlenDivStackTableSinActualizar(urlServlet, data, idDiv, nombreTabla) {

    //////////////////////Ajax//////////////////////////
    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,
        success: function (respuesta) {
            var valores = eval(respuesta);
//            alert(valores[0]);
            if (valores.length === 1) {
                $(idDiv).html(valores[0]);
                //$(idDiv).change(actualizarTabla());
            } else {
                //mesageDialog
                swal({
                    title: valores[0],
                    text: valores[1],
                    type: "error"
                });
            }
        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {
            cargarCabeceraTabla(nombreTabla);
            formMovimientoCambio(".tabla.stacktable.small-only", ".tabla.stacktable.large-only");
            // console.log(urlServlet + " - " + data + " - " + idDiv);

        }
    });
}


function cargaCodigoHtmlenDivSinActualizar(urlServlet, data, idDiv) {

    //////////////////////Ajax//////////////////////////
    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,
        success: function (respuesta) {
            var valores = eval(respuesta);
//            alert(valores[0]);
            if (valores.length === 1) {
                $(idDiv).html(valores[0]);
                //$(idDiv).change(actualizarTabla());
            } else {
                //mesageDialog
                swal({
                    title: valores[0],
                    text: valores[1],
                    type: "error"
                });
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

function cargaCodigoHtmlenDivJSON(urlServlet, data, idDiv) {

    //////////////////////Ajax//////////////////////////
    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,
        dataType: "json",
        success: function (respuesta) {
            var valores = eval(respuesta);
//            alert(valores[0]);
            if (valores.length === 1) {
                $(idDiv).html(valores[0]);
                $(idDiv).change(actualizarTabla());
            } else {
                //mesageDialog
                swal({
                    title: valores[0],
                    text: valores[1],
                    type: "error"
                });
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

function cargaSelectOption(data, urlServlet, idCampo) {
    //////////////////////Ajax//////////////////////////
//alert(data+" "+urlServlet+" "+idCampo);
//    alert(urlServlet);
    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,

        //Envio
        success: function (respuesta) {
            var valores = eval(respuesta);
            //Si se ha guardado
            if (valores.length === 1) {
                $(idCampo).empty();
                $(idCampo).append(valores[0]);

//                alert(valores[0]);
            } else {
                //mesageDialog
                swal({
                    title: valores[0],
                    text: valores[1],
                    type: "error"
                });
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

function cargaSelectOptionFuncion(data, urlServlet, idCampo, funcion) {
    //////////////////////Ajax//////////////////////////
    // console.log("wsgfgerwgreg");
    //console.log(funcion);

//alert(data+" "+urlServlet+" "+idCampo);
//    alert(urlServlet);
    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,

        //Envio
        success: function (respuesta) {
            var valores = eval(respuesta);
            //Si se ha guardado
            if (valores.length === 1) {
                $(idCampo).empty();
                $(idCampo).append(valores[0]);

//                alert(valores[0]);
            } else {
                //mesageDialog
                swal({
                    title: valores[0],
                    text: valores[1],
                    type: "error"
                });
            }

        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {

            funcion();
            //window.location.reload(true);
        }

    });
}

function cargaSelectOptionselectInCombo(data, urlServlet, idCampo, idSelect, valorSelect) {
    //////////////////////Ajax//////////////////////////
//alert(data+" "+urlServlet+" "+idCampo);
//    alert(urlServlet);
    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,

        //Envio
        success: function (respuesta) {
            var valores = eval(respuesta);
            //Si se ha guardado
            if (valores.length === 1) {
                $(idCampo).empty();
                $(idCampo).append(valores[0]);

//                alert(valores[0]);
            } else {
                //mesageDialog
                swal({
                    title: valores[0],
                    text: valores[1],
                    type: "error"
                });
            }

        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {
            selectInCombo(idSelect, valorSelect);
            //window.location.reload(true);
        }

    });
}

function cargaSelectOptionselectInComboTrigger(data, urlServlet, idCampo, idSelect, valorSelect, idTrigger, tipoEvento) {
    //////////////////////Ajax//////////////////////////
//alert(data+" "+urlServlet+" "+idCampo);
//    alert(urlServlet);
    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,

        //Envio
        success: function (respuesta) {
            var valores = eval(respuesta);
            //Si se ha guardado
            if (valores.length === 1) {
                $(idCampo).empty();
                $(idCampo).append(valores[0]);

//                alert(valores[0]);
            } else {
                //mesageDialog
                swal({
                    title: valores[0],
                    text: valores[1],
                    type: "error"
                });
            }

        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {
            selectInComboTrigger(idSelect, valorSelect, idTrigger, tipoEvento);
            //window.location.reload(true);
        }

    });
}

//Funcion error de respuesta    
function errorAjax(jqXHR, textStatus, errorThrown, urlServlet) {

    var msg = "";
    if (jqXHR.status === 0) {

        msg = 'No hay conexión con el servidor web. Verificar la red [0]';
    } else if (jqXHR.status === 404) {

        msg = 'No se encontró la página solicitada ' + urlServlet + ' [404]';
    } else if (jqXHR.status === 500) {

        msg = 'Error interno del servidor web [500].';
    } else if (textStatus === 'parsererror') {

        msg = 'Error al analizar JSON solicitado.';
    } else if (textStatus === 'timeout') {

        msg = 'Error de tiempo de espera.';
    } else if (textStatus === 'abort') {

        msg = 'Petición de Ajax abortada.';
    } else {

        msg = 'Error inesperado o desconocido: ' + jqXHR.responseText;
    }

//mesageDialog
    swal({
        title: "Error:",
        text: msg,
        type: "error"
    });
}
//function cargarCabeceraTabla(tabla) {
//    // initialize stickyTableHeaders _after_ tablesorter
//    //Botones de orden en cabecera
//    $(document.getElementById(tabla)).tablesorter();
//    // Cabecera de tabla fija
//    $(document.getElementById(tabla)).stickyTableHeaders();
//}
function cargarCabeceraTabla(tabla) {
    // initialize stickyTableHeaders _after_ tablesorter
    // Hacemos el responsive
    //console.log(tabla);
    $('#' + tabla).stacktable();
    //alert($('#' + tabla));
    //Botones de orden en cabecera
    $(document.getElementById(tabla)).tablesorter();
    // Cabecera de tabla fija
    $(document.getElementById(tabla)).stickyTableHeaders();
}
function cargarCabeceraTablaSinStackTable(tabla) {
    // initialize stickyTableHeaders _after_ tablesorter
    // Hacemos el responsive
    //console.log(tabla);
    //alert($('#' + tabla));
    //Botones de orden en cabecera
    $(document.getElementById(tabla)).tablesorter();
    // Cabecera de tabla fija
    $(document.getElementById(tabla)).stickyTableHeaders();
}

function validaNif(control)
{
    if (control.value === "")
        return;
    var dni = control.value;
    var numero = dni.substr(0, dni.length - 1);
    var let = dni.substr(dni.length - 1, 1);
    let = let.toUpperCase();
    numero = numero % 23;
    var letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
    letra = letra.substring(numero, numero + 1);
    //alert(letra);
    if (letra !== let)
    {
        mensaje("dni", "es");
        retornar(control.id);
    }
}
function retornar(id)
{
    control = document.getElementById(id);
    document.getElementById(id).value = '';
    //document.getElementById(id).select();		
    //document.getElementById(id).focus();
    return;
}
function validaCif(control)
{
    if (control.value === "")
    {
        return;
    }
    var texto = control.value;
    var pares = 0;
    var impares = 0;
    var suma;
    var ultima;
    var unumero;
    var uletra = new Array("J", "A", "B", "C", "D", "E", "F", "G", "H", "I");
    var xxx;

    texto = texto.toUpperCase();

    var regular = new RegExp(/^[ABCDEFGHKLMNPQS]\d\d\d\d\d\d\d[0-9,A-J]$/g);
    if (!regular.exec(texto))
    {
        mensaje("cif", "es");
        retornar(control.id);
    }


    ultima = texto.substr(8, 1);

    for (var cont = 1; cont < 7; cont++) {
        xxx = (2 * parseInt(texto.substr(cont++, 1))).toString() + "0";
        impares += parseInt(xxx.substr(0, 1)) + parseInt(xxx.substr(1, 1));
        pares += parseInt(texto.substr(cont, 1));
    }
    xxx = (2 * parseInt(texto.substr(cont, 1))).toString() + "0";
    impares += parseInt(xxx.substr(0, 1)) + parseInt(xxx.substr(1, 1));

    suma = (pares + impares).toString();
    unumero = parseInt(suma.substr(suma.length - 1, 1));
    unumero = (10 - unumero).toString();
    if (unumero === 10)
        unumero = 0;

    if ((ultima === unumero) || (ultima === uletra[unumero]))
        return true;
    else
    {
        mensaje("cif", "es");
        retornar(control.id);
    }

}
function mensaje(msg, lang)
{
    if (lang === "es")
    {
        if (msg === "dni")
        {
            swal({
                title: "Error:",
                text: "DNI no valido",
                type: "error"
            });
        } else if (msg === "cif")
        {
            swal({
                title: "Error:",
                text: "CIF no valido",
                type: "error"
            });

        } else if (msg === "nie")
        {
            alert("NIE no valido");
        } else if (msg === "dc")
        {
            alert("El digito de control no es correcto");
        } else if (msg === "completo")
        {
            alert("Rellene todos los datos de la cuenta");
        } else if (msg === "formato")
        {
            alert("Formato incorrecto");
        } else
            alert("Formato no valido");
    }

}
function eliminarDatosFilaTabla(filaTabla, urlServlet, data, nombreDatoEliminar) {


    //Ventana de opcion
    setTimeout(function () {
        $(".swal2-cancel.btn.btn-danger.swal2-styled").focus();
        //console.log($(".swal2-cancel.btn.btn-danger.swal2-styled").focus());
    }, 100);
    swal({
        title: "Confirmación",
        text: "¿Estás seguro que deseas eliminar " + nombreDatoEliminar + "?",
        type: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No, cancelar!',
        confirmButtonText: 'Sí, eliminar!',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: true,
        allowOutsideClick: false

    }).then(function () {

        $.ajax({
            url: urlServlet,
            type: 'POST',
            data: data,
            success: function (respuesta) {
                try {
                    var valores = eval(respuesta);
//                    alert(respuesta);
                    if (valores.length === 1) {
                        //mesageDialog
                        swal({
                            title: "Perfecto:",
                            text: valores[0],
                            type: "success"
                        });
                        filaTabla.remove();
                        setTimeout(function () {

                            //Obtenemos el número de filas de la tabla y escribimos en el div justo encima de la tabla
                            var idTabla = document.getElementsByClassName('tabla')[0].id;
                            if (idTabla === '') {
                                idTabla = document.getElementsByClassName('large-only')[0].id;
                            }
                            var nFilas = $("#" + idTabla + " tbody tr").length;
                            $(".nFilasTabla span").html('Se han encontrado ' + nFilas + ' resultados.');
                            swal.close();
                            //window.location.reload();
                            //window.opener.refrescarDatosTabla(window.opener.urlServlet, window.opener.getDatosForm());
                            refrescar();
                            //window.opener.refrescar();
                        }, 1000); // in milliseconds                        

                    } else {
                        //mesageDialog
                        swal({
                            title: valores[0],
                            text: valores[1],
                            type: "error"
                        });
                    }
                } catch (exception) {
                    document.write(respuesta);
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
    },
            //Cancelar
                    function (dismiss) {
                        // dismiss can be 'cancel', 'overlay',
                        // 'close', and 'timer'
                        if (dismiss === 'cancel') {
                            //mesageDialog
                            swal({
                                title: "Cancelado",
                                text: "Operación cancelada",
                                type: "error"
                            });
                            setTimeout(function () {
                                swal.close();
                            }, 1000); // in milliseconds       
                        }

                    });
        }


function eliminarDatosFilaTablaDirecto(filaTabla, urlServlet, data, nombreDatoEliminar, divBorrar) {


    //Ventana de opcion
    setTimeout(function () {
        $(".swal2-cancel.btn.btn-danger.swal2-styled").focus();
        //console.log($(".swal2-cancel.btn.btn-danger.swal2-styled").focus());
    }, 100);
    swal({
        title: "Confirmación",
        text: "¿Estás seguro que deseas eliminar " + nombreDatoEliminar + "?",
        type: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No, cancelar!',
        confirmButtonText: 'Sí, eliminar!',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: true,
        allowOutsideClick: false

    }).then(function () {

        $.ajax({
            url: urlServlet,
            type: 'POST',
            data: data,
            success: function (respuesta) {
                try {
                    var valores = eval(respuesta);
//                    alert(respuesta);
                    if (valores.length === 1) {
                        //mesageDialog
                        swal({
                            title: "Perfecto:",
                            text: valores[0],
                            type: "success"
                        });
                        // filaTabla.remove();
                        setTimeout(function () {

                            //Obtenemos el número de filas de la tabla y escribimos en el div justo encima de la tabla
//                            var idTabla = document.getElementsByClassName('tabla')[0].id;
//                            if (idTabla === '') {
//                                idTabla = document.getElementsByClassName('large-only')[0].id;
//                            }
//                            var nFilas = $("#" + idTabla + " tbody tr").length;
//                            $(".nFilasTabla span").html('Se han encontrado ' + nFilas + ' resultados.');
                            swal.close();
                            //window.location.reload();
                            //window.opener.refrescarDatosTabla(window.opener.urlServlet, window.opener.getDatosForm());
                            $("#" + divBorrar).remove();
                            //window.opener.refrescar();
                        }, 1000); // in milliseconds                        

                    } else {
                        //mesageDialog
                        swal({
                            title: valores[0],
                            text: valores[1],
                            type: "error"
                        });
                    }
                } catch (exception) {
                    document.write(respuesta);
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
    },
            //Cancelar
                    function (dismiss) {
                        // dismiss can be 'cancel', 'overlay',
                        // 'close', and 'timer'
                        if (dismiss === 'cancel') {
                            //mesageDialog
                            swal({
                                title: "Cancelado",
                                text: "Operación cancelada",
                                type: "error"
                            });
                            setTimeout(function () {
                                swal.close();
                            }, 1000); // in milliseconds       
                        }

                    });
        }

function ventanaAtras(window, swal) {
    //Si existe historial del navegador y es no undefined
    if (window.history.length > 1 && window.history.back() !== undefined) {
        var isVisible = swal.isVisible();
        if (isVisible === 0) {
            window.location.href = window.history.back();
        } else {
            swal.close();
        }
    } else {
        window.close();
    }
}

(function ($) {
    $(document).ready(function () {
        $('input').blur(function () {
            var tipo = $('input').attr('type');
//            alert(tipo);
            if (tipo !== 'hidden') {
                var value = $.trim($(this).val());
                $(this).val(value);
            }
        });
    });
})(jQuery);




//window.load = function () {
//    alert(window.history.state);
//    if (window.history.state === null) {
//        var nhistory = window.history.length - 1;
//        var stateObj = {paso: nhistory};
//        window.history.replaceState(stateObj, nhistory, window.location);
//        var pos = window.history.state.paso;
//        alert(nhistory + " // " + pos);
//    }
//};

//$(document).ready(function () {
//
//
//    $("#btnAtras").click(function (e) {
//        e.preventDefault();
//        var nhistory = window.history.length - 1;
//        var pos = window.history.state.paso;
//        var state = {paso: pos - 1};
//        window.history.replaceState(state, pos - 1, window.location);
//        var pos = window.history.state.paso;
//        alert(nhistory + " /Atras/ " + pos);
//        atras();
//    });
//
//    $("#btnAdelante").click(function (e) {
//        e.preventDefault();
//        var nhistory = window.history.length - 1;
//        var pos = window.history.state.paso;
//        var state = {paso: pos + 1};
//        window.history.replaceState(state, pos + 1, window.location);
//        var pos = window.history.state.paso;
//        alert(nhistory + " /Adelante/ " + pos);
//        adelante();
//    });
//
//
//
//
//});

//function resetHistory() {
//    var numeroDeEntradas = window.history.length - 1;
//    window.history.go(-numeroDeEntradas);
//}


function atras() {
    //alert(window.opener.volverYCargar());
    window.history.back();

}

function adelante() {
    window.history.forward();
}

function actualizar() {
    location.reload(true);
}

function geturl() {
    return document.referrer;
}


/**
 * funcion para eliminar desde cualquier admin
 * @param {String} urlServlet url del Servlet
 * @param {click} btn boton
 * @param {int} idEliminar id
 * @param {String} nombreEliminar nombre
 * @returns {null} No retorna nada
 */
function eliminarAdmin(urlServlet, btn, idEliminar, nombreEliminar) {
    //var claseSmall = ".tabla.stacktable.small-only";
    //alert(urlServlet+" "+btn+" "+idEliminar+" "+nombreEliminar);
    ////////////////////////Eliminar////////////////////////////////////////////      
    $(btn).click(function (e) {
//        e.preventDefault();
        //Datos    
        var filaTabla = $(this).parent().parent().parent();
        //console.log(filaTabla);
        var id = filaTabla.find(idEliminar).val();
        var nombre = filaTabla.find(nombreEliminar).text().trim();
        var data = {
            id: id,
            nombre: nombre
        };
        //alert(id + " // " + nombre);
        //Funcion eliminar
        eliminarDatosFilaTabla(filaTabla, urlServlet, data, nombre);
    });
}

function eliminarAdminDirecto(urlServlet, idEliminar, nombreEliminar, divBorrar) {
    var filaTabla = $(this).parent().parent().parent();
    //console.log(filaTabla);
    var id = idEliminar;
    var nombre = nombreEliminar;
    var data = {
        id: id,
        nombre: nombre
    };
    //alert(id + " // " + nombre);
    //Funcion eliminar
    eliminarDatosFilaTablaDirecto(filaTabla, urlServlet, data, nombre, divBorrar);
}

function eliminarAdminSeguro(urlServlet, btn, idEliminar, nombreEliminar) {
    //var claseSmall = ".tabla.stacktable.small-only";
    //alert(urlServlet+" "+btn+" "+idEliminar+" "+nombreEliminar);
    ////////////////////////Eliminar////////////////////////////////////////////      
    $(btn).click(function (e) {
//        e.preventDefault();
        //Datos    
        swal({
            title: "Confirmación",
            text: "¿Estás seguro que deseas eliminar?",
            type: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'No, cancelar!',
            confirmButtonText: 'Sí, eliminar!',
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: true,
            allowOutsideClick: false

        }).then(function () {

            var filaTabla = $(this).parent().parent().parent();
            //console.log(filaTabla);
            var id = filaTabla.find(idEliminar).val();
            var nombre = filaTabla.find(nombreEliminar).text().trim();
            var data = {
                id: id,
                nombre: nombre
            };
            //alert(id + " // " + nombre);
            //Funcion eliminar
            eliminarDatosFilaTabla(filaTabla, urlServlet, data, nombre);
        },
                //Cancelar
                        function (dismiss) {
                            // dismiss can be 'cancel', 'overlay',
                            // 'close', and 'timer'
                            if (dismiss === 'cancel') {
                                //mesageDialog
                                swal({
                                    title: "Cancelado",
                                    text: "Operación cancelada",
                                    type: "error"
                                });
                                setTimeout(function () {
                                    swal.close();
                                }, 1000); // in milliseconds       
                            }

                        });

            });
}

/**
 * funcion para modificar desde cualquier admin
 * @param {String} href url del jsp
 * @param {click} btn boton
 * @param {int} idModificar id
 * @returns {null} No retorna nada
 */

function modificarAdmin(href, btn, idModificar) {
    //alert(href);

    //console.log(idModificar);
    //console.log(btn);
    ////////////////////////Modificar////////////////////////////////////////////
    //Capturamos la fila que vamos a modificar
    $(btn).click(function (e) {
        //alert(btn);
        e.preventDefault();
        //Datos    
        var filaTabla = $(this).parent().parent();
        var id = filaTabla.find(idModificar).val();
//        alert(id);
        window.location.href = href + id;
    });
}



function modificarAdmin2(href, btn, idModificar) {
    //alert(href);

    //console.log(idModificar);
    //console.log(btn);
    ////////////////////////Modificar////////////////////////////////////////////
    //Capturamos la fila que vamos a modificar
    $(btn).click(function (e) {
        //alert(btn);
        e.preventDefault();
        //Datos    
        var filaTabla = $(this).parent().parent();
        var id = filaTabla.find(idModificar).val();
//        alert(id);
        window.location.href = href + id;
    });
}




function utilidadesCrearClienteContacto() {
    var pathArray = window.location.pathname.split('/');

    var cliente_id = $("#cliente_id").val();
    if (cliente_id !== "") {
        var ruta = "/" + pathArray[1] + "/" + pathArray[2] + "/" + pathArray[3] + "/Ventas/ClienteContacto/Dialog/CrearClienteContacto.jsp?cliente_id=" + cliente_id;//?ruta=" + ruta;

        abrirVentanaEmergente(ruta, window.screen.width, 500);
    } else {
        swal({
            title: "¡Atención!",
            text: "Debes seleccionar un cliente.",
            type: "info",
            width: "auto",
            showLoaderOnConfirm: true
        });

    }
}

//function verExtensionImagen(id) {
//    
//    var ruta = $("#imagen_" + id).val();
//    //alert(ruta);
//    var nombreArchivo = ruta.split("\\")[ruta.split("\\").length - 1];
//    //alert(nombreArchivo);
//    var extensionSplit = nombreArchivo.split(".");
//    var extension = extensionSplit[extensionSplit.length - 1];
//    var pathArray = window.location.pathname.split('/');
//    //alert(extension);
//    //alert(nombreArchivo);
//    extension = extension.toLowerCase();
//    //Si es imagen
//    if (extension === "jpg" || extension === "gif" || extension === "bmp" || extension === "png" || extension === "jpeg") {//imagenes
//        var rutaReproductor = "/" + pathArray[1] + "/" + pathArray[2] + "/" + pathArray[3] + "/Visualizacion/Frame/ReproducirImagen.jsp?ruta=" + ruta;
//        abrirVentanaEmergente(rutaReproductor, window.screen.width, window.screen.height);
//        
//    } else {
//        var downloadLink = document.createElement("a");
//        document.body.appendChild(downloadLink);
//        downloadLink.href = 'data:media_type, ' + ruta;
//        downloadLink.download = nombreArchivo;
//        downloadLink.click();
//    }    
//
//}


function verFicheroExtension(i, id, nombreArchivo) {
    var extensionSplit = nombreArchivo.split(".");
    var extension = extensionSplit[extensionSplit.length - 1];
    var ruta = $("#ruta" + i + "_" + id).val();
    var pathArray = window.location.pathname.split('/');
    //alert(extension);
    //alert(ruta);
    extension = extension.toLowerCase();
    //Si es documento
    if (extension === "pdf" || extension === "epub" || extension === "azw" || extension === "ibook") {//pdf
        //var ruta = $("#ruta" + i + "_" + id).val();
        dirGuardarPDF = ruta;

        var urlServletVerPdf = "/" + pathArray[1] + "/VerPdf?dirGuardarPDF=" + dirGuardarPDF + "&nombreArchivo=" + extensionSplit[0];
        //alert(urlServletVerPdf);
        //alert(pathArray);
        abrirVentanaEmergente(urlServletVerPdf, window.screen.width, window.screen.height);
        //Si es Audio
    } else if (extension === "mp3" || extension === "wav" || extension === "wma" || extension === "3gpp" || extension === "aac" || extension === "ogg" || extension === "opus" || extension === "flac" || extension === "m4a") {//audio
        var rutaReproductor = "/" + pathArray[1] + "/" + pathArray[2] + "/" + pathArray[3] + "/Visualizacion/Frame/ReproducirSonido.jsp?ruta=" + ruta;
        abrirVentanaEmergente(rutaReproductor, window.screen.width, window.screen.height);
        //Si es imagen
    } else if (extension === "jpg" || extension === "gif" || extension === "bmp" || extension === "png" || extension === "jpeg") {//imagenes
        var rutaReproductor = "/" + pathArray[1] + "/" + pathArray[2] + "/" + pathArray[3] + "/Visualizacion/Frame/ReproducirImagen.jsp?ruta=" + ruta;
        abrirVentanaEmergente(rutaReproductor, window.screen.width, window.screen.height);
        //Si es video
    } else if (extension === "mp4" || extension === "mpeg" || extension === "mwv") {//video
        var rutaReproductor = "/" + pathArray[1] + "/" + pathArray[2] + "/" + pathArray[3] + "/Visualizacion/Frame/ReproducirVideo.jsp?ruta=" + ruta;
        abrirVentanaEmergente(rutaReproductor, window.screen.width, window.screen.height);
        //Si es otro tipo de documento
//    } else if (extension === "txt" || extension === "doc" || extension === "docx") {//texto
//        var downloadLink = document.createElement("a");
//        document.body.appendChild(downloadLink);
//        downloadLink.href = 'data:media_type, ' + ruta;
//        downloadLink.download = nombreArchivo;
//        downloadLink.click();
//    } else if (extension === "zip" || extension === "rar" || extension === "tar") {//comprimidos
//        var downloadLink = document.createElement("a");
//        document.body.appendChild(downloadLink);
//        downloadLink.href = 'data:media_type, ' + ruta;
//        downloadLink.download = nombreArchivo;
//        downloadLink.click();
    } else {
//        var downloadLink = document.createElement("a");
//        document.body.appendChild(downloadLink);
//        downloadLink.href = 'data:media_type, ' + ruta;
//        downloadLink.download = nombreArchivo;
//        downloadLink.click();
        var rutaReproductor = "/" + pathArray[1] + "/" + pathArray[2] + "/" + pathArray[3] + "/Visualizacion/Frame/ReproducirDescarga.jsp?ruta=" + ruta;
        abrirVentanaEmergente(rutaReproductor, window.screen.width, window.screen.height);
    }

}

function modificarAdminCampoAñadidoRuta(href, btn, idModificar, añadido) {
    ////////////////////////Modificar////////////////////////////////////////////
    //Capturamos la fila que vamos a modificar
    $(btn).click(function (e) {
        e.preventDefault();
        //Datos    
        var filaTabla = $(this).parent().parent();
        var id = filaTabla.find(idModificar).val();
//        alert(id);
        window.location.href = href + id + "&tipo=" + añadido;
    });
}



/**
 * funcion para detalle desde cualquier admin
 * @param {String} href url del jsp
 * @param {click} btn boton
 * @param {int} idModificar id
 * @returns {null} No retorna nada
 */
function detalleAdmin(href, btn, idModificar) {
    ////////////////////////Modificar////////////////////////////////////////////
    //Capturamos la fila que vamos a modificar
    $(btn).click(function (e) {
        e.preventDefault();
        //Datos    
        var filaTabla = $(this).parent().parent();
        var id = filaTabla.find(idModificar).val();
//        alert(id);
        window.location.href = href + id;
    });
}

function imgPopupPlanos(imgPuntero, imgOnPopup, OnPopup, timeVisible, timeHidden) {

    $(imgPuntero).hover(function () {

        var img = $(this).find("img").attr("src");
        $(imgOnPopup).attr("src", img);
        $(OnPopup).css('visibility', 'visible');
        $(OnPopup).animate(
                {
                    opacity: 1,
                    zIndex: 100
                },
                timeVisible);


    }, function () {
        $(OnPopup).animate(
                {
                    opacity: 0,
                    visibility: 'hidden',
                    zIndex: 100
                },
                timeHidden);
    });
}


function imgPopup(imgPuntero, imgOnPopup, OnPopup, timeVisible, timeHidden) {

    $(imgPuntero).hover(function () {

        var img = $(this).find("img").attr("src");
        $(imgOnPopup).attr("src", img);
        $(OnPopup).css('visibility', 'visible');
        $(OnPopup).animate(
                {
                    opacity: 1,
                    zIndex: 1
                },
                timeVisible);


    }, function () {
        $(OnPopup).animate(
                {
                    opacity: 0,
                    visibility: 'hidden',
                    zIndex: -1
                },
                timeHidden);
    });
}

function imgPopupId(objetoImg, imgOnPopup, OnPopup, timeVisible, timeHidden) {
    //console.log($(objetoImg)[0]);
    var id;
    if (typeof $(objetoImg)[0] !== "undefined") {
        id = $(objetoImg)[0].id;
    }

    //console.log(id);
    $("td div #" + id).hover(function () {

        var img = $("td div #" + id).attr("src");
        $(imgOnPopup).attr("src", img);
        $(OnPopup).css('visibility', 'visible');
        $(OnPopup).animate(
                {
                    opacity: 1,
                    zIndex: 1
                },
                timeVisible);


    }, function () {
        $(OnPopup).animate(
                {
                    opacity: 0,
                    visibility: 'hidden',
                    zIndex: -1
                },
                timeHidden);
    });
}



function printDiv(divName) {

    var printContents = document.getElementById(divName).innerHTML;
    w = window.open();

    w.document.write(printContents);
    w.document.write('<scr' + 'ipt type="text/javascript">' + 'window.onload = function() { window.print(); window.close(); };' + '</sc' + 'ript>');

    w.document.close(); // necessary for IE >= 10
    w.focus(); // necessary for IE >= 10

    return true;
}

function printHTML(htmlString) {
    var newIframe = document.createElement('iframe');
    newIframe.width = '1px';
    newIframe.height = '1px';
    newIframe.src = 'about:blank';

    // for IE wait for the IFrame to load so we can access contentWindow.document.body
    newIframe.onload = function () {
        var script_tag = newIframe.contentWindow.document.createElement("script");
        script_tag.type = "text/javascript";
        var script = newIframe.contentWindow.document.createTextNode('function Print(){ window.focus(); window.print(); }');
        script_tag.appendChild(script);

        newIframe.contentWindow.document.body.innerHTML = htmlString;
        newIframe.contentWindow.document.body.appendChild(script_tag);

        // for chrome, a timeout for loading large amounts of content
        setTimeout(function () {
            newIframe.contentWindow.Print();
            newIframe.contentWindow.document.body.removeChild(script_tag);
            newIframe.parentElement.removeChild(newIframe);
            window.close();

        }, 200);
    };
    document.body.appendChild(newIframe);
}


function imprimir() {
    if (window.print) {
        window.print();
        window.close();
    }
}
;



function b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, {type: contentType});
    return blob;
}

//Resize automatico textarea
function resizeAutoTextArea(idTextArea) {
    $(idTextArea).each(function () {
//        alert(this.scrollHeight);
        this.setAttribute('style', 'height: 22px; width: 100%; padding: 2px; margin: 0px;');
    }).on('input', function () {
//  this.style.height = '10px';
        this.style.height = (this.scrollHeight + 2) + 'px';

    });
}
//Resize automatico textarea por elemento
function resizeAutoTextAreaElemento(elemento) {

//        alert(idTextArea);
//        alert(this.scrollHeight);
//    $(idTextArea).attr('style', 'height: 22px; width: 100%; padding: 2px; margin: 0px;');
    $(elemento).on('input', function () {
//  this.style.height = '10px';
        this.style.height = (this.scrollHeight + 2) + 'px';
    });
}
//Resize automatico textarea
function resizeAutoTextAreaId(idTextArea) {

    // console.log(idTextArea);
//        
//    $(idTextArea).attr('style', 'height: 22px; width: 100%; padding: 2px; margin: 0px;');
    $(idTextArea).on('input', function () {
        // console.log(this);
        this.style.height = (this.scrollHeight + 2) + 'px';
    });
}

/////////////////////////////////////////////////////////////////////////////////
//            inicio      Lineas de venta             //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

function calcularLineaComun(element, claseLarge, claseSmall) {
    //console.log(element);
    //setTimeout(function () {
    //console.log("si tio era yo");
    var decimales = $("#decimales").val();

    var idCampo = element.id;
    var _id = idCampo.split('_');
    var nombre = _id[0];
    var idpos = _id[2];

//        alert(nombre + " // " + idpos);

    if (nombre === "cantidad" || nombre === "precio" || nombre === "descuento" || nombre === "ivaId") {

        var cantidad = $(claseLarge + " #cantidad_linea_" + idpos).val();
        var precio = $(claseLarge + " #precio_linea_" + idpos).val();
        var descuento = $(claseLarge + " #descuento_linea_" + idpos).val();
        var iva = $(claseLarge + ' select[id="ivaId_linea_' + idpos + '"] option:selected').text();

        var importe = 0;
        var importeIva = 0;
        if (cantidad !== '' && precio !== '') {
            //
            var importeBruto = cantidad * precio;
            //
            if (descuento !== '') {
                var importeDescuento = (descuento * importeBruto) / 100;
                var result = importeBruto - importeDescuento;
                importe = redondear(result, decimales);

                importeIva = redondear(importe + (importe * (iva / 100)), decimales);

                $(claseSmall + " #importe_linea_" + idpos).val(importe);
                $(claseLarge + " #importe_linea_" + idpos).val(importe);
                $(claseSmall + " #importeIva_linea_" + idpos).val(importeIva);
                $(claseLarge + " #importeIva_linea_" + idpos).val(importeIva);
            } else {
                importe = redondear(importeBruto, decimales);

                importeIva = redondear(importe + (importe * (iva / 100)), decimales);

                $(claseSmall + " #importe_linea_" + idpos).val(importe);
                $(claseLarge + " #importe_linea_" + idpos).val(importe);
                $(claseSmall + " #importeIva_linea_" + idpos).val(importeIva);
                $(claseLarge + " #importeIva_linea_" + idpos).val(importeIva);
            }

        } else {
            $(claseSmall + " #importe_linea_" + idpos).val(importe);
            $(claseLarge + " #importe_linea_" + idpos).val(importe);
            $(claseSmall + " #importeIva_linea_" + idpos).val(importeIva);
            $(claseLarge + " #importeIva_linea_" + idpos).val(importeIva);
        }
    }

    calcularImporte();
    //}, 200);
}

function calcularImporteComun(tableID) {
    var importeLineas = 0;
    var importeIvaLineas = 0;
    var importeIvaSolo = 0;
    var decimales = $("#decimales").val();

    $(tableID + " .cantidades").each(function () {

        var element = $(this).children();
        var idCampo = element[0].id;
        var _id = idCampo.split('_');

        var idpos = _id[2];

        if ($("#importe_linea_" + idpos).val() !== undefined && $("#importe_linea_" + idpos).val() !== "") {

            importeLineas += parseFloat($("#importe_linea_" + idpos).val());
        }

        if ($("#importeIva_linea_" + idpos).val() !== undefined && $("#importeIva_linea_" + idpos).val() !== "") {

            importeIvaLineas += parseFloat($("#importeIva_linea_" + idpos).val());
        }

    });

    importeIvaSolo += importeIvaLineas - importeLineas;

    $("#baseImponible").val(redondear(importeLineas, decimales));

    $("#importeIva").val(redondear(importeIvaSolo, decimales));

    $("#total").val(redondear(importeIvaLineas, decimales));


}

function crearLineaComun(id, htmlFila, index, claseLarge, claseSmall, htmlCodeTablaLineaFacturaVenta) {

    index++;
    //Añadimos fila a la tabla grande.
    htmlFila = replaceAll(htmlFila, "linea_1", "linea_" + index);
    var clase = id.split("_")[2];
    $(claseLarge + " #linea_" + clase).after(htmlFila);

    //Añadimos codigo a la tabla pequeña
    //Capturamos el código de la tabla pequeña
    var htmlCodeTablaSmall = replaceAll(htmlCodeTablaLineaFacturaVenta, "linea_1", "linea_" + index);
    htmlCodeTablaSmall = replaceAll(htmlCodeTablaSmall, '<tr class="1">', '<tr class="' + index + '">');
    $(claseSmall + " ." + clase + ":last").after(htmlCodeTablaSmall);

    ajusteAutoTextAreaComun(index, claseLarge, claseSmall);
    return index;

}

function crearLineaModificarComun(id, htmlFila, index, claseLarge, claseSmall, htmlCodeTablaLineaFacturaVenta) {
    //alert(id);
    index++;
    //Añadimos fila a la tabla grande.
    htmlFila = replaceAll(htmlFila, "linea_", "linea_" + index);
    var clase = id.split("_")[2];
    $(claseLarge + " #linea_" + clase).after(htmlFila);

    //Añadimos codigo a la tabla pequeña
    //Capturamos el código de la tabla pequeña
    var htmlCodeTablaSmall = replaceAll(htmlCodeTablaLineaFacturaVenta, "linea_1", "linea_" + index);
    htmlCodeTablaSmall = replaceAll(htmlCodeTablaSmall, '<tr class="1">', '<tr class="' + index + '">');
    $(claseSmall + " ." + clase + ":last").after(htmlCodeTablaSmall);

    ajusteAutoTextAreaComun(index, claseLarge, claseSmall);
    return index;
//    alert(htmlFila);
}

function eliminarLineaComun(element, claseLarge, claseSmall, idTabla) {
    //Datos    
    //tabla grande
    var filaTabla = $(element).parent().parent().parent();
    var id = filaTabla[0].id.split("_");
//    alert(id[1]);
    var sizeTable = document.getElementById(idTabla).rows.length - 1;

    if (sizeTable > 1) {
        //lo eliminamos de la grande
        filaTabla.remove(claseLarge + " tr");
        //lo eliminamos tambien de la pequeña
        $(claseSmall + " ." + id[1]).each(function () {
            this.remove();
        });
    }


    //tabla pequeña
    var claseNumero = ($(element).parent().parent().parent()[0]).className;
//    alert(claseNumero);
    let n = 0;
    let numero = 0;
    $(claseSmall + " tr").each(function () {
        let clase = this.className;
        if (numero !== clase) {
            numero = clase;
            n++;
//            alert(n + "  " + numero);
        }
    });

    if (n > 1 && claseNumero !== "") {
        //alert(claseNumero);
        //lo eliminamos Tambien de la tabla grande
        $("#linea_" + claseNumero).remove();
        //eliminamos todos los trs de la pequeña
        $(claseSmall + " ." + claseNumero).each(function () {
            this.remove();
        });
    }
    calcularImporteComun("#" + idTabla);
}

function eliminarLineaModificarComun(element, claseLarge, claseSmall, idTabla, listaEliminados, lineaFacturaVenta_id) {
    var filaTabla = $(element).parent().parent().parent();
    var id = filaTabla[0].id.split("_");
//    alert(id[1]);
    var sizeTable = document.getElementById(idTabla).rows.length - 1;

    if (sizeTable > 2) {
        //lo eliminamos de la grande
        lineaFacturaVenta_id = element.value;
        filaTabla.remove(claseLarge + " tr");
        //lo eliminamos tambien de la pequeña
        $(claseSmall + " ." + id[1]).each(function () {
            this.remove();
        });
        if (lineaFacturaVenta_id !== "") {
            //Añadimos objeto
            listaEliminados.push(lineaFacturaVenta_id);
        }
    }

    //tabla pequeña
    var claseNumero = ($(element).parent().parent().parent()[0]).className;
//    alert(claseNumero);
    let n = 0;
    let numero = 0;
    $(claseSmall + " tr").each(function () {
        let clase = this.className;
        if (numero !== clase) {
            numero = clase;
            n++;
//            alert(n + "  " + numero);
        }
    });

    if (n > 2) {
        lineaFacturaVenta_id = element.value;
        //lo eliminamos Tambien de la tabla grande
        $("#linea_" + claseNumero).remove();
        //eliminamos todos los trs de la pequeña
        $(claseSmall + " ." + claseNumero).each(function () {
            this.remove();
        });
        if (lineaFacturaVenta_id !== "") {
            //Añadimos objeto
            listaEliminados.push(lineaFacturaVenta_id);
        }
    }

    calcularImporteComun("#" + idTabla);
    return listaEliminados;
}

function ajusteAutoTextAreaComun(index, claseLarge, claseSmall) {

    resizeAutoTextAreaId(claseLarge + " #descripcion_linea_" + index);
    resizeAutoTextAreaId(claseSmall + " #descripcion_linea_" + index);
}

function setonDrop(tableID) {
    //Drag and drop filas de tabla
    $(tableID).tableDnD({
        onDrop: function (table, row) {
//            alert($.tableDnD.serialize());
        },
        dragHandle: "dragHandle"
    });

    $(tableID + " tr").hover(function () {
        $(this.cells[0]).addClass('showDragHandle');
    }, function () {
        $(this.cells[0]).removeClass('showDragHandle');
    });
}

function asociarComun(linea, idArticulo, referencia, descripcion, pvp, precioCoste, descuento, unidad, imgimg, habilitarIncremento, modelo, claseSmall, claseLarge) {

    $(claseSmall + " #articuloId_linea_" + linea).val(idArticulo);
    $(claseSmall + " #referencia_linea_" + linea).val(referencia);
    $(claseSmall + " #descripcion_linea_" + linea).val(descripcion);
    $(claseSmall + " #cantidad_linea_" + linea).val(unidad);
    $(claseSmall + " #pvp_linea_" + linea).val(pvp);
    $(claseSmall + " #precioCoste_linea_" + linea).val(precioCoste);
    $(claseSmall + " #imgimg_linea_" + linea).attr("src", imgimg);
    $(claseSmall + " #habilitarIncremento_linea_" + linea).val(habilitarIncremento);

    if (modelo !== null && modelo !== undefined) {
        $(claseSmall + " #modelo_linea_" + linea).val(modelo);
        $(claseLarge + " #modelo_linea_" + linea).val(modelo);
    }

    $(claseLarge + " #articuloId_linea_" + linea).val(idArticulo);
    $(claseLarge + " #referencia_linea_" + linea).val(referencia);
    $(claseLarge + " #descripcion_linea_" + linea).val(descripcion);
    $(claseLarge + " #cantidad_linea_" + linea).val(unidad);
    $(claseLarge + " #pvp_linea_" + linea).val(pvp);
    $(claseLarge + " #precioCoste_linea_" + linea).val(precioCoste);
    $(claseLarge + " #imgimg_linea_" + linea).attr("src", imgimg);
    $(claseLarge + " #habilitarIncremento_linea_" + linea).val(habilitarIncremento);

    setTimeout(function () {
        var objetoImg = $("td div #imgimg_linea_" + linea)[0];
        var OnPopup = ".OnPopup";
        var imgOnPopup = "#imgOnPopup";

        imgPopupId(objetoImg, imgOnPopup, OnPopup, 50, 50);
        $("#cliente_id").trigger("change");
        //calcularImporteComun("#"+$(claseLarge + " #cantidad_linea_" + linea).parent().parent().parent().parent()[0].id);
    }, 100);
}

function asociar2Comun(linea, idArticulo, referencia, descripcion, pvp, precioCoste,
        descuento, unidad, imgimg, habilitarIncremento, grupoArticuloContenidoId,
        grupoArticulosId, grupoArticulosReferencia, grupoArticulosDescripcion, lineaGrupoArticulosId, modelo, claseSmall, claseLarge) {

    if (lineaGrupoArticulosId !== 0) {
        $(claseSmall + " #articuloId_linea_" + linea).val(0);
        $(claseSmall + " #lineaGrupoArticulosId_linea_" + linea).val(lineaGrupoArticulosId);

        $(claseLarge + " #articuloId_linea_" + linea).val(0);
        $(claseLarge + " #lineaGrupoArticulosId_linea_" + linea).val(lineaGrupoArticulosId);
    }

    if (grupoArticulosId !== undefined && grupoArticulosId !== "") {
        $(claseSmall + " #grupoArticulosContenidoId_linea_" + linea).val(grupoArticulosId);
        $(claseSmall + " #grupoArticulosReferencia_linea_" + linea).val(grupoArticulosReferencia);
        $(claseSmall + " #grupoArticulosDescripcion_linea_" + linea).val(grupoArticulosDescripcion);
        $(claseSmall + " #referencia_linea_" + linea).val(grupoArticulosReferencia);
        $(claseSmall + " #descripcion_linea_" + linea).val(grupoArticulosDescripcion);

        $(claseLarge + " #grupoArticulosContenidoId_linea_" + linea).val(grupoArticulosId);
        $(claseLarge + " #grupoArticuloReferencia_linea_" + linea).val(grupoArticulosReferencia);
        $(claseLarge + " #grupoArticuloDescripcion_linea_" + linea).val(grupoArticulosDescripcion);
        $(claseLarge + " #referencia_linea_" + linea).val(grupoArticulosReferencia);
        $(claseLarge + " #descripcion_linea_" + linea).val(grupoArticulosDescripcion);
    } else {
        $(claseSmall + " #articuloId_linea_" + linea).val(idArticulo);
        $(claseSmall + " #referencia_linea_" + linea).val(referencia);
        $(claseSmall + " #descripcion_linea_" + linea).val(descripcion);
        $(claseSmall + " #cantidad_linea_" + linea).val(unidad);
        $(claseSmall + " #pvp_linea_" + linea).val(pvp);
        $(claseSmall + " #precioCoste_linea_" + linea).val(precioCoste);
        $(claseSmall + " #descuento_linea_" + linea).val(descuento);
        $(claseSmall + " #imgimg_linea_" + linea).attr("src", imgimg);
        $(claseSmall + " #habilitarIncremento_linea_" + linea).val(habilitarIncremento);
        $(claseSmall + " #grupoArticuloContenidoId_linea_" + linea).val(grupoArticuloContenidoId);

        if (modelo !== null && modelo !== undefined) {
            $(claseSmall + " #modelo_linea_" + linea).val(modelo);
            $(claseLarge + " #modelo_linea_" + linea).val(modelo);
        }

        $(claseLarge + " #articuloId_linea_" + linea).val(idArticulo);
        $(claseLarge + " #referencia_linea_" + linea).val(referencia);
        $(claseLarge + " #descripcion_linea_" + linea).val(descripcion);
        $(claseLarge + " #cantidad_linea_" + linea).val(unidad);
        $(claseLarge + " #pvp_linea_" + linea).val(pvp);
        $(claseLarge + " #descuento_linea_" + linea).val(descuento);
        $(claseLarge + " #precioCoste_linea_" + linea).val(precioCoste);
        $(claseLarge + " #imgimg_linea_" + linea).attr("src", imgimg);
        $(claseLarge + " #habilitarIncremento_linea_" + linea).val(habilitarIncremento);
        $(claseLarge + " #grupoArticuloContenidoId_linea_" + linea).val(grupoArticuloContenidoId);

        setTimeout(function () {
            var objetoImg = $("td div #imgimg_linea_" + linea)[0];
            var OnPopup = ".OnPopup";
            var imgOnPopup = "#imgOnPopup";

            imgPopupId(objetoImg, imgOnPopup, OnPopup, 50, 50);

            $("#cliente_id").trigger("change");
            //console.log($(claseLarge + " #cantidad_linea_" + linea).parent().parent().parent().parent()[0].id);
            //calcularImporteComun("#"+$(claseLarge + " #cantidad_linea_" + linea).parent().parent().parent().parent()[0].id);
        }, 100);

    }
}

function asociar2MetodoComun(linea, idArticulo, referencia, descripcion, pvp, precioCoste,
        descuento, unidad, imgimg, habilitarIncremento, grupoArticuloContenidoId,
        grupoArticulosId, grupoArticulosReferencia, grupoArticulosDescripcion, lineaGrupoArticulosId, modelo, claseSmall, claseLarge, metodo) {

    if (lineaGrupoArticulosId !== 0) {
        $(claseSmall + " #articuloId_linea_" + linea).val(0);
        $(claseSmall + " #lineaGrupoArticulosId_linea_" + linea).val(lineaGrupoArticulosId);

        $(claseLarge + " #articuloId_linea_" + linea).val(0);
        $(claseLarge + " #lineaGrupoArticulosId_linea_" + linea).val(lineaGrupoArticulosId);
    }

    if (grupoArticulosId !== undefined && grupoArticulosId !== "") {
        $(claseSmall + " #grupoArticulosContenidoId_linea_" + linea).val(grupoArticulosId);
        $(claseSmall + " #grupoArticulosReferencia_linea_" + linea).val(grupoArticulosReferencia);
        $(claseSmall + " #grupoArticulosDescripcion_linea_" + linea).val(grupoArticulosDescripcion);
        $(claseSmall + " #referencia_linea_" + linea).val(grupoArticulosReferencia);
        $(claseSmall + " #descripcion_linea_" + linea).val(grupoArticulosDescripcion);

        $(claseLarge + " #grupoArticulosContenidoId_linea_" + linea).val(grupoArticulosId);
        $(claseLarge + " #grupoArticuloReferencia_linea_" + linea).val(grupoArticulosReferencia);
        $(claseLarge + " #grupoArticuloDescripcion_linea_" + linea).val(grupoArticulosDescripcion);
        $(claseLarge + " #referencia_linea_" + linea).val(grupoArticulosReferencia);
        $(claseLarge + " #descripcion_linea_" + linea).val(grupoArticulosDescripcion);
    } else {
        $(claseSmall + " #articuloId_linea_" + linea).val(idArticulo);
        $(claseSmall + " #referencia_linea_" + linea).val(referencia);
        $(claseSmall + " #descripcion_linea_" + linea).val(descripcion);
        $(claseSmall + " #cantidad_linea_" + linea).val(unidad);
        $(claseSmall + " #pvp_linea_" + linea).val(pvp);
        $(claseSmall + " #precioCoste_linea_" + linea).val(precioCoste);
        $(claseSmall + " #descuento_linea_" + linea).val(descuento);
        $(claseSmall + " #imgimg_linea_" + linea).attr("src", imgimg);
        $(claseSmall + " #habilitarIncremento_linea_" + linea).val(habilitarIncremento);
        $(claseSmall + " #grupoArticuloContenidoId_linea_" + linea).val(grupoArticuloContenidoId);

        if (modelo !== null && modelo !== undefined) {
            $(claseSmall + " #modelo_linea_" + linea).val(modelo);
            $(claseLarge + " #modelo_linea_" + linea).val(modelo);
        }

        $(claseLarge + " #articuloId_linea_" + linea).val(idArticulo);
        $(claseLarge + " #referencia_linea_" + linea).val(referencia);
        $(claseLarge + " #descripcion_linea_" + linea).val(descripcion);
        $(claseLarge + " #cantidad_linea_" + linea).val(unidad);
        $(claseLarge + " #pvp_linea_" + linea).val(pvp);
        $(claseLarge + " #descuento_linea_" + linea).val(descuento);
        $(claseLarge + " #precioCoste_linea_" + linea).val(precioCoste);
        $(claseLarge + " #imgimg_linea_" + linea).attr("src", imgimg);
        $(claseLarge + " #habilitarIncremento_linea_" + linea).val(habilitarIncremento);
        $(claseLarge + " #grupoArticuloContenidoId_linea_" + linea).val(grupoArticuloContenidoId);

        setTimeout(function () {
            var objetoImg = $("td div #imgimg_linea_" + linea)[0];
            var OnPopup = ".OnPopup";
            var imgOnPopup = "#imgOnPopup";

            imgPopupId(objetoImg, imgOnPopup, OnPopup, 50, 50);
            metodo();
            //$("#cliente_id").trigger("change");
            //console.log($(claseLarge + " #cantidad_linea_" + linea).parent().parent().parent().parent()[0].id);
            //calcularImporteComun("#"+$(claseLarge + " #cantidad_linea_" + linea).parent().parent().parent().parent()[0].id);
        }, 100);

    }
}

function articularComun(index, htmlFila, claseSmall, claseLarge, htmlCodeTablaLineaFacturaVenta, linea) {

    $(".articulo").each(function () {

        var articulo_id, referencia, descripcion, pvp, precioCoste, descuento,
                unidad, imgimg, habilitartIncremento, grupoArticulosContenidoId,
                grupoArticulosReferencia, grupoArticulosDescripcion, grupoArticulosId
                , lineaGrupoArticulosId, modelo;
        for (var i = 0; i < $(this).children().length; i++) {
            var nombre = $(this).children()[i].name;
            var valor = $(this).children()[i].value;


            if (nombre === 'articuloId') {
                articulo_id = valor;
            } else if (nombre === 'referencia') {
                referencia = valor;
            } else if (nombre === 'descripcion') {
                descripcion = valor;
            } else if (nombre === 'pvp') {
                pvp = valor;
            } else if (nombre === 'precioCoste') {
                precioCoste = valor;
            } else if (nombre === 'descuento') {
                descuento = valor;
            } else if (nombre === 'cantidad') {
                unidad = valor;
            } else if (nombre === 'imgimg') {
                imgimg = valor;
            } else if (nombre === 'habilitartIncremento') {
                habilitartIncremento = valor;
            } else if (nombre === 'grupoArticulosContenidoId') {
                grupoArticulosContenidoId = valor;
                //articulo_id = 0;
            } else if (nombre === 'grupoArticulosId') {
                grupoArticulosId = valor;
            } else if (nombre === 'grupoArticulosReferencia') {
                grupoArticulosReferencia = valor;
            } else if (nombre === 'grupoArticulosDescripcion') {
                grupoArticulosDescripcion = valor;
            } else if (nombre === 'lineaGrupoArticulosId') {
                if (valor !== '') {
                    lineaGrupoArticulosId = valor;
                } else {
                    lineaGrupoArticulosId = 0;
                }
            } else if (nombre === 'modelo') {
                modelo = valor;
            }
        }
        // console.log(1);
        asociar2Comun(linea, articulo_id, referencia, descripcion, pvp, precioCoste,
                descuento, unidad, imgimg, habilitartIncremento, grupoArticulosContenidoId,
                grupoArticulosId, grupoArticulosReferencia, grupoArticulosDescripcion,
                lineaGrupoArticulosId, modelo, claseSmall, claseLarge);
        //console.log(2);
        recorreTablaUnicoComun(linea, claseSmall, claseLarge);

        //console.log(3);
        index = crearLineaComun("a_a_" + linea, htmlFila, index, claseLarge, claseSmall, htmlCodeTablaLineaFacturaVenta);
        linea = index;

    });
    return index;

}

function asociarGrupoComun(linea, grupoArticulos_id, cantidad) {

    var pathArray = window.location.pathname.split('/');
    var urlServlet = "/" + pathArray[1] + "/CargaSelectOptionGrupoArticulosArticulos";
    var data = {
        grupoArticulos_id: grupoArticulos_id,
        cantidad: cantidad
    };

    $("#divDatos").html("");

    //////////////////////Ajax//////////////////////////
    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,
        success: function (respuesta) {
            var valores = eval(respuesta);
//            alert(valores[0]);
            if (valores.length === 1) {
                $("#divDatos").html(valores[0]);
//                    $(idDiv).change(actualizarTabla());
            } else {
                //mesageDialog
                swal({
                    title: valores[0],
                    text: valores[1],
                    type: "error"
                });
            }
        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {
            // return true;
            articular(linea);
            // 
        }
    });
}

function articularModificarComun(index, htmlFila, claseSmall, claseLarge, htmlCodeTablaLineaFacturaVenta, linea) {

    $(claseLarge + " .articulo").each(function () {

        var articulo_id, referencia, descripcion, pvp, precioCoste, descuento,
                unidad, imgimg, habilitartIncremento, grupoArticulosContenidoId,
                grupoArticulosReferencia, grupoArticulosDescripcion, grupoArticulosId
                , lineaGrupoArticulosId, modelo;

        for (var i = 0; i < $(this).children().length; i++) {
            var nombre = $(this).children()[i].name;
            var valor = $(this).children()[i].value;


            if (nombre === 'articuloId') {
                articulo_id = valor;
            } else if (nombre === 'referencia') {
                referencia = valor;
            } else if (nombre === 'descripcion') {
                descripcion = valor;
            } else if (nombre === 'pvp') {
                pvp = valor;
            } else if (nombre === 'precioCoste') {
                precioCoste = valor;
            } else if (nombre === 'descuento') {
                descuento = valor;
            } else if (nombre === 'cantidad') {
                unidad = valor;
            } else if (nombre === 'imgimg') {
                imgimg = valor;
            } else if (nombre === 'habilitartIncremento') {
                habilitartIncremento = valor;
            } else if (nombre === 'grupoArticulosContenidoId') {
                grupoArticulosContenidoId = valor;
                //articulo_id = 0;
            } else if (nombre === 'grupoArticulosId') {
                grupoArticulosId = valor;
            } else if (nombre === 'grupoArticulosReferencia') {
                grupoArticulosReferencia = valor;
            } else if (nombre === 'grupoArticulosDescripcion') {
                grupoArticulosDescripcion = valor;
            } else if (nombre === 'lineaGrupoArticulosId') {
                if (valor !== '') {
                    lineaGrupoArticulosId = valor;
                } else {
                    lineaGrupoArticulosId = 0;
                }
            } else if (nombre === 'modelo') {
                modelo = valor;
            }
        }

        asociar2Comun(linea, articulo_id, referencia, descripcion, pvp, precioCoste,
                descuento, unidad, imgimg, habilitartIncremento, grupoArticulosContenidoId,
                grupoArticulosId, grupoArticulosReferencia, grupoArticulosDescripcion,
                lineaGrupoArticulosId, modelo, claseSmall, claseLarge);

        recorreTablaUnicoComun(linea, claseSmall, claseLarge);


        index = crearLineaModificarComun("a_a_" + linea, htmlFila, index, claseLarge, claseSmall, htmlCodeTablaLineaFacturaVenta);
        linea = index;

    });
    return index;

}

function recorreTablaUnicoComun(linea, claseSmall, claseLarge) {

    var element = $(claseLarge + " #cantidad_linea_" + linea)[0];

    var decimales = $("#decimales").val();

    if ($(claseLarge + " #habilitarIncremento_linea_" + linea).val() === "true") {
//precioCoste = 0 descuento
//si no incremento

        if (($(claseLarge + " #precioCoste_linea_" + linea).val() !== '') && (parseFloat($(claseLarge + " #precioCoste_linea_" + linea).val()) !== 0.0 || parseFloat($(claseLarge + " #precioCoste_linea_" + linea).val()) !== 0)) {
            var precio = $(claseLarge + " #precioCoste_linea_" + linea).val();
            var incremento = $("#clienteIncremento").val();

            $(claseSmall + " #descuento_linea_" + linea).val("");
            $(claseLarge + " #descuento_linea_" + linea).val("");

            var calculo = parseFloat(precio) + (parseFloat(precio) * (parseFloat(incremento) / 100));

            $(claseSmall + " #precio_linea_" + linea).val(redondear(calculo, decimales));
            $(claseLarge + " #precio_linea_" + linea).val(redondear(calculo, decimales));

        } else if (($(claseLarge + " #precioCoste_linea_" + linea).val() !== '') && (parseFloat($(claseLarge + " #precioCoste_linea_" + linea).val()) === 0.0 || parseFloat($(claseLarge + " #precioCoste_linea_" + linea).val()) === 0)) {
            var pvp = $(claseLarge + " #pvp_linea_" + linea).val();
            var descuento = $("#clienteDescuento").val();

            $(claseSmall + " #descuento_linea_" + linea).val(descuento);
            $(claseLarge + " #descuento_linea_" + linea).val(descuento);

            var calculo = parseFloat(pvp);

            $(claseSmall + " #precio_linea_" + linea).val(redondear(calculo, decimales));
            $(claseLarge + " #precio_linea_" + linea).val(redondear(calculo, decimales));
        }
    } else {

        var pvp = $(claseLarge + " #pvp_linea_" + linea).val();
        if (pvp !== "") {
            var calculo = parseFloat(pvp);
            $(claseSmall + " #precio_linea_" + linea).val(redondear(calculo, decimales));
            $(claseLarge + " #precio_linea_" + linea).val(redondear(calculo, decimales));
        }
    }

    calcularLineaComun(element, claseSmall, claseLarge);
}

function recorrerTablaComun(tableID, claseSmall, claseLarge) {
    var decimales = $("#decimales").val();
    $(tableID + " .cantidades").each(function () {

        var element = $(this).children();
        var idCampo = element[0].id;
        var _id = idCampo.split('_');
        //nombre campo
        // var nombre = _id[0];
        var idpos = _id[2];
        //console.log(idpos);
        //value campo
        // var valor = element.val();
        if ($(claseLarge + " #habilitarIncremento_linea_" + idpos).val() === "true") {

//precioCoste = 0 descuento
//si no incremento
            if ($(claseLarge + " #articuloId_linea_" + idpos).val() !== 0) {//esta linea hace que no se cambien los precios de las lineas escritas a mano
                if (($(claseLarge + " #precioCoste_linea_" + idpos).val() !== '') && (parseFloat($(claseLarge + " #precioCoste_linea_" + idpos).val()) !== 0.0 || parseFloat($("#precioCoste_linea_" + idpos).val()) !== 0)) {
                    var precio = $(claseLarge + " #precioCoste_linea_" + idpos).val();
                    var incremento = $("#clienteIncremento").val();

                    $(claseSmall + " #descuento_linea_" + idpos).val("");
                    $(claseLarge + " #descuento_linea_" + idpos).val("");

                    var calculo = parseFloat(precio) + (parseFloat(precio) * (parseFloat(incremento) / 100));

                    $(claseSmall + " #precio_linea_" + idpos).val(redondear(calculo, decimales));
                    $(claseLarge + " #precio_linea_" + idpos).val(redondear(calculo, decimales));

                } else if ($(claseLarge + " #precioCoste_linea_" + idpos).val() !== '' && parseFloat($(claseLarge + " #precioCoste_linea_" + idpos).val()) === 0.0 || parseFloat($("#precioCoste_linea_" + idpos).val()) === 0) {
                    var pvp = $(claseLarge + " #pvp_linea_" + idpos).val();
                    var descuento = $("#clienteDescuento").val();

                    $(claseSmall + " #descuento_linea_" + idpos).val(descuento);
                    $(claseLarge + " #descuento_linea_" + idpos).val(descuento);

                    var calculo = parseFloat(pvp);

                    $(claseSmall + " #precio_linea_" + idpos).val(redondear(calculo, decimales));
                    $(claseLarge + " #precio_linea_" + idpos).val(redondear(calculo, decimales));
                }
            }

        } else {

            if ($(claseLarge + " #articuloId_linea_" + idpos).val() !== '0' && $(claseLarge + " #pvp_linea_" + idpos).val() !== "") {
                var pvp = $(claseLarge + " #pvp_linea_" + idpos).val();
                var calculo = parseFloat(pvp);
                $(claseSmall + " #precio_linea_" + idpos).val(redondear(calculo, decimales));
                $(claseLarge + " #precio_linea_" + idpos).val(redondear(calculo, decimales));
            }
        }
        calcularLineaComun(element[0], claseLarge, claseSmall);

    });
    calcularImporte();
}

/////////////////////////////////////////////////////////////////////////////////
//            fin      Lineas de venta             //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////
//            inicio      Lineas de compra             //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

function calcularImporteComprasComun(tableID) {

    var importeLineas = 0;
    var importeIvaLineas = 0;
    var importeIvaSolo = 0;
    var decimales = $("#decimales").val();

    $(tableID + " .cantidades").each(function () {

        var element = $(this).children();
        var idCampo = element[0].id;
        var _id = idCampo.split('_');

        var idpos = _id[2];

        if ($("#importe_linea_" + idpos).val() !== undefined && $("#importe_linea_" + idpos).val() !== "") {

            importeLineas += parseFloat($("#importe_linea_" + idpos).val());
        }

        if ($("#importeIva_linea_" + idpos).val() !== undefined && $("#importeIva_linea_" + idpos).val() !== "") {

            importeIvaLineas += parseFloat($("#importeIva_linea_" + idpos).val());
        }

    });

    $("#baseImponible").val(redondear(importeLineas, decimales));

    importeIvaSolo += importeIvaLineas - importeLineas;

    $("#baseImponible").val(redondear(importeLineas, decimales));

    $("#importeIva").val(redondear(importeIvaSolo, decimales));
    var importeIva = redondear(importeIvaSolo, decimales);

    var valorIRPF = $("#irpf").val();
    var importeIrpf = importeLineas * (valorIRPF / 100);
    $("#importeIrpf").val(redondear(importeIrpf, decimales));
    // alert(valorIRPF + " - " + importeIrpf);

    var valorRetencion = $("#retencion").val();
    var importeRetencion = importeLineas * (valorRetencion / 100);
    $("#importeRetencion").val(redondear(importeRetencion, decimales));
    // alert(valorRetencion + " - " + importeRetencion);


    var totalFactura = importeLineas + importeIva - importeIrpf - importeRetencion;
    $("#total").val(redondear(totalFactura, decimales));
}

function asociarComunCompras(linea, idArticulo, referencia, descripcion, pvp, precioCoste, descuento, unidad, imgimg, habilitarIncremento, claseSmall, claseLarge, tableID) {

    $(claseSmall + " #articuloId_linea_" + linea).val(idArticulo);
    $(claseSmall + " #referencia_linea_" + linea).val(referencia);
    $(claseSmall + " #descripcion_linea_" + linea).val(descripcion);
    $(claseSmall + " #cantidad_linea_" + linea).val(unidad);
    $(claseSmall + " #pvp_linea_" + linea).val(pvp);
    $(claseSmall + " #precioCoste_linea_" + linea).val(precioCoste);
    $(claseSmall + " #imgimg_linea_" + linea).attr("src", imgimg);
    $(claseSmall + " #habilitarIncremento_linea_" + linea).val(habilitarIncremento);

    $(claseLarge + " #articuloId_linea_" + linea).val(idArticulo);
    $(claseLarge + " #referencia_linea_" + linea).val(referencia);
    $(claseLarge + " #descripcion_linea_" + linea).val(descripcion);
    $(claseLarge + " #cantidad_linea_" + linea).val(unidad);
    $(claseLarge + " #pvp_linea_" + linea).val(pvp);
    $(claseLarge + " #precioCoste_linea_" + linea).val(precioCoste);
    $(claseLarge + " #imgimg_linea_" + linea).attr("src", imgimg);
    $(claseLarge + " #habilitarIncremento_linea_" + linea).val(habilitarIncremento);

    //compras solo
    var operacion = unidad * precioCoste;
    $(claseSmall + " #precio_linea_" + linea).val(precioCoste);
    $(claseLarge + " #precio_linea_" + linea).val(precioCoste);

    $(claseSmall + " #importe_linea_" + linea).val(operacion);
    $(claseLarge + " #importe_linea_" + linea).val(operacion);

    var elemento = $(claseLarge + " #cantidad_linea_" + linea)[0];

    calcularLinea(elemento);

}


/////////////////////////////////////////////////////////////////////////////////
//            fin      Lineas de compra             //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


function replaceAll(text, search, newstring) {
//    while (text.indexOf(search) !== - 1)
//        text = text.replace(search, newstring);
//    return text;
    if (text === undefined) {
        text = "";
    }
    return text.split(search).join(newstring);
}

function redondear(numero, decimales) {
    var resultado = 0;
    resultado = Math.round(parseFloat(numero) * parseFloat(Math.pow(10, decimales))) / parseFloat(Math.pow(10, decimales));
    return resultado;
}

function roundTo(n, digits) {
    var negative = false;
    if (digits === undefined) {
        digits = 0;
    }
    if (n < 0) {
        negative = true;
        n = n * -1;
    }
    var multiplicator = Math.pow(10, digits);
    n = parseFloat((n * multiplicator).toFixed(11));
    n = (Math.ceil(n, digits) / multiplicator).toFixed(2);
    if (negative) {
        n = (n * -1).toFixed(2);
    }
    return n;
}

//Funcion volver
function retornar(id)
{
    control = document.getElementById(id);
    document.getElementById(id).value = '';
    //document.getElementById(id).select();		
    //document.getElementById(id).focus();
    return;

}

//Funciones auxiliares
function IsNumeric(cadena)
{
    var ValidChars = "0123456789";
    var IsNumber = true;
    var Char;


    for (i = 0; i < cadena.length && IsNumber == true; i++)
    {
        Char = cadena.charAt(i);
        if (ValidChars.indexOf(Char) == -1)
        {
            IsNumber = false;
        }
    }
    return IsNumber;

}

// check to see if input is alphabetic
function isAlphabetic(cadena)
{
    if (cadena.match(/^[a-zA-Z]+$/))
    {
        return true;
    } else
    {
        return false;
    }
}

//Funciones validadoras

//function validaNif(control)
//{
//    if (control.value == "")
//        return;
//    var dni = control.value;
//    var numero = dni.substr(0, dni.length - 1);
//    var let = dni.substr(dni.length - 1, 1);
//    let = let.toUpperCase();
//    numero = numero % 23;
//    var letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
//    letra = letra.substring(numero, numero + 1);
//    //alert(letra);
//    if (letra != let)
//    {
//        mensaje("dni", "es");
//        retornar(control.id);
//    }
//}
//
//
//function validaCif(control)
//{
//    if (control.value == "")
//    {
//        return;
//    }
//    var texto = control.value;
//    var pares = 0;
//    var impares = 0;
//    var suma;
//    var ultima;
//    var unumero;
//    var uletra = new Array("J", "A", "B", "C", "D", "E", "F", "G", "H", "I");
//    var xxx;
//
//    texto = texto.toUpperCase();
//
//    var regular = new RegExp(/^[ABCDEFGHKLMNPQS]\d\d\d\d\d\d\d[0-9,A-J]$/g);
//    if (!regular.exec(texto))
//    {
////        mensaje("cif", "es");
//        retornar(control.id);
//    }
//
//
//    ultima = texto.substr(8, 1);
//
//    for (var cont = 1; cont < 7; cont++) {
//        xxx = (2 * parseInt(texto.substr(cont++, 1))).toString() + "0";
//        impares += parseInt(xxx.substr(0, 1)) + parseInt(xxx.substr(1, 1));
//        pares += parseInt(texto.substr(cont, 1));
//    }
//    xxx = (2 * parseInt(texto.substr(cont, 1))).toString() + "0";
//    impares += parseInt(xxx.substr(0, 1)) + parseInt(xxx.substr(1, 1));
//
//    suma = (pares + impares).toString();
//    unumero = parseInt(suma.substr(suma.length - 1, 1));
//    unumero = (10 - unumero).toString();
//    if (unumero == 10)
//        unumero = 0;
//
//    if ((ultima == unumero) || (ultima == uletra[unumero]))
//        return true;
//    else
//    {
////        mensaje("cif", "es");
//        retornar(control.id);
//    }
//
//}
//
//
//function validaNie(control)
//{
//    if (control.value == "")
//        return;
//
//    var a = control;
//    var temp = a.value.toUpperCase();
//    var cadenadni = "TRWAGMYFPDXBNJZSQVHLCKET";
//    var v1 = new Array(0, 2, 4, 6, 8, 1, 3, 5, 7, 9);
//    var posicion = 0;
//    var letra = " ";
//
//    //Residente en España	
//    if (a.value.length == 9)
//    {
//        if (temp.substr(0, 1) == "X")
//        {
//            var temp1 = temp.substr(1, 7);
//
//            posicion = temp1 % 23; /*Resto de la division entre 23 es la posicion en la cadena*/
//            letra = cadenadni.substring(posicion, posicion + 1);
//            if (!/^[A-Za-z0-9]{9}$/.test(temp))
//            {
//                mensaje("nie", "es");
//                retornar(control.id);
//            } else
//            {
//                //Tiene los 9 dígitos, comprobamos si la letra esta bien
//                var temp1 = temp.substr(1, 7);
//                posicion = temp1 % 23; /*Resto de la division entre 23 es la posicion en la cadena*/
//                letra = cadenadni.charAt(posicion);
//                var letranie = temp.charAt(8);
//                if (letra != letranie) {
//                    mensaje("nie", "es");
//                    retornar(control.id);
//                }
//            }
//        } else
//        {
//            mensaje("nie", "es");
//            retornar(control.id);
//        }
//    } else if (a.value.length == 14) {//14 caracteres, los 2 primeros letras
//        var temp1 = temp.substr(0, 2);
//        if (isAlphabetic(temp1) != true)
//        {
//            mensaje("nie", "es");
//            retornar(control.id);
//        }
//    } else
//    {
//        mensaje("nie", "es");
//        retornar(control.id);
//
//    }
//
//}

//function mensaje(msg, lang)
//{
//    if (lang == "es")
//    {
//        if (msg == "dni")
//        {
//            alert("DNI no valido");
//        } else if (msg == "cif")
//        {
//            alert("CIF no valido");
//        } else if (msg == "nie")
//        {
//            alert("NIE no valido");
//        } else if (msg == "dc")
//        {
//            alert("El digito de control no es correcto");
//        } else if (msg == "completo")
//        {
//            alert("Rellene todos los datos de la cuenta");
//        } else if (msg == "formato")
//        {
//            alert("Formato incorrecto");
//        } else
//            alert("Formato no valido");
//    }
//
//}

function validar(ibanco, isucursal, idc, icuenta)
{
    var banco = (document.getElementById(ibanco).value);
    var sucursal = (document.getElementById(isucursal).value);
    var dc = (document.getElementById(idc).value);
    var cuenta = (document.getElementById(icuenta).value);

    if (banco == "" || sucursal == "" || dc == "" || cuenta == "") {
        return;
    } else
    {
        if (banco.length != 4 || sucursal.length != 4 ||
                dc.length != 2 || cuenta.length != 10)
        {
            mensaje("completo", "es");
            retornar(idc);
        } else {
            if (!numerico(banco) || !numerico(sucursal) ||
                    !numerico(dc) || !numerico(cuenta)) {
                mensaje("formato", "es");
                retornar(ibanco);
                retornar(isucursal);
                retornar(idc);
                retornar(icuenta);
            } else {
                //alert(obtenerDigito("00" + banco + sucursal));
                //alert(obtenerDigito(cuenta));
                if (!(obtenerDigito("00" + banco + sucursal) ==
                        parseInt(dc.charAt(0))) ||
                        !(obtenerDigito(cuenta) ==
                                parseInt(dc.charAt(1))))
                {
                    mensaje("dc", "es");
                    retornar(idc);
                } else
                    return;
            }
        }
    }
}

function numerico(valor) {
    cad = valor.toString();
    for (var i = 0; i < cad.length; i++) {
        var caracter = cad.charAt(i);
        if (caracter < "0" || caracter > "9")
            return false;
    }
    return true;
}

function obtenerDigito(valor) {
    valores = new Array(1, 2, 4, 8, 5, 10, 9, 7, 3, 6);
    control = 0;
    for (i = 0; i <= 9; i++)
        control += parseInt(valor.charAt(i)) * valores[i];
    control = 11 - (control % 11);
    if (control == 11)
        control = 0;
    else if (control == 10)
        control = 1;
    return control;
}


function validaNif2(c1, c2)
{
    var campo1 = (document.getElementById(c1).value);
    var campo2 = (document.getElementById(c2).value);

    if (campo1 == "" || campo2 == "") {
        return;
    } else {
        var dni = campo1 + campo2;
        var numero = dni.substr(0, dni.length - 1);
        var let = dni.substr(dni.length - 1, 1);
        numero = numero % 23;
        var letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero + 1);
        if (letra != let)
        {
            mensaje("dni", "es");
            retornar(c2);
        }
    }
}

function validaCif2(c1, c2)
{
    var campo1 = (document.getElementById(c1).value);
    var campo2 = (document.getElementById(c2).value);

    if (campo1 == "" || campo2 == "") {
        return;
    } else {
        //alert("Cif "+campo1+" "+campo2);

        var texto = campo1 + campo2;
        var pares = 0;
        var impares = 0;
        var suma;
        var ultima;
        var unumero;
        var uletra = new Array("J", "A", "B", "C", "D", "E", "F", "G", "H", "I");
        var xxx;

        texto = texto.toUpperCase();

        var regular = new RegExp(/^[ABCDEFGHKLMNPQS]\d\d\d\d\d\d\d[0-9,A-J]$/g);
        if (!regular.exec(texto))
        {
            mensaje("cif", "es");
            retornar(control.id);
        }


        ultima = texto.substr(8, 1);

        for (var cont = 1; cont < 7; cont++) {
            xxx = (2 * parseInt(texto.substr(cont++, 1))).toString() + "0";
            impares += parseInt(xxx.substr(0, 1)) + parseInt(xxx.substr(1, 1));
            pares += parseInt(texto.substr(cont, 1));
        }
        xxx = (2 * parseInt(texto.substr(cont, 1))).toString() + "0";
        impares += parseInt(xxx.substr(0, 1)) + parseInt(xxx.substr(1, 1));

        suma = (pares + impares).toString();
        unumero = parseInt(suma.substr(suma.length - 1, 1));
        unumero = (10 - unumero).toString();
        if (unumero == 10)
            unumero = 0;

        if ((ultima == unumero) || (ultima == uletra[unumero]))
            return true;
        else
        {
            mensaje("cif", "es");
            retornar(c2);
        }

    }



}

function validaNie2(c1, c2)
{
    var campo1 = (document.getElementById(c1).value);
    var campo2 = (document.getElementById(c2).value);

    if (campo1 == "" || campo2 == "") {
        return;
    } else {
        //alert("Nie "+campo1+" "+campo2);		

        var a = campo1 + campo2;
        var temp = a.toUpperCase();
        var cadenadni = "TRWAGMYFPDXBNJZSQVHLCKET";
        var v1 = new Array(0, 2, 4, 6, 8, 1, 3, 5, 7, 9);
        var posicion = 0;
        var letra = " ";

        //Residente en España	
        if (a.length == 9)
        {
            if (temp.substr(0, 1) == "X")
            {
                var temp1 = temp.substr(1, 7);

                posicion = temp1 % 23; /*Resto de la division entre 23 es la posicion en la cadena*/
                letra = cadenadni.substring(posicion, posicion + 1);
                if (!/^[A-Za-z0-9]{9}$/.test(temp))
                {
                    mensaje("nie", "es");
                    retornar(c2);
                } else
                {
                    //Tiene los 9 dígitos, comprobamos si la letra esta bien
                    var temp1 = temp.substr(1, 7);
                    posicion = temp1 % 23; /*Resto de la division entre 23 es la posicion en la cadena*/
                    letra = cadenadni.charAt(posicion);
                    var letranie = temp.charAt(8);
                    if (letra != letranie) {
                        mensaje("nie", "es");
                        retornar(c2);
                    }
                }
            } else
            {
                mensaje("nie", "es");
                retornar(c2);
            }
        } else if (a.length == 14) {//14 caracteres, los 2 primeros letras
            var temp1 = temp.substr(0, 2);
            if (isAlphabetic(temp1) != true)
            {
                mensaje("nie", "es");
                retornar(c2);
            }
        } else
        {
            mensaje("nie", "es");
            retornar(c2);

        }

    }
}


function validaycalculaIBAN() {

    var codPais = document.getElementById("codPais");
    var entidad = document.getElementById("entidad");
    var sucursal = document.getElementById("sucursal");
    var dc = document.getElementById("dc");
    var ncuenta = document.getElementById("ncuenta");

    if (compruebaCCC(entidad.value,
            sucursal.value,
            dc.value,
            ncuenta.value)) {
        alert(calculaIBAN(codPais.value,
                entidad.value,
                sucursal.value,
                dc.value,
                ncuenta.value));
    } else {
//	 alert("Número de cuenta incorrecto");
    }
}

function calculaIBAN(codPais, entidad, sucursal, dc, ncuenta) {

    var preIban = entidad +
            sucursal +
            dc +
            ncuenta +
            damePesoIBAN(codPais.charAt(0)) +
            damePesoIBAN(codPais.charAt(1)) +
            "00";
    var dcIban = 98 - modulo(preIban, 97);
    dcIban = rellenaCeros(dcIban, 2);
    return codPais + dcIban + entidad + sucursal + dc + ncuenta;

}

function modulo(preIban, divisor) {

    var resto = 0;
    for (var i = 0; i < preIban.length; i += 10) {
        var dividendo = resto + "" + preIban.substr(i, 10);
        resto = dividendo % divisor;
    }

    return resto;
}

function damePesoIBAN(letra) {
    var peso = "";
    letra = letra.toUpperCase();
    switch (letra) {
        case 'A':
            peso = "10";
            break;
        case 'B':
            peso = "11";
            break;
        case 'C':
            peso = "12";
            break;
        case 'D':
            peso = "13";
            break;
        case 'E':
            peso = "14";
            break;
        case 'F':
            peso = "15";
            break;
        case 'G':
            peso = "16";
            break;
        case 'H':
            peso = "17";
            break;
        case 'I':
            peso = "18";
            break;
        case 'J':
            peso = "19";
            break;
        case 'K':
            peso = "20";
            break;
        case 'L':
            peso = "21";
            break;
        case 'M':
            peso = "22";
            break;
        case 'N':
            peso = "23";
            break;
        case 'O':
            peso = "24";
            break;
        case 'P':
            peso = "25";
            break;
        case 'Q':
            peso = "26";
            break;
        case 'R':
            peso = "27";
            break;
        case 'S':
            peso = "28";
            break;
        case 'T':
            peso = "29";
            break;
        case 'U':
            peso = "30";
            break;
        case 'V':
            peso = "31";
            break;
        case 'W':
            peso = "32";
            break;
        case 'X':
            peso = "33";
            break;
        case 'Y':
            peso = "34";
            break;
        case 'Z':
            peso = "35";
            break;
    }
    return peso;
}

function compruebaCCC(entidad, sucursal, dc, nCuenta) {
    entidad = rellenaCeros(entidad, 4);
    sucursal = rellenaCeros(sucursal, 4);
    dc = rellenaCeros(dc, 2);
    nCuenta = rellenaCeros(nCuenta, 10);

    var concatenado = entidad + sucursal;
    var dc1 = calculaDCParcial(concatenado);
    var dc2 = calculaDCParcial(nCuenta);
    return (dc == (dc1 + dc2));
}

function calculaDCParcial(cadena) {
    var dcParcial = 0;
    var tablaPesos = [6, 3, 7, 9, 10, 5, 8, 4, 2, 1];
    var suma = 0;
    var i;
    for (i = 0; i < cadena.length; i++) {
        suma = suma + cadena.charAt(cadena.length - 1 - i) * tablaPesos[i];
    }
    dcParcial = (11 - (suma % 11));
    if (dcParcial == 11)
        dcParcial = 0;
    else if (dcParcial == 10)
        dcParcial = 1;
    return dcParcial.toString();
}

function rellenaCeros(numero, longitud) {
    var ceros = '';
    var i;
    numero = numero.toString();
    for (i = 0; (longitud - numero.length) > i; i++) {
        ceros += '0';
    }
    return ceros + numero;
}



//---print button---"
function printCodigoBarras(divCodigoBarras) {
    var areaImpresion = document.getElementById(divCodigoBarras);
    //var areaInicial = areaImpresion.style.display;
    //console.log(areaImpresion.innerHTML);
    //$(areaImpresion).css("display", "none");
    //areaImpresion.style.display = "inline-block";
    //console.log(areaImpresion);
    var printWindow = window.open('', '_blank');

    printWindow.document.write(areaImpresion.innerHTML);
    printWindow.document.close();
    printWindow.print({
//        printer: 'Guardar como PDF',
        margin: '0cm'
    });

    printWindow.close();
    //areaImpresion.style.display = areaInicial;
}


//geolocalizacion
function geoComprobar() {
    //var content = document.getElementById("geolocation-test");
    var mensaje = "";
    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(function (objPosition)
        {
            //var lon = objPosition.coords.longitude;
            //var lat = objPosition.coords.latitude;

            //console.log(lat + " - " + lon);
            //setTimeout(function () {
            $(".btnFormAceptar").css("display", "inline-block");
            // }, 2000);
            //content.innerHTML = "<p><strong>Latitud:</strong> " + lat + "</p><p><strong>Longitud:</strong> " + lon + "</p>";

        }, function (objPositionError)
        {
            switch (objPositionError.code)
            {
                case objPositionError.PERMISSION_DENIED:
                    mensaje = "No se ha permitido el acceso a la posición del usuario.";
                    break;
                case objPositionError.POSITION_UNAVAILABLE:
                    mensaje = "No se ha podido acceder a la información de su posición.";
                    break;
                case objPositionError.TIMEOUT:
                    mensaje = "El servicio ha tardado demasiado tiempo en responder.";
                    break;
                default:
                    mensaje = "Error desconocido.";

            }
            setTimeout(function () {
                ventanaAtras(window, swal);
            }, 2000);
            swal({
                title: "¡Atención!",
                text: mensaje,
                type: 'error'
            });

        }, {
            maximumAge: 75000,
            timeout: 15000
        });

    } else
    {
        mensaje = "Su navegador no soporta la API de geolocalización.";
        setTimeout(function () {
            ventanaAtras(window, swal);
        }, 2000);
        swal({
            title: "¡Atención!",
            text: mensaje,
            type: 'error'
        });
    }
}

function geoLocalizar() {
    //var content = document.getElementById("geolocation-test");
    var mensaje = "";

    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(function (objPosition)
        {
            var pathArray = window.location.pathname.split('/');
            var urlServlet = "/" + pathArray[1] + "/CrearMantLocalizacion";
            var lon = objPosition.coords.longitude;
            var lat = objPosition.coords.latitude;

            var data = {
                lon: lon,
                lat: lat
            };

            enviarDatosSinSwal(urlServlet, data, false);
            //mensaje = lat + " - " + lon;
            //console.log(lat + " - " + lon);
            //content.innerHTML = "<p><strong>Latitud:</strong> " + lat + "</p><p><strong>Longitud:</strong> " + lon + "</p>";

        }, function (objPositionError)
        {
            switch (objPositionError.code)
            {
                case objPositionError.PERMISSION_DENIED:
                    mensaje = "No se ha permitido el acceso a la posición del usuario.";
                    break;
                case objPositionError.POSITION_UNAVAILABLE:
                    mensaje = "No se ha podido acceder a la información de su posición.";
                    break;
                case objPositionError.TIMEOUT:
                    mensaje = "El servicio ha tardado demasiado tiempo en responder.";
                    break;
                default:
                    mensaje = "Error desconocido.";
            }
            setTimeout(function () {
                ventanaAtras(window, swal);
            }, 2000);
            swal({
                title: "¡Atención!",
                text: mensaje,
                type: 'error'
            });

        }, {
            maximumAge: 75000,
            timeout: 15000
        });
    } else
    {
        mensaje = "Su navegador no soporta la API de geolocalización.";
        setTimeout(function () {
            ventanaAtras(window, swal);
        }, 2000);
        swal({
            title: "¡Atención!",
            text: mensaje,
            type: 'error'
        });

    }
}

function geoLocalizarSinReload() {
    //var content = document.getElementById("geolocation-test");
    var mensaje = "";

    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(function (objPosition)
        {
            var pathArray = window.location.pathname.split('/');
            var urlServlet = "/" + pathArray[1] + "/CrearMantLocalizacion";
            var lon = objPosition.coords.longitude;
            var lat = objPosition.coords.latitude;

            //console.log(navigator.geolocation);


            var data = {
                lon: lon,
                lat: lat
            };

            enviarDatosSinSwalSinReload(urlServlet, data, false);
            //mensaje = lat + " - " + lon;
            //console.log(lat + " - " + lon);
            //content.innerHTML = "<p><strong>Latitud:</strong> " + lat + "</p><p><strong>Longitud:</strong> " + lon + "</p>";

        }, function (objPositionError)
        {
            switch (objPositionError.code)
            {
                case objPositionError.PERMISSION_DENIED:
                    mensaje = "No se ha permitido el acceso a la posición del usuario.";
                    break;
                case objPositionError.POSITION_UNAVAILABLE:
                    mensaje = "No se ha podido acceder a la información de su posición.";
                    break;
                case objPositionError.TIMEOUT:
                    mensaje = "El servicio ha tardado demasiado tiempo en responder.";
                    break;
                default:
                    mensaje = "Error desconocido.";
            }
//            setTimeout(function () {
//                ventanaAtras(window, swal);
//            }, 2000);
//            swal({
//                title: "¡Atención!",
//                text: mensaje,
//                type: 'error'
//            });

        }, {
            enableHighAccuracy: true,
            maximumAge: 75000,
            timeout: 15000
        });
    } else
    {
        mensaje = "Su navegador no soporta la API de geolocalización.";
//        setTimeout(function () {
//            ventanaAtras(window, swal);
//        }, 2000);
//        swal({
//            title: "¡Atención!",
//            text: mensaje,
//            type: 'error'
//        });

    }
}


function enviarLoteNube(volverAtras) {

    //Ventana de opcion
    swal({
        title: "Confirmación",
        text: "¿Deseas ENVIAR el INFORME a la NUBE?",
        type: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No, cancelar!',
        confirmButtonText: 'Sí, enviar!',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: true,
        allowOutsideClick: false

    }).then(function () {

        var pathArray = window.location.pathname.split('/');

        var lote_id = $("#lote_id").val();

        //Construimos las gráficas
        $(".listaOrdenTrabajo_id").each(function () {

            var ordenTrabajo_id = $(this).val();
//                alert("ordenTrabajo " + ordenTrabajo_id);
            var url = "/" + pathArray[1] + "/Main/Web/Produccion/OrdenTrabajo/Informe/Frame/InformeOrdenTrabajo.jsp?lote_id=" + lote_id + "&ordenTrabajo_id=" + ordenTrabajo_id + "&accion=EnviarInforme&tipoVisualizacion=Informe";
            abrirVentanaEmergente(url, window.screen.width, window.screen.height);

            var url = "/" + pathArray[1] + "/Main/Web/Produccion/OrdenTrabajo/Informe/Frame/ImprimirGraficaOrdenTrabajo.jsp?lote_id=" + lote_id + "&ordenTrabajo_id=" + ordenTrabajo_id + "&accion=EnviarInforme&tipoVisualizacion=grafica";
            abrirVentanaEmergente(url, window.screen.width, window.screen.height);
        });

        //Contruimos las actuaciones
        $(".listaActuacionOT_id").each(function () {
            var actuacionOT_id = $(this).val();
//                alert("actuacionOT " + actuacionOT_id);
            var url = "/" + pathArray[1] + "/Main/Web/Produccion/ActuacionOT/Informe/Frame/InformeActuacionOT.jsp?lote_id=" + lote_id + "&actuacionOT_id=" + actuacionOT_id + "&accion=EnviarInforme";
            abrirVentanaEmergente(url, window.screen.width, window.screen.height);
        });


        if (volverAtras === true) {
            setTimeout(function () {
                ventanaAtras(window, swal);
            }, 1000); // in milliseconds
        }

//        //Hacemos la copia de seguridad en la nube
//        //Capturamos la ruta para envio de datos a servlet    
//        var urlServletCopiarDirectorioArchivos = "/" + pathArray[1] + "/CopiarDirectorioArchivos";
//        $.ajax({
//            url: urlServletCopiarDirectorioArchivos,
//            type: 'POST',
//            data: null,
//            //Antes del envio
//            beforeSend: function () {
//                //mesageDialog
//                swal({
//                    title: "Procesando:",
//                    text: "Procesando, espere por favor...",
//                    type: "info",
//                    width: "auto",
//                    showLoaderOnConfirm: true
//                });
//            },
//            //Envio
//            success: function (respuesta) {
//                swal({
//                    title: "Perfecto:",
//                    text: "Has subido todos los informes.",
//                    type: "success"
//                });
//                
//            },
//            //Funcion error de respuesta    
//            error: function (jqXHR, textStatus, errorThrown) {
//                errorAjax(jqXHR, textStatus, errorThrown, urlServletCopiarDirectorioArchivos);
//            },
//            complete: function () {
//                swal.close();
//            }
//        });

    },
            //Cancelar
                    function (dismiss) {
                        // dismiss can be 'cancel', 'overlay',
                        // 'close', and 'timer'
                        if (dismiss === 'cancel') {
                            //mesageDialog
                            swal({
                                title: "Cancelado",
                                text: "Operación cancelada",
                                type: "error"
                            });
                            setTimeout(function () {
                                ventanaAtras(window, swal);
                            }, 1000); // in milliseconds       
                        }
                    });
        }

function enviarAllLotesNube() {

    var pathArray = window.location.pathname.split('/');

    var time = 0;
    $(".listaLote_id").each(function () {
        var lote_id = $(this).val();
        //
        setTimeout(function () {

            //Construimos las gráficas
            $(".listaOrdenTrabajo_id" + lote_id).each(function () {
                var ordenTrabajo_id = $(this).val();
//                alert("ordenTrabajo " + ordenTrabajo_id);
                var url = "/" + pathArray[1] + "/Main/Web/Produccion/OrdenTrabajo/Informe/Frame/InformeOrdenTrabajo.jsp?lote_id=" + lote_id + "&ordenTrabajo_id=" + ordenTrabajo_id + "&accion=EnviarInforme&tipoVisualizacion=Informe";
                abrirVentanaEmergente(url, window.screen.width, window.screen.height);


                var url = "/" + pathArray[1] + "/Main/Web/Produccion/OrdenTrabajo/Informe/Frame/ImprimirGraficaOrdenTrabajo.jsp?lote_id=" + lote_id + "&ordenTrabajo_id=" + ordenTrabajo_id + "&accion=EnviarInforme&tipoVisualizacion=grafica";
                abrirVentanaEmergente(url, window.screen.width, window.screen.height);

            });

            //Contruimos las actuaciones
            $(".listaActuacionOT_id" + lote_id).each(function () {
                var actuacionOT_id = $(this).val();
//                alert("actuacionOT " + actuacionOT_id);
                var url = "/" + pathArray[1] + "/Main/Web/Produccion/ActuacionOT/Informe/Frame/InformeActuacionOT.jsp?lote_id=" + lote_id + "&actuacionOT_id=" + actuacionOT_id + "&accion=EnviarInforme";
                abrirVentanaEmergente(url, window.screen.width, window.screen.height);
            });

        }, time);

        time += 15000;

    });

}


function cardFormValidate() {
    var cardValid = 0;

    //card number validation
    $('#card_number').validateCreditCard(function (result) {
        if (result.valid) {
            $("#card_number").removeClass('required');
            cardValid = 1;
        } else {
            $("#card_number").addClass('required');
            cardValid = 0;
        }
    });

    //card details validation
    var cardName = $("#name_on_card").val();
    var expMonth = $("#expiry_month").val();
    var expYear = $("#expiry_year").val();
    var cvv = $("#cvv").val();
    var regName = /^[a-z ,.'-]+$/i;
    var regMonth = /^01|02|03|04|05|06|07|08|09|10|11|12$/;
    var regYear = /^2017|2018|2019|2020|2021|2022|2023|2024|2025|2026|2027|2028|2029|2030|2031$/;
    var regCVV = /^[0-9]{3,3}$/;
    if (cardValid == 0) {
        $("#card_number").addClass('required');
        $("#card_number").focus();
        return false;
    } else if (!regMonth.test(expMonth)) {
        $("#card_number").removeClass('required');
        $("#expiry_month").addClass('required');
        $("#expiry_month").focus();
        return false;
    } else if (!regYear.test(expYear)) {
        $("#card_number").removeClass('required');
        $("#expiry_month").removeClass('required');
        $("#expiry_year").addClass('required');
        $("#expiry_year").focus();
        return false;
    } else if (!regCVV.test(cvv)) {
        $("#card_number").removeClass('required');
        $("#expiry_month").removeClass('required');
        $("#expiry_year").removeClass('required');
        $("#cvv").addClass('required');
        $("#cvv").focus();
        return false;
    } else if (!regName.test(cardName)) {
        $("#card_number").removeClass('required');
        $("#expiry_month").removeClass('required');
        $("#expiry_year").removeClass('required');
        $("#cvv").removeClass('required');
        $("#name_on_card").addClass('required');
        $("#name_on_card").focus();
        return false;
    } else {
        $("#card_number").removeClass('required');
        $("#expiry_month").removeClass('required');
        $("#expiry_year").removeClass('required');
        $("#cvv").removeClass('required');
        $("#name_on_card").removeClass('required');
        return true;
    }


}


function getSO() {
    return navigator.userAgentData.platform;
}

function getFileSeparator() {
    let SO = navigator.userAgentData.platform;

    if (SO === 'Windows') {
        return '\\';
    } else if (SO === 'Linux') {
        return '/';
    } else if (SO === 'macOS') {
        return '/';
    }
}