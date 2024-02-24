package roy.Tarea4.pruebas;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.logging.Level;
import java.util.logging.Logger;

public class extra {
    //Clase que use para experimentar
    public static void main(String[] args) {
        String ruta = "C:\\Users\\roica\\Desktop\\texto.txt";
        
        try {
            StringBuilder contenido = new StringBuilder();
            Files.lines(Paths.get(ruta)).forEach(contenido::append);
            System.out.println(contenido.toString());
        } catch (IOException ex) {
            Logger.getLogger(extra.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
