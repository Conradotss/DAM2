/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.BalanceMasa.Consumo;

import Clases.BalanceMasa.Consumo.Consumo;
import Basedatos.OnExceptionBD;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Angel
 */
public class ControladorConsumos {

    public boolean crearConsumo(Consumo Consumo) throws OnExceptionBD {
        ModeloConsumos modelo = new ModeloConsumos();
        return modelo.crearConsumo(Consumo);
    }

    public boolean crearMaterialPack(Consumo Consumo) throws OnExceptionBD {
        ModeloConsumos modelo = new ModeloConsumos();
        return modelo.crearMaterialPack(Consumo);
    }

    public boolean eliminarMaterialPack(int consumo_id) throws OnExceptionBD {
        ModeloConsumos modelo = new ModeloConsumos();
        return modelo.eliminarMaterialPack(consumo_id);
    }

    public ArrayList<Consumo> buscarConsumo(String cantidad, String lot, String material, String orden) throws OnExceptionBD {
        ModeloConsumos modelo = new ModeloConsumos();
        return modelo.buscarConsumo(cantidad, lot, material, orden);
    }

    public ArrayList<Consumo> getCheckboxStatusForUser(int usuario_id) throws OnExceptionBD {
        ModeloConsumos modelo = new ModeloConsumos();
        return modelo.getCheckboxStatusForUser(usuario_id);
    }

    public ArrayList<Consumo> buscarConsumo2() throws OnExceptionBD {
        ModeloConsumos modelo = new ModeloConsumos();
        return modelo.buscarConsumo2();
    }

    public boolean eliminarConsumo(int consumo_id) throws OnExceptionBD {
        ModeloConsumos modelo = new ModeloConsumos();
        return modelo.eliminarConsumo(consumo_id);
    }

    public Consumo getConsumo(int consumo_id) throws OnExceptionBD {
        ModeloConsumos modelo = new ModeloConsumos();
        return modelo.getConsumo(consumo_id);
    }

    public boolean modificarConsumo(Consumo Consumo) throws OnExceptionBD {
        ModeloConsumos modelo = new ModeloConsumos();
        return modelo.modificarConsumo(Consumo);
    }

    public List<Consumo> getTablaXRegistros(int consumoID) throws OnExceptionBD {
        ModeloConsumos modelo = new ModeloConsumos();
        return modelo.getTablaXRegistros(consumoID);
    }

}
