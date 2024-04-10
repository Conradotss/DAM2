/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.BalanceMasa.Ubicacion;

import Clases.BalanceMasa.Ubicacion.Ubicacion;
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
public class ModeloUbicacion extends Conexion {

    public ModeloUbicacion() throws OnExceptionBD {
        super();
    }

    public boolean crearUbicacion(Ubicacion Ubicacion) throws OnExceptionBD {

        try {
            String sql = "insert into " + DatosUbicacion.nombreTabla + " (" + DatosUbicacion.campos + ") "
                    + "values (" + DatosUbicacion.questionMysql + ");";
//        System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
//
            ps.setObject(1, Ubicacion.getUbicacion_id());
            ps.setObject(2, Ubicacion.getNombre());
            ps.setObject(3, Ubicacion.getdescripcion());

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

    public ArrayList<Ubicacion> buscarUbicacion(String nombre) throws OnExceptionBD {

        try {
            ArrayList<Ubicacion> lista = new ArrayList<Ubicacion>();

            String sql = "SELECT * FROM " + DatosUbicacion.nombreTabla + " "
                    + "where " + DatosUbicacion.whereNombre + " like '%" + nombre + "%' "
                    + ";";
//        System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                Ubicacion Ubicacion = getUbicacion(rs);
                lista.add(Ubicacion);
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

    public boolean modificarUbicacion(Ubicacion Ubicacion) throws OnExceptionBD {

        try {
            String sql = "UPDATE " + DatosUbicacion.nombreTabla
                    + DatosUbicacion.update
                    + " WHERE " + DatosUbicacion.whereID + " = ?";
//        System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
//
            int i = 1;
            ps.setObject(i++, Ubicacion.getNombre());
            ps.setObject(i++, Ubicacion.getdescripcion());

//where
            ps.setObject(i++, Ubicacion.getUbicacion_id());
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

    public Ubicacion getUbicacion(int ubicacion_id) throws OnExceptionBD {

        try {
            String sql = "SELECT * FROM " + DatosUbicacion.nombreTabla + " WHERE " + DatosUbicacion.whereID + " = '" + ubicacion_id + "';";
//        System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
            ResultSet rs = ps.executeQuery();
            Ubicacion Ubicacion = null;

            while (rs.next()) {
                Ubicacion = getUbicacion(rs);

            }

            if (getConexion() != null) {
                getConexion().close();
            }
            if (ps != null) {
                ps.close();
            }

            return Ubicacion;
        } catch (SQLException ex) {
            throw new OnExceptionBD(new OnExceptionBD().getMessage(ex));
        }
    }

    private Ubicacion getUbicacion(ResultSet rs) throws SQLException {
        Ubicacion Ubicacion = new Ubicacion(
                rs.getInt(1),
                rs.getString(2),
                rs.getString(3)
        );
        return Ubicacion;
    }

    public boolean eliminarUbicacion(int ubicacion_id) throws OnExceptionBD {

        try {
            String sql = "DELETE FROM " + DatosUbicacion.nombreTabla + " WHERE " + DatosUbicacion.whereID + " ='" + ubicacion_id + "';";
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

}
