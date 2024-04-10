/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
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

public class EliminarHerramienta extends HttpServlet {

    private String txtAccion = "eliminar";

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");

        try {

            int id = Integer.parseInt(request.getParameter("id"));
            String nombre = request.getParameter("nombre");
            ControladorHerramientas ch = new ControladorHerramientas();

            if (ch.eliminarHerramienta(id)) {
                ArrayList<String> lista = new ArrayList<String>();
                lista.add("Has eliminado los datos de " + nombre + " correctamente");
                Gson gson = new Gson();
                String toJson = gson.toJson(lista, ArrayList.class);
                response.getWriter().println(toJson);
            }
        } catch (SQLException ex) {
            ArrayList<String> lista = new ArrayList<String>();
            lista.add("Error");
            String msgError = "Error al " + txtAccion + " los datos:\n\n";
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
