/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Utilidades;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.Normalizer;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.regex.Pattern;
import javax.swing.JFormattedTextField;
import javax.swing.text.DefaultFormatterFactory;
import javax.swing.text.MaskFormatter;
import org.apache.commons.codec.binary.Base64;

/**
 *
 * @author Angel
 */
public class Conversor_formato {

    public static String quitarTildes(String str) {
        String nfdNormalizedString = Normalizer.normalize(str, Normalizer.Form.NFD);
        Pattern pattern = Pattern.compile("\\p{InCombiningDiacriticalMarks}+");
        return pattern.matcher(nfdNormalizedString).replaceAll("");
    }

    public static String capturar_ruta_actual() {
        File miDir = new File(".");
        String ruta_actual = null;
        try {
            ruta_actual = miDir.getCanonicalPath();
            //System.out.println("Directorio actual: " + miDir.getCanonicalPath());
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ruta_actual;
    }

    public static String[] singleChars(String s) {
        return s.split("(?!^)");
    }

    public static String convertir_String_Para_informe(String campo) {
        if (campo != null && !campo.equals("")) {
            String descripcions = "";
            String[] array = campo.split("\n");
            for (int j = 0; j < array.length; j++) {
                if (j < array.length - 1) {
                    descripcions += array[j] + "<br>";
                } else {
                    descripcions += array[j];
                }
            }
            return descripcions;
        }
        return "";
    }

    public static String convertir_String_Para_informeConEspacios(String campo) {
        if (campo != null && !campo.equals("")) {
            String descripcions = "";
            String[] array = campo.split("\n");
            for (int j = 0; j < array.length; j++) {
                if (j < array.length - 1) {
                    descripcions += array[j] + "<br>";
                }
                if (j == 0) {
                    descripcions += "&nbsp;&nbsp;&nbsp;" + array[j];
                } else {
                    descripcions += array[j];
                }
            }
            return descripcions;
        }
        return "";
    }

    public static String concatenar_Array_to_String(String[] array) throws InterruptedException {
        String concatenar_Array_to_String = "";
        StringBuilder finalString = new StringBuilder();

        if (array.length > 0) {
            //finalString.append(array[0]);
            for (int i = 0; i < array.length && array[i] != null; i++) {

                finalString.append("\n");
                finalString.append(array[i]);

            }

            concatenar_Array_to_String = finalString.toString();
        }
//        System.out.println(finalString.toString());
        return concatenar_Array_to_String;
    }

    public static String concatenar_Array_to_String_espacio(String[] array) throws InterruptedException {
        String concatenar_Array_to_String = "";
        StringBuilder finalString = new StringBuilder();

        if (array.length > 0) {
            //finalString.append(array[0]);
            for (int i = 0; i < array.length && array[i] != null; i++) {

                finalString.append(array[i]);

                finalString.append(" ");

            }

            concatenar_Array_to_String = finalString.toString();
        }
//        System.out.println(finalString.toString());
        return concatenar_Array_to_String.trim();
    }

    public static String concatenar_Array_to_String_SinEspacios(String[] array) throws InterruptedException {
        String concatenar_Array_to_String = "";
        StringBuilder finalString = new StringBuilder();
        if (array.length > 0) {
            //finalString.append(array[0]);
            for (int i = 0; i < array.length && array[i] != null; i++) {
//                finalString.append("\n");
                finalString.append(array[i]);
            }

            concatenar_Array_to_String = finalString.toString();
        }
//        System.out.println(finalString.toString());
        return concatenar_Array_to_String;
    }

    public static String concatenar_Array_to_String(byte[] array) throws InterruptedException {
        String concatenar_Array_to_String = "";
        StringBuilder finalString = new StringBuilder();

        if (array.length > 0) {
            //finalString.append(array[0]);
            for (int i = 0; i < array.length; i++) {

//                finalString.append("\n");
                finalString.append(array[i]);

            }

            concatenar_Array_to_String = finalString.toString();
        }
//        System.out.println(finalString.toString());
        return concatenar_Array_to_String;
    }

    public static String concatenar_Array_to_String(char[] array) throws InterruptedException {
        String concatenar_Array_to_String = "";
        StringBuilder finalString = new StringBuilder();

        if (array.length > 0) {

            finalString.append(array);

            concatenar_Array_to_String = finalString.toString();
        }
//        System.out.println(finalString.toString());
        return concatenar_Array_to_String;
    }

    public static String concatenar_Array_to_String_teclado(char[] array) throws InterruptedException {
        String concatenar_Array_to_String = "";
        StringBuilder finalString = new StringBuilder();

        if (array.length > 0) {

            finalString.append(array);

            concatenar_Array_to_String = finalString.toString();
        }
//        System.out.println(finalString.toString());
        return concatenar_Array_to_String;
    }

    public static String convertoHex_apelo(int entero) {
        String string = null;
        string = Integer.toHexString(entero);

        return string;
    }

    public static String convertoHex(int dec) {

        StringBuilder sb = new StringBuilder();
        String hex = null;
        StringBuilder convert_hex = sb.append(Integer.toHexString(dec));
        String convertido_hex = null;

        if (convert_hex.length() == 4) {
            convertido_hex = convert_hex.toString();
            hex = convertido_hex;

        }
        while (convert_hex.length() < 4) {
            convert_hex = sb.insert(0, '0');
            convertido_hex = convert_hex.toString();
            hex = convertido_hex;
        }

        return hex;
    }

    public static String convertoHex(int palabra1, int palabra2) {
        String hex = null;
        String convertoHex1 = convertoHex(palabra1);
        String convertoHex2 = convertoHex(palabra2);
        hex = convertoHex1.concat(convertoHex2);
        return hex;
    }

    public static String convertoHex_(byte dec) {

        StringBuilder sb = new StringBuilder();
        String hex = null;
        StringBuilder convert_hex = sb.append(Integer.toHexString(dec));
        String convertido_hex = null;

        if (convert_hex.length() == 4) {
            convertido_hex = convert_hex.toString();
            hex = convertido_hex;

        }
        while (convert_hex.length() < 4) {
            convert_hex = sb.insert(0, '0');
            convertido_hex = convert_hex.toString();
            hex = convertido_hex;
        }

        return hex;
    }

    public static String convertoHex_(byte palabra1, byte palabra2) {
        String hex = null;
        String convertoHex1 = convertoHex_(palabra1);
        String convertoHex2 = convertoHex_(palabra2);
        System.out.println(convertoHex1 + "y" + convertoHex2);
        hex = convertoHex1.concat(convertoHex2);
        return hex;
    }

    public static int hacer_palabra_int(int palabra1, int palabra2) {
        int dec = 0;
        String convertoHex = convertoHex(palabra1, palabra2);

        //Pongo el long para que no me dé error ffff ffff en int
        dec = (int) Long.parseLong(convertoHex, 16);
        return dec;
    }

    public static int hacer_palabra_int_(byte palabra1, byte palabra2) {
        int dec = 0;
        String convertoHex = convertoHex_(palabra1, palabra2);

        dec = Integer.valueOf(Integer.parseInt(convertoHex, 16));
        return dec;
    }

    public static int hacer_palabra_entero(int palabra1, int palabra2) {
        int entero = 0;
        int convertofloat = hacer_palabra_int(palabra1, palabra2);
        entero = convertofloat;

        return entero;
    }

    public static float hacer_palabra_float(int palabra1, int palabra2) {
        float flotante = 0;
        long convertofloat = hacer_palabra_int(palabra1, palabra2);
        flotante = (float) convertofloat;

        return flotante;
    }

    public static String convertoformat(int dec) {

        StringBuilder sb = new StringBuilder();
        String formato = null;
        StringBuilder convert = sb.append(dec);
        String convertido = null;

        if (convert.length() == 2) {
            convertido = convert.toString();
            formato = convertido;
            //System.out.println("2");  
        }
        while (convert.length() < 2) {
            convert = sb.insert(0, '0');
            convertido = convert.toString();
            formato = convertido;
            //System.out.println("1"); 
        }

        return formato;
    }

    public static String convertoformat(int dec, int digitos) {

        StringBuilder sb = new StringBuilder();
        String formato = null;
        StringBuilder convert = sb.append(dec);
        String convertido = null;

        if (convert.length() == digitos) {
            convertido = convert.toString();
            formato = convertido;

        }
        while (convert.length() < digitos) {
            convert = sb.insert(0, '0');
            convertido = convert.toString();
            formato = convertido;

        }

        return formato;
    }

    public static double Redondear(double numero, int digitos) {
        int cifras = (int) Math.pow(10, digitos);
        return Math.rint(numero * cifras) / cifras;
    }

    public static String Redondear_float_to_String(float numero, int digitos) {
        int cifras = (int) Math.pow(10, digitos);
        return Double.toString(Math.rint(numero * cifras) / cifras);
    }

    public static String Redondear_double_to_String(double numero, int digitos) {
        int cifras = (int) Math.pow(10, digitos);
        return Double.toString(Math.rint(numero * cifras) / cifras);
    }

    public static String Double_to_int(double numero) {
        Double n = Double.valueOf(numero);
        return "" + n.intValue();
    }

    public static String quitar_tildes(String input) {
        if (input != null) {
            // Cadena de caracteres original a sustituir.
            String original = "áàäéèëíìïóòöúùuñÁÀÄÉÈËÍÌÏÓÒÖÚÙÜÑçÇ";
            // Cadena de caracteres ASCII que reemplazarán los originales.
            String ascii = "aaaeeeiiiooouuunAAAEEEIIIOOOUUUNcC";
            String output = input;
            for (int i = 0; i < original.length(); i++) {
                // Reemplazamos los caracteres especiales.
                output = output.replace(original.charAt(i), ascii.charAt(i));
            }//for i
            return output;
        }
        return "";
    }//remove1

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

    public static String ArrayConvertirStringQuestionMysql(String[] col) {

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < col.length; i++) {
            if (i < col.length - 1) {
                sb.append("?").append(",");
            } else {
                sb.append("?").append("");
            }
        }

        //System.out.println(sb.toString());
        return sb.toString();
    }

