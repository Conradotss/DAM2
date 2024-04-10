/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.Telegram.Usuario;

import Clases.Telegram.Usuario.Usuario;
import Basedatos.Conexion;
import Basedatos.OnExceptionBD;
import java.sql.Connection;
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
public class ModeloUsuarios extends Conexion {

    public ModeloUsuarios() throws OnExceptionBD {
        super();
    }

    public boolean crearUsuario(Usuario Usuario) throws OnExceptionBD {

        try {
            String sql = "insert into " + DatosUsuario.nombreTabla + " (" + DatosUsuario.campos + ") "
                    + "values (" + DatosUsuario.questionMysql + ");";
//        System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
//
            int i = 1;
            ps.setObject(i++, Usuario.getBasedatosID());
            ps.setObject(i++, Usuario.getTelegramID());
            ps.setObject(i++, Usuario.getNombre());

//
            ps.executeUpdate();

            if (getConexion()
                    != null) {
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

    public ArrayList<Usuario> buscarUsuario(String telegram, String nombre) throws OnExceptionBD {

        try {
            ArrayList<Usuario> lista = new ArrayList<Usuario>();

//            String sql = "SELECT * FROM " + DatosUsuario.nombreTabla + " WHERE " + DatosUsuario.whereID + " like '%" + cantidad  + "%' ";
            String sql = "SELECT * \n"
                    + "FROM " + DatosUsuario.nombreTabla + " consu\n"
                    + "WHERE " + DatosUsuario.whereNombre + " like '%" + telegram + "%' ";

            if (!nombre.isEmpty()) {
                sql += " AND nombre LIKE '%" + nombre + "%' ";
            }

//        System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                Usuario Usuario = getUsuario(rs);
                lista.add(Usuario);
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

    public Usuario getUsuario(int usuario_id) throws OnExceptionBD {

        try {
            String sql = "SELECT * FROM " + DatosUsuario.nombreTabla + " WHERE " + DatosUsuario.whereID + " = '" + usuario_id + "';";
//        System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
            ResultSet rs = ps.executeQuery();
            Usuario Usuario = null;

            while (rs.next()) {
                Usuario = getUsuario(rs);

            }

            if (getConexion() != null) {
                getConexion().close();
            }
            if (ps != null) {
                ps.close();
            }

            return Usuario;
        } catch (SQLException ex) {
            throw new OnExceptionBD(new OnExceptionBD().getMessage(ex));
        }
    }

    //para poder ver, modificar y crear
    private Usuario getUsuario(ResultSet rs) throws SQLException {
        int i = 1;
        Usuario Usuario = new Usuario(
                rs.getInt(i++),
                rs.getString(i++),
                rs.getString(i++)
        );
        return Usuario;
    }

    public boolean eliminarUsuario(int usuario_id) throws OnExceptionBD {

        try {
            String sql = "DELETE FROM " + DatosUsuario.nombreTabla + " WHERE " + DatosUsuario.whereID + " ='" + usuario_id + "';";
            Statement sentencia = getSentencia();
            //
            sentencia.executeUpdate(sql);
//        System.out.println(sql);

            if (getConexion() != null) {
                getConexion().close();
            }
            if (sentencia != null) {
                sentencia.close();
            }

            return true;
        } catch (SQLException ex) {
            throw new OnExceptionBD(new OnExceptionBD().getMessage(ex));
        }
    }

    public boolean modificarUsuario(Usuario Usuario) throws OnExceptionBD {

        try {
            String sql = "UPDATE " + DatosUsuario.nombreTabla
                    + DatosUsuario.update
                    + " WHERE " + DatosUsuario.whereID + " = ?";
//        System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
//

            int i = 1;
            ps.setObject(i++, Usuario.getTelegramID());
            ps.setObject(i++, Usuario.getNombre());

//where
            ps.setObject(i++, Usuario.getBasedatosID());

//ejecutamos la sentencia
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

    public static ResultSet obtenerMaterial() throws OnExceptionBD {
        ResultSet rs = null;
        try {
            // Conectar a la base de datos
            Connection con = new Conexion().getConexion();

            // Preparar la consulta
            String sql = "SELECT bm_material_id, nombre from bm_material ";

            PreparedStatement pst = con.prepareStatement(sql);

            // Ejecutar la consulta y obtener el resultado
            rs = pst.executeQuery();
        } catch (SQLException ex) {
            throw new OnExceptionBD(new OnExceptionBD().getMessage(ex));
        }
        return rs;
    }

}
