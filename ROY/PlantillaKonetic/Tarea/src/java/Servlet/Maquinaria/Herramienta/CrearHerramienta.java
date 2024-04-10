package Servlet.Maquinaria.Herramienta;

import clases.Maquinaria.Herramienta.ControladorHerramientas;
import clases.Maquinaria.Herramienta.Herramienta;
import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.tomcat.util.http.fileupload.FileItem;
import org.apache.tomcat.util.http.fileupload.FileItemFactory;
import org.apache.tomcat.util.http.fileupload.disk.DiskFileItemFactory;
import org.apache.tomcat.util.http.fileupload.servlet.ServletFileUpload;
import org.apache.tomcat.util.http.fileupload.servlet.ServletRequestContext;

public class CrearHerramienta extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try {
            String nombre = "";
            String descripcion = "";

            FileItemFactory fif = new DiskFileItemFactory();

            ServletFileUpload sfu = new ServletFileUpload(fif);

            sfu.setHeaderEncoding("UTF-8");
            List items = sfu.parseRequest(new ServletRequestContext(request));

            for (int i = 0; i < items.size(); i++) {
                FileItem item = (FileItem) items.get(i);
                if (!item.isFormField()) {

                } else {
                    String idCampo = item.getFieldName();
                    String valor = item.getString("UTF-8");

                    if (idCampo.equals("nombre")) {
                        nombre = valor;
                    } else if (idCampo.equals("descripcion")) {
                        descripcion = valor;
                    }
                }
            }

            if (items.size() > 0) {
                //Creamos objeto
                Herramienta herramienta = new Herramienta(0, nombre, descripcion);
                ControladorHerramientas ch = new ControladorHerramientas();
                if (ch.crearHerramienta(herramienta)) {
                    ArrayList<String> lista = new ArrayList<String>();
                    lista.add("Has guardado los datos de " + herramienta.getNombre() + " correctamenta");
                    Gson gson = new Gson();
                    String toJson = gson.toJson(lista, ArrayList.class);
                    response.getWriter().println(toJson);
                }
            }

        } catch (SQLException ex) {
            ArrayList<String> lista = new ArrayList<String>();
            lista.add("Error");
            String msgErr = "Error al crear los datos\\n";
            msgErr += ex.getMessage();
            lista.add(msgErr);
            ex.printStackTrace();
            Gson gson = new Gson();
            String toJson = gson.toJson(lista, ArrayList.class);
            response.getWriter().println(toJson);
        } catch (Exception ex) {
            ArrayList<String> lista = new ArrayList<String>();
            lista.add("Error");

            String msgError = "Error al crear los datos:\n\n";
            msgError += ex.getMessage();
            lista.add(msgError);
            ex.printStackTrace();
            Gson gson = new Gson();
            String toJson = gson.toJson(lista, ArrayList.class);
            response.getWriter().println(toJson);
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
