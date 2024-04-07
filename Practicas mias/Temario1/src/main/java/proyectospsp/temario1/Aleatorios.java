package proyectospsp.temario1;

import java.util.Random;

public class Aleatorios {
    public static void main(String[] args) {
        Random random = new Random();
        for (int i = 0; i < 50; i++) {
            int numero = random.nextInt(91);
            System.out.println(numero);
        }
    }
}
