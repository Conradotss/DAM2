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
        resp.setContentType("text/html; charset=UTF-8");
        PrintWriter pw = resp.getWriter();
        
        String nombre = req.getParameter("usuario");
        String password = req.getParameter("password");
        String tecnologias[] = req.getParameterValues("tecnologia");
        String genero = req.getParameter("genero");
        String trabajo = req.getParameter("trabajo");
        String musica[] = req.getParameterValues("musica");
        String comentario = req.getParameter("comentarios");
        
        pw.print("<html>");
        pw.print("<head>");
        pw.print("<title>Resultado Servlet</title>");
        pw.print("</head>");
        pw.print("<body>");
        pw.print("<h1>Parametros procesados por el Servlet:</h1>");
        pw.print("<table border='1'>"); 
        pw.print("<tr>");
        pw.print("<td>");
        pw.print("Usuario");
        pw.print("</td>");
        pw.print("<td>");
        pw.print(nombre);
        pw.print("</td>");
        pw.print("</tr>");
        pw.print("<tr>");
        pw.print("<td>");
        pw.print("Password");
        pw.print("</td>");
        pw.print("<td>");
        pw.print(password);
        pw.print("</td>");
        pw.print("</tr>");
        pw.print("<tr>");
        pw.print("<td>");
        pw.print("Tecnologias");
        pw.print("</td>");
        pw.print("<td>");
        for (String tecnologia: tecnologias) {
            pw.print(tecnologia);
            pw.print("-");
        }
        
        pw.print("<tr>");
        pw.print("<td>");
        pw.print("Genero");
        pw.print("</td>");
        pw.print("<td>");
        pw.print(genero);
        pw.print("</td>");
        pw.print("</tr>");
        
        pw.print("<tr>");
        pw.print("<td>");
        pw.print("Trabajo");
        pw.print("</td>");
        pw.print("<td>");
        pw.print(trabajo);
        pw.print("</td>");
        pw.print("</tr>");
        
        pw.print("<tr>");
        pw.print("<td>");
        pw.print("Musica");
        pw.print("</td>");
        pw.print("<td>");
        if (musica != null) {
            for (String music : musica) {
            pw.print(music);
            pw.print(" ");
        }
        }else{
            pw.print("Musica favorita no seleccionada");
        }
        
        pw.print("</td>");
        pw.print("</tr>");
        pw.print("<tr>");
        pw.print("<td>");
        pw.print("Comentarios");
        pw.print("</td>");
        pw.print("<td>");
        if (comentario != null || comentario == "Escribir un texto") {
            pw.print(comentario);
        }else{
            pw.print("Comentario vacio");
        }
        pw.print("</td>");
        pw.print("</tr>");
        
        
        pw.print("</table>");
        pw.print("</body>");
        pw.print("</html>");
    }
    
    
}
