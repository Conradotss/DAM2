<%-- 
    Document   : Usuarios
    Created on : 26-nov-2016, 17:57:32
    Author     : Angel
--%>


<%@page import="Clases.Recursos.DatosAplicacion"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page session="true" %>

<!DOCTYPE html>

<html>
    <head>

        <title>Admin - Usuarios</title>        
        <%=DatosAplicacion.importjs%>

        <!--Para éste jsp **************************************************************-->
        <script type="text/javascript" src="../js/BusquedaUsuario.js"></script> 
        <script type="text/javascript" src="../js/AdminUsuario.js"></script> 
        <link rel="stylesheet" href="../../../../../dist/output.css" type="text/css"/>

    </head>
    <body class="bg-white" >

       

            <div class="form-basic">
                <div class="form-title-row">
                    <h1>Admin - Usuarios</h1>
            </div>

            <div class="divBusqueda">
                <jsp:include page="../Form/BusquedaUsuario.jsp"></jsp:include>
                </div>

                <ul style="text-align: center;">
                    <div class="divTablaDatos" id="divTablaDatos" onload="actualizarTabla()">


                    </div>
                </ul>
            </div>
        



        </body>
    </html>



