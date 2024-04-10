/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.CrearUsuario;

import Clases.CrearUsuario.Registro2;
import Basedatos.OnExceptionBD;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Angel
 */
public class ControladorRegistros2 {

    public boolean crearRegistroUsuario(Registro2 Registro) throws OnExceptionBD {
        ModeloRegistro2 modelo = new ModeloRegistro2();
        return modelo.crearRegistroUsuario(Registro);
    }

}
