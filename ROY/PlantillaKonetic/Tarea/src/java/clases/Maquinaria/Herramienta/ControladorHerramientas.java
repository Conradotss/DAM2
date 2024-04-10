package clases.Maquinaria.Herramienta;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ControladorHerramientas {
    
    public boolean crearHerramienta(Herramienta h) throws SQLException{
        ModeloHerramienta mh = new ModeloHerramienta();
        return mh.crearHerramienta(h);
    }
    
    public List<Herramienta> verHerramientas() throws SQLException{
        ModeloHerramienta mh = new ModeloHerramienta();
        return mh.verHerramientas();
    }
    
    public boolean eliminarHerramienta(int herramienta_id) throws SQLException{
        ModeloHerramienta mh = new ModeloHerramienta();
        return mh.eliminarHerramienta(herramienta_id);
    }
    
    public boolean modificarHerramienta(Herramienta herramienta) throws SQLException{
        ModeloHerramienta mh = new ModeloHerramienta();
        return mh.modificarHerramienta(herramienta);
    }
    
    public ArrayList<Herramienta> buscarHerramienta(String nombre) throws SQLException{
        ModeloHerramienta mh = new ModeloHerramienta();
        return mh.BuscarHerramientas(nombre);
    }
    
    public Herramienta getHerramienta(int herramienta_id) throws SQLException{
        ModeloHerramienta mh = new ModeloHerramienta();
        return mh.getHerramienta(herramienta_id);
    }
    
    public ArrayList<Herramienta> getLListaHerramienta() throws SQLException{
        ModeloHerramienta mh = new ModeloHerramienta();
        ArrayList<Herramienta> herramientas = mh.getListaHerramientas();
        return herramientas;
    }      
    
    
    //Metodo falta por implementar en clase ModeloHerramienta, con tiene relaciones entre tablas
//    public ArrayList<Herramienta> getLListaHerramienta(int herramienta_id) throws SQLException{
//        ModeloHerramienta mh = new ModeloHerramienta();
//        ArrayList<Herramienta> herramientas = mh.getListaHerramientas();
//        return herramientas;
//    } 
}
