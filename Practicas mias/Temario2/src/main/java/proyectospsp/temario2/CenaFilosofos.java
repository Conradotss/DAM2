package proyectospsp.temario2;

import java.util.concurrent.Semaphore;

public class CenaFilosofos {
    public static void main(String[] args) {
        // Crear un array de Semaphores para representar los palillos
        Semaphore[] palillos = new Semaphore[5];
        for (int i = 0; i < 5; i++) {
            palillos[i] = new Semaphore(1);
        }

        // Crear un array de Threads para representar a los filósofos
        Thread[] filosofos = new Thread[5];
        for (int i = 0; i < 5; i++) {
            filosofos[i] = new Thread(new Filosofo(i, palillos));
            filosofos[i].start();
        }
    }
}

class Filosofo implements Runnable {
    private int id;
    private Semaphore[] palillos;

    public Filosofo(int id, Semaphore[] palillos) {
        this.id = id;
        this.palillos = palillos;
    }

    private void pensar() throws InterruptedException {
        // El filósofo piensa
        Thread.sleep(1000);
    }

    private void comer() throws InterruptedException {
        // El filósofo come
        Thread.sleep(1000);
    }

    @Override
    public void run() {
        try {
            while (true) {
                pensar();
                palillos[id].acquire();
                palillos[(id + 1) % 5].acquire();
                comer();
                palillos[id].release();
                palillos[(id + 1) % 5].release();
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}








//public class Main {
//    public static void main(String[] args) {
//        String[] words = new String[7];
//        Random random = new Random();
//
//        Thread thread = new Thread(() -> {
//            for (int i = 0; i < 7; i++) {
//                try {
//                    Thread.sleep(200);
//                } catch (InterruptedException e) {
//                    e.printStackTrace();
//                }
//                words[i] = generateRandomWord(random);
//            }
//        });
//
//        thread.start();
//
//        try {
//            thread.join();
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
//
//        for (String word : words) {
//            System.out.println(word);
//        }
//    }
//
//    private static String generateRandomWord(Random random) {
//        String[] options = {"piedra", "papel", "tijera"};
//        return options[random.nextInt(options.length)];
//    }
//}