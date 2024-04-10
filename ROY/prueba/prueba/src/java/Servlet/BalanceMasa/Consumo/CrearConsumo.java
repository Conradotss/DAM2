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
import Config.Telegram;
import Thread.ThreadPrueba;
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
import org.telegram.telegrambots.meta.TelegramBotsApi;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;
import org.telegram.telegrambots.updatesreceivers.DefaultBotSession;

/**
 *
 * @author Angel
 */
public class CrearConsumo extends HttpServlet {

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
        try {

            //Recogemos todos los valores de los campos del formulario        
            double cantidad = 0;
            String lot = "";
            int bm_material = 0;
            int orden = 0;

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
                /*item.isFormField() false=input file; true=text field*/
                if (!item.isFormField()) {

                } else {
                    // es un campo de formulario, podemos obtener idCampo y valor
                    String idCampo = item.getFieldName();
                    String valor = item.getString("UTF-8");

                    if (idCampo.equals("cantidad")) {
                        cantidad = Integer.parseInt(valor);
                    } else if (idCampo.equals("lot")) {
                        lot = valor;

                    } else if (idCampo.equals("bm_material")) {
                        bm_material = Integer.parseInt(valor);

                    } else if (idCampo.equals("orden")) {
                        orden = Integer.parseInt(valor);
                    } 
                }
            }

            if (items.size() > 0) {

                //Creamos objeto             
                Consumo Consumo = new Consumo(
                        0,
                        cantidad,
                        lot,
                        bm_material,
                        orden
                );

//            System.out.println(Consumo.toString());
                //Guardamos en la base de datos
                ControladorConsumos controlador = new ControladorConsumos();

                //Mensaje de guardado
                if (controlador.crearConsumo(Consumo)) {

                    ArrayList<String> lista = new ArrayList<String>();
                    lista.add("Has guardado los datos de " + Consumo.getCantidad() + " correctamente.");
                    Gson gson = new Gson();
                    String toJson = gson.toJson(lista, ArrayList.class);
                    response.getWriter().println(toJson);

                }

//                ThreadPrueba hilo = new ThreadPrueba();
//                hilo.start();  // Comienza el hilo, que se ejecutará de forma intermitente
//                // Espera 30 segundos antes de detener el hilo
//                try {
//                    Thread.sleep(20000);
//                } catch (InterruptedException e) {
//                    e.printStackTrace();
//                }
//
//                hilo.detener();  // Detiene el hilo

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
