/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.BalanceMasa.Registro;

import Clases.BalanceMasa.Registro.Registro;
import Basedatos.OnExceptionBD;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Angel
 */
public class ControladorRegistros {

    public boolean crearRegistro(Registro Registro) throws OnExceptionBD {
        ModeloRegistros modelo = new ModeloRegistros();
        return modelo.crearRegistro(Registro);
    }

    public ArrayList<Registro> buscarRegistro(String nombre, String tipoid, String ubiorigen, String ubidestino) throws OnExceptionBD {
        ModeloRegistros modelo = new ModeloRegistros();
        return modelo.buscarRegistro(nombre, tipoid, ubiorigen, ubidestino);
    }

    public boolean eliminarRegistro(int registro_id) throws OnExceptionBD {
        ModeloRegistros modelo = new ModeloRegistros();
        return modelo.eliminarRegistro(registro_id);
    }

    public Registro getRegistro(int registro_id) throws OnExceptionBD {
        ModeloRegistros modelo = new ModeloRegistros();
        return modelo.getRegistro(registro_id);
    }

    public boolean modificarRegistro(Registro Registro) throws OnExceptionBD {
        ModeloRegistros modelo = new ModeloRegistros();
        return modelo.modificarRegistro(Registro);
    }

}
