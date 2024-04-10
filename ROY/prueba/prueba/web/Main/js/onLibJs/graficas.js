/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function getDatosGrafica(urlServlet, data, Onimprimir, animacion, resize, accion) {
    //////////////////////Ajax//////////////////////////
    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,
        dataType: "json",
        success: function (respuesta) {

            try {

                var labels = new Array();
                var arrayDatos = new Array();

                if (respuesta.length > 0) {

                    for (var i = 0; i < respuesta.length; i++) {
                        var label = respuesta[i].variable_nombre + " (" + respuesta[i].unidadVariable + ")";
                        //alert(label);
                        labels.push(label);
                    }

                    //Eliminar duplicados de un array en Javascript

                    labels = labels.filter(function (elem, pos) {
                        return labels.indexOf(elem) === pos;
                    });



                    for (var i = 0; i < labels.length; i++) {
                        var datos = [];
                        for (var d = 0; d < respuesta.length; d++) {
                            //console.log(labels[i]);
                            if (labels[i] === respuesta[d].variable_nombre + " (" + respuesta[i].unidadVariable + ")") {
                                datos.push(["'" + respuesta[d].fecha_Hora + "'", respuesta[d].dato]);
                            }
                        }
                        arrayDatos.push(datos);
                        //console.log(datos);
                        //console.log(arrayDatos[i]);
                    }

                    //Buscamos los valores máximos y mínimos
                    var valores = [];
                    for (var i = 0; i < respuesta.length; i++) {
                        valores.push(respuesta[i].dato);
                    }
                    var min = Math.min.apply(null, valores) * 1.2;
                    if (min > 0) {
                        min = 0;
                    }
                    //alert(min);
                    var max = Math.max.apply(null, valores) * 1.1;
                    max = Math.round(max);
                    //alert(max);

                    //console.log(arrayDatos);                
//                meterGauge();
                    dibujarGraficaLineal([arrayDatos], labels, min, max, animacion, resize);

                } else {
                    //mesageDialog
                    swal({
                        title: "Error",
                        text: "No existen datos para crear la gráfica",
                        type: "error"
                    });
                }

            } catch (e) {
                //mesageDialog
                swal({
                    title: "Error",
                    text: "No se ha podido crear la gráfica",
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

            if (accion === "VerInforme") {

            } else if (accion === "Imprimir") {
                if (Onimprimir === true) {
                    imprimir();
                }
            } else if (accion === "DescargarInforme") {

            } else if (accion === "EnviarInforme") {
                enviarInforme();
            }

            //

        }
    });
}
function getDatosGraficaCom(urlServlet, data, Onimprimir, animacion, resize, accion, nombrePdfActuacion, min, max, año, mes, semana, carpetaEstadoLote) {
    //////////////////////Ajax//////////////////////////
    //console.log(data);
    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,
        dataType: "json",
        success: function (respuesta) {

            try {

                var labels = new Array();
                var arrayDatos = new Array();
                var seriesColors = new Array();
                var series = new Array();

                if (respuesta.length > 0) {

                    for (var i = 0; i < respuesta.length; i++) {
                        var label = respuesta[i].variable_nombre + " (" + respuesta[i].unidadVariable + ")";
                        var grafLineColor = respuesta[i].grafLineColor;
                        var grafLineSize = respuesta[i].grafLineSize;
                        var grafVisualizacion = respuesta[i].grafVisualizacion;

                        if (grafVisualizacion == 0) {
                            series.push({
                                // Don't show a line, just show markers.
                                // Make the markers 7 pixels with an 'x' style
                                showLine: true,
                                lineWidth: grafLineSize,
                                markerOptions: {size: 7, style: "x"}
                            });
                        } else {
                            series.push({
                                showMarker: false, //Puntos de líneas
                                showLine: true,
                                lineWidth: 0,
                                // Use (open) circlular markers.
                                markerOptions: {size: 1, style: "circle"}
                            });
                        }
//                        alert(label);
                        labels.push(label);
                        seriesColors.push(grafLineColor);

                    }


                    //Eliminar duplicados de un array en Javascript

                    labels = labels.filter(function (elem, pos) {
                        return labels.indexOf(elem) === pos;
                    });



                    for (var i = 0; i < labels.length; i++) {
                        var datos = [];
                        for (var d = 0; d < respuesta.length; d++) {
//                        alert(labels[i].variable_nombre);
                            if (labels[i] === respuesta[d].variable_nombre + " (" + respuesta[i].unidadVariable + ")") {
                                datos.push(["'" + respuesta[d].fecha_Hora + "'", respuesta[d].dato]);
                            }
                        }
                        arrayDatos.push(datos);
//                    alert(datos);
//                    alert(arrayDatos[i]);
                    }

                    //Buscamos los valores máximos y mínimos
//                    var valores = [];
//                    for (var i = 0; i < respuesta.length; i++) {
//                        valores.push(respuesta[i].dato);
//                    }
//                    var min = Math.min.apply(null, valores) * 1.2;
//                    if (min > 0) {
//                        min = 0;
//                    } else {
                    min = Math.floor(min);
//                    }
//
//                alert(min);
//                    var max = Math.max.apply(null, valores) * 1.1;
                    max = Math.round(max);

//                alert(max);

                    var tickInterval = 1;
                    var dif = max - min;
                    if (dif >= 10 && dif < 50) {
                        tickInterval = 1;
                    } else
                    if (dif >= 50 && dif < 100) {
                        tickInterval = 5;
                    } else
                    if (dif >= 100 && dif < 500) {
                        tickInterval = 10;
                    } else
                    if (dif >= 500 && dif < 1000) {
                        tickInterval = 50;
                    } else
                    if (dif >= 1000 && dif < 5000) {
                        tickInterval = 100;
                    } else
                    if (dif >= 5000 && dif < 10000) {
                        tickInterval = 500;
                    }

//                alert(arrayDatos);                
//                meterGauge();
                    dibujarGraficaLineal([arrayDatos], labels, min, max, tickInterval, animacion, resize, seriesColors, series);

                } else {
                    //mesageDialog
                    swal({
                        title: "Error",
                        text: "No existen datos para crear la gráfica",
                        type: "error"
                    });
                }

            } catch (e) {
                //mesageDialog
                swal({
                    title: "Error",
                    text: "No se ha podido crear la gráfica",
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
            if (accion === "VerGraficaPdf") {
                enviarInformeCom("VerGraficaPdf", nombrePdfActuacion, año, mes, semana, carpetaEstadoLote);
            } else if (accion === "EnviarInforme") {
                enviarInformeCom("EnviarInforme", nombrePdfActuacion, año, mes, semana, carpetaEstadoLote);
            }

        }
    });
}
function getDatosGraficaSoloLeyenda(urlServlet, data, Onimprimir, animacion, resize, accion, nombrePdf) {
    //////////////////////Ajax//////////////////////////
    //console.log(data);
    // alert(accion);
    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,
        dataType: "json",
        success: function (respuesta) {

            try {

//                console.log(respuesta);

                var labels = new Array();
                var arrayDatos = new Array();

                if (respuesta.length > 0) {

                    for (var i = 0; i < respuesta.length; i++) {
                        var label = respuesta[i].variable_nombre + " (" + respuesta[i].unidadVariable + ")";
//                        alert(label);
                        labels.push(label);
                    }

                    //Eliminar duplicados de un array en Javascript

                    labels = labels.filter(function (elem, pos) {
                        return labels.indexOf(elem) === pos;
                    });



                    for (var i = 0; i < labels.length; i++) {
                        var datos = [];
                        for (var d = 0; d < respuesta.length; d++) {
//                        alert(labels[i].variable_nombre);
                            if (labels[i] === respuesta[d].variable_nombre + " (" + respuesta[i].unidadVariable + ")") {
                                datos.push(["'" + respuesta[d].fecha_Hora + "'", respuesta[d].dato]);
                            }
                        }
                        arrayDatos.push(datos);
//                    alert(datos);
//                    alert(arrayDatos[i]);
                    }

                    //Buscamos los valores máximos y mínimos
                    var valores = [];
                    for (var i = 0; i < respuesta.length; i++) {
                        valores.push(respuesta[i].dato);
                    }
                    var min = Math.min.apply(null, valores) * 1.2;
                    if (min > 0) {
                        min = 0;
                    } else {
                        min = Math.floor(min);
                    }

//                alert(min);
                    var max = Math.max.apply(null, valores) * 1.1;
                    max = Math.round(max);

//                alert(max);

//                alert(arrayDatos);                
//                meterGauge();
                    dibujarGraficaLinealSoloLeyenda([arrayDatos], labels, min, max, animacion, resize);

                } else {
                    //mesageDialog
                    swal({
                        title: "Error",
                        text: "No existen datos para crear la gráfica",
                        type: "error"
                    });
                }

            } catch (e) {
                //mesageDialog
                swal({
                    title: "Error",
                    text: "No se ha podido crear la gráfica",
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

            if (accion === "VerGraficaPdf") {
                enviarInformeCom("VerGraficaPdf", nombrePdf);
            } else if (accion === "EnviarInforme") {
                enviarInformeCom("EnviarInforme", nombrePdf);
            }

        }
    });
}

function enviarInformeCom(accion, nombrePdfActuacion, año, mes, semana, carpetaEstadoLote) {

//                
    var param = {
//                    x_offset: 50,
//                    y_offset: 50,
//                    backgroundColor: "red"
    };

    var imgData = $('#chartdiv').jqplotToImageStr(param);
    var imgElem = $('<img/>').attr('src', "imgData");
    $('#chartdiv').html(imgElem);
    var code = imgData.split(',');
    var grafica = code[1];

    var carpetaPdfLote = "Lote " + $("#lote_nombre").val();
    var carpetaPdfOT = "Orden de trabajo nº " + $("#ordenTrabajo_id").val() + " " + $("#lineaTrabajo_nombre").val();
    //

    //
    var code = document.getElementsByTagName("BODY")[0].innerHTML;

    //Datos
    var data = {
        año: año,
        mes: mes,
        semana: semana,
        carpetaEstadoLote: carpetaEstadoLote,
        accion: accion,
        carpetaPdfLote: carpetaPdfLote,
        carpetaPdfOT: carpetaPdfOT,
        nombrePdfActuacion: nombrePdfActuacion,
        code: code,
        grafica: grafica
    };
    //Capturamos la ruta para envio de datos a servlet
    var pathArray = window.location.pathname.split('/');
    var urlServlet = "/" + pathArray[1] + "/InformeGraficaPDFCom";
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

        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {

            if (accion === "VerGraficaPdf") {
                //Capturamos la ruta para envio de datos a servlet
                var pathArray = window.location.pathname.split('/');
                var urlServletVerPdf = "/" + pathArray[1] + "/VerPdfCom?carpetaPdfLote=" + carpetaPdfLote + "&carpetaPdfOT=" + carpetaPdfOT + "&nombrePdfActuacion=" + nombrePdfActuacion;
                abrirVentanaEmergente(urlServletVerPdf, window.screen.width, window.screen.height);
            }
            window.close();
        }
    });
}

function enviarInforme() {

//                
    var param = {
//                    x_offset: 50,
//                    y_offset: 50,
//                    backgroundColor: "red"
    };

    var imgData = $('#chartdiv').jqplotToImageStr(param);
    var imgElem = $('<img/>').attr('src', "imgData");
    $('#chartdiv').html(imgElem);
    var code = imgData.split(',');
    var grafica = code[1];

    var carpetaPdfLote = "Lote " + $("#lote_nombre").val();
    var carpetaPdfOT = "Orden de trabajo nº " + $("#ordenTrabajo_id").val() + " " + $("#lineaTrabajo_nombre").val();
    //
    var nombrePdfActuacion = "Gráfica de actuación nº " + $("#numero").val();
    //
    var code = document.getElementsByTagName("BODY")[0].innerHTML;

    //Datos
    var data = {
        carpetaPdfLote: carpetaPdfLote,
        carpetaPdfOT: carpetaPdfOT,
        nombrePdfActuacion: nombrePdfActuacion,
        code: code,
        grafica: grafica
    };
    //Capturamos la ruta para envio de datos a servlet
    var pathArray = window.location.pathname.split('/');
    var urlServlet = "/" + pathArray[1] + "/InformeGraficaPDF";
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

        },
        //Funcion error de respuesta    
        error: function (jqXHR, textStatus, errorThrown) {
            errorAjax(jqXHR, textStatus, errorThrown, urlServlet);
        },
        complete: function () {
            window.close();
            //window.location.reload(true);
        }
    });
}

