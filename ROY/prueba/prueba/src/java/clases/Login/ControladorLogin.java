/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.Login;

import Clases.Login.Login2;
import Basedatos.OnExceptionBD;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Angel
 */
public class ControladorLogin {

    public boolean Login(Login2 Login) throws OnExceptionBD {
        ModeloLogin modelo = new ModeloLogin();
        return modelo.login(Login);
    }

}
