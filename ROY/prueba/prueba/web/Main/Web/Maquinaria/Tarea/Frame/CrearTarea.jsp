<%-- 
    Document   : CrearTarea
    Created on : 26-nov-2016, 2:32:09
    Author     : Angel
--%>

<%@page import="Clases.Maquinaria.Tarea.DatosTarea"%>
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

        <title><%=DatosTarea.tituloCrear%></title>
        <%=DatosAplicacion.importjs%>

        <!--Para éste jsp **************************************************************-->
        <script type="text/javascript" src="../js/CrearTarea.js"></script> 

        <script src="../../../../js/onLibJs/iban.js" type="text/javascript"></script>
        <link rel="stylesheet" href="../../../../../dist/output.css" type="text/css"/>


    </head>
    <body class="bg-white" >

        

        <jsp:include page="../Form/CrearTarea.jsp"></jsp:include>
            
           
    </body>
</html>
