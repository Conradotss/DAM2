package examenpsp.ejercicio1;

import java.util.Scanner;

public class Usuario {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        PalabraAleatoria pa = new PalabraAleatoria();
        System.out.println("PREPARADOS?");
        if(sc.nextLine().equals("si")){
            System.out.println("JUGADOR 1");
            pa.palabraAleatoria();
        }else{
            System.out.println("Has salido del jhuego");
        }
        System.out.println("PREPARADOS 2?");
        if(sc.nextLine().equals("si")){
            System.out.println("JUGADOR 2");
            pa.palabraAleatoria();
        }else{
            System.out.println("has salido del juego");
        }
    }
}
