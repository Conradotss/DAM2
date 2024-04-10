/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.Telegram.Mensaje;

/**
 *
 * @author Onelectric
 */
public class Mensaje2 {

    private String nombre;

    public Mensaje2(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public String toString() {
        return "Mensaje{" + "nombre=" + nombre + '}';
    }

}
