<%-- 
    Document   : CrearBot
    Created on : 26-nov-2016, 2:32:09
    Author     : Angel
--%>

<%@page import="Clases.Telegram.Bot.DatosBot"%>
<%@page import="Clases.Recursos.DatosAplicacion"%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%
//empresa
    //permisos
    //session.setAttribute("SesionBot", SesionBot);
%>
<html>
    <head>

        <title>Admin - Bots</title>
        <%=DatosAplicacion.importjs%>

        <!--Para éste jsp **************************************************************-->
        <script type="text/javascript" src="../js/CrearBot.js"></script> 

        <script src="../../../../js/onLibJs/iban.js" type="text/javascript"></script>
        <link rel="stylesheet" href="../../../../../dist/output.css" type="text/css"/>


    </head>
    <body class="bg-white" >

       

        <jsp:include page="../Form/CrearBot.jsp"></jsp:include>

           
    </body>
</html>
