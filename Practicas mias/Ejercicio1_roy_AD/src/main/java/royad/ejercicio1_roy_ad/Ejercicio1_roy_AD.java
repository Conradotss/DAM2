package royad.ejercicio1_roy_ad;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;

public class Ejercicio1_roy_AD {

    public static ArrayList<Path> ubicacionesRelativas(Path directorioBase, String nombreArchivo){
        Path rutaCompleta = directorioBase.resolve(nombreArchivo);
        System.out.println("imprimiendo ruta absoluta: "+rutaCompleta);
        Path rutaRelativa = directorioBase.relativize(rutaCompleta);
        System.out.println("imprimiendo ruta relativa: " + rutaRelativa);
        ArrayList<Path> rutasRelativas = new ArrayList<>();
        rutasRelativas.add(rutaRelativa);
        for (Path rutasRelativa : rutasRelativas) {
            System.out.println("imprimiendo ruta");
            System.out.println(rutasRelativa);
        }
        return rutasRelativas;
    }
    
    public static void main(String[] args) {
        Path direcotioBase = Paths.get("C:\\Users\\roica_7skl022\\Desktop\\Finanzas");
        String nombreArchivo = "Documento.txt";
        ubicacionesRelativas(direcotioBase, nombreArchivo);
    }
}
