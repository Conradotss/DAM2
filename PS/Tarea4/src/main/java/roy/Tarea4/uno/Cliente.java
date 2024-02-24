package roy.Tarea4.uno;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.Socket;
import java.util.Scanner;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Cliente {
    private final static String HOST = "localhost";
    private final static int PUERTO = 2000;
    private DataInputStream in;
    private DataOutputStream out;
    private Scanner sc;

    public Cliente() {
        try {
            Socket cliente = new Socket(HOST, PUERTO);
            in = new DataInputStream(cliente.getInputStream());
            out = new DataOutputStream(cliente.getOutputStream());
            sc = new Scanner(System.in);
            String msj;
            int numero;
            while((msj = in.readUTF())!=null){
                System.out.println(msj);
                numero = sc.nextInt();
                out.writeUTF(numero + "");
            }
            
        } catch (IOException ex) {
            ex.printStackTrace();
        }
        
    }
    
    public static void main(String[] args) {
        new Cliente();
        new Cliente();
        new Cliente();
        
    }
    
}
