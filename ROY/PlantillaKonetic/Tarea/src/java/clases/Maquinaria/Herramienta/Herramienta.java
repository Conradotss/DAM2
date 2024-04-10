package clases.Maquinaria.Herramienta;

public class Herramienta {
    
    private int tarea_id;
    private String nombre;
    private String descripcion;

    public Herramienta(int tarea_id, String nombre, String descripcion) {
        this.tarea_id = tarea_id;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    public Herramienta() {
    }

    
    
    public Herramienta(String nombre, String descripcion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    public Herramienta(int tarea_id) {
        this.tarea_id = tarea_id;
    }

    public int getTarea_id() {
        return tarea_id;
    }

    public void setTarea_id(int tarea_id) {
        this.tarea_id = tarea_id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    @Override
    public String toString() {
        return "Herramienta{" + "tarea_id=" + tarea_id + ", nombre=" + nombre + ", descripcion=" + descripcion + '}';
    }
    
    
}
