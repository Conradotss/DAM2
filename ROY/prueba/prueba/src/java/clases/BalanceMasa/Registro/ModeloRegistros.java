 /*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.BalanceMasa.Registro;

import Clases.BalanceMasa.Registro.Registro;
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
public class ModeloRegistros extends Conexion {

    public ModeloRegistros() throws OnExceptionBD {
        super();
    }

    public boolean crearRegistro(Registro Registro) throws OnExceptionBD {

        try {
            String sql = "insert into " + DatosRegistro.nombreTabla + " (" + DatosRegistro.campos + ") "
                    + "values (" + DatosRegistro.questionMysql + ");";
//        System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
//
            int i = 1;
            ps.setObject(i++, Registro.getRegistroID());
            ps.setObject(i++, Registro.getOrdenTrabajoID());
            ps.setObject(i++, Registro.getDatoProduccion());
            ps.setObject(i++, Registro.getTipoID());
            ps.setObject(i++, Registro.getOrigenID());
            ps.setObject(i++, Registro.getDestinoID());

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

    public ArrayList<Registro> buscarRegistro(String nombre, String tipoid, String ubiorigen, String ubidestino) throws OnExceptionBD {

        try {
            ArrayList<Registro> lista = new ArrayList<Registro>();

            String sql = "SELECT regis.*, tips.nombre AS nombre_TIPO, ubi.nombre AS nombre_UBICACION, ubi2.nombre AS nombre_UBICACION2\n"
                    + "FROM " + DatosRegistro.nombreTabla + " regis\n"
                    + "JOIN " + DatosRegistro.join1 + "\n"
                    + "JOIN " + DatosRegistro.join2 + "\n"
                    + "JOIN " + DatosRegistro.join3 + "\n"
                    + "WHERE " + DatosRegistro.whereNombre + " like '%" + nombre + "%' ";

            if (!tipoid.isEmpty()) {
                sql += "and tips.nombre LIKE '%" + tipoid + "%' ";
            }

            if (!ubiorigen.isEmpty()) {
                sql += "and ubi.nombre LIKE '%" + ubiorigen + "%' ";
            }

            if (!ubidestino.isEmpty()) {
                sql += "and ubi2.nombre LIKE '%" + ubidestino + "%' ";
            }
//        System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                Registro Registro = getRegistro(rs);
                lista.add(Registro);
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

    public Registro getRegistro(int registro_id) throws OnExceptionBD {

        try {
            String sql = "SELECT * FROM " + DatosRegistro.nombreTabla + " WHERE " + DatosRegistro.whereID + " = '" + registro_id + "';";
//        System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
            ResultSet rs = ps.executeQuery();
            Registro Registro = null;

            while (rs.next()) {
                Registro = getRegistro2(rs);

            }

            if (getConexion() != null) {
                getConexion().close();
            }
            if (ps != null) {
                ps.close();
            }

            return Registro;
        } catch (SQLException ex) {
            throw new OnExceptionBD(new OnExceptionBD().getMessage(ex));
        }
    }

    //para poder ver, modificar y crear
    private Registro getRegistro(ResultSet rs) throws SQLException {
        int i = 1;
        Registro Registro = new Registro(
                rs.getInt(i++),
                rs.getInt(i++),
                rs.getDouble(i++),
                rs.getInt(i++),
                rs.getInt(i++),
                rs.getInt(i++),
                rs.getString(i++),
                rs.getString(i++),
                rs.getString(i++)
        );
        return Registro;
    }

    //para poder eliminar
    private Registro getRegistro2(ResultSet rs) throws SQLException {
        int i = 1;
        Registro Registro = new Registro(
                rs.getInt(i++),
                rs.getInt(i++),
                rs.getDouble(i++),
                rs.getInt(i++),
                rs.getInt(i++),
                rs.getInt(i++)
        );
        return Registro;
    }

    public boolean eliminarRegistro(int registro_id) throws OnExceptionBD {

        try {
            String sql = "DELETE FROM " + DatosRegistro.nombreTabla + " WHERE " + DatosRegistro.whereID + " ='" + registro_id + "';";
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

    public boolean modificarRegistro(Registro Registro) throws OnExceptionBD {

        try {
            String sql = "UPDATE " + DatosRegistro.nombreTabla
                    + DatosRegistro.update
                    + " WHERE " + DatosRegistro.whereID + " = ?";
//        System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
//

            int i = 1;
            ps.setObject(i++, Registro.getOrdenTrabajoID());
            ps.setObject(i++, Registro.getDatoProduccion());
            ps.setObject(i++, Registro.getTipoID());
            ps.setObject(i++, Registro.getOrigenID());
            ps.setObject(i++, Registro.getDestinoID());

//where
            ps.setObject(i++, Registro.getRegistroID());

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

    public static ResultSet obtenerTips() throws OnExceptionBD {
        ResultSet rs = null;
        try {
            // Conectar a la base de datos
            Connection con = new Conexion().getConexion();

            // Preparar la consulta
            String sql = "SELECT bm_tiporegistroproduccion_id, nombre from bm_tiporegistroproduccion";
            PreparedStatement pst = con.prepareStatement(sql);

            // Ejecutar la consulta y obtener el resultado
            rs = pst.executeQuery();
        } catch (SQLException ex) {
            throw new OnExceptionBD(new OnExceptionBD().getMessage(ex));
        }
        return rs;
    }

    public static ResultSet obtenerUbi() throws OnExceptionBD {
        ResultSet rs = null;
        try {
            // Conectar a la base de datos
            Connection con = new Conexion().getConexion();

            // Preparar la consulta
            String sql = "SELECT bm_ubicacion_id, nombre from bm_ubicacion ";

            PreparedStatement pst = con.prepareStatement(sql);

            // Ejecutar la consulta y obtener el resultado
            rs = pst.executeQuery();
        } catch (SQLException ex) {
            throw new OnExceptionBD(new OnExceptionBD().getMessage(ex));
        }
        return rs;
    }

}
