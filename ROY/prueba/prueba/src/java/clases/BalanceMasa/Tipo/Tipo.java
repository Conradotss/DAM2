/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.BalanceMasa.Tipo;

/**
 *
 * @author Onelectric
 */
public class Tipo {

    private int tipo_id;
    private String nombre;
    private String descripcion;


    public Tipo(int tipo_id, String nombre, String descripcion) {
        this.tipo_id = tipo_id;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    public int getTipo_id() {
        return tipo_id;
    }

    public void setTipo_id(int tipo_id) {
        this.tipo_id = tipo_id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getdescripcion() {
        return descripcion;
    }

    public void setdescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    @Override
    public String toString() {
        return "Tipo{" + "tipo_id=" + tipo_id + ", nombre=" + nombre + ", descripcion=" + descripcion + '}';
    }

}
