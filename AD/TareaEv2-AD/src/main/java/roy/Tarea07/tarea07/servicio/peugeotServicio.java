package roy.Tarea07.tarea07.servicio;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import roy.Tarea07.tarea07.dao.peugeotI;
import roy.Tarea07.tarea07.dominio.peugeot;

@Service
public class peugeotServicio implements peugeotServicioI{

    @Autowired
    private peugeotI peugeotI;
    
    @Override
    public List<peugeot> listaPeugeot() {
                return (List<peugeot>) peugeotI.findAll();
    }

    @Override
    public void guardar(peugeot peugeot) {
        peugeotI.save(peugeot);
    }

    @Override
    public void eliminar(peugeot peugeot) {
        peugeotI.delete(peugeot);
    }

    @Override
    public peugeot buscarPeugeot(peugeot peugeot) {
        return peugeotI.findById(peugeot.getIdpeugeot()).orElse(null);
    }
    
}
