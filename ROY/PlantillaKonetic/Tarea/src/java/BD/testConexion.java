package BD;

import java.sql.*;

public class testConexion {

    public static void main(String[] args) {
        Conexion conexion = new Conexion();
        Connection connection = conexion.getContection();
        Statement statement = conexion.getSentencia();

        if (connection != null) {
            try {
                // Realizar una consulta simple para verificar la conexión
                ResultSet resultSet = statement.executeQuery("SELECT * FROM herramienta");
                if (resultSet.next()) {
                    String respuesta1 = resultSet.getString("nombre");
                    System.out.println(respuesta1);
                    System.out.println("Conexión exitosa a la base de datos");
                    while (resultSet.next()) {
                        String respuesta = resultSet.getString("nombre");
                        System.out.println(respuesta);
                    }
                } else {
                    System.out.println("Error en la consulta");
                }
            } catch (SQLException ex) {
                System.out.println("Error en la consulta: " + ex.getMessage());
            }
        } else {
            System.out.println("Error en la conexión a la base de datos");
        }

        // Cerrar la conexión y los recursos
        try {
            if (statement != null) {
                statement.close();
            }
            if (connection != null) {
                connection.close();
            }
        } catch (SQLException ex) {
            System.out.println("Error al cerrar los recursos: " + ex.getMessage());
        }
    }
}
