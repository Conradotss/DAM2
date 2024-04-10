/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Basedatos;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/**
 *
 * @author Angel
 */
public class Conexion {

    private String username;
    private String password;
    private String ip = "localhost";
    private int puerto = 3306;
    private String database = "prueba";

    private String classname = "com.mysql.jdbc.Driver";
    private String url = "jdbc:mysql://" + ip + ":" + puerto + "/" + database + "?autoReconnect=true&holdResultsOpenOverStatementClose=true&useSSL=false";

    //private String classnameSQLServer = "com.microsoft.sqlserver.jdbc.SQLServerDriver";
    //private String nombreServidor = "";
    //private String urlSQLServer = "jdbc:sqlserver://" + nombreServidor + ":" + puerto + ";DatabaseName = " + database + ";user = " + username + ";password=" + password;

    private Connection conexion;
    private Statement sentencia;

    public Conexion() throws OnExceptionBD {
       // synchronized (this) {
            try {
                username = "root";
                password = "123456";
                //database = ConexionString.getDatabase();
                //url = "jdbc:mysql://" + ip + ":" + puerto + "/" + database + "?autoReconnect=true&holdResultsOpenOverStatementClose=true&useSSL=false";
                url = "jdbc:mysql://" + ip + ":" + puerto + "/" + database + "?autoReconnect=true&useSSL=false&verifyServerCertificate?=false&allowPublicKeyRetrieval=true";
            } catch (Exception e) {
            }

            try {
                Class.forName(classname);
            } catch (ClassNotFoundException ex) {
                throw new OnExceptionBD(new OnExceptionBD().getMessage(ex));
            }
            try {
                conexion = DriverManager.getConnection(url, username, password);
            } catch (Exception ex) {
                String msg = "Error de conexión a la base de datos.\n" + ex.getCause().getMessage();
                if (msg.contains("Unknown database")) {
                    msg = msg.replaceAll("Unknown database", "Base de datos desconocida");
                } else if (msg.contains("Access denied for user")) {
                    msg = msg.replaceAll("Access denied for user", "Acceso denegado al usuario");
                    msg += "\nUsuario o contraseña incorrecta de la base de datos.";
                } else if (msg.contains("Communications link failure")) {
                    msg = "No se pudo crear una conexión con el servidor de base de datos.";
                    msg += "\nEs posible que la dirección ip o puerto sea erróneo.";
                }

                throw new OnExceptionBD(msg);
            }
            try {
                sentencia = conexion.createStatement(
                        ResultSet.TYPE_SCROLL_INSENSITIVE,
                        ResultSet.CONCUR_UPDATABLE);
            } catch (SQLException ex) {
                throw new OnExceptionBD(new OnExceptionBD().getMessage(ex));
            }
            try {
                conexion.setAutoCommit(true);
            } catch (SQLException ex) {
                throw new OnExceptionBD(new OnExceptionBD().getMessage(ex));
            }
        //}
    }

    public Connection getConexion() {
        return conexion;
    }

//    public void ps(String sql) throws SQLException {
//        conexion.prepareStatement(sql);
//    }
    public Statement getSentencia() {
        return sentencia;
    }

    public String getDatabase() {
        return database;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "Conexion{" + "username=" + username + ", password=" + password + ", ip=" + ip + ", puerto=" + puerto + ", database=" + database + ", classname=" + classname + ", url=" + url + ", conexion=" + conexion + ", sentencia=" + sentencia + '}';
    }

}
