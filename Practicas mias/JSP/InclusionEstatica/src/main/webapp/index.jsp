<%-- 
    Document   : index
    Created on : 7 abr 2024, 11:28:32
    Author     : roica_7skl022
--%>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Eemplo de Incluison Estática</h1>
        <br/>
        <ul>
            <li>
                <%@include file="PAGES/Youtube.jsp" %>
            </li>
            <li>
                <%@include file="PAGES/Udemy.html" %>
            </li>
        </ul>
    </body>
</html>
