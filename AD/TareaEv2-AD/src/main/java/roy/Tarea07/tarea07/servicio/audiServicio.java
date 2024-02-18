package roy.Tarea07.tarea07.servicio;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import roy.Tarea07.tarea07.dao.audiI;
import roy.Tarea07.tarea07.dominio.audi;

@Service
public class audiServicio implements audiServicioI {
    
    @Autowired
    private audiI audiI;

    @Override
    @Transactional(readOnly = true)
    public List<audi> listaAudi() {
        return (List<audi>) audiI.findAll();
    }

    @Override
    public void guardar(audi audi) {
        audiI.save(audi);
    }

    @Override
    public void eliminar(audi audi) {
        audiI.delete(audi);
    }

    @Override
    public audi buscarAudi(audi audi) {
        return audiI.findById(audi.getIdaudi()).orElse(null);
    }
}
