/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.Telegram.Bot;

import Clases.Telegram.Bot.Bot;
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
public class ModeloBots extends Conexion {

    public ModeloBots() throws OnExceptionBD {
        super();
    }

    public boolean crearBot(Bot Bot) throws OnExceptionBD {

        try {
            String sql = "insert into " + DatosBot.nombreTabla + " (" + DatosBot.campos + ") "
                    + "values (" + DatosBot.questionMysql + ");";
//        System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
//
            int i = 1;
            ps.setObject(i++, Bot.getBasedatosID());
            ps.setObject(i++, Bot.getToken());
            ps.setObject(i++, Bot.getNombre());

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

    public ArrayList<Bot> buscarBot(String token, String nombre) throws OnExceptionBD {

        try {
            ArrayList<Bot> lista = new ArrayList<Bot>();

//            String sql = "SELECT * FROM " + DatosBot.nombreTabla + " WHERE " + DatosBot.whereID + " like '%" + cantidad  + "%' ";
            String sql = "SELECT * \n"
                    + "FROM " + DatosBot.nombreTabla + " consu\n"
                    + "WHERE " + DatosBot.whereNombre + " like '%" + token + "%' ";

            if (!nombre.isEmpty()) {
                sql += " AND nombre LIKE '%" + nombre + "%' ";
            }

//        System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                Bot Bot = getBot(rs);
                lista.add(Bot);
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

    public Bot getBot(int bot_id) throws OnExceptionBD {

        try {
            String sql = "SELECT * FROM " + DatosBot.nombreTabla + " WHERE " + DatosBot.whereID + " = '" + bot_id + "';";
//        System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
            ResultSet rs = ps.executeQuery();
            Bot Bot = null;

            while (rs.next()) {
                Bot = getBot(rs);

            }

            if (getConexion() != null) {
                getConexion().close();
            }
            if (ps != null) {
                ps.close();
            }

            return Bot;
        } catch (SQLException ex) {
            throw new OnExceptionBD(new OnExceptionBD().getMessage(ex));
        }
    }

    //para poder ver, modificar y crear
    private Bot getBot(ResultSet rs) throws SQLException {
        int i = 1;
        Bot Bot = new Bot(
                rs.getInt(i++),
                rs.getString(i++),
                rs.getString(i++)
        );
        return Bot;
    }

    public boolean eliminarBot(int bot_id) throws OnExceptionBD {

        try {
            String sql = "DELETE FROM " + DatosBot.nombreTabla + " WHERE " + DatosBot.whereID + " ='" + bot_id + "';";
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

    public boolean modificarBot(Bot Bot) throws OnExceptionBD {

        try {
            String sql = "UPDATE " + DatosBot.nombreTabla
                    + DatosBot.update
                    + " WHERE " + DatosBot.whereID + " = ?";
//        System.out.println(sql);
            PreparedStatement ps = getConexion().prepareStatement(sql);
//

            int i = 1;
            ps.setObject(i++, Bot.getToken());
            ps.setObject(i++, Bot.getNombre());

//where
            ps.setObject(i++, Bot.getBasedatosID());

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
