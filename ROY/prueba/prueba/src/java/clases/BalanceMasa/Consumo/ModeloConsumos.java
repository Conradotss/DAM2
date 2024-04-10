/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.BalanceMasa.Consumo;

import Clases.BalanceMasa.Consumo.Consumo;
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
public class ModeloConsumos extends Conexion {

    public ModeloConsumos() throws OnExceptionBD {
        super();
    }

    public boolean crearConsumo(Consumo Consumo) throws OnExceptionBD {

        try {
            String sql = "insert into " + DatosConsumo.nombreTabla + " (" + DatosConsumo.campos + ") "
                    + "values (" + DatosConsumo.questionMysql + ");";
//        System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
//
            int i = 1;
            ps.setObject(i++, Consumo.getConsumoID());
            ps.setObject(i++, Consumo.getCantidad());
            ps.setObject(i++, Consumo.getLot());
            ps.setObject(i++, Consumo.getBm_material());
            ps.setObject(i++, Consumo.getOrdenTrabajo());

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

    public boolean crearMaterialPack(Consumo Consumo) throws OnExceptionBD {

        try {
            String sql = "insert into " + DatosConsumo.nombreTabla2 + " (" + DatosConsumo.campos2 + ") "
                    + "values (" + DatosConsumo.questionMysql2 + ");";
//        System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
//
            int i = 1;
            ps.setObject(i++, Consumo.getPack_id());
            ps.setObject(i++, Consumo.getConsumoID());
            ps.setObject(i++, Consumo.getCheckbox());

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

    public ArrayList<Consumo> getCheckboxStatusForUser(int userId) throws OnExceptionBD {
        ArrayList<Consumo> checkboxStatus = new ArrayList<>();

        try {
            String sql = "SELECT bm_material_id FROM bm_material_pack WHERE bm_consumo_material_id = ?";
            PreparedStatement ps = getConexion().prepareStatement(sql);
            ps.setInt(1, userId);

            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                Consumo Consumo = getConsumo5(rs);
                checkboxStatus.add(Consumo);
            }

            if (getConexion() != null) {
                getConexion().close();
            }

            if (ps != null) {
                ps.close();
            }

            if (rs != null) {
                rs.close();
            }
        } catch (SQLException ex) {
            throw new OnExceptionBD(new OnExceptionBD().getMessage(ex));
        }

        return checkboxStatus;
    }

    public ArrayList<Consumo> buscarConsumo(String cantidad, String lot, String material, String orden) throws OnExceptionBD {

        try {
            ArrayList<Consumo> lista = new ArrayList<Consumo>();

//            String sql = "SELECT * FROM " + DatosConsumo.nombreTabla + " WHERE " + DatosConsumo.whereID + " like '%" + cantidad  + "%' ";
            String sql = "SELECT consu.*, mat.nombre AS nombre_MATERIAL\n"
                    + "FROM " + DatosConsumo.nombreTabla + " consu\n"
                    + "JOIN " + DatosConsumo.join + "\n"
                    + "WHERE " + DatosConsumo.whereNombre + " like '%" + cantidad + "%' ";

            if (!lot.isEmpty()) {
                sql += " AND consu.lot_codext LIKE '%" + lot + "%' ";
            }
            if (!material.isEmpty()) {
                sql += " AND mat.nombre LIKE '%" + material + "%' ";
            }
            if (!orden.isEmpty()) {
                sql += " AND consu.ordenTrabajo_id LIKE '%" + orden + "%' ";
            }

//        System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                Consumo Consumo = getConsumo(rs);
                lista.add(Consumo);
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

    public ArrayList<Consumo> buscarConsumo2() throws OnExceptionBD {

        try {
            ArrayList<Consumo> lista = new ArrayList<Consumo>();

//            String sql = "SELECT * FROM " + DatosConsumo.nombreTabla + " WHERE " + DatosConsumo.whereID + " like '%" + cantidad  + "%' ";
            String sql = "SELECT * FROM bm_material";

//        System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                Consumo Consumo = getConsumo4(rs);
                lista.add(Consumo);
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

    public Consumo getConsumo(int consumo_id) throws OnExceptionBD {

        try {
            String sql = "SELECT * FROM " + DatosConsumo.nombreTabla + " WHERE " + DatosConsumo.whereID + " = '" + consumo_id + "';";
//        System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
            ResultSet rs = ps.executeQuery();
            Consumo Consumo = null;

            while (rs.next()) {
                Consumo = getConsumo2(rs);

            }

            if (getConexion() != null) {
                getConexion().close();
            }
            if (ps != null) {
                ps.close();
            }

            return Consumo;
        } catch (SQLException ex) {
            throw new OnExceptionBD(new OnExceptionBD().getMessage(ex));
        }
    }

    //para poder ver, modificar y crear
    private Consumo getConsumo(ResultSet rs) throws SQLException {
        int i = 1;
        Consumo Consumo = new Consumo(
                rs.getInt(i++),
                rs.getDouble(i++),
                rs.getString(i++),
                rs.getInt(i++),
                rs.getInt(i++),
                rs.getString(i++)
        );
        return Consumo;
    }

    //para poder eliminar
    private Consumo getConsumo2(ResultSet rs) throws SQLException {
        int i = 1;
        Consumo Consumo = new Consumo(
                rs.getInt(i++),
                rs.getDouble(i++),
                rs.getString(i++),
                rs.getInt(i++),
                rs.getInt(i++)
        );
        return Consumo;
    }

    private Consumo getConsumo3(ResultSet rs) throws SQLException {
        int i = 1;
        Consumo Consumo = new Consumo(
                rs.getInt(i++),
                rs.getString(i++)
        );
        return Consumo;
    }

    private Consumo getConsumo4(ResultSet rs) throws SQLException {
        int i = 1;
        Consumo Consumo = new Consumo(
                rs.getInt(i++),
                rs.getString(i++),
                rs.getString(i++),
                rs.getString(i++)
        );
        return Consumo;
    }

    private Consumo getConsumo5(ResultSet rs) throws SQLException {
        int i = 1;
        Consumo Consumo = new Consumo(
                rs.getInt(i++)
        );
        return Consumo;
    }

    public boolean eliminarConsumo(int consumo_id) throws OnExceptionBD {

        try {
            String sql = "DELETE FROM " + DatosConsumo.nombreTabla + " WHERE " + DatosConsumo.whereID + " ='" + consumo_id + "';";
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

    public boolean eliminarMaterialPack(int consumo_id) throws OnExceptionBD {

        try {
            String sql = "DELETE FROM " + DatosConsumo.nombreTabla2 + " WHERE " + DatosConsumo.whereID + " ='" + consumo_id + "';";
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

    public boolean modificarConsumo(Consumo Consumo) throws OnExceptionBD {

        try {
            String sql = "UPDATE " + DatosConsumo.nombreTabla
                    + DatosConsumo.update
                    + " WHERE " + DatosConsumo.whereID + " = ?";
//        System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
//

            int i = 1;
            ps.setObject(i++, Consumo.getCantidad());
            ps.setObject(i++, Consumo.getLot());
            ps.setObject(i++, Consumo.getBm_material());
            ps.setObject(i++, Consumo.getOrdenTrabajo());

//where
            ps.setObject(i++, Consumo.getConsumoID());

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

    public List<Consumo> getTablaXRegistros(int consumoID) throws OnExceptionBD {
        List<Consumo> result = new ArrayList<>();
        try {

            String sql = "SELECT consu.bm_material_id, mat.nombre AS nombre_MATERIAL2 "
                    + "FROM bm_material_pack consu\n"
                    + "JOIN bm_material mat ON consu.bm_material_id = mat.bm_material_id \n"
                    + " WHERE consu.bm_consumo_material_id = ?";
            PreparedStatement ps = getConexion().prepareStatement(sql);
            ps.setInt(1, consumoID);

            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                Consumo consumo = getConsumo3(rs);
                result.add(consumo);
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

        return result;
    }

}
