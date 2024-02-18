package roy.Tarea07.tarea07.servicio;

import java.util.List;
import roy.Tarea07.tarea07.dominio.hyundai;

public interface hyundaiServicioI {
    public List<hyundai> listaHyundai();
    public void guardar (hyundai hyundai);
    public void eliminar (hyundai hyundai);
    public hyundai buscarHyundai(hyundai hyundai);
}
