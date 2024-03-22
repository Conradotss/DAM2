/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Basedatos;

import java.util.ArrayList;

/**
 *
 * @author Onelectric
 */
public class ControladorBD {
    
    public ArrayList<String> getListaTablasRelacionadas(String nombreTablaReferenciada) throws OnExceptionBD {
        ModeloBD modelo = new ModeloBD();
        return modelo.getListaTablasRelacionadas(nombreTablaReferenciada);
    }
    
}
