/*
 Todos los derechos reservados
  * TableDnD plug-in para JQuery, le permite arrastrar y soltar las filas de la tabla
  * Puede configurar varias opciones para controlar cómo funcionará el sistema
  * Copyright (c) Denis Howlett <denish@isocra.com>
  * Licenciado como jQuery, ver http://docs.jquery.com/License.
  *
  * Opciones de configuración:
  *
  * onDragStyle
  * Este es el estilo que se asigna a la fila durante el arrastre. Hay limitaciones a los estilos que pueden ser
  * asociado a una fila (tal como no se puede asignar un borde - bien se puede, pero no será
  * se muestra). (Así que considere utilizar onDragClass.) El estilo CSS a aplicar se especifica como
  * un mapa (como se utiliza en la función jQuery css (...)).
  * onDropStyle
  * Este es el estilo que se asigna a la fila cuando se deja caer. En cuanto a onDragStyle, existen limitaciones
  * a lo que usted puede hacer. También esto sustituye al estilo original, así que vuelve a considerar el uso de onDragClass que
  * se agrega simplemente y después se quita en gota.
  * onDragClass
  * Esta clase se agrega durante la duración de la operación de arrastrar y, a continuación, se quita cuando se abandona la fila. Es más
  * flexible que usar onDragStyle ya que puede ser heredado por las celdas de fila y otros contenidos. El valor por defecto
  * es la clase tDnD_whileDrag. Así que para usar el valor predeterminado, simplemente personalizar esta clase CSS en su
  * hoja de estilo.
  * onDrop
  * Pasar una función que se llamará cuando la fila se deja caer. La función toma 2 parámetros: la tabla
  * y la fila que se eliminó. Puede calcular el nuevo orden de las filas utilizando
  * table.rows.
  * onDragStart
  * Pasar una función que se llamará cuando el usuario comienza a arrastrar. La función toma 2 parámetros: el
  * tabla y la fila que el usuario ha comenzado a arrastrar.
  * onAllowDrop
  * Pasar una función que se llamará como una fila es sobre otra fila. Si la función devuelve true,
  * caer en esa fila, de lo contrario no. La función toma 2 parámetros: la fila arrastrada y la fila debajo
  * el cursor. Devuelve un valor booleano: true permite la caída, false no lo permite.
  * scrollAmount
  * Este es el número de píxeles a desplazarse si el usuario mueve el cursor del ratón a la parte superior o inferior de la
  * ventana. La página debe desplazarse automáticamente hacia arriba o hacia abajo según sea apropiado (probado en IE6, IE7, Safari, FF2,
  * FF3 beta
  dragHandle
  * Este es el nombre de una clase que asigne a una o más celdas en cada fila que se puede arrastrar. Si tu
  * especificar esta clase, entonces usted es responsable de la configuración de cursor: mover en el CSS y sólo estas células
  * tendrá el comportamiento de arrastre. Si no especifica un dragHandle, obtendrás el comportamiento anterior
  * toda la fila se puede arrastrar.
  *
  * Otras formas de controlar el comportamiento:
  *
  * Agregue class = "nodrop" a cualquier fila para la que no quiera permitir que se caiga, y class = "nodrag" a cualquier fila
  * que usted no quiere ser arrastrable.
  *
  * Dentro del método onDrop también se puede llamar $ .tableDnD.serialize () esto devuelve una cadena del formulario
  * <tableID> [] = <rowID1> y <tableID> [] = <rowID2> para poder enviar esto de vuelta al servidor. La tabla debe tener
  * una ID como todas las filas.
  *
  * Otros metodos:
  *
  * $ ("..."). tableDnDUpdate ()
  * Actualizará todas las tablas coincidentes, es decir, volverá a aplicar el método mousedown a las filas (o manejar celdas).
  * Esto es útil si ha actualizado las filas de la tabla con Ajax y desea volver a arrastrar la tabla.
  * La tabla mantiene la configuración original (por lo que no es necesario especificarla de nuevo).
  *
  * $ ("..."). tableDnDSerialize ()
  * Se serializará y devolverá la cadena serializada como se muestra arriba, pero para cada una de las tablas coincidentes - por lo que puede ser
  * llamado desde cualquier lugar y no depende de que currentTable esté configurado correctamente antes de llamar
  *
  * Problemas conocidos:
  * - Auto-scoll tiene algunos problemas con IE7 (se desplaza incluso cuando no debería), work-around: defina scrollAmount a 0
  *
  * Versión 0.2: 2008-02-20 Primera versión pública
  * Versión 0.3: 2008-02-07 Añadida la opción onDragStart
  * Hizo la cantidad de desplazamiento configurable (el defecto es 5 como antes)
  * Versión 0.4: 2008-03-15 Cambió los atributos noDrag / noDrop a las clases nodrag / nodrop
  * Añadido onAllowDrop para controlar la caída
  * Corregido un error que significaba que no se podía establecer la cantidad de desplazamiento en ambas direcciones
  * Añadido el método de serializar
  * Versión 0.5: 2008-05-16 Cambiado para que si especifica una clase dragHandle no hace toda la fila
  arrastrable
  * Mejorado el método de serialización para usar una expresión regular predeterminada (y ajustable).
  * Añadido tableDnDupate () y tableDnDSerialize () para ser llamado cuando está fuera de la tabla
  */
