package ExmanenAccesoDatos.dao;

import ExmanenAccesoDatos.dominio.Libro;
import org.springframework.data.repository.CrudRepository;

public interface LibroDAO extends CrudRepository<Libro, Long>{
    
}
