package Servlet.Maquinaria.Herramienta;

import clases.Maquinaria.Herramienta.ControladorHerramientas;
import clases.Maquinaria.Herramienta.Herramienta;
import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class CargarSelectOptionHerramienta extends HttpServlet {

    private String txtAction = "buscar";

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");

        try {
            String htmlCode = "";

            ControladorHerramientas ch = new ControladorHerramientas();
            //Si queremos cargar el select Option
            ArrayList<Herramienta> listaHeramientas;
            listaHeramientas = ch.getLListaHerramienta();
            htmlCode += "<option value=''>Seleccionar</option>";
            for (int i = 0; i < listaHeramientas.size(); i++) {
                htmlCode += "<option value=" + listaHeramientas.get(i).getTarea_id()
                        + "> " + listaHeramientas.get(i).getNombre() + "</option>";
            }

            ArrayList<String> listaB = new ArrayList<String>();
            listaB.add(htmlCode);
            Gson gson = new Gson();
            String ToJson = gson.toJson(listaB, ArrayList.class);
            response.getWriter().println(ToJson);
        } catch (SQLException ex) {
            ArrayList<String> lista = new ArrayList<String>();
            lista.add("Error");
            String msgErr = "Se produjo un error al buscar los datos\n";
            msgErr += ex.getMessage();
            lista.add(msgErr);
            
            Gson gson = new Gson();
            String toJson =  gson.toJson(lista, ArrayList.class);
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
