
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



$(document).ready(function () {

    //Capturamos la ruta para envio de datos a servlet
    var pathArray2 = window.location.pathname.split('/');
    var urlServlet2 = "/" + pathArray2[1] + "/SeleccionMaterialConsumo";

    validarFormulario2("#frmSeleccionMaterial", urlServlet2);

    //boton de cancelar
    $("#btnCancelarMaterial").click(function (e) {
        ventanaAtras(window, swal);
    });


});

function validarFormulario2(nombreForm2, urlServlet2) {

    $(nombreForm2).validate({

        rules: {

            cantidad: {
                required: true,
                maxlength: 100
            },
            lot: {
                required: true,
                maxlength: 100
            },
            bm_material: {
                required: true,
                maxlength: 100
            },
            orden: {
                required: true,
                maxlength: 100
            }


        }, //////Fin de reglas///////////////////////////////////

        messages: {

            cantidad: {
                required: "Debe introducir una cantidad."
            },
            lot: {
                required: "Debe introducir un lot."
            },
            bm_material: {
                required: "Debe introducir un material."
            },
            orden: {
                required: "Debe introducir una orden."
            }

        }, /////////Fin de msg////////////////////////////////
        submitHandler: function () {
            enviarDatosJson(urlServlet2, getDatosForm2(), true);
        }
    });////////Fin Validate

}

function getDatosForm2() {
    var id = $("#id").val();
    var checkboxesName = 'checkboxID';
    var checkboxesData = processCheckboxes(checkboxesName);

    var data = {
        id: id,
        check: checkboxesData.checkedBoxes,
        notCheck: checkboxesData.notCheckedBoxes
    };

    console.log(data);
    return data;

}

function processCheckboxes(chkboxName) {
    var checkboxes = document.getElementsByName(chkboxName);
    var checkboxesCheckedSet = new Set();
    var checkboxesNotCheckedSet = new Set();

    for (var i = 0; i < checkboxes.length; i++) {
        var checkboxValue = parseInt(checkboxes[i].value);

        if (checkboxes[i].checked) {
            checkboxesCheckedSet.add(checkboxValue);
            // If a previously unchecked checkbox was checked, we remove it from the unchecked set
            if (checkboxesNotCheckedSet.has(checkboxValue)) {
                checkboxesNotCheckedSet.delete(checkboxValue);
            }
        } else {
            checkboxesNotCheckedSet.add(checkboxValue);
            // If a previously checked checkbox was unchecked, we remove it from the checked set
            if (checkboxesCheckedSet.has(checkboxValue)) {
                checkboxesCheckedSet.delete(checkboxValue);
            }
        }
    }

    return {
        checkedBoxes: JSON.stringify(Array.from(checkboxesCheckedSet)),
        notCheckedBoxes: JSON.stringify(Array.from(checkboxesNotCheckedSet))
    };
}

