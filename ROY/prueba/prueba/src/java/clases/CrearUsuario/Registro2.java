/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.CrearUsuario;

/**
 *
 * @author Onelectric
 */
public class Registro2 {

    private int usuario_id;
    private String nombre;
    private String email;
    private String password;

    public Registro2(int usuario_id, String nombre, String email, String password) {
        this.usuario_id = usuario_id;
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }

    public int getUsuario_id() {
        return usuario_id;
    }

    public void setUsuario_id(int usuario_id) {
        this.usuario_id = usuario_id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "Registro{" + "usuario_id=" + usuario_id + ", nombre=" + nombre + ", email=" + email + ", password=" + password + '}';
    }

    

}
