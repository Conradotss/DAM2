/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.Maquinaria.Tarea;

import static Utilidades.Conversor_formato.ArrayConvertirStringBDColumnasToCampos;
import static Utilidades.Conversor_formato.ArrayConvertirStringQuestionMysql;
import static Utilidades.Conversor_formato.ArrayConvertirStringUpdateMysql;

/**
 *
 * @author Angel
 */
public class DatosTarea {

    public static String nombreTabla = "tarea";

    //Titulos ventanas web
    public static String tituloAdmin = "Administración de tareas";
    public static String tituloCrear = "Crear tarea";
    public static String tituloModificar = "Modificar tarea";

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public static String[] nombreTitulosCabeceraTabla = {"Id", "Nombre", "Tipo", "Descripción"};
    public static String[] nombreTitulosCabeceraTablaModificarMaquina = {"Id", "Nombre"};

    public static String[] nombreColBD = {"tarea_id", "nombre", "tipo", "descripcion"};
    public static String[] tipo = {"Check", "Texto", "Decimales", "Enteros"};
    public static String campos = ArrayConvertirStringBDColumnasToCampos(nombreColBD);
    public static String questionMysql = ArrayConvertirStringQuestionMysql(nombreColBD);
    public static String update = ArrayConvertirStringUpdateMysql(nombreColBD);

}
