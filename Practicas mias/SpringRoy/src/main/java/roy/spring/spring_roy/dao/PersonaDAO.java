package roy.spring.spring_roy.dao;

import org.springframework.data.repository.CrudRepository;
import roy.spring.spring_roy.dominio.Persona;


public interface PersonaDAO extends CrudRepository<Persona, Long>{
    
}