function dibujarGraficaLineal([datos], labels, min, max, animacion, resize) {
//    console.log([datos]);
//    console.log(labels);
//    console.log(min);
//    console.log(max);
//    console.log(animacion);
//    console.log(resize);
    var plot1 = $.jqplot("chartdiv", datos, {
//        gridPadding: {
//            top: 0,
//            bottom: 38,
//            left: 50,
//            right: 0
//        },

        dataRendererOptions: {
            unusedOptionalUrl: datos
        },
//        title: "titulo",
        animate: animacion,

        //height: 900,


        axesDefaults: {

            tickRenderer: $.jqplot.CanvasAxisTickRenderer,

            tickOptions: {
                angle: 0,
                fontSize: '10pt',
                labelPosition: 'middle'
            }
        },
        seriesDefaults: {
            showMarker: false //Puntos de líneas

        },
        axes: {
            xaxis: {

                label: '',

                renderer: $.jqplot.DateAxisRenderer,
                //tickRenderer: $.jqplot.CanvasAxisTickRenderer,
                tickOptions: {
                    formatString: '%Y-%m-%d %H:%M:%S',
                    labelPosition: 'end',
                    angle: 270
                            //fontSize: '10pt'
                },

                pad: 0,
                autoscale: true

            },
            yaxis: {
                label: '',

                renderer: $.jqplot.LinearAxisRenderer,

                tickOptions: {
                    formatString: '%.2f' + " ",
                    labelPosition: 'end'
                },
                pad: 0,
//                autoscale: true,
                min: min,
                max: max

//                padMax: 1.05
            }
        },
        grid: {
            drawBorder: false,
            shadow: true,
            // background: 'rgba(0,0,0,0)'  works to make transparent.
            background: "white"
        },
        highlighter: {
            show: true,
            sizeAdjust: 7.5
        },
        cursor: {
            show: true,
            zoom: true,
            showTooltip: false
//            constrainZoomTo: 'x'
        },

        legend: {
            show: true,
            renderer: $.jqplot.EnhancedLegendRenderer,
            placement: "outside",
            labels: labels,
            location: "s",
            xoffset: 5,
            yoffset: 5,
            marginTop: '150px',
            marginBottom: '0px',
            rowSpacing: "0px",
//            background: "black",
            rendererOptions: {
                numberRows: 4
            }
        }
    });

    resizeGrafica(plot1, resize);



}

