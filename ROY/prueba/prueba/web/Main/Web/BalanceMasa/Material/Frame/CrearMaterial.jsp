<%-- 
    Document   : CrearMaterial
    Created on : 26-nov-2016, 2:32:09
    Author     : Angel
--%>

<%@page import="Clases.BalanceMasa.Material.DatosMaterial"%>
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

        <title>Admin - Materiales</title>
        <%=DatosAplicacion.importjs%>

        <!--Para éste jsp **************************************************************-->
        <script type="text/javascript" src="../js/CrearMaterial.js"></script> 

        <script src="../../../../js/onLibJs/iban.js" type="text/javascript"></script>
        <link rel="stylesheet" href="../../../../../dist/output.css" type="text/css"/>


    </head>
    <body class="bg-white" >

       

        <jsp:include page="../Form/CrearMaterial.jsp"></jsp:include>

           
    </body>
</html>
