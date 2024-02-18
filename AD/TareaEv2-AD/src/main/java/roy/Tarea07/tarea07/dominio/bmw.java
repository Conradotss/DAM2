package roy.Tarea07.tarea07.dominio;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotEmpty;
import java.io.Serializable;
import lombok.Data;

@Data
@Entity
@Table(name = "bmw")
public class bmw implements Serializable {

    private static final long SerialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idbmw;

    @NotEmpty
    private String modelo;

    @NotEmpty
    private int precio;

    @NotEmpty
    private String imagen;

    @NotEmpty
    private String especificaciones;
}
