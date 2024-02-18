package roy.Tarea07.tarea07.servicio;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import roy.Tarea07.tarea07.dao.bmwI;
import roy.Tarea07.tarea07.dominio.bmw;

@Service
public class bmwServicio implements bmwServicioI{
    
    @Autowired
    private bmwI bmwI;

    @Override
    public void guardar(bmw bmw) {
        bmwI.save(bmw);
    }

    @Override
    public void eliminar(bmw bmw) {
        bmwI.delete(bmw);
    }

    @Override
    @Transactional(readOnly = true)
    public List<bmw> listaBMW() {
        return (List<bmw>) bmwI.findAll();
    }

    @Override
    public bmw buscarBMW(bmw bmw) {
         return bmwI.findById(bmw.getIdbmw()).orElse(null);
    }
    
}