function dibujarGraficaLinealSoloLeyenda([datos], labels, min, max, animacion, resize) {

    var plot1 = $.jqplot("chartdiv", datos, {
//        gridPadding: {
//            top: 0,
//            bottom: 38,
//            left: 50,
//            right: 0
//        },

        dataRendererOptions: {
            unusedOptionalUrl: datos,
            bandData: datos
        },
//        title: "titulo",
        animate: animacion,

        //height: 900,


        axesDefaults: {

            tickRenderer: $.jqplot.CanvasAxisTickRenderer,

            tickOptions: {
//                angle: 0,
//                fontSize: '10pt',
//                labelPosition: 'middle'
            }
        },
        seriesDefaults: {
            showMarker: false //Puntos de líneas

        },
        axes: {
            xaxis: {

                label: '',

                renderer: $.jqplot.DateAxisRenderer,
                //tickRenderer: $.jqplot.CanvasAxisTickRenderer,
                tickOptions: {
                    formatString: '%Y-%m-%d %H:%M:%S',
                    labelPosition: 'end',
                    angle: 0,
                    fontSize: '7pt'

                },
                showTicks: false
//                pad: 0,
//                tickInterval: 1

//                autoscale: true

            },
            yaxis: {
//                label: '',

                renderer: $.jqplot.LinearAxisRenderer,

                tickOptions: {
//                    formatString: '%.2f' + " ",
//                    labelPosition: 'end'
                },
//                pad: 0,
//                autoscale: true,
                min: min,
                max: max

//                tickInterval: 5

//                padMax: 1.05
            }
        },
        grid: {
            drawBorder: false,
            shadow: true,
            // background: 'rgba(0,0,0,0)'  works to make transparent.
            background: "white"
        },
        highlighter: {
            show: true,
            sizeAdjust: 7.5
        },
        cursor: {
            show: true,
            zoom: true,
            showTooltip: false
//            constrainZoomTo: 'x'
        },

        legend: {
            show: true,
            renderer: $.jqplot.EnhancedLegendRenderer,
            placement: "outside",
            labels: labels,
            location: "w",
            xoffset: 150,
            yoffset: 150,
            marginTop: '0px',
            marginLeft: '300px',
            marginBottom: '0px',
            rowSpacing: "0px",
            fontSize: '9pt', //Tamaño etiquetas
//            background: "black",
            rendererOptions: {
                numberColumns: 1,
                numberRows: 10//Para no definir numero//Tambien funciona null
            }
        }
    });

//    resizeGrafica(plot1, resize);



}

