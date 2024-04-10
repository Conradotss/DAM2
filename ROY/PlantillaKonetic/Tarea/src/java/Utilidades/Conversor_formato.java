package Utilidades;

public class Conversor_formato {
    
    //Este método se puede utilizar para convertir un arreglo de columnas de base 
    //de datos en una cadena de campos de base de datos que se pueden usar en una
    //consulta SQL.
     public static String ArrayConvertirStringBDColumnasToCampos(String[] col) {

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < col.length; i++) {
            if (i < col.length - 1) {
                sb.append(col[i]).append(", ");
            } else {
                sb.append(col[i]).append("");
            }
        }

        //System.out.println(sb.toString());
        return sb.toString();
    }
}
