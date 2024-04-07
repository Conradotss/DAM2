package web;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

//Este sera el nombre de la pagina que vamos a crear con Servlet
@WebServlet("/HolaMundo")
public class Servlet extends HttpServlet{
    //Podemos crear una servlet desde una pagina sencilla de java extendiendo desde la clase HttpServlet

    //Llamamos al metodo incluido en la clase HttpServlet para enviar las respuestas a la pagina web
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //Definimos el tipo de contenido que enviaremos en este caso sera codigo html
        resp.setContentType("text/html;charset=UTF-8");
        PrintWriter pw = resp.getWriter();
        pw.println("Hola desde aqui en servlet");
    }
    
    
    
}
