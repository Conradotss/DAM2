<%-- 
    Document   : CrearTarea
    Created on : 26-nov-2016, 2:32:09
    Author     : Angel
--%>

<%@page import="Clases.BalanceMasa.Registro.DatosRegistro"%>
<%@page import="Clases.Recursos.DatosAplicacion"%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<html>
    <head>

        <title>Registro</title>
        <%=DatosAplicacion.importjs%>

        <!--Para éste jsp **************************************************************-->
        <script type="text/javascript" src="../js/ModificarRegistro.js"></script>  

        <script src="../../../../js/onLibJs/iban.js" type="text/javascript"></script>
        <link rel="stylesheet" href="../../../../../dist/output.css" type="text/css"/>

    </head>
    <body class="bg-white" >

        

        <jsp:include page="../Form/ModificarRegistro.jsp"></jsp:include>

          
        </body>
    </html>

