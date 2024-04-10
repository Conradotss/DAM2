/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.Login;

import Clases.Login.Login2;
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
public class ModeloLogin extends Conexion {

    public ModeloLogin() throws OnExceptionBD {
        super();
    }

    public boolean login(Login2 Login) throws OnExceptionBD {
        try {
            String sql = "SELECT * FROM " + DatosLogin.nombreTabla + " WHERE nombre = ? AND email = ? AND password = SHA1(?)";
            PreparedStatement ps = getConexion().prepareStatement(sql);

            ps.setString(1, Login.getNombre());
            ps.setString(2, Login.getEmail());
            ps.setString(3, Login.getPassword());

            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                // Existe un usuario con este nombre, correo electrónico y contraseña.
                // Cerrar la conexión y devolver true
                if (getConexion() != null) {
                    getConexion().close();
                }
                if (ps != null) {
                    ps.close();
                }
                return true;
            } else {
                // No existe un usuario con este nombre, correo electrónico y contraseña.
                // Cerrar la conexión y devolver false
                if (getConexion() != null) {
                    getConexion().close();
                }
                if (ps != null) {
                    ps.close();
                }
                return false;
            }

        } catch (SQLException ex) {
            throw new OnExceptionBD(new OnExceptionBD().getMessage(ex));
        }
    }

    private Login2 getLogin(ResultSet rs) throws SQLException {
        Login2 Login = new Login2(
                rs.getInt(1),
                rs.getString(2),
                rs.getString(3),
                rs.getString(4)
        );
        return Login;
    }

}
