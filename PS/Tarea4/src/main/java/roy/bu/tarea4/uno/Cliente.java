package roy.bu.tarea4.uno;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;

public class Cliente {
    public static void main(String[] args) throws IOException {
        try (Socket socket = new Socket("localhost", 2001)) {
            System.out.println("Conectado al servidor");
            InputStreamReader in = new InputStreamReader(socket.getInputStream());
            BufferedReader reader = new BufferedReader(in);
            PrintWriter writer = new PrintWriter(socket.getOutputStream(), true);
            BufferedReader consoleReader = new BufferedReader(new InputStreamReader(System.in));
            String input;
            while ((input = consoleReader.readLine()) != null) {
                writer.println(input);
                System.out.println(reader.readLine());
            }
        } catch (IOException e) {
            System.out.println("Error en el cliente");
            e.printStackTrace();
        }
    }
}
