/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.BalanceMasa.Ubicacion;

import static Utilidades.Conversor_formato.ArrayConvertirStringBDColumnasToCampos;
import static Utilidades.Conversor_formato.ArrayConvertirStringQuestionMysql;
import static Utilidades.Conversor_formato.ArrayConvertirStringUpdateMysql;

/**
 *
 * @author Angel
 */
public class DatosUbicacion {

    public static String nombreTabla = "bm_ubicacion";
    public static String[] nombreColBD = {"bm_ubicacion_id", "nombre", "descripcion"};
    public static String whereID = "bm_ubicacion_id";
    public static String whereNombre = "nombre";

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public static String[] nombreTitulosCabeceraTabla = {"Id", "Nombre", "Descripción"};

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    public static String campos = ArrayConvertirStringBDColumnasToCampos(nombreColBD);
    public static String questionMysql = ArrayConvertirStringQuestionMysql(nombreColBD);
    public static String update = ArrayConvertirStringUpdateMysql(nombreColBD);
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public static String[] nombreTitulosCabeceraTablaModificarMaquina = {"Id", "Nombre"};

}



