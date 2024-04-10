/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.Telegram.Bot;

/**
 *
 * @author Onelectric
 */
public class Bot {

    private int basedatosID;
    private String token;
    private String nombre;

    public Bot(int basedatosID, String token, String nombre) {
        this.basedatosID = basedatosID;
        this.token = token;
        this.nombre = nombre;
    }

    public int getBasedatosID() {
        return basedatosID;
    }

    public void setBasedatosID(int basedatosID) {
        this.basedatosID = basedatosID;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public String toString() {
        return "Bot{" + "basedatosID=" + basedatosID + ", token=" + token + ", nombre=" + nombre + '}';
    }

}
