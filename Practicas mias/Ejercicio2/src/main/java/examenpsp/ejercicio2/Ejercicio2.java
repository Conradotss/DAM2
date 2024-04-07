package examenpsp.ejercicio2;

import java.time.Duration;
import java.util.Random;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Ejercicio2 {

    public static void main(String[] args) {
        ArrayBlockingQueue<String> word = new ArrayBlockingQueue<>(7);
        Random random = new Random();

        Thread thread = new Thread(() -> {
            while(true) {
                try {
                    Thread.sleep(200);
                    word.put(generateRandomWord(random));
                    System.out.println("Palabra añadida: " + generateRandomWord(random).toString());

                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });

        Thread thread2 = new Thread(() -> {
            while(true) {
                try {
                int r = random.nextInt(299);
                Thread.sleep(r);
                if (!word.isEmpty()) {
                    String palabraTomada = word.take();
                    System.out.println("La palabra tomada: " + palabraTomada);
                } else {
                    System.out.println("ME aburro");
                }

            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            }
            
        });

        thread.start();
        thread2.start();
//        try {
//            thread.join();
//            thread2.join();
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }

        
    }

    private static String generateRandomWord(Random random) {
        String[] options = {"piedra", "papel", "tijera"};
        return options[random.nextInt(options.length)];
    }
}