function dibujarGraficaLinealCom([datos], labels, min, max, tickInterval, animacion, resize, seriesColors, series) {

    //console.log(labels);



    var plot1 = $.jqplot("chartdiv", datos, {

        //Esto sirve para poner banda a la gráfica
//        fillBetween: {
//
//            series1: 0,
//            series2: 1,
//            color: "#eeeeee",
//
//            baseSeries: 0,
//            // fill:  Optional, defaults to true.  False to turn off fill.  
//            fill: true
//        },

        gridPadding: {
            top: 20,
            bottom: 100,
            left: null,
            right: null
        },

        //        title: "titulo",
        animate: animacion,
        //height: 900,

        //
        dataRendererOptions: {
            unusedOptionalUrl: datos,
            bandData: datos
        },
        //
        axesDefaults: {

            tickRenderer: $.jqplot.CanvasAxisTickRenderer,

            tickOptions: {
                angle: 0,
                fontSize: '10pt',
                labelPosition: 'middle'
            }
        },
        //
        seriesDefaults: {
            showMarker: false, //Puntos de líneas
            lineWidth: 2, //Grosor de la línea


            rendererOptions: {
                // Set the varyBarColor option to true to use different colors for each bar.
                // The default series colors are used.
                varyBarColor: true
//                sliceMargin: 44
//                padding: 48, 
//                showDataLabels: true 
            }

        },

        //Pasamos como parametro los colores
        seriesColors: seriesColors,

        //Para el formato de las lineas
        series: series,

        axes: {
            xaxis: {

                label: '',

                renderer: $.jqplot.DateAxisRenderer,
                //tickRenderer: $.jqplot.CanvasAxisTickRenderer,
                tickOptions: {
                    formatString: '%Y-%m-%d %H:%M:%S',
                    labelPosition: 'end',
                    angle: 270
                            //fontSize: '10pt'
                },

                pad: 0,
                autoscale: true

            },
            yaxis: {
                label: '',

                renderer: $.jqplot.LinearAxisRenderer,

                tickOptions: {
                    formatString: '%.2f' + " ",
                    labelPosition: 'end'
                },
                pad: 0,
//                autoscale: true,
                min: min,
                max: max,

                tickInterval: tickInterval

//                padMax: 1.05
            }
        },
        //Regilla de grafica
        grid: {
            drawBorder: false,
            shadow: true,
            // background: 'rgba(0,0,0,0)'  works to make transparent.
            background: "white"
        },
        //puntero
        highlighter: {
            show: true,
            sizeAdjust: 7.5,
            lineWidthAdjust: 2.5,
            tooltipFormatString: '%s',
            tooltipOffset: 2,
            tooltipAxes: 'both',
            fadeTooltip: true,
            tooltipFadeSpeed: "fast"
        },
        cursor: {
            show: true,
            zoom: true,
            showTooltip: false
//            constrainZoomTo: 'x'
        },

        legend: {
            show: true,
            renderer: $.jqplot.EnhancedLegendRenderer,
            placement: "outside",
            labels: labels,
            location: "s",
            xoffset: 5,
            yoffset: 5,
            marginTop: '140px',
            marginBottom: '0px',
            rowSpacing: "0px",
            fontSize: '9pt', //Tamaño etiquetas
//            background: "black",
            rendererOptions: {
                numberColumns: 8,
                numberRows: 0//Para no definir numero//Tambien funciona null
            }
        }


    });

    resizeGrafica(plot1, resize);



}

