/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.BalanceMasa.Material;

import Clases.BalanceMasa.Material.Material;
import Basedatos.OnExceptionBD;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Angel
 */
public class ControladorMateriales {

    public boolean crearMaterial(Material Material) throws OnExceptionBD {
        ModeloMateriales modelo = new ModeloMateriales();
        return modelo.crearMaterial(Material);
    }

    public boolean crearMaterialPack(Material Consumo) throws OnExceptionBD {
        ModeloMateriales modelo = new ModeloMateriales();
        return modelo.crearMaterialPack(Consumo);
    }

    public boolean eliminarMaterialPack(int consumo_id) throws OnExceptionBD {
        ModeloMateriales modelo = new ModeloMateriales();
        return modelo.eliminarMaterialPack(consumo_id);
    }

    public ArrayList<Material> buscarMaterial(String referencia, String nombre) throws OnExceptionBD {
        ModeloMateriales modelo = new ModeloMateriales();
        return modelo.buscarMaterial(referencia, nombre);
    }

    public boolean eliminarMaterial(int material_id) throws OnExceptionBD {
        ModeloMateriales modelo = new ModeloMateriales();
        return modelo.eliminarMaterial(material_id);
    }

    public Material getMaterial(int material_id) throws OnExceptionBD {
        ModeloMateriales modelo = new ModeloMateriales();
        return modelo.getMaterial(material_id);
    }

    public boolean modificarMaterial(Material Material) throws OnExceptionBD {
        ModeloMateriales modelo = new ModeloMateriales();
        return modelo.modificarMaterial(Material);
    }

    public List<Material> getTablaXRegistros(int consumoID) throws OnExceptionBD {
        ModeloMateriales modelo = new ModeloMateriales();
        return modelo.getTablaXRegistros(consumoID);
    }

    public ArrayList<Material> getCheckboxStatusForUser(int usuario_id) throws OnExceptionBD {
        ModeloMateriales modelo = new ModeloMateriales();
        return modelo.getCheckboxStatusForUser(usuario_id);
    }

    public ArrayList<Material> buscarMaterial2() throws OnExceptionBD {
        ModeloMateriales modelo = new ModeloMateriales();
        return modelo.buscarMaterial2();
    }

}
