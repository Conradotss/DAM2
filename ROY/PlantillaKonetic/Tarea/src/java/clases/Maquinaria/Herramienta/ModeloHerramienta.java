package clases.Maquinaria.Herramienta;

import BD.Conexion;

import java.sql.Statement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ModeloHerramienta extends Conexion {

    public List<Herramienta> verHerramientas() throws SQLException {

        List<Herramienta> herramientas = new ArrayList<>();
        String sql = "SELECT * FROM herramienta";
        PreparedStatement ps = getContection().prepareStatement(sql);
        ResultSet rs = ps.executeQuery();
        while (rs.next()) {
            int id = rs.getInt("tarea_id");
            String nombre = rs.getString("nombre");
            String descripcion = rs.getString("descripcion");
            Herramienta herr = new Herramienta(id, nombre, descripcion);
            herramientas.add(herr);
        }
        if (getContection() != null) {
            getContection().close();
        }

        if (ps != null) {
            ps.close();
        }

        return herramientas;
    }

    public boolean crearHerramienta(Herramienta herramienta) throws SQLException {
        String sql = "INSERT INTO herramienta (nombre, descripcion) VALUES (?,?)";
        PreparedStatement ps = getContection().prepareStatement(sql);

        ps.setObject(1, herramienta.getNombre());
        ps.setObject(2, herramienta.getDescripcion());

        ps.executeUpdate();

        if (getContection() != null) {
            getContection().close();
        }
        if (ps != null) {
            ps.close();
        }

        return true;
    }

    public boolean eliminarHerramienta(int herramienta_id) throws SQLException {
        String sql = "DELETE FROM herramienta WHERE tarea_id = ?";

        Statement sentencia = getSentencia();
        sentencia.executeUpdate(sql);

        if (getContection() != null) {
            getContection().close();
        }
        if (sentencia != null) {
            sentencia.close();
        }

        return true;
    }

    public boolean modificarHerramienta(Herramienta herramienta) throws SQLException {
        String sql = "UPDATE herramienta SET nombre = ?, descripcion = ? WHERE tarea_id = ?";

        PreparedStatement ps = getContection().prepareStatement(sql);

        int i = 1;
        ps.setObject(i++, herramienta.getNombre());
        ps.setObject(i++, herramienta.getDescripcion());
        ps.setObject(i++, herramienta.getTarea_id());

        ps.executeUpdate();

        if (getContection() != null) {
            getContection().close();
        }
        if (ps != null) {
            ps.close();
        }

        return true;
    }

    public ArrayList<Herramienta> BuscarHerramientas(String nombre) throws SQLException {
        ArrayList<Herramienta> herramientas = new ArrayList<Herramienta>();
        String sql = "SELECT * FROM herramienta WHERE nombre LIKE ?";
        String nombreConstula = "'%" + nombre + "%'";
        PreparedStatement ps = getContection().prepareStatement(sql);
        ps.setObject(1, nombreConstula);
        ResultSet rs = ps.executeQuery();

        while (rs.next()) {
            int id = rs.getInt("tarea_id");
            String named = rs.getString("nombre");
            String descripcion = rs.getString("descripcion");
            Herramienta herramienta = new Herramienta(id, named, descripcion);
            herramientas.add(herramienta);
        }

        if (getContection() != null) {
            getContection().close();
        }
        if (ps != null) {
            ps.close();
        }
        return herramientas;
    }
    
    public Herramienta getHerramienta(int tarea_id) throws SQLException{
        String sql = "SELECT * FROM herramienta WHERE tarea_id = ?";
        PreparedStatement ps = getContection().prepareStatement(sql);
        ps.setObject(1, tarea_id);
        ResultSet rs = ps.executeQuery();
        Herramienta herramienta = null;
        while(rs.next()){
            int id = rs.getInt("tarea_id");
            String named = rs.getString("nombre");
            String descripcion = rs.getString("descripcion");
            herramienta = new Herramienta(id, named, descripcion);
        }
        
        if (getContection() != null) {
            getContection().close();
        }
        if (ps != null) {
            ps.close();
        }
        if(rs != null){
            rs.close();
        }
        
        return herramienta;
    }
    
    
    public ArrayList<Herramienta> getListaHerramientas() throws SQLException{
        ArrayList<Herramienta> herramientas = new ArrayList<>();
        
        String sql = "SELECT * FROM herramientas";
        PreparedStatement ps = getContection().prepareStatement(sql);
        ResultSet rs = ps.executeQuery();
        while(rs.next()){
            int id = rs.getInt("tarea_id");
            String named = rs.getString("nombre");
            String descripcion = rs.getString("descripcion");
            Herramienta herramienta = new Herramienta(id, named, descripcion);
            herramientas.add(herramienta);
        }
        
        if (getContection() != null) {
            getContection().close();
        }
        if (ps != null) {
            ps.close();
        }
        if(rs != null){
            rs.close();
        }
        
        return herramientas;
    }
    
    
    //Metodo falta por implementar contiene relaciones entre tablas
    public ArrayList<Herramienta> getListaHerramientas(int herramienta_id){
        ArrayList<Herramienta> herramientas = new ArrayList<>();
        return herramientas;
    }

}
