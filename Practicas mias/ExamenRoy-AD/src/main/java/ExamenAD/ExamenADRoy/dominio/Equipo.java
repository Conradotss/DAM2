package ExamenAD.ExamenADRoy.dominio;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "equipo")
public class Equipo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column(length = 30, nullable = false)
    private String nobre;
    
    @Column(length = 40, nullable = false)
    private String apellido1;
    
    @Column(length = 40, nullable = false)
    private String apellido2;
    
    @OneToMany(mappedBy = "id_equipo")
    private List<Miembro> listaMiembros;

    public Equipo() {
    }

    public Equipo(String nobre, String apellido1, String apellido2, List<Miembro> listaMiembros) {
        this.nobre = nobre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.listaMiembros = listaMiembros;
    }

    public Equipo(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNobre() {
        return nobre;
    }

    public void setNobre(String nobre) {
        this.nobre = nobre;
    }

    public String getApellido1() {
        return apellido1;
    }

    public void setApellido1(String apellido1) {
        this.apellido1 = apellido1;
    }

    public String getApellido2() {
        return apellido2;
    }

    public void setApellido2(String apellido2) {
        this.apellido2 = apellido2;
    }

    public List<Miembro> getListaMiembros() {
        return listaMiembros;
    }

    public void setListaMiembros(List<Miembro> listaMiembros) {
        this.listaMiembros = listaMiembros;
    }

    @Override
    public String toString() {
        return "Equipo{" + "id=" + id + ", nobre=" + nobre + ", apellido1=" + apellido1 + ", apellido2=" + apellido2 + ", listaMiembros=" + listaMiembros + '}';
    }

    @Override
    public int hashCode() {
        int hash = 5;
        hash = 53 * hash + Objects.hashCode(this.id);
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
        final Equipo other = (Equipo) obj;
        return Objects.equals(this.id, other.id);
    }
    
    
    
}
