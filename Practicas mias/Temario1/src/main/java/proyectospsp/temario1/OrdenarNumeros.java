package proyectospsp.temario1;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class OrdenarNumeros {

    public static void main(String[] args) {
        Scanner escaner = new Scanner(System.in);
        List<Integer> numeros = new ArrayList<>();
        System.out.println("Ingrese los numeros que quiera, para finalizar escribir papaya");
        while(escaner.hasNextInt()){
            numeros.add(escaner.nextInt());
        }
        Collections.sort(numeros);
        System.out.println("Numeros ordenados");
        for (Integer numero : numeros) {
            System.out.println(numero);
            
        }
    }
}
