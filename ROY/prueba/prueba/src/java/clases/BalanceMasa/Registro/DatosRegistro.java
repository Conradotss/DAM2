/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.BalanceMasa.Registro;

import static Utilidades.Conversor_formato.ArrayConvertirStringBDColumnasToCampos;
import static Utilidades.Conversor_formato.ArrayConvertirStringQuestionMysql;
import static Utilidades.Conversor_formato.ArrayConvertirStringUpdateMysql;

/**
 *
 * @author Angel
 */
public class DatosRegistro {

    public static String nombreTabla = "bm_registroproduccion";
    public static String[] nombreColBD = {"bm_registroProduccion_id", "ordenTrabajo_id", "datoProduccion", "bm_tipoRegistroProduccion_id", "bm_ubicacion_origen_id", "bm_ubicacion_destino_id"};
    public static String whereID = "bm_registroProduccion_id";
    public static String whereNombre = "ordenTrabajo_id";

    public static String join1 = "bm_tiporegistroproduccion tips ON regis.bm_tipoRegistroProduccion_id = tips.bm_tiporegistroproduccion_id";
    public static String join2 = "bm_ubicacion ubi ON regis.bm_ubicacion_origen_id = ubi.bm_ubicacion_id";
    public static String join3 = "bm_ubicacion ubi2 ON regis.bm_ubicacion_destino_id = ubi2.bm_ubicacion_id";

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public static String[] nombreTitulosCabeceraTabla = {"Id", "Orden trabajo", "Dato produccion", "Tipo", "Origen", "Destino"};

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public static String campos = ArrayConvertirStringBDColumnasToCampos(nombreColBD);
    public static String questionMysql = ArrayConvertirStringQuestionMysql(nombreColBD);
    public static String update = ArrayConvertirStringUpdateMysql(nombreColBD);

}
