package Thread;

public class ThreadPrueba extends Thread {

    private volatile boolean running = true;

    @Override
    public void run() {

        while (running) {
            // Realiza alguna tarea...
            long fin = System.currentTimeMillis() + 1000;
            while (running && System.currentTimeMillis() < fin) {
                System.out.println("Encendido");
            }
            try {
                System.out.println("Apagado");
                // Haga que el hilo "duerma" durante 1 segundo antes de la siguiente iteración
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    public void detener() {
        running = false;
    }
}