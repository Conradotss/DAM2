/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.CrearUsuario;

import Clases.CrearUsuario.Registro2;
import Basedatos.Conexion;
import Basedatos.OnExceptionBD;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Angel
 */
public class ModeloRegistro2 extends Conexion {

    public ModeloRegistro2() throws OnExceptionBD {
        super();
    }

    public boolean crearRegistroUsuario(Registro2 Registro) throws OnExceptionBD {

        try {
            String sql = "insert into " + DatosRegistro2.nombreTabla + " (" + DatosRegistro2.campos + ") "
                    + "values (?, ?, ?, SHA1(?));";
//        System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
//
            ps.setObject(1, Registro.getUsuario_id());
            ps.setObject(2, Registro.getNombre());
            ps.setObject(3, Registro.getEmail());
            ps.setObject(4, Registro.getPassword());

//
            ps.executeUpdate();

            if (getConexion() != null) {
                getConexion().close();
            }
            if (ps != null) {
                ps.close();
            }

            return true;
        } catch (SQLException ex) {
            throw new OnExceptionBD(new OnExceptionBD().getMessage(ex));
        }
    }

    private Registro2 getRegistro(ResultSet rs) throws SQLException {
        Registro2 Registro = new Registro2(
                rs.getInt(1),
                rs.getString(2),
                rs.getString(3),
                rs.getString(4)
        );
        return Registro;
    }

}
