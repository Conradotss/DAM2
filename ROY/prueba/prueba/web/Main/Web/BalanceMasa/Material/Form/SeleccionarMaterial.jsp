<%-- 
    Document   : BusquedaMaterial
    Created on : 15-dic-2016, 3:17:39
    Author     : OnAngel
--%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.nio.file.Paths"%>
<%@page import="java.nio.file.Path"%>
<%@page import="Clases.BalanceMasa.Material.ControladorMateriales"%>
<%@page import="Clases.BalanceMasa.Material.Material"%>
<%@page import="Clases.BalanceMasa.Material.DatosMaterial"%>
<%@page import="java.util.ArrayList"%>

<%
    Material Material = null;
    try {
        ControladorMateriales controlador = new ControladorMateriales();
        response.setContentType("text/html;charset=UTF-8");
        int Material_id = Integer.parseInt(request.getParameter("material_id"));
        //System.out.println(nombreMaterial);
        Material = controlador.getMaterial(Material_id);
    } catch (Exception e) {
        e.printStackTrace();
    }

%>

<form class="formbusqueda" action="SeleccionMaterial" name="frmSeleccionMaterial" 
      method="POST" enctype="multipart/form-data" id="frmSeleccionMaterial" style="height: 100%; width: 100%">

    <input type="hidden" name="id" id="id" value="<%=Material.getMaterial_id()%>"/>

    <!--Boton-->
    <div class="form-botones">
        <button class="btnFormAceptar" type="submit" id="btnSeleccionMaterial" title="Aceptar"></button>
        <button class="btnFormCancelar" type="button" id="btnCancelarMaterial" title="Cancelar"></button>
    </div> 
</form>
