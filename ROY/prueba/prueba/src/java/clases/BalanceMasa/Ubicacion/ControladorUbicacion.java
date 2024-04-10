/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.BalanceMasa.Ubicacion;

import Clases.BalanceMasa.Ubicacion.Ubicacion;
import Basedatos.OnExceptionBD;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Angel
 */
public class ControladorUbicacion {

    public boolean crearUbicacion(Ubicacion Ubicacion) throws OnExceptionBD {
        ModeloUbicacion modelo = new ModeloUbicacion();
        return modelo.crearUbicacion(Ubicacion);
    }

    public ArrayList<Ubicacion> buscarUbicacion(String nombre) throws OnExceptionBD {
        ModeloUbicacion modelo = new ModeloUbicacion();
        return modelo.buscarUbicacion(nombre);
    }

    public boolean eliminarUbicacion(int ubicacion_id) throws OnExceptionBD {
        ModeloUbicacion modelo = new ModeloUbicacion();
        return modelo.eliminarUbicacion(ubicacion_id);
    }

    public Ubicacion getUbicacion(int ubicacion_id) throws OnExceptionBD {
        ModeloUbicacion modelo = new ModeloUbicacion();
        return modelo.getUbicacion(ubicacion_id);
    }

     public boolean  modificarUbicacion(Ubicacion Ubicacion) throws OnExceptionBD {
        ModeloUbicacion modelo = new ModeloUbicacion();
        return modelo.modificarUbicacion(Ubicacion);
    }
   
    
}
