/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.Recursos;

import Basedatos.OnExceptionBD;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;

/**
 *
 * @author Onelectric
 */
public class DatosAplicacion {

    //private static int contador = 0;
//    public static void ruta() {
//        //rutaHttp();
//        String operSys = System.getProperty("os.name").toLowerCase();
//        if (operSys.contains("win")) {
//            //os = OS.WINDOWS;
//            dirAplicacionCarpetaWebappsPadre = dirApp
//                    + System.getProperty("file.separator")
//                    + "webapps" + System.getProperty("file.separator")
//                    + nombreAplicacion
//                    + System.getProperty("file.separator")
//                    + nombreAplicacion
//                    + System.getProperty("file.separator");
//            dirAplicacionCarpetaWebappsImagenes = dirAplicacionCarpetaWebappsPadre + "Imagenes";
//            dirAplicacionCarpetaWebappsDocumento = dirAplicacionCarpetaWebappsPadre + "Documentos";
//        } else if (operSys.contains("nix") || operSys.contains("nux")
//                || operSys.contains("aix")) {
//            //os = OS.LINUX;
//            dirAplicacionCarpetaWebappsPadre = dirApp
//                    + "appservers"
//                    + System.getProperty("file.separator")
//                    + "apache-tomcat-9x"
//                    + System.getProperty("file.separator")
//                    + "webapps"
//                    + System.getProperty("file.separator")
//                    + nombreAplicacion
//                    + System.getProperty("file.separator")
//                    + nombreAplicacion
//                    + System.getProperty("file.separator");
//            dirAplicacionCarpetaWebappsImagenes = dirAplicacionCarpetaWebappsPadre + "Imagenes";
//            dirAplicacionCarpetaWebappsDocumento = dirAplicacionCarpetaWebappsPadre + "Documentos";
//        } else if (operSys.contains("mac")) {
//            //os = OS.MAC;
////            dirAplicacionCarpetaWebappsPadre = dirApp + System.getProperty("file.separator") + "webapps" + System.getProperty("file.separator") + nombreAplicacion + System.getProperty("file.separator") + nombreAplicacion + System.getProperty("file.separator");
////            dirAplicacionCarpetaWebappsImagenes = dirAplicacionCarpetaWebappsPadre + "Imagenes";
////            dirAplicacionCarpetaWebappsDocumento = dirAplicacionCarpetaWebappsPadre + "Documentos";
//        } else if (operSys.contains("sunos")) {
//            //os = OS.SOLARIS;
////            dirAplicacionCarpetaWebappsPadre = dirApp + System.getProperty("file.separator") + "webapps" + System.getProperty("file.separator") + nombreAplicacion + System.getProperty("file.separator") + nombreAplicacion + System.getProperty("file.separator");
////            dirAplicacionCarpetaWebappsImagenes = dirAplicacionCarpetaWebappsPadre + "Imagenes";
////            dirAplicacionCarpetaWebappsDocumento = dirAplicacionCarpetaWebappsPadre + "Documentos";
//        }
//    }
    //Recuerda que este orden da posicion de array influye en todo el proyecto
    //public static String http;

    
    //public static String dirAplicacionCarpetaDocumento = dirAplicacionCarpetaPadre + System.getProperty("file.separator") + "Documentos";

    //
    //
            
   
            

    

   

    

    //Recuerda que este orden da posicion de array influye en todo el proyecto
    public static String directorioFondoPrincipal = "Clases/Recursos/Iconos/OnfondoAplicacion4.png";
    public static String directorioFondoVentanas = "/" + directorioFondoPrincipal;

    //Directorios Imagenes e iconos
    public static String dirIcono = "Clases/Recursos/Iconos/";

    public static String[] diasSemana = {"Lunes", "Martes", "Miercoles", "Jueves", "Vienes", "Sábado", "Domingo"};
    public static String[] diasSemanaCalendar = {"Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Vienes", "Sábado"};

    public static String[] meses = {"Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"};
    public static String[] formaPago = {"Contado", "Transferencia", "Giro", "Pagaré", "Cheque", "Tarjeta", "Confirming"};
    public static String[] carpetaEstadoLote = {"Lotes Verificados", "Lotes No Conformes"};
    public static String[] activo = {"No activo", "Activo"};

    public static String nombreAplicacion = "prueba";
        public static String version = "1.0";

