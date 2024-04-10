<%-- 
    Document   : CrearUsuario
    Created on : 26-nov-2016, 2:32:09
    Author     : Angel
--%>

<%@page import="Clases.Telegram.Usuario.DatosUsuario"%>
<%@page import="Clases.Recursos.DatosAplicacion"%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%
//empresa
    //permisos
    //session.setAttribute("SesionUsuario", SesionUsuario);
%>
<html>
    <head>

        <title>Admin - Usuarios</title>
        <%=DatosAplicacion.importjs%>

        <!--Para éste jsp **************************************************************-->
        <script type="text/javascript" src="../js/CrearUsuario.js"></script> 

        <script src="../../../../js/onLibJs/iban.js" type="text/javascript"></script>
        <link rel="stylesheet" href="../../../../../dist/output.css" type="text/css"/>


    </head>
    <body class="bg-white" >

       

        <jsp:include page="../Form/CrearUsuario.jsp"></jsp:include>

            
    </body>
</html>
