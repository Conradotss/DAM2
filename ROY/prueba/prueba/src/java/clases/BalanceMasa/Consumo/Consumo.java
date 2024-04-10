/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.BalanceMasa.Consumo;

/**
 *
 * @author Onelectric
 */
public class Consumo {

    private int consumoID;
    private double cantidad;
    private String lot;
    private int bm_material;
    private int ordenTrabajo;
    private int material_pack;
    private String nombreMaterial;
    private String nombreMaterial2;
    private int checkbox;
    private int pack_id;
    private int a;
    private String b;
    private String c;
    private String d;

    public Consumo(int consumoID, double cantidad, String lot, int bm_material, int ordenTrabajo) {
        this.consumoID = consumoID;
        this.cantidad = cantidad;
        this.lot = lot;
        this.bm_material = bm_material;
        this.ordenTrabajo = ordenTrabajo;
    }

    public Consumo(int a) {
        this.a = a;

    }

    public Consumo(int material_pack, String nombreMaterial2) {

        this.material_pack = material_pack;
        this.nombreMaterial2 = nombreMaterial2;

    }

    public Consumo(int pack_id, int consumoID, int checkbox) {
        this.pack_id = pack_id;
        this.consumoID = consumoID;
        this.checkbox = checkbox;

    }

    public Consumo(int consumoID, double cantidad, String lot, int bm_material, int ordenTrabajo, String nombreMaterial) {
        this.consumoID = consumoID;
        this.cantidad = cantidad;
        this.lot = lot;
        this.bm_material = bm_material;
        this.ordenTrabajo = ordenTrabajo;
        this.nombreMaterial = nombreMaterial;
    }

    public Consumo(int a, String b, String c, String d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }

    public int getA() {
        return a;
    }

    public void setA(int a) {
        this.a = a;
    }

    public String getB() {
        return b;
    }

    public void setB(String b) {
        this.b = b;
    }

    public String getC() {
        return c;
    }

    public void setC(String c) {
        this.c = c;
    }

    public String getD() {
        return d;
    }

    public void setD(String d) {
        this.d = d;
    }

    public int getConsumoID() {
        return consumoID;
    }

    public void setConsumoID(int consumoID) {
        this.consumoID = consumoID;
    }

    public double getCantidad() {
        return cantidad;
    }

    public void setCantidad(double cantidad) {
        this.cantidad = cantidad;
    }

    public String getLot() {
        return lot;
    }

    public void setLot(String lot) {
        this.lot = lot;
    }

    public int getBm_material() {
        return bm_material;
    }

    public void setBm_material(int bm_material) {
        this.bm_material = bm_material;
    }

    public int getOrdenTrabajo() {
        return ordenTrabajo;
    }

    public void setOrdenTrabajo(int ordenTrabajo) {
        this.ordenTrabajo = ordenTrabajo;
    }

    public int getMaterial_pack() {
        return material_pack;
    }

    public void setMaterial_pack(int material_pack) {
        this.material_pack = material_pack;
    }

    public String getNombreMaterial() {
        return nombreMaterial;
    }

    public void setNombreMaterial(String nombreMaterial) {
        this.nombreMaterial = nombreMaterial;
    }

    public String getNombreMaterial2() {
        return nombreMaterial2;
    }

    public void setNombreMaterial2(String nombreMaterial2) {
        this.nombreMaterial2 = nombreMaterial2;
    }

    public int getCheckbox() {
        return checkbox;
    }

    public void setCheckbox(int checkbox) {
        this.checkbox = checkbox;
    }

    public int getPack_id() {
        return pack_id;
    }

    public void setPack_id(int pack_id) {
        this.pack_id = pack_id;
    }

    @Override
    public String toString() {
        return "Consumo{" + "consumoID=" + consumoID + ", cantidad=" + cantidad + ", lot=" + lot + ", bm_material=" + bm_material + ", ordenTrabajo=" + ordenTrabajo + ", material_pack=" + material_pack + ", nombreMaterial=" + nombreMaterial + ", nombreMaterial2=" + nombreMaterial2 + ", checkbox=" + checkbox + ", pack_id=" + pack_id + ", a=" + a + ", b=" + b + ", c=" + c + ", d=" + d + '}';
    }

}
