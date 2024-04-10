/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.BalanceMasa.Tipo;

import Clases.BalanceMasa.Tipo.Tipo;
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
public class ModeloTipos extends Conexion {

    public ModeloTipos() throws OnExceptionBD {
        super();
    }

    public boolean crearTipo(Tipo Tipo) throws OnExceptionBD {

        try {
            String sql = "insert into " + DatosTipo.nombreTabla + " (" + DatosTipo.campos + ") "
                    + "values (" + DatosTipo.questionMysql + ");";
//        System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
//
            ps.setObject(1, Tipo.getTipo_id());
            ps.setObject(2, Tipo.getNombre());
            ps.setObject(3, Tipo.getdescripcion());

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

    public ArrayList<Tipo> buscarTipo(String nombre) throws OnExceptionBD {

        try {
            ArrayList<Tipo> lista = new ArrayList<Tipo>();

            String sql = "SELECT * FROM " + DatosTipo.nombreTabla + " "
                    + "where " + DatosTipo.whereNombre + " like '%" + nombre + "%' "
                    + ";";
//        System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                Tipo Tipo = getTipo(rs);
                lista.add(Tipo);
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

    public Tipo getTipo(int tipo_id) throws OnExceptionBD {

        try {
            String sql = "SELECT * FROM " + DatosTipo.nombreTabla + " WHERE " + DatosTipo.whereID + " = '" + tipo_id + "';";
//        System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
            ResultSet rs = ps.executeQuery();
            Tipo Tipo = null;

            while (rs.next()) {
                Tipo = getTipo(rs);

            }

            if (getConexion() != null) {
                getConexion().close();
            }
            if (ps != null) {
                ps.close();
            }

            return Tipo;
        } catch (SQLException ex) {
            throw new OnExceptionBD(new OnExceptionBD().getMessage(ex));
        }
    }

    private Tipo getTipo(ResultSet rs) throws SQLException {
        Tipo Tipo = new Tipo(
                rs.getInt(1),
                rs.getString(2),
                rs.getString(3)
        );
        return Tipo;
    }

    public boolean eliminarTipo(int tipo_id) throws OnExceptionBD {

        try {
            String sql = "DELETE FROM " + DatosTipo.nombreTabla + " WHERE " + DatosTipo.whereID + " ='" + tipo_id + "';";
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

    public boolean modificarTipo(Tipo Tipo) throws OnExceptionBD {

        try {
            String sql = "UPDATE " + DatosTipo.nombreTabla
                    + DatosTipo.update
                    + " WHERE " + DatosTipo.whereID + " = ?";
//        System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
//
            int i = 1;

            ps.setObject(i++, Tipo.getNombre());
            ps.setObject(i++, Tipo.getdescripcion());

//where
            ps.setObject(i++, Tipo.getTipo_id());

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

}
