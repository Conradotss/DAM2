package servidorhttp;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.TimeZone;
import java.util.logging.Level;
import java.util.logging.Logger;

public class ServidorHTTP {

    public static void main(String[] args) {
        try {
            ServerSocket seridor = new ServerSocket(8065);
            imprimeDisponible();
            Socket cliente;
            
            while (true) {                
                cliente = seridor.accept();
                System.out.println("Atendiendo al cliente ");
//                procesaPeticion(cliente);
                new HiloDespachador(cliente);
                cliente.close();
                System.out.println("Cliente atendido");
            }
            
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }

    private static void procesaPeticion(Socket cliente) {
        String peticion;
        String html;
        
        try {
            InputStreamReader in = new InputStreamReader(cliente.getInputStream());
            BufferedReader br = new BufferedReader(in);
            PrintWriter pw = new PrintWriter(cliente.getOutputStream(), true);
            peticion = br.readLine();
            peticion = peticion.replaceAll(" ", "");
            
            if(peticion.startsWith("GET")){
                peticion = peticion.substring(3, peticion.lastIndexOf("HTTP"));
                if(peticion.length() == 0 || peticion.equals("/")){
                    html = Paginas.html_index;
                    pw.println(Mensajes.lineaInicial_OK);
                    pw.println(Paginas.primeraCabecera);
                    pw.println("Content-Lenght: " + html.length() + 1);
                    pw.println("Date: " + mostrarHora());
                    pw.println("\n");
                    pw.println(html);
                }else if(peticion.equals("/quijote")){
                    html = Paginas.html_quijote;
                    pw.println(Mensajes.lineaInicial_OK);
                    pw.println(Paginas.primeraCabecera);
                    pw.println("Content-Lenght: " + html.length() + 1);
                    pw.println("Date: " + mostrarHora());
                    pw.println("\n");
                    pw.println(html);
                }else{
                    html = Paginas.html_noEncontrado;
                    pw.println(Mensajes.lineaInicial_NotFound);
                    pw.println(Paginas.primeraCabecera);
                    pw.println("Content-Lenght: " + html.length() + 1);
                    pw.println("Date: " + mostrarHora());
                    pw.println("\n");
                    pw.println(html);
                }
            }
            
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }

    private static void imprimeDisponible() {
        System.out.println("El Servidor WEB se está ejecutando y permanece a la "
            + "escucha por el puerto 8066.\nEscribe en la barra de direcciones "
            + "de tu explorador preferido:\n\nhttp://localhost:8066\npara "
            + "solicitar la página de bienvenida\n\nhttp://localhost:8066/"
            + "quijote\n para solicitar una página del Quijote,\n\nhttp://"
            + "localhost:8066/q\n para simular un error");
    }

    private static String mostrarHora() {
            SimpleDateFormat sdf = new SimpleDateFormat("EEE, dd MMM yyyy HH:mm:ss zzz", Locale.US);
        sdf.setTimeZone(TimeZone.getTimeZone("GMT"));
        return sdf.format(new Date());
    }
    
    public static class HiloDespachador {
        
        private Socket cliente;
        private String peticion;
        private String html;
        
        public HiloDespachador(Socket cliente){
            this.cliente=cliente;
            try {
            InputStreamReader in = new InputStreamReader(cliente.getInputStream());
            BufferedReader br = new BufferedReader(in);
            PrintWriter pw = new PrintWriter(cliente.getOutputStream(), true);
            peticion = br.readLine();
            peticion = peticion.replaceAll(" ", "");
            
            if(peticion.startsWith("GET")){
                peticion = peticion.substring(3, peticion.lastIndexOf("HTTP"));
                if(peticion.length() == 0 || peticion.equals("/")){
                    html = Paginas.html_index;
                    pw.println(Mensajes.lineaInicial_OK);
                    pw.println(Paginas.primeraCabecera);
                    pw.println("Content-Lenght: " + html.length() + 1);
                    pw.println("\n");
                    pw.println(html);
                }else if(peticion.equals("/quijote")){
                    html = Paginas.html_quijote;
                    pw.println(Mensajes.lineaInicial_OK);
                    pw.println(Paginas.primeraCabecera);
                    pw.println("Content-Lenght: " + html.length() + 1);
                    pw.println("\n");
                    pw.println(html);
                }else{
                    html = Paginas.html_noEncontrado;
                    pw.println(Mensajes.lineaInicial_NotFound);
                    pw.println(Paginas.primeraCabecera);
                    pw.println("Content-Lenght: " + html.length() + 1);
                    pw.println("\n");
                    pw.println(html);
                }
            }
            
        } catch (IOException ex) {
            ex.printStackTrace();
        }
            
        }

        
    }
    
    
    
}
