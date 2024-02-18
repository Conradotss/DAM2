package roy.Tarea07.tarea07.servicio;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import roy.Tarea07.tarea07.dao.hyundaiI;
import roy.Tarea07.tarea07.dominio.hyundai;

@Service
public class hyundaiServicio implements hyundaiServicioI{
    
    @Autowired
    private hyundaiI hyundaiI;

    @Override
     @Transactional(readOnly = true)
    public List<hyundai> listaHyundai() {
        return (List<hyundai>) hyundaiI.findAll();
    }

    @Override
    public void guardar(hyundai hyundai) {
        hyundaiI.save(hyundai);
    }

    @Override
    public void eliminar(hyundai hyundai) {
        hyundaiI.delete(hyundai);
    }

    @Override
    public hyundai buscarHyundai(hyundai hyundai) {
         return hyundaiI.findById(hyundai.getIdhyundai()).orElse(null);
    }
    
}
