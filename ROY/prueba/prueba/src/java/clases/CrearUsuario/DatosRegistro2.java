/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.CrearUsuario;

import static Utilidades.Conversor_formato.ArrayConvertirStringBDColumnasToCampos;
import static Utilidades.Conversor_formato.ArrayConvertirStringQuestionMysql;
import static Utilidades.Conversor_formato.ArrayConvertirStringUpdateMysql;

/**
 *
 * @author Angel
 */
public class DatosRegistro2 {

    public static String nombreTabla = "register";
    public static String[] nombreColBD = {"id", "nombre", "email", "password"};
    public static String whereID = "id";
    public static String whereNombre = "nombre";

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public static String campos = ArrayConvertirStringBDColumnasToCampos(nombreColBD);
    public static String questionMysql = ArrayConvertirStringQuestionMysql(nombreColBD);
    public static String update = ArrayConvertirStringUpdateMysql(nombreColBD);

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public static String[] nombreTitulosCabeceraTablaModificarMaquina = {"Id", "Nombre"};

}
