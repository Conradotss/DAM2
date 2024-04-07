package roy.tarea.psp02.ejercicio2;

import java.util.concurrent.Semaphore;

public class CenaFilosofos implements Runnable {

    private Semaphore palilloDerecho;
    private Semaphore palilloIzquierdo;
    private int numeroFilosofos;

    public CenaFilosofos(Semaphore palilloDerecho, Semaphore palilloIzquierdo, int numeroFilosofos) {
        this.palilloDerecho = palilloDerecho;
        this.palilloIzquierdo = palilloIzquierdo;
        this.numeroFilosofos = numeroFilosofos;
    }

    private void pensando() {
        System.out.println("El filósofo " + numeroFilosofos + " está pensando");
        try {
            Thread.sleep(1000);
        } catch (InterruptedException ex) {
            ex.printStackTrace();
        }
    }

    private void comiendo() {
        System.out.println("El filósofo " + numeroFilosofos + " está comiendo");
        try {
            Thread.sleep(1000);
        } catch (InterruptedException ex) {
            ex.printStackTrace();
        }
    }

    @Override
    public void run() {
        while (true) {
            pensando();
            try {
                palilloDerecho.acquire();
                System.out.println("El filósofo " + numeroFilosofos + " tiene el palillo derecho");
                palilloIzquierdo.acquire();
                System.out.println("El filósofo " + numeroFilosofos + " tiene el palillo izquierdo");
                comiendo();
                palilloDerecho.release();
                System.out.println("El filósofo " + numeroFilosofos + " ha soltado el palillo derecho");
                palilloIzquierdo.release();
                System.out.println("El filósofo " + numeroFilosofos + " ha soltado el palillo izquierdo");

            } catch (InterruptedException ex) {
                ex.printStackTrace();
            }
        }
    }

    public static void main(String[] args) throws InterruptedException {
        int numerohilos = 5;

        Semaphore[] palillos = new Semaphore[numerohilos];
        for (int i = 0; i < numerohilos; i++) {
            palillos[i] = new Semaphore(1);
        }

        Thread[] filosofos = new Thread[numerohilos];
        for (int i = 0; i < numerohilos; i++) {
            filosofos[i] = new Thread(new CenaFilosofos(palillos[i], palillos[(i + 1) % numerohilos], i));
            filosofos[i].start();
        }
        
        Thread.sleep(5000);

    }
}
