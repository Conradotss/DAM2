/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases.BalanceMasa.Material;

/**
 *
 * @author Onelectric
 */
public class Material {

    private int material_id;
    private String referencia;
    private String nombre;
    private String descripcion;

    private int consumo_pack;
    private String nombreConsumo2;

    private int checkbox;
    private int pack_id;

    private int a;
    private String b;
    private String c;
    private String d;
    private String e;

    public Material(int material_id, String referencia, String nombre, String descripcion) {
        this.material_id = material_id;
        this.referencia = referencia;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    public Material(int consumo_pack, String nombreConsumo2) {

        this.consumo_pack = consumo_pack;
        this.nombreConsumo2 = nombreConsumo2;

    }

    public Material(int a, String b, String c, String d, String e) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;

    }

    public Material(int a) {
        this.a = a;

    }

    public Material(int pack_id, int material_id, int checkbox) {
        this.pack_id = pack_id;
        this.material_id = material_id;
        this.checkbox = checkbox;

    }

    public int getMaterial_id() {
        return material_id;
    }

    public void setMaterial_id(int material_id) {
        this.material_id = material_id;
    }

    public String getReferencia() {
        return referencia;
    }

    public void setReferencia(String referencia) {
        this.referencia = referencia;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public int getConsumo_pack() {
        return consumo_pack;
    }

    public void setConsumo_pack(int consumo_pack) {
        this.consumo_pack = consumo_pack;
    }

    public String getNombreConsumo2() {
        return nombreConsumo2;
    }

    public void setNombreConsumo2(String nombreConsumo2) {
        this.nombreConsumo2 = nombreConsumo2;
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

    public String getE() {
        return e;
    }

    public void setE(String e) {
        this.e = e;
    }

    @Override
    public String toString() {
        return "Material{" + "material_id=" + material_id + ", referencia=" + referencia + ", nombre=" + nombre + ", descripcion=" + descripcion + ", consumo_pack=" + consumo_pack + ", nombreConsumo2=" + nombreConsumo2 + ", checkbox=" + checkbox + ", pack_id=" + pack_id + ", a=" + a + ", b=" + b + ", c=" + c + ", d=" + d + ", e=" + e + '}';
    }

}