function resizeGrafica(plot1, resize) {
    if (resize === true) {

        $(window).resize(function () {
            plot1.replot({resetAxes: true});
        });
    }
}


function meterGauge() {

//    s1 = [35];


    var s1 = [0, 10];


    plot3 = $.jqplot('chartdiv', [s1], {
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                min: 0,
                max: 60,
                intervals: [20, 30, 40, 60],
                intervalColors: ['#66cc66', '#93b75f', '#E7E658', '#cc6666']
            }
        }
    });
    setInterval(function () {
        var momentoActual = new Date();
        var hora = momentoActual.getHours();
        var minuto = momentoActual.getMinutes();
        var segundo = momentoActual.getSeconds();
        s1 = [segundo];

        plot3.series[0].data[0] = [1, s1];
        plot3.replot();
    }, 1000);
}
;
function graficaCircularRendimientos() {

    var pathArray = window.location.pathname.split('/');
    var urlServlet = "/" + pathArray[1] + "/CargaHtmlGraficaRendimiento";
    var fecInicio = $("#fecInicio").val();
    var fecFinal = $("#fecFinal").val();
    var cliente_id = $("#cliente_id").val();

    //if (cliente_id !== "") {

    var data = {
        fecInicio: fecInicio,
        fecFinal: fecFinal,
        cliente_id: cliente_id
    };
    //alert(cliente_id);
    $("#divHtmlGrafica").html("");
//console.log(data);
    var idDiv = "#divHtmlGrafica";

    cargaCodigoHtmlenDivSinActualizarRendimientos(urlServlet, data, idDiv);

    //var datos = 0;
    $("#totalOTs").val();
    //dibujarGraficaCircular([datos], titulo); 
}


