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
@Table(name = "tecnico")
public class Tecnico {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column(length = 40, nullable = false, unique = true)
    private String nombre;
    
    @Column(length = 40, nullable = false, unique = true)
    private String apellido;
    
    @Column(length = 40)
    private String apellido2;
    
    @OneToMany(mappedBy = "id_tecnico")
    private List<Miembro> listaMiembro;

    public Tecnico() {
    }

    public Tecnico(Integer id) {
        this.id = id;
    }

    public Tecnico(String nombre, String apellido, String apellido2, List<Miembro> listaMiembro) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.apellido2 = apellido2;
        this.listaMiembro = listaMiembro;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getApellido2() {
        return apellido2;
    }

    public void setApellido2(String apellido2) {
        this.apellido2 = apellido2;
    }

    public List<Miembro> getListaMiembro() {
        return listaMiembro;
    }

    public void setListaMiembro(List<Miembro> listaMiembro) {
        this.listaMiembro = listaMiembro;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 41 * hash + Objects.hashCode(this.id);
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
        final Tecnico other = (Tecnico) obj;
        return Objects.equals(this.id, other.id);
    }

    @Override
    public String toString() {
        return "Tecnico{" + "id=" + id + ", nombre=" + nombre + ", apellido=" + apellido + ", apellido2=" + apellido2 + ", listaMiembro=" + listaMiembro + '}';
    }
    
    
}
