package examenpsp.ejercicio1;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class PalabraAleatoria {

    public void palabraAleatoria(){
        Random random = new Random();
        String[] palabras = new String[3];
        String a1 = "piedra";
        String a2 = "papel";
        String a3 = "tijera";
        palabras[0] = a1;
        palabras[1] = a2;
        palabras[2] = a3;
        int n = random.nextInt(2);
        String palabraFinal = palabras[n].toString();
        System.out.println(palabraFinal);
        }
    
    
    public static void main(String[] args) {
        
    }
}
