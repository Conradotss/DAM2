package Servlet.Maquinaria.Herramienta;

import clases.Maquinaria.Herramienta.ControladorHerramientas;
import clases.Maquinaria.Herramienta.DatosHerramienta;
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

public class BuscarHerramienta extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        request.setCharacterEncoding("UTF-8");

        try {
            String nombre = request.getParameter("nombre");
            ControladorHerramientas controlador = new ControladorHerramientas();
            ArrayList<Herramienta> lista = controlador.buscarHerramienta(nombre);
            String htmlCode = "<table id=\"tablaHerramientas\"> \n"
                    + "<thead>\n"
                    + "<tr>\n"
                    + "<th style=\"width: 20px\">\n>\n"
                    //Titulo de la columna de acciones
                    + "</th>";

            //Rellenamos los titulos de la tabla
            for (int i = 0; i < DatosHerramienta.nombreTituloCabeceraTabla.length; i++) {
                htmlCode += "<th>";
                htmlCode += DatosHerramienta.nombreTituloCabeceraTabla[i];
                htmlCode += "</th>";
            }

            htmlCode += "/tr>\n"
                    + "</thead>";;
            //Fin de cabecera de la tabla
            //Ahora introducimos lo datos en la tabla

            for (int i = 0; i < lista.size(); i++) {
                //Aqui introducimos los datos de las columnas
                //En lugar de introducir los datos de las id 
                //Introducimos botones en lugar de estso para 
                //Crear alli las variables de eliminar y modificar
                Herramienta h = lista.get(i);
                htmlCode += "<tr>";
                
                htmlCode += "<td>\n"
                        + "<div style=\"width: 50px\">\n";
                //Boton eliminar
                htmlCode += "<button type=\"button\"  id=\"btnEliminarTarea\" value=" + lista.get(i).getTarea_id() + " "
                        + "title=\"Eliminar " + lista.get(i).getNombre() + "\"></button>\n"
                        + "\n";
                //Boton modificar
                htmlCode += "<button type=\"button\" class=\"buttonTablaModificar\" id=\"btnModificarTarea\" value=" + lista.get(i).getTarea_id() + " "
                        + "title=\"Modificar " + lista.get(i).getNombre() + "\"></button>\n";
                htmlCode += "</div>\n"
                        + "</td>";
                //Columna de datos
                htmlCode += ""
                        + "<td>\n"
                        + lista.get(i).getNombre() + "\n"
                        + "</td>\n"
                        + "<td>\n"
                        + lista.get(i).getDescripcion() + "\n"
                        + "</td>\n";
            }
            //Cerramos tabla
            htmlCode += "</table>";
            
            
            ArrayList<String> listaB = new ArrayList<String>();
            listaB.add(htmlCode);
            Gson gson = new Gson();
            String toJson = gson.toJson(listaB, ArrayList.class);
            response.getWriter().println(toJson);
            
            
        } catch (SQLException ex) {
            ArrayList<String> lista = new ArrayList<String>();
            lista.add("error");
            
            String msgError = "Se produjo un error al buscar los datos";
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
