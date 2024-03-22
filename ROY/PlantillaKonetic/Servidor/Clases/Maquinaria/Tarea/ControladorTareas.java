/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.Maquinaria.Tarea;

import Basedatos.OnExceptionBD;
import java.util.ArrayList;

/**
 *
 * @author Angel
 */
public class ControladorTareas {

    public boolean crearTarea(Tarea Tarea) throws OnExceptionBD {
        ModeloTareas modelo = new ModeloTareas();
        return modelo.crearTarea(Tarea);
    }

    public boolean eliminarTarea(int tarea_id) throws OnExceptionBD {
        ModeloTareas modelo = new ModeloTareas();
        return modelo.eliminarTarea(tarea_id);
    }

    public boolean modificarTarea(Tarea Tarea) throws OnExceptionBD {
        ModeloTareas modelo = new ModeloTareas();
        return modelo.modificarTarea(Tarea);
    }

    public ArrayList<Tarea> buscarTareas(String nombre, int tipo) throws OnExceptionBD {
        ModeloTareas modelo = new ModeloTareas();
        return modelo.buscarTareas(nombre, tipo);
    }

    public Tarea getTarea(int tarea_id) throws OnExceptionBD {
        ModeloTareas modelo = new ModeloTareas();
        return modelo.getTarea(tarea_id);
    }

    public ArrayList<Tarea> getListaTareas() throws OnExceptionBD {
        ModeloTareas modelo = new ModeloTareas();
        ArrayList<Tarea> listaTareas = modelo.getListaTareas();
        return listaTareas;
    }

    public ArrayList<Tarea> getListaTareas(int maquina_id) throws OnExceptionBD {
        ModeloTareas modelo = new ModeloTareas();
        ArrayList<Tarea> listaTareas = modelo.getListaTareas(maquina_id);
        return listaTareas;
    }

}