function graficaCircularRendimientosOT(tarifa,articulo) {

   
   //alert(tarifa, articulo);
    var totalTarifa = ['Tarifas',parseFloat(tarifa)];
    var totalArticulo = ['Artículos',parseFloat(articulo)];
    
     var datos = [totalTarifa,totalArticulo];
    //if (cliente_id !== "") {
    
    //alert(cliente_id);
    //$("#divHtmlGrafica").html("");
//console.log(data);
    //var idDiv = "#divHtmlGrafica";

    dibujarGraficaCircular([datos], "Rendimientos", "chartdiv");

    //var datos = 0;
   // $("#totalOTs").val();
    //dibujarGraficaCircular([datos], titulo); 
}


function cargaCodigoHtmlenDivSinActualizarRendimientos(urlServlet, data, idDiv) {
    //$("#divHtmlGrafica").html("");
    var complete = false;
    //////////////////////Ajax//////////////////////////
    $.ajax({
        url: urlServlet,
        type: 'POST',
        data: data,
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

            $("#chartdiv").html("");
            $("#chartdivTotal").html("");

            var manoObra = ['Mano de obra', parseFloat($("#totalOTs").val())];
            var manoObraRendimiento = ['Mano de obra rendimiento', parseFloat($("#diferenciaOTs").val())];

            var articulosTotal = ['Articulos', parseFloat($("#articulosTotal").val())];
            var articulosTotalRendimiento = ['Articulos rendimiento', parseFloat($("#articulosTotalBeneficio").val())];

            var total = ['Total', parseFloat($("#total").val())];
            var totalRendimiento = ['Total rendimiento', parseFloat($("#totalRendimiento").val())];

            var datos = [manoObra, manoObraRendimiento, articulosTotal, articulosTotalRendimiento];
            var datosTotal = [total, totalRendimiento];

            dibujarGraficaCircular([datos], "Rendimientos", "chartdiv");
            dibujarGraficaCircular([datosTotal], "Total", "chartdivTotal");
            // console.log($("#totalOTs").val());
            $("#tabTot.tabla.stacktable.large-only tbody tr td #spanImporteManoObra").text($("#totalOTs").val() + " €");
            $("#tabTot.tabla.stacktable.large-only tbody tr td #spanRendimientoManoObra").text($("#diferenciaOTs").val() + " €");
            $("table.tabla.stacktable.small-only tbody tr td #spanImporteManoObra").text($("#totalOTs").val() + " €");
            $("table.tabla.stacktable.small-only tbody tr td #spanRendimientoManoObra").text($("#diferenciaOTs").val() + " €");


            $("#tabTot.tabla.stacktable.large-only tbody tr td #spanImporteMaterial").text($("#articulosTotal").val() + " €");
            $("#tabTot.tabla.stacktable.large-only tbody tr td #spanRendimientoMaterial").text($("#articulosTotalBeneficio").val() + " €");
            $("table.tabla.stacktable.small-only tbody tr td #spanImporteMaterial").text($("#articulosTotal").val() + " €");
            $("table.tabla.stacktable.small-only tbody tr td #spanRendimientoMaterial").text($("#articulosTotalBeneficio").val() + " €");

            $("#tabRen.tabla.stacktable.large-only tbody tr td #spanTotal").text($("#total").val() + " €");
            $("#tabRen.tabla.stacktable.large-only tbody tr td #spanRendimiento").text($("#totalRendimiento").val() + " €");
            $("table.tabla.stacktable.small-only tbody tr td #spanTotal").text($("#total").val() + " €");
            $("table.tabla.stacktable.small-only tbody tr td #spanRendimiento").text($("#totalRendimiento").val() + " €");

            complete = true;
            setTimeout(function () {
                swal.close();
            }, 200);

        }
    });
}