    public static String importjsInforme = ""
            + "        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">"
            + "        <meta charset=\"ISO-8859-1\">"
            + "        <meta name=\"theme-color\" content=\"#1f1f1f\">"
            // + "        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"
            + "        <meta name='application-name' content='OnMain by Konetic D.F'/>\n"
            + "        <meta name='apple-mobile-web-app-title' content='OnMain  by Konetic D.F'/>\n"
            + "        <META name=\"description\" content=\"OnMain by Konetic D.F\">\n"
            + "\n"
            //+ "        <meta name='mobile-web-app-capable' content='yes'/>\n"
            //+ "        <meta name='apple-mobile-web-app-capable' content='yes'/>\n"
            + "\n"
            + "        <!--icono-->\n"
            //+ "        <link rel=\"shortcut icon\" href=\"/" + nombreAplicacion + "/Main/images/ico/favicon.ico\"/>\n"
            + "        <link rel=\"shortcut icon\" href=\"/" + nombreAplicacion + "/Main/images/ico/favicon.png\"/>\n"
            + "        <!--Estilos-->\n"
            + "        <link rel=\"stylesheet\" href=\"/" + nombreAplicacion + "/Main/css/main.css?" + version + "\" type=\"text/css\" media=\"all\">\n"
            + "\n"
            + "        <!--Script--><!--Script--><!--Script--><!--Script--><!--Script--><!--Script--><!--Script-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery-1.10.2.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery-ui-1.10.4.js?" + version + "\"></script>\n"
            + "\n"
            + "        <!--Import control de cabecera de tabla-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.stickytableheaders.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.tablesorter.js?" + version + "\"></script>\n"
            + "\n"
            + "        <!--Import alert-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/sweetalert2.js?" + version + "\"></script>\n"
            + "        <!--Sesion-->\n"
            + "\n"
            + "        <!--Import validaciones-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.vadilate.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/onLibJs/utilidades.js?" + version + "\"></script>\n"
            + "        <!--Sesion-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/Web/login/Sesion/js/CerrarSesion.js?" + version + "\"></script>\n"
            + "        <!--Import validaciones-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/stacktable/stacktable.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/onLibJs/calcular.js?" + version + "\"></script>\n"
            + "";

    public static String importjs = ""
            + "        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">"
            + "        <meta charset=\"ISO-8859-1\">"
            + "        <meta name=\"theme-color\" content=\"#1f1f1f\">"
            + "        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"
            + "        <meta name='application-name' content='OnMain by Konetic D.F'/>\n"
            + "        <meta name='apple-mobile-web-app-title' content='OnMain by Konetic D.F'/>\n"
            + "        <META name=\"description\" content=\"OnMain  by Konetic D.F\">\n"
            + "\n"
            + "        <meta name='mobile-web-app-capable' content='yes'/>\n"
            + "        <meta name='apple-mobile-web-app-capable' content='yes'/>\n"
            + "\n"
            + "        <!--icono-->\n"
            + "                 <link href=\"/" + nombreAplicacion + "/Main/css/home.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\"/>\n"
            // + "        <link rel=\"shortcut icon\" href=\"/" + nombreAplicacion + "/Main/images/ico/favicon.ico\"/>\n"
            + "        <link rel=\"shortcut icon\" href=\"/" + nombreAplicacion + "/Main/images/ico/favicon.png\"/>\n"
            + "        <!--Estilos-->\n"
            + "        <link rel=\"stylesheet\" href=\"/" + nombreAplicacion + "/Main/css/main.css?" + version + "\" type=\"text/css\" media=\"all\">\n"
            + "\n"
            + "        <!--Script--><!--Script--><!--Script--><!--Script--><!--Script--><!--Script--><!--Script-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery-1.10.2.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery-ui-1.10.4.js?" + version + "\"></script>\n"
            + "\n"
            + "        <!--Import control de cabecera de tabla-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.stickytableheaders.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.tablesorter.js?" + version + "\"></script>\n"
            + "\n"
            + "        <!--Import alert-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/sweetalert2.js?" + version + "\"></script>\n"
            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.min.js?" + version + "\"></script>\n"
            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/serviceWorker.min.js?" + version + "\"></script>\n"

            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.js.map?" + version + "\"></script>\n"
            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.min.js.map?" + version + "\"></script>\n"
            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/serviceWorker.min.js.map?" + version + "\"></script>\n"
            //            
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/Web/Notificaciones/js/Notificacion.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/Web/Mantenimiento/Geolocalizacion/js/Geolocalizacion.js?" + version + "\"></script>\n"
            + "        <!--Sesion-->\n"
            + "\n"
            + "        <!--Import validaciones-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.vadilate.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.ui.datepicker.validation.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/onLibJs/utilidades.js?" + version + "\"></script>\n"
            + "        <!--Sesion-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/Web/login/Sesion/js/CerrarSesion.js?" + version + "\"></script>\n"
            + "        <!--Import validaciones-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/stacktable/stacktable.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/onLibJs/calcular.js?" + version + "\"></script>\n"
            + "";

