package roy.Tarea07.tarea07.servicio;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import roy.Tarea07.tarea07.dao.mercedesI;
import roy.Tarea07.tarea07.dominio.mercedes;

@Service
public class mercedesServicio implements mercedesServicioI{

    @Autowired
    private mercedesI mercedesI;
    
    @Override
    public List<mercedes> listaMercedes() {
        return (List<mercedes>) mercedesI.findAll();
    }

    @Override
    public void guardar(mercedes mercedes) {
        mercedesI.save(mercedes);
    }

    @Override
    public void eliminar(mercedes mercedes) {
        mercedesI.delete(mercedes);
    }

    @Override
    public mercedes buscarMercedes(mercedes mercedes) {
         return mercedesI.findById(mercedes.getIdmercedes()).orElse(null);
    }
    
}
