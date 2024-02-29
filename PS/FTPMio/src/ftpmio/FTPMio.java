package ftpmio;

import java.io.FileOutputStream;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.apache.commons.net.ftp.FTPClient;
import org.apache.commons.net.ftp.FTPReply;

public class FTPMio {

    private static FTPClient cliente;
    private static FileOutputStream fecheroObtenido;
    private static String servidorURL = "ftp.rediris.es";
    private static String rutaFichero = "debian";
    private static String nombrefichero = "README";
    private static String usuario = "anonymous";
    private static String password = "";
    private static String[] nombreCarpeta;

    public static void main(String[] args) {
        int reply;
        cliente = new FTPClient();
        try {
            cliente.connect(servidorURL);
            reply = cliente.getReplyCode();
            if (FTPReply.isPositiveCompletion(reply)) {
                cliente.login(usuario, password);
                System.out.println("Carpetas disponibles en el servidor");
                nombreCarpeta = cliente.listNames();
                for (int i = 0; i < nombreCarpeta.length; i++) {
                    System.out.println(nombreCarpeta[i]);
                }
                
                fecheroObtenido = new FileOutputStream(nombrefichero);
                
                System.out.println("\n Descargando el fichero " + nombrefichero + " de la carpeta " + rutaFichero);
                
                cliente.retrieveFile("/" + rutaFichero + "/"
               + nombrefichero, fecheroObtenido);
                
                fecheroObtenido.close();
                cliente.disconnect();
                
                System.out.println("Descarga finalizada correctamente");
            }else{
                cliente.disconnect();
                System.err.println("FTP ha rechazado la conexion");
                System.exit(1);
            }
        } catch (IOException ex) {
            Logger.getLogger(FTPMio.class.getName()).log(Level.SEVERE, null, ex);
        }

    }

}
