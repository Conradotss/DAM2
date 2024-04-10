/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.BalanceMasa.Ubicacion;

/**
 *
 * @author Onelectric
 */
public class Ubicacion {

    private int ubicacion_id;
    private String nombre;
    private String descripcion;


    public Ubicacion(int ubicacion_id, String nombre, String descripcion) {
        this.ubicacion_id = ubicacion_id;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    public int getUbicacion_id() {
        return ubicacion_id;
    }

    public void setUbicacion_id(int tipo_id) {
        this.ubicacion_id = ubicacion_id;
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
        return "Ubicacion{" + "ubicacion_id=" + ubicacion_id + ", nombre=" + nombre + ", descripcion=" + descripcion  + '}';
    }

   

}
