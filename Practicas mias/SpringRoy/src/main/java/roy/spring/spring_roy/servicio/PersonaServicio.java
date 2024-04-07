package roy.spring.spring_roy.servicio;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import roy.spring.spring_roy.dao.PersonaDAO;
import roy.spring.spring_roy.dominio.Persona;

@Service
public class PersonaServicio implements PersonaServicioI {

    @Autowired
    PersonaDAO personaDAO;

    @Override
    @Transactional(readOnly = true)
    public List<Persona> listarPersonas() {
        List<Persona> personas = (List<Persona>) personaDAO.findAll();
        return personas;
    }

    @Override
    public void guardar(Persona persona) {
        personaDAO.save(persona);
    }

    @Override
    public void eliminar(Persona persona) {
        personaDAO.delete(persona);
    }

    @Override
    @Transactional(readOnly = true)
    public Persona encontrarPersona(Persona persona) {
        return personaDAO.findById(persona.getIdPersona()).orElse(null);
    }

}
