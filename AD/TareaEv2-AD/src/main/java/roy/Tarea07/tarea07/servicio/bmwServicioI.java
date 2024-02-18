package roy.Tarea07.tarea07.servicio;

import java.util.List;
import roy.Tarea07.tarea07.dominio.bmw;

public interface bmwServicioI {
    public List<bmw> listaBMW();
    public void guardar (bmw bmw);
    public void eliminar (bmw bmw);
    public bmw buscarBMW(bmw bmw);
}
