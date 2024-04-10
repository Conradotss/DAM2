/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.Telegram.Usuario;


/**
 *
 * @author Onelectric
 */
public class Usuario {

    private int basedatosID;
    private String telegramID;
    private String nombre;

    public Usuario(int basedatosID, String telegramID, String nombre) {
        this.basedatosID = basedatosID;
        this.telegramID = telegramID;
        this.nombre = nombre;
    }

    public int getBasedatosID() {
        return basedatosID;
    }

    public void setBasedatosID(int basedatosID) {
        this.basedatosID = basedatosID;
    }

    public String getTelegramID() {
        return telegramID;
    }

    public void setTelegramID(String telegramID) {
        this.telegramID = telegramID;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public String toString() {
        return "Usuario{" + "basedatosID=" + basedatosID + ", telegramID=" + telegramID + ", nombre=" + nombre + '}';
    }
    


}
