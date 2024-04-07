package web;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/Servlet")
public class Servlet extends HttpServlet{

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //Leemos los parametros obtenido desde nuestro formulario
        String nombre = req.getParameter("usuario");
        String password = req.getParameter("password");
        System.out.println(nombre);
        System.out.println(password);
        
        //Imprimimos una pagina web improvisada dentro del servlet
        PrintWriter pw = resp.getWriter();
        pw.print("<html>");
        pw.print("<body>");
        pw.print("Usuario: " + nombre);
        pw.print("<br/>");
        pw.print("Password: " + password);
        pw.print("<body>");
        pw.print("</body>");
        pw.print("</html>");
        pw.close();
        
    }
    
    
}
