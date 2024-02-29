package roy.tarea6;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.Socket;
import java.util.Scanner;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Cliente {
    private final static String HOST = "localhost";
    private final static int PUERTO = 2024;
    private DataInputStream in;
    private DataOutputStream out;
    private Scanner sc;
    private Socket cliente;
    
    
    public Cliente(){
        try {
            cliente = new Socket(HOST, PUERTO);
            in = new DataInputStream(cliente.getInputStream());
            out = new DataOutputStream(cliente.getOutputStream());
            sc = new Scanner(System.in);
            String msj;
            
            while ((msj = in.readUTF())!=null) {                
                System.out.println(msj);
                String resp = sc.nextLine();
                out.writeUTF(resp);
            }
            
        } catch (IOException ex) {
            Logger.getLogger(Cliente.class.getName()).log(Level.SEVERE, null, ex);
        }finally{
            try {
                cliente.close();
            } catch (IOException ex) {
                Logger.getLogger(Cliente.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }
    
    public static void main(String[] args) {
        Cliente c1 = new Cliente();
    }
}
