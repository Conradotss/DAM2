package roy.tarea.psp02.ejercicio1;

public class TareaPSP02_Roy {

    private char[] datos;
    private int tamaño;
    private int contar;

    public TareaPSP02_Roy(int tamaño) {
        this.tamaño = tamaño;
        this.datos = new char[tamaño];
        this.contar = 0;
    }
    
    public synchronized void incrementar(char a) throws InterruptedException{
        while(contar == tamaño){
            wait();
        }
        
        datos[contar] = a;
        contar++;
        System.out.println("EL hilo productor añadió " + a);
        notify();
    } 
    
    public synchronized void decrementar() throws InterruptedException {
        while(contar == 0){
            wait();
        }
        
        char valorConsumido = datos[contar - 1];
        contar--;
        System.out.println("El hilo consumidor consumio " + valorConsumido);
        notify();
    }
    
    public static void main(String[] args) {
        TareaPSP02_Roy tareaPSP02_Roy = new TareaPSP02_Roy(6);
        
        Thread productorHilo =  new Thread(new HiloProductor(tareaPSP02_Roy));
        Thread consumidorHilo =  new Thread(new HiloConsumidor(tareaPSP02_Roy));
        
        productorHilo.start();
        consumidorHilo.start();
        
    }
}
