<%-- 
    Document   : CrearTarea
    Created on : 26-nov-2016, 2:32:09
    Author     : Angel
--%>

<%@page import="Clases.BalanceMasa.Ubicacion.DatosUbicacion"%>
<%@page import="Clases.Recursos.DatosAplicacion"%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<html>
    <head>

        <title>Modificar</title>
        <%=DatosAplicacion.importjs%>

        <!--Para éste jsp **************************************************************-->
        <script type="text/javascript" src="../js/ModificarUbicacion.js"></script>  

        <script src="../../../../js/onLibJs/iban.js" type="text/javascript"></script>
        <link rel="stylesheet" href="../../../../../dist/output.css" type="text/css"/>

    </head>
    <body class="bg-white" >

       

        <jsp:include page="../Form/ModificarUbicacion.jsp"></jsp:include>

          
        </body>
    </html>

