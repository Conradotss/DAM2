/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.BalanceMasa.Registro;

/**
 *
 * @author Onelectric
 */
public class Registro {

    private int registroID;
    private int ordenTrabajoID;
    private double datoProduccion;
    private int tipoID;
    private int origenID;
    private int destinoID;
    private String nombreTips;
    private String nombreUbi;
    private String nombreUbiDestino;

    public Registro(int registroID, int ordenTrabajoID, double datoProduccion, int tipoID, int origenID, int destinoID) {
        this.registroID = registroID;
        this.ordenTrabajoID = ordenTrabajoID;
        this.datoProduccion = datoProduccion;
        this.tipoID = tipoID;
        this.origenID = origenID;
        this.destinoID = destinoID;
    }

    public Registro(int registroID, int ordenTrabajoID, double datoProduccion, int tipoID, int origenID, int destinoID, String nombreTips, String nombreUbi, String nombreUbiDestino) {
        this.registroID = registroID;
        this.ordenTrabajoID = ordenTrabajoID;
        this.datoProduccion = datoProduccion;
        this.tipoID = tipoID;
        this.origenID = origenID;
        this.destinoID = destinoID;
        this.nombreTips = nombreTips;
        this.nombreUbi = nombreUbi;
        this.nombreUbiDestino = nombreUbiDestino;

    }

    public int getRegistroID() {
        return registroID;
    }

    public int getOrdenTrabajoID() {
        return ordenTrabajoID;
    }

    public double getDatoProduccion() {
        return datoProduccion;
    }

    public int getTipoID() {
        return tipoID;
    }

    public int getOrigenID() {
        return origenID;
    }

    public int getDestinoID() {
        return destinoID;
    }

    public String getNombreTips() {
        return nombreTips;
    }

    public String getNombreUbi() {
        return nombreUbi;
    }

    public String getNombreUbiDestino() {
        return nombreUbiDestino;
    }

    public void setRegistroID(int registroID) {
        this.registroID = registroID;
    }

    public void setOrdenTrabajoID(int ordenTrabajoID) {
        this.ordenTrabajoID = ordenTrabajoID;
    }

    public void setDatoProduccion(double datoProduccion) {
        this.datoProduccion = datoProduccion;
    }

    public void setTipoID(int tipoID) {
        this.tipoID = tipoID;
    }

    public void setOrigenID(int origenID) {
        this.origenID = origenID;
    }

    public void setDestinoID(int destinoID) {
        this.destinoID = destinoID;
    }

    public void setNombreTips(String nombreTips) {
        this.nombreTips = nombreTips;
    }

    public void setNombreUbi(String nombreUbi) {
        this.nombreUbi = nombreUbi;
    }

    public void setNombreUbiDestino(String nombreUbiDestino) {
        this.nombreUbiDestino = nombreUbiDestino;
    }

    @Override
    public String toString() {
        return "Registro{" + "registroID=" + registroID + ", ordenTrabajoID=" + ordenTrabajoID + ", datoProduccion=" + datoProduccion + ", tipoID=" + tipoID + ", origenID=" + origenID + ", destinoID=" + destinoID + ", nombreTips=" + nombreTips + ", nombreUbi=" + nombreUbi + ", nombreUbiDestino=" + nombreUbiDestino + '}';
    }

}
