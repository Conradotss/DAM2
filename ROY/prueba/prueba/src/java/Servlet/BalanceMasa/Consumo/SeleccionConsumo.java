/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlet.BalanceMasa.Consumo;

import Basedatos.OnExceptionBD;
import Clases.BalanceMasa.Consumo.ControladorConsumos;
import Clases.BalanceMasa.Consumo.Consumo;
import Clases.Onlog4j.OnLog4j;
import com.google.gson.Gson;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.PrintWriter;
import org.apache.tomcat.util.http.fileupload.FileItem;
import org.apache.tomcat.util.http.fileupload.FileItemFactory;
import org.apache.tomcat.util.http.fileupload.disk.DiskFileItemFactory;
import org.apache.tomcat.util.http.fileupload.servlet.ServletRequestContext;
import org.apache.tomcat.util.http.fileupload.servlet.ServletFileUpload;

/**
 *
 * @author Angel
 */
public class SeleccionConsumo extends HttpServlet {

    private String txtAccion = "crear";

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
        request.setCharacterEncoding("UTF-8");

        try {
            int[] checkedBoxes = null;
            int[] notcheckedBoxes = null;

            String checkedBoxesJson = request.getParameter("check");
            String notCheckedBoxesJson = request.getParameter("notCheck");
            Gson gson = new Gson();

            if (notCheckedBoxesJson != null && !notCheckedBoxesJson.isEmpty()) {
                notcheckedBoxes = gson.fromJson(notCheckedBoxesJson, int[].class);
            }

            if (checkedBoxesJson != null && !checkedBoxesJson.isEmpty()) {
                checkedBoxes = gson.fromJson(checkedBoxesJson, int[].class);
            } else {
                response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
                response.getWriter().write("Por favor, selecciona algún material.");
                return;
            }

            int id = Integer.parseInt(request.getParameter("id"));
            if (notcheckedBoxes != null ) {
                ControladorConsumos controlador = new ControladorConsumos();
                controlador.eliminarMaterialPack(id);
            }

            ArrayList<String> lista = new ArrayList<String>();
            if (checkedBoxes != null || checkedBoxes.length >= 1) {
                ControladorConsumos controlador = new ControladorConsumos();

                for (int checkboxId : checkedBoxes) {
                    Consumo Consumo = new Consumo(
                            0,
                            id,
                            checkboxId
                    );
                    controlador.crearMaterialPack(Consumo);
                }
                lista.add("Has guardado los datos correctamente.");
                String toJson = gson.toJson(lista, ArrayList.class);
                response.getWriter().println(toJson);
            }

        } catch (OnExceptionBD e) {
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

        } catch (Exception ex) {
            ArrayList<String> lista = new ArrayList<String>();
            lista.add("Error");

            String msgError = "Error al " + txtAccion + " los datos:\n\n";
            msgError += ex.getMessage();
            //
            lista.add(msgError);
            ex.printStackTrace();
            OnLog4j.Log().error(msgError + "\n" + ex);
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
