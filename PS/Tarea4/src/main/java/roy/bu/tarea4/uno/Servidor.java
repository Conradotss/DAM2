package roy.bu.tarea4.uno;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Servidor {
    private static final int PORT = 2001;
    private static final int MAX_CLIENTS = 10;

    public static void main(String[] args) throws IOException {
        ExecutorService executor = Executors.newFixedThreadPool(MAX_CLIENTS);
        try (ServerSocket serverSocket = new ServerSocket(PORT)) {
            System.out.println("Servidor escuchando en el puerto " + PORT);
            int clientCount = 0;
            while (clientCount < MAX_CLIENTS) {
                Socket clientSocket = serverSocket.accept();
                System.out.println("Nuevo cliente conectado: " + clientSocket);
                executor.execute(new ClientHandler(clientSocket));
                clientCount++;
            }
        } finally {
            executor.shutdown();
        }
    }
}

class ClientHandler implements Runnable {
    private final Socket clientSocket;
    private final int secretNumber;

    public ClientHandler(Socket clientSocket) {
        this.clientSocket = clientSocket;
        this.secretNumber = (int) (Math.random() * 101);
    }

    @Override
    public void run() {
        try {
            System.out.println("Cliente " + clientSocket + " conectado");
            InputStreamReader in = new InputStreamReader(clientSocket.getInputStream());
            BufferedReader reader = new BufferedReader(in);
            PrintWriter writer = new PrintWriter(clientSocket.getOutputStream(), true);
            String input;
            while ((input = reader.readLine()) != null) {
                int number = Integer.parseInt(input);
                if (number == secretNumber) {
                    writer.println("¡Felicidades! Adivinaste el número secreto: " + secretNumber);
                    break;
                } else if (number < secretNumber) {
                    writer.println("El número es mayor");
                } else {
                    writer.println("El número es menor");
                }
            }
        } catch (IOException e) {
            System.out.println("Error en el cliente " + clientSocket);
            e.printStackTrace();
        } finally {
            try {
                clientSocket.close();
            } catch (IOException e) {
                System.out.println("Error al cerrar el socket del cliente " + clientSocket);
                e.printStackTrace();
            }
        }
    }
}
