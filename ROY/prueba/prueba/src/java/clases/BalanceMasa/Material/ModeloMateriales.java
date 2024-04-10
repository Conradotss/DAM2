/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.BalanceMasa.Material;

import Clases.BalanceMasa.Material.Material;
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
public class ModeloMateriales extends Conexion {

    public ModeloMateriales() throws OnExceptionBD {
        super();
    }

    public boolean crearMaterial(Material Material) throws OnExceptionBD {

        try {
            String sql = "insert into " + DatosMaterial.nombreTabla + " (" + DatosMaterial.campos + ") "
                    + "values (" + DatosMaterial.questionMysql + ");";
//        System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
//
            int i = 1;
            ps.setObject(i++, Material.getMaterial_id());
            ps.setObject(i++, Material.getReferencia());
            ps.setObject(i++, Material.getNombre());
            ps.setObject(i++, Material.getDescripcion());

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

    public boolean crearMaterialPack(Material Material) throws OnExceptionBD {

        try {
            String sql = "insert into " + DatosMaterial.nombreTabla2 + " (" + DatosMaterial.campos2 + ") "
                    + "values (" + DatosMaterial.questionMysql2 + ");";
//        System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
//
            int i = 1;
            ps.setObject(i++, Material.getPack_id());
            ps.setObject(i++, Material.getCheckbox());
            ps.setObject(i++, Material.getMaterial_id());

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

    public ArrayList<Material> getCheckboxStatusForUser(int userId) throws OnExceptionBD {
        ArrayList<Material> checkboxStatus = new ArrayList<>();

        try {
            String sql = "SELECT bm_consumo_material_id FROM bm_material_pack WHERE bm_material_id = ?";
            PreparedStatement ps = getConexion().prepareStatement(sql);
            ps.setInt(1, userId);

            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                Material Material = getMaterial5(rs);
                checkboxStatus.add(Material);
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

    public ArrayList<Material> buscarMaterial2() throws OnExceptionBD {

        try {
            ArrayList<Material> lista = new ArrayList<Material>();

//            String sql = "SELECT * FROM " + DatosMaterial.nombreTabla + " WHERE " + DatosMaterial.whereID + " like '%" + cantidad  + "%' ";
            String sql = "SELECT * FROM bm_consumo_material";

//        System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                Material Material = getMaterial2(rs);
                lista.add(Material);
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

    public ArrayList<Material> buscarMaterial(String referencia, String nombre) throws OnExceptionBD {

        try {
            ArrayList<Material> lista = new ArrayList<Material>();

            String sql = "SELECT * FROM " + DatosMaterial.nombreTabla + " "
                    + " WHERE " + DatosMaterial.whereNombre + " LIKE '%" + referencia + "%' ";

            if (!nombre.isEmpty()) {
                sql += " AND nombre LIKE '%" + nombre + "%' ";
            }

//        System.out.println(sq l);
            PreparedStatement ps = getConexion().prepareStatement(sql);
            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                Material Material = getMaterial(rs);
                lista.add(Material);
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

    public Material getMaterial(int material_id) throws OnExceptionBD {

        try {
            String sql = "SELECT * FROM " + DatosMaterial.nombreTabla + " WHERE " + DatosMaterial.whereID + " = '" + material_id + "';";
//        System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
            ResultSet rs = ps.executeQuery();
            Material Material = null;

            while (rs.next()) {
                Material = getMaterial(rs);

            }

            if (getConexion() != null) {
                getConexion().close();
            }
            if (ps != null) {
                ps.close();
            }

            return Material;
        } catch (SQLException ex) {
            throw new OnExceptionBD(new OnExceptionBD().getMessage(ex));
        }
    }

    private Material getMaterial(ResultSet rs) throws SQLException {
        Material Material = new Material(
                rs.getInt(1),
                rs.getString(2),
                rs.getString(3),
                rs.getString(4)
        );
        return Material;
    }

    private Material getMaterial2(ResultSet rs) throws SQLException {
        int i = 1;
        Material Consumo = new Material(
                rs.getInt(i++),
                rs.getString(i++),
                rs.getString(i++),
                rs.getString(i++),
                rs.getString(i++)
        );
        return Consumo;
    }

    private Material getMaterial3(ResultSet rs) throws SQLException {
        int i = 1;
        Material Material = new Material(
                rs.getInt(i++),
                rs.getString(i++)
        );
        return Material;
    }

    private Material getMaterial4(ResultSet rs) throws SQLException {
        int i = 1;
        Material Material = new Material(
                rs.getInt(i++),
                rs.getString(i++),
                rs.getString(i++),
                rs.getString(i++)
        );
        return Material;
    }

    private Material getMaterial5(ResultSet rs) throws SQLException {
        int i = 1;
        Material Material = new Material(
                rs.getInt(i++)
        );
        return Material;
    }

    public boolean eliminarMaterialPack(int material_id) throws OnExceptionBD {

        try {
            String sql = "DELETE FROM " + DatosMaterial.nombreTabla2 + " WHERE " + DatosMaterial.whereID + " ='" + material_id + "';";
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

    public boolean eliminarMaterial(int material_id) throws OnExceptionBD {

        try {
            String sql = "DELETE FROM " + DatosMaterial.nombreTabla + " WHERE " + DatosMaterial.whereID + " ='" + material_id + "';";
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

    public boolean modificarMaterial(Material Material) throws OnExceptionBD {

        try {
            String sql = "UPDATE " + DatosMaterial.nombreTabla
                    + DatosMaterial.update
                    + " WHERE " + DatosMaterial.whereID + " = ?";
//        System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
//
            int i = 1;

            ps.setObject(i++, Material.getNombre());
            ps.setObject(i++, Material.getReferencia());
            ps.setObject(i++, Material.getDescripcion());

//where
            ps.setObject(i++, Material.getMaterial_id());

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

    public List<Material> getTablaXRegistros(int materialID) throws OnExceptionBD {
        List<Material> result = new ArrayList<>();
        try {

            String sql = "SELECT consu.bm_consumo_material_id, mat.lot_codext AS nombre_MATERIAL2 "
                    + "FROM bm_material_pack consu\n"
                    + "JOIN bm_consumo_material mat ON consu.bm_consumo_material_id = mat.bm_consumo_material_id \n"
                    + " WHERE consu.bm_material_id = ?";
            PreparedStatement ps = getConexion().prepareStatement(sql);
            ps.setInt(1, materialID);

            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                Material Material = getMaterial3(rs);
                result.add(Material);
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
