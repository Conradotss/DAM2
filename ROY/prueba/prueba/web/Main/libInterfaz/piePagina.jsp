<%-- 
    Document   : piePagina
    Created on : 22-nov-2016, 20:36:37
    Author     : Angel
--%>

<%@page import="Clases.Recursos.DatosAplicacion"%>
<%
                    //Obtenemos la ruta http
                    String ip = request.getRemoteAddr();
                    int puerto = request.getLocalPort();
                    ServletContext sc = this.getServletContext();
                    String nombreProyecto = sc.getContextPath();
                    String ruta = "http" +"://" + ip + ":" + puerto + nombreProyecto + "/Main/Web/";
                    String href = nombreProyecto + "/Main/Web/";
                    //out.println(ruta);
%>

<footer>    

    <div class="container">
        <div class="wrapper">
            <div class="copy">
                <div>Todos los derechos reservados  |  </div>
                <div><a href="<%=href%>info/Derechos/Privacidad.jsp">Política de privacidad</a></div>
                <br>
                <div><a href="https://www.konetic.es">www.konetic.es</a>  |  </div>
                <div><a href="mailto:info@konetic.es">info@konetic.es</a></div>
            </div>

        </div>
    </div>
</footer>

