/*
 *
 */

"use strict";

var objecto_id = 0;

var cord_x = 0;
var cord_y = 0;

var ePermanente;
var xPermanente;
var yPermanente;

var posMantenida;

$(document).ready(
        eliminarNoExistente()
        );

function sortNumber(a, b) {
    return a - b;
}
function eliminarNoExistente() {//este metodo borra del plano las figuras que no esten en la tabla visualmente, 
    //una vez guardes se eliminan del registro de (BORRA ENLACES SOLO).
    setTimeout(function () {
        var listaBorrar = new Array();
        $("g").each(function () {
            var noExiste = true;
            var idBorrar = 0;
            if ($(this).context.obj !== undefined && $(this).context.obj.href.includes("mantEditorPlanos_id=")) {
                //console.log($(this).context.obj);
                var href = $(this).context.obj.href;
                // console.log($("#tablaPropiedadesEditor tbody tr td #" + href));

                $("#tablaPropiedadesEditor tbody tr td input").each(function () {
                    if ($(this).attr("id").includes("mantEditorPlanos_id=")) {
                        //console.log($(this).attr("id") + " -------------------- " + href);
                        idBorrar = href;
                        if ($(this).attr("id") === href) {
                            //var id = $(this).attr("id").split("=")[1];
                            noExiste = false;
                            //console.log(noExiste + " en if");
                            return false;
                        }
                    }
//                else {
//                    console.log(idBorrar + " en else");
//                   // idBorrar = 0;
//                   // noExiste = false;
//                    console.log(noExiste + " en else");
//                    return false;
//                }
                });
                //console.log(noExiste + " - " + idBorrar);
                if (noExiste) {
                    //console.log(idBorrar);
                    listaBorrar.push(idBorrar);
                    //eliminar(idBorrar);
                    //eliminarNoExistente();
                }
            }
        });
        for (var i = 0; i < listaBorrar.length; i++) {
            eliminar(listaBorrar[i]);
        }
    }, 500);
}
function maxPosicionMas1Crear() {//lo uso al crear un elemento para ponerle una posicion, se pone encima de todo pero su posicion es un string vacio por eso cojo el penultimo y le sumo uno
    var listaPos = new Array();
    $("g").each(function () {
        if ($(this).context.obj !== undefined) {
            var posicionT = $(this).context.obj.posicion;
            listaPos.push(parseFloat(posicionT));
        }
    });
    listaPos.sort(sortNumber);
    var numMax = parseFloat(listaPos[listaPos.length - 2] + 1);
    if (numMax.toString() === "NaN") {
        numMax = "1";
    }
    if (listaPos.length >= 2) {
        numMax = parseFloat(listaPos[listaPos.length - 1] + 1);
    }
    //alert(listaPos.length);
    //alert(numMax);
    return parseFloat(numMax);
}

function pulsar(id) {
    //alert("has pulsao");
    $("g").each(function () {
        //var rectangulo = $(this).children()[0];
        if ($(this).context.obj.href.includes(id)) {
            //var o = $(rectangulo)[0];
            ePermanente = $(this).context.obj.href;
            $("#botonSimulaClick").trigger("click");
//            console.log($(this).context.obj);
        }
    });
}

function eliminar(id) {

    if (id !== 0) {
        //console.log(id);
        pulsar(id);
        $("#botonSPR").trigger("click");
    }
}

function ponerTitulo() {
//solo en vista añadimos un evento onclick para ir a detalle o a otros planos
    $("g").each(function () {
        //con este codigo intentar cambiar zindex
        var ruta;
        if ($(this).context.obj.href.includes('maquina')) {
            var maquina_id = $(this).context.obj.href.split("=")[1];
            ruta = "../../../Maquinaria/Maquina/Frame/DetalleMaquina.jsp?maquina_id=" + maquina_id;
        } else if ($(this).context.obj.href.includes('zona')) {
            var zona_id = $(this).context.obj.href.split("=")[1];
            ruta = "../../../Maquinaria/Zona/Frame/DetalleZona.jsp?zona_id=" + zona_id;
        } else {
            var mantEditorPlanos_id = $(this).context.obj.href.split("=")[1];
            ruta = "MantEditorPlanosVista.jsp?mantEditorPlanos_id=" + mantEditorPlanos_id;
        }

        var rectangulo = $(this).children()[0];
        $(rectangulo).attr("title", $(this).context.obj.title);
        $(rectangulo).click(function () {
            window.location.href = ruta;
        });
    });


}

function refrescar() {}
//para guardar mapeo
function modificarMantEditorPlanosMapeo(mantEditorPlanos_id, mapeo) {

    var pathArray = window.location.pathname.split('/');
    var urlServlet = "/" + pathArray[1] + "/ModificarMantEditorPlanosMapeo";

    var data = {
        mantEditorPlanos_id: mantEditorPlanos_id,
        mapeo: mapeo
    };
    enviarDatos(urlServlet, data, true);

}

