<%-- 
    Document   : Materiales
    Created on : 26-nov-2016, 17:57:32
    Author     : Angel
--%>

<%@page import="Clases.BalanceMasa.Material.DatosMaterial"%>
<%@page import="Clases.Recursos.DatosAplicacion"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>

<html>
    <head>

        <title>Seleccionar materiales</title>        
        <%=DatosAplicacion.importjs%>

        <!--Para éste jsp **************************************************************-->
        <script type="text/javascript" src="../js/BusquedaMaterial3.js"></script> 
        <script type="text/javascript" src="../js/BusquedaMaterial2.js"></script> 
        <script type="text/javascript" src="../js/AdminMaterial2.js"></script> 
        <link rel="stylesheet" href="../../../../../dist/output.css" type="text/css"/>

    </head>
    <body class="bg-white" >

        

            <div class="form-basic">
                <div class="form-title-row">
                    <h1>Seleccionar materiales</h1>
                </div>



                <ul style="text-align: center;">
                    <div class="divTablaDatos" id="divTablaDatos" onload="actualizarTabla()">


                    </div>
                </ul>
                <div class="divBusqueda">
                <jsp:include page="../Form/SeleccionarMaterial.jsp"></jsp:include>
                </div>
            </div>
           



    </body>
</html>



