/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.BalanceMasa.Consumo;

import static Utilidades.Conversor_formato.ArrayConvertirStringBDColumnasToCampos;
import static Utilidades.Conversor_formato.ArrayConvertirStringQuestionMysql;
import static Utilidades.Conversor_formato.ArrayConvertirStringUpdateMysql;

/**
 *
 * @author Angel
 */
public class DatosConsumo {

    public static String nombreTabla = "bm_consumo_material";
    public static String[] nombreColBD = {"bm_consumo_material_id", "cantidad", "lot_codext", "bm_material_id", "ordenTrabajo_id"};

    public static String nombreTabla2 = "bm_material_pack";
    public static String[] nombreColBD2 = {"id", "bm_consumo_material_id", "bm_material_id"};

    public static String whereID = "bm_consumo_material_id";
    public static String whereNombre = "cantidad";

    public static String join = "bm_material mat ON consu.bm_material_id = mat.bm_material_id";

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public static String[] nombreTitulosCabeceraTabla = {"Id", "Cantidad", "Lot", "Material", "Orden Trabajo", "Pack_Material"};
    public static String[] nombreTitulosCabeceraTabla2 = {"campo hidden", "ID", "Referencia", "Nombre", "Descripcion"};

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public static String campos = ArrayConvertirStringBDColumnasToCampos(nombreColBD);
    public static String questionMysql = ArrayConvertirStringQuestionMysql(nombreColBD);

    public static String campos2 = ArrayConvertirStringBDColumnasToCampos(nombreColBD2);
    public static String questionMysql2 = ArrayConvertirStringQuestionMysql(nombreColBD2);

    public static String update = ArrayConvertirStringUpdateMysql(nombreColBD);

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public static String[] nombreTitulosCabeceraTablaModificarMaquina = {"Id", "Nombre"};

}
