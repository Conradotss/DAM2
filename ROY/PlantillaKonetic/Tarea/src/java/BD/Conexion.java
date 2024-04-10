package BD;

import java.sql.*;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Conexion {

    private static final String JDBC_URL = "jdbc:mysql://localhost:3306/tarea";
    private static final String JDBC_USER = "root";
    private static final String JDBC_PASSWORD = "";

    private Connection conexion;
    private Statement sentencia;

    public Conexion() {
        try {
            conexion = DriverManager.getConnection(JDBC_URL, JDBC_USER, JDBC_PASSWORD);
            sentencia = conexion.createStatement(
                    ResultSet.TYPE_SCROLL_INSENSITIVE,
                    ResultSet.CONCUR_UPDATABLE
            );
        } catch (SQLException ex) {
            Logger.getLogger(Conexion.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    public Connection getContection(){
        return conexion;
    }
    
    public Statement getSentencia(){
        return sentencia;
    }
    
    
}
