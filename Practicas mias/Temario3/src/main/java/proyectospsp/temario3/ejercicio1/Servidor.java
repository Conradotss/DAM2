package proyectospsp.temario3.ejercicio1;

import java.io.*;
import java.net.*;
import java.util.*;

public class Servidor {
    public static void main(String[] args) {
        try (ServerSocket serverSocket = new ServerSocket(2000)) {
            System.out.println("Esperando conexión de cliente...");
            Socket clientSocket = serverSocket.accept();
            System.out.println("Cliente conectado");

            Random random = new Random();
            int numeroSecreto = random.nextInt(101);

            PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);
            BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));

            String inputLine;
            while ((inputLine = in.readLine()) != null) {
                System.out.println("Cliente: " + inputLine);
                int numeroCliente = Integer.parseInt(inputLine);
                if (numeroCliente < numeroSecreto) {
                    out.println("El número secreto es mayor");
                } else if (numeroCliente > numeroSecreto) {
                    out.println("El número secreto es menor");
                } else {
                    out.println("¡Felicidades! Has adivinado el número secreto");
                    break;
                }
            }
        } catch (IOException e) {
            System.out.println("Error en el servidor: " + e.getMessage());
        }
    }
}