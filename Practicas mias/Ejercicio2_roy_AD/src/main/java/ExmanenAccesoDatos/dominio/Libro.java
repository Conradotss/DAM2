package ExmanenAccesoDatos.dominio;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;


@Data
@Entity
@Table(name = "libro")
public class Libro {
    private Long id;
    private String titulo;
    private String Autor;
    private int anyo;
}
