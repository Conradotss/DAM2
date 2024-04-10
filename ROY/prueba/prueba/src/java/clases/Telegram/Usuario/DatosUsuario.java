/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.Telegram.Usuario;

import static Utilidades.Conversor_formato.ArrayConvertirStringBDColumnasToCampos;
import static Utilidades.Conversor_formato.ArrayConvertirStringQuestionMysql;
import static Utilidades.Conversor_formato.ArrayConvertirStringUpdateMysql;

/**
 *
 * @author Angel
 */
public class DatosUsuario {

    public static String nombreTabla = "users_telegram";
    public static String[] nombreColBD = {"id_basedatos", "id_telegram", "nombre"};
    public static String whereID = "id_basedatos";
    public static String whereNombre = "id_telegram";

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public static String[] nombreTitulosCabeceraTabla = {"Id", "Telegram", "Nombre"};

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public static String campos = ArrayConvertirStringBDColumnasToCampos(nombreColBD);
    public static String questionMysql = ArrayConvertirStringQuestionMysql(nombreColBD);
    public static String update = ArrayConvertirStringUpdateMysql(nombreColBD);

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public static String[] nombreTitulosCabeceraTablaModificarMaquina = {"Id", "Nombre"};

}
