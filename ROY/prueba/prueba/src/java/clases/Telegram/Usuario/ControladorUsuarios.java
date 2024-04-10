/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.Telegram.Usuario;

import Clases.Telegram.Usuario.Usuario;
import Basedatos.OnExceptionBD;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Angel
 */
public class ControladorUsuarios {

    public boolean crearUsuario(Usuario Usuario) throws OnExceptionBD {
        ModeloUsuarios modelo = new ModeloUsuarios();
        return modelo.crearUsuario(Usuario);
    }

    public ArrayList<Usuario> buscarUsuario(String telegram, String nombre) throws OnExceptionBD {
        ModeloUsuarios modelo = new ModeloUsuarios();
        return modelo.buscarUsuario(telegram, nombre);
    }

    public boolean eliminarUsuario(int usuario_id) throws OnExceptionBD {
        ModeloUsuarios modelo = new ModeloUsuarios();
        return modelo.eliminarUsuario(usuario_id);
    }

    public Usuario getUsuario(int usuario_id) throws OnExceptionBD {
        ModeloUsuarios modelo = new ModeloUsuarios();
        return modelo.getUsuario(usuario_id);
    }

    public boolean modificarUsuario(Usuario Usuario) throws OnExceptionBD {
        ModeloUsuarios modelo = new ModeloUsuarios();
        return modelo.modificarUsuario(Usuario);
    }

}
