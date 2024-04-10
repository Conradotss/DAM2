package Servlet.BalanceMasa.Material;

import Basedatos.OnExceptionBD;
import Clases.BalanceMasa.Material.ControladorMateriales;
import Clases.BalanceMasa.Material.DatosMaterial;
import Clases.BalanceMasa.Material.Material;
import Clases.Onlog4j.OnLog4j;
import com.google.gson.Gson;
import java.io.IOException;
import java.util.ArrayList;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 *
 * @author OnAngel
 */
public class EncontrarConsumo extends HttpServlet {

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
            int id = Integer.parseInt(request.getParameter("id"));

            ControladorMateriales controlador = new ControladorMateriales();
            ArrayList<Material> lista = controlador.buscarMaterial2();
            ArrayList<Material> checkboxStatus = controlador.getCheckboxStatusForUser(id);

            String htmlcode = "<table class=\"tabla\" id=\"tablaMaterial\">\n"
                    //Introducimos titulos tabla
                    + "<thead>\n"
                    + "<tr>\n"
                    + "<th style=\"width: 120px\">\n"
                    //Titulo de Columna acciones
                    + "</th>";

            //Rellenamos los títulos de la tabla
            for (int i = 1; i < DatosMaterial.nombreTitulosCabeceraTabla2.length; i++) {
                htmlcode += "<th>";
                htmlcode += DatosMaterial.nombreTitulosCabeceraTabla2[i];
                htmlcode += "</th>";
            }

            htmlcode += "</tr>\n"
                    + "</thead>";
            //Fin de cabecera de la tabla           

            //Introducimos datos en las filas   
            for (int i = 0; i < lista.size(); i++) {

                //Imagen     
                //
                Material Material = lista.get(i);
                boolean isChecked = checkboxStatus.stream().anyMatch(checkbox -> checkbox.getA() == Material.getA());

                htmlcode += "<tr>";

                //Columna Acciones
                htmlcode += "<td>\n"
                        + "<div style=\"width: 100px\">\n"
                        + "<input type=\"checkbox\" name=\"checkboxID\" value=\"" + lista.get(i).getA() + "\" "
                        + (isChecked ? "checked" : "") + " />\n";

                htmlcode += "</div>\n"
                        + "</td>";
                //Columnas de datos*//////////////////
                htmlcode += ""
                        + "<td>\n"
                        + lista.get(i).getA() + "\n"
                        + "</td>\n"
                        + "<td>\n"
                        + lista.get(i).getB() + "\n"
                        + "</td>\n"
                        + "<td>\n"
                        + lista.get(i).getC() + "\n"
                        + "</td>\n"
                        + "<td>\n"
                        + lista.get(i).getD() + "\n"
                        + "</td>\n"
                          + "<td>\n"
                        + lista.get(i).getE() + "\n"
                        + "</td>\n"
                        + "</tr>\n";
            }

            //Cierre de la tabla
            htmlcode += "</table>";

            ArrayList<String> listap = new ArrayList<String>();
            listap.add(htmlcode);
            Gson gson = new Gson();
            String toJson = gson.toJson(listap, ArrayList.class);
            response.getWriter().println(toJson);

        } catch (OnExceptionBD e) {
            ArrayList<String> lista = new ArrayList<String>();
            lista.add("Error");

            String msgError = "Error al buscar los datos:\n\n";
            msgError += e.getMessage();
            //
            lista.add(msgError);
            e.printStackTrace();
//            OnLog4j.Log().error(msgError);
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
