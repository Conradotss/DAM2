package Servlet.Telegram.Bot;

import Basedatos.OnExceptionBD;
import Clases.Telegram.Bot.ControladorBots;
import Clases.Telegram.Bot.DatosBot;
import Clases.Telegram.Bot.Bot;
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
public class BuscarBot extends HttpServlet {

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
            //Bot
//            HttpSession sesion = request.getSession(true);
//            Object objSesionBot = sesion.getAttribute("SesionBot");
//            int bot_id = 0;
//            SesionBot SesionBot = null;
//            if (objSesionBot != null) {
//                 SesionBot = (SesionBot) objSesionBot;
//                bot_id = SesionBot.getBot_id();
//            }
//            int tipo = ModulosHijos.listaModuloHijos_id[90];
//            //permisos
//            ControladorPermisoss ControladorPermisoss = new ControladorPermisoss();
//            ControladorGrupoBots ControladorGrupoBots = new ControladorGrupoBots();
//            ControladorBots ControladorBots = new ControladorBots();
//            Bot Bot = ControladorBots.getBot(bot_id);
//            GrupoBot GrupoBot = ControladorGrupoBots.getGrupoBot(Bot.getGrupoBot_id());
//            int grupoBot_id = GrupoBot.getGrupoBot_id();
//
//            Permisos Permisos2 = SesionBot.getPermiso( tipo);

            //Recogemos campos de busqueda   
            String token = request.getParameter("token");

            String nombre = request.getParameter("nombre");

//            int lot = Integer.parseInt(request.getParameter("lot"));
//            int bm_material = Integer.parseInt(request.getParameter("bm_material"));
//            int orden = Integer.parseInt(request.getParameter("orden"));
//            System.out.println(id + nombre + tipoBot);
            //Buscamos en la base de datos
            ControladorBots controlador = new ControladorBots();
            ArrayList<Bot> lista = controlador.buscarBot(token, nombre);

            String htmlcode = "<table class=\"tabla\" id=\"tablaBot\">\n"
                    //Introducimos titulos tabla
                    + "<thead>\n"
                    + "<tr>\n"
                    + "<th style=\"width: 20px\">\n"
                    //Titulo de Columna acciones
                    + "</th>";

            //Rellenamos los títulos de la tabla
            for (int i = 1; i < DatosBot.nombreTitulosCabeceraTabla.length; i++) {
                htmlcode += "<th>";
                htmlcode += DatosBot.nombreTitulosCabeceraTabla[i];
                htmlcode += "</th>";
            }

            htmlcode += "</tr>\n"
                    + "</thead>";
            //Fin de cabecera de la tabla           

            //Introducimos datos en las filas            
            for (int i = 0; i < lista.size(); i++) {

                //Imagen    
                //
                Bot Bot = lista.get(i);

                htmlcode += "<tr>";

                //Columna Acciones
                htmlcode += "<td>\n"
                        + "<div style=\"width: 50px\">\n";
                //Boton de eliminar
//                if (Permisos2.getEliminar() == 1) {
                htmlcode += "<button type=\"button\" class=\"buttonTablaEliminar\" id=\"btnEliminarBot\" value=" + lista.get(i).getBasedatosID() + " "
                        + "title=\"Eliminar " + lista.get(i).getNombre() + "\"></button>\n"
                        + "\n";
                //boton de modificar
//                }
//                if (Permisos2.getModificar() == 1) {
                htmlcode += "<button type=\"button\" class=\"buttonTablaModificar\" id=\"btnModificarBot\" value=" + lista.get(i).getBasedatosID() + " "
                        + "title=\"Modificar " + lista.get(i).getNombre() + "\"></button>\n";
//                }
                htmlcode += "</div>\n"
                        + "</td>";
                //Columnas de datos*//////////////////
                htmlcode += ""
                        + "<td>\n"
                        + lista.get(i).getToken() + "\n"
                        + "</td>\n"
                        + "<td>\n"
                        + lista.get(i).getNombre() + "\n"
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
