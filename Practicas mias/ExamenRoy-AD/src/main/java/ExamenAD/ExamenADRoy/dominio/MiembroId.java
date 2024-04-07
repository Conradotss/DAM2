package ExamenAD.ExamenADRoy.dominio;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.Embedded;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class MiembroId implements Serializable {

    private static final long serialVersionUID = 1L;

    @Column(name = "id_tecnico")
    private Integer id_tenico;

    @Column(name = "id_equipo")
    private Integer id_equipo;

    public MiembroId() {
    }

    public MiembroId(Integer id_tenico, Integer id_equipo) {
        this.id_tenico = id_tenico;
        this.id_equipo = id_equipo;
    }

    public Integer getId_tenico() {
        return id_tenico;
    }

    public void setId_tenico(Integer id_tenico) {
        this.id_tenico = id_tenico;
    }

    public Integer getId_equipo() {
        return id_equipo;
    }

    public void setId_equipo(Integer id_equipo) {
        this.id_equipo = id_equipo;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 11 * hash + Objects.hashCode(this.id_tenico);
        hash = 11 * hash + Objects.hashCode(this.id_equipo);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final MiembroId other = (MiembroId) obj;
        if (!Objects.equals(this.id_tenico, other.id_tenico)) {
            return false;
        }
        return Objects.equals(this.id_equipo, other.id_equipo);
    }

    @Override
    public String toString() {
        return "MiembroId{" + "id_tenico=" + id_tenico + ", id_equipo=" + id_equipo + '}';
    }
    
    

}
