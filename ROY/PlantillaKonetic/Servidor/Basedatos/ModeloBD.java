/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Basedatos;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

/**
 *
 * @author Angel
 */
public class ModeloBD extends Conexion {

    public ModeloBD() throws OnExceptionBD {
        super();
    }

    public ArrayList<String> getListaTablasRelacionadas(String nombreTablaReferenciada) throws OnExceptionBD {

        try {

            ArrayList<String> lista = new ArrayList();

            String sql = "SELECT TABLE_NAME FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS\n"
                    + "WHERE CONSTRAINT_SCHEMA = 'ongestion'\n"
                    + "AND REFERENCED_TABLE_NAME = '" + nombreTablaReferenciada + "' \n"
                    + "AND DELETE_RULE = 'NO ACTION'\n"
                    + ";";
            //System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                lista.add(rs.getString(1));
            }

            if (getConexion() != null) {
                getConexion().close();
            }
            if (ps != null) {
                ps.close();
            }

            return lista;
        } catch (SQLException ex) {
            throw new OnExceptionBD(new OnExceptionBD().getMessage(ex));
        }
    }
}
