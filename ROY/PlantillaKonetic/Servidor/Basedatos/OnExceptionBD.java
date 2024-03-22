/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Basedatos;

import java.sql.SQLException;
import java.util.ArrayList;

/**
 *
 * @author OnAngel
 */
public class OnExceptionBD extends Exception {

    /**
     * Creates a new instance of <code>OnExceptionBD1</code> without detail
     * message.
     */
    public OnExceptionBD() {
    }

    /**
     * Constructs an instance of <code>OnExceptionBD1</code> with the specified
     * detail message.
     *
     * @param msg the detail message.
     */
    public OnExceptionBD(String msg) {
        super(msg);
    }

    public String getMessage(Exception e) {
        e.printStackTrace();
        return e.getMessage();
    }

    public String getMessage(ClassNotFoundException e) {
        String msg = "No se ha encontrado el driver de conexión " + e.getMessage();
        e.printStackTrace();
        return msg;
    }

    public String getMessage(SQLException e) throws OnExceptionBD {
//        http://dev.mysql.com/doc/refman/5.7/en/error-messages-client.html
//        http://dev.mysql.com/doc/refman/5.7/en/error-messages-server.html

        e.printStackTrace();
        
        int codigoError = e.getErrorCode();
        String msg = "SQLException: Código de error: " + codigoError + "\n";
        if (codigoError == 0) {
            msg += "No se pudo crear una conexión con el servidor de base de datos. "
                    + "Se intentó volver a conectar 3 veces. Renuncia. "
                    + "Fallos en el enlace de comunicaciones.\n"
                    + "El último paquete enviado con éxito al servidor fue hace 0 milisegundos. "
                    + "El controlador no ha recibido ningún paquete del servidor.";
            return msg;
        } else if (codigoError == 1044) {
            //usuario incorrecto
            msg += e.getMessage();
            return msg;
        } else if (codigoError == 1045) {
            //clave incorrecta
            msg += e.getMessage();
            return msg;
        } else if (codigoError == 1048) {
            //clave incorrecta
            msg += e.getMessage().replaceAll(
                    "Column",
                    "La columna ");
            msg = msg.replaceAll(
                    "cannot be null",
                    "no puede ser nula o vacía");
            return msg;
        } else if (codigoError == 1049) {
            //Base de datos incorrecta
            msg += e.getMessage();
            return msg;
        } else if (codigoError == 1052) {
            msg += e.getMessage().replaceAll(
                    "Column",
                    "Columna");
            msg = msg.replaceAll(
                    "in where clause is ambiguous",
                    "en donde la cláusula es ambigua");
            return msg;
        } else if (codigoError == 1054) {
            msg += e.getMessage().replaceAll(
                    "Unknown column",
                    "Columna desconocida");
            return msg;
        } else if (codigoError == 1136) {
            msg += e.getMessage().replaceAll(
                    "Column count doesn't match value count at row",
                    "El recuento de columnas no coincide con el recuento de valores en la fila");
            return msg;
        } else if (codigoError == 1406) {
            msg += e.getMessage().replaceAll(
                    "Data truncation: Data too long for column",
                    "Truncamiento de datos: datos demasiados largos para la columna");
            msg = msg.replaceAll(
                    "at row",
                    "en la fila");
            return msg;
        }else if (codigoError == 1146) {
            msg += e.getMessage().replaceAll(
                    "Table",
                    "La tabla");
            msg = msg.replaceAll(
                    "doesn't exist",
                    "no existe");
            return msg;
        }  else if (codigoError == 1451) {
            msg += e.getMessage().replaceAll(
                    "Cannot delete or update a parent row: a foreign key constraint fails",
                    "No se puede eliminar ni actualizar una fila principal: falla en una restricción de clave externa");
            msg += "\nEl elemento está utilizado en otro lugar.";

            //Buscamos el nombre de la tabla relacionada
            int index = msg.lastIndexOf("`.`");

            if (index > 0) {
                String nombreTabla = msg.substring(index + 3);
                nombreTabla = nombreTabla.split("`")[0];
                //
                String nombreTablaReferenciada = msg.split("REFERENCES `")[1].split("`")[0];                

                msg = "SQLException: Código de error: 1451\n\n"
                        + "Debes eliminar los datos de [" + nombreTabla + "] asociados a [" + nombreTablaReferenciada + "].\n\n";

                ControladorBD ControladorBD = new ControladorBD();
                ArrayList<String> listaTablasRelacionadas = ControladorBD.getListaTablasRelacionadas(nombreTablaReferenciada);

                //Para evitar datos duplicados
                if (listaTablasRelacionadas.size() > 1) {
                    msg += "Además existe relación con:\n";

                    for (int i = 0; i < listaTablasRelacionadas.size(); i++) {
                        String get = listaTablasRelacionadas.get(i);
                        if (get.equals(nombreTabla) == false && get.equals(nombreTablaReferenciada) == false) {
                            msg += "[" + get + "]\n";
                        }
                    }
                }
            }
            return msg;
        } else if (codigoError == 1452) {
            msg += e.getMessage().replaceAll(
                    "Cannot add or update a child row: a foreign key constraint fails",
                    "No se puede agregar o actualizar una fila secundaria: una restricción de clave externa falla");
            return msg;
        } else if (codigoError == 1062) {
            msg += e.getMessage().replaceAll(
                    "Duplicate entry",
                    "Entrada duplicada");
            return msg;
        } else if (codigoError == 1064) {
            msg += e.getMessage().replaceAll(
                    "You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near",
                    "Existe un error en su sintaxis de SQL; Compruebe el manual que corresponde a su versión del servidor MySQL para la sintaxis correcta para usar cerca");
            return msg;
        } else {
            msg += e.getMessage();
            return msg;
        }
    }

}
