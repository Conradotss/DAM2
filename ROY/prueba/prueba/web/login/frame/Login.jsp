<%-- 
    Document   : CrearLogin
    Created on : 26-nov-2016, 2:32:09
    Author     : Angel
--%>

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

        <title>Admin - Inicio</title>
        <%=DatosAplicacion.importjs%>

        <!--Para éste jsp **************************************************************
        <script type="text/javascript" src="../js/Login.js"></script> -->

        <script src="../../../../js/onLibJs/iban.js" type="text/javascript"></script>
        <link rel="stylesheet" href="../../dist/output.css" type="text/css"/>
        <script src="node_modules/flowbite/dist/flowbite.min.js"></script>

    </head>
    <body class="bg-gray-200">



        <jsp:include page="/login/form/Login.jsp"></jsp:include>


    </body>
</html>
<script>
    document.getElementById("btnCancelarLogin").addEventListener("click", function () {
        window.location.href = "../../index.jsp";
    });

</script>
