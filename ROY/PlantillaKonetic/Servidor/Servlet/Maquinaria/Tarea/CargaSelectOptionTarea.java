/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlet.Maquinaria.Tarea;

import Basedatos.OnExceptionBD;
import Clases.Maquinaria.Tarea.ControladorTareas;
import Clases.Maquinaria.Tarea.Tarea;
import Clases.Onlog4j.OnLog4j;
import com.google.gson.Gson;
import java.io.IOException;
import java.util.ArrayList;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 *
 * @author OnAngel
 */
public class CargaSelectOptionTarea extends HttpServlet {

    private String txtAccion = "buscar";
    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try {

            String htmlcode = "";
            
            //
            ControladorTareas ControladorTareas = new ControladorTareas();
            //
            //Si queremos cargar el select option
            ArrayList<Tarea> listaTareas = ControladorTareas.getListaTareas();
            htmlcode += "<option value=''>Seleccione:</option>";
            for (int i = 0; i < listaTareas.size(); i++) {
                htmlcode += "<option value=" + listaTareas.get(i).getTarea_id()+ ">"
                        + listaTareas.get(i).getNombre() + "</option>";
            }

//            System.out.println(htmlcode);
            ArrayList<String> listap = new ArrayList<String>();
            listap.add(htmlcode);
            Gson gson = new Gson();
            String toJson = gson.toJson(listap, ArrayList.class);
            response.getWriter().println(toJson);

        } catch (OnExceptionBD | IOException e) {
            ArrayList<String> lista = new ArrayList<String>();
            lista.add("Error");

            String msgError = "Error al " + txtAccion + " los datos:\n\n";
            msgError += e.getMessage();
            //
            lista.add(msgError);
            e.printStackTrace();
            OnLog4j.Log().error(msgError);
            //
            Gson gson = new Gson();
            String toJson = gson.toJson(lista, ArrayList.class);
//            System.out.println(toJson);
            //
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
