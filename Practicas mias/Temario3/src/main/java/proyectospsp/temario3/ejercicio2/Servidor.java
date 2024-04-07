package proyectospsp.temario3.ejercicio2;

import java.net.*;
import java.io.*;

public class Servidor {
    public static void main(String[] args) {
        try (ServerSocket serverSocket = new ServerSocket(1500)) {
            System.out.println("Esperando conexión de cliente..."); // Espera a que el cliente se conecte
            Socket clientSocket = serverSocket.accept(); // Acepta la conexión del cliente
            System.out.println("Cliente conectado"); // Muestra un mensaje indicando que el cliente se ha conectado

            PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true); // Crea un flujo de salida para enviar datos al cliente
            BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream())); // Crea un flujo de entrada para recibir datos del cliente

            String nombreFichero = in.readLine(); // Lee el nombre del fichero que el cliente solicita
            File fichero = new File(nombreFichero); // Crea un objeto File con el nombre del fichero
            if (fichero.exists()) { // Comprueba si el fichero existe
                out.println("OK"); // Envía al cliente un mensaje indicando que el fichero existe
                try (BufferedReader fileReader = new BufferedReader(new FileReader(fichero))) { // Crea un flujo de lectura para leer el contenido del fichero
                    String line;
                    while ((line = fileReader.readLine()) != null) { // Lee cada línea del fichero
                        out.println(line); // Envía la línea al cliente
                    }
                }
            } else {
                out.println("ERROR: El fichero no existe"); // Envía al cliente un mensaje de error indicando que el fichero no existe
            }
        } catch (IOException e) {
            System.out.println("Error en el servidor: " + e.getMessage()); // Muestra un mensaje de error si ocurre una excepción de E/S
        }
    }
}