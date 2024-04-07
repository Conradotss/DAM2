package web;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

@WebServlet("/Servlet")
public class Servlet extends HttpServlet{

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/html; charset=UTF-8");
        
        HttpSession sesion = req.getSession();
        
        List<String> articulos = (List<String>) sesion.getAttribute("articulos");
        
        
        if(articulos == null){
            articulos = new ArrayList<>();
            sesion.setAttribute("articulos", articulos);
        }
        
          String articulo = req.getParameter("nombre");
        
        if(articulo != null && !articulo.trim().equals("")){
            articulos.add(articulo);
        }
        
        try (PrintWriter pw = resp.getWriter()) {
            pw.print("<h1>Lista de articulos</h1>");
            pw.print("<br>");
            for (String articulo1 : articulos) {
                pw.print("<li>" + articulo1 + "</li>");
            }
            pw.print("<br>");
            pw.print("<a href='/CarritoCompraServlet'>Volver a inicio</a>");
        }
    }
    
}
