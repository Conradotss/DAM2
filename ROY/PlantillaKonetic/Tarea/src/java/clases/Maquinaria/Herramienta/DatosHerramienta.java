package clases.Maquinaria.Herramienta;

import Utilidades.Conversor_formato;

public class DatosHerramienta {
    
    public static String nombreTabla= "Herramienta";
    
    public static String TituloAdmin= "Aministracion de Herramientas";
    public static String TituloCrear= "Crear Herramienta";
    public static String TituloModificar= "Modificar Herramienta";
    
    public static String[] nombreTituloCabeceraTabla = {"ID", "Nombre", "Descripcion"};
    public static String[] nombreColEnBD= {"tarea_id", "nombre", "descripcion"};
    public static String[] tipo= {"cheack", "Texto", "Decimales", "Enteros"};
    public static String camposTabla = Conversor_formato.ArrayConvertirStringBDColumnasToCampos(tipo);
    
}
