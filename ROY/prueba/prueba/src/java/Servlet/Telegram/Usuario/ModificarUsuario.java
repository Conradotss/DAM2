/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlet.Telegram.Usuario;

import Basedatos.OnExceptionBD;
import Clases.Telegram.Usuario.ControladorUsuarios;
import Clases.Telegram.Usuario.Usuario;
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
import org.apache.tomcat.util.http.fileupload.FileItem;
import org.apache.tomcat.util.http.fileupload.FileItemFactory;
import org.apache.tomcat.util.http.fileupload.disk.DiskFileItemFactory;
import org.apache.tomcat.util.http.fileupload.servlet.ServletRequestContext;
import org.apache.tomcat.util.http.fileupload.servlet.ServletFileUpload;

/**
 *
 * @author OnAngel
 */
public class ModificarUsuario extends HttpServlet {

    private String txtAccion = "modificar";

    /**
     * Processes requests for usuarioh HTTP <code>GET</code> and
     * <code>POST</code> methods.
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

            //Recogemos todos los valores de los campos del formulario 
            int usuarioID = 0;
            String telegram = "";
            String nombre = "";

            //            System.out.println(nombre + " // " + nif_cif + " // " + direccion + " // " + cp + " // " + poblacion + " // " + provincia + " // " + 
//            telefono + " // " + movil + " // " + fax + " // " + e_mail + " // " + web + " // " + logo);

            /*FileItemFactory es una interfaz para crear FileItem*/
            FileItemFactory file_factory = new DiskFileItemFactory();

            /*ServletFileUpload esta clase convierte los input file a FileItem*/
            ServletFileUpload servlet_up = new ServletFileUpload(file_factory);

            /*sacando los FileItem del ServletFileUpload en una lista */
            servlet_up.setHeaderEncoding("UTF-8");
            List items = servlet_up.parseRequest(new ServletRequestContext(request));

            for (int i = 0; i < items.size(); i++) {
                /*FileItem representa un archivo en memoria que puede ser pasado al disco duro*/
                FileItem item = (FileItem) items.get(i);
//                System.out.println(item.getString());
                /*item.isFormField() false=input file; true=text field*/
                if (!item.isFormField()) {
//                    String usuarioArchivo = item.getContentType();
//                    if (usuarioArchivo.startsWith("image/")) {
//                        /*cual sera la ruta al archivo en el servidor*/
//                        if (crearCarpetasAplicación("Usuarios" + System.getProperty("file.separator"))) {
//                            String ruta = DatosAplicacion.dirAplicacionCarpetaPadre + "\\Usuarios\\" + item.getName();
//                            File archivo_server = new File(ruta);
//                            /*y lo escribimos en el servido*/
//                            item.write(archivo_server);
//                            imagen = ruta;
//                            String rutaProyecto = DatosAplicacion.dirAplicacionCarpetaWebapps + "\\Usuarios\\" + item.getName();
//                            Utilidades.Archivo.copiarCarpeta(ruta, rutaProyecto);
//                        }
//                    }

                } else {
                    // es un campo de formulario, podemos obtener idCampo y valor
                    String idCampo = item.getFieldName();
                    String valor = item.getString("UTF-8");

//                    System.out.println(idCampo + ": " + valor);
                    if (idCampo.equals("id")) {
                        usuarioID = Integer.parseInt(valor);
                    } else if (idCampo.equals("telegram")) {
                        telegram = valor;
                    } else if (idCampo.equals("nombre")) {
                        nombre = valor;
                    }
                }
            }

            if (items.size() > 0) {

                //Creamos objeto             
                Usuario Usuario = new Usuario(
                        usuarioID,
                        telegram,
                        nombre
                );

//            System.out.println(Usuario.toString());
                //Guardamos en la base de datos
                ControladorUsuarios controlador = new ControladorUsuarios();

                //Mensaje de guardado
                if (controlador.modificarUsuario(Usuario)) {

                    ArrayList<String> lista = new ArrayList<String>();
                    lista.add("Has modificado los datos del usuario correctamente.");

                    Gson gson = new Gson();
                    String toJson = gson.toJson(lista, ArrayList.class);
                    response.getWriter().println(toJson);
                }

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
