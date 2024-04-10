<%-- 
    Document   : Materiales
    Created on : 26-nov-2016, 17:57:32
    Author     : Angel
--%>


<%@page import="Clases.Recursos.DatosAplicacion"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page session="true" %>

<!DOCTYPE html>

<html>
    <head>

        <title>Admin - Materiales</title>        
        <%=DatosAplicacion.importjs%>

        <!--Para éste jsp **************************************************************-->
        <script type="text/javascript" src="../js/BusquedaMaterial.js"></script> 
        <script type="text/javascript" src="../js/AdminMaterial.js"></script> 
        <link rel="stylesheet" href="../../../../../dist/output.css" type="text/css"/>

    </head>
    <body class="bg-white" >

        

            <div class="form-basic">
                <div class="form-title-row">
                    <h1>Admin - Materiales</h1>
            </div>

            <div class="divBusqueda">
                <jsp:include page="../Form/BusquedaMaterial.jsp"></jsp:include>
                </div>

                <ul style="text-align: center;">
                    <div class="divTablaDatos" id="divTablaDatos" onload="actualizarTabla()">


                    </div>
                </ul>
            </div>
        



        </body>
    </html>



