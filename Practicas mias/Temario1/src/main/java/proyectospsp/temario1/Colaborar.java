package proyectospsp.temario1;

import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

public class Colaborar {
    public static void main(String[] args) {
        // Bucle para lanzar 10 instancias de la aplicación "lenguaje"
        for (int i = 1; i <= 10; i++) {
            int numeroPalabras = i * 10;
            String nombreFichero = "ficheroParcial" + i + ".txt";
            // Construir el comando para lanzar la aplicación "lenguaje" con el número de palabras y el nombre del fichero
            String[] comando = {"java", "-jar", "lenguaje", String.valueOf(numeroPalabras), nombreFichero};
            try {
                // Crear un nuevo proceso para ejecutar la aplicación "lenguaje"
                ProcessBuilder pb = new ProcessBuilder(comando);
                pb.inheritIO();
                Process p = pb.start();
                p.waitFor();
            } catch (IOException | InterruptedException e) {
                e.printStackTrace();
            }
        }

        // Combinar los ficheros parciales en un gran fichero final
        try (PrintWriter writer = new PrintWriter(new FileWriter("granFichero.txt"))) {
            for (int i = 1; i <= 10; i++) {
                String nombreFicheroParcial = "ficheroParcial" + i + ".txt";
                // Leer las líneas del fichero parcial y escribirlas en el gran fichero final
                List<String> lineas = Files.readAllLines(Paths.get(nombreFicheroParcial));
                for (String linea : lineas) {
                    writer.println(linea);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