function SummerHtmlImageMapCreator() {

    //Desabilitar botones ratón
//    document.oncontextmenu = new Function("return false");

    /* Utilities */
    var utils = {
        offsetX: function (node) {
            var box = node.getBoundingClientRect(),
                    scroll = window.pageXOffset;

            return Math.round(box.left + scroll);
        },
        offsetY: function (node) {
            var box = node.getBoundingClientRect(),
                    scroll = window.pageYOffset;

            return Math.round(box.top + scroll);
        },
        rightX: function (x) {
            return x - app.getOffset('x');
        },
        rightY: function (y) {
            return y - app.getOffset('y');
        },
        trim: function (str) {
            return str.replace(/^\s+|\s+$/g, '');
        },
        id: function (str) {
            return document.getElementById(str);
        },
        hide: function (node) {
            node.style.display = 'none';

            return this;
        },
        show: function (node) {
            node.style.display = 'block';

            return this;
        },
        encode: function (str) {
            return str;//.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        },
        foreach: function (arr, func) {
            for (var i = 0, count = arr.length; i < count; i++) {
                func(arr[i], i);
            }
        },
        foreachReverse: function (arr, func) {
            for (var i = arr.length - 1; i >= 0; i--) {
                func(arr[i], i);
            }
        },
        debug: (function () {
            var output = document.getElementById('debug');
            return function () {
                output.innerHTML = [].join.call(arguments, ' ');
            };
        })(),
        stopEvent: function (e) {
            e.stopPropagation();
            e.preventDefault();

            return this;
        },
        addClass: function (node, str) {
            // node.className.baseVal for SVG-elements
            // or
            // node.className for HTML-elements
            var is_svg = node.className.baseVal !== undefined ? true : false,
                    arr = is_svg ? node.className.baseVal.split(' ') : node.className.split(' '),
                    isset = false;

            utils.foreach(arr, function (x) {
                if (x === str) {
                    isset = true;

                }
            });

            if (!isset) {
                arr.push(str);
                is_svg ? node.className.baseVal = arr.join(' ') : node.className = arr.join(' ');

            }

            return this;
        },
        removeClass: function (node, str) {
            var is_svg = node.className.baseVal !== undefined ? true : false,
                    arr = is_svg ? node.className.baseVal.split(' ') : node.className.split(' '),
                    isset = false;

            utils.foreach(arr, function (x, i) {
                if (x === str) {
                    isset = true;
                    arr.splice(i--, 1);
                }
            });

            if (isset) {
                is_svg ? node.className.baseVal = arr.join(' ') : node.className = arr.join(' ');
            }

            return this;
        },
        hasClass: function (node, str) {
            var is_svg = node.className.baseVal !== undefined ? true : false,
                    arr = is_svg ? node.className.baseVal.split(' ') : node.className.split(' '),
                    isset = false;

            utils.foreach(arr, function (x) {
                if (x === str) {
                    isset = true;
                }
            });

            return isset;
        },
        extend: function (obj, options) {
            var target = {};

            for (name in obj) {
                if (obj.hasOwnProperty(name)) {
                    target[name] = options[name] ? options[name] : obj[name];
                }
            }

            return target;
        },
        supportFileReader: (function () {
            return (typeof FileReader !== 'undefined');
        })()
    };


    /* Main object */
    var app = (function () {
        var body = document.getElementsByTagName('body')[0],
                wrapper = utils.id('wrapper'),
                svg = utils.id('svg'),
                img = utils.id('img'),
                img_src = null,
                container = utils.id('image'),
                about = utils.id('about'),
                coords_info = utils.id('coords'),
                offset = {x: 0, y: 0},
                shape = null,
                is_draw = false,
                mode = null, // drawing || editing || preview
                objects = [],
                new_area = null,
                selected_area = null,
                edit_type,
                events = [],
                map,
                filename,
                KEYS = {
                    F1: 112,
                    ESC: 27,
                    TOP: 38,
                    BOTTOM: 40,
                    LEFT: 37,
                    RIGHT: 39,
                    DELETE: 46,
                    I: 73,
                    S: 83,
                    C: 67
                };

        function recalcOffsetValues() {
            offset.x = utils.offsetX(container);
            offset.y = utils.offsetY(container);
        }
        ;

        /* Get offset value */
        window.addEventListener('resize', recalcOffsetValues, false);

        /* Disable selection */
        container.addEventListener('mousedown', function (e) {
            e.preventDefault();
        }, false);

        /* Disable image dragging */
        img.addEventListener('dragstart', function (e) {
            e.preventDefault();
        }, false);

        /* Display cursor coordinates info */
        container.addEventListener('mousemove', function (e) {
            //Obtenemos las coordenadas del scroll de la imagen
            // Log the position with jQuery
            var position = $('#svg').position();
//  console.log('X: ' + position.left + ", Y: " + position.top );
            var xCord = position.left;
            var yCord = position.top;

            cord_x = e.pageX - xCord;
            cord_y = e.pageY - yCord;

            coords_info.innerHTML = 'x: ' + utils.rightX(cord_x) + ', ' + 'y: ' + utils.rightY(cord_y);
        }, false);

        container.addEventListener('mouseleave', function () {
            coords_info.innerHTML = '';
        }, false);

        /* Add mousedown event for svg */
        function onSvgMousedown(e) {
            if (mode !== 'editing') {
                if (e.target.parentNode.tagName === 'g') {
                    info.unload();
                    selected_area = e.target.parentNode.obj;

                    app.deselectAll();
                    selected_area.select();
                    selected_area.delta = {
                        'x': e.pageX,
                        'y': e.pageY
                    };

                    if (utils.hasClass(e.target, 'helper')) {
                        var helper = e.target;
                        edit_type = helper.action;

                        if (helper.n >= 0) { // if typeof selected_area == polygon
                            selected_area.selected_point = helper.n;
                        }

                        app.addEvent(container, 'mousemove', selected_area.onEdit)
                                .addEvent(container, 'mouseup', selected_area.onEditStop);
                    } else if (e.target.tagName === 'rect' || e.target.tagName === 'circle' || e.target.tagName === 'polygon') {
                        edit_type = 'move';

                        app.addEvent(container, 'mousemove', selected_area.onEdit)
                                .addEvent(container, 'mouseup', selected_area.onEditStop);
                    }
                    ;
                } else {
                    app.deselectAll();
                    info.unload();
                }
                ;
            }
            ;
        }
        function onSvgMousedownPuro() {
            if (mode !== 'editing') {

                //console.log(ePermanente);
                var g;
                $("g").each(function () {
                    var hrefA = $(this).context.obj.href;
                    if (ePermanente !== undefined && ePermanente.includes(hrefA)) {
                        g = $(this);
                    }
                });
                if ($(g)[0] !== undefined) {
                    if ($(g)[0].tagName === 'g') {
                        info.unload();
                        selected_area = $(g)[0].obj;
                        let object = $(g)[0].obj;
                        $("#divPosicion").css("display", "inline");
                        info.loadPuro(object, xPermanente, yPermanente);

                        app.deselectAll();
                        selected_area.select();
                        selected_area.delta = {
                            'x': xPermanente,
                            'y': yPermanente
                        };
                        //console.log($(g).children()[0].tagName);
                        if (utils.hasClass($(g).children()[0], 'helper')) {
                            var helper = $(g).children()[0];
                            edit_type = helper.action;

                            if (helper.n >= 0) { // if typeof selected_area == polygon
                                selected_area.selected_point = helper.n;
                            }

                            app.addEvent(container, 'mousemove', selected_area.onEdit)
                                    .addEvent(container, 'mouseup', selected_area.onEditStop);
                        } else if ($(g).children()[0].tagName === 'rect' || $(g).children()[0].tagName === 'circle' || $(g).children()[0].tagName === 'polygon') {
                            edit_type = 'move';

                            app.addEvent(container, 'mousemove', selected_area.onEdit)
                                    .addEvent(container, 'mouseup', selected_area.onEditStop);
                        }
                        ;
                    } else {
                        app.deselectAll();
                        info.unload();
                    }
                    ;
                }
            }
            ;
            $("#botonESC").trigger('click');
        }
        $("#botonSimulaClick").click(onSvgMousedownPuro);
        container.addEventListener('mousedown', onSvgMousedown, false);

        /* Add click event for svg */
        function onSvgClick(e) {
            if (mode === 'drawing' && !is_draw && shape) {
                code.hide();
                switch (shape) {
                    case 'rect':
                        new_area = new Rect(utils.rightX(e.pageX), utils.rightY(e.pageY));

                        app.addEvent(container, 'mousemove', new_area.onDraw)
                                .addEvent(container, 'click', new_area.onDrawStop);

                        break;
                    case 'circle':
                        new_area = new Circle(utils.rightX(e.pageX), utils.rightY(e.pageY));

                        app.addEvent(container, 'mousemove', new_area.onDraw)
                                .addEvent(container, 'click', new_area.onDrawStop);

                        break;
                    case 'polygon':
                        new_area = new Polygon(utils.rightX(e.pageX), utils.rightY(e.pageY));

                        app.addEvent(container, 'mousemove', new_area.onDraw)
                                .addEvent(container, 'click', new_area.onDrawAddPoint)
                                .addEvent(document, 'keydown', new_area.onDrawStop)
                                .addEvent(new_area.helpers[0].helper, 'click', new_area.onDrawStop);

                        break;
                }
                ;
            }
            ;
        }
        ;

        container.addEventListener('click', onSvgClick, false);

        /* Bug with keydown event for SVG in Opera browser
         (when hot keys don't work after focusing on svg element) */

        function operaSvgKeydownBugFix() {
            window.focus();
        }
        if (window.navigator.appName === 'Opera') {
            container.addEventListener('mousedown', operaSvgKeydownBugFix, false);
            container.addEventListener('mouseup', operaSvgKeydownBugFix, false);
            container.addEventListener('click', operaSvgKeydownBugFix, false);
            container.addEventListener('dblclick', operaSvgKeydownBugFix, false);
        }
        ;

        /* Add dblclick event for svg */
        function onAreaDblClick(e) {
            if (mode !== 'editing') {
                if (e.target.tagName === 'rect' || e.target.tagName === 'circle' || e.target.tagName === 'polygon') {
                    selected_area = e.target.parentNode.obj;
                    info.load(selected_area, e.pageX, e.pageY);
                }
                ;
            }
            ;
        }
        function onAreaDblClickPuro() {
            if (mode !== 'editing') {
                //console.log("editandpo");
                var g;
                $("g").each(function () {
                    var hrefA = $(this).context.obj.href;
                    if (ePermanente.includes(hrefA)) {
                        g = $(this);
                    }
                });
                //console.log($(g).context.obj.href);
                if ($(g).children()[0].tagName === 'rect' || $(g).children()[0].tagName === 'circle' || $(g).children()[0].tagName === 'polygon') {
                    $("#divPosicion").css("display", "none");
                    selected_area = $(g).context.obj;//posible sacar objeto
                    //console.log(e.target.parentNode.obj);
                    info.load(selected_area, 0, 0);
                }
                ;
            }
            ;
        }
        $("#botonSimularDobleClick").click(onAreaDblClickPuro);
        ;

        /* Editar al pulsar botón derecho del ratón */
        function onAreaRightClick(e) {
            if (event.which === 3) {
                if (mode === 'drawing') {
                    if (e.target.tagName === 'rect' || e.target.tagName === 'circle' || e.target.tagName === 'polygon') {
                        $('#edit').trigger('click');
                    }
                    ;
                }
                ;
            }
        }
        ;

        container.addEventListener('dblclick', onAreaDblClick, false);
        container.addEventListener('mousedown', onAreaRightClick, false);

        function eliminar() {
            if (mode !== 'editing' && selected_area) {
                app.removeObject(selected_area);
                selected_area = null;
                info.unload();
            }
        }
        $("#botonSPR").click(eliminar);
        /* Add keydown event for document */
        function onDocumentKeyDown(e) {
//                        alert(e.keyCode);
            var ctrlDown = e.ctrlKey || e.metaKey // PC || Mac

            switch (e.keyCode) {

                case KEYS.F1: /* F1 key */
                    help.show();
                    e.preventDefault();

                    break;

                case KEYS.ESC: /* ESC key */
                    help.hide();
                    if (is_draw) {
                        is_draw = false;
                        new_area.remove();
                        objects.pop();
                        app.removeAllEvents();
                    } else if (mode !== 'editing') {
                        selected_area.redraw();
                        app.removeAllEvents();

                    } else {
                        $('#edit').trigger('click');
                    }
                    ;

                    break;

                case KEYS.TOP: /* Top arrow key */
                    if (mode === 'editing' && selected_area) {
                        selected_area.setParams(selected_area.dynamicEdit(selected_area['move'](0, -1)));
                        e.preventDefault();
                    }

                    break;

                case KEYS.BOTTOM: /* Bottom arrow key */
                    if (mode === 'editing' && selected_area) {
                        selected_area.setParams(selected_area.dynamicEdit(selected_area['move'](0, 1)));
                        e.preventDefault();
                    }
                    break;

                case KEYS.LEFT: /* Left arrow key */
                    if (mode === 'editing' && selected_area) {
                        selected_area.setParams(selected_area.dynamicEdit(selected_area['move'](-1, 0)));
                        e.preventDefault();
                    }

                    break;

                case KEYS.RIGHT: /* Right arrow key */
                    if (mode === 'editing' && selected_area) {
                        selected_area.setParams(selected_area.dynamicEdit(selected_area['move'](1, 0)));
                        e.preventDefault();
                    }

                    break;

                case KEYS.DELETE: /* DELETE key */
                    if (mode === 'editing' && selected_area) {
                        app.removeObject(selected_area);
                        selected_area = null;
                        info.unload();
                    }

                    break;

                case KEYS.I: /* i (edit info) key */
                    if (mode === 'editing' && selected_area) {
                        var params = selected_area.params,
                                x = params.x || params.cx || params[0],
                                y = params.y || params.cy || params[1];

                        info.load(selected_area, x + app.getOffset('x'), y + app.getOffset('y'));
                    }

                    break;

                case KEYS.S: /* s (save) key */
                    app.saveInLocalStorage();

                    break;

                case KEYS.C: /* CTRL+C copy */
                    if (mode === 'editing' && selected_area && ctrlDown) {
                        var Constructor = null,
                                area_params = selected_area.toJSON(),
                                area;

                        switch (area_params.type) {
                            case 'rect':
                                Constructor = Rect;
                                break;

                            case 'circle':
                                Constructor = Circle;
                                break;

                            case 'polygon':
                                Constructor = Polygon;
                                break;
                        }

                        if (Constructor) {
                            Constructor.createFromSaved(area_params);
                            selected_area.setParams(selected_area.move(10, 10));
                            selected_area.redraw();
                        }
                    }

                    break;
            }
        }

        document.addEventListener('keydown', onDocumentKeyDown, false);


        //////////////////////////////////////////////////////////////////////////////////////////

        /* Returned object */
        return {
            saveInLocalStorage: function () {
                var obj = {
                    areas: [],
                    img: img_src
                };

                utils.foreach(objects, function (x) {
                    //console.log(obj.areas);
                    console.log(x.toJSON());

                    obj.areas.push(x.toJSON());
                });

                window.localStorage.setItem('SummerHTMLImageMapCreator', JSON.stringify(obj));

                alert('Saved');

                return this;
            },
            loadFromLocalStorage: function () {
                var str = window.localStorage.getItem('SummerHTMLImageMapCreator'),
                        obj = JSON.parse(str),
                        areas = obj.areas;
                console.log(str);
                this.loadImage(obj.img);

                utils.foreach(areas, function (x) {
                    switch (x.type) {
                        case 'rect':
//                            console.log(x);
                            if (x.coords.length === 5) {
                                Rect.createFromSaved({
                                    coords: x.coords,
                                    href: x.href,
                                    title: x.title,
                                    posicion: x.posicion,
                                    tipo: x.tipo
                                });
                            }
                            break;

                        case 'circle':
                            if (x.coords.length === 3) {
                                Circle.createFromSaved({
                                    coords: x.coords,
                                    href: x.href,
                                    title: x.title,
                                    posicion: x.posicion,
                                    tipo: x.tipo
                                });
                            }
                            break;

                        case 'polygon':
                            if (x.coords.length >= 6 && x.coords.length % 2 === 0) {
                                Polygon.createFromSaved({
                                    coords: x.coords,
                                    href: x.href,
                                    title: x.title,
                                    posicion: x.posicion,
                                    tipo: x.tipo
                                });
                            }
                            break;
                    }
                });

                return this;
            }
//            ,
//            loadFromLocalStorageServidor: function () {
//                var str = $("#mapeo").val(),
//                        obj = JSON.parse(str),
//                        areas = obj.areas;
//                console.log(str);
//                this.loadImage(obj.img);
//
//                utils.foreach(areas, function (x) {
//                    switch (x.type) {
//                        case 'rect':
////                            console.log(x);
//                            if (x.coords.length === 5) {
//                                Rect.createFromSaved({
//                                    coords: x.coords,
//                                    href: x.href,
//                                    title: x.title,
//                                    posicion: x.posicion,
//                                    tipo: x.tipo
//                                });
//                            }
//                            break;
//
//                        case 'circle':
//                            if (x.coords.length === 3) {
//                                Circle.createFromSaved({
//                                    coords: x.coords,
//                                    href: x.href,
//                                    title: x.title,
//                                    posicion: x.posicion,
//                                    tipo: x.tipo
//                                });
//                            }
//                            break;
//
//                        case 'polygon':
//                            if (x.coords.length >= 6 && x.coords.length % 2 === 0) {
//                                Polygon.createFromSaved({
//                                    coords: x.coords,
//                                    href: x.href,
//                                    title: x.title,
//                                    posicion: x.posicion,
//                                    tipo: x.tipo
//                                });
//                            }
//                            break;
//                    }
//                });
//
//                return this;
//            }
            ,
            hide: function () {
                utils.hide(wrapper);
                return this;
            },
            show: function () {
                utils.show(wrapper);
                return this;
            },
            recalcOffsetValues: function () {
                recalcOffsetValues();
                return this;
            },
            setDimensions: function (width, height) {
                svg.setAttribute('width', width);
                svg.setAttribute('height', height);
                container.style.width = width + 'px';
                container.style.height = height + 'px';
                return this;
            },
            loadImage: function (url) {
                get_image.showLoadIndicator();
                img.src = url;
                img_src = url;

                img.onload = function () {
                    get_image.hideLoadIndicator().hide();
                    app.show()
                            .setDimensions(img.width, img.height)
                            .recalcOffsetValues();
                };
                return this;
            },
            preview: (function () {
                img.setAttribute('usemap', '#map');
                map = document.createElement('map');
                map.setAttribute('name', 'map');
                container.appendChild(map);

                return function () {
                    info.unload();
                    app.setShape(null);
                    utils.hide(svg);
                    map.innerHTML = app.getHTMLCode();
                    code.print();
                    return this;
                };
            })(),
            hidePreview: function () {
                utils.show(svg);
                map.innerHTML = '';
                return this;
            },
            addNodeToSvg: function (node) {
                svg.appendChild(node);
                return this;
            },
            removeNodeFromSvg: function (node) {
                svg.removeChild(node);
                return this;
            },
            getOffset: function (arg) {
                switch (arg) {
                    case 'x':
                        return offset.x;
                        break;
                    case 'y':
                        return offset.y;
                        break;
                }
                return undefined;
            },
            clear: function () {
                //remove all areas
                objects.length = 0;
                while (svg.childNodes[0]) {
                    svg.removeChild(svg.childNodes[0]);
                }
                code.hide();
                info.unload();
                return this;
            },
            removeObject: function (obj) {
                utils.foreach(objects, function (x, i) {
                    if (x === obj) {
                        objects.splice(i, 1);
                    }
                });
                obj.remove();
                return this;
            },
            deselectAll: function () {
                utils.foreach(objects, function (x) {
                    x.deselect();
                });
                return this;
            },
            getIsDraw: function () {
                return is_draw;
            },
            setIsDraw: function (arg) {
                is_draw = arg;
                return this;
            },
            setMode: function (arg) {
                mode = arg;
                return this;
            },
            getMode: function () {
                return mode;
            },
            setShape: function (arg) {
                shape = arg;
                return this;
            },
            getShape: function () {
                return shape;
            },
            addObject: function (object) {
                objects.push(object);
                return this;
            },
            getNewArea: function () {
                return new_area;
            },
            resetNewArea: function () {
                new_area = null;
                return this;
            },
            getSelectedArea: function () {
                return selected_area;
            },
            setSelectedArea: function (obj) {
                selected_area = obj;
                return this;
            },
            getEditType: function () {
                return edit_type;
            },
            setFilename: function (str) {
                filename = str;
                return this;
            },
            setEditClass: function () {
                utils.removeClass(container, 'draw')
                        .addClass(container, 'edit');
                return this;
            },
            setDrawClass: function () {
                utils.removeClass(container, 'edit')
                        .addClass(container, 'draw');
                return this;
            },
            setDefaultClass: function () {
                utils.removeClass(container, 'edit')
                        .removeClass(container, 'draw');
                return this;
            },
            addEvent: function (target, eventType, func) {
                events.push(new AppEvent(target, eventType, func));
                return this;
            },
            removeAllEvents: function () {
                utils.foreach(events, function (x) {
                    x.remove();
                });
                events.length = 0;
                return this;
            },
            getHTMLCode: function (arg) {
                var html_code = '';
                if (arg) {
                    if (!objects.length) {
                        return '0 objects';
                    }
                    html_code += utils.encode('<img src="' + filename + '" alt="" usemap="#map" />') +
                            '<br />' + utils.encode('<map name="map">') + '<br />';
                    utils.foreachReverse(objects, function (x) {
                        html_code += utils.encode(x.toString()) + '<br />';
                    });
                    html_code += utils.encode('</map>');
                } else {
                    utils.foreachReverse(objects, function (x) {
                        html_code += x.toString();
                    });
                }
                return html_code;
            }
        };
    })();

    /* Help block */
    var help = (function () {
        var block = utils.id('help'),
                //overlay = utils.id('overlay'),
                close_button = block.querySelector('.close_button');

        function hide() {
            utils.hide(block);
            //utils.hide(overlay);
        }

        function show() {
            utils.show(block);
            //utils.show(overlay);
        }

        //overlay.addEventListener('click', hide, false);

        close_button.addEventListener('click', hide, false);

        return {
            show: show,
            hide: hide
        };
    })();

    /* For html code of created map */
    var code = (function () {
        var block = utils.id('code'),
                content = utils.id('code_content'),
                close_button = block.querySelector('.close_button');

        close_button.addEventListener('click', function (e) {
            utils.hide(block);
            e.preventDefault();
        }, false);

        return {
            print: function () {
                content.innerHTML = app.getHTMLCode(true);
                utils.show(block);
            },
            hide: function () {
                utils.hide(block);
            }
        };
    })();


    /* Edit selected area info */
    var info = (function () {
        var form = utils.id('edit_details'),
                header = form.querySelector('h5'),
                href_attr = utils.id('href_attr'),
                title_attr = utils.id('title_attr'),
                posicion_attr = utils.id('posicion_attr'),
                tipo_attr = utils.id('tipo_attr'),
                id_attr = utils.id('id_attr'),
                save_button = utils.id('save_details'),
                close_button = form.querySelector('.close_button'),
                sections = form.querySelectorAll('p'),
                obj,
                x,
                y,
                temp_x,
                temp_y,
                zona_id = utils.id('zonaSuperior_id'),
                maquina_id = utils.id('maquinaSuperior_id'),
                zona_nombre = utils.id('superiorZona_id'),
                maquina_nombre = utils.id('superiorMaquina_id'),
                plano_id = utils.id('mantEditorPlanos_id');
        ;

        function changedReset() {
            utils.removeClass(form, 'changed');
            utils.foreach(sections, function (x) {
                utils.removeClass(x, 'changed');
            });
        }

        function save(e) {
            obj.href = href_attr.value;
            obj.title = title_attr.value;
            obj.posicion = posicion_attr.value;
            obj.tipo = tipo_attr.value;
            obj.id = id_attr.value;

            obj.href ? obj.with_href() : obj.without_href();

            //changeZ_Index();
            ponerPosicion();
            changedReset();

            e.preventDefault();
        }
        ;

        function unload() {
            obj = null;
            changedReset();
            utils.hide(form);
        }

        function setCoords(x, y) {
            form.style.left = (x + 5) + 'px';
            form.style.top = (y + 5) + 'px';
        }

        function moveEditBlock(e) {
            setCoords(x + e.pageX - temp_x, y + e.pageY - temp_y);
        }

        function stopMoveEditBlock(e) {
            x = x + e.pageX - temp_x;
            y = y + e.pageY - temp_y;
            setCoords(x, y);

            app.removeAllEvents();
        }

        function change() {
            utils.addClass(form, 'changed');
            utils.addClass(this.parentNode, 'changed');
        }
        function changeZ_Index() {
            obj.style.zIndex = obj.posicion;
        }

        save_button.addEventListener('click', save, false);

        href_attr.addEventListener('keydown', function (e) {
            e.stopPropagation();
        }, false);

        title_attr.addEventListener('keydown', function (e) {
            e.stopPropagation();
        }, false);

        posicion_attr.addEventListener('keydown', function (e) {
            e.stopPropagation();
        }, false);

        tipo_attr.addEventListener('keydown', function (e) {
            e.stopPropagation();
        }, false);

        href_attr.addEventListener('change', change, false);
        title_attr.addEventListener('change', change, false);
        posicion_attr.addEventListener('change', change, false);
        tipo_attr.addEventListener('change', change, false);

        close_button.addEventListener('click', unload, false);

        header.addEventListener('mousedown', function (e) {
            temp_x = e.pageX,
                    temp_y = e.pageY;

            app.addEvent(document, 'mousemove', moveEditBlock);
            app.addEvent(header, 'mouseup', stopMoveEditBlock);

            e.preventDefault();
        }, false);

        return {
            load: function (object, new_x, new_y) {
                obj = object;
                //object.id = 'tuercaMediaRapado';
                //alert(object.id);


                href_attr.value = object.href ? object.href : '';
                title_attr.value = object.title ? object.title : '';
                posicion_attr.value = object.posicion ? object.posicion : '';
                tipo_attr.value = object.tipo ? object.tipo : '';

                object.params.posIndice = object.posicion;
                //console.log(object.params.posIndice);
                //console.log(object);
                //$(object).style.zIndex = posicion_attr;
                utils.show(form);
                if (new_x && new_y) {
                    x = new_x;
                    y = new_y;
                    setCoords(x, y);
                }
            }, loadPuro: function (object, new_x, new_y) {
                obj = object;
                ePermanente = object.href;
                xPermanente = new_x;
                yPermanente = new_y;
                //console.log(obj.href+ "2");
                if (object.href.includes('maquina')) {
                    maquina_id.value = object.href.split("=")[1] ? object.href.split("=")[1] : '';
                    maquina_nombre.value = object.href.split("=")[2] ? object.href.split("=")[2] : '---';
                    zona_id.value = object.href.split("=")[3] ? object.href.split("=")[3] : '';
                    zona_nombre.value = object.href.split("=")[4] ? object.href.split("=")[4] : '---';

                    var pathArrays = window.location.pathname.split('/');
                    var url = "/" + pathArrays[1] + "/CargarDatosEnDivImgMaquinaZona";

                    var data = {
                        maquina_id: maquina_id.value
                    };

                    //console.log(data);

                    cargaCodigoHtmlenDivSinActualizar(url, data, "#imagenMaquinaForm");
                    // irMaquina();
                } else if (object.href.includes('zona')) {
                    zona_id.value = object.href.split("=")[1] ? object.href.split("=")[1] : '';
                    zona_nombre.value = object.href.split("=")[2] ? object.href.split("=")[2] : '---';
                    maquina_id.value = "";
                    maquina_nombre.value = "---";

                    var pathArrays = window.location.pathname.split('/');
                    var url = "/" + pathArrays[1] + "/CargarDatosEnDivImgMaquinaZona";

                    var data = {
                        zona_id: zona_id.value
                    };

                    cargaCodigoHtmlenDivSinActualizar(url, data, "#imagenMaquinaForm");
                    //irZona();
                } else {
                    //alert("ae");
                    maquina_id.value = "";
                    maquina_nombre.value = "---";
                    zona_id.value = "";
                    zona_nombre.value = "---";
                    plano_id.value = object.href.split("=")[1] ? object.href.split("=")[1] : '';

                    var pathArrays = window.location.pathname.split('/');
                    var url = "/" + pathArrays[1] + "/CargarDatosEnDivImgMaquinaZona";

                    //var data = {};

                    //cargaCodigoHtmlenDivSinActualizar(url, data, "#imagenMaquinaForm");
                }

                href_attr.value = object.href ? object.href : '';
                title_attr.value = object.title ? object.title : '';
                posicion_attr.value = object.posicion ? object.posicion : '';
                tipo_attr.value = object.tipo ? object.tipo : '';
                id_attr.value = object.id ? object.id : '';

                object.params.posIndice = object.posicion;


                //utils.show(form);

                //if (new_x && new_y) {
//                    x = new_x;
//                    y = new_y;
                x = parseInt((window.screen.width / 2) - (parseFloat($("#edit_details").css("width").split("px")[0]) / 2));
                y = parseInt((window.screen.height / 2) - (parseFloat($("#edit_details").css("height").split("px")[0]) / 2));

                setCoords(x, y);
//                    $("#edit_details").css("display", "block");
//                    $("#edit_details").css("vertical-align", "middle");
//
//                    $("#edit_details").css("margin-left", "auto");
//                    $("#edit_details").css("margin-right", "auto");
                //}
                //$("#tipo_attr").trigger("change");
            },
            unload: unload
        };
    })();


    /* Load areas from html code */
    var from_html_form = (function () {
        var form = utils.id('from_html_wrapper'),
                code_input = utils.id('code_input'),
                load_button = utils.id('load_code_button'),
                close_button = form.querySelector('.close_button'),
                regexp_area = /<area(?=.*? shape="(rect|circle|poly)")(?=.*? coords="([\d ,]+?)")[\s\S]*?>/gmi,
                regexp_href = / href="([\S\s]+?)"/,
                regexp_title = / title="([\S\s]+?)"/,
                regexp_posicion = / posicion="([\S\s]+?)"/,
                regexp_tipo = / tipo="([\S\s]+?)"/;

        function test(str) {
            var result_area,
                    result_href,
                    result_title,
                    result_posicion,
                    result_tipo,
                    type,
                    coords,
                    area,
                    href,
                    title,
                    posicion,
                    tipo,
                    success = false;

            if (str) {
                result_area = regexp_area.exec(str);

                while (result_area) {
                    success = true;

                    area = result_area[0];

                    type = result_area[1];
                    coords = result_area[2].split(/ ?, ?/);

                    result_href = regexp_href.exec(area);
                    if (result_href) {
                        href = result_href[1];
                    } else {
                        href = '';
                    }

                    result_title = regexp_title.exec(area);
                    if (result_title) {
                        title = result_title[1];
                    } else {
                        title = '';
                    }
                    result_posicion = regexp_posicion.exec(area);
                    if (result_posicion) {
                        posicion = result_posicion[1];
                    } else {
                        posicion = '';
                    }
                    result_tipo = regexp_tipo.exec(area);
                    if (result_tipo) {
                        tipo = result_tipo[1];
                    } else {
                        tipo = '';
                    }

                    for (var i = 0, len = coords.length; i < len; i++) {
                        coords[i] = Number(coords[i]);
                    }

                    switch (type) {
                        case 'rect':
                            if (coords.length === 4) {
                                Rect.createFromSaved({
                                    coords: coords,
                                    href: href,
                                    title: title,
                                    posicion: posicion,
                                    tipo: tipo
                                });
                            }
                            break;

                        case 'circle':
                            if (coords.length === 3) {
                                Circle.createFromSaved({
                                    coords: coords,
                                    href: href,
                                    title: title,
                                    posicion: posicion,
                                    tipo: tipo
                                });
                            }
                            break;

                        case 'poly':
                            if (coords.length >= 6 && coords.length % 2 === 0) {
                                Polygon.createFromSaved({
                                    coords: coords,
                                    href: href,
                                    title: title,
                                    posicion: posicion,
                                    tipo: tipo
                                });
                            }
                            break;
                    }

                    result_area = regexp_area.exec(str);
                }

                if (success) {
                    hide();
                }
            }
        }

        function load(e) {

            test(code_input.value);

            e.preventDefault();
        }
        ;

        function hide() {
            utils.hide(form);
        }

        load_button.addEventListener('click', load, false);

        close_button.addEventListener('click', hide, false);

        return {
            show: function () {
                code_input.value = '';
                utils.show(form);
            },
            hide: hide
        };
    })();


    /* Get image form */
    var get_image = (function () {
        var block = utils.id('get_image_wrapper'),
                loading_indicator = utils.id('loading'),
                button = utils.id('button'),
                filename = null,
                last_changed = null;

        ////////////



        sm_img.style.display = 'inline-block';
        filename = document.getElementById("filename").value;
//        alert(filename);
//        console.log(filename);

        //utils.show(dropzone_clear_button);
        //last_changed = drag_n_drop;


        // Drag'n'drop - the first way to loading an image
        var drag_n_drop = (function () {
            var dropzone = utils.id('dropzone'),
                    dropzone_clear_button = dropzone.querySelector('.clear_button'),
                    sm_img = utils.id('sm_img');

            if (!utils.supportFileReader) { // For IE9
                utils.hide(utils.id('file_reader_support'));
            }
            ;

            function testFile(type) {
                switch (type) {
                    case 'image/jpeg':
                    case 'image/gif':
                    case 'image/png':
                        return true;
                        break;
                }
                return false;
            }

            dropzone.addEventListener('dragover', function (e) {
                utils.stopEvent(e);
            }, false);

            dropzone.addEventListener('dragleave', function (e) {
                utils.stopEvent(e);
            }, false);

            dropzone.addEventListener('drop', function (e) {
                utils.stopEvent(e);

                var reader = new FileReader(),
                        file = e.dataTransfer.files[0];

                if (testFile(file.type)) {
                    utils.removeClass(dropzone, 'error');

                    reader.readAsDataURL(file);

                    reader.onload = function (e) {
                        sm_img.src = e.target.result;
                        sm_img.style.display = 'inline-block';
                        filename = file.name;
//                        alert(filename);
                        utils.show(dropzone_clear_button);
                        last_changed = drag_n_drop;
                    };
                } else {
                    clearDropzone();
                    utils.addClass(dropzone, 'error');
                }

            }, false);

            function clearDropzone() {
                sm_img.src = '';

                utils.hide(sm_img)
                        .hide(dropzone_clear_button)
                        .removeClass(dropzone, 'error');

                last_changed = url_input;
            }
            ;

            dropzone_clear_button.addEventListener('click', clearDropzone, false);

            return {
                clear: clearDropzone,
                init: function () {
                    dropzone.draggable = true;
                    this.clear();
                    utils.hide(sm_img)
                            .hide(dropzone_clear_button);
                },
                test: function () {
                    return sm_img.src ? true : false;
                },
                getImage: function () {
                    return sm_img.src;
                }
            };
        })();


        /* Set a url - the second way to loading an image */
        var url_input = (function () {
            var url = utils.id('url'),
                    url_clear_button = url.parentNode.querySelector('.clear_button');

            function testUrl(str) {
                var url_str = utils.trim(str),
                        temp_array = url_str.split('.'),
                        ext;

                if (temp_array.length > 1) {
                    ext = temp_array[temp_array.length - 1].toLowerCase();
                    switch (ext) {
                        case 'jpg':
                        case 'jpeg':
                        case 'gif':
                        case 'png':
                            return true;
                            break;
                    }
                    ;
                }
                ;

                return false;
            }

            function onUrlChange() {
                setTimeout(function () {
                    if (url.value.length) {
                        utils.show(url_clear_button);
                        last_changed = url_input;
                    } else {
                        utils.hide(url_clear_button);
                        last_changed = drag_n_drop;
                    }
                }, 0);
            }

            url.addEventListener('keypress', onUrlChange, false);
            url.addEventListener('change', onUrlChange, false);
            url.addEventListener('paste', onUrlChange, false);

            function clearUrl() {
                url.value = '';
                utils.hide(url_clear_button);
                utils.removeClass(url, 'error');
                last_changed = url_input;
            }
            ;

            url_clear_button.addEventListener('click', clearUrl, false);

            return {
                clear: clearUrl,
                init: function () {
                    this.clear();
                    utils.hide(url_clear_button);
                },
                test: function () {
                    if (testUrl(url.value)) {
                        utils.removeClass(url, 'error');
                        return true;
                    } else {
                        utils.addClass(url, 'error');
                    }
                    ;
                    return false;
                },
                getImage: function () {
                    var tmp_arr = url.value.split('/');
                    filename = tmp_arr[tmp_arr.length - 1];

                    return utils.trim(url.value)
                }
            };
        })();


        /* Block init */
        function init() {
            utils.hide(loading_indicator);
            drag_n_drop.init();
            url_input.init();
        }
        //init();

        /* Block clear */
        function clear() {
            drag_n_drop.clear();
            url_input.clear();
            last_changed = null;
        }
        ;

        /* Selected image loading */
        function onButtonClick(e) {
            app.loadImage(drag_n_drop.getImage()).setFilename(filename);
            if (last_changed === url_input && url_input.test()) {
                app.loadImage(url_input.getImage()).setFilename(filename);
            } else if (last_changed === drag_n_drop && drag_n_drop.test()) {
                app.loadImage(drag_n_drop.getImage()).setFilename(filename);
//                alert(filename);
                console.log(filename);
            }

            e.preventDefault();
        }
        ;

        button.addEventListener('click', onButtonClick, false);

        /* Returned object */
        return {
            show: function () {
                clear();
                utils.show(block);

                return this;
            },
            hide: function () {
                utils.hide(block);

                return this;
            },
            showLoadIndicator: function () {
                utils.show(loading_indicator);

                return this;
            },
            hideLoadIndicator: function () {
                utils.hide(loading_indicator);

                return this;
            }
        };
    })();


    /* Buttons and actions */
    var buttons = (function () {
        var all = utils.id('tools').getElementsByTagName('button'),
                save = utils.id('save'),
                load = utils.id('load'),
                rectangle = utils.id('rect'),
                circle = utils.id('circle'),
                polygon = utils.id('polygon'),
                edit = utils.id('edit'),
                clear = utils.id('clear'),
                from_html = utils.id('from_html'),
                to_html = utils.id('to_html'),
                preview = utils.id('preview'),
                new_image = utils.id('new_image'),
                show_help = utils.id('show_help');

        function deselectAll() {
            utils.foreach(all, function (x) {
                utils.removeClass(x, 'selected');
            });
        }

        function selectOne(button) {
            deselectAll();
            utils.addClass(button, 'selected');

        }

        function onSaveButtonClick(e) {
            // Save in localStorage

            app.saveInLocalStorage();

            e.preventDefault();
        }

        function onLoadButtonClick(e) {
            // Load from localStorage
            objecto_id = 0;
            app.clear().loadFromLocalStorage();

            e.preventDefault();
        }
        function onLoadButtonClickServidor() {
            // Load from localStorage
            objecto_id = 0;
            app.clear().loadFromLocalStorageServidor();


        }

        function onShapeButtonClick(e) {
            // shape = rect || circle || polygon
            app.setMode('drawing')
                    .setDrawClass()
                    .setShape(this.id)
                    .deselectAll()
                    .hidePreview();
            info.unload();
            selectOne(this);

            e.preventDefault();
        }

        function onClearButtonClick(e) {
            // Clear all
            if (confirm('Clear all?')) {
                app.setMode(null)
                        .setDefaultClass()
                        .setShape(null)
                        .clear()
                        .hidePreview();
                deselectAll();
            }

            e.preventDefault();
        }

        function onFromHtmlButtonClick(e) {
            // Load areas from html
            from_html_form.show();

            e.preventDefault();
        }
        //code_input
        function onFromHtmlButtonClickServidor(e) {
            // Load areas from html
            from_html_form.show();

            e.preventDefault();
        }
        function onToHtmlButtonClickServidor(e) {
            // Generate html code only
            info.unload();
            //code.print();
            var mantEditorPlanos_id = $("#mantEditorPlanos_id").val();
            //alert(mantEditorPlanos_id);
            modificarMantEditorPlanosMapeo(mantEditorPlanos_id, app.getHTMLCode(true));
            //alert(app.getHTMLCode(true));
            e.preventDefault();
        }

        function onToHtmlButtonClick(e) {
            // Generate html code only
            info.unload();
            code.print();

            e.preventDefault();
        }

        function onPreviewButtonClick(e) {
            if (app.getMode() === 'preview') {
                app.setMode(null)
                        .hidePreview();
                deselectAll();
            } else {
                app.deselectAll()
                        .setMode('preview')
                        .setDefaultClass()
                        .preview();
                selectOne(this);
            }

            e.preventDefault();
        }

        function onEditButtonClick(e) {
            if (app.getMode() === 'editing') {
                app.setMode(null)
                        .setDefaultClass()
                        .deselectAll();
                deselectAll();
                utils.show(svg);
            } else {
                app.setShape(null)
                        .setMode('editing')
                        .setEditClass();
                selectOne(this);
            }

            app.hidePreview();
            e.preventDefault();
        }

        function onNewImageButtonClick(e) {
            // New image - clear all and back to loading image screen
            if (confirm('Discard all changes?')) {
                app.setMode(null)
                        .setDefaultClass()
                        .setShape(null)
                        .setIsDraw(false)
                        .clear()
                        .hide()
                        .hidePreview();
                deselectAll();
                get_image.show();
            }

            e.preventDefault();
        }

        function onShowHelpButtonClick(e) {
            //help.show();

            e.preventDefault();
        }
        function ponerPosicion() {
            //console.log("hola");
            var lista = Array();
            var listaUsados = "";
            var listaObj = Array();
            var listaArea = Array();

            $("g").each(function () {
                var posicion = $(this).context.obj.posicion;
                lista.push(posicion);
                listaObj.push("o");
                //console.log(posicion);
            });

            lista.sort(sortNumber);
            //console.log(lista);
            var codHTML = "";
            for (var i = 0; i < lista.length; i++) {
                $("g").each(function () {
                    var g = this;
                    var id = $(g).attr("id");
                    var posicion = $(g).context.obj.posicion;
                    var html = "<g id=\"" + id + "\">" + $(g).html() + "</g>";
                    var o = this.obj;

                    if (lista[i] === posicion && !listaUsados.includes(id)) {

                        var area_params = $(this).context.obj.toJSON();

                        //console.log(this.obj);//prueba añadiendo context
                        codHTML += html;
                        lista[i] = "m";
                        listaObj[i] = o;
                        listaArea[i] = area_params;
                        listaUsados += id;
                    }
                });
            }

            //console.log(codHTML);
            $("#svg").html("");
            $("#svg").html(codHTML);
            var indice = 0;
            $("g").each(function () {
                this.obj = listaObj[indice];
                var Constructor = null;
                var area_params = listaArea[indice];
                //console.log(area_params);
                if (area_params !== undefined) {
                    switch (area_params.type) {
                        case 'rect':
                            Constructor = Rect;
                            break;

                        case 'circle':
                            Constructor = Circle;
                            break;

                        case 'polygon':
                            Constructor = Polygon;
                            break;
                    }
                }
                if (Constructor) {
                    Constructor.createFromSaved(area_params);
                    $(this).context.obj.setParams($(this).context.obj.move(10, 10));
                    $(this).context.obj.redraw();
                }

                $(this).remove();
                indice++;
            });
            setTimeout(function () {
                $("#botonSimulaClick").trigger("click");
                ponerTitulo();
            }, 100);
        }

        $('#pasarCodigoFuera').click(ponerPosicion);

        save.addEventListener('click', onSaveButtonClick, false);
        load.addEventListener('click', onLoadButtonClick, false);
        rectangle.addEventListener('click', onShapeButtonClick, false);
        circle.addEventListener('click', onShapeButtonClick, false);
        polygon.addEventListener('click', onShapeButtonClick, false);
        clear.addEventListener('click', onClearButtonClick, false);
        from_html.addEventListener('click', onFromHtmlButtonClick, false);
        to_html.addEventListener('click', onToHtmlButtonClickServidor, false);
        preview.addEventListener('click', onPreviewButtonClick, false);
        edit.addEventListener('click', onEditButtonClick, false);
        new_image.addEventListener('click', onNewImageButtonClick, false);
        show_help.addEventListener('click', onShowHelpButtonClick, false);
    })();


    /* AppEvent constructor */
    function AppEvent(target, eventType, func) {
        this.target = target;
        this.eventType = eventType;
        this.func = func;

        target.addEventListener(eventType, func, false);
    }
    ;

    AppEvent.prototype.remove = function () {
        this.target.removeEventListener(this.eventType, this.func, false);
    };


    /* Helper constructor */
    function Helper(node, x, y) {
        this.helper = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        this.helper.setAttribute('class', 'helper');
        this.helper.setAttribute('height', 5);
        this.helper.setAttribute('width', 5);
        this.helper.setAttribute('x', x - 3);
        this.helper.setAttribute('y', y - 3);
        node.appendChild(this.helper);
    }
    ;

    Helper.prototype.setCoords = function (x, y) {
        this.helper.setAttribute('x', x - 3);
        this.helper.setAttribute('y', y - 3);

        return this;
    };

    Helper.prototype.setAction = function (action) {
        this.helper.action = action;

        return this;
    };

    Helper.prototype.setCursor = function (cursor) {
        utils.addClass(this.helper, cursor);

        return this;
    };

    Helper.prototype.setId = function (id) {
        this.helper.n = id;

        return this;
    };

    /* Rectangle constructor */
    var Rect = function (x, y) {
        app.setIsDraw(true);

        this.params = {
            x: x, //distance from the left edge of the image to the left side of the rectangle
            y: y, //distance from the top edge of the image to the top side of the rectangle
            width: 0, //width of rectangle
            height: 0, //height of rectangle
            posIndice: 0 //z-index
        };

        this.href = ''; //href attribute - not required
        this.title = ''; //title attribute - not required
        this.posicion = '0'; //posicion attribute - not required
        this.tipo = ''; //tipo attribute - not required
        this.id = ''; //id para poder modificar


        this.g = document.createElementNS('http://www.w3.org/2000/svg', 'g'); //container               
        this.rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect'); //rectangle
        app.addNodeToSvg(this.g);
        this.g.appendChild(this.rect);

        //Añadimos id a la etiqueta g
        this.g.setAttribute('id', 'rect_id_' + objecto_id);
        objecto_id = objecto_id + 1;

//                alert(this.g.appendChild);
//                console.log(this.g.appendChild());

        this.g.obj = this; /* Link to parent object */

        this.helpers = {//object with all helpers-rectangles
            center: new Helper(this.g, x - this.params.width / 2, y - this.params.height / 2),
            top: new Helper(this.g, x - this.params.width / 2, y - this.params.height / 2),
            bottom: new Helper(this.g, x - this.params.width / 2, y - this.params.height / 2),
            left: new Helper(this.g, x - this.params.width / 2, y - this.params.height / 2),
            right: new Helper(this.g, x - this.params.width / 2, y - this.params.height / 2),
            top_left: new Helper(this.g, x - this.params.width / 2, y - this.params.height / 2),
            top_right: new Helper(this.g, x - this.params.width / 2, y - this.params.height / 2),
            bottom_left: new Helper(this.g, x - this.params.width / 2, y - this.params.height / 2),
            bottom_right: new Helper(this.g, x - this.params.width / 2, y - this.params.height / 2)
        };

        this.helpers.center.setAction('move').setCursor('move');
        this.helpers.left.setAction('editLeft').setCursor('e-resize');
        this.helpers.right.setAction('editRight').setCursor('w-resize');
        this.helpers.top.setAction('editTop').setCursor('n-resize');
        this.helpers.bottom.setAction('editBottom').setCursor('s-resize');
        this.helpers.top_left.setAction('editTopLeft').setCursor('nw-resize');
        this.helpers.top_right.setAction('editTopRight').setCursor('ne-resize');
        this.helpers.bottom_left.setAction('editBottomLeft').setCursor('sw-resize');
        this.helpers.bottom_right.setAction('editBottomRight').setCursor('se-resize');

        this.select().redraw();

        /* Add this object to array of all objects */
        //console.log(this.posicion);
        //this.params.posIndice = this.posicion;
        app.addObject(this);
        var g_id = $(this)[0].g.id;
        //console.log(g_id);
        setTimeout(function () {
            if ($("#" + g_id)[0] !== undefined && $("#" + g_id)[0].obj.href === "") {
                //console.log($("#" + g_id)[0].obj);
                //console.log(maxPosicionMas1Crear());
                var num = maxPosicionMas1Crear();
                //console.log(num);
                $("#" + g_id)[0].obj.posicion = "" + num + "";
                $("#" + g_id)[0].obj.href = "creando";
                posMantenida = num;
                //console.log($("#" + g_id)[0].obj);
                ePermanente = "creando";
                setTimeout(function () {
                    $("#" + g_id)[0].obj.href = "";
                }, 300);
            }
        }, 100);
    };

    Rect.prototype.setCoords = function (params) {
        //console.log(posicion);
        this.rect.setAttribute('x', params.x);
        this.rect.setAttribute('y', params.y);
        this.rect.setAttribute('width', params.width);
        this.rect.setAttribute('height', params.height);
        this.rect.setAttribute('posIndice', params.posIndice);

        this.helpers.center.setCoords(params.x + params.width / 2, params.y + params.height / 2);
        this.helpers.top.setCoords(params.x + params.width / 2, params.y);
        this.helpers.bottom.setCoords(params.x + params.width / 2, params.y + params.height);
        this.helpers.left.setCoords(params.x, params.y + params.height / 2);
        this.helpers.right.setCoords(params.x + params.width, params.y + params.height / 2);
        this.helpers.top_left.setCoords(params.x, params.y);
        this.helpers.top_right.setCoords(params.x + params.width, params.y);
        this.helpers.bottom_left.setCoords(params.x, params.y + params.height);
        this.helpers.bottom_right.setCoords(params.x + params.width, params.y + params.height);

        return this;
    };

    Rect.prototype.setParams = function (params) {
        //console.log(params);
        this.params.x = params.x;
        this.params.y = params.y;
        this.params.width = params.width;
        this.params.height = params.height;
        this.params.posIndice = params.posIndice;

        return this;
    };

    Rect.prototype.redraw = function () {
        //console.log($(this));
        this.setCoords(this.params);

        return this;
    };

    Rect.prototype.dynamicDraw = function (x1, y1, square) {
        var x0 = this.params.x,
                y0 = this.params.y,
                new_x,
                new_y,
                new_width,
                new_height,
                delta,
                temp_params;

        new_width = Math.abs(x1 - x0);
        new_height = Math.abs(y1 - y0);

        if (square) {
            delta = new_width - new_height;
            if (delta > 0) {
                new_width = new_height;
            } else {
                new_height = new_width;
            }
        }

        if (x0 > x1) {
            new_x = x1;
            if (square && delta > 0) {
                new_x = x1 + Math.abs(delta);
            }
        } else {
            new_x = x0;
        }

        if (y0 > y1) {
            new_y = y1;
            if (square && delta < 0) {
                new_y = y1 + Math.abs(delta);
            }
        } else {
            new_y = y0;
        }

        // console.log(this);

        temp_params = {/* params */
            x: new_x,
            y: new_y,
            width: new_width,
            height: new_height,
            posIndice: objecto_id
        };

        this.setCoords(temp_params);

        return temp_params;
    };

    Rect.prototype.onDraw = function (e) {
        var _n_f = app.getNewArea(),
                square = e.shiftKey ? true : false;

        _n_f.dynamicDraw(utils.rightX(e.pageX), utils.rightY(e.pageY), square);
    };

    Rect.prototype.onDrawStop = function (e) {
        var _n_f = app.getNewArea(),
                square = e.shiftKey ? true : false;

        _n_f.setParams(_n_f.dynamicDraw(utils.rightX(e.pageX), utils.rightY(e.pageY), square)).deselect();

        app.removeAllEvents()
                .setIsDraw(false)
                .resetNewArea();
        if (ePermanente === "creando") {
            $("#edit").trigger("click");
            $("#botonSimularDobleClick").trigger("click");
            $("#posicion_attr").val(posMantenida);
        }
    };

    Rect.prototype.move = function (dx, dy) { //offset x and y
        var temp_params = Object.create(this.params);

        temp_params.x += dx;
        temp_params.y += dy;

        return temp_params;
    };

    Rect.prototype.editLeft = function (dx, dy) { //offset x and y
        var temp_params = Object.create(this.params);

        temp_params.x += dx;
        temp_params.width -= dx;

        return temp_params;
    };

    Rect.prototype.editRight = function (dx, dy) { //offset x and y
        var temp_params = Object.create(this.params);

        temp_params.width += dx;

        return temp_params;
    };

    Rect.prototype.editTop = function (dx, dy) { //offset x and y
        var temp_params = Object.create(this.params);

        temp_params.y += dy;
        temp_params.height -= dy;

        return temp_params;
    };

    Rect.prototype.editBottom = function (dx, dy) { //offset x and y
        var temp_params = Object.create(this.params);

        temp_params.height += dy;

        return temp_params;
    };

    Rect.prototype.editTopLeft = function (dx, dy) { //offset x and y
        var temp_params = Object.create(this.params);

        temp_params.x += dx;
        temp_params.y += dy;
        temp_params.width -= dx;
        temp_params.height -= dy;

        return temp_params;
    };

    Rect.prototype.editTopRight = function (dx, dy) { //offset x and y
        var temp_params = Object.create(this.params);

        temp_params.y += dy;
        temp_params.width += dx;
        temp_params.height -= dy;

        return temp_params;
    };

    Rect.prototype.editBottomLeft = function (dx, dy) { //offset x and y
        var temp_params = Object.create(this.params);

        temp_params.x += dx;
        temp_params.width -= dx;
        temp_params.height += dy;

        return temp_params;
    };

    Rect.prototype.editBottomRight = function (dx, dy) { //offset x and y
        var temp_params = Object.create(this.params);

        temp_params.width += dx;
        temp_params.height += dy;

        return temp_params;
    };

    Rect.prototype.dynamicEdit = function (temp_params, save_proportions) {
        if (temp_params.width < 0) {
            temp_params.width = Math.abs(temp_params.width);
            temp_params.x -= temp_params.width;
        }

        if (temp_params.height < 0) {
            temp_params.height = Math.abs(temp_params.height);
            temp_params.y -= temp_params.height;
        }

        if (save_proportions) {
            var proportions = this.params.width / this.params.height,
                    new_proportions = temp_params.width / temp_params.height,
                    delta = new_proportions - proportions,
                    x0 = this.params.x,
                    y0 = this.params.y,
                    x1 = temp_params.x,
                    y1 = temp_params.y;

            if (delta > 0) {
                temp_params.width = Math.round(temp_params.height * proportions);
            } else {
                temp_params.height = Math.round(temp_params.width / proportions);
            }

        }

        this.setCoords(temp_params);

        return temp_params;

    };

    Rect.prototype.onEdit = function (e) {

        var _s_f = app.getSelectedArea(),
                edit_type = app.getEditType(),
                save_proportions = e.shiftKey ? true : false;
        if (_s_f !== null) {
            _s_f.dynamicEdit(_s_f[edit_type](e.pageX - _s_f.delta.x, e.pageY - _s_f.delta.y), save_proportions);
        }
    };

    Rect.prototype.onEditStop = function (e) {
        var _s_f = app.getSelectedArea(),
                edit_type = app.getEditType(),
                save_proportions = e.shiftKey ? true : false;

        _s_f.setParams(_s_f.dynamicEdit(_s_f[edit_type](e.pageX - _s_f.delta.x, e.pageY - _s_f.delta.y), save_proportions));
        app.removeAllEvents();
    };

    Rect.prototype.remove = function () {
        app.removeNodeFromSvg(this.g);
    };

    Rect.prototype.select = function () {
        utils.addClass(this.rect, 'selected');
        //Capturamos el id del objeto seleccionado para dar visibilidad a edición.
        var id = this.g.id;
        var objeto_id = $('#' + id).children('rect');
        $(objeto_id).attr('visibility', 'visible');
        $(objeto_id).attr('dysplay', 'block');
        return this;
    };

    Rect.prototype.deselect = function () {
        utils.removeClass(this.rect, 'selected');
        //Quitamos visibilidad a edición.
        $('rect.helper').attr('visibility', 'hidden');
        $('rect.helper').attr('dysplay', 'none');

        return this;
    };

    Rect.prototype.with_href = function () {
        utils.addClass(this.rect, 'with_href');

        return this;
    };

    Rect.prototype.without_href = function () {
        utils.removeClass(this.rect, 'with_href');

        return this;
    };

    Rect.prototype.toString = function () { //to html map area code
        var x2 = this.params.x + this.params.width,
                y2 = this.params.y + this.params.height;
        return '<area shape="rect" coords="'
                + this.params.x + ', '
                + this.params.y + ', '
                + x2 + ', '
                + y2
                + '"'
                + (this.href ? ' href="' + this.href + '"' : '')
                + (this.title ? ' title="' + this.title + '"' : '')
                + (this.posicion ? ' posicion="' + this.posicion + '"' : '')
                + (this.tipo ? ' tipo="' + this.tipo + '"' : '')
                + ' />';
    };

    Rect.createFromSaved = function (params) {
        var coords = params.coords,
                href = params.href,
                title = params.title,
                posicion = params.posicion,
                tipo = params.tipo,
                area = new Rect(coords[0], coords[1]);

        area.setParams(area.dynamicDraw(coords[2], coords[3])).deselect();

        app.setIsDraw(false)
                .resetNewArea();

        if (href) {
            area.href = href;
        }

        if (title) {
            area.title = title;
        }
        if (posicion) {
            area.posicion = posicion;
        }
        if (tipo) {
            area.tipo = tipo;
        }
    };

    Rect.prototype.toJSON = function () {
        return {
            type: 'rect',
            coords: [
                this.params.x,
                this.params.y,
                this.params.x + this.params.width,
                this.params.y + this.params.height,
                this.params.posIndice
            ],
            href: this.href,
            title: this.title,
            posicion: this.posicion,
            tipo: this.tipo
        };
    };


    /* Circle constructor */
    var Circle = function (x, y) {
        app.setIsDraw(true);

        this.params = {
            cx: x, //distance from the left edge of the image to the center of the circle
            cy: y, //distance from the top edge of the image to the center of the circle
            radius: 0, //radius of the circle
            posIndice: 0
        };

        this.href = ''; //href attribute - not required
        this.title = ''; //title attribute - not required
        this.posicion = '0'; //posicion attribute - not required
        this.tipo = ''; //tipo attribute - not required
        this.id = ''; //tipo attribute - not required


        this.g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        this.circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        app.addNodeToSvg(this.g);
        this.g.appendChild(this.circle);

        this.g.obj = this; /* Link to parent object */

        //Añadimos id a la etiqueta g
        this.g.setAttribute('id', 'circle_id_' + objecto_id);
        objecto_id = objecto_id + 1;

        this.helpers = {//array of all helpers-rectangles
            center: new Helper(this.g, x, y),
            top: new Helper(this.g, x, y),
            bottom: new Helper(this.g, x, y),
            left: new Helper(this.g, x, y),
            right: new Helper(this.g, x, y)
        };

        this.helpers.center.setAction('move');
        this.helpers.top.setAction('editTop').setCursor('n-resize');
        this.helpers.bottom.setAction('editBottom').setCursor('s-resize');
        this.helpers.left.setAction('editLeft').setCursor('w-resize');
        this.helpers.right.setAction('editRight').setCursor('e-resize');

        this.select().redraw();

        app.addObject(this); //add this object to array of all objects
        var g_id = $(this)[0].g.id;
        //console.log(g_id);
        setTimeout(function () {
            if ($("#" + g_id)[0] !== undefined && $("#" + g_id)[0].obj.href === "") {
                //console.log($("#" + g_id)[0].obj);
                //console.log(maxPosicionMas1Crear());
                var num = maxPosicionMas1Crear();
                //console.log(num);
                $("#" + g_id)[0].obj.posicion = "" + num + "";
                $("#" + g_id)[0].obj.href = "creando";
                posMantenida = num;
                //console.log($("#" + g_id)[0].obj);
                ePermanente = "creando";
                setTimeout(function () {
                    $("#" + g_id)[0].obj.href = "";
                }, 300);
            }
        }, 100);
    };

    Circle.prototype.setCoords = function (params) {
        this.circle.setAttribute('cx', params.cx);
        this.circle.setAttribute('cy', params.cy);
        this.circle.setAttribute('r', params.radius);

        this.helpers.center.setCoords(params.cx, params.cy);
        this.helpers.top.setCoords(params.cx, params.cy - params.radius);
        this.helpers.right.setCoords(params.cx + params.radius, params.cy);
        this.helpers.bottom.setCoords(params.cx, params.cy + params.radius);
        this.helpers.left.setCoords(params.cx - params.radius, params.cy);

        return this;
    };

    Circle.prototype.setParams = function (params) {
        this.params.cx = params.cx;
        this.params.cy = params.cy;
        this.params.radius = params.radius;

        return this;
    };

    Circle.prototype.redraw = function () {
        this.setCoords(this.params);

        return this;
    };

    Circle.prototype.dynamicDraw = function (x1, y1) {
        var x0 = this.params.cx,
                y0 = this.params.cy,
                dx,
                dy,
                radius,
                temp_params;

        x1 = x1 ? x1 : x0;
        y1 = y1 ? y1 : y0;

        dx = Math.abs(x0 - x1);
        dy = Math.abs(y0 - y1);
        radius = Math.round(Math.sqrt(dx * dx + dy * dy));

        temp_params = {/* params */
            cx: x0,
            cy: y0,
            radius: radius
        };

        this.setCoords(temp_params);

        return temp_params;
    };

    Circle.prototype.onDraw = function (e) {
        var _n_f = app.getNewArea();
        _n_f.dynamicDraw(utils.rightX(e.pageX), utils.rightY(e.pageY));
    };

    Circle.prototype.onDrawStop = function (e) {
        var _n_f = app.getNewArea();
        _n_f.setParams(_n_f.dynamicDraw(utils.rightX(e.pageX), utils.rightY(e.pageY))).deselect();

        app.removeAllEvents()
                .setIsDraw(false)
                .resetNewArea();
    };

    Circle.prototype.move = function (dx, dy) { //offset x and y
        var temp_params = Object.create(this.params);

        temp_params.cx += dx;
        temp_params.cy += dy;

        return temp_params;
    };

    Circle.prototype.editTop = function (dx, dy) { //offset x and y
        var temp_params = Object.create(this.params);

        temp_params.radius -= dy;

        return temp_params;
    };

    Circle.prototype.editBottom = function (dx, dy) { //offset x and y
        var temp_params = Object.create(this.params);

        temp_params.radius += dy;

        return temp_params;
    };

    Circle.prototype.editLeft = function (dx, dy) { //offset x and y
        var temp_params = Object.create(this.params);

        temp_params.radius -= dx;

        return temp_params;
    };

    Circle.prototype.editRight = function (dx, dy) { //offset x and y
        var temp_params = Object.create(this.params);

        temp_params.radius += dx;

        return temp_params;
    };

    Circle.prototype.dynamicEdit = function (temp_params) {
        if (temp_params.radius < 0) {
            temp_params.radius = Math.abs(temp_params.radius);
        }

        this.setCoords(temp_params);

        return temp_params;
    };

    Circle.prototype.onEdit = function (e) {
        var _s_f = app.getSelectedArea(),
                edit_type = app.getEditType();

        _s_f.dynamicEdit(_s_f[edit_type](e.pageX - _s_f.delta.x, e.pageY - _s_f.delta.y));
    };

    Circle.prototype.onEditStop = function (e) {
        var _s_f = app.getSelectedArea(),
                edit_type = app.getEditType();

        _s_f.setParams(_s_f.dynamicEdit(_s_f[edit_type](e.pageX - _s_f.delta.x, e.pageY - _s_f.delta.y)));

        app.removeAllEvents();
    };

    Circle.prototype.remove = function () {
        app.removeNodeFromSvg(this.g);
    };

    Circle.prototype.select = function () {
        utils.addClass(this.circle, 'selected');
        //Capturamos el id del objeto seleccionado para dar visibilidad a edición.
        var id = this.g.id;
        var objeto_id = $('#' + id).children('rect');
        $(objeto_id).attr('visibility', 'visible');
        $(objeto_id).attr('dysplay', 'block');
        return this;
    };

    Circle.prototype.deselect = function () {
        utils.removeClass(this.circle, 'selected');
        //Quitamos visibilidad a edición.
        $('rect.helper').attr('visibility', 'hidden');
        $('rect.helper').attr('dysplay', 'none');
        return this;
    };

    Circle.prototype.with_href = function () {
        utils.addClass(this.circle, 'with_href');

        return this;
    }

    Circle.prototype.without_href = function () {
        utils.removeClass(this.circle, 'with_href');

        return this;
    }

    Circle.prototype.toString = function () { //to html map area code
        return '<area shape="circle" coords="'
                + this.params.cx + ', '
                + this.params.cy + ', '
                + this.params.radius
                + '"'
                + (this.href ? ' href="' + this.href + '"' : '')
                + (this.title ? ' title="' + this.title + '"' : '')
                + (this.posicion ? ' posicion="' + this.posicion + '"' : '')
                + (this.tipo ? ' tipo="' + this.tipo + '"' : '')
                + ' />';
    };

    Circle.createFromSaved = function (params) {
        var coords = params.coords,
                href = params.href,
                title = params.title,
                posicion = params.posicion,
                tipo = params.tipo,
                area = new Circle(coords[0], coords[1]);

        area.setParams(area.dynamicDraw(coords[0], coords[1] + coords[2])).deselect();

        app.setIsDraw(false)
                .resetNewArea();

        if (href) {
            area.href = href;


            if (title) {
                area.title = title;
            }

            if (posicion) {
                area.posicion = posicion;
            }

            if (tipo) {
                area.tipo = tipo;
            }
        }
        ;
    }

    Circle.prototype.toJSON = function () {
        return {
            type: 'circle',
            coords: [
                this.params.cx,
                this.params.cy,
                this.params.radius
            ],
            href: this.href,
            title: this.title,
            posicion: this.posicion,
            tipo: this.tipo
        };
    };


    /* Polygon constructor */
    var Polygon = function (x, y) {
        app.setIsDraw(true);

        this.params = [x, y]; //array of coordinates of polygon points

        this.href = ''; //href attribute - not required
        this.title = ''; //title attribute - not required
        this.posicion = '0'; //posicion attribute - not required
        this.tipo = ''; //tipo attribute - not required
        this.id = ''; //tipo attribute - not required

        this.g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        this.polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
        app.addNodeToSvg(this.g);
        this.g.appendChild(this.polygon);

        this.g.obj = this; /* Link to parent object */
        //Añadimos id a la etiqueta g
        this.g.setAttribute('id', 'polygon_id_' + objecto_id);
        objecto_id = objecto_id + 1;

        this.helpers = [//array of all helpers-rectangles
            new Helper(this.g, this.params[0], this.params[1])
        ];

        this.helpers[0].setAction('pointMove').setCursor('pointer').setId(0);

        this.selected_point = -1;

        this.select().redraw();

        app.addObject(this); //add this object to array of all objects

        var g_id = $(this)[0].g.id;
        //console.log(g_id);
        setTimeout(function () {
            if ($("#" + g_id)[0] !== undefined && $("#" + g_id)[0].obj.href === "") {
                //console.log($("#" + g_id)[0].obj);
                //console.log(maxPosicionMas1Crear());
                var num = maxPosicionMas1Crear();
                //console.log(num);
                $("#" + g_id)[0].obj.posicion = "" + num + "";
                $("#" + g_id)[0].obj.href = "creando";
                posMantenida = num;
                //console.log($("#" + g_id)[0].obj);
                ePermanente = "creando";
                setTimeout(function () {
                    $("#" + g_id)[0].obj.href = "";
                }, 300);
            }
        }, 100);
    };

    Polygon.prototype.setCoords = function (params) {
        var coords_values = params.join(' ');
        this.polygon.setAttribute('points', coords_values);
        utils.foreach(this.helpers, function (x, i) {
            x.setCoords(params[2 * i], params[2 * i + 1]);
        });

        return this;
    };

    Polygon.prototype.setParams = function (arr) {
        this.params = Array.prototype.slice.call(arr);

        return this;
    };

    Polygon.prototype.addPoint = function (x, y) {
        var helper = new Helper(this.g, x, y);
        helper.setAction('pointMove').setCursor('pointer').setId(this.helpers.length);
        this.helpers.push(helper);
        this.params.push(x, y);
        this.redraw();

        return this;
    };

    Polygon.prototype.redraw = function () {
        this.setCoords(this.params);

        return this;
    };

    Polygon.prototype.right_angle = function (x, y) {
        var old_x = this.params[this.params.length - 2],
                old_y = this.params[this.params.length - 1],
                dx = x - old_x,
                dy = -(y - old_y),
                tan = dy / dx; //tangens

        if (dx > 0 && dy > 0) {
            if (tan > 2.414) {
                x = old_x;
            } else if (tan < 0.414) {
                y = old_y;
            } else {
                Math.abs(dx) > Math.abs(dy) ? x = old_x + dy : y = old_y - dx;
            }
        } else if (dx < 0 && dy > 0) {
            if (tan < -2.414) {
                x = old_x;
            } else if (tan > -0.414) {
                y = old_y;
            } else {
                Math.abs(dx) > Math.abs(dy) ? x = old_x - dy : y = old_y + dx;
            }
        } else if (dx < 0 && dy < 0) {
            if (tan > 2.414) {
                x = old_x;
            } else if (tan < 0.414) {
                y = old_y;
            } else {
                Math.abs(dx) > Math.abs(dy) ? x = old_x + dy : y = old_y - dx;
            }
        } else if (dx > 0 && dy < 0) {
            if (tan < -2.414) {
                x = old_x;
            } else if (tan > -0.414) {
                y = old_y;
            } else {
                Math.abs(dx) > Math.abs(dy) ? x = old_x - dy : y = old_y + dx;
            }
        }

        return {
            x: x,
            y: y
        };
    };

    Polygon.prototype.dynamicDraw = function (x, y, right_angle) {
        var temp_params = [].concat(this.params);

        if (right_angle) {
            var right_coords = this.right_angle(x, y);
            x = right_coords.x;
            y = right_coords.y;
        }

        temp_params.push(x, y);

        this.setCoords(temp_params);

        return temp_params;
    };

    Polygon.prototype.onDraw = function (e) {
        var _n_f = app.getNewArea();
        var right_angle = e.shiftKey ? true : false;

        _n_f.dynamicDraw(utils.rightX(e.pageX), utils.rightY(e.pageY), right_angle);
    };

    Polygon.prototype.onDrawAddPoint = function (e) {
        var x = utils.rightX(e.pageX),
                y = utils.rightY(e.pageY),
                _n_f = app.getNewArea();

        if (e.shiftKey) {
            var right_coords = _n_f.right_angle(x, y);
            x = right_coords.x;
            y = right_coords.y;
        }
        _n_f.addPoint(x, y);
    };

    Polygon.prototype.onDrawStop = function (e) {
        var _n_f = app.getNewArea();
        if (e.type == 'click' || (e.type == 'keydown' && e.keyCode == 13)) { // key Enter
            if (_n_f.params.length >= 6) { //>= 3 points for polygon
                _n_f.polyline = _n_f.polygon;
                _n_f.polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
                _n_f.g.replaceChild(_n_f.polygon, _n_f.polyline);
                _n_f.setCoords(_n_f.params).deselect();
                delete(_n_f.polyline);

                app.removeAllEvents()
                        .setIsDraw(false)
                        .resetNewArea();
            }
        }
        ;
        e.stopPropagation();
    };

    Polygon.prototype.move = function (x, y) { //offset x and y
        var temp_params = Object.create(this.params);

        for (var i = 0, count = this.params.length; i < count; i++) {
            i % 2 ? this.params[i] += y : this.params[i] += x;
        }

        return temp_params;
    };

    Polygon.prototype.pointMove = function (x, y) { //offset x and y
        this.params[2 * this.selected_point] += x;
        this.params[2 * this.selected_point + 1] += y;

        return this.params;
    };

    Polygon.prototype.dynamicEdit = function (temp_params) {
        this.setCoords(temp_params);

        return temp_params;
    };

    Polygon.prototype.onEdit = function (e) {
        var _s_f = app.getSelectedArea(),
                edit_type = app.getEditType();

        _s_f.dynamicEdit(_s_f[edit_type](e.pageX - _s_f.delta.x, e.pageY - _s_f.delta.y));
        _s_f.delta.x = e.pageX;
        _s_f.delta.y = e.pageY;
    };

    Polygon.prototype.onEditStop = function (e) {
        var _s_f = app.getSelectedArea(),
                edit_type = app.getEditType();

        _s_f.setParams(_s_f.dynamicEdit(_s_f[edit_type](e.pageX - _s_f.delta.x, e.pageY - _s_f.delta.y)));

        app.removeAllEvents();
    };

    Polygon.prototype.remove = function () {
        app.removeNodeFromSvg(this.g);
    };

    Polygon.prototype.select = function () {
        utils.addClass(this.polygon, 'selected');
        //Capturamos el id del objeto seleccionado para dar visibilidad a edición.
        var id = this.g.id;
        var objeto_id = $('#' + id).children('rect');
        $(objeto_id).attr('visibility', 'visible');
        $(objeto_id).attr('dysplay', 'block');
        return this;
    };

    Polygon.prototype.deselect = function () {
        utils.removeClass(this.polygon, 'selected');
        //Quitamos visibilidad a edición.
        $('rect.helper').attr('visibility', 'hidden');
        $('rect.helper').attr('dysplay', 'none');
        return this;
    };

    Polygon.prototype.with_href = function () {
        utils.addClass(this.polygon, 'with_href');

        return this;
    }

    Polygon.prototype.without_href = function () {
        utils.removeClass(this.polygon, 'with_href');

        return this;
    }

    Polygon.prototype.toString = function () { //to html map area code
        for (var i = 0, count = this.params.length, str = ''; i < count; i++) {
            str += this.params[i];
            if (i != count - 1) {
                str += ', ';
            }
        }
        return '<area shape="poly" coords="'
                + str
                + '"'
                + (this.href ? ' href="' + this.href + '"' : '')
                + (this.title ? ' title="' + this.title + '"' : '')
                + (this.posicion ? ' posicion="' + this.posicion + '"' : '')
                + (this.tipo ? ' tipo="' + this.tipo + '"' : '')
                + ' />';
    };

    Polygon.createFromSaved = function (params) {
        var coords = params.coords,
                href = params.href,
                title = params.title,
                posicion = params.posicion,
                tipo = params.tipo,
                area = new Polygon(coords[0], coords[1]);

        for (var i = 2, c = coords.length; i < c; i += 2) {
            area.addPoint(coords[i], coords[i + 1]);
        }

        area.polyline = area.polygon;
        area.polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        area.g.replaceChild(area.polygon, area.polyline);
        area.setCoords(area.params).deselect();
        delete(area.polyline);

        app.setIsDraw(false)
                .resetNewArea();

        if (href) {
            area.href = href;
        }

        if (title) {
            area.title = title;
        }

        if (posicion) {
            area.posicion = posicion;
        }

        if (tipo) {
            area.tipo = tipo;
        }
    };

    Polygon.prototype.toJSON = function () {
        return {
            type: 'polygon',
            coords: this.params,
            href: this.href,
            title: this.title,
            posicion: this.posicion,
            tipo: this.tipo
        };
    };
}
;


document.addEventListener("DOMContentLoaded", SummerHtmlImageMapCreator, false);

