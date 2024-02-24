package roy.tarea6;

import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Scanner;
import java.util.logging.FileHandler;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.logging.SimpleFormatter;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Servidor {

    private final static int PUERTO = 2024;
    private ServerSocket serverSocket;
    DataInputStream in;
    DataOutputStream out;
    Scanner sc;
    String nombre = new String();
    Socket cliente;

    public Servidor() {
        try {
            serverSocket = new ServerSocket(PUERTO);
            System.out.println("Servidor levantado en el puerto " + PUERTO);
            System.out.println("Registrando la actividad....");
            registrar();
            cliente = serverSocket.accept();
            System.out.println("Conectado nuevo cliente " + cliente.getInetAddress().getHostName());

            out = new DataOutputStream(cliente.getOutputStream());

            if (login(cliente)) {
                buscaFichero(cliente);
            } else {
                out.writeUTF("Se ha producido un error al ingresar el nombre de usuario");
            }
        } catch (IOException ex) {
            Logger.getLogger(Servidor.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            try {
                out.writeUTF("La conxion con el servidor a finalizado, hasta pronto");
                cliente.close();
                serverSocket.close();
            } catch (IOException ex) {
                Logger.getLogger(Servidor.class.getName()).log(Level.SEVERE, null, ex);
            }

        }

    }

    public static void main(String[] args) {
        Servidor s1 = new Servidor();
    }

    private boolean login(Socket cliente) {
        try {
            in = new DataInputStream(cliente.getInputStream());
            out = new DataOutputStream(cliente.getOutputStream());
            sc = new Scanner(System.in);
            Pattern pat = Pattern.compile("[a-z]{8}");
            Matcher mat = null;

            while (true) {
                out.writeUTF("Bienvenid@ usuari@ \n"
                        + "Por favor ingrese un nombre de usuario \n"
                        + "**SEGUIR INSTRUCCIONES** \n"
                        + "-Longitud maxima de 8 caracteres \n"
                        + "-Nombre completo en minisculas");
                nombre = in.readUTF();
                mat = pat.matcher(nombre);
                if (mat.find()) {
                    return true;
                }
            }

        } catch (IOException ex) {
            Logger.getLogger(Servidor.class.getName()).log(Level.SEVERE, null, ex);
        }
        return false;
    }

    private void buscaFichero(Socket cliente) {
        try {
            in = new DataInputStream(cliente.getInputStream());
            out = new DataOutputStream(cliente.getOutputStream());
            sc = new Scanner(System.in);
            Pattern pat = Pattern.compile("[a-z0-9]{8}.[a-z]{3}");
            Matcher mt;
            out.writeUTF("Bienvenido " + nombre + "\n" +
                    "Introduce la ruta del archivo que quieras visualizar \n"
                    + "**Instrucciones** \n"
                    + "-El nombre del archivo debe ser de 8 caracteres \n"
                    + "-La extension del archivo debe ser de 3 caracteres");
            String ruta = in.readUTF();
            mt = pat.matcher(ruta);
            
            if(mt.find()){
                BufferedReader br = new BufferedReader(new FileReader(ruta));
            String lectura;
            String archivo = "";
            while ((lectura = br.readLine()) != null) {
                archivo += lectura + "\n";
            }
            out.writeUTF(archivo);
            }else{
                out.writeUTF("La ruta no contiene los parametros establecidos");
            }
            
            
            
        } catch (IOException ex) {
            Logger.getLogger(Servidor.class.getName()).log(Level.SEVERE, null, ex);
        }

    }

    private void registrar() {
            Logger logger = Logger.getLogger("Registros");
            FileHandler fh;
            
        try {
            fh = new FileHandler("C:\\Users\\roica\\Desktop\\registros.log", true);
            
            logger.addHandler(fh);
            logger.setLevel(Level.ALL);
            SimpleFormatter sf= new SimpleFormatter();
            fh.setFormatter(sf);
            
        } catch (IOException ex) {
            Logger.getLogger(Servidor.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SecurityException ex) {
            Logger.getLogger(Servidor.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
