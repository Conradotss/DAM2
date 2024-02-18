package roy.Tarea07.tarea07.servicio;

import java.util.List;
import roy.Tarea07.tarea07.dominio.audi;

public interface audiServicioI {
    public List<audi> listaAudi();
    public void guardar (audi audi);
    public void eliminar (audi audi);
    public audi buscarAudi(audi audi);
}
