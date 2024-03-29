/**
 * stacktable.js
 * Author & copyright (c) 2012: John Polacek
 * CardTable by: Justin McNally (2015)
 * MIT license
 *
 * Page: http://johnpolacek.github.com/stacktable.js
 * Repo: https://github.com/johnpolacek/stacktable.js/
 *
 * jQuery plugin for stacking tables on small screens
 * Requires jQuery version 1.7 or above
 *
 */
;
(function ($) {

    $.fn.cardtable = function (options) {
        var $tables = this,
                defaults = {headIndex: 0},
                settings = $.extend({}, defaults, options),
                headIndex;

        // checking the "headIndex" option presence... or defaults it to 0
        if (options && options.headIndex)
            headIndex = options.headIndex;
        else
            headIndex = 0;

        return $tables.each(function () {
            var $table = $(this);
            if ($table.hasClass('stacktable')) {
                return;
            }
            var table_css = $(this).prop('class');
            var $stacktable = $('<div></div>');
            if (typeof settings.myClass !== 'undefined')
                $stacktable.addClass(settings.myClass);
            var markup = '';
            var $caption, $topRow, headMarkup, bodyMarkup, tr_class;

            $table.addClass('stacktable large-only');

            $caption = $table.find(">caption").clone();
            $topRow = $table.find('>thead>tr,>tbody>tr,>tfoot>tr,>tr').eq(0);

            // avoid duplication when paginating
            $table.siblings().filter('.small-only').remove();

            // using rowIndex and cellIndex in order to reduce ambiguity
            $table.find('>tbody>tr').each(function () {

                // declaring headMarkup and bodyMarkup, to be used for separately head and body of single records
                headMarkup = '';
                bodyMarkup = '';
                tr_class = $(this).prop('class');
                // for the first row, "headIndex" cell is the head of the table
                // for the other rows, put the "headIndex" cell as the head for that row
                // then iterate through the key/values
                $(this).find('>td,>th').each(function (cellIndex) {
                    if ($(this).html() !== '') {
                        bodyMarkup += '<tr class="' + tr_class + '">';
                        if ($topRow.find('>td,>th').eq(cellIndex).html()) {
                            bodyMarkup += '<td class="st-key">' + $topRow.find('>td,>th').eq(cellIndex).html() + '</td>';
                        } else {
                            bodyMarkup += '<td class="st-key"></td>';
                        }
                        bodyMarkup += '<td class="st-val ' + $(this).prop('class') + '">' + $(this).html() + '</td>';
                        bodyMarkup += '</tr>';
                    }
                });

                markup += '<table class=" ' + table_css + ' stacktable small-only"><tbody>' + headMarkup + bodyMarkup + '</tbody></table>';
            });

            $table.find('>tfoot>tr>td').each(function (rowIndex, value) {
                if ($.trim($(value).text()) !== '') {
                    markup += '<table class="' + table_css + ' stacktable small-only"><tbody><tr><td>' + $(value).html() + '</td></tr></tbody></table>';
                }
            });

            $stacktable.prepend($caption);
            $stacktable.append($(markup));
            $table.before($stacktable);
        });
    };

    $.fn.stacktable = function (options, id) {

        var $tables = this,
                defaults = {headIndex: 0, displayHeader: true},
                settings = $.extend({}, defaults, options),
                headIndex;

        // checking the "headIndex" option presence... or defaults it to 0
        if (options && options.headIndex)
            headIndex = options.headIndex;
        else
            headIndex = 0;

        if (typeof id === 'undefined') {
            id = '';
        } else {
            id = ' ' + id;
        }

        return $tables.each(function () {
            var table_css = $(this).prop('class');
            var $stacktable = $('<table class="' + table_css + ' stacktable small-only' + id + '"><tbody></tbody></table>');
            if (typeof settings.myClass !== 'undefined')
                $stacktable.addClass(settings.myClass);
            var markup = '';
            var $table, $caption, $topRow, headMarkup, bodyMarkup, tr_class, displayHeader;

            $table = $(this);
            $table.addClass('stacktable large-only' + id);
            $caption = $table.find(">caption").clone();
            $topRow = $table.find('>thead>tr,>tbody>tr,>tfoot>tr').eq(0);

            displayHeader = $table.data('display-header') === undefined ? settings.displayHeader : $table.data('display-header');

            // using rowIndex and cellIndex in order to reduce ambiguity
            // let index = 1;
            $table.find('>tbody>tr, >thead>tr').each(function (rowIndex) {

                // declaring headMarkup and bodyMarkup, to be used for separately head and body of single records
                headMarkup = '';
                bodyMarkup = '';

                tr_class = ($(this)[0]).className;
                if (tr_class !== '1') {
                    var tr_id = ((($(this)[0]).id).split("_"))[1];

//                alert(tr_id);
                    if (tr_id !== undefined) {
                        //console.log(tr_id);
                        tr_class = tr_id;
                    }

                }
                // for the first row, "headIndex" cell is the head of the table
                if (rowIndex === 0) {
                    // the main heading goes into the markup variable
                    if (displayHeader) {
                        //Lo he comentado yo para quitar una línea al principio
//            markup += '<tr class=" '+tr_class +' "><th class="st-head-row st-head-row-main" colspan="2">'+$(this).find('>th,>td').eq(headIndex).html()+'</th></tr>';
                    }
                } else {
                    // for the other rows, put the "headIndex" cell as the head for that row
                    // then iterate through the key/values
                    $(this).find('>td,>th').each(function (cellIndex) {
                        if (cellIndex === headIndex) {

                            headMarkup = '<tr class="' + tr_class + '"><th class="st-head-row" colspan="2">' + $(this).html() + '</th></tr>';
                            // headMarkup = '<tr class="' + index + '"><th class="st-head-row" colspan="2">' + $(this).html() + '</th></tr>';
                        } else {
                            if ($(this).html() !== '') {
//                                alert($(this).html());
                                bodyMarkup += '<tr class="' + tr_class + '">';
                                //bodyMarkup += '<tr class="' + index + '">';
                                if ($topRow.find('>td,>th').eq(cellIndex).html()) {

//                                    alert($topRow.find('>td,>th').html());

                                    bodyMarkup += '<td class="st-key">' + $topRow.find('>td,>th').eq(cellIndex).html() + '</td>';
                                } else {
                                    bodyMarkup += '<td class="st-key"></td>';
                                }

                                bodyMarkup += '<td class="st-val ' + $(this).prop('class') + '">' + $(this).html() + '</td>';
                                bodyMarkup += '</tr>';
                            }
                        }
                    });

                    bodyMarkup += '<tr class="' + tr_class + '"><th class="saltoFila" colspan="2"></th></tr>';
                    // bodyMarkup += '<tr class="' + index + '"><th class="saltoFila" colspan="2"></th></tr>';
                    markup += headMarkup + bodyMarkup;
                }
                //index++;
            });

            $stacktable.prepend($caption);
            $stacktable.append($(markup));
            $table.before($stacktable);
        });
    };

//solo para modificar
    $.fn.stacktableModificar = function (options, id) {
        var $tables = this,
                defaults = {headIndex: 0, displayHeader: true},
                settings = $.extend({}, defaults, options),
                headIndex;

        // checking the "headIndex" option presence... or defaults it to 0
        if (options && options.headIndex)
            headIndex = options.headIndex;
        else
            headIndex = 0;

        if (typeof id === 'undefined') {
            id = '';
        } else {
            id = ' ' + id;
        }

        return $tables.each(function () {
            var table_css = $(this).prop('class');
            var $stacktable = $('<table class="' + table_css + ' stacktable small-only' + id + '"><tbody></tbody></table>');
            if (typeof settings.myClass !== 'undefined')
                $stacktable.addClass(settings.myClass);
            var markup = '';
            var $table, $caption, $topRow, headMarkup, bodyMarkup, tr_class, displayHeader;

            $table = $(this);
            $table.addClass('stacktable large-only' + id);
            $caption = $table.find(">caption").clone();
            $topRow = $table.find('>thead>tr,>tbody>tr,>tfoot>tr').eq(0);

            displayHeader = $table.data('display-header') === undefined ? settings.displayHeader : $table.data('display-header');

            // using rowIndex and cellIndex in order to reduce ambiguity
            $table.find('>tbody>tr, >thead>tr').each(function (rowIndex) {

                // declaring headMarkup and bodyMarkup, to be used for separately head and body of single records
                headMarkup = '';
                bodyMarkup = '';
                tr_class = ($(this)[0]).className;
//                alert(tr_class);
                if (tr_class !== '1') {
                    var tr_id = ((($(this)[0]).id).split("_"))[1];
                    if (tr_id !== undefined) {
                        tr_class = tr_id;
                    }
                }
                // for the first row, "headIndex" cell is the head of the table
                if (rowIndex === 0) {
                    // the main heading goes into the markup variable
                    if (displayHeader) {
                        //Lo he comentado yo para quitar una línea al principio
//            markup += '<tr class=" '+tr_class +' "><th class="st-head-row st-head-row-main" colspan="2">'+$(this).find('>th,>td').eq(headIndex).html()+'</th></tr>';
                    }
                } else {
                    // for the other rows, put the "headIndex" cell as the head for that row
                    // then iterate through the key/values
                    $(this).find('>td,>th').each(function (cellIndex) {
                        var codFila = $(this).html();
//                         alert(codFila);

                        if (cellIndex === headIndex) {

                            if (tr_class === '1') {
                                headMarkup = '<tr class="' + tr_class + '" style="display: none;"><th class="st-head-row" colspan="2">' + $(this).html() + '</th></tr>';

                            } else {
                                headMarkup = '<tr class="' + tr_class + '"><th class="st-head-row" colspan="2">' + $(this).html() + '</th></tr>';
                            }
                        } else {
                            if (tr_class === '1') {
                                if ($(this).html() !== '') {
                                    bodyMarkup += '<tr class="' + tr_class + '" style="display: none;">';
                                    if ($topRow.find('>td,>th').eq(cellIndex).html()) {
                                        bodyMarkup += '<td class="st-key">' + $topRow.find('>td,>th').eq(cellIndex).html() + '</td>';
                                    } else {
                                        bodyMarkup += '<td class="st-key"></td>';
                                    }

                                    bodyMarkup += '<td class="st-val ' + $(this).prop('class') + '">' + $(this).html() + '</td>';
                                    bodyMarkup += '</tr>';
//                                       
                                }
                            } else {
                                if ($(this).html() !== '') {
//                                        alert(codFila);

                                    bodyMarkup += '<tr class="' + tr_class + '">';
                                    if ($topRow.find('>td,>th').eq(cellIndex).html()) {

                                        bodyMarkup += '<td class="st-key">' + $topRow.find('>td,>th').eq(cellIndex).html() + '</td>';

                                    } else {

                                        bodyMarkup += '<td class="st-key"></td>';

                                    }
                                    bodyMarkup += '<td class="st-val ' + $(this).prop('class') + '">' + $(this).html() + '</td>';
                                    bodyMarkup += '</tr>';

                                }
                            }
                        }


                    });
                    if (tr_class === '1') {
                        bodyMarkup += '<tr class="' + tr_class + '" style="display: none;"><th class="saltoFila" colspan="2"></th></tr>';
                    } else {
                        bodyMarkup += '<tr class="' + tr_class + '"><th class="saltoFila" colspan="2"></th></tr>';

                    }
                    markup += headMarkup + bodyMarkup;
                }
            });

            $stacktable.prepend($caption);
            $stacktable.append($(markup));
            $table.before($stacktable);
        });
    };

    $.fn.stackcolumns = function (options) {
        var $tables = this,
                defaults = {},
                settings = $.extend({}, defaults, options);

        return $tables.each(function () {
            var $table = $(this);
            var $caption = $table.find(">caption").clone();
            var num_cols = $table.find('>thead>tr,>tbody>tr,>tfoot>tr').eq(0).find('>td,>th').length; //first table <tr> must not contain colspans, or add sum(colspan-1) here.
            if (num_cols < 3) //stackcolumns has no effect on tables with less than 3 columns
                return;

            var $stackcolumns = $('<table class="stacktable small-only"></table>');
            if (typeof settings.myClass !== 'undefined')
                $stackcolumns.addClass(settings.myClass);
            $table.addClass('stacktable large-only');
            var tb = $('<tbody></tbody>');
            var col_i = 1; //col index starts at 0 -> start copy at second column.

            while (col_i < num_cols) {
                $table.find('>thead>tr,>tbody>tr,>tfoot>tr').each(function (index) {
                    var tem = $('<tr></tr>'); // todo opt. copy styles of $this; todo check if parent is thead or tfoot to handle accordingly
                    if (index === 0)
                        tem.addClass("st-head-row st-head-row-main");
                    var first = $(this).find('>td,>th').eq(0).clone().addClass("st-key");
                    var target = col_i;
                    // if colspan apply, recompute target for second cell.
                    if ($(this).find("*[colspan]").length) {
                        var i = 0;
                        $(this).find('>td,>th').each(function () {
                            var cs = $(this).attr("colspan");
                            if (cs) {
                                cs = parseInt(cs, 10);
                                target -= cs - 1;
                                if ((i + cs) > (col_i)) //out of current bounds
                                    target += i + cs - col_i - 1;
                                i += cs;
                            } else {
                                i++;
                            }

                            if (i > col_i)
                                return false; //target is set; break.
                        });
                    }
                    var second = $(this).find('>td,>th').eq(target).clone().addClass("st-val").removeAttr("colspan");
                    tem.append(first, second);
                    tb.append(tem);
                });
                ++col_i;
            }

            $stackcolumns.append($(tb));
            $stackcolumns.prepend($caption);
            $table.before($stackcolumns);
        });
    };

}(jQuery));
