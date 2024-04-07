package proyectospsp.temario1;

import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Random;

public class Lenguaje {

    public static void main(String[] args) {
        if (args.length != 3) {
            System.out.println("Uso: java -jar lenguaje <número de conjuntos> <fichero de salida>");
            return;
        }
        
        int conjuntoNumeros = Integer.parseInt(args[1]);
        String nombreFichero = args[2];
        try(PrintWriter escritor = new PrintWriter(new FileWriter(nombreFichero))){
            Random random = new Random();
            for (int i = 0; i < conjuntoNumeros; i++) {
                String conjunto = generarConjuntoAleatorio(random);
                escritor.println(conjunto);
            }
        }catch(IOException e){
            e.printStackTrace();
        }
    }
    
    private static String generarConjuntoAleatorio(Random random){
        String letras = "abcdefghijklmnopqrstuvwxyz";   
        StringBuilder conjunto = new StringBuilder();
        for (int i = 0; i < 10; i++) {
            char letra = letras.charAt(random.nextInt(letras.length()));
            conjunto.append(letra);
        }
        return conjunto.toString();
    }
}
