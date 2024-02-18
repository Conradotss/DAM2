package roy.Tarea07.tarea07.servicio;

import java.util.List;
import roy.Tarea07.tarea07.dominio.peugeot;

public interface peugeotServicioI {
    public List<peugeot> listaPeugeot();
    public void guardar (peugeot peugeot);
    public void eliminar (peugeot peugeot);
    public peugeot buscarPeugeot (peugeot peugeot);
}
