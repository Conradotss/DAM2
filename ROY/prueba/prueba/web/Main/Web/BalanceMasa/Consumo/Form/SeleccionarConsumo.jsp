<%-- 
    Document   : BusquedaConsumo
    Created on : 15-dic-2016, 3:17:39
    Author     : OnAngel
--%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.nio.file.Paths"%>
<%@page import="java.nio.file.Path"%>
<%@page import="Clases.BalanceMasa.Consumo.ControladorConsumos"%>
<%@page import="Clases.BalanceMasa.Consumo.Consumo"%>
<%@page import="Clases.BalanceMasa.Consumo.DatosConsumo"%>
<%@page import="java.util.ArrayList"%>

<%
    Consumo Consumo = null;
    try {
        ControladorConsumos controlador = new ControladorConsumos();
        response.setContentType("text/html;charset=UTF-8");
        int Consumo_id = Integer.parseInt(request.getParameter("consumo_id"));
        //System.out.println(nombreConsumo);
        Consumo = controlador.getConsumo(Consumo_id);
    } catch (Exception e) {
        e.printStackTrace();
    }

%>

<form class="formbusqueda" action="SeleccionConsumo" name="frmSeleccionConsumo" 
      method="POST" enctype="multipart/form-data" id="frmSeleccionConsumo" style="height: 100%; width: 100%">

    <input type="hidden" name="id" id="id" value="<%=Consumo.getConsumoID()%>"/>

    <!--Boton-->
    <div class="form-botones">
        <button class="btnFormAceptar" type="submit" id="btnSeleccionConsumo" title="Aceptar"></button>
        <button class="btnFormCancelar" type="button" id="btnCancelarConsumo" title="Cancelar"></button>
    </div> 
</form>
