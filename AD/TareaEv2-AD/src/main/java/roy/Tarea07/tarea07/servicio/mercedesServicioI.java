package roy.Tarea07.tarea07.servicio;

import java.util.List;
import roy.Tarea07.tarea07.dominio.mercedes;

public interface mercedesServicioI {
    public List<mercedes> listaMercedes();
    public void guardar (mercedes mercedes);
    public void eliminar (mercedes mercedes);
    public mercedes buscarMercedes (mercedes mercedes);
}
