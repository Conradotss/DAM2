<%-- 
    Document   : EL
    Created on : 7 abr 2024, 12:11:15
    Author     : roica_7skl022
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Funcionalidades con EL</h1>
        <ul>
            <li>Nombre de las aplicaciones: ${pageContext.request.contextPath} </li>
            <li>Navegador del cliente: ${header["User-Agent"]}</li>
            <li>Id Sesion: ${cookie.JSESSIONID.value}</li>
            <li>Web Server: ${pageContext.servletContext.serverInfo}</li>
            <li>Valor del parametro pasado: ${param.usuario}</li>
        </ul>
        
        <a href="index.jsp">Volver al inicio</a>
    </body>
</html>
