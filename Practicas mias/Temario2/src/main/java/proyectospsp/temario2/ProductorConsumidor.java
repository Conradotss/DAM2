package proyectospsp.temario2;

import java.util.concurrent.ArrayBlockingQueue;

public class ProductorConsumidor {
    public static void main(String[] args) {
        // Crear un búfer compartido con una capacidad de 6 caracteres
        ArrayBlockingQueue<Character> buffer = new ArrayBlockingQueue<>(6);

        // Crear un hilo productor que almacena 15 caracteres en el búfer
        Thread productor = new Thread(() -> {
            for (int i = 0; i < 15; i++) {
                char c = (char) (i + 97); // Genera caracteres de la 'a' a la 'o'
                try {
                    buffer.put(c); // Pone el caracter en el búfer
                    System.out.println("Productor pone: " + c);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });

        // Crear un hilo consumidor que recoge 15 caracteres del búfer
        Thread consumidor = new Thread(() -> {
            for (int i = 0; i < 15; i++) {
                try {
                    char c = buffer.take(); // Toma el caracter del búfer
                    System.out.println("Consumidor toma: " + c);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });

        // Iniciar los hilos productor y consumidor
        productor.start();
        consumidor.start();
    }
}