package roy.spring.spring_roy.servicio;

import java.util.List;
import roy.spring.spring_roy.dominio.Persona;

public interface PersonaServicioI {

    public List<Persona> listarPersonas();

    public void guardar(Persona persona);

    public void eliminar(Persona persona);

    public Persona encontrarPersona(Persona persona);
}