function dibujarGraficaCircular([datos], titulo, idDiv) {//(chartdiv) id predefinido
    //console.log([datos]);
    //console.log($.jqplot);
    //var line1 = [['Sony',7], ['Samsung',13.3], ['LG',14.7], 
    //['Vizio',5.2], ['Insignia', 1.2]];
console.log([datos]);
    var plot3 = $.jqplot(idDiv, [datos], {
        title: titulo,
        seriesDefaults: {
            renderer: $.jqplot.PieRenderer,
            rendererOptions: {
                showDataLabels: true,
                padding: 10,
                sliceMargin: 6,
                shadow: false
            }
        },
        legend: {
            show: true
        },
        highlighter: {
            show: true,
            useAxesFormatters: false,
            tooltipFormatString: '%s'
        }

    });

}
function dibujarGraficaBarrasGrupoProyecto(datos, titulo, div_id) {
//    console.log([datos]);
//    console.log(titulo);
//    console.log(div_id);
    //console.log($.jqplot);
    //var line1 = [['Sony',7], ['Samsung',13.3], ['LG',14.7], 
    //['Vizio',5.2], ['Insignia', 1.2]];
    var listaListas = new Array();
    var listaTarifas = new Array();
    listaTarifas.push(datos[0]);
    listaTarifas.push(datos[1]);
    listaTarifas.push(datos[2]);
    var listaMateriales = new Array();
    listaMateriales.push(datos[3]);
    listaMateriales.push(datos[4]);
    listaMateriales.push(datos[5]);

    var listaTotal = new Array();
    listaTotal.push(datos[6]);
    listaTotal.push(datos[7]);
    listaTotal.push(datos[8]);
    //listaListas.push(datos);
    listaListas.push(listaTarifas);
    listaListas.push(listaMateriales);
    listaListas.push(listaTotal);

    //console.log(listaListas);

    //console.log(mesIni + " - " + mesFin);
    //var s1 = [2, 6, 7, 10, 2, 2, 2, 2, 2, 2, 2, 2];
    //var s2 = [7, 5, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2];
    //var s3 = [7, 5, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2];
    var ticks = ["Tarifas", "Materiales", "Total"];//];//
    //var ticks = new Array();
    //ticks.push(tickss);
    // console.log(listaListas);
    //console.log(ticks);
    if (listaListas.length > 0) {

        plot2 = $.jqplot(div_id, listaListas, {
            seriesDefaults: {
                renderer: $.jqplot.BarRenderer
                ,
                rendererOptions: {
                    fillToZero: true
                },
                pointLabels: {show: true}
            },
            legend: {
                show: true,
                renderer: $.jqplot.EnhancedLegendRenderer,
                placement: "outside",
                location: "s",
                xoffset: 5,
                yoffset: 5,
                marginTop: '150px',
                marginBottom: '0px',
                rowSpacing: "0px",
//            background: "black",
                rendererOptions: {
                    numberRows: 4
                }
            },
            axes: {
                xaxis: {
                    renderer: $.jqplot.CategoryAxisRenderer,
                    ticks: ticks
                }
            }
        });

        $('#chartdiv').bind('jqplotDataHighlight',
                function (ev, seriesIndex, pointIndex, data) {
                    $('#info2').html('series: ' + seriesIndex + ', point: ' + pointIndex + ', data: ' + data);
                }
        );

        $('#chartdiv').bind('jqplotDataUnhighlight',
                function (ev) {
                    $('#info2').html('Nothing');
                }
        );
    }

}

