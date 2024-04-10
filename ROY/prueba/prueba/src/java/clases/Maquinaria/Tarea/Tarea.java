/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.Maquinaria.Tarea;

/**
 *
 * @author Onelectric
 */
public class Tarea {

    private int tarea_id;
    private String nombre;
    private int tipo;
    private String descripcion;

    private String valor;

    public Tarea(int tarea_id, String nombre, int tipo, String descripcion) {
        this.tarea_id = tarea_id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.descripcion = descripcion;
    }

    public Tarea(int tarea_id, String nombre, int tipo, String descripcion, String valor) {
        this.tarea_id = tarea_id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.valor = valor;
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

    public int getTipo() {
        return tipo;
    }

    public void setTipo(int tipo) {
        this.tipo = tipo;
    }

    public String getdescripcion() {
        return descripcion;
    }

    public void setdescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getValor() {
        return valor;
    }

    public void setValor(String valor) {
        this.valor = valor;
    }

    @Override
    public String toString() {
        return "Tarea{" + "tarea_id=" + tarea_id + ", nombre=" + nombre + ", tipo=" + tipo + ", descripcion=" + descripcion + ", valor=" + valor + '}';
    }

}
