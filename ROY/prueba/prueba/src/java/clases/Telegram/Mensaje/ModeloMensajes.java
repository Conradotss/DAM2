/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.Telegram.Mensaje;

import Clases.Telegram.Mensaje.Mensaje2;
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
public class ModeloMensajes extends Conexion {

    public ModeloMensajes() throws OnExceptionBD {
        super();
    }

     public static ResultSet obtenerUsuario() throws OnExceptionBD {
        ResultSet rs = null;
        try {
            // Conectar a la base de datos
            Connection con = new Conexion().getConexion();

            // Preparar la consulta
            String sql = "SELECT * from users_telegram";

            PreparedStatement pst = con.prepareStatement(sql);

            // Ejecutar la consulta y obtener el resultado
            rs = pst.executeQuery();
        } catch (SQLException ex) {
            throw new OnExceptionBD(new OnExceptionBD().getMessage(ex));
        }
        return rs;
    }
     
     
      public static ResultSet obtenerBot() throws OnExceptionBD {
        ResultSet rs = null;
        try {
            // Conectar a la base de datos
            Connection con = new Conexion().getConexion();

            // Preparar la consulta
            String sql = "SELECT * from bot_telegram";

            PreparedStatement pst = con.prepareStatement(sql);

            // Ejecutar la consulta y obtener el resultado
            rs = pst.executeQuery();
        } catch (SQLException ex) {
            throw new OnExceptionBD(new OnExceptionBD().getMessage(ex));
        }
        return rs;
    }


}
