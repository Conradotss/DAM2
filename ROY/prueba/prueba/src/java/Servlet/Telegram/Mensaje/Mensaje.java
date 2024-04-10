/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlet.Telegram.Mensaje;

import Basedatos.OnExceptionBD;
import Clases.Telegram.Mensaje.ControladorMensajes;
import Clases.Telegram.Mensaje.Mensaje2;
import Clases.Onlog4j.OnLog4j;
import Config.Telegram;
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
public class Mensaje extends HttpServlet {

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
            String usuario = "";
            String botEscribir = "";
            String nombre = "";
            String token = "";

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

                    if (idCampo.equals("usuario")) {
                        usuario = valor;
                    }

                    if (idCampo.equals("token")) {
                        String[] parts = valor.split(",");
                        token = parts[0];
                        botEscribir = parts[1];
                    }

                    if (idCampo.equals("nombre")) {
                        nombre = valor;
                    }

                }
            }

            if (items.size() > 0) {

                //Creamos objeto             
//                Mensaje2 Mensaje = new Mensaje2(
//                        nombre
//                );
//            System.out.println(Consumo.toString());
                //Guardamos en la base de datos
//                ControladorMensajes controlador = new ControladorMensajes();
                //Mensaje de guardado
                if (!nombre.isEmpty()) {
                    try {
                        TelegramBotsApi botsApi = new TelegramBotsApi(DefaultBotSession.class);
//                        String botUsername = "";
//                        String botToken = "";
//                        String chatId = "";
                        Telegram bot = new Telegram(botEscribir, token);
                        botsApi.registerBot(bot);
                        bot.onStart(nombre, usuario);

                    } catch (TelegramApiException e) {
                        e.printStackTrace();
                    }

                    ArrayList<String> lista = new ArrayList<String>();
                    lista.add("Has enviado el mensaje correctamente al usuario");
                    Gson gson = new Gson();
                    String toJson = gson.toJson(lista, ArrayList.class);
                    response.getWriter().println(toJson);
                }

            }

        } catch (Exception ex) {
            ArrayList<String> lista = new ArrayList<String>();
            lista.add("Error");

            String msgError = "Error al crear los datos:\n\n";
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
        //
        //
//            System.out.println(toJson);
        //

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