function dibujarGraficaBarrasGrupo() {
    //console.log([datos]);
    //console.log($.jqplot);
    //var line1 = [['Sony',7], ['Samsung',13.3], ['LG',14.7], 
    //['Vizio',5.2], ['Insignia', 1.2]];
    var listaListas = new Array();

    var sx = $("#sx").val();
    //var numActual = 0;
    for (var i = 0; i < sx; i++) {//meses
        var s1 = new Array();
        $(".s_" + i).each(function () {
            // console.log($(this).attr("class") + " - " + $(this).attr("id"));
            //console.log(contador + " - " + ($(".total_" + i).length - 1));
            if ($(this).val() !== "null") {
                s1.push(parseFloat($(this).val()));
            } else {
                s1.push(" ");
            }
        });
        listaListas.push(s1);
    }
    var mesIni = $("#mesIni").val();
    var mesFin = $("#mesFin").val();
    //console.log(mesIni + " - " + mesFin);
    //var s1 = [2, 6, 7, 10, 2, 2, 2, 2, 2, 2, 2, 2];
    //var s2 = [7, 5, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2];
    //var s3 = [7, 5, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2];
    //console.log(listaListas);
    var tickss = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];//];//
    var ticks = new Array();
    for (var i = 0; i < tickss.length; i++) {
        if (i >= (parseFloat(mesIni) - 1) && i <= (parseFloat(mesFin) - 1)) {
            ticks.push(tickss[i]);
        }
    }
    // console.log(listaListas);
    //console.log(ticks);
    if (listaListas.length > 0) {

        plot2 = $.jqplot('chartdiv', listaListas, {
            seriesDefaults: {
                renderer: $.jqplot.BarRenderer
                ,
                pointLabels: {show: true}
            },
            legend: {
                show: true,
                renderer: $.jqplot.EnhancedLegendRenderer,
                placement: "outside",
                location: "s",
                xoffset: 5,
                yoffset: 5,
                marginTop: '150px',
                marginBottom: '0px',
                rowSpacing: "0px",
//            background: "black",
                rendererOptions: {
                    numberRows: 4
                }
            },
            axes: {
                xaxis: {
                    renderer: $.jqplot.CategoryAxisRenderer,
                    ticks: ticks
                }
            }
        });

        $('#chartdiv').bind('jqplotDataHighlight',
                function (ev, seriesIndex, pointIndex, data) {
                    $('#info2').html('series: ' + seriesIndex + ', point: ' + pointIndex + ', data: ' + data);
                }
        );

        $('#chartdiv').bind('jqplotDataUnhighlight',
                function (ev) {
                    $('#info2').html('Nothing');
                }
        );
    } else {


    }

}

function dibujarGraficaVarrasClientePorMes(mes) {

    var listaListas = new Array();

    $(".total_" + mes).each(function () {
        var s1 = new Array();

        // console.log($(this).attr("class") + " - " + $(this).attr("id"));
        //console.log(contador + " - " + ($(".total_" + i).length - 1));
        var name = $(this).attr("id").split("_")[0];
        s1.push(name, parseFloat($(this).val()));
        listaListas.push(s1);
    });
    var line1 = listaListas;//[['Nissan', 4], ['Porche', 6], ['Acura', 2], ['Aston Martin', 5], ['Rolls Royce', 6]];
    var ticks = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];//];//
    $('#chartdiv' + mes).jqplot([line1], {
        title: ticks[mes - 1],
        // Provide a custom seriesColors array to override the default colors.
        seriesColors: ['#85802b', '#00749F', '#73C774', '#C7754C', '#17BDB8'],
        seriesDefaults: {
            renderer: $.jqplot.BarRenderer,
            rendererOptions: {
                // Set varyBarColor to tru to use the custom colors on the bars.
                varyBarColor: true
            }
        },
        axes: {
            xaxis: {
                renderer: $.jqplot.CategoryAxisRenderer
            }
        }
    });
}