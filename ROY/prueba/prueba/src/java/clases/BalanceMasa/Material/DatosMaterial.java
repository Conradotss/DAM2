/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.BalanceMasa.Material;

import static Utilidades.Conversor_formato.ArrayConvertirStringBDColumnasToCampos;
import static Utilidades.Conversor_formato.ArrayConvertirStringQuestionMysql;
import static Utilidades.Conversor_formato.ArrayConvertirStringUpdateMysql;

/**
 *
 * @author Angel
 */
public class DatosMaterial {

    public static String nombreTabla = "bm_material";
    public static String[] nombreColBD = {"bm_material_id", "referencia", "nombre", "descripcion"};

    public static String nombreTabla2 = "bm_material_pack";
    public static String[] nombreColBD2 = {"id", "bm_consumo_material_id", "bm_material_id"};

    public static String whereID = "bm_material_id";
    public static String whereNombre = "referencia";

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public static String[] nombreTitulosCabeceraTabla = {"Id", "Referencia", "Nombre", "Descripción", "Lot_pack"};
    public static String[] nombreTitulosCabeceraTabla2 = {"campo hidden", "Id", "Cantidad", "Lot", "Material", "Orden Trabajo"};

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public static String campos = ArrayConvertirStringBDColumnasToCampos(nombreColBD);
    public static String questionMysql = ArrayConvertirStringQuestionMysql(nombreColBD);

    public static String campos2 = ArrayConvertirStringBDColumnasToCampos(nombreColBD2);
    public static String questionMysql2 = ArrayConvertirStringQuestionMysql(nombreColBD2);

    public static String update = ArrayConvertirStringUpdateMysql(nombreColBD);

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public static String[] nombreTitulosCabeceraTablaModificarMaquina = {"Id", "Nombre"};

}
