/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.Telegram.Bot;

import Clases.Telegram.Bot.Bot;
import Basedatos.OnExceptionBD;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Angel
 */
public class ControladorBots {

    public boolean crearBot(Bot Bot) throws OnExceptionBD {
        ModeloBots modelo = new ModeloBots();
        return modelo.crearBot(Bot);
    }

    public ArrayList<Bot> buscarBot(String token, String nombre) throws OnExceptionBD {
        ModeloBots modelo = new ModeloBots();
        return modelo.buscarBot(token, nombre);
    }

    public boolean eliminarBot(int bot_id) throws OnExceptionBD {
        ModeloBots modelo = new ModeloBots();
        return modelo.eliminarBot(bot_id);
    }

    public Bot getBot(int bot_id) throws OnExceptionBD {
        ModeloBots modelo = new ModeloBots();
        return modelo.getBot(bot_id);
    }

    public boolean modificarBot(Bot Bot) throws OnExceptionBD {
        ModeloBots modelo = new ModeloBots();
        return modelo.modificarBot(Bot);
    }

}
