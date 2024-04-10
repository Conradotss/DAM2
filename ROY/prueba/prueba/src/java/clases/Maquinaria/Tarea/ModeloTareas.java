/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.Maquinaria.Tarea;

import Clases.Maquinaria.Tarea.Tarea;
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
public class ModeloTareas extends Conexion {

    public ModeloTareas() throws OnExceptionBD {
        super();
    }

    public List<Tarea> verTareas() throws OnExceptionBD {
        List<Tarea> tareas = new ArrayList<>();
        try {
            String sql = "SELECT * FROM " + DatosTarea.nombreTabla;
            PreparedStatement ps = getConexion().prepareStatement(sql);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                Tarea tarea = new Tarea(
                        rs.getInt("tarea_id"),
                        rs.getString("nombre"),
                        rs.getInt("tipo"),
                        rs.getString("descripcion")
                );
                tareas.add(tarea);
            }
            if (getConexion() != null) {
                getConexion().close();
            }
            if (ps != null) {
                ps.close();
            }
        } catch (SQLException ex) {
            throw new OnExceptionBD(new OnExceptionBD().getMessage(ex));
        }
        return tareas;
    }

    public boolean crearTarea(Tarea Tarea) throws OnExceptionBD {

        try {
            String sql = "insert into " + DatosTarea.nombreTabla + " (" + DatosTarea.campos + ") "
                    + "values (" + DatosTarea.questionMysql + ");";
//        System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
//
            ps.setObject(1, Tarea.getTarea_id());
            ps.setObject(2, Tarea.getNombre());
            ps.setObject(3, Tarea.getTipo());
            ps.setObject(4, Tarea.getdescripcion());

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

    public boolean eliminarTarea(int tarea_id) throws OnExceptionBD {

        try {
            String sql = "DELETE FROM " + DatosTarea.nombreTabla + " WHERE tarea_id = '" + tarea_id + "'";
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

    public boolean modificarTarea(Tarea Tarea) throws OnExceptionBD {

        try {
            String sql = "UPDATE " + DatosTarea.nombreTabla
                    + DatosTarea.update
                    + "WHERE tarea_id = ?";
//        System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
//
            int i = 1;
            ps.setObject(i++, Tarea.getNombre());
            ps.setObject(i++, Tarea.getTipo());
            ps.setObject(i++, Tarea.getdescripcion());

//where
            ps.setObject(i++, Tarea.getTarea_id());
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

    public ArrayList<Tarea> buscarTareas(String nombre, int tipo) throws OnExceptionBD {

        try {
            ArrayList<Tarea> lista = new ArrayList<Tarea>();
            String tipo_ = "";
            if (tipo > -1) {
                tipo_ = "and tipo = '" + tipo + "'";
            }
            String sql = "SELECT * FROM " + DatosTarea.nombreTabla + " "
                    + "where nombre like '%" + nombre + "%' "
                    + tipo_
                    + ";";
//        System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                Tarea Tarea = getTarea(rs);
                lista.add(Tarea);
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

    public Tarea getTarea(int tarea_id) throws OnExceptionBD {

        try {
            String sql = "SELECT * FROM " + DatosTarea.nombreTabla + " where tarea_id = '" + tarea_id + "';";
//        System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
            ResultSet rs = ps.executeQuery();
            Tarea Tarea = null;

            while (rs.next()) {
                Tarea = getTarea(rs);

            }

            if (getConexion() != null) {
                getConexion().close();
            }
            if (ps != null) {
                ps.close();
            }

            return Tarea;
        } catch (SQLException ex) {
            throw new OnExceptionBD(new OnExceptionBD().getMessage(ex));
        }
    }

    public ArrayList<Tarea> getListaTareas() throws OnExceptionBD {
        try {
            ArrayList<Tarea> listaTareas = new ArrayList<Tarea>();

            String sql = "SELECT * FROM " + DatosTarea.nombreTabla + " "
                    + "where nombre != 'Ninguna' "
                    + ";";
            System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                Tarea Tarea = getTarea(rs);
                listaTareas.add(Tarea);
            }

            if (getConexion() != null) {
                getConexion().close();
            }
            if (ps != null) {
                ps.close();
            }

            return listaTareas;
        } catch (SQLException ex) {
            throw new OnExceptionBD(new OnExceptionBD().getMessage(ex));
        }
    }

    public ArrayList<Tarea> getListaTareas(int maquina_id) throws OnExceptionBD {
        try {
            ArrayList<Tarea> listaTareas = new ArrayList<Tarea>();

            String sql = "select distinct tarea.* , maquinaTarea.valor\n"
                    + "from " + DatosTarea.nombreTabla + "\n"
                    + "inner join tareaes on tareaes.tarea_id = tarea.tarea_id\n"
                    + "inner join maquinaTarea on maquinaTarea.tarea_id = tareaes.tarea_id\n"
                    + "where maquinaTarea.maquina_id = '" + maquina_id + "'";
//            System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                String valor = rs.getString("maquinaTarea.valor");
                Tarea Tarea = getTarea(rs, valor);
                listaTareas.add(Tarea);
            }

            if (getConexion() != null) {
                getConexion().close();
            }
            if (ps != null) {
                ps.close();
            }

            return listaTareas;
        } catch (SQLException ex) {
            throw new OnExceptionBD(new OnExceptionBD().getMessage(ex));
        }
    }

    private Tarea getTarea(ResultSet rs) throws SQLException {
        int a = 1;
        Tarea Tarea = new Tarea(
                rs.getInt(a++),
                rs.getString(a++),
                rs.getInt(a++),
                rs.getString(a++)
        );
        return Tarea;
    }

    private Tarea getTarea(ResultSet rs, String valor) throws SQLException {
        int a = 1;
        Tarea Tarea = new Tarea(
                rs.getInt(a++),
                rs.getString(a++),
                rs.getInt(a++),
                rs.getString(a++),
                valor
        );
        return Tarea;
    }

    // List<Tarea> verTareas() {
    //   throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    // }
}