    public static String ArrayConvertirStringUpdateMysql(String[] col) {

        StringBuilder sb = new StringBuilder();
        sb.append(" SET ");
        for (int i = 1; i < col.length; i++) {
            if (i < col.length - 1) {
                sb.append(col[i] + " = ?").append(", ");
            } else {
                sb.append(col[i] + " = ?").append(" ");
            }
        }

//        System.out.println(sb.toString());
        return sb.toString();
    }

    public static String Array_convert_to_String_bd_GrupoRegistro_nombre_like(String[] col) {

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < col.length; i++) {
            if (i < col.length - 1) {
                sb.append(col[i]).append("' or gruporegistro_id like '%");
            } else {
                sb.append(col[i]).append("");
            }
        }

        //System.out.println(sb.toString());
        return sb.toString();
    }

    public static String Array_convert_to_String_bd_Equipo_nombre_like(String[] col) {

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < col.length; i++) {
            if (i < col.length - 1) {
                sb.append(col[i]).append("' or equipo_id like '%");
            } else {
                sb.append(col[i]).append("");
            }
        }

        //System.out.println(sb.toString());
        return sb.toString();
    }

    public static String Array_convert_to_String_bd_colunas_bd_valores(String[] col) {

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < col.length; i++) {

            if (i < col.length - 1) {

                sb.append("'").append("");
                sb.append(col[i]).append("',");

            } else {
                sb.append("'").append("");
                sb.append(col[i]).append("'");
            }
        }

        //System.out.println(sb.toString());
        return sb.toString();
    }

    public static String ArrayList_convert_to_String(ArrayList col) {

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < col.size(); i++) {

            sb.append(col.get(i));

        }

        //System.out.println(sb.toString());
        return sb.toString();
    }

    public static String ArrayList_convert_to_String_inverso(ArrayList col) {

        StringBuilder sb = new StringBuilder();
        for (int i = col.size() - 1; i >= 0; i--) {

            sb.append(col.get(i));

        }

        //System.out.println(sb.toString());
        return sb.toString();
    }

    public static String ArrayList_convert_to_String_bd_colunas_bd(ArrayList col) {

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < col.size(); i++) {
            if (i < col.size() - 1) {
                sb.append(col.get(i)).append(",");
            } else {
                sb.append(col.get(i)).append("");
            }
        }

        //System.out.println(sb.toString());
        return sb.toString();
    }

    public static String ArrayList_convert_to_String_bd_equipos(ArrayList zona) {

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < zona.size(); i++) {
            if (zona.size() <= 1) {
                sb.append("(Datosbd.Nombre_analizador like '%").append("");
                sb.append(zona.get(i)).append("%') ");
            } else if (i < zona.size() - 1) {
                sb.append("(Datosbd.Nombre_analizador like '%").append("");
                sb.append(zona.get(i)).append("%') ");
                sb.append("or").append(" ");
            } else {
                sb.append("(Datosbd.Nombre_analizador like '%").append("");
                sb.append(zona.get(i)).append("%') ");
            }
        }
        //System.out.println(sb.toString());
        return sb.toString();
    }

    public static String Array_convert_to_String_bd_variable(String[] variables) {

        StringBuilder sb = new StringBuilder();
        if (variables[0] == null) {
            return "ongestion.datolectura.variable_id like '%%'";
        } else {
            for (int i = 0; i < variables.length; i++) {
                if (variables.length <= 1) {
                    sb.append("(ongestion.datolectura.variable_id like '%").append("");
                    sb.append(variables[i]).append("%')");
                } else if (i < variables.length - 1) {
                    sb.append("(ongestion.datolectura.variable_id like '%").append("");
                    sb.append(variables[i]).append("%')");
                    sb.append("or").append(" ");
                } else {
                    sb.append("(ongestion.datolectura.variable_id like '%").append("");
                    sb.append(variables[i]).append("%')");
                }
            }
        }
        //System.out.println(sb.toString());
        return sb.toString();
    }

    private static int pow(int i, int powerNum) {
        return (int) Math.pow(i, powerNum);
    }

    public static char decimaToAscii(String numero) {

        String hdN = Integer.toHexString(Integer.parseInt(numero));
        long decNum = 0;
        for (int i = 0; i < hdN.length(); i++) {
            int powerNum = hdN.length() - i - 1;
            int de = hdN.charAt(i);
            switch (de) {
                case '0':
                    decNum = 0 * pow(16, powerNum) + decNum;
                    break;
                case '1':
                    decNum = 1 * pow(16, powerNum) + decNum;
                    break;
                case '2':
                    decNum = 2 * pow(16, powerNum) + decNum;
                    break;
                case '3':
                    decNum = 3 * pow(16, powerNum) + decNum;
                    break;
                case '4':
                    decNum = 4 * pow(16, powerNum) + decNum;
                    break;
                case '5':
                    decNum = 5 * pow(16, powerNum) + decNum;
                    break;
                case '6':
                    decNum = 6 * pow(16, powerNum) + decNum;
                    break;
                case '7':
                    decNum = 7 * pow(16, powerNum) + decNum;
                    break;
                case '8':
                    decNum = 8 * pow(16, powerNum) + decNum;
                    break;
                case '9':
                    decNum = 9 * pow(16, powerNum) + decNum;
                    break;
                case 'A':
                    decNum = 10 * pow(16, powerNum) + decNum;
                    break;
                case 'a':
                    decNum = 10 * pow(16, powerNum) + decNum;
                    break;
                case 'B':
                    decNum = 11 * pow(16, powerNum) + decNum;
                    break;
                case 'b':
                    decNum = 11 * pow(16, powerNum) + decNum;
                    break;
                case 'C':
                    decNum = 12 * pow(16, powerNum) + decNum;
                    break;
                case 'c':
                    decNum = 12 * pow(16, powerNum) + decNum;
                    break;
                case 'D':
                    decNum = 13 * pow(16, powerNum) + decNum;
                    break;
                case 'd':
                    decNum = 13 * pow(16, powerNum) + decNum;
                    break;
                case 'E':
                    decNum = 14 * pow(16, powerNum) + decNum;
                    break;
                case 'e':
                    decNum = 14 * pow(16, powerNum) + decNum;
                    break;
                case 'F':
                    decNum = 15 * pow(16, powerNum) + decNum;
                    break;
                case 'f':
                    decNum = 15 * pow(16, powerNum) + decNum;
                    break;
            }
        }
//        System.out.println("Decimal number is: " + decNum);
        char c = (char) decNum;
//        System.out.println("Char is: " + c);
        return c;
    }

    public static char HexadecimaToAscii(String numero) {

        String hdN = "" + numero;
        long decNum = 0;
        for (int i = 0; i < hdN.length(); i++) {
            int powerNum = hdN.length() - i - 1;
            int de = hdN.charAt(i);
            switch (de) {
                case '0':
                    decNum = 0 * pow(16, powerNum) + decNum;
                    break;
                case '1':
                    decNum = 1 * pow(16, powerNum) + decNum;
                    break;
                case '2':
                    decNum = 2 * pow(16, powerNum) + decNum;
                    break;
                case '3':
                    decNum = 3 * pow(16, powerNum) + decNum;
                    break;
                case '4':
                    decNum = 4 * pow(16, powerNum) + decNum;
                    break;
                case '5':
                    decNum = 5 * pow(16, powerNum) + decNum;
                    break;
                case '6':
                    decNum = 6 * pow(16, powerNum) + decNum;
                    break;
                case '7':
                    decNum = 7 * pow(16, powerNum) + decNum;
                    break;
                case '8':
                    decNum = 8 * pow(16, powerNum) + decNum;
                    break;
                case '9':
                    decNum = 9 * pow(16, powerNum) + decNum;
                    break;
                case 'A':
                    decNum = 10 * pow(16, powerNum) + decNum;
                    break;
                case 'a':
                    decNum = 10 * pow(16, powerNum) + decNum;
                    break;
                case 'B':
                    decNum = 11 * pow(16, powerNum) + decNum;
                    break;
                case 'b':
                    decNum = 11 * pow(16, powerNum) + decNum;
                    break;
                case 'C':
                    decNum = 12 * pow(16, powerNum) + decNum;
                    break;
                case 'c':
                    decNum = 12 * pow(16, powerNum) + decNum;
                    break;
                case 'D':
                    decNum = 13 * pow(16, powerNum) + decNum;
                    break;
                case 'd':
                    decNum = 13 * pow(16, powerNum) + decNum;
                    break;
                case 'E':
                    decNum = 14 * pow(16, powerNum) + decNum;
                    break;
                case 'e':
                    decNum = 14 * pow(16, powerNum) + decNum;
                    break;
                case 'F':
                    decNum = 15 * pow(16, powerNum) + decNum;
                    break;
                case 'f':
                    decNum = 15 * pow(16, powerNum) + decNum;
                    break;
            }
        }
//        System.out.println("Decimal number is: " + decNum);
        char c = (char) decNum;
//        System.out.println("Char is: " + c);
        return c;
    }

    public static String formatearHora(JFormattedTextField hora) throws ParseException {
        //Forma de recuperar la hora del sistema y darle un formato.
        hora.setFormatterFactory(new DefaultFormatterFactory(new MaskFormatter("##:##:##")));
        SimpleDateFormat sdff = new SimpleDateFormat("HH:mm:ss");
        String horaformateada = sdff.format(hora);
        return horaformateada;
    }

    public static String rellenarCerosIzquierda(int cantidad_Ceros, int valor) {
        String resultado = String.format("%0" + cantidad_Ceros + "d", valor);

        return resultado;
    }

    public static String rellenarCerosIzquierda(int cantidad_Ceros, String valor) {
        String resultado = String.format("%0" + cantidad_Ceros + "s", valor);

        return resultado;
    }

    public static double convertirDato(Object dato) {
        double r = 0.0;

        String tipoDato = dato.getClass().toString();
//        System.out.println(tipoDato+ " /// "+dato.toString());
        try {
            if (tipoDato.equals(Integer.class.toString())) {
                return r = (int) dato;
            }
            if (tipoDato.equals(Double.class.toString())) {
                return r = (double) dato;
            }
            if (tipoDato.equals(Long.class.toString())) {
                return r = (long) dato;
            }
            if (tipoDato.equals(Float.class.toString())) {
                return r = (float) dato;
            }
            if (tipoDato.equals(String.class.toString())) {
                return r;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return r;
    }

    public static boolean isNumeric(String cadena) {

        try {
            Integer.parseInt(cadena);
            return true;
        } catch (NumberFormatException nfe) {
            return false;
        }
    }

    public static String encodeFileToBase64Binary(File file) throws FileNotFoundException, IOException {
        String encodedfile = "data:image/png;base64, ";

        FileInputStream fileInputStreamReader = new FileInputStream(file);
        byte[] bytes = new byte[(int) file.length()];
        fileInputStreamReader.read(bytes);
        encodedfile = encodedfile + new String(Base64.encodeBase64(bytes), "UTF-8");
        fileInputStreamReader.close();

        return encodedfile;
    }

    public static String encodeFileToBase64Binary(String dir) throws FileNotFoundException, IOException {

        File file = new File(dir); 

        return encodeFileToBase64Binary(file);
    }

    public static String encodeFileToBase64BinaryFichero(File file) throws FileNotFoundException, IOException {
        String encodedfile = "data:media_type, ";
        FileInputStream fileInputStreamReader = new FileInputStream(file);
        byte[] bytes = new byte[(int) file.length()];
        fileInputStreamReader.read(bytes);
        encodedfile = encodedfile + new String(Base64.encodeBase64(bytes), "UTF-8");
        fileInputStreamReader.close();

        return encodedfile;
    }

    public static String encodeFileToBase64BinaryFichero(String dir) throws FileNotFoundException, IOException {

        File file = new File(dir);

        return encodeFileToBase64BinaryFichero(file);
    }

    public static double hacer_palabra_double(int palabra1, int palabra2) {
        long dec = 0;
        String convertoHex = convertoHex(palabra1, palabra2);
        //Pongo el long para que no me dé error ffff ffff en int
        dec = Long.parseLong(convertoHex, 16);
        float decimal = Float.intBitsToFloat((int) dec);
        return decimal;
    }

    public static void main(String[] args) {

    }

}
