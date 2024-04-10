package Servlet.BalanceMasa.Consumo;

import Basedatos.OnExceptionBD;
import Clases.BalanceMasa.Consumo.ControladorConsumos;
import Clases.BalanceMasa.Consumo.DatosConsumo;
import Clases.BalanceMasa.Consumo.Consumo;
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
public class BuscarConsumo extends HttpServlet {

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
            String cantidad = request.getParameter("cantidad");
            String lot = request.getParameter("lot");
            String material = request.getParameter("material");
            String orden = request.getParameter("orden");

//            int lot = Integer.parseInt(request.getParameter("lot"));
//            int bm_material = Integer.parseInt(request.getParameter("bm_material"));
//            int orden = Integer.parseInt(request.getParameter("orden"));
//            System.out.println(id + nombre + tipoConsumo);
            //Buscamos en la base de datos
            ControladorConsumos controlador = new ControladorConsumos();
            ArrayList<Consumo> lista = controlador.buscarConsumo(cantidad, lot, material, orden);

            String htmlcode = "<table class=\"tabla\" id=\"tablaConsumo\">\n"
                    //Introducimos titulos tabla
                    + "<thead>\n"
                    + "<tr>\n"
                    + "<th style=\"width: 120px\">\n"
                    //Titulo de Columna acciones
                    + "</th>";

            //Rellenamos los títulos de la tabla
            for (int i = 1; i < DatosConsumo.nombreTitulosCabeceraTabla.length; i++) {
                htmlcode += "<th>";
                htmlcode += DatosConsumo.nombreTitulosCabeceraTabla[i];
                htmlcode += "</th>";
            }

            htmlcode += "</tr>\n"
                    + "</thead>";
            //Fin de cabecera de la tabla           

            //Introducimos datos en las filas            
            for (int i = 0; i < lista.size(); i++) {

                //Imagen     
                //
                Consumo Consumo = lista.get(i);

                htmlcode += "<tr>";

                //Columna Acciones
                htmlcode += "<td>\n"
                        + "<div style=\"width: 100px\">\n";
                //Boton de eliminar
//                if (Permisos2.getEliminar() == 1) {
                htmlcode += "<button type=\"button\" class=\"buttonTablaEliminar\" id=\"btnEliminarConsumo\" value=" + lista.get(i).getConsumoID() + " "
                        + "title=\"Eliminar " + lista.get(i).getCantidad() + "\"></button>\n"
                        + "\n";
                //boton de modificar
//                }
//                if (Permisos2.getModificar() == 1) {
                htmlcode += "<button type=\"button\" class=\"buttonTablaModificar\" id=\"btnModificarConsumo\" value=" + lista.get(i).getConsumoID() + " "
                        + "title=\"Modificar " + lista.get(i).getCantidad() + "\"></button>\n";
                
                //boton de seleccion
                  htmlcode += "<button type=\"button\" class=\"buttonTablaDetalle\" id=\"btnSeleccionarConsumo\" value=" + lista.get(i).getConsumoID() + " "
                        + "title=\"Seleccionar materiales\"></button>\n";
//                }

//                //boton de seleccion
//                htmlcode += "<button type=\"button\"  value=\"" + lista.get(i).getConsumoID() + "\" "
//                        + "title=\"Seleccionar materiales\" onclick=\"location.href='seleccionar.jsp?consumo_id="
//                        + lista.get(i).getConsumoID() + "'\">Seleccionar materiales</button>\n";

                htmlcode += "</div>\n"
                        + "</td>";
                //Columnas de datos*//////////////////
                htmlcode += ""
                        + "<td>\n"
                        + lista.get(i).getCantidad() + "\n"
                        + "</td>\n"
                        + "<td>\n"
                        + lista.get(i).getLot() + "\n"
                        + "</td>\n"
                        + "<td>\n"
                        + lista.get(i).getNombreMaterial() + "\n"
                        + "</td>\n"
                        + "<td>\n"
                        + lista.get(i).getOrdenTrabajo() + "\n"
                        + "</td>\n";
                htmlcode += "<td>\n";
                ArrayList<Consumo> tablaXList = new ArrayList<>(controlador.getTablaXRegistros(lista.get(i).getConsumoID()));
                for (Consumo registro : tablaXList) {
                    htmlcode += registro.getNombreMaterial2()+ ", ";  // Aquí debes ajustar la forma de visualizar el registro de acuerdo a tus necesidades
                }
                htmlcode = htmlcode.replaceAll(", $", ""); // Para remover la última coma y espacio
                htmlcode += "</td>\n"
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