    public static String importjsCalendar = ""
            + "        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">"
            + "        <meta charset=\"ISO-8859-1\">"
            + "        <meta name=\"theme-color\" content=\"#1f1f1f\">"
            + "        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"
            + "        <meta name='application-name' content='OnMain by Konetic D.F'/>\n"
            + "        <meta name='apple-mobile-web-app-title' content='OnMain by Konetic D.F'/>\n"
            + "        <META name=\"description\" content=\"OnMain  by Konetic D.F\">\n"
            + "\n"
            + "        <meta name='mobile-web-app-capable' content='yes'/>\n"
            + "        <meta name='apple-mobile-web-app-capable' content='yes'/>\n"
            + "\n"
            + "        <!--icono-->\n"
            + "                 <link href=\"/" + nombreAplicacion + "/Main/css/home.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\"/>\n"
            + "        <link rel=\"shortcut icon\" href=\"/" + nombreAplicacion + "/Main/images/ico/favicon.ico\"/>\n"
            + "        <link rel=\"shortcut icon\" href=\"/" + nombreAplicacion + "/Main/images/ico/favicon.png\"/>\n"
            + "        <!--Estilos-->\n"
            + "        <link rel=\"stylesheet\" href=\"/" + nombreAplicacion + "/Main/css/mainMinimo.css?" + version + "\" type=\"text/css\" media=\"all\">\n"
            + "\n"
            + "        <!--Script--><!--Script--><!--Script--><!--Script--><!--Script--><!--Script--><!--Script-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery-1.10.2.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery-ui-1.10.4.js?" + version + "\"></script>\n"
            + "\n"
            + "        <!--Import control de cabecera de tabla-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.stickytableheaders.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.tablesorter.js?" + version + "\"></script>\n"
            + "\n"
            + "        <!--Import alert-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/sweetalert2.js?" + version + "\"></script>\n"
            //                        + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.min.js?" + version + "\"></script>\n"
            //                        + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/serviceWorker.min.js?" + version + "\"></script>\n"

            //                        + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.js.map?" + version + "\"></script>\n"
            //                        + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.min.js.map?" + version + "\"></script>\n"
            //                        + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/serviceWorker.min.js.map?" + version + "\"></script>\n"
            //            
            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/Web/Notificaciones/js/Notificacion.js?" + version + "\"></script>\n"
            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/Web/Mantenimiento/Geolocalizacion/js/Geolocalizacion.js?" + version + "\"></script>\n"
            + "        <!--Sesion-->\n"
            + "\n"
            + "        <!--Import validaciones-->\n"
            //+ "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.vadilate.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/onLibJs/utilidades.js?" + version + "\"></script>\n"
            + "        <!--Sesion-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/Web/login/Sesion/js/CerrarSesion.js?" + version + "\"></script>\n"
            + "        <!--Import validaciones-->\n"
            //+ "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/stacktable/stacktable.js?" + version + "\"></script>\n"
            //+ "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/onLibJs/calcular.js?" + version + "\"></script>\n"
            + "";

