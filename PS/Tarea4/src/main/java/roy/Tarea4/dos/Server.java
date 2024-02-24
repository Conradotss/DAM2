package roy.Tarea4.dos;

import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Server {

    private ServerSocket serverSocket;
    private final static int PUERTO = 1400;
    private DataInputStream in;
    private DataOutputStream out;

    public Server() {
        ExecutorService ex = Executors.newFixedThreadPool(10);
        try {
            serverSocket = new ServerSocket(PUERTO);
            System.out.println("Escuchando por le puerto " + PUERTO);
            int cli = 0;
            while (cli < 10) {
                Socket cliente = serverSocket.accept();
                System.out.println("Nuevo cliente conectado");
                ex.execute(new clienteHandler(cliente));
                cli++;
            }

        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            ex.shutdown();
        }

    }

    private static class clienteHandler implements Runnable {

        private Socket clienteS;

        public clienteHandler(Socket clienteS) {
            this.clienteS = clienteS;
        }

        @Override
        public void run() {
            System.out.println("Cliente " + clienteS + " se ha unido");

            try {
                DataInputStream in = new DataInputStream(clienteS.getInputStream());
                DataOutputStream out = new DataOutputStream(clienteS.getOutputStream());
                out.writeUTF("Te has conectado al servidor correctamente \n"
                        + "Introduce la ruta que quieras visualizar");
                String ruta = in.readUTF();
                BufferedReader br = new BufferedReader(new FileReader(ruta));
                String lectura;
                String archivo = "";
                while ((lectura = br.readLine()) != null) {
                    archivo += lectura + "\n";
                }
                out.writeUTF(archivo);
            } catch (IOException ex) {
                ex.printStackTrace();
            }

        }
    }

    public static void main(String[] args) {
        new Server();
    }
}
