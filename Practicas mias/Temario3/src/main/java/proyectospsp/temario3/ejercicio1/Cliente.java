package proyectospsp.temario3.ejercicio1;

import java.io.*;
import java.net.*;
import java.util.*;

public class Cliente {
    public static void main(String[] args) {
        try (Socket socket = new Socket("localhost", 2000);
             PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
             BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
             Scanner scanner = new Scanner(System.in)) {

            String fromServer;
            String fromUser;

            while ((fromServer = in.readLine()) != null) {
                System.out.println("Servidor: " + fromServer);
                if (fromServer.equals("¡Felicidades! Has adivinado el número secreto")) {
                    break;
                }
                fromUser = scanner.nextLine();
                out.println(fromUser);
            }
        } catch (UnknownHostException e) {
            System.out.println("No se pudo encontrar el host: " + e.getMessage());
        } catch (IOException e) {
            System.out.println("Error de E/S: " + e.getMessage());
        }
    }
}