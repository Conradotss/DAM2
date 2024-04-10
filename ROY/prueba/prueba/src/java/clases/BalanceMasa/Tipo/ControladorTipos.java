/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.BalanceMasa.Tipo;

import Clases.BalanceMasa.Tipo.Tipo;
import Basedatos.OnExceptionBD;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Angel
 */
public class ControladorTipos {

    public boolean crearTipo(Tipo Tipo) throws OnExceptionBD {
        ModeloTipos modelo = new ModeloTipos();
        return modelo.crearTipo(Tipo);
    }

    public ArrayList<Tipo> buscarTipo(String nombre) throws OnExceptionBD {
        ModeloTipos modelo = new ModeloTipos();
        return modelo.buscarTipo(nombre);
    }

    public boolean eliminarTipo(int tipo_id) throws OnExceptionBD {
        ModeloTipos modelo = new ModeloTipos();
        return modelo.eliminarTipo(tipo_id);
    }

    public Tipo getTipo(int tipo_id) throws OnExceptionBD {
        ModeloTipos modelo = new ModeloTipos();
        return modelo.getTipo(tipo_id);
    }

    public boolean modificarTipo(Tipo Tipo) throws OnExceptionBD {
        ModeloTipos modelo = new ModeloTipos();
        return modelo.modificarTipo(Tipo);
    }
    
    

}
