package examenroypsp.servidor;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.TimeZone;

class Paginas {
    
    private final static String NOMBRE = "Roy";
    
    public static final String primeraCabecera = "Content-Type:text/html;charset=UTF-8";
    
    private static String mostrarHora() {
            SimpleDateFormat sdf = new SimpleDateFormat("EEE, dd MMM yyyy HH:mm:ss zzz", Locale.US);
        sdf.setTimeZone(TimeZone.getTimeZone("GMT"));
        return sdf.format(new Date());
    }
    
    public static final String html_index = "<html>"
            + "<head><title>Bienvenido</title></head>"
            + "<body>"
            + "<h1>la fecha y hora de " + NOMBRE + "</h1>"
            + "<h2>Hora del servidor:  " + mostrarHora() + "</h2>"
            + "<p></p>"
            + "</body>"
            + "</html>";
  
    
    public static final String html_noEncontrado = "<html>"
          + "<head><title>noEncontrado</title></head>"
          + "<body>"
          + "<h1>¡ERROR! Página no encontrada</h1>"
          + "<p>La página que solicitaste no existe en nuestro "
          + "servidor</p>"
          + "</body>"
          + "</html>";
}