    public static String importjsInformeScada = ""
            + "        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">"
            + "        <meta charset=\"ISO-8859-1\">"
            + "        <meta name=\"theme-color\" content=\"#1f1f1f\">"
            + "        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"
            + "        <meta name='application-name' content='OnMain by Konetic D.F'/>\n"
            + "        <meta name='apple-mobile-web-app-title' content='OnMain by Konetic D.F'/>\n"
            + "        <META name=\"description\" content=\"OnMain by Konetic D.F\">\n"
            + "\n"
            + "        <meta name='mobile-web-app-capable' content='yes'/>\n"
            + "        <meta name='apple-mobile-web-app-capable' content='yes'/>\n"
            + "\n"
            + "        <!--icono-->\n"
            //+ "        <link rel=\"shortcut icon\" href=\"/" + nombreAplicacion + "/Main/images/ico/favicon.ico\"/>\n"
            + "        <link rel=\"shortcut icon\" href=\"/" + nombreAplicacion + "/Main/images/ico/favicon.png\"/>\n"
            + "        <!--Estilos-->\n"
            + "        <link rel=\"stylesheet\" href=\"/" + nombreAplicacion + "/Main/css/cssInformesScada/main.css?" + version + "\" type=\"text/css\" media=\"all\">\n"
            + "\n"
            + "        <!--Script--><!--Script--><!--Script--><!--Script--><!--Script--><!--Script--><!--Script-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery-1.10.2.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery-ui-1.10.4.js?" + version + "\"></script>\n"
            + "\n"
            + "        <!--Import control de cabecera de tabla-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.stickytableheaders.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.tablesorter.js?" + version + "\"></script>\n"
            + "\n"
            + "        <!--Import alert-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/sweetalert2.js?" + version + "\"></script>\n"
            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.min.js?" + version + "\"></script>\n"
            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/serviceWorker.min.js?" + version + "\"></script>\n"

            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.js.map?" + version + "\"></script>\n"
            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.min.js.map?" + version + "\"></script>\n"
            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/serviceWorker.min.js.map?" + version + "\"></script>\n"
            //            
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/Web/Notificaciones/js/Notificacion.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/Web/Mantenimiento/Geolocalizacion/js/Geolocalizacion.js?" + version + "\"></script>\n"
            + "        <!--Sesion-->\n"
            + "\n"
            + "        <!--Import validaciones-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.vadilate.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/onLibJs/utilidades.js?" + version + "\"></script>\n"
            + "        <!--Sesion-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/Web/login/Sesion/js/CerrarSesion.js?" + version + "\"></script>\n"
            + "        <!--Import validaciones-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/stacktable/stacktable.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/onLibJs/calcular.js?" + version + "\"></script>\n"
            + "";
    public static String importjsInicioSesion = ""
            + "        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">"
            + "        <meta charset=\"ISO-8859-1\">"
            + "        <meta name=\"theme-color\" content=\"#1f1f1f\">"
            + "        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"
            + "        <meta name='application-name' content='OnMain by Konetic D.F'/>\n"
            + "        <meta name='apple-mobile-web-app-title' content='OnMain by Konetic D.F'/>\n"
            + "        <META name=\"description\" content=\"OnMain by Konetic D.F\">\n"
            + "\n"
            + "        <meta name='mobile-web-app-capable' content='yes'/>\n"
            + "        <meta name='apple-mobile-web-app-capable' content='yes'/>\n"
            + "\n"
            + "        <!--icono-->\n"
            //+ "        <link rel=\"shortcut icon\" href=\"/" + nombreAplicacion + "/Main/images/ico/favicon.ico\"/>\n"
            + "        <link rel=\"shortcut icon\" href=\"/" + nombreAplicacion + "/Main/images/ico/favicon.png\"/>\n"
            + "        <!--Estilos-->\n"
            + "        <link rel=\"stylesheet\" href=\"/" + nombreAplicacion + "/Main/css/main.css?" + version + "\" type=\"text/css\" media=\"all\">\n"
            + "\n"
            + "        <!--Script--><!--Script--><!--Script--><!--Script--><!--Script--><!--Script--><!--Script-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery-1.10.2.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery-ui-1.10.4.js?" + version + "\"></script>\n"
            + "\n"
            + "        <!--Import control de cabecera de tabla-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.stickytableheaders.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.tablesorter.js?" + version + "\"></script>\n"
            + "\n"
            + "        <!--Import alert-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/sweetalert2.js?" + version + "\"></script>\n"
            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.min.js?" + version + "\"></script>\n"
            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/serviceWorker.min.js?" + version + "\"></script>\n"

            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.js.map?" + version + "\"></script>\n"
            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.min.js.map?" + version + "\"></script>\n"
            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/serviceWorker.min.js.map?" + version + "\"></script>\n"
            //            
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/Web/Notificaciones/js/Notificacion.js?" + version + "\"></script>\n"
            //+ "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/Web/Mantenimiento/Geolocalizacion/js/Geolocalizacion.js?" + version + "\"></script>\n"
            + "        <!--Sesion-->\n"
            + "\n"
            + "        <!--Import validaciones-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.vadilate.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/onLibJs/utilidades.js?" + version + "\"></script>\n"
            + "        <!--Sesion-->\n"
            // + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/Web/login/Sesion/js/CerrarSesion.js?" + version + "\"></script>\n"
            + "        <!--Import validaciones-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/stacktable/stacktable.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/onLibJs/calcular.js?" + version + "\"></script>\n"
            + "";
    public static String importjsRegistroHorario = ""
            + "        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">"
            + "        <meta charset=\"ISO-8859-1\">"
            + "        <meta name=\"theme-color\" content=\"#1f1f1f\">"
            + "        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"
            + "        <meta name='application-name' content='OnMain by Konetic D.F'/>\n"
            + "        <meta name='apple-mobile-web-app-title' content='OnMain by Konetic D.F'/>\n"
            + "        <META name=\"description\" content=\"OnMain by Konetic D.F\">\n"
            + "\n"
            + "        <meta name='mobile-web-app-capable' content='yes'/>\n"
            + "        <meta name='apple-mobile-web-app-capable' content='yes'/>\n"
            + "\n"
            + "        <!--icono-->\n"
            //+ "        <link rel=\"shortcut icon\" href=\"/" + nombreAplicacion + "/Main/images/ico/favicon.ico\"/>\n"
            + "        <link rel=\"shortcut icon\" href=\"/" + nombreAplicacion + "/Main/images/ico/favicon.png\"/>\n"
            + "        <!--Estilos-->\n"
            + "        <link rel=\"stylesheet\" href=\"/" + nombreAplicacion + "/Main/css/mainRegistroHorario.css?" + version + "\" type=\"text/css\" media=\"all\">\n"
            + "\n"
            + "        <!--Script--><!--Script--><!--Script--><!--Script--><!--Script--><!--Script--><!--Script-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery-1.10.2.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery-ui-1.10.4.js?" + version + "\"></script>\n"
            + "\n"
            + "        <!--Import control de cabecera de tabla-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.stickytableheaders.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.tablesorter.js?" + version + "\"></script>\n"
            + "\n"
            + "        <!--Import alert-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/sweetalert2.js?" + version + "\"></script>\n"
            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.min.js?" + version + "\"></script>\n"
            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/serviceWorker.min.js?" + version + "\"></script>\n"

            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.js.map?" + version + "\"></script>\n"
            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/push.min.js.map?" + version + "\"></script>\n"
            //            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/push/serviceWorker.min.js.map?" + version + "\"></script>\n"
            //            
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/Web/Notificaciones/js/Notificacion.js?" + version + "\"></script>\n"
            + "        <!--Sesion-->\n"
            + "\n"
            + "        <!--Import validaciones-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.vadilate.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/onLibJs/utilidades.js?" + version + "\"></script>\n"
            + "        <!--Sesion-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/Web/login/Sesion/js/CerrarSesion.js?" + version + "\"></script>\n"
            + "        <!--Import validaciones-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/stacktable/stacktable.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/onLibJs/calcular.js?" + version + "\"></script>\n"
            + "";
    public static String importjsFirma = ""
            + "        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">"
            + "        <meta charset=\"ISO-8859-1\">"
            + "        <meta name=\"theme-color\" content=\"#1f1f1f\">"
            + "        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"
            + "        <meta name='application-name' content='OnMain by Konetic D.F'/>\n"
            + "        <meta name='apple-mobile-web-app-title' content='OnMain by Konetic D.F'/>\n"
            + "        <META name=\"description\" content=\"OnMain by Konetic D.F\">\n"
            + "\n"
            + "        <meta name='mobile-web-app-capable' content='yes'/>\n"
            + "        <meta name='apple-mobile-web-app-capable' content='yes'/>\n"
            + "\n"
            + "        <!--icono-->\n"
            //+ "        <link rel=\"shortcut icon\" href=\"/" + nombreAplicacion + "/Main/images/ico/favicon.ico\"/>\n"
            + "        <link rel=\"shortcut icon\" href=\"/" + nombreAplicacion + "/Main/images/ico/favicon.png\"/>\n"
            + "        <!--Estilos-->\n"
            + "        <link rel=\"stylesheet\" href=\"/" + nombreAplicacion + "/Main/css/main.css?" + version + "\" type=\"text/css\" media=\"all\">\n"
            + "\n"
            + "        <!--Script--><!--Script--><!--Script--><!--Script--><!--Script--><!--Script--><!--Script-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery-1.10.2.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery-ui-1.10.4.js?" + version + "\"></script>\n"
            + "\n"
            + "        <!--Import control de cabecera de tabla-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.stickytableheaders.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.tablesorter.js?" + version + "\"></script>\n"
            + "\n"
            + "        <!--Import alert-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/sweetalert2.js?" + version + "\"></script>\n"
            + "        <!--Sesion-->\n"
            + "\n"
            + "        <!--Import validaciones-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/jquery.vadilate.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/onLibJs/utilidades.js?" + version + "\"></script>\n"
            + "        <!--Sesion-->\n"
            // + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/Web/login/Sesion/js/CerrarSesion.js?" + version + "\"></script>\n"
            + "        <!--Import validaciones-->\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/stacktable/stacktable.js?" + version + "\"></script>\n"
            + "        <script type=\"text/javascript\" src=\"/" + nombreAplicacion + "/Main/js/onLibJs/calcular.js?" + version + "\"></script>\n"
            + "";

