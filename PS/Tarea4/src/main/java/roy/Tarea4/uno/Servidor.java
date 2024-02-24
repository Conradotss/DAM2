package roy.Tarea4.uno;

import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.DataOutput;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Servidor {
    private ServerSocket serverSocket;
    private final static int PUERTO = 2000;
    private final static int MAX_CLIENTES = 10;

    public Servidor() {
        ExecutorService executor = Executors.newFixedThreadPool(MAX_CLIENTES);
        try {
            serverSocket = new ServerSocket(PUERTO);
            System.out.println("Servidor escuchando por el puerto: " + PUERTO);
            int clientesAtendidos=0;
            while(clientesAtendidos<MAX_CLIENTES){
                Socket clienteSocket = serverSocket.accept();
                System.out.println("Nuevo cliente aceptado:" + clienteSocket);
                executor.execute(new clienteHandler(clienteSocket));
                clientesAtendidos++;
                if(clienteHandler.finjuego()){
                    clienteSocket.close();
                    serverSocket.close();
                }
            }
            
        } catch (IOException ex) {
            ex.printStackTrace();
        }finally{
            executor.shutdown();
        }
    }

    private static class clienteHandler implements Runnable {

      
        
        private Socket clienteSocket;
        private int numeroSecreto;
        private static boolean fin=false;

        public clienteHandler(Socket clienteSocket) {
            this.clienteSocket= clienteSocket;
            numeroSecreto = (int) (Math.random()*101);
        }

        @Override
        public void run() {
            System.out.println("Cliente " + clienteSocket + " se ha conectado");
            try {
                DataInputStream in = new DataInputStream(clienteSocket.getInputStream());
                DataOutputStream out = new DataOutputStream(clienteSocket.getOutputStream());
                String numero;
                out.writeUTF("Te has conectado ocn el servidor correctamente \n"
                        + "escribe un numero");
                while((numero = in.readUTF())!= null){
                    int n = Integer.parseInt(numero);
                    if(n == numeroSecreto){
                        fin = true;
                        out.writeUTF("Felicidades has acertado el numero \n"
                                + "Se ha terminado el juego, te has desconectado");
                        break;
                    }else if(n < numeroSecreto){
                        out.writeUTF("el numero es mayor");
                    }else{
                        out.writeUTF("El numero es menor");
                    }
                }
            } catch (IOException ex) {
                ex.printStackTrace();
            }
            
        }
        
          private static boolean finjuego() {
            if(fin){
                return true;
            }
            return false;
        }
    }
    
    public static void main(String[] args) {
        new Servidor();
        
    }
}
