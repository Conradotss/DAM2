package roy.Tarea4.tres;

import java.io.BufferedWriter;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.net.Socket;
import java.nio.file.FileSystem;
import java.nio.file.FileSystems;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.util.Scanner;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Cliente {
    private final static String HOST = "localhost";
    private final static int PUERTO = 1400;
    private DataInputStream in;
    private DataOutputStream out;
    private Scanner sc;

    public Cliente() {
        try {
            Socket socket = new Socket(HOST, PUERTO);
            in = new DataInputStream(socket.getInputStream());
            out = new DataOutputStream(socket.getOutputStream());
            sc = new Scanner(System.in);
            String msj;
            while((msj = in.readUTF())!= null){
                System.out.println(msj);
                String ruta = sc.nextLine();
                out.writeUTF(ruta);
            }
            
//            "C:\\Users\\roica\\Desktop\\texto.txt"
                
            socket.close();
            
        } catch (IOException ex) {
            ex.printStackTrace();
        }
        
    }
    
    public static void main(String[] args) {
        new Cliente();
    }
    
}