    public static String importDashboardCss = "<link href=\"/" + nombreAplicacion + "/Main/css/home.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\"/>\n"
            + "\n"
            + "         <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\">\n"
            + "         <link href=\"https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&display=swap\" rel=\"stylesheet\">"
            + "        <link rel=\"stylesheet\" href=\"/" + nombreAplicacion + "/dist/assets/css/bootstrap.css\">\n"
            + "\n"
            + "        <link rel=\"stylesheet\" href=\"/" + nombreAplicacion + "/dist/assets/vendors/chartjs/Chart.min.css\">\n"
            + "\n"
            + "        <link rel=\"stylesheet\" href=\"/" + nombreAplicacion + "/dist/assets/vendors/perfect-scrollbar/perfect-scrollbar.css\">\n"
            + "        <link rel=\"stylesheet\" href=\"/" + nombreAplicacion + "/dist/assets/vendors/bootstrap-icons/bootstrap-icons.css\">\n"
            + "        <link rel=\"stylesheet\" href=\"/" + nombreAplicacion + "/dist/assets/css/app.css\">\n"
            + "        <link rel=\"shortcut icon\" href=\"/" + nombreAplicacion + "/dist/assets/images/favicon.svg\" type=\"image/x-icon\">"
            + ""
            + "";

    public static String importDashboardJs = ""
            + ""
            + "         <script src=\"/" + nombreAplicacion + "/dist/assets/vendors/perfect-scrollbar/perfect-scrollbar.min.js\"></script>\n"
            + "         <script src=\"/" + nombreAplicacion + "/dist/assets/js/bootstrap.bundle.min.js\"></script>\n"
            + "\n"
            + "         <script src=\"/" + nombreAplicacion + "/dist/assets/vendors/chartjs/Chart.min.js\"></script>\n"
            + "         <script src=\"/" + nombreAplicacion + "/dist/assets/js/pages/ui-chartjs.js\"></script>\n"
            + "         <script src=\"/" + nombreAplicacion + "/dist/assets/vendors/apexcharts/apexcharts.min.js\"></script>\n"
            + "         <script src=\"/" + nombreAplicacion + "/dist/assets/js/pages/ui-apexchart.js\"></script>\n"
            + "\n"
            + "";

    public static String getCodeHtmlDirWebApps(String dir) {

        String code = "/" + DatosAplicacion.nombreAplicacion + "/" + DatosAplicacion.nombreAplicacion;
        //Adaptamos la ruta al directorio del Servidor
        if (dir != null) {
            if (!dir.equals("")) {
                System.out.println(dir);
                code = code + dir.replaceAll("\\\\", "/");
                System.out.println(code);
            }
        }
        return code;
    }

   


    public static void main(String[] args) {
        String dirImagen = "C:\\Program Files\\Apache Software Foundation\\Tomcat 10.0\\bin\\OnGestion\\Imagenes\\Articulos\\0.50MMROJO.jpg";
        getCodeHtmlDirWebApps(dirImagen);
    }

}
