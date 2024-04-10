/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function calcularDescuento(valor, descuento) {
    var operacion = valor * (descuento / 100);
    var resultado = valor - operacion;
    return resultado;
}

function calcularIncremento(valor, incremento) {
    var operacion = valor * (incremento / 100);
    var resultado = valor + operacion;
    return resultado;
}