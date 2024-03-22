/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Basedatos;

import Clases.Onlog4j.OnLog4j;
import Clases.Recursos.DatosAplicacion;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.Serializable;
import java.sql.Connection;
import java.sql.Statement;

/**
 *
 * @author Angel
 */
public class ConexionString implements Serializable {

    private String username;
    private String password;
    private String ip = "localhost";
    private int puerto = 3306;
    private String database = DatosAplicacion.nombreAplicacion;
    private String classname = "com.mysql.jdbc.Driver";
    //private String url = "jdbc:mysql://" + ip + ":" + puerto + "/" + database + "?autoReconnect=true&useSSL=false&verifyServerCertificate?=false&allowPublicKeyRetrieval=true";
    private String url = "jdbc:mysql://" + ip + ":" + puerto + "/" + database + "?useUnicode=true&amp;characterEncoding=UTF-8&amp;useSSL=false&amp;allowPublicKeyRetrieval=true";

    private Connection conexion;
    private Statement sentencia;
    private static final long serialVersionUID = -425308819951847709L;
    

    public ConexionString() {
        ConexionString ConexionString = null;
        try {
            String ruta = DatosAplicacion.dirAplicacionCarpetaPadre + System.getProperty("file.separator") + "config.on";
            //System.out.println(ruta);
            File archivo = new File(DatosAplicacion.dirAplicacionCarpetaPadre + System.getProperty("file.separator") + "config.on");
            if (archivo.exists()) {
                FileInputStream fis = new FileInputStream(ruta);
                ObjectInputStream ois = new ObjectInputStream(fis);
                //
                int nObject = ois.readInt();
                //System.out.println("Abrimos " + 2 + " pepe");
                //for (int i = 0; i < nObject; i++) {

                ConexionString = (ConexionString) ois.readObject(); //El método readObject() recupera el objeto

                //System.out.println("Configuracion General: " + ConfiguracionGeneral.toString());
                //}
                //
                ois.close();
                fis.close();
            }

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            System.out.println("¡¡¡Atención!!!");
            System.out.println("El archivo de configuracion config.on no existe, pongase en contacto con el administrador.");
            e.printStackTrace();
            OnLog4j.Log().error(e.getMessage());
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        this.username = ConexionString.getUsername();
        this.password = ConexionString.getPassword();
        //this.database = ConexionString.getDatabase();
        //this.url = "jdbc:mysql://" + ip + ":" + puerto + "/" + database + "?autoReconnect=true";//&useSSL=false";
    }

    public ConexionString(String username, String password){//, String database) {
        this.username = username;
        this.password = password;
        //this.database = database;
       // this.url = "jdbc:mysql://" + ip + ":" + puerto + "/" + database + "?autoReconnect=true";//&useSSL=false";
    }

    
    
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public int getPuerto() {
        return puerto;
    }

    public void setPuerto(int puerto) {
        this.puerto = puerto;
    }

    public String getDatabase() {
        return database;
    }

    public void setDatabase(String database) {
        this.database = database;
    }

    public String getClassname() {
        return classname;
    }

    public void setClassname(String classname) {
        this.classname = classname;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Connection getConexionString() {
        return conexion;
    }

    public void setConexionString(Connection conexion) {
        this.conexion = conexion;
    }

    public Statement getSentencia() {
        return sentencia;
    }

    public void setSentencia(Statement sentencia) {
        this.sentencia = sentencia;
    }

    @Override
    public String toString() {
        return "ConexionString{" + "username=" + username + ", password=" + password + ", ip=" + ip + ", puerto=" + puerto + ", database=" + database + ", classname=" + classname + ", url=" + url + ", conexion=" + conexion + ", sentencia=" + sentencia + '}';
    }

}
