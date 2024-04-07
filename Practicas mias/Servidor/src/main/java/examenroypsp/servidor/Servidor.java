package examenroypsp.servidor;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Servidor {

    private static final int MAXIMO_CLIENTES = 1;

    public static void main(String[] args) {
        try {
            ServerSocket servidor = new ServerSocket(8512);
            imprimeDisponible();
            Socket cliente;
            ExecutorService executor = Executors.newFixedThreadPool(MAXIMO_CLIENTES);

            
                cliente = servidor.accept();
                System.out.println("Cliente entrante " + cliente.getInetAddress());
                executor.execute(new ClienteHandler(cliente));

                System.out.println("Cliente atendido");
            
              

        } catch (IOException ex) {
            ex.printStackTrace();
        }finally{
            
        }
    }

    private static void imprimeDisponible() {
        System.out.println("El Servidor WEB se está ejecutando y permanece a la "
                + "escucha por el puerto 8080. Escribe en la barra de direcciones "
                + "de tu explorador preferido:\n http://localhost:8080\npara "
                + "solicitar la página de bienvenida \n\nhttp://"
                + "localhost:8066/q\n para simular un error");
    }

    public static class ClienteHandler implements Runnable {

        private Socket cliente;
        private String peticion;
        private String html;

        public ClienteHandler(Socket cliente) {
            this.cliente = cliente;
        }

        @Override
        public void run() {
            System.out.println("cliente conectado");
            try {
                InputStreamReader in = new InputStreamReader(cliente.getInputStream());
                PrintWriter pw = new PrintWriter(cliente.getOutputStream(), true);
                BufferedReader br = new BufferedReader(in);
                peticion = br.readLine();
                peticion = peticion.replaceAll(" ", "");

                if (peticion.startsWith("GET")) {
                    peticion = peticion.substring(3, peticion.lastIndexOf("HTTP"));
                    if (peticion.length() == 0 || peticion.equals("/")) {
                        html = Paginas.html_index;
                        pw.println(Mensajes.lineaInicial_OK);
                        pw.println(Paginas.primeraCabecera);
                        pw.println("Content-Lenght: " + html.length() + 1);
                        pw.println("\n");
                        pw.println(html);
                    } else {
                        html = Paginas.html_noEncontrado;
                        pw.println(Mensajes.lineaInicial_NotFound);
                        pw.println(Paginas.primeraCabecera);
                        pw.println("Content-Lenght: " + html.length() + 1);
                        pw.println("\n");
                        pw.println(html);
                    }
                }

            } catch (IOException ex) {
                Logger.getLogger(Servidor.class.getName()).log(Level.SEVERE, null, ex);
            }
            
            try {
                cliente.close();
            } catch (IOException ex) {
                Logger.getLogger(Servidor.class.getName()).log(Level.SEVERE, null, ex);
            }

        }
    }
}
