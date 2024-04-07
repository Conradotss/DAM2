package PruebaAD.marca;

import PruebaAD.categoria.Categoria;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Marca {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column(length = 50, nullable = false, unique = true)
    private String nombre;
    
    @OneToMany
    @JoinColumn(name = "marca_id")
    List<Categoria> categorias = new ArrayList<>();

    public Marca() {
    }

    public Marca(Integer id, String nombre) {
        this.id = id;
        this.nombre = nombre;
    }

    public Marca(Integer id) {
        this.id = id;
    }

    public Marca(String nombre) {
        this.nombre = nombre;
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

    public List<Categoria> getListaCategoria() {
        return categorias;
    }

    public void setListaCategoria(List<Categoria> listaCategoria) {
        this.categorias = listaCategoria;
    }
    
    
    
}
