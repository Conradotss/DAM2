package roy.tarea.psp02.ejercicio1;

import java.util.logging.Level;
import java.util.logging.Logger;

public class HiloConsumidor implements Runnable{

    private TareaPSP02_Roy TareaPSP02_Roy;

    public HiloConsumidor(TareaPSP02_Roy TareaPSP02_Roy) {
        this.TareaPSP02_Roy = TareaPSP02_Roy;
    }
    
    
    
    @Override
    public void run() {
        for (int i = 0; i < 15; i++) {
            try {
                TareaPSP02_Roy.decrementar();
                Thread.sleep(1000);
            } catch (InterruptedException ex) {
                ex.printStackTrace();
            }
        }
    }
    
}
