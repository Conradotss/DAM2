package roy.tarea.psp02.ejercicio1;

import java.util.logging.Level;
import java.util.logging.Logger;

public class HiloProductor implements Runnable{

    private TareaPSP02_Roy TareaPSP02_Roy;

    public HiloProductor(TareaPSP02_Roy TareaPSP02_Roy) {
        this.TareaPSP02_Roy = TareaPSP02_Roy;
    }
    
    
    @Override
    public void run() {
           
        for (int i = 0; i < 15; i++) {
            try {
                TareaPSP02_Roy.incrementar((char) ('A' + i));
                Thread.sleep(1000);
            } catch (InterruptedException ex) {
                ex.printStackTrace();
            }
        }

    }
    
}