jQuery.tableDnD = {
    /** Keep hold of the current table being dragged */
    currentTable: null,
    /** Keep hold of the current drag object if any */
    dragObject: null,
    /** The current mouse offset */
    mouseOffset: null,
    /** Remember the old value of Y so that we don't do too much processing */
    oldY: 0,

    /** Actually build the structure */
    build: function (options) {
        // Set up the defaults if any

        this.each(function () {
            // This is bound to each matching table, set up the defaults and override with user options
            this.tableDnDConfig = jQuery.extend({
                onDragStyle: null,
                onDropStyle: null,
                // Add in the default class for whileDragging
                onDragClass: "tDnD_whileDrag",
                onDrop: null,
                onDragStart: null,
                scrollAmount: 5,
                serializeRegexp: /[^\-]*$/, // The regular expression to use to trim row IDs
                serializeParamName: null, // If you want to specify another parameter name instead of the table ID
                dragHandle: null // If you give the name of a class here, then only Cells with this class will be draggable
            }, options || {});
            // Now make the rows draggable
            jQuery.tableDnD.makeDraggable(this);
        });

        // Now we need to capture the mouse up and mouse move event
        // We can use bind so that we don't interfere with other event handlers
        jQuery(document)
                .bind('mousemove', jQuery.tableDnD.mousemove)
                .bind('mouseup', jQuery.tableDnD.mouseup);

        // Don't break the chain
        return this;
    },

    /** This function makes all the rows on the table draggable apart from those marked as "NoDrag" */
    makeDraggable: function (table) {
        var config = table.tableDnDConfig;
        if (table.tableDnDConfig.dragHandle) {
            // We only need to add the event to the specified cells
            var cells = jQuery("td." + table.tableDnDConfig.dragHandle, table);
            cells.each(function () {
                // The cell is bound to "this"
                jQuery(this).mousedown(function (ev) {
                    jQuery.tableDnD.dragObject = this.parentNode;
                    jQuery.tableDnD.currentTable = table;
                    jQuery.tableDnD.mouseOffset = jQuery.tableDnD.getMouseOffset(this, ev);
                    if (config.onDragStart) {
                        // Call the onDrop method if there is one
                        config.onDragStart(table, this);
                    }
                    return false;
                });
            })
        } else {
            // For backwards compatibility, we add the event to the whole row
            var rows = jQuery("tr", table); // get all the rows as a wrapped set
            rows.each(function () {
                // Iterate through each row, the row is bound to "this"
                var row = jQuery(this);
                if (!row.hasClass("nodrag")) {
                    row.mousedown(function (ev) {
                        if (ev.target.tagName == "TD") {
                            jQuery.tableDnD.dragObject = this;
                            jQuery.tableDnD.currentTable = table;
                            jQuery.tableDnD.mouseOffset = jQuery.tableDnD.getMouseOffset(this, ev);
                            if (config.onDragStart) {
                                // Call the onDrop method if there is one
                                config.onDragStart(table, this);
                            }
                            return false;
                        }
                    }).css("cursor", "move"); // Store the tableDnD object
                }
            });
        }
    },

    updateTables: function () {
        this.each(function () {
            // this is now bound to each matching table
            if (this.tableDnDConfig) {
                jQuery.tableDnD.makeDraggable(this);
            }
        })
    },

    /** Get the mouse coordinates from the event (allowing for browser differences) */
    mouseCoords: function (ev) {
        if (ev.pageX || ev.pageY) {
            return {x: ev.pageX, y: ev.pageY};
        }
        return {
            x: ev.clientX + document.body.scrollLeft - document.body.clientLeft,
            y: ev.clientY + document.body.scrollTop - document.body.clientTop
        };
    },

    /** Given a target element and a mouse event, get the mouse offset from that element.
     To do this we need the element's position and the mouse position */
    getMouseOffset: function (target, ev) {
        ev = ev || window.event;

        var docPos = this.getPosition(target);
        var mousePos = this.mouseCoords(ev);
        return {x: mousePos.x - docPos.x, y: mousePos.y - docPos.y};
    },

    /** Get the position of an element by going up the DOM tree and adding up all the offsets */
    getPosition: function (e) {
        var left = 0;
        var top = 0;
        /** Safari fix -- thanks to Luis Chato for this! */
        if (e.offsetHeight == 0) {
            /** Safari 2 doesn't correctly grab the offsetTop of a table row
             this is detailed here:
             http://jacob.peargrove.com/blog/2006/technical/table-row-offsettop-bug-in-safari/
             the solution is likewise noted there, grab the offset of a table cell in the row - the firstChild.
             note that firefox will return a text node as a first child, so designing a more thorough
             solution may need to take that into account, for now this seems to work in firefox, safari, ie */
            e = e.firstChild; // a table cell
        }
        if (e && e.offsetParent) {
            while (e.offsetParent) {
                left += e.offsetLeft;
                top += e.offsetTop;
                e = e.offsetParent;
            }

            left += e.offsetLeft;
            top += e.offsetTop;
        }

        return {x: left, y: top};
    },

    mousemove: function (ev) {
        if (jQuery.tableDnD.dragObject == null) {
            return;
        }

        var dragObj = jQuery(jQuery.tableDnD.dragObject);
        var config = jQuery.tableDnD.currentTable.tableDnDConfig;
        var mousePos = jQuery.tableDnD.mouseCoords(ev);
        var y = mousePos.y - jQuery.tableDnD.mouseOffset.y;
        //auto scroll the window
        var yOffset = window.pageYOffset;
        if (document.all) {
            // Windows version
            //yOffset=document.body.scrollTop;
            if (typeof document.compatMode != 'undefined' &&
                    document.compatMode != 'BackCompat') {
                yOffset = document.documentElement.scrollTop;
            } else if (typeof document.body != 'undefined') {
                yOffset = document.body.scrollTop;
            }

        }

        if (mousePos.y - yOffset < config.scrollAmount) {
            window.scrollBy(0, -config.scrollAmount);
        } else {
            var windowHeight = window.innerHeight ? window.innerHeight
                    : document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
            if (windowHeight - (mousePos.y - yOffset) < config.scrollAmount) {
                window.scrollBy(0, config.scrollAmount);
            }
        }


        if (y != jQuery.tableDnD.oldY) {
            // work out if we're going up or down...
            var movingDown = y > jQuery.tableDnD.oldY;
            // update the old value
            jQuery.tableDnD.oldY = y;
            // update the style to show we're dragging
            if (config.onDragClass) {
                dragObj.addClass(config.onDragClass);
            } else {
                dragObj.css(config.onDragStyle);
            }
            // If we're over a row then move the dragged row to there so that the user sees the
            // effect dynamically
            var currentRow = jQuery.tableDnD.findDropTargetRow(dragObj, y);
            if (currentRow) {
                // TODO worry about what happens when there are multiple TBODIES
                if (movingDown && jQuery.tableDnD.dragObject != currentRow) {
                    jQuery.tableDnD.dragObject.parentNode.insertBefore(jQuery.tableDnD.dragObject, currentRow.nextSibling);
                } else if (!movingDown && jQuery.tableDnD.dragObject != currentRow) {
                    jQuery.tableDnD.dragObject.parentNode.insertBefore(jQuery.tableDnD.dragObject, currentRow);
                }
            }
        }

        return false;
    },

    /** We're only worried about the y position really, because we can only move rows up and down */
    findDropTargetRow: function (draggedRow, y) {
        var rows = jQuery.tableDnD.currentTable.rows;
        //console.log(jQuery.tableDnD.currentTable);
               // console.log($(draggedRow).attr("class") + " primero");
                let seccion = $(draggedRow).attr("class").split(" ")[0];
                                //console.log(seccion + " primero");

        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            let seccionAjena = $(row).attr("class");
                //console.log(seccionAjena);
            var rowY = this.getPosition(row).y;
            var rowHeight = parseInt(row.offsetHeight) / 2;
            if ($(row).attr("class") !== undefined && $(row).attr("class").includes(seccion)) {

//                console.log(row);
//                console.log(rowY);
//                console.log(rowHeight);
                if (row.offsetHeight == 0) {
                    rowY = this.getPosition(row.firstChild).y;
                    rowHeight = parseInt(row.firstChild.offsetHeight) / 2;
                }
                // Because we always have to insert before, we need to offset the height a bit
                if ((y > rowY - rowHeight) && (y < (rowY + rowHeight))) {
                    // that's the row we're over
                    // If it's the same as the current row, ignore it
                    if (row == draggedRow) {
                        return null;
                    }
                    var config = jQuery.tableDnD.currentTable.tableDnDConfig;
                    if (config.onAllowDrop) {
                        if (config.onAllowDrop(draggedRow, row)) {
                            return row;
                        } else {
                            return null;
                        }
                    } else {
                        // If a row has nodrop class, then don't allow dropping (inspired by John Tarr and Famic)
                        var nodrop = jQuery(row).hasClass("nodrop");
                        if (!nodrop) {
                            return row;
                        } else {
                            return null;
                        }
                    }
                    return row;
                }
            }
        }
        return null;
    },

    mouseup: function (e) {
        if (jQuery.tableDnD.currentTable && jQuery.tableDnD.dragObject) {
            var droppedRow = jQuery.tableDnD.dragObject;
            var config = jQuery.tableDnD.currentTable.tableDnDConfig;
            // If we have a dragObject, then we need to release it,
            // The row will already have been moved to the right place so we just reset stuff
            if (config.onDragClass) {
                jQuery(droppedRow).removeClass(config.onDragClass);
            } else {
                jQuery(droppedRow).css(config.onDropStyle);
            }
            jQuery.tableDnD.dragObject = null;
            if (config.onDrop) {
                // Call the onDrop method if there is one
                config.onDrop(jQuery.tableDnD.currentTable, droppedRow);
            }
            jQuery.tableDnD.currentTable = null; // let go of the table too
        }
    },

    serialize: function () {
        if (jQuery.tableDnD.currentTable) {
            return jQuery.tableDnD.serializeTable(jQuery.tableDnD.currentTable);
        } else {
            return "Error: No Table id set, you need to set an id on your table and every row";
        }
    },

    serializeTable: function (table) {
        var result = "";
        var tableId = table.id;
        var rows = table.rows;
        for (var i = 0; i < rows.length; i++) {
            if (result.length > 0)
                result += "&";
            var rowId = rows[i].id;
            if (rowId && rowId && table.tableDnDConfig && table.tableDnDConfig.serializeRegexp) {
                rowId = rowId.match(table.tableDnDConfig.serializeRegexp)[0];
            }

            result += tableId + '[]=' + rowId;
        }
        return result;
    },

    serializeTables: function () {
        var result = "";
        this.each(function () {
            // this is now bound to each matching table
            result += jQuery.tableDnD.serializeTable(this);
        });
        return result;
    }

}

jQuery.fn.extend(
        {
            tableDnD: jQuery.tableDnD.build,
            tableDnDUpdate: jQuery.tableDnD.updateTables,
            tableDnDSerialize: jQuery.tableDnD.serializeTables
        }
);