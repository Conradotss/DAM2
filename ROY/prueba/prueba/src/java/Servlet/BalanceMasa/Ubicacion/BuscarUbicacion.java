package Servlet.BalanceMasa.Ubicacion;

import Basedatos.OnExceptionBD;
import Clases.BalanceMasa.Ubicacion.ControladorUbicacion;
import Clases.BalanceMasa.Ubicacion.DatosUbicacion;
import Clases.BalanceMasa.Ubicacion.Ubicacion;
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
public class BuscarUbicacion extends HttpServlet {

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
            //Usuario
//            HttpSession sesion = request.getSession(true);
//            Object objSesionUsuario = sesion.getAttribute("SesionUsuario");
//            int usuario_id = 0;
//            SesionUsuario SesionUsuario = null;
//            if (objSesionUsuario != null) {
//                 SesionUsuario = (SesionUsuario) objSesionUsuario;
//                usuario_id = SesionUsuario.getUsuario_id();
//            }
//            int tipo = ModulosHijos.listaModuloHijos_id[90];
//            //permisos
//            ControladorPermisoss ControladorPermisoss = new ControladorPermisoss();
//            ControladorGrupoUsuarios ControladorGrupoUsuarios = new ControladorGrupoUsuarios();
//            ControladorUsuarios ControladorUsuarios = new ControladorUsuarios();
//            Usuario Usuario = ControladorUsuarios.getUsuario(usuario_id);
//            GrupoUsuario GrupoUsuario = ControladorGrupoUsuarios.getGrupoUsuario(Usuario.getGrupoUsuario_id());
//            int grupoUsuario_id = GrupoUsuario.getGrupoUsuario_id();
//
//            Permisos Permisos2 = SesionUsuario.getPermiso( tipo);

            //Recogemos campos de busqueda            
            String nombre = request.getParameter("nombre");

//            System.out.println(id + nombre + tipoUbicacion);
            //Buscamos en la base de datos
            ControladorUbicacion controlador = new ControladorUbicacion();
            ArrayList<Ubicacion> lista = controlador.buscarUbicacion(nombre);

            String htmlcode = "<table class=\"tabla\" id=\"tablaUbicacion\">\n"
                    //Introducimos titulos tabla
                    + "<thead>\n"
                    + "<tr>\n"
                    + "<th style=\"width: 20px\">\n"
                    //Titulo de Columna acciones
                    + "</th>";

            //Rellenamos los títulos de la tabla
            for (int i = 1; i < DatosUbicacion.nombreTitulosCabeceraTabla.length; i++) {
                htmlcode += "<th>";
                htmlcode += DatosUbicacion.nombreTitulosCabeceraTabla[i];
                htmlcode += "</th>";
            }

            htmlcode += "</tr>\n"
                    + "</thead>";
            //Fin de cabecera de la tabla           

            //Introducimos datos en las filas            
            for (int i = 0; i < lista.size(); i++) {

                //Imagen    
                //
                Ubicacion Ubicacion = lista.get(i);

                htmlcode += "<tr>";

                //Columna Acciones
                htmlcode += "<td>\n"
                        + "<div style=\"width: 50px\">\n";
                //Boton de eliminar
//                if (Permisos2.getEliminar() == 1) {
                htmlcode += "<button type=\"button\" class=\"buttonTablaEliminar\" id=\"btnEliminarUbicacion\" value=" + lista.get(i).getUbicacion_id() + " "
                        + "title=\"Eliminar " + lista.get(i).getNombre() + "\"></button>\n"
                        + "\n";
                //boton de modificar
//                }
//                if (Permisos2.getModificar() == 1) {
                htmlcode += "<button type=\"button\" class=\"buttonTablaModificar\" id=\"btnModificarUbicacion\" value=" + lista.get(i).getUbicacion_id() + " "
                        + "title=\"Modificar " + lista.get(i).getNombre() + "\"></button>\n";
//                }
                htmlcode += "</div>\n"
                        + "</td>";

                //Columnas de datos*//////////////////
                htmlcode += ""
                        + "<td>\n"
                        + lista.get(i).getNombre() + "\n"
                        + "</td>\n"
                        + "<td>\n"
                        + lista.get(i).getdescripcion() + "\n"
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
