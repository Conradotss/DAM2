package proyectospsp.temario3.ejercicio2;

import java.io.*;
import java.net.*;
import java.util.*;

public class Cliente {
    public static void main(String[] args) {
        try (Socket socket = new Socket("localhost", 1500); // Crea un socket y se conecta al servidor
             PrintWriter out = new PrintWriter(socket.getOutputStream(), true); // Crea un flujo de salida para enviar datos al servidor
             BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream())); // Crea un flujo de entrada para recibir datos del servidor
             Scanner scanner = new Scanner(System.in)) {

            System.out.print("Introduce el nombre del fichero: "); // Solicita al usuario el nombre del fichero
            String nombreFichero = scanner.nextLine(); // Lee el nombre del fichero que el usuario introduce
            out.println(nombreFichero); // Envía el nombre del fichero al servidor

            String fromServer;
            while ((fromServer = in.readLine()) != null) { // Lee la respuesta del servidor
                if (fromServer.equals("OK")) { // Comprueba si el servidor ha enviado un mensaje de confirmación
                    while ((fromServer = in.readLine()) != null) { // Lee el contenido del fichero que el servidor envía
                        System.out.println(fromServer); // Muestra el contenido del fichero por pantalla
                    }
                    break;
                } else {
                    System.out.println(fromServer); // Muestra un mensaje de error si el fichero no existe
                    break;
                }
            }
        } catch (UnknownHostException e) {
            System.out.println("No se pudo encontrar el host: " + e.getMessage()); // Muestra un mensaje de error si no se puede encontrar el host
        } catch (IOException e) {
            System.out.println("Error de E/S: " + e.getMessage()); // Muestra un mensaje de error si ocurre una excepción de E/S
        }
    }
}