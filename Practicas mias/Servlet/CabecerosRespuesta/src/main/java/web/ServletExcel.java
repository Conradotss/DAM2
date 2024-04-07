package web;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/ServletExcel")
public class ServletExcel extends HttpServlet{

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
           resp.setContentType("application/vnd.ms-excel");
           resp.setHeader("Content-Disposition", "attachment;filename=excelEjemplo.xls");
           
           resp.setHeader("Pragma", "no-cache");
           resp.setHeader("Cache-Control", "no-store");
           resp.setDateHeader("Expires", -1);
           
           PrintWriter pw = resp.getWriter();
           
           pw.println("\tValores");
           pw.println("\t1");
           pw.println("\t2");
           pw.println("Total \tSUMA=(b2:b3)");
           pw.close();
    }
    
}
